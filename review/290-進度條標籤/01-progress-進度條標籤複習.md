---
source_notes:
  - notes/290-進度條標籤/01-progress-進度條標籤.md
topics: [progress 標籤, 任務進度, value 與 max, 不確定進度, 進度條可存取性]
summary: "progress 進度條標籤的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 11
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# progress 進度條標籤複習

> 回憶檢索複習。概念與用法說明見 notes/290-進度條標籤/01-progress-進度條標籤.md。

## 重點摘要

- `<progress>` 是 HTML5 的進度條標籤，用來表示一項任務目前完成到哪裡。
- 適合 `<progress>` 的情境通常有「目前進度」與「目標總量」，例如上傳、下載、資料處理或大量資料載入。
- `value` 表示目前進度；`max` 表示任務完成時的目標值。
- 瀏覽器會根據 `value / max` 的比例顯示進度，例如 `50 / 100` 表示完成一半。
- `max` 必須是大於 `0` 的數值；如果沒有指定 `max`，瀏覽器會把最大值視為 `1`。
- `value` 必須是有效數值，不能小於 `0`；如果有設定 `max`，`value` 不應大於 `max`。
- 如果省略 `value`，進度條會變成不確定進度，適合只知道正在處理、但不知道完成比例的情境。
- 正式介面中，進度條應搭配附近文字、`<label>` 或 ARIA 標籤，讓使用者知道它代表哪一項任務。
- `<progress>` 不適合用來表示評分、溫度、庫存量這類一般數值，也不應只是因為畫面像長條就使用。

## 問答題

### 問答 1 · 基礎 · {#290-progress-q1}

`<progress>` 標籤在 HTML 中代表什麼語意？

<details>
<summary>答案</summary>

`<progress>` 用來表示一項任務目前完成到哪裡，也就是任務完成進度。

</details>

### 問答 2 · 基礎 · {#290-progress-q2}

`value` 與 `max` 在 `<progress>` 中各負責什麼？

<details>
<summary>答案</summary>

`value` 用來指定目前進度；`max` 用來指定進度完成時的目標值。

</details>

### 問答 3 · 基礎 · {#290-progress-q3}

`<progress value="50" max="100">` 的 `value / max` 比例應如何理解？

<details>
<summary>答案</summary>

`50 / 100` 代表目前進度是 `50`、目標值是 `100`，也就是完成了一半，瀏覽器會根據這個比例顯示進度。

</details>

### 問答 4 · 進階 · {#290-progress-q4}

省略 `<progress>` 的 `value` 屬性時，代表什麼狀態？適合用在什麼情境？

<details>
<summary>答案</summary>

省略 `value` 時，進度條會變成「不確定進度」狀態。它適合用在只知道正在處理，但不知道完成比例的情境。

</details>

### 問答 5 · 進階 · {#290-progress-q5}

為什麼不應該把所有看起來像長條的 UI 都寫成 `<progress>`？

<details>
<summary>答案</summary>

`<progress>` 適合表示任務進度，不適合用來表示評分、溫度、庫存量這類一般數值，也不適合只是做視覺分隔線、裝飾線或普通數值條。

</details>

## 填空題

### 填空 1 · 基礎 · {#290-progress-f1}

`<progress>` 表示任務的 `____`。

<details>
<summary>答案</summary>

完成進度

</details>

### 填空 2 · 基礎 · {#290-progress-f2}

如果沒有指定 `max`，瀏覽器會把最大值視為 `____`。

<details>
<summary>答案</summary>

`1`

</details>

### 填空 3 · 基礎 · {#290-progress-f3}

只知道正在處理但不知道完成比例時，可以省略 `____` 屬性。

<details>
<summary>答案</summary>

`value`

</details>

## 翻面卡片

### 卡片 1 · 基礎 · {#290-progress-c1}

正面：`value`

<details>
<summary>答案</summary>

指定目前進度；必須是有效數值，並且不能小於 `0`。

</details>

### 卡片 2 · 基礎 · {#290-progress-c2}

正面：`max`

<details>
<summary>答案</summary>

指定進度完成時的目標值，必須是大於 `0` 的數值；如果沒有指定，瀏覽器會把最大值視為 `1`。

</details>

### 卡片 3 · 進階 · {#290-progress-c3}

正面：適合使用 `<progress>` 的判斷

<details>
<summary>答案</summary>

畫面是在表示一項任務的完成進度，並且有目前值與目標值；或至少有「正在進行但比例未知」的狀態。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
