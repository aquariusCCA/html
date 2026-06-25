---
source_notes:
  - notes/240-表單標籤/06-label與表單分組.md
topics: [label, fieldset, legend, 表單無障礙]
summary: "整理 label 關聯方式、fieldset/legend 分組語意、實務判斷與常見錯誤。"
---

# label fieldset legend 速查

> 查表內容整理自 `notes/240-表單標籤/06-label與表單分組.md`。

## label 的作用

| 功能 | 說明 |
| --- | --- |
| 關聯文字與控件 | 讓提示文字與表單控件建立語意關聯 |
| 擴大可點擊範圍 | 使用者點擊文字時，瀏覽器會自動聚焦或選取對應控件 |
| 改善輔助技術理解 | 讓輔助技術知道控件的名稱 |

## 兩種 label 寫法

| 寫法 | 範例結構 | 適用情境 |
| --- | --- | --- |
| 使用 `for` 與 `id` | `<label for="account">帳號</label>` 對應 `<input id="account">` | 清楚、常見，適合大多數情境 |
| 包覆控件 | `<label><input type="radio"> 女</label>` | 常用於 radio 或 checkbox，結構簡潔 |

## fieldset 與 legend

| 標籤 | 作用 | 使用提醒 |
| --- | --- | --- |
| `<fieldset>` | 表示一組表單控件 | 用來分組相關欄位 |
| `<legend>` | 這組控件的標題 | 應清楚描述共同主題 |
| 控件自己的 label | 說明每個實際控件 | 即使用了 fieldset，每個控件仍應有自己的 label |

## 實務判斷準則

| 判斷 | 建議 |
| --- | --- |
| 控件需要使用者操作 | 應有可辨識的 label |
| radio 或 checkbox | 特別適合用 label 擴大可點擊範圍 |
| 一組相關選項或欄位 | 可使用 `fieldset` 分組 |
| 分組標題 | 使用 `legend` 說明共同主題 |
| 只是為了排版 | 不要使用 `fieldset`，排版交給 CSS |

## 常見錯誤與修正

| 錯誤 | 問題 | 建議 |
| --- | --- | --- |
| 文字看起來在旁邊，但沒有 label 關聯 | 畫面可見，但文字與輸入框沒有語意關聯 | 使用 `label for` 搭配控件 `id` |
| `for` 與 `id` 不一致 | label 找不到對應控件，無法正確關聯 | 讓 `for` 與控件 `id` 完全一致 |
| fieldset 裡放入不相關欄位 | 分組失去意義 | fieldset 應代表一組同主題或同任務的欄位 |
