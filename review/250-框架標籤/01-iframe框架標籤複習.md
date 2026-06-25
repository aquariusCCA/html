---
source_notes:
  - notes/250-框架標籤/01-iframe框架標籤.md
topics: [iframe, 內嵌內容, target 導向, iframe 屬性, iframe 安全與效能]
summary: "iframe 框架標籤的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 11
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# iframe 框架標籤複習

> 回憶檢索複習。概念與用法說明見 notes/250-框架標籤/01-iframe框架標籤.md。

## 重點摘要

- `<iframe>` 用來在目前 HTML 頁面中嵌入另一個瀏覽內容，像是在頁面中開出一個小型瀏覽區。
- `src` 指定 iframe 要載入的網址或文件路徑；`title` 描述 iframe 內容，讓輔助工具能辨識框架用途。
- `name` 可替 iframe 命名，讓 `<a>` 或 `<form>` 的 `target` 把連結目標或表單結果載入指定框架。
- `width` 與 `height` 設定 iframe 的顯示尺寸。
- 新內容不建議使用舊式 `frameborder`，應改用 CSS 的 `border` 控制邊框。
- iframe 可用來嵌入外部服務、另一個 URL、瀏覽器可顯示的文件，或承接連結/表單的 `target` 結果。
- iframe 不適合拿來做一般版面結構；頁面切版應使用一般 HTML 結構與 CSS。
- 實際專案中，iframe 可能搭配 `sandbox`、`allow`、`allowfullscreen`、`referrerpolicy`、`loading` 控制安全、權限與效能。

## 問答題

### 問答 1 · 基礎 · {#250-iframe-q1}

`<iframe>` 標籤在 HTML 中的主要用途是什麼？

<details>
<summary>答案</summary>

`<iframe>` 用來在目前 HTML 頁面中嵌入另一個瀏覽內容，例如另一個頁面、外部服務頁面或瀏覽器可顯示的文件。

</details>

### 問答 2 · 基礎 · {#250-iframe-q2}

iframe 的 `src` 與 `title` 屬性各負責什麼？

<details>
<summary>答案</summary>

`src` 指定 iframe 要載入的網址或文件路徑；`title` 描述 iframe 的內容，讓輔助工具能辨識這個框架的用途。

</details>

### 問答 3 · 基礎 · {#250-iframe-q3}

如果希望連結或表單的結果顯示在指定 iframe 中，`target` 和 iframe 的哪個屬性需要配合？

<details>
<summary>答案</summary>

`target` 的值必須和 iframe 的 `name` 一致。這樣連結目標或表單提交結果才會載入到該名稱的 iframe 中。

</details>

### 問答 4 · 進階 · {#250-iframe-q4}

為什麼新內容不建議使用 `frameborder` 控制 iframe 邊框？

<details>
<summary>答案</summary>

`frameborder` 是舊式屬性。新內容應改用 CSS，例如 `style="border: 0;"` 或 `style="border: 1px solid currentColor;"`，比較符合現代 HTML 與樣式分離的習慣，也較容易維護。

</details>

### 問答 5 · 進階 · {#250-iframe-q5}

如果只是要把頁面分成導覽列、主要內容、側邊欄或頁尾，是否適合使用 iframe？為什麼？

<details>
<summary>答案</summary>

不適合。iframe 適合用在「嵌入另一個頁面或文件」的情境，不適合取代 `<div>`、`<section>`、`<main>` 這類結構標籤；一般版面結構應用 HTML 結構與 CSS 排版處理。

</details>

## 填空題

### 填空 1 · 基礎 · {#250-iframe-f1}

最基本的 `<iframe>` 會透過 `____` 指定要嵌入的內容來源。

<details>
<summary>答案</summary>

`src`

</details>

### 填空 2 · 基礎 · {#250-iframe-f2}

連結或表單的 `target` 要導向 iframe，必須和 iframe 的 `____` 屬性值一致。

<details>
<summary>答案</summary>

`name`

</details>

### 填空 3 · 進階 · {#250-iframe-f3}

可設定為 `lazy`、讓 iframe 在接近可視範圍時再載入的屬性是 `____`。

<details>
<summary>答案</summary>

`loading`

</details>

## 翻面卡片

### 卡片 1 · 基礎 · {#250-iframe-c1}

正面：`src`

<details>
<summary>答案</summary>

指定 iframe 要載入的網址或文件路徑。

</details>

### 卡片 2 · 基礎 · {#250-iframe-c2}

正面：`title`

<details>
<summary>答案</summary>

描述 iframe 內容，讓輔助工具能辨識這個框架的用途。

</details>

### 卡片 3 · 進階 · {#250-iframe-c3}

正面：`sandbox`

<details>
<summary>答案</summary>

限制 iframe 內頁面的能力，例如是否允許執行腳本、提交表單或開啟新視窗。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
