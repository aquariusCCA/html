<!--
source_atomic:
  - atomic/030-兼容性問題/02-html5shiv-與-ie-條件註解.md
-->

# html5shiv 與 IE 條件註解

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解為什麼舊版 IE 無法正確顯示 HTML5 語意標籤。
- 理解 html5shiv 的作用與限制。
- 看懂 IE 條件註解的語法，並知道它在哪些版本的 IE 還有效。

## 問題情境

假設你寫了一個使用 `<header>`、`<nav>`、`<section>`、`<article>` 等 HTML5 語意標籤的頁面，並用 CSS 設定了它們的樣式。在 Chrome、Firefox 上一切正常，但用 IE8 打開時，這些標籤卻像沒有套用任何樣式一樣，版面亂掉，甚至內容直接變成一行一行的區塊堆疊。

問題不在於 CSS 寫錯，而是 IE8 以及更早的版本根本不認識 `<header>`、`<nav>` 這些 HTML5 標籤——它們會被當成一般的未知標籤，無法正常套用樣式。

## 一句話理解

html5shiv 是一段 JavaScript，讓 IE6～IE8「認得」HTML5 新標籤的存在，才能正常套用 CSS；IE 條件註解則是一種只有 IE 看得懂的特殊註解語法，用來「只在需要的 IE 版本」載入 html5shiv 這類補丁。

## 概念拆解

### html5shiv 解決了什麼問題

html5shiv 的原理很單純：在頁面載入時，用 JavaScript 對 `header`、`nav`、`section`、`article` 等每一個 HTML5 新標籤名稱呼叫一次 `document.createElement()`。這個動作會讓 IE6～IE8 把這些標籤「記住」成已知的元素，之後 CSS 才能正常套用在這些標籤上。

要特別注意：html5shiv 只解決「樣式能不能套用」的問題，不代表 IE6～IE8 因此就支援 HTML5 的語意、API 或其他新功能（例如 `<video>`、`<canvas>` 的播放與繪圖能力，html5shiv 完全不處理）。

對 IE9 以上的版本，以及 Chrome、Firefox、Safari 等瀏覽器來說，這些標籤本來就能正確識別，載入 html5shiv 對它們沒有任何作用，純粹是多一個不必要的檔案請求。

### IE 條件註解：只給特定版本 IE 看的程式碼

IE 條件註解（Conditional Comments）是 IE 獨有的語法：在其他瀏覽器眼中，它就是一段普通的 HTML 註解，會被完全忽略；但在 IE 眼中，它是一段條件判斷，符合條件時，裡面的內容會被當成正常的 HTML 來解析執行。

```html
<!--[if lt IE 9]>
<script src="./js/html5shiv.min.js"></script>
<![endif]-->
```

這段程式碼的意思是：「如果目前瀏覽器是小於 IE9 的版本，就載入 `html5shiv.min.js`；其他瀏覽器（包含 IE9 以上）完全看不到、也不會執行這段 `<script>`」。

條件判斷可以用的關鍵字：

| 關鍵字 | 意義 |
| --- | --- |
| `lt` | 小於（less than） |
| `lte` | 小於等於（less than or equal） |
| `gt` | 大於（greater than） |
| `gte` | 大於等於（greater than or equal） |
| `!` | 邏輯非（not） |

```html
<!--[if IE 8]>僅 IE8 可見<![endif]-->
<!--[if gt IE 8]>高於 IE8 的 IE 可見<![endif]-->
<!--[if lt IE 8]>低於 IE8 的 IE 可見<![endif]-->
<!--[if gte IE 8]>IE8 以上可見<![endif]-->
<!--[if lte IE 8]>IE8 及以下可見<![endif]-->
<!--[if !IE 8]>非 IE8 的 IE 可見<![endif]-->
```

有一個關鍵限制：從 IE10 開始，條件註解語法被移除了，IE10 以上一律把條件註解當成單純的 HTML 註解忽略。所以在判斷「這段條件註解會不會生效」時，IE10 及更新版本要視為跟 Chrome、Firefox 一樣的一般瀏覽器，而不是 IE。

## 常見錯誤

- **沒有用條件註解包住，直接讓所有瀏覽器載入 html5shiv**：例如直接寫成 `<script src="./js/html5shiv.min.js"></script>`，沒有包在 `<!--[if lt IE 9]> ... <![endif]-->` 裡面。這樣 Chrome、Firefox、IE9 以上的使用者也會多下載並執行這個檔案，雖然不會造成顯示錯誤，但多了一次完全沒用的網路請求與執行成本。
- **以為條件註解對 IE10、IE11 也有效**：例如寫 `<!--[if lt IE 11]> ... <![endif]-->`，期待在 IE10／IE11 上生效。但 IE10 開始已經不解析條件註解語法，這段內容在 IE10 以上會被當成普通註解整段忽略，裡面的程式碼不會執行。

## 實務意義

現在絕大多數網站已經不需要再支援 IE6～IE8，html5shiv 與條件註解在新專案中幾乎不會主動使用。

但它們仍然會出現在：

- 沿用多年的舊版前端範本或腳手架，許多舊的「HTML5 Boilerplate」類範本，`<head>` 裡都帶有這段程式碼。
- 一些教學文章或書籍提到的「標準 head 設定」，直接複製貼上而沒有說明用途。

當你在舊專案的 `<head>` 看到 `<!--[if lt IE 9]> ... <![endif]-->` 包著 html5shiv 的程式碼時，應該能判斷：這是給 IE6～IE8 用的相容性補丁；如果專案明確不需要支援這些版本，這段程式碼通常可以安全移除。

## 重點整理

- 舊版 IE（IE6～IE8）不認識 `<header>`、`<nav>` 等 HTML5 語意標籤，導致 CSS 樣式套用不上。
- html5shiv 透過 `document.createElement()` 讓這些標籤被 IE6～IE8「認識」，但不代表這些版本的 IE 支援完整 HTML5 功能。
- IE 條件註解（`<!--[if ...]> ... <![endif]-->`）只有 IE 看得懂，可用來限定程式碼只在特定版本的 IE 執行。
- IE10 開始不再支援條件註解語法，IE10／IE11 應視為一般瀏覽器處理。

## 自我檢查

1. 一個頁面在 Chrome 上樣式正常，但在 IE8 上 `<nav>` 裡的內容完全沒套用 CSS，最可能的原因是什麼？該怎麼處理？
2. 如果把 `<!--[if lt IE 9]><script src="./js/html5shiv.min.js"></script><![endif]-->` 改成不包條件註解、直接寫一般的 `<script>` 標籤，對 Chrome 使用者會有什麼影響？
