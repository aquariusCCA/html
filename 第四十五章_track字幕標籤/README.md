# 第四十五章｜`track` 字幕標籤

> 章節定位：理解音訊與影片如何透過 `<track>` 提供字幕、說明、章節與時間軸資料  
> 建議閱讀方式：先理解 `<track>` 必須搭配 `<audio>` 或 `<video>`，再分清 subtitles、captions、descriptions、chapters、metadata

## 本章在學什麼

這一章延續第十九章音頻與第二十章視頻，補上 `<track>`。

`<track>` 用來替媒體元素提供時間軸文字資料，例如字幕、聽障字幕、音訊描述、章節或機器使用的 metadata。

## 本章與整體地圖的關係

- 前置知識：第十九章已學過 `<audio>`，第二十章已學過 `<video>` 和 `<source>`。
- 這章的核心任務：補齊媒體可存取性與多語字幕的基本入口。
- 讀完後通常接：WebVTT、媒體播放器、可存取性與國際化內容。

## 建議閱讀順序

1. [`track` 字幕標籤](./第45章_track字幕標籤.md)

## 本章所有小節

- [`track` 字幕標籤](./第45章_track字幕標籤.md)

## 適合快速回查的主題

- `<track>` 是做什麼的
- `kind` 有哪些常見值
- `srclang` 和 `label` 怎麼寫
- `default` 代表什麼
- subtitles 和 captions 差在哪
- WebVTT 檔案基本長什麼樣

## 高頻回查入口

- 想快速替影片加字幕時，看：[`track` 字幕標籤](./第45章_track字幕標籤.md)
- 想分清字幕、聽障字幕、音訊描述與章節時，看：[`track` 字幕標籤](./第45章_track字幕標籤.md)

## 易混淆主題

- `<source>` vs `<track>`：前者提供媒體檔來源，後者提供時間軸文字資料。
- `subtitles` vs `captions`：前者偏翻譯字幕，後者包含聲音資訊與對白。
- `srclang` vs `label`：前者是語言代碼，後者是使用者看到的名稱。

## 導航

- [返回首頁](../README.md)
