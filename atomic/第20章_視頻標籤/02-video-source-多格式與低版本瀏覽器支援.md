# `<source>` 多格式來源與低版本瀏覽器支援

> 來源：origin/第20章_視頻標籤/01-視頻標籤.md / # **2. 照顧低版本瀏覽器的寫法**

在 `<video>` 標籤中，您需要使用 `src` 屬性來指定視頻文件的 URL，使用 `type` 屬性來指定文件類型。這兩個屬性都是必需的。

```html
<video autoplay="autoplay" controls="controls">
  <source src="./assets/files/video-tags-file-001-7239dd.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  您的瀏覽器不支持 <video> 標籤。
</video>
```

`<source>` 標籤用來確定 `src` 的來源。因為現在的瀏覽器各式各樣，有的音頻或者視頻格式有些瀏覽器不支持，這個時候需要為這些不支持的老舊瀏覽器提供支持，就需要使用 `<source>` 標籤來確定各種格式的音頻或者視頻。
