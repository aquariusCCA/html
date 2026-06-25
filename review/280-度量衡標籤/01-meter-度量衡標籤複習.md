---
source_notes:
  - notes/280-度量衡標籤/01-meter-度量衡標籤.md
topics: [meter 標籤, 度量衡標籤, 測量值語意, meter 屬性, progress 差異]
summary: "meter 度量衡標籤的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 12
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# meter 度量衡標籤複習

> 回憶檢索複習。概念與用法說明見 notes/280-度量衡標籤/01-meter-度量衡標籤.md。

## 重點摘要

- `<meter>` 用來表示已知範圍內的測量值，也就是 scalar measurement 或 gauge。
- `<meter>` 不是單純顯示數字，而是告訴瀏覽器與輔助技術：這個數字是一個有上下限、可評估狀態的度量值。
- `value` 規定目前的度量值，是 `<meter>` 的必要屬性。
- `min` 與 `max` 規定度量範圍的最小值與最大值，實務上建議明確寫出。
- `low`、`high`、`optimum` 補充偏低、偏高與最佳值的語意，不只是視覺設定。
- `optimum` 的意義會依情境改變，設定前要確認該數值代表越高越好、越低越好，或接近某個中間值最好。
- `<meter>` 用來描述某個值的狀態；`<progress>` 用來描述任務完成進度。
- 只給 `value="50"` 卻沒有清楚範圍，不適合表示 `50 / 100`，因為未指定 `min` 與 `max` 時預設範圍是 `0` 到 `1`。
- `<meter>` 通常應搭配文字標籤或上下文說明，讓使用者知道量表代表電量、容量、評分或其他數值。
- `<meter>` 不適合用於任務進度、沒有明確範圍的普通數字，或只是為了做出類似進度條的視覺效果。

## 問答題

### 問答 1 · 基礎 · {#280-meter-q1}

`<meter>` 標籤用來表示什麼？

<details>
<summary>答案</summary>

`<meter>` 用來表示已知範圍內的測量值。它不是單純顯示數字，而是讓這個數字具有「有上下限、可評估狀態的度量值」語意。

</details>

### 問答 2 · 基礎 · {#280-meter-q2}

`value`、`min`、`max` 在 `<meter>` 中分別負責什麼？

<details>
<summary>答案</summary>

`value` 規定目前的度量值，且是必要屬性；`min` 規定度量範圍的最小值；`max` 規定度量範圍的最大值。

</details>

### 問答 3 · 進階 · {#280-meter-q3}

`low`、`high`、`optimum` 只是影響畫面外觀嗎？它們補充了什麼？

<details>
<summary>答案</summary>

不是。`low`、`high`、`optimum` 不只是視覺設定，它們補充這個測量值的狀態語意：`low` 表示偏低範圍界線，`high` 表示偏高範圍界線，`optimum` 表示最理想或最佳的值。

</details>

### 問答 4 · 進階 · {#280-meter-q4}

如何判斷應該使用 `<meter>` 還是 `<progress>`？

<details>
<summary>答案</summary>

可以問：這個數字是在描述「某個值的狀態」，還是在描述「某件事完成到哪裡」？描述值的狀態用 `<meter>`；描述任務完成進度用 `<progress>`。

</details>

### 問答 5 · 進階 · {#280-meter-q5}

為什麼 `<meter value="50"></meter>` 不適合用來表示 `50 / 100`？

<details>
<summary>答案</summary>

因為 `<meter>` 沒有指定 `min` 和 `max` 時，預設範圍是 `0` 到 `1`，`value="50"` 已經超出這個範圍，瀏覽器會把它當成最大值處理。要表示 `0` 到 `100` 之間的 `50`，應明確寫出 `min="0"` 與 `max="100"`。

</details>

## 填空題

### 填空 1 · 基礎 · {#280-meter-f1}

`<meter>` 表示已知範圍內的 `____`。

<details>
<summary>答案</summary>

測量值

</details>

### 填空 2 · 基礎 · {#280-meter-f2}

`<meter>` 的必要屬性是 `____`。

<details>
<summary>答案</summary>

`value`

</details>

### 填空 3 · 基礎 · {#280-meter-f3}

任務進度應使用 `____`，而不是 `<meter>`。

<details>
<summary>答案</summary>

`<progress>`

</details>

### 填空 4 · 基礎 · {#280-meter-f4}

`____` 用來規定最理想或最佳的值。

<details>
<summary>答案</summary>

`optimum`

</details>

## 翻面卡片

### 卡片 1 · 基礎 · {#280-meter-c1}

正面：`value`

<details>
<summary>答案</summary>

規定目前的度量值，是 `<meter>` 的必要屬性。

</details>

### 卡片 2 · 基礎 · {#280-meter-c2}

正面：`min` / `max`

<details>
<summary>答案</summary>

分別規定度量範圍的最小值與最大值。

</details>

### 卡片 3 · 進階 · {#280-meter-c3}

正面：適合使用 `<meter>` 的情況

<details>
<summary>答案</summary>

數值有明確的最小值與最大值；數值本身是在描述狀態而不是流程進度；這個值可以被判斷為偏低、正常、偏高或接近最佳值；使用者需要理解目前值在整體範圍中的位置。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
