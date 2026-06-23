---
source_notes:
  - notes/190-音頻標籤/01-audio-標籤.md
topics: [audio 標籤, 音訊播放器, source 多格式來源, autoplay 限制, fallback 文字]
summary: "audio 標籤的動手練習，包含基本播放器、循環播放、多格式來源、autoplay 與 fallback 常見錯誤修正。"
---

# audio 標籤練習

> 動手練習。概念與用法說明見 notes/190-音頻標籤/01-audio-標籤.md。

## 題目 1（基礎）· 應用練習題

請為文章中的補充錄音建立一個音訊播放器。音訊檔案是 `lesson-audio.mp3`，使用者需要能看到瀏覽器內建的播放、暫停與音量控制介面。

完成標準：

- 使用 `<audio>` 表示這是一段音訊內容。
- 使用 `src` 指定音訊檔案。
- 加上 `controls`，讓使用者可以操作播放。
- 不依賴自動播放。

<details>
<summary>參考解答</summary>

```html
<audio src="lesson-audio.mp3" controls></audio>
```

解題說明：

`<audio>` 用來在 HTML 頁面中嵌入音訊播放器。內容型音訊通常要加上 `controls`，否則使用者可能看不到可以播放、暫停或調整音量的介面。

</details>

## 題目 2（基礎）· 應用練習題

請建立一個音樂試聽播放器。音訊檔案是 `sample.mp3`，使用者要能操作播放，而且音訊播放結束後要自動重新播放。

完成標準：

- 使用 `<audio>` 與 `src` 指定音訊檔。
- 加上 `controls` 讓使用者可操作。
- 加上 `loop` 讓音訊播放結束後自動重新播放。
- 不使用 notes 未教的 JavaScript 播放控制。

<details>
<summary>參考解答</summary>

```html
<audio src="sample.mp3" controls loop></audio>
```

解題說明：

`controls` 會顯示瀏覽器內建播放控制介面，`loop` 表示音訊播放結束後自動重新播放。這兩個屬性可以直接組合在 `<audio>` 上使用。

</details>

## 題目 3（進階）· 改錯題

以下程式碼想讓使用者聽到課程錄音，但它只依賴 `autoplay`，而且沒有提供可操作的播放介面。請修正成較可靠的內容音訊寫法。

```html
<audio src="lesson-audio.mp3" autoplay></audio>
```

完成標準：

- 不把 `autoplay` 當成一定會播放的流程。
- 加上 `controls`，讓使用者可以自行開始播放。
- 保留正確的音訊檔案來源。

<details>
<summary>參考解答</summary>

```html
<audio src="lesson-audio.mp3" controls></audio>
```

解題說明：

`autoplay` 只是要求瀏覽器嘗試自動播放，不代表一定成功。現代瀏覽器通常會阻擋沒有使用者互動、且有聲音的自動播放。對內容型音訊來說，提供 `controls` 讓使用者自己播放更可靠。

</details>

## 題目 4（進階）· 改錯題

以下多格式音訊寫法有兩個問題：MP3 的 MIME type 寫錯，而且 fallback 提示文字放在 `<audio>` 外面。請修正它。

```html
<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  <source src="audio.ogg" type="audio/ogg">
</audio>
您的瀏覽器不支持 audio 標籤。
```

完成標準：

- MP3 來源使用 `type="audio/mpeg"`。
- Ogg 來源保留 `type="audio/ogg"`。
- fallback 文字放在 `<audio>` 裡面，且放在所有 `<source>` 後面。
- 使用 `<audio controls>` 顯示播放控制介面。

<details>
<summary>參考解答</summary>

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  您的瀏覽器不支持 audio 標籤。
</audio>
```

解題說明：

`type` 應該描述音訊來源的實際 MIME type，MP3 常用 `audio/mpeg`。fallback 文字應放在 `<audio>` 裡面，通常放在所有 `<source>` 後面；如果放在 `<audio>` 外面，就只是一般頁面文字，不再是 `<audio>` 的 fallback。

</details>
