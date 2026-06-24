---
source_notes:
  - notes/240-表單標籤/02-input基礎與文字密碼輸入.md
topics: [input 控件, 文字輸入, 密碼輸入, 欄位屬性, 檔案上傳]
summary: "input 基礎、文字密碼輸入與常用欄位屬性的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 6
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# input 基礎與文字密碼輸入複習

> 回憶檢索複習。概念與用法說明見 notes/240-表單標籤/02-input基礎與文字密碼輸入.md。

## 重點摘要

- `<input>` 是表單中用來收集使用者輸入的單標籤。
- `type` 決定 `<input>` 呈現成哪一種控件。
- `text` 適合單行文字，`password` 適合不應直接顯示的文字。
- `name` 是提交欄位名稱，`value` 是欄位真正的值，`placeholder` 是提示文字。
- 密碼框只改變畫面顯示方式，不代表資料已經被加密。

### 問答 1 · 基礎 · {#240-input-q1}

`<input>` 在表單中的用途是什麼？`type` 又負責什麼？

<details>
<summary>答案</summary>

`<input>` 是表單中用來收集使用者輸入的單標籤；`type` 決定它呈現成哪一種控件。

</details>

### 問答 2 · 基礎 · {#240-input-q2}

`value` 與 `placeholder` 最大的差異是什麼？

<details>
<summary>答案</summary>

`value` 是欄位真正的值；`placeholder` 是輸入前顯示的提示文字。把提示文字放在 `value` 可能會讓那段文字被提交。

</details>

### 問答 3 · 進階 · {#240-input-q3}

為什麼 `type="password"` 不代表資料已經安全？

<details>
<summary>答案</summary>

`type="password"` 只會讓瀏覽器把輸入內容以遮蔽方式呈現，避免旁人直接看到；真正的安全處理仍需要 HTTPS、後端驗證與安全的密碼儲存方式。

</details>

### 填空 1 · 基礎 · {#240-input-f1}

建立單行文字輸入框時，常使用 `<input type="____" name="username">`。

<details>
<summary>答案</summary>

`text`

</details>

### 填空 2 · 基礎 · {#240-input-f2}

`____` 可以限制文字欄位最多可輸入的字元數。

<details>
<summary>答案</summary>

`maxlength`

</details>

### 卡片 1 · 基礎 · {#240-input-c1}

正面：`type="file"`

<details>
<summary>答案</summary>

用來建立文件上傳欄位，讓使用者選擇本機檔案；實際檔案如何接收、儲存與驗證仍需要後端配合。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
