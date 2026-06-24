---
source_notes:
  - notes/240-表單標籤/08-hidden與disabled表單狀態.md
topics: [hidden, disabled, 表單提交, 前端安全]
summary: "hidden 與 disabled 在可見性、可操作性、提交行為與安全邊界上的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 6
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# hidden 與 disabled 表單狀態複習

> 回憶檢索複習。概念與用法說明見 notes/240-表單標籤/08-hidden與disabled表單狀態.md。

## 重點摘要

- `hidden` 是看不見但會帶資料；`disabled` 是不能操作且通常不會提交。
- `type="hidden"` 常用來在提交表單時攜帶固定資料。
- hidden 資料仍在 HTML 裡，使用者可以透過開發者工具看到與修改。
- `disabled` 讓表單控件無法操作，瀏覽器通常會用不可互動樣式提示使用者。
- hidden 與 disabled 都是前端狀態，不是安全邊界。

### 問答 1 · 基礎 · {#240-state-q1}

`hidden` 與 `disabled` 的核心差異是什麼？

<details>
<summary>答案</summary>

`hidden` 是看不見但通常會提交資料；`disabled` 是看得到但不可操作，且通常不會提交。

</details>

### 問答 2 · 進階 · {#240-state-q2}

為什麼 hidden 不能當成安全機制？

<details>
<summary>答案</summary>

hidden 只是畫面上不可見，資料仍然在 HTML 裡。使用者可以透過開發者工具看到與修改它，所以價格、權限、使用者身分等重要資料不應只相信 hidden 欄位送來的值。

</details>

### 問答 3 · 進階 · {#240-state-q3}

為什麼 `disabled` 不能當作權限控制？

<details>
<summary>答案</summary>

把按鈕或欄位禁用只能改善介面體驗，不能當成權限控制。使用者仍可能直接呼叫 API，真正的權限必須由後端檢查。

</details>

### 填空 1 · 基礎 · {#240-state-f1}

隱藏域通常寫成 `<input type="____" name="tag" value="100">`。

<details>
<summary>答案</summary>

`hidden`

</details>

### 填空 2 · 基礎 · {#240-state-f2}

如果想一次禁用一組表單控件，可以在 `<fieldset>` 上使用 `____`。

<details>
<summary>答案</summary>

`disabled`

</details>

### 卡片 1 · 基礎 · {#240-state-c1}

正面：hidden 與 disabled 的提交行為

<details>
<summary>答案</summary>

hidden 通常會提交；disabled 通常不會提交。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
