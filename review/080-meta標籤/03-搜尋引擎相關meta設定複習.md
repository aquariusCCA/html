---
source_notes:
  - notes/080-meta標籤/03-搜尋引擎相關meta設定.md
topics: [SEO, robots, description, keywords, 搜尋引擎]
summary: "搜尋引擎相關 meta 設定的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 9
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# 搜尋引擎相關 meta 設定複習

> 回憶檢索複習。概念與用法說明見 notes/080-meta標籤/03-搜尋引擎相關meta設定.md。

## 重點摘要

- 搜尋引擎相關 meta 寫在 `<head>` 裡，提供爬蟲控制與頁面摘要資訊。
- `robots` meta 用來提供搜尋引擎爬蟲的頁面層級指示。
- `index` 允許搜尋引擎索引頁面；`follow` 允許搜尋引擎追蹤頁面中的連結。
- `noindex` 表示不要把頁面顯示在搜尋結果中；`nofollow` 表示不要追蹤頁面上的連結。
- `description` 提供頁面簡短摘要，可能成為搜尋結果摘要的來源之一，但不保證一定顯示。
- `keywords` 是歷史上常見 metadata，現代搜尋排名不應依賴它。
- 若 `robots.txt` 阻擋爬蟲抓取頁面，搜尋引擎可能讀不到頁面內的 `noindex`。

### 問答 1 · 基礎 · {#080-seo-q1}

`robots` meta 標籤主要控制哪兩類搜尋引擎行為？

<details>
<summary>答案</summary>

它提供搜尋引擎爬蟲的頁面層級指示，主要涉及頁面是否被索引，以及頁面上的連結是否被追蹤。

</details>

### 問答 2 · 基礎 · {#080-seo-q2}

`noindex` 與 `nofollow` 分別代表什麼？

<details>
<summary>答案</summary>

`noindex` 表示不要把此頁面顯示在搜尋結果中；`nofollow` 表示不要追蹤此頁面上的連結。

</details>

### 問答 3 · 進階 · {#080-seo-q3}

為什麼 `description` 不能保證一定成為搜尋結果摘要？

<details>
<summary>答案</summary>

`description` 是摘要候選來源，不是保證顯示文字。搜尋引擎可能根據使用者查詢、頁面內容或其他判斷，自行選擇不同文字作為摘要。

</details>

### 問答 4 · 進階 · {#080-seo-q4}

如果有人說「多塞 keywords 可以提升 Google 排名」，應該如何回應？

<details>
<summary>答案</summary>

`keywords` 是歷史上常見的 metadata 寫法，但現代搜尋引擎不一定採用它作為排名依據。以 Google Search 為例，Google 曾明確說明不使用 `keywords` meta tag 作為網頁排名依據；更重要的是頁面內容是否清楚、有用、符合使用者需求。

</details>

### 填空 1 · 基礎 · {#080-seo-f1}

控制索引與連結追蹤的 meta 常寫成 `<meta name="____" content="index,follow">`。

<details>
<summary>答案</summary>

`robots`

</details>

### 填空 2 · 基礎 · {#080-seo-f2}

提供頁面摘要候選文字的 meta 常寫成 `<meta name="____" content="...">`。

<details>
<summary>答案</summary>

`description`

</details>

### 卡片 1 · 基礎 · {#080-seo-c1}

正面：`index`

<details>
<summary>答案</summary>

允許搜尋引擎索引此頁面。

</details>

### 卡片 2 · 基礎 · {#080-seo-c2}

正面：`follow`

<details>
<summary>答案</summary>

允許搜尋引擎追蹤此頁面中的連結。

</details>

### 卡片 3 · 進階 · {#080-seo-c3}

正面：被 `robots.txt` 擋住的頁面

<details>
<summary>答案</summary>

搜尋引擎可能根本讀不到頁面裡的 `noindex`，因此不能期待頁面內的 robots meta 一定被處理。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
