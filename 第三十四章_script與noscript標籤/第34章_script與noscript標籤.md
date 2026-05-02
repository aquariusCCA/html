# `script` 與 `noscript` 標籤

> - 所屬章節：第三十四章｜`script` 與 `noscript` 標籤
> - 關鍵字：`script`、`src`、JavaScript、阻塞解析、`defer`、`async`、`type="module"`、`nomodule`、`noscript`、腳本載入
> - 建議回查情境：想知道 JavaScript 檔案怎麼接進 HTML、腳本放哪裡、`defer` 和 `async` 差在哪、`type="module"` 怎麼理解、`noscript` 能處理什麼情境

---

## 本節導讀

HTML 負責描述頁面結構，JavaScript 負責處理很多動態行為，例如操作 DOM、監聽事件、送出請求、更新畫面。

`<script>` 就是 HTML 和 JavaScript 之間最直接的連接點。

這一篇的重點不是學 JavaScript 語法，而是理解：

- HTML 如何載入 JavaScript。
- 瀏覽器遇到腳本時，會不會暫停 HTML 解析。
- `defer`、`async`、`type="module"` 分別適合什麼情境。
- 腳本不可用時，`<noscript>` 可以提供什麼退路。
- `<noscript>` 不能處理哪些 JavaScript 錯誤。

---

## 整理說明

- 原始學習重點：知道 HTML 可以透過 `<script>` 載入 JavaScript。
- 本次整理方向：補強腳本載入流程、阻塞解析、`defer`、`async`、模組腳本、`nomodule` 與 `<noscript>` 的使用邊界。
- 補強內容：
  - 區分「下載腳本」與「執行腳本」。
  - 補上 `defer` 與 `async` 的精準差異。
  - 補上 `type="module"` 的基本特性。
  - 補上 `<noscript>` 的限制。
  - 加入實務選擇建議與常見誤區。
- 閱讀前提：已理解 HTML 基本結構、路徑、DOM 元素與外部資源載入概念。

---

## 你會在這篇學到什麼

- `<script>` 的兩種常見寫法：內嵌腳本與外部腳本。
- 為什麼傳統腳本可能阻塞 HTML 解析。
- 腳本放在 `body` 結尾和放在 `head` 搭配 `defer` 的差別。
- `defer` 和 `async` 的下載、執行時機與順序差異。
- `type="module"` 可以先怎麼理解。
- `nomodule` 在相容性策略中扮演什麼角色。
- `<noscript>` 的用途、限制與不適合處理的情境。

---

## 30 秒複習入口

- `<script>` 可以寫內嵌 JavaScript，也可以用 `src` 載入外部 JavaScript 檔案。
- 傳統 `<script src="..."></script>` 可能會阻塞 HTML 解析。
- 把傳統腳本放在 `body` 結尾，可以降低腳本太早執行而找不到 DOM 的問題。
- `defer` 會讓外部腳本不阻塞 HTML 解析地下載，並在 HTML 解析完成後、`DOMContentLoaded` 前依序執行。
- `async` 會讓外部腳本不阻塞 HTML 解析地下載，但下載完成後會盡快執行，不保證順序。
- `type="module"` 用來載入 JavaScript 模組，預設具有類似 `defer` 的延後執行特性。
- `nomodule` 通常用來提供舊瀏覽器備援腳本。
- `<noscript>` 用來提供腳本被停用或瀏覽器不支援腳本時的替代內容。
- `<noscript>` 不會處理 JavaScript 語法錯誤、執行錯誤、API 失敗或套件載入失敗。

---

## 速查區

### 1. 腳本載入方式

| 寫法 | 說明 | 常見用途 |
|---|---|---|
| `<script>...</script>` | 直接在 HTML 裡寫 JavaScript | 小型測試、少量初始化設定 |
| `<script src="./main.js"></script>` | 載入外部 JavaScript 檔案 | 傳統外部腳本 |
| `<script src="./main.js" defer></script>` | 不阻塞解析地下載，HTML 解析完成後依序執行 | 一般頁面常見推薦寫法 |
| `<script src="./analytics.js" async></script>` | 不阻塞解析地下載，下載完成後盡快執行 | 統計、廣告、第三方獨立腳本 |
| `<script type="module" src="./main.js"></script>` | 載入 JavaScript 模組 | 現代前端專案入口 |
| `<script nomodule src="./legacy.js"></script>` | 給不支援 module 的舊瀏覽器使用 | 舊瀏覽器備援 |

