---
source_notes:
  - notes/040-HTML基本結構標籤/01-HTML文件起手式.md
topics: [HTML文件骨架, DOCTYPE, lang, charset]
summary: "DOCTYPE、lang 與 charset 的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 8
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# HTML 文件起手式複習

> 回憶檢索複習。概念與用法說明見 notes/040-HTML基本結構標籤/01-HTML文件起手式.md。

## 重點摘要

- HTML 文件起手式先告訴瀏覽器三件事：這是 HTML5 文件、文件主要語言、文字使用的字元編碼。
- `<!DOCTYPE html>` 放在文件最前面、`<html>` 之前，用來讓瀏覽器以符合標準的方式解析頁面。
- `<!DOCTYPE>` 不是 HTML 標籤，沒有結束標籤，也不放在 `<head>` 或 `<body>` 裡。
- `lang` 通常寫在 `<html>` 標籤上，標示整份文件的主要語言，會影響輔助工具、搜尋、翻譯與拼字檢查。
- `<meta charset="UTF-8">` 通常寫在 `<head>` 裡，用來指定字元編碼，降低中文、標點或特殊符號變成亂碼的風險。

### 問答 1 · 基礎 · {#040-html-start-q1}

HTML 文件的起手式主要先告訴瀏覽器哪三件事？

<details>
<summary>答案</summary>

這是一份 HTML5 文件、這份文件主要使用哪一種語言、這份文件的文字應該用哪一種字元編碼讀取。

</details>

### 問答 2 · 基礎 · {#040-html-start-q2}

`<!DOCTYPE html>` 應該放在哪裡？它的主要作用是什麼？

<details>
<summary>答案</summary>

它應該放在 HTML 文件最前面、`<html>` 標籤之前。它的作用是聲明目前文件使用 HTML5，並告訴瀏覽器用符合標準的方式解析頁面。

</details>

### 問答 3 · 基礎 · {#040-html-start-q3}

`lang` 屬性用來標示什麼？它可能影響哪些行為？

<details>
<summary>答案</summary>

`lang` 用來標示文件內容主要使用哪一種語言，可能影響輔助工具、搜尋、翻譯與拼字檢查等行為。

</details>

### 問答 4 · 基礎 · {#040-html-start-q4}

`<meta charset="UTF-8">` 解決的是什麼問題？

<details>
<summary>答案</summary>

它用來指定 HTML 文件使用的字元編碼。若沒有設定或瀏覽器猜測錯誤，中文、標點或特殊符號可能變成亂碼；使用 UTF-8 能降低這類風險。

</details>

### 填空 1 · 基礎 · {#040-html-start-f1}

HTML5 的文檔類型聲明是 ____。

<details>
<summary>答案</summary>

`<!DOCTYPE html>`

</details>

### 填空 2 · 基礎 · {#040-html-start-f2}

指定 UTF-8 字元編碼時，通常在 `<head>` 裡加入 ____。

<details>
<summary>答案</summary>

`<meta charset="UTF-8">`

</details>

### 卡片 1 · 基礎 · {#040-html-start-c1}

正面：`zh-TW`

<details>
<summary>反面</summary>

常見用途是台灣繁體中文。

</details>

### 卡片 2 · 基礎 · {#040-html-start-c2}

正面：`<!DOCTYPE>` 的標籤性質

<details>
<summary>反面</summary>

`<!DOCTYPE>` 不是 HTML 標籤，沒有結束標籤，也不是放在 `<head>` 或 `<body>` 裡的內容。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
