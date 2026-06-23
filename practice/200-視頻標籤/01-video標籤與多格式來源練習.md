---
source_notes:
  - notes/200-視頻標籤/01-video-標籤與多格式來源.md
topics: [video 標籤, 影片嵌入, source 多格式來源, 影片播放控制, 瀏覽器相容性]
summary: "video 標籤與多格式來源的動手練習，包含內容影片、背景影片、controls/autoplay 修正與 source 備援。"
---

# video 標籤與多格式來源練習

> 動手練習。概念與用法說明見 notes/200-視頻標籤/01-video-標籤與多格式來源.md。

## 題目 1（基礎）· 應用練習題

請為文章中的教學影片建立一個可操作的影片播放器。影片檔案是 `lesson.mp4`，封面圖片是 `lesson-cover.jpg`，播放器寬度為 `640`。

完成標準：

- 使用 `<video>` 表示影片內容。
- 使用 `src` 指定單一影片檔案。
- 加上 `controls`，讓使用者可以播放、暫停與調整音量。
- 使用 `width` 設定播放器寬度。
- 使用 `poster` 設定影片尚未播放前的封面圖片。

<details>
<summary>參考解答</summary>

```html
<video src="lesson.mp4" controls width="640" poster="lesson-cover.jpg">
</video>
```

解題說明：

一般教學影片屬於主要內容，應該提供 `controls`，把播放控制權交給使用者。`poster` 可以設定影片播放前顯示的封面圖，避免頁面一開始只出現空白播放器。

</details>

## 題目 2（基礎）· 應用練習題

請建立一段背景影片。影片檔案是 `background.mp4`，需要頁面載入後嘗試自動播放、初始靜音，並在播放結束後循環播放。背景影片不需要顯示控制列。

完成標準：

- 使用 `<video>` 嵌入影片。
- 使用 `autoplay` 嘗試自動播放。
- 使用 `muted` 設定初始靜音。
- 使用 `loop` 循環播放。
- 不加 `controls`，因為這是背景影片。

<details>
<summary>參考解答</summary>

```html
<video src="background.mp4" autoplay muted loop>
</video>
```

解題說明：

背景影片通常不是主要內容，而是視覺效果，所以常見寫法是 `autoplay muted loop`，並且通常不顯示控制列。`muted` 也能降低自動播放被瀏覽器阻擋的機率，但 `autoplay` 仍不代表一定成功。

</details>

## 題目 3（進階）· 改錯題

以下程式碼想放一支重要的產品介紹影片，但它只依賴未靜音的 `autoplay`，而且沒有提供控制列。請修正成較可靠的一般內容型影片寫法。

```html
<video src="intro.mp4" autoplay>
</video>
```

完成標準：

- 不把 `autoplay` 當成可靠播放流程。
- 對重要內容影片加上 `controls`。
- 保留正確的影片來源。
- 不使用 notes 未教的 JavaScript 控制。

<details>
<summary>參考解答</summary>

```html
<video src="intro.mp4" controls>
</video>
```

解題說明：

現代瀏覽器通常會限制未靜音的自動播放，所以重要內容影片不應只依賴 `autoplay`。一般影片應提供 `controls`，讓使用者可以自行播放、暫停與調整音量。

</details>

## 題目 4（進階）· 改錯題

以下程式碼只提供單一 WebM 來源。這支影片很重要，需要降低瀏覽器不支援單一格式的風險。請改成多格式來源寫法，提供 MP4 與 WebM，並加入備用文字。

```html
<video src="movie.webm" controls>
</video>
```

完成標準：

- 不在 `<video>` 上保留單一 `src`。
- 在 `<video controls>` 裡使用多個 `<source>`。
- 提供 `movie.mp4`，並標示 `type="video/mp4"`。
- 提供 `movie.webm`，並標示 `type="video/webm"`。
- 備用文字放在 `<video>` 裡面、所有 `<source>` 後面。

<details>
<summary>參考解答</summary>

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  您的瀏覽器不支援 video 標籤。
</video>
```

解題說明：

如果要提供多種影片格式，應使用 `<video>` 搭配多個 `<source>`，讓瀏覽器依序選擇第一個可播放的來源。`type` 可幫助瀏覽器判斷來源格式。備用文字主要給不支援 `<video>` 標籤的瀏覽器，不等於完整的播放錯誤處理。

</details>
