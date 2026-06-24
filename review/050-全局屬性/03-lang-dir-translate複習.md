---
source_notes:
  - notes/050-全局屬性/03-lang-dir-translate-語言方向與翻譯控制.md
topics: [lang, dir, translate, 多語內容, 內容語意]
summary: "lang、dir、translate 三個語言相關全局屬性的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 8
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# lang、dir、translate 複習

> 回憶檢索複習。概念與用法說明見 notes/050-全局屬性/03-lang-dir-translate-語言方向與翻譯控制.md。

---

## 重點摘要

- **lang**：指定元素內容的語言；整份文件的語言通常設在 `<html lang="...">`，局部外語可在該元素再設一次；影響螢幕報讀發音、搜尋引擎理解、翻譯與拼字檢查行為。
- **dir**：指定文字方向（`ltr` / `rtl` / `auto`）；用於內容語言本身需要由右至左的情況（如阿拉伯文、希伯來文），**不是視覺靠右排版**——靠右排版應用 CSS `text-align: right`。
- **translate**：`translate="no"` 保護不應被翻譯的內容（作品名稱、品牌名稱、專有名詞）；整站禁用要謹慎，通常只在局部元素設定。

---

## 問答 1 · 基礎 · {#050-lang-q1}

`lang` 屬性通常應設定在哪個元素上？設定在那裡有什麼效果？

<details>
<summary>答案</summary>

通常設在 **`<html>`** 元素上，表示整份文件的主要語言，例如 `<html lang="zh-Hant">`。

這個設定會影響：
- 螢幕報讀器的**發音**
- 搜尋引擎對內容語言的**理解**
- 瀏覽器的**翻譯**與**拼字檢查**行為

</details>

---

## 問答 2 · 基礎 · {#050-lang-q2}

`dir="rtl"` 和 CSS 的 `text-align: right` 有什麼差別？

<details>
<summary>答案</summary>

- `dir="rtl"`：描述內容**語言的文字方向**是由右至左，用於阿拉伯文、希伯來文等本身就是 RTL 的語言；會影響文字排列邏輯。
- `text-align: right`：只是**視覺對齊靠右**，不改變文字方向的語意。

如果只是想讓文字靠右顯示，應使用 CSS；若內容本身語言方向是由右至左，才應使用 `dir="rtl"`。

</details>

---

## 問答 3 · 進階 · {#050-lang-q3}

`translate="no"` 適合用在哪些內容？整站禁用需要注意什麼？

<details>
<summary>答案</summary>

適合保護**不應被翻譯的內容**，例如：作品名稱、品牌名稱、程式碼術語、專有名詞。

整站禁用（在 `<html>` 設定 `translate="no"`）要**謹慎使用**。若只有少數專有名詞不應翻譯，通常只需要在局部元素設定，不應讓整站內容都無法被翻譯。

</details>

---

## 填空 1 · 基礎 · {#050-lang-f1}

若頁面主要語言為繁體中文，應設定 `<html lang="____">`。

<details>
<summary>答案</summary>

**zh-Hant**

</details>

---

## 填空 2 · 基礎 · {#050-lang-f2}

`dir` 的常見值有 `ltr`、`rtl`、`____`，最後一個由瀏覽器根據內容自動判斷文字方向。

<details>
<summary>答案</summary>

**auto**

</details>

---

## 卡片 1 · 基礎 · {#050-lang-c1}

**lang** → 作用？

<details>
<summary>答案</summary>

指定元素內容的語言；影響螢幕報讀發音、搜尋引擎理解、翻譯與拼字檢查行為。

</details>

---

## 卡片 2 · 基礎 · {#050-lang-c2}

**dir="rtl"** → 使用情境？

<details>
<summary>答案</summary>

內容語言方向**由右至左**時使用（如阿拉伯文、希伯來文）；**不是**單純的視覺靠右排版，靠右排版應用 CSS。

</details>

---

## 卡片 3 · 基礎 · {#050-lang-c3}

**translate="no"** → 用途？

<details>
<summary>答案</summary>

保護不應被翻譯的內容：作品名稱、品牌名稱、程式碼術語、專有名詞。

</details>

---

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
|---|---|---|---|---|---|---|
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
