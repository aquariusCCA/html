---
source_notes:
  - notes/190-音頻標籤/01-audio-標籤.md
topics: [audio 標籤, 音訊播放器, source 多格式來源, autoplay 限制, fallback 文字]
summary: "audio 標籤的回憶檢索複習材料，涵蓋 controls、autoplay、loop、多格式 source、MIME type 與 fallback 文字。"
review:
  formats: [重點摘要, 問答, 填空, 卡片]
  card_count: 10
  priority: 高
  schedule_days: [1, 3, 7, 16, 35, 90]
---

# audio 標籤複習

> 回憶檢索複習。概念與用法說明見 notes/190-音頻標籤/01-audio-標籤.md。

## 重點摘要

- `<audio>` 是用來在 HTML 頁面中嵌入音訊播放器的語意標籤。
- 最基本寫法是用 `src` 指定音訊檔案，並加上 `controls` 讓使用者可以操作播放。
- `controls` 會顯示瀏覽器內建的播放、暫停與音量等控制介面。
- `autoplay` 只是要求瀏覽器嘗試自動播放；現代瀏覽器常會阻擋未經使用者互動且有聲音的自動播放。
- `loop` 會讓音訊播放結束後自動重新播放。
- 需要多格式兼容時，可以在 `<audio>` 裡放多個 `<source>`；瀏覽器會依序選擇第一個能播放的來源。
- `<source>` 的 `type` 用來描述來源的 MIME type，方便瀏覽器判斷是否支援。
- fallback 文字應放在 `<audio>` 裡、所有 `<source>` 後面，只有瀏覽器完全不支援 `<audio>` 時才會顯示。

## 問答題

### 問答 1 · 基礎 · {#190-audio-q1}

`<audio>` 標籤在 HTML 中的用途與語意是什麼？

<details>
<summary>答案</summary>

`<audio>` 用來在 HTML 頁面中嵌入音訊播放器。它告訴瀏覽器這段內容是一個可以播放的音訊媒體，瀏覽器可以依照屬性顯示播放控制列、載入音訊檔，並在支援的情況下播放。

</details>

### 問答 2 · 基礎 · {#190-audio-q2}

為什麼內容型音訊通常應該加上 `controls`？

<details>
<summary>答案</summary>

`controls` 會顯示瀏覽器內建的播放、暫停與音量等控制介面。若沒有 `controls`，使用者通常看不到可以操作的播放介面；除非要用 JavaScript 自製播放器，否則多數內容音訊都應該加上 `controls`。

</details>

### 問答 3 · 進階 · {#190-audio-q3}

為什麼不能把 `autoplay` 當成可靠的播放流程？

<details>
<summary>答案</summary>

`autoplay` 只是要求瀏覽器嘗試自動播放，不代表一定成功。現代瀏覽器通常會阻擋沒有使用者互動、且有聲音的自動播放，所以比較可靠的做法是提供 `controls`，讓使用者自己開始播放。

</details>

### 問答 4 · 進階 · {#190-audio-q4}

什麼情況下會使用多個 `<source>`？fallback 文字應該放在哪裡？

<details>
<summary>答案</summary>

當需要照顧不同瀏覽器的格式支援，或準備了多種音訊格式時，可以在 `<audio>` 裡放多個 `<source>`，讓瀏覽器依序選擇第一個能播放的來源。fallback 文字應放在 `<audio>` 裡面，通常放在所有 `<source>` 後面，給完全不支援 `<audio>` 的瀏覽器顯示。

</details>

## 填空題

### 填空 1 · 基礎 · {#190-audio-f1}

`<audio>` 的 ____ 屬性指定音訊檔案位置；____ 屬性顯示播放控制介面。

<details>
<summary>答案</summary>

`src`；`controls`

</details>

### 填空 2 · 基礎 · {#190-audio-f2}

____ 會嘗試自動播放音訊，但可能被瀏覽器阻擋；____ 會讓音訊播放結束後自動重新播放。

<details>
<summary>答案</summary>

`autoplay`；`loop`

</details>

### 填空 3 · 進階 · {#190-audio-f3}

`<source>` 的 `type` 屬性用來告訴瀏覽器音訊來源的 ____，方便瀏覽器判斷是否支援。

<details>
<summary>答案</summary>

MIME type

</details>

## 翻面卡片

### 卡片 1 · 基礎 · {#190-audio-c1}

正面：`<audio src="audio.mp3" controls></audio>` 這個基本寫法包含哪些重點？

<details>
<summary>背面</summary>

`<audio>` 表示這是一段音訊內容；`src="audio.mp3"` 指定音訊檔案位置；`controls` 顯示瀏覽器內建的播放、暫停與音量等控制介面。

</details>

### 卡片 2 · 基礎 · {#190-audio-c2}

正面：單一 `src` 與多個 `<source>` 的選擇

<details>
<summary>背面</summary>

只有一個音訊檔、格式支援明確時，可以使用 `<audio src="..." controls>`。有多個格式、想讓瀏覽器自行選擇時，就在 `<audio>` 裡放多個 `<source>`。

</details>

### 卡片 3 · 進階 · {#190-audio-c3}

正面：`<audio>` 常見錯誤

<details>
<summary>背面</summary>

常見錯誤包含：把 `autoplay` 當成一定會播放、沒有 `controls` 導致使用者無法操作、`type` MIME type 寫錯或混用、把 fallback 文字放在 `<audio>` 外面。

</details>

## 建議複習排程

> 以下為遺忘曲線複習模板（離首次學習的天數），個人實際進度請自行或用 SRS 工具追蹤。

| 第幾次 | 第 1 次 | 第 2 次 | 第 3 次 | 第 4 次 | 第 5 次 | 第 6 次 |
| --- | --- | --- | --- | --- | --- | --- |
| 距首讀 | 第 1 天 | 第 3 天 | 第 7 天 | 第 16 天 | 第 35 天 | 第 90 天 |