---

### 2. `defer` 和 `async` 對照表

| 屬性 | 下載時是否阻塞 HTML 解析 | 執行時機 | 是否保留順序 | 是否適合依賴 DOM | 是否適合腳本之間有依賴 |
|---|---:|---|---:|---:|---:|
| 無屬性的傳統腳本 | 可能會 | 解析到腳本時下載並執行 | 是 | 不一定 | 可以，但可能阻塞 |
| `defer` | 否 | HTML 解析完成後、`DOMContentLoaded` 前 | 是 | 是 | 是 |
| `async` | 否 | 下載完成後盡快執行 | 否 | 不一定 | 否 |
| `type="module"` | 否 | 預設類似 `defer` | 通常依模組依賴關係處理 | 是 | 是，透過 `import` / `export` 管理 |

---

### 3. 實務上怎麼選？

| 情境 | 建議寫法 | 原因 |
|---|---|---|
| 一般自己寫的頁面主程式 | `<script src="./main.js" defer></script>` | 不阻塞 HTML 解析，也能等 DOM 解析完成後再執行 |
| 多個傳統腳本有依賴順序 | 多個外部腳本都加 `defer` | `defer` 會保留腳本在 HTML 中出現的順序 |
| 第三方統計、廣告、追蹤工具 | `async` | 通常獨立運作，不需要依賴你的主程式 |
| 現代前端專案入口 | `type="module"` | 支援 `import` / `export`，適合模組化開發 |
| 要支援舊瀏覽器 | `type="module"` + `nomodule` | 現代瀏覽器載入 module，舊瀏覽器載入 legacy script |
| 腳本停用時給使用者提示 | `<noscript>` | 提醒使用者啟用 JavaScript 或提供基本替代內容 |

---

## 正文筆記

## 1. `<script>` 在做什麼？

`<script>` 用來在 HTML 文件中嵌入或載入可執行的腳本，最常見的腳本語言是 JavaScript。

常見寫法有兩種：

1. 內嵌腳本。
2. 外部腳本。

---

### 1.1 內嵌腳本

```html
<script>
  console.log("Hello HTML");
</script>
```

這種寫法是直接把 JavaScript 寫在 HTML 裡。

適合：

- 小型測試。
- 範例展示。
- 少量初始化設定。

不過在實務專案中，如果 JavaScript 程式碼變多，通常不建議大量寫在 HTML 裡，因為會讓結構與邏輯混在一起，維護性較差。

---

### 1.2 外部腳本

```html
<script src="./js/main.js"></script>
```

這種寫法會透過 `src` 屬性載入外部 JavaScript 檔案。

實務專案通常優先使用外部腳本，原因是：

- HTML 結構和 JavaScript 邏輯可以分開管理。
- JavaScript 檔案可以被瀏覽器快取。
- 多個頁面可以共用同一份腳本。
- 比較容易搭配打包工具，例如 Vite、Webpack。

> 注意：一般不要在有 `src` 的 `<script>` 裡面再寫內嵌 JavaScript。  
> 也就是說，不建議這樣寫：

```html
<script src="./js/main.js">
  console.log("這段不應該寫在這裡");
</script>
```

比較好的做法是二選一：

```html
<script src="./js/main.js"></script>
```

或：

```html
<script>
  console.log("Hello HTML");
</script>
```

---

## 2. 腳本放在 HTML 哪裡？

`<script>` 可以放在 `<head>`，也可以放在 `<body>`。

但是放置位置會影響：

- HTML 解析流程。
- JavaScript 執行時機。
- 程式是否能順利取得 DOM 元素。
- 頁面初始顯示速度。

---

### 2.1 傳統寫法：放在 `body` 結尾

```html
<body>
  <h1 id="title">Hello</h1>

  <script src="./js/main.js"></script>
</body>
```

這種寫法的好處是：

- 瀏覽器會先解析前面的 HTML。
- 腳本執行時，大部分 DOM 元素已經存在。
- 比較不容易發生「JavaScript 找不到元素」的問題。

例如：

