---
source_notes:
  - notes/200-視頻標籤/01-video-標籤與多格式來源.md
topics: [video 標籤, 影片嵌入, source 多格式來源, 影片播放控制, 瀏覽器相容性]
summary: "video 標籤、多格式來源與常用播放屬性的回憶檢索複習材料（重點摘要＋問答＋填空＋卡片）。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 10
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# video 標籤與多格式來源複習

> 回憶檢索複習。概念與用法說明見 notes/200-視頻標籤/01-video-標籤與多格式來源.md。

## 重點摘要

- `<video>` 用來把影片內容嵌入 HTML 文件；當影片檔案由網站提供並要直接在頁面中播放時，這是對應的語意標籤。
- 單一影片來源可直接寫在 `<video src="...">`；需要多格式備援時，改用 `<video>` 搭配多個 `<source>`。
- 一般內容型影片通常要加 `controls`，讓使用者能播放、暫停與調整音量。
- 背景影片常見設定是 `autoplay muted loop`，通常不加 `controls`；其中 `muted` 可避免突然出聲，也提高自動播放成功機率。
- `<source>` 的 `src` 指定影片檔案位置，`type` 指定 MIME 類型，瀏覽器會選擇第一個能播放的來源。
- `<video>` 內的備用文字主要給不支援 `<video>` 標籤的瀏覽器，不等於完整的影片載入或播放錯誤處理。

## 問答題

### 問答 1 · 基礎 · {#200-video-q1}

`<video>` 和 `<source>` 在影片嵌入中各自負責什麼？

<details>
<summary>答案</summary>

`<video>` 用來把影片內容嵌入網頁；`<source>` 則放在 `<video>` 裡，用來提供多個可選的影片來源。

</details>

### 問答 2 · 基礎 · {#200-video-q2}

一般教學影片或產品介紹影片為什麼通常應該加上 `controls`？

<details>
<summary>答案</summary>

`controls` 會顯示瀏覽器內建的播放控制列，讓使用者可以自行播放、暫停與調整音量。沒有 `controls` 時，影片可能載入了，但使用者不一定有明顯方式操作。

</details>

### 問答 3 · 進階 · {#200-video-q3}

背景影片為什麼常搭配 `autoplay muted loop`，而且通常不加 `controls`？

<details>
<summary>答案</summary>

背景影片通常是視覺效果，不是主要內容；`autoplay` 希望頁面載入後自動播放，`muted` 可避免突然播放聲音並提高自動播放成功機率，`loop` 讓背景效果不中斷。背景影片通常不需要顯示控制列。

</details>

### 問答 4 · 進階 · {#200-video-q4}

`<video>` 內的備用文字是不是所有影片播放失敗時都會顯示？為什麼？

<details>
<summary>答案</summary>

不是。備用文字主要給不支援 `<video>` 標籤的瀏覽器使用，不是所有影片載入失敗、網路失敗或播放錯誤時都一定會顯示；這類錯誤通常需要搭配其他前端邏輯處理。

</details>

## 填空題

### 填空 1 · 基礎 · {#200-video-f1}

只有一個影片檔案來源時，可以直接使用 `<video ____="movie.mp4" controls>`；需要多格式備援時，應使用多個 `____`。

<details>
<summary>答案</summary>

第一空：`src`。第二空：`<source>`。

</details>

### 填空 2 · 基礎 · {#200-video-f2}

`<source>` 上的 `____` 用來指定影片檔案位置，`____` 用來標示 MIME 類型，例如 `video/mp4`。

<details>
<summary>答案</summary>

第一空：`src`。第二空：`type`。

</details>

### 填空 3 · 基礎 · {#200-video-f3}

`____` 可以設定影片播放前顯示的封面圖片；`____` 則提示瀏覽器是否預先載入影片。

<details>
<summary>答案</summary>

第一空：`poster`。第二空：`preload`。

</details>

## 翻面卡片

### 卡片 1 · 基礎 · {#200-video-c1}

正面：`controls`

<details>
<summary>背面</summary>

顯示瀏覽器內建控制列，讓使用者能操作影片。

</details>

### 卡片 2 · 基礎 · {#200-video-c2}

正面：`autoplay`

<details>
<summary>背面</summary>

嘗試自動播放影片，但現代瀏覽器常限制未靜音的自動播放。

</details>

### 卡片 3 · 基礎 · {#200-video-c3}

正面：`loop`

<details>
<summary>背面</summary>

影片播放結束後循環播放，常見於背景影片或短循環展示。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
