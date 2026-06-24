---
source_notes:
  - notes/230-表格標籤/02-rowspan-colspan-合併單元格.md
topics: [合併單元格, rowspan, colspan, 表格結構檢查]
summary: "rowspan 與 colspan 合併方向、寫法與結構檢查的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 7
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# rowspan 與 colspan 複習

> 回憶檢索複習。概念與用法說明見 notes/230-表格標籤/02-rowspan-colspan-合併單元格.md。

## 重點摘要

- `rowspan` 讓儲存格向下跨多列，`colspan` 讓儲存格向右跨多欄。
- 合併單元格的三步驟是判斷方向、找到保留的目標儲存格並加上屬性、刪除被合併掉的多餘儲存格。
- `rowspan="2"` 代表目前這一列加下一列，共占 2 列高度。
- `colspan="2"` 代表目前這一欄加右邊一欄，共占 2 欄寬度。
- 合併後若欄位錯位，通常要檢查是否刪錯或少刪了被占用的儲存格。
- 合併單元格用來表達資料關係，不應拿來取代 CSS 排版。

### 問答 1 · 基礎 · {#230-table-span-q1}

`rowspan` 與 `colspan` 的合併方向分別是什麼？

<details>
<summary>答案</summary>

`rowspan` 是跨列，方向向下；`colspan` 是跨欄，方向向右。

</details>

### 問答 2 · 基礎 · {#230-table-span-q2}

合併單元格的三個步驟是什麼？

<details>
<summary>答案</summary>

先判斷要跨列還是跨欄；再找到合併後要保留的目標儲存格，寫上 `rowspan` 或 `colspan`；最後刪除被合併掉的多餘儲存格。

</details>

### 問答 3 · 進階 · {#230-table-span-q3}

如果表格合併後欄位錯位，第一個應該檢查什麼？

<details>
<summary>答案</summary>

應先檢查被合併占用的位置是否有刪除正確，也就是有沒有刪錯或少刪了某個多餘的 `<td>` 或 `<th>`。

</details>

### 填空 1 · 基礎 · {#230-table-span-f1}

`____="2"` 表示這個儲存格會占用目前這一列加下一列，共 2 列的高度。

<details>
<summary>答案</summary>

`rowspan`

</details>

### 填空 2 · 基礎 · {#230-table-span-f2}

`____="2"` 表示這個儲存格會占用目前這一欄加右邊一欄，共 2 欄的寬度。

<details>
<summary>答案</summary>

`colspan`

</details>

### 卡片 1 · 基礎 · {#230-table-span-c1}

正面：`rowspan`

<details>
<summary>反面</summary>

跨列合併，也就是讓儲存格向下跨多列。

</details>

### 卡片 2 · 基礎 · {#230-table-span-c2}

正面：`colspan`

<details>
<summary>反面</summary>

跨欄合併，也就是讓儲存格向右跨多欄。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
