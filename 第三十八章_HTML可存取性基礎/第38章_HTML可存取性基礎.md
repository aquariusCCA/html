# HTML 可存取性基礎

> - 所屬章節：第三十八章｜HTML 可存取性基礎  
> - 關鍵字：可存取性、accessibility、a11y、語意化 HTML、標題階層、`alt`、`label`、表格標頭、landmark、ARIA、鍵盤操作  
> - 建議回查情境：想檢查 HTML 是否容易被輔助技術理解、想知道 ARIA 何時該用、想整理圖片、表單、表格、標題的可存取性重點時

## 本節導讀

可存取性不是額外加一層魔法屬性。  
很多基礎可存取性，來自正確使用 HTML。

例如：

- 標題用 `h1` 到 `h6`，而不是只用大字。
- 按鈕用 `<button>`，而不是用 `<div>` 假裝按鈕。
- 表單欄位有 `<label>`。
- 圖片有合適的 `alt`。
- 表格有 `<th>` 和必要的 `scope`。

ARIA 很重要，但它是補充工具。能用原生 HTML 表達時，通常先用 HTML。

## 整理說明

- 原始學習重點：語意化標籤、圖片 `alt`、表單 `label`、表格標頭分散在前面章節。
- 本次整理方向：把 HTML 層面的可存取性整理成可回查清單。
- 補強內容：加入 landmark、鍵盤焦點、ARIA 使用原則與常見錯誤。
- 待查證：具體可存取性表現需搭配瀏覽器、輔助技術與實際使用者測試。

## 你會在這篇學到什麼

- 為什麼語意化 HTML 是可存取性基礎
- 標題階層怎麼安排
- 圖片 `alt` 如何判斷
- 表單 `label` 為什麼重要
- 表格標頭和 `scope` 的作用
- landmark 如何幫助頁面導航
- ARIA 的基本使用原則
- 鍵盤操作與焦點順序要注意什麼

## 30 秒複習入口

- 先用正確 HTML，再考慮 ARIA。
- 標題要表達內容層級，不是只為了字體大小。
- 有資訊的圖片需要合適 `alt`，裝飾圖片可用空 `alt=""`。
- 表單欄位應該有可關聯的 `<label>`。
- 表格資料應用 `<th>`，必要時加 `scope`。
- `nav`、`main`、`header`、`footer` 等 landmark 有助於輔助技術快速跳轉。
- 不要用 `div` 加 `onclick` 假裝按鈕。
- ARIA 不能補齊所有鍵盤行為，互動元件仍要能用鍵盤操作。

## 速查區

### HTML 可存取性檢查清單

| 類型 | 檢查點 |
|---|---|
| 標題 | 是否用 `h1` ~ `h6` 表達層級 |
| 圖片 | 是否有合適 `alt`，裝飾圖是否為空 `alt` |
| 連結 | 連結文字是否能看出目的 |
| 表單 | 每個欄位是否有 `<label>` 或可存取名稱 |
| 表格 | 是否使用 `<th>`、`caption`、必要時使用 `scope` |
| 結構 | 是否使用 `header`、`nav`、`main`、`footer` 等語意區塊 |
| 鍵盤 | 是否能不用滑鼠完成主要操作 |
| ARIA | 是否只在 HTML 語意不足時補充 |

### ARIA 優先順序

| 情境 | 建議 |
|---|---|
| 原生 HTML 可表達 | 優先使用原生 HTML |
| 只是想改外觀 | 使用 CSS，不要亂加 ARIA |
| 自訂互動元件 | 需要 ARIA，也需要鍵盤行為 |
| 動態狀態更新 | 可考慮 `aria-live` 等補充 |

## 正文筆記

### 1. 語意化 HTML 是第一步

看起來一樣的畫面，HTML 語意可能完全不同。

不好的寫法：

```html
<div class="title">HTML 學習筆記</div>
<div class="button" onclick="submitForm()">送出</div>
```

更好的寫法：

```html
<h1>HTML 學習筆記</h1>
<button type="submit">送出</button>
```

`h1` 和 `button` 不只是預設樣式不同。  
它們提供了瀏覽器和輔助技術可以理解的語意和行為。

### 2. 標題階層要表達內容結構

標題不是用來控制字體大小的工具。  
標題應該表達頁面內容層級。

```html
<h1>HTML 學習筆記</h1>

<h2>表單標籤</h2>
<h3>label 標籤</h3>
<h3>fieldset 與 legend</h3>

<h2>圖片標籤</h2>
<h3>alt 屬性</h3>
```

輔助技術常讓使用者按標題快速跳轉。  
如果標題階層混亂，使用者就很難理解頁面地圖。

### 3. 圖片 `alt` 如何判斷？

有資訊的圖片，需要描述資訊：

```html
<img src="./chart.png" alt="表單提交流程：使用者輸入資料、瀏覽器送出請求、伺服器回應結果">
```

裝飾圖片可以使用空 `alt`：

```html
<img src="./decorative-line.png" alt="">
```

