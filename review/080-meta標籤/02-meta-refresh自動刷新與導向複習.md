---
source_notes:
  - notes/080-meta標籤/02-meta-refresh自動刷新與導向補充.md
topics: [meta refresh, 自動刷新, 延遲導向, 轉址]
summary: "meta refresh 自動刷新與延遲導向的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 7
  priority: 中
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# meta refresh 自動刷新與延遲導向複習

> 回憶檢索複習。概念與用法說明見 notes/080-meta標籤/02-meta-refresh自動刷新與導向補充.md。

## 重點摘要

- `meta refresh` 是放在 `<head>` 裡，用秒數控制頁面重新整理或延遲導向的 meta 設定。
- `<meta http-equiv="refresh" content="5">` 表示頁面載入 5 秒後重新整理目前頁面。
- `<meta http-equiv="refresh" content="3;url=https://example.com/target-page">` 表示頁面載入 3 秒後導向指定網址。
- 自動導向頁面應提供清楚提示，並保留可手動點擊的連結。
- 正式網站搬家或永久轉址通常應使用伺服器端 301 或 302，而不是只靠 meta refresh。
- 過度頻繁重新整理會讓使用者難以閱讀，也可能增加伺服器負擔。

### 問答 1 · 基礎 · {#080-refresh-q1}

`<meta http-equiv="refresh" content="5">` 代表什麼？

<details>
<summary>答案</summary>

它代表頁面載入 5 秒後，重新整理目前頁面。

</details>

### 問答 2 · 基礎 · {#080-refresh-q2}

`content="3;url=https://example.com/target-page"` 中的 `3` 與 `url` 分別代表什麼？

<details>
<summary>答案</summary>

`3` 是等待秒數；`url` 是等待後要導向的目標網址。

</details>

### 問答 3 · 進階 · {#080-refresh-q3}

如果網站真的搬到新網址，為什麼通常不應該只靠 meta refresh？

<details>
<summary>答案</summary>

正式轉址通常應使用伺服器端 301 或 302，因為伺服器端轉址更明確，也更適合搜尋引擎與瀏覽器處理。meta refresh 需要等 HTML 被讀取後才發生，太短延遲也可能造成使用者體驗問題。

</details>

### 填空 1 · 基礎 · {#080-refresh-f1}

meta refresh 使用 `<meta http-equiv="____">` 設定。

<details>
<summary>答案</summary>

`refresh`

</details>

### 填空 2 · 基礎 · {#080-refresh-f2}

`content="3;____=https://example.com"` 中，用來表示導向目標的是 `url`。

<details>
<summary>答案</summary>

`url`

</details>

### 卡片 1 · 基礎 · {#080-refresh-c1}

正面：自動導向頁面

<details>
<summary>答案</summary>

應提供清楚提示，並保留可手動點擊的連結，避免使用者不知道頁面為什麼跳走。

</details>

### 卡片 2 · 進階 · {#080-refresh-c2}

正面：正式網站搬家或永久轉址

<details>
<summary>答案</summary>

通常優先使用伺服器端 301 或 302 轉址，而不是只靠 meta refresh。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