```html
<body>
  <h1 id="title">Hello</h1>

  <script>
    const title = document.querySelector("#title");
    console.log(title.textContent);
  </script>
</body>
```

這段通常可以正常執行，因為 `<h1 id="title">` 已經先被解析出來。

---

### 2.2 現代常見寫法：放在 `head`，但加上 `defer`

```html
<head>
  <script src="./js/main.js" defer></script>
</head>
```

這種寫法的好處是：

- 瀏覽器可以比較早發現並開始下載 JavaScript 檔案。
- 下載腳本時不會阻塞 HTML 解析。
- 腳本會等 HTML 文件解析完成後才執行。

所以，現代頁面常見的寫法是：

```html
<head>
  <script src="./js/main.js" defer></script>
</head>
```

而不是單純把傳統腳本直接放在 `<head>`：

```html
<head>
  <script src="./js/main.js"></script>
</head>
```

後者可能會阻塞頁面解析，也可能讓腳本太早執行而找不到後面的 DOM 元素。

---

## 3. 傳統腳本為什麼可能阻塞？

當瀏覽器解析 HTML 時，如果遇到傳統腳本：

```html
<script src="./js/main.js"></script>
```

瀏覽器通常需要：

1. 暫停 HTML 解析。
2. 下載 `main.js`。
3. 執行 `main.js`。
4. 繼續解析後面的 HTML。

如果 JavaScript 檔案很大，或網路很慢，頁面解析就可能被卡住。

---

### 3.1 為什麼瀏覽器要停下來？

因為 JavaScript 有能力改變目前的 HTML 文件。

例如：

```html
<script>
  document.write("<h1>Inserted by JavaScript</h1>");
</script>
```

或：

```html
<script>
  const title = document.querySelector("#title");
  if (title) {
    title.textContent = "Changed";
  }
</script>
```

瀏覽器不能完全假設 JavaScript 不會影響後面的 HTML 結構，所以傳統腳本在解析流程中會有阻塞特性。

---

### 3.2 阻塞的核心問題

傳統腳本的問題不是「不能用」，而是：

- 腳本可能讓 HTML 解析暫停。
- 腳本太早執行時，可能找不到尚未解析出來的 DOM。
- 腳本下載太慢時，使用者可能看到空白或不完整頁面。
- 多個腳本依序載入時，頁面啟動速度可能變慢。

所以實務上才會出現兩種常見解法：

1. 把腳本放在 `body` 結尾。
2. 使用 `defer` 或 `type="module"`。

---

## 4. `defer` 怎麼理解？

`defer` 的意思可以先理解成：

> 先下載腳本，但不要馬上執行。  
> 等 HTML 文件解析完成後，再按照順序執行。

範例：

```html
<head>
  <script src="./js/vendor.js" defer></script>
  <script src="./js/main.js" defer></script>
</head>
```

---

### 4.1 `defer` 的特點

`defer` 有幾個重要特點：

- 下載腳本時，不會阻塞 HTML 解析。
- 腳本會等 HTML 文件解析完成後才執行。
- 多個 `defer` 腳本會保留在 HTML 中出現的順序。
- `DOMContentLoaded` 會等 `defer` 腳本執行完成後才觸發。
- `defer` 通常搭配外部腳本 `src` 使用。

也就是說：

```html
<script src="./js/vendor.js" defer></script>
<script src="./js/main.js" defer></script>
```

即使 `main.js` 比 `vendor.js` 先下載完成，瀏覽器仍然會按照 HTML 中的順序執行：

```text
vendor.js → main.js
```

所以如果 `main.js` 依賴 `vendor.js`，使用 `defer` 通常是合理的。

---

### 4.2 `defer` 和放在 `body` 結尾有什麼不同？

兩者都可以避免腳本太早操作 DOM。

但是差別在於：

| 寫法 | 下載時機 | 執行時機 | 特點 |
|---|---|---|---|
| 放在 `body` 結尾 | 瀏覽器解析到那裡才開始下載 | 下載完成後執行 | 簡單直覺，但腳本可能比較晚開始下載 |
| 放在 `head` 加 `defer` | 瀏覽器較早發現並開始下載 | HTML 解析完成後執行 | 較早下載，不阻塞解析，順序穩定 |

因此，現代實務中常見：

```html
<head>
  <script src="./js/main.js" defer></script>
</head>
```

---

