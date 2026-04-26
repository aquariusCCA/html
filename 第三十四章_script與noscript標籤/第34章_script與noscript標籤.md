# `script` 與 `noscript` 標籤

> - 所屬章節：第三十四章｜`script` 與 `noscript` 標籤  
> - 關鍵字：`script`、`src`、JavaScript、`defer`、`async`、`type="module"`、`nomodule`、`noscript`、腳本載入  
> - 建議回查情境：想知道 JavaScript 檔案怎麼接進 HTML、腳本放哪裡、`defer` 和 `async` 差在哪、`noscript` 能處理什麼時

## 本節導讀

HTML 負責頁面結構，JavaScript 負責很多動態行為。  
`<script>` 就是 HTML 和 JavaScript 之間最直接的連接點。

這一篇的重點不是學 JavaScript 語法，而是理解瀏覽器如何載入腳本、什麼時候執行腳本，以及腳本不可用時 `<noscript>` 能提供什麼退路。

## 整理說明

- 原始學習重點：知道 HTML 可以透過 `<script>` 載入 JavaScript。
- 本次整理方向：補上外部腳本、內嵌腳本、阻塞、`defer`、`async`、模組腳本與 `<noscript>` 的判斷。
- 補強內容：加入載入時機對照與常見實務建議。
- 待查證：腳本載入與模組支援需依目標瀏覽器確認，本節以現代瀏覽器的一般行為整理。

## 你會在這篇學到什麼

- `<script>` 的兩種常見寫法
- 為什麼傳統腳本可能阻塞 HTML 解析
- 腳本放在 `body` 結尾和使用 `defer` 的差別
- `defer` 和 `async` 如何選
- `type="module"` 先怎麼理解
- `<noscript>` 的用途與限制

## 30 秒複習入口

- `<script>` 可以寫內嵌 JS，也可以用 `src` 載入外部 JS 檔案。
- 傳統 `<script src>` 可能阻塞 HTML 解析。
- `defer` 會延後到文件解析完成後執行，並保留腳本順序。
- `async` 下載完成後會盡快執行，不保證順序。
- `type="module"` 用來載入 JavaScript 模組，預設具有延後執行特性。
- `<noscript>` 用來提供腳本停用或不支援時的替代 HTML。
- `<noscript>` 不會處理 JavaScript 執行錯誤。

## 速查區

### 腳本載入方式

| 寫法 | 特點 | 常見用途 |
|---|---|---|
| `<script>...</script>` | 直接寫在 HTML 裡 | 小型測試或少量設定 |
| `<script src="app.js"></script>` | 載入外部 JS 檔案 | 一般專案主流 |
| `<script src="app.js" defer></script>` | 延後執行且保留順序 | 常見推薦寫法 |
| `<script src="analytics.js" async></script>` | 下載完成後盡快執行 | 獨立第三方腳本 |
| `<script type="module" src="main.js"></script>` | 載入 JS 模組 | 現代模組化程式 |

### `defer` 和 `async`

| 屬性 | 下載 | 執行時機 | 是否保留順序 | 適合情境 |
|---|---|---|---:|---|
| `defer` | 不阻塞解析地下載 | HTML 解析完成後 | 是 | 依賴 DOM 或彼此有順序的腳本 |
| `async` | 不阻塞解析地下載 | 下載完成後盡快執行 | 否 | 不依賴其他腳本的獨立腳本 |

## 正文筆記

### 1. `<script>` 在做什麼？

`<script>` 用來嵌入或載入可執行的腳本，最常見就是 JavaScript。

內嵌寫法：

```html
<script>
  console.log("Hello HTML");
</script>
```

外部檔案寫法：

```html
<script src="./js/main.js"></script>
```

實務專案通常優先使用外部檔案，因為這樣比較容易維護、快取與分工。

### 2. 腳本放在 HTML 哪裡？

傳統教材常見兩種寫法。

寫在 `body` 結尾：

```html
<body>
  <h1 id="title">Hello</h1>

  <script src="./js/main.js"></script>
</body>
```

這樣做的原因是：瀏覽器已經先解析出大部分 HTML，腳本在操作 DOM 時比較不容易找不到元素。

另一種現代常見寫法是放在 `<head>`，但加上 `defer`：

```html
<head>
  <script src="./js/main.js" defer></script>
</head>
```

`defer` 會讓腳本下載和 HTML 解析並行，但執行會延後到文件解析完成後。

### 3. 傳統腳本為什麼可能阻塞？

當瀏覽器解析到傳統腳本：

```html
<script src="./js/main.js"></script>
```

