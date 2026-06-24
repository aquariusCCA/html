---
source_notes:
  - notes/050-全局屬性/06-tabindex-accesskey-鍵盤操作與導覽.md
topics: [tabindex, accesskey, 鍵盤導覽, 焦點管理, 可及性]
summary: "tabindex 與 accesskey 鍵盤操作屬性的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 8
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# tabindex 與 accesskey 複習

> 回憶檢索複習。概念與用法說明見 notes/050-全局屬性/06-tabindex-accesskey-鍵盤操作與導覽.md。

---

## 重點摘要

- **tabindex** 控制 Tab 鍵的聚焦行為：
  - `-1`：可由 JavaScript 主動聚焦，但**不進入**一般 Tab 順序（常用於對話框、焦點跳轉）
  - `0`：加入自然 Tab 順序，順序依文件位置決定
  - 正數：強制指定 Tab 順序，**通常應避免**（容易讓焦點順序和視覺/文件順序不一致）
- **accesskey**：為元素設定鍵盤快捷鍵；觸發方式依瀏覽器與作業系統不同，不能假設固定按法；應少量使用。
- 實務優先：先用原生互動元素（`<a>`、`<button>`、`<input>`），它們本來就有合理鍵盤行為。

---

## 問答 1 · 基礎 · {#050-tab-q1}

`tabindex="-1"` 代表元素完全不能被聚焦嗎？

<details>
<summary>答案</summary>

**不是**。`tabindex="-1"` 讓元素**可以由 JavaScript 主動聚焦**，只是它不會出現在一般 Tab 鍵的導覽順序中。常用於對話框彈出時以程式控制焦點，或「跳到主要內容」連結的跳轉目標。

</details>

---

## 問答 2 · 基礎 · {#050-tab-q2}

為什麼通常應避免使用正數 `tabindex`？

<details>
<summary>答案</summary>

正數 `tabindex` 會**強制改變 Tab 順序**，讓焦點順序脫離文件順序。當頁面變複雜後，焦點很容易和視覺順序、文件順序不一致，使用者會覺得焦點跳來跳去，操作體驗變差。

較好的做法是讓 HTML 結構本身按合理順序排列，必要時只用 `0` 或 `-1`。

</details>

---

## 問答 3 · 進階 · {#050-tab-q3}

`accesskey` 有哪些實務限制？

<details>
<summary>答案</summary>

- 不同瀏覽器和作業系統的**觸發方式不同**（不一定是 `Alt + key`）
- 可能和瀏覽器、作業系統或輔助工具的**快捷鍵衝突**
- 使用者**不一定知道**頁面有哪些快捷鍵存在

因此適合少量、明確、真的有必要的快捷操作，不適合替每個元素設定。

</details>

---

## 填空 1 · 基礎 · {#050-tab-f1}

`tabindex="____"` 讓非互動元素加入一般 Tab 鍵導覽順序。

<details>
<summary>答案</summary>

**0**

</details>

---

## 填空 2 · 基礎 · {#050-tab-f2}

`tabindex="____"` 讓元素可由 JavaScript 主動聚焦，但不出現在一般 Tab 順序中。

<details>
<summary>答案</summary>

**-1**

</details>

---

## 卡片 1 · 基礎 · {#050-tab-c1}

**tabindex="0"** → 行為？

<details>
<summary>答案</summary>

加入自然 Tab 順序，順序依文件位置決定；讓原本不能聚焦的元素（如 `<div>`）變得可以用 Tab 鍵訪問。

</details>

---

## 卡片 2 · 基礎 · {#050-tab-c2}

**tabindex="-1"** → 行為？

<details>
<summary>答案</summary>

可由**程式主動聚焦**，不進入一般 Tab 順序；常用於對話框、焦點跳轉等需要程式控制焦點的情境。

</details>

---

## 卡片 3 · 進階 · {#050-tab-c3}

**正數 tabindex** → 建議？

<details>
<summary>答案</summary>

**通常應避免**。強制指定 Tab 順序，容易讓焦點順序和視覺/文件順序不一致，頁面改版後更難維護。

</details>

---

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
|---|---|---|---|---|---|---|
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
