---
source:
  - 'origin/200-視頻標籤/01-視頻標籤.md / # **2. 照顧低版本瀏覽器的寫法**'
---

# `<source>` 多格式來源與低版本瀏覽器支援

`<video>` 可以直接使用 `src` 屬性指定視頻文件 URL，也可以在內部放置多個 `<source>` 標籤。使用 `<source>` 時，`src` 用來指定媒體 URL，`type` 可以提供 MIME 類型提示，幫助瀏覽器判斷是否支援該來源。

```html
<video autoplay="autoplay" controls="controls">
  <source src="./assets/files/video-tags-file-001-7239dd.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  您的瀏覽器不支持 <video> 標籤。
</video>
```

`<source>` 標籤用來提供多個候選媒體來源。因為不同瀏覽器支援的音頻或視頻格式可能不同，可以使用多個 `<source>` 標籤提供不同格式，瀏覽器會選擇第一個能播放的來源；如果瀏覽器不支援 `<video>` 標籤，才會顯示標籤內的備用文字。
