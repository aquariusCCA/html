---
source_notes:
  - notes/050-全局屬性/05-contenteditable-spellcheck-可編輯內容與拼字檢查.md
topics: [contenteditable, spellcheck, 可編輯內容, 拼字檢查]
summary: "contenteditable 與 spellcheck 的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 6
  priority: 中
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# contenteditable 與 spellcheck 複習

> 回憶檢索複習。概念與用法說明見 notes/050-全局屬性/05-contenteditable-spellcheck-可編輯內容與拼字檢查.md。

---

## 重點摘要

- **contenteditable**：讓元素內容可被使用者直接編輯；常見值：`true`（可編輯）、`false`（不可編輯）、`plaintext-only`（只能輸入純文字）；若沒有設定或使用無效值，會繼承父層的可編輯狀態。
- **核心限制**：`contenteditable` **不會自動儲存**修改結果，如需儲存仍需 JavaScript 讀取並送出。
- **spellcheck**：控制瀏覽器是否進行拼字與語法檢查；自然語言輸入（留言、評論）適合啟用；代碼、帳號、產品編號等精確文字適合關閉。

---

## 問答 1 · 基礎 · {#050-ce-q1}

`contenteditable` 的作用是什麼？它會自動儲存使用者修改的內容嗎？

<details>
<summary>答案</summary>

`contenteditable` 讓元素的內容可以被使用者**直接在頁面上編輯**。

**不會**自動儲存。它只處理「能不能在畫面上編輯」，不會自動把資料送到伺服器、寫入資料庫，或在下次開啟頁面時保留修改結果。若需要儲存，仍需要使用 JavaScript 讀取修改後的文字，再送到後端或存到本地儲存。

</details>

---

## 問答 2 · 基礎 · {#050-ce-q2}

哪些情境適合啟用 `spellcheck`？哪些適合關閉？

<details>
<summary>答案</summary>

**適合啟用**：自然語言輸入，例如留言區、評論欄、描述文字。

**適合關閉**：代碼、帳號、產品編號、使用者名稱等精確文字——這類內容被拼字檢查標記只會造成干擾。

</details>

---

## 問答 3 · 進階 · {#050-ce-q3}

`contenteditable="plaintext-only"` 和 `"true"` 有什麼差別？

<details>
<summary>答案</summary>

- `contenteditable="true"`：允許富文字格式，使用者可以貼上帶格式的內容。
- `contenteditable="plaintext-only"`：只允許輸入**純文字**，不啟用富文字格式。

</details>

---

## 填空 1 · 基礎 · {#050-ce-f1}

`contenteditable="____"` 讓元素可以直接被使用者在頁面上編輯。

<details>
<summary>答案</summary>

**true**

</details>

---

## 填空 2 · 進階 · {#050-ce-f2}

若沒有設定 `contenteditable` 或使用無效值，元素會 `____` 父層的可編輯狀態。

<details>
<summary>答案</summary>

**繼承**

</details>

---

## 卡片 1 · 基礎 · {#050-ce-c1}

**contenteditable** → 關鍵限制？

<details>
<summary>答案</summary>

只控制「能否在頁面上編輯」，**不等於自動儲存資料**；儲存需另外用 JavaScript 處理。

</details>

---

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
|---|---|---|---|---|---|---|
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
