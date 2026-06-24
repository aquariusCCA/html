---
source_notes:
  - notes/240-表單標籤/07-textarea多行文本域.md
topics: [textarea, 多行文字輸入, rows cols]
summary: "textarea 多行文字輸入、初始內容與尺寸設定邊界的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 6
  priority: 中
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# textarea 多行文本域複習

> 回憶檢索複習。概念與用法說明見 notes/240-表單標籤/07-textarea多行文本域.md。

## 重點摘要

- `<textarea>` 用來收集多行文字。
- 留言、評論、地址、問題描述等可能超過一行的內容適合用 `<textarea>`。
- textarea 的初始內容寫在開始標籤與結束標籤中間，不寫在 `value`。
- textarea 本身就是多行文本域，沒有 `type` 屬性。
- `rows` 與 `cols` 可指定預設大小，但正式版面通常交給 CSS 控制。

### 問答 1 · 基礎 · {#240-textarea-q1}

什麼情境應該使用 `<textarea>`？

<details>
<summary>答案</summary>

當使用者需要輸入可能超過一行的內容時，應使用 `<textarea>`，例如留言、評論、地址或問題描述。

</details>

### 問答 2 · 基礎 · {#240-textarea-q2}

textarea 的初始內容應該寫在哪裡？

<details>
<summary>答案</summary>

textarea 的初始內容應寫在開始標籤與結束標籤中間，例如 `<textarea name="intro">這是預設文字</textarea>`，不是寫在 `value`。

</details>

### 問答 3 · 進階 · {#240-textarea-q3}

為什麼正式版面通常不只靠 `rows` 和 `cols` 控制 textarea 大小？

<details>
<summary>答案</summary>

`rows` 與 `cols` 可以指定預設顯示大小，但實際開發中，版面大小通常交給 CSS 控制，較適合處理寬度、高度與響應式版面。

</details>

### 填空 1 · 基礎 · {#240-textarea-f1}

textarea 本身就是多行文本域，不需要也不應使用 `____` 屬性。

<details>
<summary>答案</summary>

`type`

</details>

### 填空 2 · 基礎 · {#240-textarea-f2}

`____` 指定預設顯示行數，`____` 指定預設顯示列數。

<details>
<summary>答案</summary>

`rows`；`cols`

</details>

### 卡片 1 · 基礎 · {#240-textarea-c1}

正面：`<input type="text">` 與 `<textarea>` 的使用差異

<details>
<summary>答案</summary>

短文字、單行資料使用 `<input type="text">`；留言、評論、描述、地址等長文字或多行內容使用 `<textarea>`。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
