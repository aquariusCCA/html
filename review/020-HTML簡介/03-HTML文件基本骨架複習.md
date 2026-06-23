---
source_notes:
  - notes/020-HTML簡介/03-HTML文件基本骨架.md
topics: [HTML文件骨架, 文件類型宣告, head與body, 相容模式]
summary: "DOCTYPE 宣告目的、html/head/body 骨架層級與常見錯誤的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 8
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# HTML 文件基本骨架複習

> 回憶檢索複習。概念與用法說明見 notes/020-HTML簡介/03-HTML文件基本骨架.md。

## 重點摘要

- **`<!DOCTYPE html>`**：不是標籤，是文件類型宣告，放在整份文件最開頭，告訴瀏覽器用 HTML5 標準解析。
- **骨架層級**：`<html>` → `<head>` + `<body>`（`<head>` 在前、`<body>` 在後）。
- **`<head>`**：頁面設定區，放不顯示在畫面上的資訊（如 `<meta charset>` 編碼、`<title>` 分頁標題）。
- **`<body>`**：頁面內容區，放會顯示在畫面上的所有內容（標題、段落、圖片等）。
- **漏寫 DOCTYPE 的後果**：瀏覽器可能改用相容模式（quirks mode），導致版面與樣式異常。

---

### 問答 1 · 基礎 · {#020-skel-q1}

`<!DOCTYPE html>` 的作用是什麼？它是 HTML 標籤嗎？

<details>
<summary>答案</summary>

**不是** HTML 標籤，而是「**文件類型宣告**」，放在整份文件的最開頭。作用是告訴瀏覽器：「請用 HTML5 標準來解析這份文件」。

</details>

---

### 問答 2 · 基礎 · {#020-skel-q2}

`<head>` 與 `<body>` 各自放什麼樣的內容？

<details>
<summary>答案</summary>

- **`<head>`**：放「描述這份文件」的設定資訊，**不會直接顯示在頁面畫面上**，例如文字編碼（`<meta charset>`）、分頁標題（`<title>`）。
- **`<body>`**：放**會實際顯示在畫面上的內容**——標題、段落、圖片、連結、表單等，之後學到的大部分標籤都寫在這裡。

</details>

---

### 問答 3 · 基礎 · {#020-skel-q3}

漏寫 `<!DOCTYPE html>` 可能導致什麼問題？

<details>
<summary>答案</summary>

瀏覽器可能以「**相容模式（quirks mode）**」解析這份文件，導致樣式、版面出現預期之外的差異，而這種問題通常不容易從畫面上一眼看出原因。避免方法：每份 HTML5 文件的第一行，固定寫 `<!DOCTYPE html>`。

</details>

---

### 填空 1 · 基礎 · {#020-skel-f1}

`<html lang="zh-Hant">` 中 `lang` 屬性的作用，是告訴瀏覽器、搜尋引擎和螢幕報讀器這份文件的主要語言是____。

<details>
<summary>答案</summary>

**繁體中文**

</details>

---

### 填空 2 · 基礎 · {#020-skel-f2}

`<meta charset="UTF-8">` 放在 `<head>` 裡，作用是宣告文件使用的____，確保中文等字元能正確顯示，不會變成____。

<details>
<summary>答案</summary>

**文字編碼**；**亂碼**

</details>

---

### 卡片 1 · 基礎 · {#020-skel-c1}

**`<html>` 標籤的角色**

<details>
<summary>答案</summary>

整份 HTML 文件的**最外層根容器**；所有內容（包括 `<head>` 與 `<body>`）都寫在這個標籤裡面。

</details>

---

### 卡片 2 · 基礎 · {#020-skel-c2}

**`<head>` 中的代表性內容**

<details>
<summary>答案</summary>

- `<meta charset="UTF-8">`：宣告文字編碼，防止中文亂碼。
- `<title>我的網頁</title>`：設定瀏覽器分頁標題列上顯示的文字。

這些內容**不會直接顯示在頁面畫面上**。

</details>

---

### 卡片 3 · 基礎 · {#020-skel-c3}

**相容模式（quirks mode）**

<details>
<summary>何時觸發及後果</summary>

當 HTML 文件**漏寫或寫錯 `<!DOCTYPE html>`** 時觸發。瀏覽器改用此模式解析，可能導致版面與樣式出現預期之外的異常，且通常不容易從畫面上一眼看出原因。

</details>

---

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