### 4.3 `defer` 的常見誤會

#### 誤會一：`defer` 可以讓所有腳本延後

不完全正確。

`defer` 主要用在外部腳本：

```html
<script src="./js/main.js" defer></script>
```

不要把它當成控制內嵌腳本執行時機的主要工具。

例如：

```html
<script defer>
  console.log("inline script");
</script>
```

這不是實務上推薦的用法。  
如果要控制內嵌程式碼執行時機，通常會改用事件、函式封裝，或直接把程式放到外部檔案。

---

#### 誤會二：`defer` 會等整個頁面所有資源都載入完

不完全正確。

`defer` 主要是等 HTML 文件解析完成，不是等所有圖片、影片、字型都載入完成。

如果你需要等圖片等資源全部載入，通常要用 `window.onload` 或其他資源載入事件。

---

## 5. `async` 怎麼理解？

`async` 的意思可以先理解成：

> 先不阻塞 HTML 解析地下載腳本。  
> 但只要腳本下載完成，就盡快執行。  
> 不保證執行順序。

範例：

```html
<script src="https://example.com/analytics.js" async></script>
```

---

### 5.1 `async` 的特點

`async` 有幾個重要特點：

- 下載腳本時，不會阻塞 HTML 解析。
- 腳本下載完成後會盡快執行。
- 多個 `async` 腳本不保證執行順序。
- 不適合用在彼此有依賴關係的腳本。
- 不適合用在一定要等 DOM 完整解析後才執行的主程式。

---

### 5.2 `async` 的「不阻塞」要精準理解

`async` 的「不阻塞」主要是指：

> 下載腳本時，不阻塞 HTML 解析。

但是當腳本下載完成並開始執行時，瀏覽器仍然需要執行這段 JavaScript。  
如果此時 HTML 還沒有解析完，腳本執行仍可能短暫中斷 HTML 解析。

所以 `async` 的重點不是「完全不影響解析」，而是：

> 下載不阻塞，執行時機不固定。

---

### 5.3 什麼時候適合用 `async`？

`async` 適合用在獨立腳本，例如：

- 網站流量統計。
- 廣告腳本。
- 第三方追蹤工具。
- 不依賴頁面主程式的外部工具。

例如：

```html
<script src="https://example.com/analytics.js" async></script>
```

這類腳本通常不需要依賴你的 `main.js`，也不需要被你的程式依賴，所以可以使用 `async`。

---

### 5.4 什麼時候不要用 `async`？

如果腳本之間有依賴順序，通常不要用 `async`。

例如：

```html
<script src="./js/library.js" async></script>
<script src="./js/main.js" async></script>
```

如果 `main.js` 依賴 `library.js`，這樣就有風險。

因為 `async` 不保證誰先執行。  
可能發生：

```text
main.js 先執行
library.js 後執行
```

這時候 `main.js` 可能會找不到它需要的函式或變數。

這種情況比較適合用：

```html
<script src="./js/library.js" defer></script>
<script src="./js/main.js" defer></script>
```

---

## 6. `type="module"` 是什麼？

現代 JavaScript 可以使用模組系統。

在 HTML 中，可以用 `type="module"` 載入 JavaScript 模組：

```html
<script type="module" src="./js/main.js"></script>
```

---

### 6.1 先用 HTML 角度理解 `module`

從 HTML 角度來看，`type="module"` 代表：

- 這份 JavaScript 會被當成模組處理。
- 模組可以使用 `import` / `export`。
- 模組腳本預設具有類似 `defer` 的延後執行特性。
- 模組有自己的作用域，不會把頂層變數直接掛到全域。
- 模組預設使用嚴格模式。

例如：

```js
// main.js
import { add } from "./math.js";

console.log(add(1, 2));
```

HTML 中載入：

```html
<script type="module" src="./js/main.js"></script>
```

---

### 6.2 `type="module"` 和 `defer` 的關係

一般情況下，模組腳本不需要再特別加 `defer`。

例如：

```html
<script type="module" src="./js/main.js"></script>
```

通常就可以，不需要寫成：

```html
<script type="module" src="./js/main.js" defer></script>
```

因為模組腳本本身預設就有延後執行特性。

---

### 6.3 模組腳本和傳統腳本的差異

