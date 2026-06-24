---
source_notes:
  - notes/050-全局屬性/01-id-class-style-元素識別分類與樣式.md
topics: [id, class, style, 元素識別, 行內樣式]
summary: "id、class、style 三個全局屬性的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 9
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# id、class、style 複習

> 回憶檢索複習。概念與用法說明見 notes/050-全局屬性/01-id-class-style-元素識別分類與樣式.md。

---

## 重點摘要

- **id**：唯一識別碼，同一文件中不應重複；用於 CSS 選取、JavaScript 取得元素、頁內錨點。
- **class**：分類名稱，可多個元素共用；一個元素可同時擁有多個 class，以空格分隔。
- **style**：行內 CSS，優先權較高；適合快速測試、少量一次性樣式或 JavaScript 動態調整，不適合大量取代外部樣式表。
- 判斷原則：唯一定位→`id`，群組分類→`class`，直接設定樣式→`style`。

---

## 問答 1 · 基礎 · {#050-id-q1}

`id` 和 `class` 最核心的差別是什麼？

<details>
<summary>答案</summary>

`id` 是**唯一識別碼**，同一份 HTML 文件中不應有兩個元素使用相同的 `id`。`class` 則是**分類名稱**，可以被多個元素共用，同一個元素也可以同時屬於多個 class。

</details>

---

## 問答 2 · 基礎 · {#050-id-q2}

`style` 行內樣式適合用在哪些情境？哪些情境不建議使用？

<details>
<summary>答案</summary>

**適合**：快速測試一個樣式、少量一次性的樣式、JavaScript 動態調整元素樣式。

**不建議**：大量在全站使用，因為樣式會分散在 HTML 裡，後續維護困難。多個元素需要相同樣式時，應改用 `class` 搭配外部 CSS。

</details>

---

## 問答 3 · 進階 · {#050-id-q3}

一個元素可以同時擁有多個 `class` 嗎？如何寫？

<details>
<summary>答案</summary>

可以。多個 class 之間用**空格**分隔，例如：

```html
<h1 class="intro important">標題</h1>
```

這個 `<h1>` 同時屬於 `intro` 和 `important` 兩個類別。

</details>

---

## 填空 1 · 基礎 · {#050-id-f1}

在同一份 HTML 文件中，`____` 屬性的值不應重複。

<details>
<summary>答案</summary>

**id**

</details>

---

## 填空 2 · 基礎 · {#050-id-f2}

若多個按鈕都需要套用相同樣式，應使用 `____` 而非 `____`。

<details>
<summary>答案</summary>

**class**；**style**

</details>

---

## 填空 3 · 基礎 · {#050-id-f3}

`<p id="note" class="lead important">` 這個段落同時屬於 `____` 和 `____` 兩個類別。

<details>
<summary>答案</summary>

**lead**；**important**

</details>

---

## 卡片 1 · 基礎 · {#050-id-c1}

**id** → 用途？

<details>
<summary>答案</summary>

標記**唯一元素**，同一文件中不應重複；常搭配 CSS 選取、JavaScript 取得元素、頁內錨點使用。

</details>

---

## 卡片 2 · 基礎 · {#050-id-c2}

**class** → 用途？

<details>
<summary>答案</summary>

標記**同類元素**，可多個元素共用；一個元素也可同時有多個 class（空格分隔）；常搭配 CSS 和 JavaScript 使用。

</details>

---

## 卡片 3 · 基礎 · {#050-id-c3}

**style** → 用途？

<details>
<summary>答案</summary>

直接在元素上寫**行內 CSS**；優先權較高，方便但不適合大量取代樣式表。

</details>

---

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
|---|---|---|---|---|---|---|
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
