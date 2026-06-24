---
source_notes:
  - notes/240-表單標籤/05-HTML5輸入類型與表單屬性.md
topics: [HTML5 input 類型, 原生驗證, 表單屬性, placeholder]
summary: "HTML5 input 類型、表單屬性與前後端驗證邊界的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 6
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# HTML5 輸入類型與表單屬性複習

> 回憶檢索複習。概念與用法說明見 notes/240-表單標籤/05-HTML5輸入類型與表單屬性.md。

## 重點摘要

- HTML5 input 類型讓瀏覽器知道欄位資料應該長什麼樣子。
- `email`、`url`、`number` 等類型可啟用瀏覽器基本驗證或輸入輔助。
- `required`、`placeholder`、`autofocus`、`autocomplete` 可改善表單互動。
- `::placeholder` 只改變提示文字的顯示樣式，不改變欄位真正的值。
- 前端表單屬性能改善體驗，但不能取代後端驗證。

### 問答 1 · 基礎 · {#240-html5-q1}

HTML5 input 類型的主要用途是什麼？

<details>
<summary>答案</summary>

HTML5 input 類型讓欄位語意更清楚，讓瀏覽器知道這欄資料應該長什麼樣子，也能啟用瀏覽器內建的輸入輔助與基本驗證。

</details>

### 問答 2 · 基礎 · {#240-html5-q2}

`required` 的作用是什麼？它能保證後端收到的資料一定正確嗎？

<details>
<summary>答案</summary>

`required` 讓欄位成為必填，未填時瀏覽器會阻止提交並提示。但它不能保證後端收到的資料一定正確，重要資料仍要在後端再次驗證。

</details>

### 問答 3 · 進階 · {#240-html5-q3}

為什麼 placeholder 不能取代 label？

<details>
<summary>答案</summary>

placeholder 在使用者開始輸入後會消失，不能取代欄位名稱。較好的做法是保留 `label` 說明欄位，再用 placeholder 提供範例或補充提示。

</details>

### 填空 1 · 基礎 · {#240-html5-f1}

如果欄位要填電子郵件，通常應使用 `type="____"`，而不是只用 `type="text"`。

<details>
<summary>答案</summary>

`email`

</details>

### 填空 2 · 基礎 · {#240-html5-f2}

CSS 中可以使用 `____` 修改 placeholder 的提示文字樣式。

<details>
<summary>答案</summary>

`::placeholder`

</details>

### 卡片 1 · 進階 · {#240-html5-c1}

正面：`type="tel"` 是否一定會自動驗證手機格式？

<details>
<summary>答案</summary>

不一定。`tel` 主要是告訴瀏覽器這是電話輸入欄位，行動裝置可能顯示較適合輸入電話的鍵盤；各地電話格式差異很大，瀏覽器不一定會自動驗證手機格式。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
