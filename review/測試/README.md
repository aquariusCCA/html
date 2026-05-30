# 複習系統：測試

## 來源

- 來源章節：`notes/測試/`
- 筆記數量：7
- 複習題數：21

## 使用方式

1. 先閱讀「知識地圖」確認本章複習範圍。
2. 依 `spaced-review-plan.md` 的 D0、D1、D3、D7、D14、D30 執行。
3. 做題時先不要看答案或評分要點。
4. 答錯題目後，依 `wrong-question-loop.md` 記錄錯因並回流補強。
5. 每個階段結束後，用 `checkpoints.md` 檢查是否可以進到下一階段。

## 來源分流摘要

| 類型 | 本章處理方式 |
| --- | --- |
| `review_concepts` | 只收錄各筆記明確教學、直接操作、具備範例或規則說明的表單概念，作為題目主要考點。 |
| `context_points` | 只作為比較、提醒、錯誤原因或情境補充，例如「選項很多可考慮 select」、「reset 要小心使用」、「placeholder 不能取代 label」。 |

## 知識地圖

| 區塊 | 核心觀念 | 來源筆記 | 對應題目 |
| --- | --- | --- | --- |
| 表單基本結構 | 表單用途、表單域、表單控件、提示信息、`action`、`method`、`name` | `notes/測試/01-表單入門與form基本結構.md` | L1-001, L1-002, L2-001, L3-001 |
| 基礎 input | `<input>`、`type`、`name`、`value`、`placeholder`、`maxlength`、`text`、`password`、`hidden` | `notes/測試/02-input標籤與基礎輸入控件.md` | L1-003, L2-002, L3-002 |
| 選項控件 | `radio`、`checkbox`、相同 `name`、`value`、`checked` | `notes/測試/03-radio與checkbox選項控件.md` | L1-004, L2-003, L3-003 |
| 表單按鈕 | `submit`、`reset`、`button`、`<input>` 按鈕、`<button>` 預設行為 | `notes/測試/04-表單按鈕與提交重置操作.md` | L1-005, L2-004, L3-004 |
| 下拉與多行輸入 | `<select>`、`<option>`、`selected`、`<textarea>`、`rows`、`cols` | `notes/測試/05-select與textarea表單控件.md` | L1-006, L2-005, L3-005 |
| 可讀性與狀態 | `<label>`、`for` / `id`、`<fieldset>`、`<legend>`、`disabled` | `notes/測試/06-表單標籤分組與禁用狀態.md` | L1-007, L2-006, L3-005 |
| HTML5 表單能力 | HTML5 input 類型、`required`、`autofocus`、`autocomplete`、placeholder 與 label | `notes/測試/07-HTML5-input類型與新增表單屬性.md` | L1-008, L2-007, L3-006 |

## 複習題型分布

| 複習層次 | 題數 | 目標 |
| --- | --- | --- |
| Level 1 記憶型 | 8 | 不看筆記能回憶表單標籤、屬性、類型與基本規則。 |
| Level 2 理解型 | 7 | 能解釋為什麼要這樣設計，並分辨相近概念與常見誤用。 |
| Level 3 應用型 | 6 | 能根據需求組合表單結構、修正錯誤或設計小型表單。 |

## 檔案導覽

| 檔案 | 用途 |
| --- | --- |
| `question-bank.md` | 完整題庫與答案 / 評分要點 |
| `spaced-review-plan.md` | D0 到 D30 的複習安排 |
| `wrong-question-loop.md` | 錯題記錄表與回流規則 |
| `checkpoints.md` | 階段完成標準與自我檢查 |
