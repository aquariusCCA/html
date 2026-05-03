# 第 45 章 `track` 字幕標籤 Demo

本目錄提供對應第 45 章筆記的範例頁，重點放在 `<track>`、WebVTT、多語字幕、聽障字幕、章節與 metadata。

## Demo

- [track-text-tracks-demo.html](./track-text-tracks-demo.html)：示範 `<video>`、`<source>`、多個 `<track>`、`kind`、`src`、`srclang`、`label`、`default`、WebVTT 格式、文字軌 API 與字幕排查清單。

## 檔案結構

- `tracks/course.zh-Hant.vtt`：繁體中文字幕，`kind="subtitles"`。
- `tracks/course.en.vtt`：英文字幕，`kind="subtitles"`。
- `tracks/course.zh-Hant.cc.vtt`：繁體中文聽障字幕，`kind="captions"`。
- `tracks/course.desc.vtt`：音訊描述，`kind="descriptions"`。
- `tracks/course.chapters.vtt`：章節文字軌，`kind="chapters"`。
- `tracks/course.metadata.vtt`：給 JavaScript 讀取的時間軸 metadata。

## 觀察重點

- `<source>` 提供媒體檔來源；`<track>` 提供與時間同步的文字資料。
- `<track>` 是空元素，字幕文字通常放在外部 `.vtt` 檔案。
- `subtitles` 偏翻譯字幕；`captions` 偏聽障字幕，通常包含音效、說話者或音樂提示。
- `srclang` 是語言代碼；`label` 是播放器選單給使用者看的名稱。
- `default` 是布林屬性，通常一個媒體元素只設定一條預設文字軌。
- 字幕不顯示時要檢查路徑、WebVTT 格式、MIME type、CORS、播放器 UI 與瀏覽器支援。

## 返回

- [回到第 45 章 README](../README.md)
- [回到總目錄](../../README.md)