| 比較項目 | 傳統腳本 | 模組腳本 |
|---|---|---|
| 寫法 | `<script src="./main.js"></script>` | `<script type="module" src="./main.js"></script>` |
| 是否支援 `import` / `export` | 否 | 是 |
| 頂層作用域 | 容易影響全域 | 模組作用域 |
| 預設是否類似 `defer` | 否 | 是 |
| 是否預設嚴格模式 | 否 | 是 |

---

### 6.4 什麼時候會看到 `type="module"`？

如果你使用現代前端工具或框架，很常看到：

```html
<script type="module" src="/src/main.ts"></script>
```

例如 Vite 專案的 `index.html` 通常會用這種方式載入前端入口檔案。

先不用急著把所有模組機制一次學完。  
在 HTML 階段，你只要先知道：

> `type="module"` 是現代 JavaScript 模組化程式的入口寫法。

---

## 7. `nomodule` 先怎麼理解？

`nomodule` 通常用在相容性策略。

範例：

```html
<script type="module" src="./modern.js"></script>
<script nomodule src="./legacy.js"></script>
```

可以簡單理解成：

- 支援 JavaScript module 的現代瀏覽器會載入 `modern.js`。
- 不支援 JavaScript module 的舊瀏覽器會載入 `legacy.js`。

---

### 7.1 為什麼需要 `nomodule`？

因為現代瀏覽器支援比較新的 JavaScript 語法和模組系統。  
舊瀏覽器可能不支援。

所以有些專案會準備兩份腳本：

| 腳本 | 給誰使用 |
|---|---|
| `modern.js` | 現代瀏覽器 |
| `legacy.js` | 舊瀏覽器 |

寫法如下：

```html
<script type="module" src="./modern.js"></script>
<script nomodule src="./legacy.js"></script>
```

不過一般初學 HTML 不需要急著使用 `nomodule`。  
看到它時，只要知道它是「舊瀏覽器備援策略」即可。

---

## 8. `<noscript>` 在做什麼？

`<noscript>` 用來提供腳本不可用時的替代內容。

範例：

```html
<noscript>
  <p>此頁面需要啟用 JavaScript 才能完整使用。</p>
</noscript>
```

當使用者的瀏覽器停用 JavaScript，或瀏覽器不支援腳本時，`<noscript>` 裡面的內容就可能顯示出來。

---

### 8.1 `<noscript>` 常見用途

`<noscript>` 常用於：

- 提醒使用者啟用 JavaScript。
- 提供基本替代連結。
- 在高度依賴 JavaScript 的頁面上顯示警告。
- 在表單或功能頁提供最簡單的退路說明。

例如：

```html
<noscript>
  <p>你的瀏覽器目前停用了 JavaScript，部分功能可能無法使用。</p>
  <p><a href="/basic-search.html">前往基本搜尋頁面</a></p>
</noscript>
```

---

### 8.2 `<noscript>` 放在哪裡？

初學者最常見、最安全的做法是放在 `<body>` 裡：

```html
<body>
  <noscript>
    <p>請啟用 JavaScript 以使用完整功能。</p>
  </noscript>

  <main>
    ...
  </main>
</body>
```

`<noscript>` 也可以出現在 `<head>` 中，但在 `<head>` 中可放的內容類型比較受限制。  
初學階段先記住：

> 想顯示一段提示給使用者看，通常把 `<noscript>` 放在 `<body>` 裡即可。

---

## 9. `<noscript>` 不能做什麼？

`<noscript>` 不是 JavaScript 錯誤處理工具。

它處理的是：

> 腳本被停用或瀏覽器不支援腳本。

它不處理：

- JavaScript 語法錯誤。
- JavaScript 執行時錯誤。
- API 請求失敗。
- 第三方套件載入失敗。
- 某個按鈕事件沒有綁定成功。
- 使用者操作造成的資料錯誤。

---

### 9.1 錯誤情境比較

| 情境 | `<noscript>` 是否會處理？ | 正確處理方式 |
|---|---:|---|
| 使用者停用 JavaScript | 會 | `<noscript>` 提示或替代內容 |
| 瀏覽器不支援腳本 | 會 | `<noscript>` 提示或替代內容 |
| JavaScript 寫錯語法 | 不會 | 修正程式、錯誤監控 |
| API 請求失敗 | 不會 | 顯示錯誤狀態、重試機制 |
| 套件載入失敗 | 不會 | 錯誤處理、備援設計 |
| DOM 查詢不到元素 | 不會 | 調整腳本執行時機或程式防呆 |

