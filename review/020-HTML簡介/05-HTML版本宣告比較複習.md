---
source_notes:
  - notes/020-HTML簡介/HTML文件宣告版本比較補充.md
topics: [文件類型宣告, HTML版本差異, HTML4與XHTML, 舊專案維護]
summary: "HTML5、HTML4 與 XHTML 文件宣告對照識別的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 5
  priority: 中
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# HTML 版本宣告比較複習

> 回憶檢索複習。概念與用法說明見 notes/020-HTML簡介/HTML文件宣告版本比較補充.md。

## 重點摘要

| 版本 | 文件宣告特徵 |
| --- | --- |
| HTML5 | `<!DOCTYPE html>`，一行搞定 |
| HTML4 | 長格式，含 DTD 名稱與完整網址（`-//W3C//DTD HTML 4.01//EN` ...） |
| XHTML | 除了長 DOCTYPE，`<html>` 標籤還有 `xmlns` XML 命名空間屬性 |

- **新專案**：一律使用 `<!DOCTYPE html>`。
- **舊專案**：看到舊格式宣告，知道對應版本即可，不需急著「升級」。

---

### 問答 1 · 基礎 · {#020-ver-q1}

新建一個 HTML5 專案，文件的第一行應該寫什麼？

<details>
<summary>答案</summary>

`<!DOCTYPE html>`

每份 HTML5 文件的第一行，固定寫 `<!DOCTYPE html>`，不需要任何 DTD 網址或額外屬性。

</details>

---

### 問答 2 · 基礎 · {#020-ver-q2}

在舊專案的 HTML 檔案開頭看到 `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" ...>`，這代表什麼？

<details>
<summary>答案</summary>

這份文件是依照 **HTML4** 標準撰寫的。某些寫法（例如標籤大小寫、屬性寫法的嚴格程度）可能與 HTML5 的習慣不同，不需要急著「升級」，但要知道這份文件依照的是較舊的標準。

</details>

---

### 填空 1 · 基礎 · {#020-ver-f1}

HTML4 和 XHTML 的文件宣告又長又複雜；到了 HTML5，文件類型宣告被大幅簡化成一行 ____。

<details>
<summary>答案</summary>

`<!DOCTYPE html>`

</details>

---

### 卡片 1 · 基礎 · {#020-ver-c1}

**HTML4 文件宣告的特徵**

<details>
<summary>答案</summary>

長格式，包含 DTD 名稱與完整網址，例如：

`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`

又長又難記，不適合新專案使用。

</details>

---

### 卡片 2 · 基礎 · {#020-ver-c2}

**XHTML 文件宣告的特徵**

<details>
<summary>答案</summary>

除了長格式的 DOCTYPE 外，`<html>` 標籤還帶有 `xmlns` XML 命名空間屬性：

`<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh">`

因為 XHTML 要求頁面符合更嚴格的 XML 語法規則。

</details>

---

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