不要把 `alt` 寫成無意義檔名：

```html
<img src="./chart.png" alt="chart.png">
```

判斷方式：

> 如果拿掉這張圖會少掉重要資訊，`alt` 就應該補回那個資訊。

### 4. 連結文字要能看出目的

不好的寫法：

```html
<a href="./form.html">點這裡</a>
```

更好的寫法：

```html
<a href="./form.html">閱讀表單標籤筆記</a>
```

很多輔助技術可以列出頁面所有連結。  
如果連結都叫「點這裡」，使用者很難知道每個連結去哪裡。

### 5. 表單欄位需要 `<label>`

```html
<label for="email">Email</label>
<input id="email" name="email" type="email">
```

`label` 的作用不只是顯示文字。  
它會把欄位名稱和表單控件建立關聯，讓使用者點擊文字也能聚焦欄位，也讓輔助技術知道這個欄位在問什麼。

不要只依賴 placeholder：

```html
<input name="email" type="email" placeholder="Email">
```

placeholder 會消失，也不是穩定欄位名稱。

### 6. 表格要使用標頭

資料表格應該使用 `<th>` 表示標頭：

```html
<table>
  <caption>課程進度</caption>
  <thead>
    <tr>
      <th scope="col">章節</th>
      <th scope="col">主題</th>
      <th scope="col">狀態</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">第三十八章</th>
      <td>HTML 可存取性基礎</td>
      <td>整理中</td>
    </tr>
  </tbody>
</table>
```

`scope="col"` 表示欄標頭，`scope="row"` 表示列標頭。  
這能幫助輔助技術理解儲存格和標頭的關係。

### 7. landmark 可以幫助快速導航

語意化布局標籤也常形成 landmark：

```html
<header>...</header>
<nav aria-label="主要導覽">...</nav>
<main>...</main>
<footer>...</footer>
```

`main` 表示頁面主要內容。  
`nav` 表示導覽區。  
如果一頁有多個 `nav`，可以用 `aria-label` 區分：

```html
<nav aria-label="主要導覽">...</nav>
<nav aria-label="文章目錄">...</nav>
```

### 8. 鍵盤操作和焦點順序

不是所有使用者都用滑鼠。  
頁面主要功能應該能用鍵盤操作。

原生 `<button>`、`<a href>`、表單控件都有內建鍵盤行為。  
如果用 `<div>` 假裝按鈕，就要自己補很多行為，很容易漏掉。

不好的寫法：

```html
<div onclick="save()">儲存</div>
```

更好的寫法：

```html
<button type="button">儲存</button>
```

### 9. ARIA 是補充，不是替代

ARIA 可以補充語意，例如：

```html
<button aria-expanded="false" aria-controls="menu">
  選單
</button>
```

或替動態訊息提供提示：

```html
<p aria-live="polite" id="status"></p>
```

但如果已經有原生 HTML 元素，就先用原生元素。

不要把一個普通 `div` 加上 `role="button"` 就當作完成：

```html
<div role="button">送出</div>
```

這只補了一部分語意，鍵盤操作、焦點、禁用狀態等行為仍可能缺失。

## 常見問法

### 可存取性是不是只和螢幕閱讀器有關？

不是。

它也包含鍵盤操作、色彩與對比、焦點狀態、清楚文字、表單錯誤提示等。  
HTML 這一章先聚焦結構與語意基礎。

### 有 ARIA 就不用語意化 HTML 嗎？

不是。

能用正確 HTML 表達時，通常先用 HTML。  
ARIA 是補語意，不是把錯誤 HTML 變成完整元件的捷徑。

### 圖片 `title` 可以取代 `alt` 嗎？

不能。

`title` 常是滑鼠提示，並不等於圖片替代文字。  
圖片是否需要 `alt` 要根據圖片資訊判斷。

### `tabindex` 可以解決焦點順序嗎？

可以輔助，但不要濫用正整數 `tabindex`。  
更好的做法通常是讓 HTML 原始順序符合視覺與操作順序。

## 自測問題

1. 為什麼正確 HTML 是可存取性的第一步？
2. 標題階層應該依照什麼安排？
3. 什麼情況圖片可以使用 `alt=""`？
4. 為什麼 placeholder 不能取代 label？
5. 表格中的 `th` 和 `scope` 有什麼作用？
6. ARIA 的基本使用原則是什麼？
7. 為什麼不建議用 `div` 假裝按鈕？

## 延伸閱讀

- [第三十八章｜HTML 可存取性基礎](./README.md)
- [第十三章｜語意化標籤](../第十三章_語意化標籤/README.md)
- [第二十七章｜布局標籤](../第二十七章_布局標籤/README.md)
- [第二十四章｜表單標籤](../第二十四章_表單標籤/README.md)
- [MDN：HTML accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML)
- [MDN：ARIA](https://developer.mozilla.org/docs/Web/Accessibility/ARIA)
- [MDN：WAI-ARIA basics](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)