---

### 9.2 `<noscript>` 和漸進增強的差別

`<noscript>` 只能提供腳本不可用時的替代內容。

更完整的設計思維是「漸進增強」。

也就是：

1. 先讓基礎 HTML 可以提供基本內容或功能。
2. 再用 CSS 改善視覺。
3. 最後用 JavaScript 增強互動體驗。

例如一個搜尋頁面：

```html
<form action="/search" method="get">
  <label for="keyword">關鍵字</label>
  <input id="keyword" name="q" type="search">
  <button type="submit">搜尋</button>
</form>
```

即使 JavaScript 沒有啟用，這個表單仍然可以送出。  
如果 JavaScript 啟用，才額外加上自動完成、即時搜尋、載入動畫等功能。

這就比單純依賴 `<noscript>` 更完整。

---

## 10. 常見問法

### 10.1 `<script>` 一定要放在 `body` 最下面嗎？

不一定。

如果是傳統腳本，放在 `body` 結尾是一種簡單安全的寫法。

但如果使用 `defer`，放在 `<head>` 也很常見：

```html
<head>
  <script src="./js/main.js" defer></script>
</head>
```

重點不是「一定要放哪裡」，而是要避免：

- 阻塞 HTML 解析。
- 腳本太早執行而找不到 DOM。
- 多個腳本執行順序錯亂。

---

### 10.2 `defer` 和把 script 放在 `body` 結尾一樣嗎？

不完全一樣。

共同點是：

- 都可以降低腳本太早操作 DOM 的問題。

差別是：

- `body` 結尾：瀏覽器解析到那裡才開始下載腳本。
- `head + defer`：瀏覽器比較早開始下載腳本，但等 HTML 解析完成後才執行。

所以現代專案常會用：

```html
<head>
  <script src="./js/main.js" defer></script>
</head>
```

---

### 10.3 什麼時候用 `defer`？

當你的腳本：

- 需要操作 DOM。
- 需要保留多個腳本的執行順序。
- 是頁面主要功能的一部分。
- 不希望阻塞 HTML 解析。

通常就適合用 `defer`。

例如：

```html
<script src="./js/vendor.js" defer></script>
<script src="./js/main.js" defer></script>
```

---

### 10.4 什麼時候用 `async`？

當腳本：

- 不依賴其他腳本。
- 不被其他腳本依賴。
- 不需要保證執行順序。
- 是獨立第三方功能。

可以考慮用 `async`。

例如：

```html
<script src="https://example.com/analytics.js" async></script>
```

---

### 10.5 `async` 為什麼不適合有依賴順序的腳本？

因為 `async` 腳本下載完成後會盡快執行，誰先下載完誰就可能先執行。

例如：

```html
<script src="./js/library.js" async></script>
<script src="./js/main.js" async></script>
```

如果 `main.js` 依賴 `library.js`，就可能出錯。

比較適合改成：

```html
<script src="./js/library.js" defer></script>
<script src="./js/main.js" defer></script>
```

---

### 10.6 `type="module"` 還需要加 `defer` 嗎？

一般不需要。

模組腳本預設就具有類似 `defer` 的延後執行特性。

所以通常寫：

```html
<script type="module" src="./js/main.js"></script>
```

即可。

---

### 10.7 `<noscript>` 可以處理 JavaScript 錯誤嗎？

不可以。

`<noscript>` 只處理腳本停用或不支援的情境。

如果 JavaScript 有 bug，例如：

- 語法錯誤。
- 變數不存在。
- API 請求失敗。
- 事件沒有綁定成功。

這些都需要 JavaScript 程式本身的錯誤處理，不能靠 `<noscript>` 解決。

---

### 10.8 `<noscript>` 可以取代漸進增強嗎？

不能。

`<noscript>` 只是最低限度的替代提示。  
更好的設計是讓基礎 HTML 先能提供基本功能，再用 JavaScript 增強體驗。

---

## 11. 常見錯誤整理

### 錯誤一：把有依賴關係的腳本都加上 `async`

```html
<script src="./js/library.js" async></script>
<script src="./js/main.js" async></script>
```

