# audio source 多格式兼容寫法

> 來源：
> - origin/第19章_音頻標籤/01-音頻標籤.md / # 2. 照顧低版本瀏覽器的寫法
> - origin/第19章_音頻標籤/01-音頻標籤.md / # 3. 總結

在 `<source>` 標籤中，需要使用 `src` 屬性來指定音頻文件的 URL，使用 `type` 屬性來指定文件類型。這兩個屬性都是必需的。

```html
<audio autoplay="autoplay" controls="controls">
  <source src="./assets/files/html-audio-tag-file-001-1fa553.mp3" type="audio/mp3">
  <source src="./assets/files/html-audio-tag-file-001-1fa553.mp3" type="audio/mpeg">
  <source src="./assets/files/html-audio-tag-file-001-1fa553.mp3" type="audio/ogg">
  您的瀏覽器不支持 <audio> 標籤。
</audio>
```

`<source>` 標籤用來確定 `src` 的來源。因為瀏覽器各式各樣，有的音頻格式在部分瀏覽器中不支持，這時需要為老舊瀏覽器提供多種格式的音頻來源。

- 瀏覽器支持情況不同。
- 谷歌瀏覽器把音頻和視頻自動播放禁止了。