它通常需要先下載並執行腳本，再繼續解析後面的 HTML。  
如果腳本很大或網路很慢，頁面就可能被卡住。

這也是為什麼現代頁面常搭配 `defer` 或把腳本放在 `body` 結尾。

### 4. `defer` 怎麼理解？

```html
<script src="./js/vendor.js" defer></script>
<script src="./js/main.js" defer></script>
```

`defer` 的特點：

- 腳本下載時不阻塞 HTML 解析。
- 等 HTML 文件解析完成後再執行。
- 多個 `defer` 腳本會保留原本順序。

所以如果 `main.js` 依賴 `vendor.js`，`defer` 通常比 `async` 更適合。

### 5. `async` 怎麼理解？

```html
<script src="https://example.com/analytics.js" async></script>
```

`async` 的特點：

- 腳本下載時不阻塞 HTML 解析。
- 下載完成後會盡快執行。
- 多個 `async` 腳本不保證執行順序。

因此 `async` 適合獨立腳本，例如統計、廣告、第三方工具。  
如果腳本之間有依賴順序，通常不要用 `async`。

### 6. `type="module"` 是什麼？

現代 JavaScript 可以使用模組：

```html
<script type="module" src="./js/main.js"></script>
```

先用 HTML 角度理解就好：

- `type="module"` 表示這是一個 JavaScript 模組。
- 模組可以使用 `import` / `export`。
- 模組腳本預設具有延後執行特性。
- 模組有自己的作用域，不會像傳統腳本一樣把頂層變數直接掛到全域。

如果專案使用 Vite、Webpack、現代前端框架，常會看到模組腳本。

### 7. `nomodule` 先怎麼理解？

有些頁面會同時提供現代模組和舊瀏覽器備援：

```html
<script type="module" src="./modern.js"></script>
<script nomodule src="./legacy.js"></script>
```

簡單理解：

- 支援模組的瀏覽器載入 `modern.js`。
- 不支援模組的舊瀏覽器載入 `legacy.js`。

一般初學 HTML 不需要急著使用，但看到時要知道它是相容性策略的一部分。

### 8. `<noscript>` 在做什麼？

`<noscript>` 用來提供腳本停用或不支援時的替代內容。

```html
<noscript>
  <p>此頁面需要啟用 JavaScript 才能完整使用。</p>
</noscript>
```

如果使用者瀏覽器停用 JavaScript，或瀏覽器不支援腳本，`<noscript>` 內容就可能顯示出來。

它常用於：

- 提醒使用者啟用 JavaScript。
- 提供基本替代連結。
- 在表單或功能頁提供最簡單的退路。

### 9. `<noscript>` 不能做什麼？

`<noscript>` 不是 JavaScript 錯誤處理工具。

如果 JavaScript 有語法錯誤、API 請求失敗、某個套件載入失敗，`<noscript>` 不會自動接手。

也就是說：

- 腳本被停用：`<noscript>` 有用。
- 腳本執行出錯：需要 JavaScript 自己處理錯誤。
- 網路請求失敗：需要應用程式設計錯誤狀態。

## 常見問法

### `<script>` 一定要放在 `body` 最下面嗎？

不一定。

如果使用 `defer`，放在 `<head>` 也很常見。  
關鍵是避免腳本太早執行而找不到 DOM，並避免阻塞頁面解析。

### `defer` 和把 script 放在 body 結尾一樣嗎？

不完全一樣。

兩者都可以避免腳本太早操作 DOM，但 `defer` 允許瀏覽器更早開始下載腳本。  
現代專案常會在 `<head>` 使用 `defer`。

### 什麼時候用 `async`？

當腳本不依賴頁面中其他腳本，也不需要保證執行順序時，可以考慮 `async`。  
例如統計腳本、第三方獨立工具。

### `<noscript>` 可以取代漸進增強嗎？

不能。

`<noscript>` 只能提供腳本不可用時的替代內容。  
更完整的做法是讓基礎 HTML 先能工作，再用 JavaScript 增強體驗。

## 自測問題

1. `<script src>` 是做什麼的？
2. 傳統腳本為什麼可能阻塞 HTML 解析？
3. `defer` 的執行時機是什麼？
4. `async` 為什麼不適合有依賴順序的腳本？
5. `type="module"` 先可以怎麼理解？
6. `<noscript>` 能處理哪些情境？不能處理哪些情境？

## 延伸閱讀

- [第三十四章｜`script` 與 `noscript` 標籤](./README.md)
- [第六章｜路徑](../第六章_路徑/README.md)
- [MDN：`<script>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- [MDN：`<noscript>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript)
- [HTML Living Standard：scripting](https://html.spec.whatwg.org/multipage/scripting.html)