問題：

- `async` 不保證順序。
- `main.js` 可能比 `library.js` 先執行。

建議：

```html
<script src="./js/library.js" defer></script>
<script src="./js/main.js" defer></script>
```

---

### 錯誤二：以為 `defer` 適合所有腳本

```html
<script defer>
  console.log("inline script");
</script>
```

問題：

- `defer` 主要搭配外部腳本使用。
- 內嵌腳本不應依賴 `defer` 作為主要延後執行方式。

建議：

```html
<script src="./js/main.js" defer></script>
```

或用事件、函式封裝控制執行時機。

---

### 錯誤三：以為 `<noscript>` 可以處理 JS 壞掉

```html
<noscript>
  <p>系統發生錯誤，請稍後再試。</p>
</noscript>
```

問題：

- 如果 JavaScript 有 bug，`<noscript>` 不會自動顯示。
- `<noscript>` 只在腳本停用或不支援時生效。

建議：

- JS 錯誤要用程式錯誤處理。
- API 失敗要顯示錯誤狀態。
- 高度依賴 JS 的頁面才用 `<noscript>` 提供停用提示。

---

### 錯誤四：以為 `type="module"` 的頂層變數會變全域變數

```html
<script type="module">
  const name = "Tom";
</script>
```

在模組腳本中，頂層變數屬於模組作用域，不會直接變成 `window.name`。

如果你需要跨檔案使用變數，應該透過 `export` / `import` 管理，而不是依賴全域變數。

---

## 12. 小結

這一章的核心可以整理成四句話：

1. `<script>` 負責把 JavaScript 接到 HTML。
2. 傳統腳本可能阻塞 HTML 解析，所以要注意放置位置與載入方式。
3. `defer` 適合頁面主程式和有順序依賴的腳本；`async` 適合獨立第三方腳本。
4. `<noscript>` 只能處理腳本停用或不支援，不能處理 JavaScript 執行錯誤。

如果是一般現代頁面，可以優先記住這個選擇：

```html
<script src="./js/main.js" defer></script>
```

如果是現代前端框架或 Vite 專案，常見入口會是：

```html
<script type="module" src="/src/main.js"></script>
```

如果是第三方獨立統計腳本，可以考慮：

```html
<script src="https://example.com/analytics.js" async></script>
```

如果要提醒停用 JavaScript 的使用者：

```html
<noscript>
  <p>請啟用 JavaScript 以使用完整功能。</p>
</noscript>
```

---

## 13. 自測問題

1. `<script src="./main.js"></script>` 是做什麼的？
2. 內嵌腳本和外部腳本有什麼差別？
3. 傳統腳本為什麼可能阻塞 HTML 解析？
4. 為什麼腳本常被放在 `body` 結尾？
5. `defer` 的下載與執行時機是什麼？
6. 多個 `defer` 腳本會不會保留執行順序？
7. `async` 的下載與執行時機是什麼？
8. 為什麼 `async` 不適合有依賴順序的腳本？
9. `type="module"` 先可以怎麼理解？
10. 為什麼 `type="module"` 通常不需要再加 `defer`？
11. `nomodule` 是用來處理什麼問題？
12. `<noscript>` 能處理哪些情境？
13. `<noscript>` 不能處理哪些 JavaScript 錯誤？
14. `defer` 和把腳本放在 `body` 結尾有什麼差異？
15. 一般頁面主程式、第三方統計腳本、Vite 專案入口，分別適合用什麼寫法？

---

## 14. 延伸閱讀

- [MDN：`<script>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- [MDN：`<noscript>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript)
- [HTML Living Standard：scripting](https://html.spec.whatwg.org/multipage/scripting.html)

---

## 15. 回查索引

- 想知道 `<script>` 基本用途：看第 1 節。
- 想知道腳本應該放哪裡：看第 2 節。
- 想理解阻塞解析：看第 3 節。
- 想理解 `defer`：看第 4 節。
- 想理解 `async`：看第 5 節。
- 想理解 `type="module"`：看第 6 節。
- 想理解 `nomodule`：看第 7 節。
- 想理解 `<noscript>`：看第 8、9 節。
- 想快速判斷怎麼選：看「實務上怎麼選？」表格。
- 想避免常見錯誤：看第 11 節。
