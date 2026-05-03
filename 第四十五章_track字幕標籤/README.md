# 第四十五章｜`track` 字幕標籤

> 章節定位：理解音訊與影片如何透過 `<track>` 載入「與時間同步的文字軌」，例如字幕、聽障字幕、音訊描述、章節與機器可讀的 metadata。  
> 建議閱讀方式：先建立 `<audio>` / `<video>` / `<source>` / `<track>` 的分工，再分清 `subtitles`、`captions`、`descriptions`、`chapters`、`metadata` 的使用情境。

## 一句話定義

`<track>` 是放在 `<audio>` 或 `<video>` 裡的空元素，用來替媒體載入外部文字軌檔案，最常見的格式是 WebVTT。

## 本章在學什麼

這一章延續第十九章音頻與第二十章視頻，補上媒體文字軌道的觀念。

你要掌握的不是單純背語法，而是理解：

- 影片或音訊本體由 `<audio>` / `<video>` 和 `<source>` 負責。
- 字幕、聽障字幕、音訊描述、章節與 metadata 由 `<track>` 負責。
- `<track>` 通常指向 `.vtt` 檔案，讓瀏覽器或播放器根據時間顯示文字內容。

## 本章與整體地圖的關係

- 前置知識：第十九章已學過 `<audio>`，第二十章已學過 `<video>` 和 `<source>`。
- 這章的核心任務：補齊媒體可存取性、多語字幕與時間軸文字資料的基本入口。
- 讀完後通常接：WebVTT、媒體播放器、可存取性、國際化內容與字幕樣式控制。

## 建議閱讀順序

1. 先看正式筆記的「30 秒複習入口」，建立整體印象。
2. 再看「速查區」，記住 `kind` 和常見屬性的用途。
3. 接著看「正文筆記」，理解範例與使用情境。
4. 最後用「常見錯誤」和「自測問題」檢查自己是否真的懂。

## 本章所有小節

- [`track` 字幕標籤](./第45章_track字幕標籤.md)

## 適合快速回查的主題

- `<track>` 是做什麼的
- `<track>` 應該放在哪裡
- `<source>` 和 `<track>` 差在哪
- `kind` 有哪些常見值
- `srclang` 和 `label` 怎麼分
- `default` 代表什麼
- `subtitles` 和 `captions` 差在哪
- WebVTT 檔案基本長什麼樣
- 字幕沒有顯示時要檢查什麼

## 高頻回查入口

- 想快速替影片加字幕時，看：[`track` 字幕標籤](./第45章_track字幕標籤.md#1-最基本的影片字幕)
- 想分清 `<source>` 和 `<track>` 時，看：[`track` 字幕標籤](./第45章_track字幕標籤.md#2-source-和-track-差在哪)
- 想判斷該用哪個 `kind` 時，看：[`track` 字幕標籤](./第45章_track字幕標籤.md#kind-常見值)
- 想了解 WebVTT 格式時，看：[`track` 字幕標籤](./第45章_track字幕標籤.md#5-webvtt-基本格式)
- 字幕沒有出現時，看：[`track` 字幕標籤](./第45章_track字幕標籤.md#字幕沒有顯示時的排查流程)

## 快速決策表

| 需求 | 建議使用 |
|---|---|
| 使用者聽得到聲音，只是不懂影片語言 | `kind="subtitles"` |
| 給聽障使用者閱讀，需包含對白、音效、說話者 | `kind="captions"` |
| 讓看不到畫面的使用者理解重要視覺資訊 | `kind="descriptions"` |
| 讓影片可以依章節跳轉 | `kind="chapters"` |
| 給 JavaScript 或播放器邏輯讀取時間軸資料 | `kind="metadata"` |

## 易混淆主題

- `<source>` vs `<track>`：前者提供媒體檔來源，後者提供與時間同步的文字資料。
- `subtitles` vs `captions`：前者偏翻譯字幕，後者偏無障礙字幕，通常包含聲音資訊與對白。
- `srclang` vs `label`：前者是語言代碼，後者是使用者在播放器選單看到的名稱。
- `default` vs 預設顯示：`default` 是布林屬性，通常一個媒體元素只放一條預設文字軌。
- `.vtt` vs `.srt`：原生 `<track>` 常用 WebVTT；其他格式通常需要播放器或轉檔支援。

## 實務檢查清單

使用 `<track>` 時，至少檢查：

- `<track>` 是否放在 `<audio>` 或 `<video>` 裡。
- 如果有多個 `<source>`，`<track>` 是否放在 `<source>` 後面。
- `src` 是否指向可讀取的 `.vtt` 檔案。
- WebVTT 檔案是否以 `WEBVTT` 開頭。
- `kind="subtitles"` 時是否有寫 `srclang`。
- `label` 是否是使用者看得懂的名稱。
- 是否只有一條文字軌加上 `default`。
- 伺服器是否正確提供 WebVTT 檔案，例如 MIME type、CORS、檔案路徑。

## 對應示例

- [`track` 字幕標籤 Demo](./demos/track-text-tracks-demo.html)
- [demos 說明](./demos/README.md)

## 導航

- [返回首頁](../README.md)
