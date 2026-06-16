# audio source 多格式兼容寫法

> 來源：
> - origin/190-音頻標籤/01-音頻標籤.md / # 2. 照顧低版本瀏覽器的寫法
> - origin/190-音頻標籤/01-音頻標籤.md / # 3. 總結

在 `<source>` 標籤中，需要使用 `src` 屬性來指定音頻文件的 URL；`type` 屬性可用來標明 MIME type，建議提供，但不是必填屬性。

```html
<audio autoplay="autoplay" controls="controls">
  <source src="./assets/files/html-audio-tag-file-001-1fa553.mp3" type="audio/mpeg">
  您的瀏覽器不支持 &lt;audio&gt; 標籤。
</audio>
```

`<source>` 標籤用來確定 `src` 的來源。若準備了多個不同格式的音頻檔，可以放多個 `<source>`；因為瀏覽器支持情況不同，瀏覽器會依序選擇可播放的來源。

- 瀏覽器支持情況不同。
- 谷歌瀏覽器等現代瀏覽器通常會阻擋未經使用者互動且有聲音的自動播放。
