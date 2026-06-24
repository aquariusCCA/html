---
source_notes:
  - notes/130-語意化標籤/02-div與語意化佈局比較.md
topics: [div, 語意化佈局, 標籤選擇, section使用判斷]
summary: "div 與語意化佈局比較的回憶檢索複習材料，涵蓋 div 與語意化標籤差異、標籤選擇準則與常見誤用。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 8
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# div 與語意化佈局比較複習

> 回憶檢索複習。概念與用法說明見 notes/130-語意化標籤/02-div與語意化佈局比較.md。

## 重點摘要

- `<div>` 是沒有語意的通用容器；語意化標籤是有內容角色的結構標籤。
- 使用 `<div>` 也能排出畫面，但語意通常依賴 class 名稱補充。
- 語意化標籤能讓標籤名稱直接表達內容角色，例如 `<header>`、`<nav>`、`<section>`。
- 同一個畫面用 `<div>` 與語意化標籤都可能顯示正常，但 HTML 結構的可理解程度不同。
- 選擇標籤時，要看內容是否有明確角色、有沒有對應語意標籤，以及拿掉 CSS 後結構是否仍清楚。
- 語意化不是把 class 名稱換成同名標籤，而是根據內容實際用途選標籤。
- 沒有明確語意需求時，繼續使用 `<div>` 是合理的。

## 問答題

### 問答 1 · 基礎 · {#130-semantic-layout-q1}

`<div>` 與語意化標籤在 HTML 結構上的差異是什麼？

<details>
<summary>答案</summary>

`<div>` 是沒有語意的通用容器；語意化標籤是有內容角色的結構標籤，標籤名稱能直接表達區塊角色。

</details>

### 問答 2 · 基礎 · {#130-semantic-layout-q2}

看到 `<div class="nav">` 時，一定應該直接改成 `<nav>` 嗎？應該檢查什麼？

<details>
<summary>答案</summary>

不一定。應該檢查裡面是否真的放的是主要導覽連結。如果 class 只是樣式名稱，內容其實不是導覽，就不該改成 `<nav>`。

</details>

### 問答 3 · 基礎 · {#130-semantic-layout-q3}

選擇語意化標籤時，可以依序問哪三個問題？

<details>
<summary>答案</summary>

這一塊內容是否有明確角色？這個角色是否有對應的語意化標籤？如果拿掉 CSS，這個 HTML 結構是否仍能讓人理解內容順序與區塊關係？

</details>

### 問答 4 · 進階 · {#130-semantic-layout-q4}

為什麼純排版容器繼續使用 `<div>` 是合理的？

<details>
<summary>答案</summary>

如果一個元素只是為了讓 CSS 好選取、讓內容置中、包住內層元素或製作版面外框，通常不需要語意化標籤。這種情況使用 `<div>` 是正確使用通用容器。

</details>

## 填空題

### 填空 1 · 基礎 · {#130-semantic-layout-f1}

`<section>` 代表有共同主題的一段內容，通常應該能搭配 ____。

<details>
<summary>答案</summary>

標題

</details>

### 填空 2 · 基礎 · {#130-semantic-layout-f2}

語意化不是把 ____ 名稱換成標籤名稱，而是根據內容含義選擇合適元素。

<details>
<summary>答案</summary>

class

</details>

## 翻面卡片

### 卡片 1 · 基礎 · {#130-semantic-layout-c1}

正面：`<header>`

<details>
<summary>答案</summary>

表示頁面或區塊的開頭內容。

</details>

### 卡片 2 · 基礎 · {#130-semantic-layout-c2}

正面：只用來包住一組按鈕、方便 CSS 排版的容器

<details>
<summary>答案</summary>

使用 `<div>` 更合理，因為這只是分組與排版需求，沒有形成一個獨立主題。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
