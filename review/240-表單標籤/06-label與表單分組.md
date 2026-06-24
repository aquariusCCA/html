---
source_notes:
  - notes/240-表單標籤/06-label與表單分組.md
topics: [label, fieldset, legend, 表單無障礙]
summary: "label 關聯控件與 fieldset/legend 分組語意的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 6
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# label 與表單分組複習

> 回憶檢索複習。概念與用法說明見 notes/240-表單標籤/06-label與表單分組.md。

## 重點摘要

- `label` 負責說明單一控件，`fieldset` 與 `legend` 負責說明一組控件。
- `<label>` 關聯控件後，點擊文字也能聚焦或選取對應控件。
- `for/id` 寫法中，`label for` 必須對應控件的 `id`。
- label 也可以直接包住控件，常用於 radio 或 checkbox。
- `fieldset` 表示一組表單控件，`legend` 是這組控件的標題。

### 問答 1 · 基礎 · {#240-label-q1}

`<label>` 的作用是什麼？

<details>
<summary>答案</summary>

`<label>` 可以把文字與表單控件關聯。關聯後，使用者點擊文字時，瀏覽器會自動聚焦或選取對應控件，也讓輔助技術知道控件的名稱。

</details>

### 問答 2 · 基礎 · {#240-label-q2}

使用 `for/id` 寫法時，`label for` 應該對應控件的哪個屬性？

<details>
<summary>答案</summary>

`label for` 應該對應控件的 `id`。如果 `for` 與 `id` 不一致，label 就不會正確關聯到控件。

</details>

### 問答 3 · 進階 · {#240-label-q3}

什麼情況下適合使用 `fieldset` 與 `legend`？

<details>
<summary>答案</summary>

當表單欄位很多，或有一組相關選項或欄位時，適合用 `fieldset` 分組；`legend` 用來清楚描述這組欄位的共同主題。每個實際控件仍應有自己的 label。

</details>

### 填空 1 · 基礎 · {#240-label-f1}

`____` 負責說明單一表單控件。

<details>
<summary>答案</summary>

`label`

</details>

### 填空 2 · 基礎 · {#240-label-f2}

`fieldset` 表示一組表單控件，`____` 是這組控件的標題。

<details>
<summary>答案</summary>

`legend`

</details>

### 卡片 1 · 基礎 · {#240-label-c1}

正面：包覆式 label 寫法

<details>
<summary>答案</summary>

把控件直接包在 `<label>` 裡，不需要 `for/id`。這種寫法常用於 radio 或 checkbox，結構簡潔。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
