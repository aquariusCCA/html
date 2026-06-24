---
source_notes:
  - notes/220-列表標籤/02-自定義列表-dl-dt-dd.md
topics: [描述列表, dl-dt-dd, 名稱描述關係, 列表語意]
summary: "dl、dt、dd 的語意、使用時機與常見錯誤的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 9
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# dl、dt、dd 描述列表複習

> 回憶檢索複習。概念與用法說明見 notes/220-列表標籤/02-自定義列表-dl-dt-dd.md。

## 重點摘要

- `<dl>`（description list）：描述列表，包住整組 `<dt>` 與 `<dd>`。
- `<dt>`（description term）：被描述的名稱或項目，例如術語名稱、規格名稱、問題。
- `<dd>`（description details）：對應的描述內容，例如定義、說明、答案、規格值。
- **一個 `<dt>` 可以對應多個 `<dd>`**。
- 適合情境：術語解釋、規格描述、問答、頁尾分類名稱與多個連結。
- 不適合情境：純並列項目（用 `<ul>`）、有順序的步驟（用 `<ol>`）。
- `<dl>` 裡主要放 `<dt>` 與 `<dd>`，不可放 `<li>`。
- 不可只為了去掉項目符號而把 `<ul>` 改成 `<dl>`——語意應由資料關係決定。

---

### 問答 1 · 基礎 · {#220-dl-q1}

`<dl>`、`<dt>`、`<dd>` 各自的全名是什麼？

<details>
<summary>答案</summary>

- `<dl>`：**description list**（描述列表）
- `<dt>`：**description term**（被描述的名稱或項目）
- `<dd>`：**description details**（對應的描述內容）

</details>

---

### 問答 2 · 基礎 · {#220-dl-q2}

一個 `<dt>` 可以對應幾個 `<dd>`？

<details>
<summary>答案</summary>

一個或多個。一個 `<dt>` 底下可以有多個 `<dd>`，例如一個分類名稱底下列出多個描述項或連結。

</details>

---

### 問答 3 · 基礎 · {#220-dl-q3}

什麼樣的資料適合使用描述列表 `<dl>`？

<details>
<summary>答案</summary>

適合表達**名稱與描述的對應關係**，例如：術語與定義、商品規格名稱與規格內容、常見問題的問題與答案、頁尾分類名稱與多個連結。關鍵是「哪個是名稱、哪個是說明」的語意要清楚。

</details>

---

### 問答 4 · 進階 · {#220-dl-q4}

只是不想要項目符號，可以把 `<ul>` 改成 `<dl>` 嗎？為什麼？

<details>
<summary>答案</summary>

不可以。`<dl>` 的語意是「名稱與描述的對應關係」；如果資料只是並列項目，並沒有名稱與說明的對應，用 `<dl>` 會讓語意不正確。是否使用 `<dl>` 應取決於資料關係，不是視覺樣式。去掉符號應交給 CSS。

</details>

---

### 填空 1 · 基礎 · {#220-dl-f1}

`<dl>` 代表 `____`；`<dt>` 代表 `____`；`<dd>` 代表 `____`。

<details>
<summary>答案</summary>

- `<dl>`：**description list**
- `<dt>`：**description term**
- `<dd>`：**description details**

</details>

---

### 填空 2 · 基礎 · {#220-dl-f2}

`<dl>` 裡不可以直接放 `____` 標籤，那是 `<ul>`/`<ol>` 的列表項目元素。

<details>
<summary>答案</summary>

**`<li>`**

</details>

---

### 卡片 1 · 基礎 · {#220-dl-c1}

**正面**：`<dl>`

<details>
<summary>反面：語意與全名</summary>

**description list**，描述列表。包住整組 `<dt>` 與 `<dd>`，用來表達名稱與描述的對應關係。

</details>

---

### 卡片 2 · 基礎 · {#220-dl-c2}

**正面**：`<dt>`

<details>
<summary>反面：語意與全名</summary>

**description term**，被描述的名稱或項目。常見內容：名詞、分類名稱、問題、規格名稱。

</details>

---

### 卡片 3 · 基礎 · {#220-dl-c3}

**正面**：`<dd>`

<details>
<summary>反面：語意與全名</summary>

**description details**，對應的描述內容。常見內容：定義、說明、答案、規格值、連結。

</details>

---

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
