---
source_notes:
  - notes/080-meta標籤/04-Open-Graph社群分享設定.md
topics: [Open Graph, 社群分享, 分享預覽, og:image, og:url]
summary: "Open Graph 社群分享設定的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 10
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# Open Graph 社群分享設定複習

> 回憶檢索複習。概念與用法說明見 notes/080-meta標籤/04-Open-Graph社群分享設定.md。

## 重點摘要

- Open Graph 用一組 `og:*` meta 標籤，告訴社群平台網頁分享出去時應該怎麼顯示。
- OG 標籤通常放在 `<head>` 裡，並使用 `property` 屬性，例如 `<meta property="og:title" content="...">`。
- 搜尋與一般 metadata 常見 `name="..."`，Open Graph 常見 `property="og:..."`。
- 核心 OG 欄位包含 `og:title`、`og:description`、`og:image`、`og:url`、`og:type`。
- `og:image` 應使用可公開存取的完整 URL，並建議搭配 `og:image:alt`。
- `<title>`、`description` 與 Open Graph 分別對應瀏覽器分頁/搜尋、搜尋摘要候選、社群分享預覽等不同場景。

### 問答 1 · 基礎 · {#080-og-q1}

Open Graph 主要解決什麼問題？

<details>
<summary>答案</summary>

Open Graph 用一組 `og:*` meta 標籤，告訴社群平台這個網頁分享出去時應該怎麼顯示，改善分享卡片的標題、描述、預覽圖片、網址與網站名稱等資訊。

</details>

### 問答 2 · 基礎 · {#080-og-q2}

Open Graph 標籤和一般 `description` meta 在屬性寫法上有什麼差異？

<details>
<summary>答案</summary>

搜尋與一般 metadata 常見 `name="..."`，例如 `<meta name="description" content="...">`；Open Graph 常見 `property="og:..."`，例如 `<meta property="og:title" content="...">`。

</details>

### 問答 3 · 進階 · {#080-og-q3}

為什麼正式網站的 `og:image` 不適合只寫相對路徑？

<details>
<summary>答案</summary>

社群平台需要從外部抓取圖片。相對路徑在自己的電腦或網站內部可能看似合理，但正式網站通常應使用可公開存取的完整 URL。

</details>

### 問答 4 · 進階 · {#080-og-q4}

`<title>`、`<meta name="description">` 與 `<meta property="og:title">` 的使用場景有什麼不同？

<details>
<summary>答案</summary>

`<title>` 是瀏覽器分頁標題，也可能是搜尋結果標題來源之一；`<meta name="description">` 是搜尋結果摘要候選來源之一；`<meta property="og:title">` 是社群分享預覽標題。

</details>

### 填空 1 · 基礎 · {#080-og-f1}

設定分享卡片標題時，Open Graph 常寫成 `<meta property="____" content="...">`。

<details>
<summary>答案</summary>

`og:title`

</details>

### 填空 2 · 基礎 · {#080-og-f2}

如果設定了 `og:image`，也建議補上圖片替代描述：`<meta property="____" content="...">`。

<details>
<summary>答案</summary>

`og:image:alt`

</details>

### 填空 3 · 基礎 · {#080-og-f3}

繁體中文台灣常見的 `og:locale` 寫法是 `____`。

<details>
<summary>答案</summary>

`zh_TW`

</details>

### 卡片 1 · 基礎 · {#080-og-c1}

正面：`og:title`

<details>
<summary>答案</summary>

設定分享卡片中顯示的標題。

</details>

### 卡片 2 · 基礎 · {#080-og-c2}

正面：`og:url`

<details>
<summary>答案</summary>

設定這個網頁在社群圖譜中的代表網址；實務上通常放該頁的正式網址。

</details>

### 卡片 3 · 基礎 · {#080-og-c3}

正面：`og:type`

<details>
<summary>答案</summary>

說明這個物件是網站頁、文章或其他類型；一般網站頁面可使用 `website`，文章頁可依情境使用 `article`。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
