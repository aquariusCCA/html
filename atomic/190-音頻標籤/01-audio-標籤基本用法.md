# audio 標籤基本用法

> 來源：origin/190-音頻標籤/01-音頻標籤.md / # 1. 簡介

> 注意：常見音頻格式包含 MP3、WAV、Ogg；實際支持情況取決於瀏覽器與音頻編碼。

- 場景：在頁面中插入音頻。

```html
<audio
  src="音频地址"
  controls
  autoplay
  loop
>
</audio>
```

- `controls`：顯示播放控件。
- `autoplay`：嘗試自動播放；現代瀏覽器常會阻擋未經使用者互動且有聲音的自動播放，不應依賴一定生效。
- `loop`：循環播放。

- 常見屬性

![audio 標籤常見屬性表](../../origin/190-音頻標籤/assets/images/html-audio-tag-img-001-623890.png)

- 補充：圖片中的 `autoplay` 說明應理解為「嘗試自動播放」，是否真的播放仍取決於瀏覽器策略。

- 音頻標籤和視頻標籤使用方式基本一致。
