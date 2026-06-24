---
source_notes:
  - notes/050-全局屬性/02-data-自訂資料屬性.md
topics: [data-*, 自訂資料屬性, dataset, JavaScript 資料讀取]
summary: "data-* 自訂資料屬性的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 7
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# data-* 自訂資料屬性複習

> 回憶檢索複習。概念與用法說明見 notes/050-全局屬性/02-data-自訂資料屬性.md。

---

## 重點摘要

- `data-*` 用途：在 HTML 元素上存放**給程式使用的私有自訂資料**，不是主要給使用者看的內容。
- 命名規則：固定前綴 `data-`、自訂名稱至少一字元、**不應含大寫字母**、屬性值本質為**字串**。
- JS 讀取：透過 `element.dataset` 存取；`data-animal-type` → `dataset.animalType`（去掉 `data-`，連字號後字母轉大寫）。
- 適合少量且和元素直接相關的資料；不適合存放大量 JSON 或需要頻繁更新的複雜狀態。

---

## 問答 1 · 基礎 · {#050-data-q1}

`data-*` 屬性的用途是什麼？這些資料主要供誰使用？

<details>
<summary>答案</summary>

`data-*` 用來在 HTML 元素上存放**自訂的私有資料**，主要供 **JavaScript** 使用，不是主要給使用者閱讀的內容。使用者在畫面上看到的是元素的文字內容，而 JavaScript 可以透過 `dataset` 讀取額外的資料。

</details>

---

## 問答 2 · 基礎 · {#050-data-q2}

`data-*` 的命名規則有哪些限制？

<details>
<summary>答案</summary>

- 固定前綴：`data-`
- 自訂名稱至少要有一個字元
- 屬性名稱**不應包含大寫字母**（建議使用小寫與連字號）
- 屬性值本質上是**字串**

</details>

---

## 問答 3 · 進階 · {#050-data-q3}

`data-animal-type` 在 JavaScript 的 `dataset` 中對應什麼名稱？轉換規則是什麼？

<details>
<summary>答案</summary>

對應 `dataset.animalType`。

轉換規則：去掉 `data-`，將**連字號後面的字母轉成大寫**。

例如：
- `data-animal-type` → `dataset.animalType`
- `data-food-type` → `dataset.foodType`
- `data-product-id` → `dataset.productId`

</details>

---

## 填空 1 · 基礎 · {#050-data-f1}

讀取 `data-food-type` 時，在 JavaScript 中應寫 `element.dataset.____`。

<details>
<summary>答案</summary>

**foodType**

</details>

---

## 填空 2 · 基礎 · {#050-data-f2}

`data-*` 的屬性值本質上是 `____` 型別。

<details>
<summary>答案</summary>

**字串**

</details>

---

## 卡片 1 · 基礎 · {#050-data-c1}

**data-\* 屬性** → 用途？

<details>
<summary>答案</summary>

在 HTML 元素上存放**給程式使用的自訂私有資料**，不是主要給使用者閱讀的內容。

</details>

---

## 卡片 2 · 進階 · {#050-data-c2}

`data-product-id` → JavaScript 中的 `dataset` 名稱？

<details>
<summary>答案</summary>

`dataset.productId`

規則：去掉 `data-`，連字號後的字母轉大寫。

</details>

---

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
|---|---|---|---|---|---|---|
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
