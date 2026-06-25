---
source_notes:
  - notes/310-detail標籤/01-details與summary標籤.md
topics: [details標籤, summary標籤, 原生展開收合, open屬性, 互動語意]
summary: "details 與 summary 標籤的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 11
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# details 與 summary 標籤複習

> 回憶檢索複習。概念與用法說明見 notes/310-detail標籤/01-details與summary標籤.md。

## 重點摘要

- `<details>` 表示一組可以展開或收合的詳細內容。
- `<summary>` 是 `<details>` 中永遠可見、可被點擊的摘要標題。
- `<summary>` 應放在 `<details>` 裡面，並作為第一個子元素。
- 使用者點擊 `<summary>` 時，`<details>` 裡的其他內容會展開或收合。
- 如果希望內容一開始就是展開狀態，可以在 `<details>` 上加入 `open` 屬性。
- `open` 是布林屬性；只要出現在 `<details>` 上，就代表這個區塊預設展開。
- 單獨使用 `<details>` 而省略 `<summary>` 時，瀏覽器可能顯示預設標題，但該標題不一定符合內容，也不利讀者理解。
- `<details>` 適合簡單的展開與收合內容，例如 FAQ、補充說明、產品規格細節或次要內容。
- `<details>` 不適合取代所有互動元件；主要導覽、多層級複雜互動、需要細緻控制動畫/焦點/資料狀態的元件通常需要更完整的 HTML、CSS 與 JavaScript 配合。

## 問答題

### 問答 1 · 基礎 · {#310-details-q1}

`<details>` 與 `<summary>` 各自代表什麼語意？

<details>
<summary>答案</summary>

`<details>` 表示一組可以展開或收合的詳細內容；`<summary>` 是這組內容中永遠可見、可被點擊的摘要標題。

</details>

### 問答 2 · 基礎 · {#310-details-q2}

`<summary>` 應該放在哪裡，才能正確作為該組可展開內容的摘要標題？

<details>
<summary>答案</summary>

`<summary>` 應放在 `<details>` 裡面，並且作為第一個子元素。

</details>

### 問答 3 · 基礎 · {#310-details-q3}

`open` 屬性有什麼作用？

<details>
<summary>答案</summary>

`open` 是布林屬性。只要它出現在 `<details>` 上，就代表這個區塊預設展開；沒有 `open` 時，內容通常預設收合。

</details>

### 問答 4 · 進階 · {#310-details-q4}

為什麼正式內容不建議只寫 `<details>` 而省略 `<summary>`？

<details>
<summary>答案</summary>

瀏覽器仍然可能顯示一個預設標題，例如「Details」。但這個標題不一定符合內容，也不利於讀者理解，因此正式內容應明確提供 `<summary>`。

</details>

### 問答 5 · 進階 · {#310-details-q5}

`<details>` 不適合承擔哪些互動需求？

<details>
<summary>答案</summary>

`<details>` 不適合主要導覽選單、多層級複雜互動，以及需要細緻控制動畫、焦點管理或資料狀態的元件；這些通常需要更完整的 HTML、CSS 與 JavaScript 配合。

</details>

## 填空題

### 填空 1 · 基礎 · {#310-details-f1}

`____` 用來建立可展開與收合的詳細內容區塊。

<details>
<summary>答案</summary>

`<details>`

</details>

### 填空 2 · 基礎 · {#310-details-f2}

`____` 是 `<details>` 裡的摘要標題，應放在第一個子元素位置。

<details>
<summary>答案</summary>

`<summary>`

</details>

### 填空 3 · 基礎 · {#310-details-f3}

讓 `<details>` 的內容預設展開，應加上 `____` 屬性。

<details>
<summary>答案</summary>

`open`

</details>

## 翻面卡片

### 卡片 1 · 基礎 · {#310-details-c1}

正面：`<summary>`

<details>
<summary>答案</summary>

使用者一開始看得到、可以點擊的標題，用來切換 `<details>` 的展開狀態。

</details>

### 卡片 2 · 基礎 · {#310-details-c2}

正面：`open`

<details>
<summary>答案</summary>

布林屬性；出現在 `<details>` 上時，代表內容預設展開。

</details>

### 卡片 3 · 進階 · {#310-details-c3}

正面：適合使用 `<details>` 的判斷

<details>
<summary>答案</summary>

這塊內容是一個標題加上一段可選擇查看的詳細資訊，例如 FAQ 答案、文章補充說明、表格或清單下方的詳細資訊，或不想一開始佔用太多版面的次要內容。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
