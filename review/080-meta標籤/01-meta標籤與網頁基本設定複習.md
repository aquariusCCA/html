---
source_notes:
  - notes/080-meta標籤/01-meta標籤與網頁基本設定.md
topics: [meta, head, 字元編碼, viewport, 文件資訊]
summary: "meta 標籤基本設定的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 10
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# meta 標籤與網頁基本設定複習

> 回憶檢索複習。概念與用法說明見 notes/080-meta標籤/01-meta標籤與網頁基本設定.md。

## 重點摘要

- `<meta>` 通常放在 `<head>` 裡，用來提供網頁後設資訊。
- 後設資訊不是頁面正文內容，但能幫瀏覽器、搜尋引擎、社群平台或工具理解頁面。
- `charset="UTF-8"` 告訴瀏覽器 HTML 文件使用 UTF-8 編碼，可避免中文亂碼。
- `viewport` 會影響手機和平板瀏覽器如何顯示頁面；常見設定包含 `width=device-width` 與 `initial-scale=1.0`。
- `X-UA-Compatible` 是舊版 Internet Explorer 相容設定，不是現代網頁每個新專案都必備。
- `author`、`generator`、`copyright` 屬於文件資訊型 metadata，通常不影響畫面排版。

### 問答 1 · 基礎 · {#080-meta-basic-q1}

`<meta>` 標籤通常應該放在哪裡？它主要提供哪一類資訊？

<details>
<summary>答案</summary>

`<meta>` 通常放在 `<head>` 裡，用來提供網頁後設資訊。這些資訊不是頁面正文內容，但能幫瀏覽器、搜尋引擎、社群平台或其他工具理解頁面。

</details>

### 問答 2 · 基礎 · {#080-meta-basic-q2}

`<meta charset="UTF-8">` 的用途是什麼？

<details>
<summary>答案</summary>

它告訴瀏覽器這份 HTML 文件使用 UTF-8 字元編碼。UTF-8 能支援中文、英文、日文、符號等多種文字；缺少或設定錯誤時，中文可能變成亂碼。

</details>

### 問答 3 · 基礎 · {#080-meta-basic-q3}

`viewport` 設定中的 `width=device-width` 與 `initial-scale=1.0` 分別代表什麼？

<details>
<summary>答案</summary>

`width=device-width` 讓頁面寬度跟裝置螢幕寬度一致；`initial-scale=1.0` 設定初始縮放比例為 1 倍。

</details>

### 問答 4 · 進階 · {#080-meta-basic-q4}

為什麼不能把所有 meta 都當成一定會影響畫面的設定？

<details>
<summary>答案</summary>

不同 meta 的用途不同。`charset`、`viewport` 會影響瀏覽器解析或顯示；`author`、`generator`、`copyright` 則主要描述文件資訊，通常不會改變畫面呈現。

</details>

### 填空 1 · 基礎 · {#080-meta-basic-f1}

初學 HTML 時，通常用 `<meta charset="____">` 設定常見字元編碼。

<details>
<summary>答案</summary>

`UTF-8`

</details>

### 填空 2 · 基礎 · {#080-meta-basic-f2}

`viewport` 中的 `____` 讓頁面寬度跟裝置螢幕寬度一致。

<details>
<summary>答案</summary>

`width=device-width`

</details>

### 填空 3 · 基礎 · {#080-meta-basic-f3}

`viewport` 中的 `____` 會把初始縮放比例設定為 1 倍。

<details>
<summary>答案</summary>

`initial-scale=1.0`

</details>

### 卡片 1 · 基礎 · {#080-meta-basic-c1}

正面：`<meta name="author">`

<details>
<summary>答案</summary>

描述網頁作者。

</details>

### 卡片 2 · 基礎 · {#080-meta-basic-c2}

正面：`<meta name="generator">`

<details>
<summary>答案</summary>

描述產生或編輯網頁的工具。

</details>

### 卡片 3 · 基礎 · {#080-meta-basic-c3}

正面：`<meta name="copyright">`

<details>
<summary>答案</summary>

描述版權資訊。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
