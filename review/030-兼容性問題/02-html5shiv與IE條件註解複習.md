---
source_notes:
  - notes/030-兼容性問題/html5shiv與IE條件註解補充.md
topics: [舊版 IE, html5shiv, IE 條件註解, HTML5 語意標籤, 相容性補丁]
summary: "html5shiv 與 IE 條件註解的回憶檢索複習材料（重點摘要＋問答＋填空＋翻面卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 8
  priority: 中
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# html5shiv 與 IE 條件註解複習

> 回憶檢索複習。概念與用法說明見 notes/030-兼容性問題/html5shiv與IE條件註解補充.md。

## 重點摘要

- 舊版 IE（IE6～IE8）不認識 `<header>`、`<nav>` 等 HTML5 語意標籤，導致 CSS 樣式無法套用。
- html5shiv 的原理：透過 JavaScript 呼叫 `document.createElement()` 讓 IE6～IE8「記住」這些標籤，才能正常套用 CSS。
- html5shiv **只解決樣式套用**問題，不代表 IE6～IE8 因此支援 HTML5 的 API 或新功能（如 `<video>` 播放、`<canvas>` 繪圖）。
- IE 條件註解（`<!--[if ...]> ... <![endif]-->`）：IE 看到時當作條件判斷執行，其他瀏覽器完全忽略當作普通 HTML 註解。
- 常用關鍵字：`lt`（小於）、`lte`（小於等於）、`gt`（大於）、`gte`（大於等於）、`!`（邏輯非）。
- **IE10 起**移除了條件註解支援，IE10 以上應視為一般瀏覽器。

## 問答題

### 問答 1 · 基礎 · {#030-shiv-q1}

html5shiv 解決了什麼問題？它的原理是什麼？

<details>
<summary>答案</summary>

問題：IE6～IE8 不認識 `<header>`、`<nav>` 等 HTML5 語意標籤，導致這些標籤無法正常套用 CSS 樣式。

原理：在頁面載入時，用 JavaScript 對每個 HTML5 新標籤名稱呼叫一次 `document.createElement()`，讓 IE6～IE8 把這些標籤「記住」成已知元素，之後 CSS 才能正常套用。

</details>

### 問答 2 · 基礎 · {#030-shiv-q2}

IE 條件註解的用途是什麼？其他瀏覽器看到它時會怎樣？

<details>
<summary>答案</summary>

用途：讓特定版本範圍的 IE 才執行某段 HTML 或腳本，實現「只在需要的 IE 版本載入補丁」的效果。

其他瀏覽器（包含 Chrome、Firefox、Safari，以及 IE10 以上）看到條件註解時，會把整段內容當成普通 HTML 註解忽略，裡面的程式碼不會執行。

</details>

### 問答 3 · 進階 · {#030-shiv-q3}

為什麼載入 html5shiv 的 `<script>` 應該用條件註解包起來，而不直接寫成普通 `<script>` 標籤？

<details>
<summary>答案</summary>

如果不用條件註解，Chrome、Firefox、IE9 以上等本來就能識別 HTML5 標籤的瀏覽器，也會多下載並執行 html5shiv 這個檔案——對這些瀏覽器完全沒有用，只是多一次無謂的網路請求與執行成本。用條件註解包住後，只有真正需要的 IE6～IE8 才會載入。

</details>

## 填空題

### 填空 1 · 基礎 · {#030-shiv-f1}

html5shiv 的原理是透過呼叫 `document.____()` 讓 IE6～IE8 認識每個 HTML5 新標籤名稱。

<details>
<summary>答案</summary>

`createElement`

</details>

### 填空 2 · 基礎 · {#030-shiv-f2}

要讓「低於 IE9」的版本才載入某段程式碼，條件註解應寫：`<!--[if ____ IE 9]> ... <![endif]-->`。

<details>
<summary>答案</summary>

`lt`

</details>

## 翻面卡片

### 卡片 1 · 基礎 · {#030-shiv-c1}

正面：IE 條件註解關鍵字 `lt`

<details>
<summary>答案</summary>

小於（less than）

</details>

### 卡片 2 · 基礎 · {#030-shiv-c2}

正面：IE 條件註解關鍵字 `lte`

<details>
<summary>答案</summary>

小於等於（less than or equal）

</details>

### 卡片 3 · 進階 · {#030-shiv-c3}

正面：從哪個 IE 版本開始不再支援條件註解？這代表什麼？

<details>
<summary>答案</summary>

IE10 開始不再支援條件註解語法。IE10 以上一律把條件註解當成普通 HTML 註解整段忽略，裡面的程式碼不會執行——因此判斷條件註解是否生效時，IE10／IE11 應視為和 Chrome、Firefox 一樣的一般瀏覽器。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
