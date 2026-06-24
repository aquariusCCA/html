---
source_notes:
  - notes/050-全局屬性/07-draggable-拖曳屬性與拖放事件.md
topics: [draggable, Drag and Drop API, 拖放事件, preventDefault]
summary: "draggable 屬性與拖放事件的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 6
  priority: 中
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# draggable 複習

> 回憶檢索複習。概念與用法說明見 notes/050-全局屬性/07-draggable-拖曳屬性與拖放事件.md。

---

## 重點摘要

- **draggable**：控制元素是否可被拖動；常見值：`true`（可拖動）、`false`（不可拖動）、`auto`（由瀏覽器決定）；鏈接與圖像預設通常可拖動。
- **重要限制**：`draggable="true"` 只讓元素可被拖起，**不代表完整拖放功能**；放置目標、放下後的行為都需要 JavaScript 事件處理。
- **拖放目標必要處理**：通常需要在 `dragover` 事件中呼叫 `preventDefault()`，否則 `drop` 事件不會如預期發生。
- 常用拖曳事件：`dragstart`（開始拖）、`drag`（拖曳中）、`dragenter`（進入目標）、`dragover`（停留目標上方）、`drop`（放下）、`dragend`（拖曳結束）。

---

## 問答 1 · 基礎 · {#050-drag-q1}

設定 `draggable="true"` 之後，元素就能完整實現拖放功能嗎？

<details>
<summary>答案</summary>

**不能**。`draggable="true"` 只讓元素可以被拖起來，不代表它能正確放到某個區域，也不代表資料會被移動。

完整的拖放功能還需要 JavaScript 事件配合，包含至少：
- 在拖放目標的 `dragover` 中呼叫 `preventDefault()`
- 在 `drop` 事件中處理放置後的邏輯

</details>

---

## 問答 2 · 進階 · {#050-drag-q2}

為什麼拖放目標通常需要在 `dragover` 中呼叫 `preventDefault()`？

<details>
<summary>答案</summary>

瀏覽器的預設行為是**不允許**在大部分元素上放置拖曳內容。在 `dragover` 中呼叫 `preventDefault()` 可以告訴瀏覽器「這個區域可以接受放置」，否則 `drop` 事件通常不會觸發。

</details>

---

## 填空 1 · 基礎 · {#050-drag-f1}

`draggable="____"` 讓一般元素可以被拖起來。

<details>
<summary>答案</summary>

**true**

</details>

---

## 填空 2 · 進階 · {#050-drag-f2}

拖放目標要讓放置行為生效，通常需在 `____` 事件中呼叫 `preventDefault()`。

<details>
<summary>答案</summary>

**dragover**

</details>

---

## 卡片 1 · 基礎 · {#050-drag-c1}

**dragstart** 事件 → 觸發時機？

<details>
<summary>答案</summary>

**開始拖曳元素時**觸發。

</details>

---

## 卡片 2 · 基礎 · {#050-drag-c2}

**drop** 事件 → 觸發時機？

<details>
<summary>答案</summary>

**在目標上放下元素時**觸發。

</details>

---

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
|---|---|---|---|---|---|---|
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
