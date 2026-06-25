---
source_notes:
  - notes/300-datalist標籤/01-datalist標籤.md
topics: [datalist, 表單輸入, 輸入建議, datalist與select差異]
summary: "datalist 標籤的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 12
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# datalist 標籤複習

> 回憶檢索複習。概念與用法說明見 notes/300-datalist標籤/01-datalist標籤.md。

## 重點摘要

- `<datalist>` 替 `<input>` 提供候選建議值；它不是強制選單，使用者仍可輸入清單外的內容。
- `<datalist>` 本身不會單獨形成可輸入欄位；真正輸入內容的是 `<input>`。
- `list` 屬性寫在 `<input>` 上，用來指定要連到哪一個 `<datalist>`。
- `id` 屬性寫在 `<datalist>` 上，提供給 `input[list]` 對應。
- `input` 的 `list` 值必須等於 `datalist` 的 `id` 值，瀏覽器才知道這個輸入框要使用哪一組建議選項。
- `<option>` 定義每一個建議選項，建議明確寫出 `value`。
- `<datalist>` 常和表單一起使用，但不一定要放在 `<form>` 裡；真正會被送出的是 `<input>`，不是 `<datalist>`。
- `<datalist>` 適合「提供建議，但仍允許自由輸入」的欄位。
- 如果使用者只能從固定選項中選一個，或欄位必須強制限制為指定值，應使用 `<select>`。
- `<datalist>` 不能取代資料驗證；真正重要的限制仍應在後端再次檢查。

## 問答題

### 問答 1 · 基礎 · {#300-datalist-q1}

`<datalist>` 的用途是什麼？

<details>
<summary>答案</summary>

`<datalist>` 是替 `<input>` 提供候選建議值的標籤；它不是強制選單，使用者仍然可以輸入清單外的內容。

</details>

### 問答 2 · 基礎 · {#300-datalist-q2}

`<input>` 與 `<datalist>` 要如何綁定？

<details>
<summary>答案</summary>

`<input>` 的 `list` 屬性值必須對應到 `<datalist>` 的 `id` 屬性值。兩個值相同，瀏覽器才知道這個輸入框要使用哪一組建議選項。

</details>

### 問答 3 · 基礎 · {#300-datalist-q3}

`<option>` 在 `<datalist>` 中扮演什麼角色？

<details>
<summary>答案</summary>

`<option>` 是每一個建議選項，通常用 `value` 表示候選值。為了讓選項清楚可靠，建議明確寫出 `value`。

</details>

### 問答 4 · 進階 · {#300-datalist-q4}

什麼情況適合用 `<datalist>`，什麼情況應該用 `<select>`？

<details>
<summary>答案</summary>

如果使用者可以參考建議，但也能輸入其他值，適合用 `<datalist>`。如果使用者只能從固定選項中選一個，或欄位需要強制限制為指定值，應使用 `<select>`。

</details>

### 問答 5 · 進階 · {#300-datalist-q5}

`<datalist>` 能不能取代資料驗證？為什麼？

<details>
<summary>答案</summary>

不能。`<datalist>` 只是提供建議清單，不會阻止使用者輸入清單外的值。只要資料有固定合法範圍，真正重要的限制仍然應該在後端再次檢查。

</details>

## 填空題

### 填空 1 · 基礎 · {#300-datalist-f1}

`<datalist>` 本身不會單獨形成可輸入欄位，真正輸入內容的是 `____`。

<details>
<summary>答案</summary>

`<input>`

</details>

### 填空 2 · 基礎 · {#300-datalist-f2}

`<input>` 使用 `____` 屬性指定要連到哪一個 `<datalist>`。

<details>
<summary>答案</summary>

`list`

</details>

### 填空 3 · 基礎 · {#300-datalist-f3}

`<datalist>` 使用 `____` 屬性提供給 `input[list]` 對應。

<details>
<summary>答案</summary>

`id`

</details>

### 填空 4 · 基礎 · {#300-datalist-f4}

建議值主要來自 `<option>` 的 `____` 屬性。

<details>
<summary>答案</summary>

`value`

</details>

## 翻面卡片

### 卡片 1 · 基礎 · {#300-datalist-c1}

正面：`input[list]` ↔ `datalist[id]`

<details>
<summary>答案</summary>

兩個值必須相同，瀏覽器才知道這個輸入框要使用哪一組建議選項。

</details>

### 卡片 2 · 進階 · {#300-datalist-c2}

正面：`<datalist>`

<details>
<summary>答案</summary>

建議清單；不會阻止使用者輸入清單外的值，因此不是強制選單。

</details>

### 卡片 3 · 進階 · {#300-datalist-c3}

正面：適合使用 `<datalist>` 的判斷

<details>
<summary>答案</summary>

欄位仍然允許使用者輸入清單外的值；選項只是提示或常見答案，不是唯一合法答案；使用者看到建議值後能更快完成輸入。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
