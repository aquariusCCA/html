# `track` 字幕標籤

> - 所屬章節：第四十五章｜`track` 字幕標籤  
> - 關鍵字：`track`、字幕、subtitles、captions、descriptions、chapters、metadata、WebVTT、`srclang`、`label`、`default`、可存取性  
> - 建議回查情境：想替影片加字幕、聽障字幕、音訊描述、章節標記，或想分清 `<source>` 和 `<track>` 時

## 一句話定義

`<track>` 是放在 `<audio>` 或 `<video>` 裡的空元素，用來載入「與媒體時間同步的文字軌」，例如字幕、聽障字幕、音訊描述、章節或給程式讀取的 metadata。

## 本節導讀

第十九章和第二十章已經學過 `<audio>`、`<video>` 和 `<source>`。  
這一章補的是媒體的時間軸文字資料：`<track>`。

可以先用下面這個心智模型理解：

```text
<audio> / <video>：媒體播放器本體
<source>         ：媒體檔來源，例如 mp4、webm、mp3
<track>          ：時間軸文字軌，例如字幕、章節、metadata
WebVTT           ：常見的文字軌檔案格式，副檔名通常是 .vtt
```

`<track>` 可以替影片或音訊提供：

- 字幕
- 聽障字幕
- 音訊描述
- 章節
- 給程式使用的 metadata

它通常搭配 WebVTT 檔案使用。

## 整理說明

- 原始學習重點：前面已學過音訊和影片來源。
- 本次整理方向：補上媒體文字軌道、可存取性與多語字幕。
- 補強內容：加入 `kind`、`srclang`、`label`、`default`、WebVTT 基本格式、常見錯誤與實務排查流程。
- 待實測：不同瀏覽器播放器 UI、字幕樣式、跨來源字幕載入、行動裝置顯示差異。

## 你會在這篇學到什麼

- `<track>` 的用途
- `<track>` 放在哪裡
- `<track>` 為什麼是空元素
- `kind` 有哪些常見值
- `srclang` 和 `label` 怎麼分
- `default` 代表什麼
- `subtitles` 和 `captions` 差在哪
- WebVTT 檔案基本格式
- 字幕沒有顯示時如何排查

## 30 秒複習入口

- `<track>` 放在 `<audio>` 或 `<video>` 裡。
- `<track>` 是空元素，不包內容，文字內容通常放在外部 `.vtt` 檔案。
- `<source>` 提供媒體檔，`<track>` 提供與時間同步的文字資料。
- 如果 `<video>` 裡有多個 `<source>`，通常先放 `<source>`，再放 `<track>`。
- `kind="subtitles"` 常用於翻譯字幕。
- `kind="captions"` 常用於聽障字幕，包含對白、音效、說話者等資訊。
- `srclang` 指文字軌語言，例如 `zh-Hant`、`en`。
- `label` 是播放器中給使用者看的名稱，例如 `繁體中文`、`English`。
- `default` 表示預設啟用的文字軌，通常一個媒體元素只放一條。
- 字幕檔常見格式是 WebVTT，副檔名通常是 `.vtt`。

## 速查區

### `kind` 常見值

| kind | 用途 | 適合情境 | 使用者是否通常會看到 |
|---|---|---|---|
| `subtitles` | 翻譯字幕 | 使用者聽得到聲音，但不懂影片語言 | 會 |
| `captions` | 聽障字幕 | 需要包含對白、音效、說話者、音樂提示 | 會 |
| `descriptions` | 音訊描述 | 描述畫面中重要視覺資訊，協助看不到畫面的使用者 | 不一定，依播放器與輔助技術而定 |
| `chapters` | 章節導航 | 讓影片可以依段落跳轉 | 依播放器 UI 而定 |
| `metadata` | 程式使用的時間軸資料 | 給 JavaScript 或播放器邏輯讀取 | 通常不會直接顯示 |

### 常見屬性

| 屬性 | 作用 | 是否常用 | 注意事項 |
|---|---|---|---|
| `src` | WebVTT 檔案位置 | 必常用 | 通常指向 `.vtt` 檔案，路徑錯誤會導致字幕無法載入 |
| `kind` | 文字軌類型 | 必常用 | 建議明確寫出；省略時容易讓閱讀者不清楚用途 |
| `srclang` | 文字軌語言 | 常用 | `kind="subtitles"` 時應特別注意；例如 `zh-Hant`、`en` |
| `label` | 使用者看到的軌道名稱 | 常用 | 多語字幕時很重要，例如 `繁體中文`、`English` |
| `default` | 預設啟用 | 視需求 | 布林屬性，不需要寫成 `default="true"`；通常只設定一條 |

### 最小語法模板

```html
<video controls src="./media/course.mp4">
  <track
    kind="subtitles"
    src="./media/course.zh-Hant.vtt"
    srclang="zh-Hant"
    label="繁體中文"
    default>
</video>
```

## 正文筆記

### 1. 最基本的影片字幕

```html
<video controls src="./media/course.mp4">
  <track
    kind="subtitles"
    src="./media/course.zh-Hant.vtt"
    srclang="zh-Hant"
    label="繁體中文"
    default>
</video>
```

這裡：

- `video` 提供影片播放器與影片本身。
- `controls` 讓瀏覽器顯示原生播放控制列。
- `track` 提供字幕文字軌。
- `src` 指向 WebVTT 檔案。
- `srclang` 表示字幕語言。
- `label` 是播放器選單中顯示的名稱。
- `default` 表示預設啟用這條字幕。

注意：`<track>` 是空元素，不要寫成：

```html
<!-- 不建議這樣寫 -->
<track kind="subtitles" src="./course.vtt">字幕內容</track>
```

字幕文字應該放在外部 WebVTT 檔案中。

### 2. `<source>` 和 `<track>` 差在哪？

`<source>` 提供媒體來源：

```html
<video controls>
  <source src="./movie.mp4" type="video/mp4">
  <source src="./movie.webm" type="video/webm">
</video>
```

`<track>` 提供文字軌：

```html
<video controls src="./movie.mp4">
  <track kind="subtitles" src="./movie.zh-Hant.vtt" srclang="zh-Hant" label="繁體中文">
</video>
```

兩者一起使用時，常見寫法如下：

```html
<video controls>
  <source src="./movie.mp4" type="video/mp4">
  <source src="./movie.webm" type="video/webm">

  <track kind="subtitles" src="./movie.zh-Hant.vtt" srclang="zh-Hant" label="繁體中文" default>
  <track kind="subtitles" src="./movie.en.vtt" srclang="en" label="English">
</video>
```

簡單記：

- `<source>`：給瀏覽器選影片或音訊檔。
- `<track>`：給瀏覽器載入與時間同步的文字資料。

### 3. `subtitles` 和 `captions` 差在哪？

`subtitles` 通常是翻譯字幕。  
它假設使用者聽得到影片聲音，只是不懂語言。

```html
<track kind="subtitles" src="./movie.en.vtt" srclang="en" label="English">
```

`captions` 通常是聽障字幕。  
它除了對白，還可能包含音效、說話者、音樂提示。

```html
<track kind="captions" src="./movie.zh-Hant.cc.vtt" srclang="zh-Hant" label="繁體中文 CC">
```

例如 captions 中可能有：

```text
[門鈴聲]
小明：我來了。

[背景音樂漸弱]
老師：今天我們來學 HTML 的 track 標籤。
```

判斷方式：

| 問題 | 比較適合 |
|---|---|
| 只是把英文對白翻成中文 | `subtitles` |
| 需要標出「誰在說話」 | `captions` |
| 需要標出「門鈴聲、爆炸聲、背景音樂」 | `captions` |
| 使用者聽不到聲音也要理解影片內容 | `captions` |

### 4. `descriptions`、`chapters`、`metadata`

`descriptions` 用於音訊描述，描述畫面中重要視覺資訊：

```html
<track kind="descriptions" src="./movie.desc.vtt" srclang="zh-Hant" label="口述影像">
```

例如它可能描述：

```text
主角走進昏暗的房間，看見桌上有一封信。
```

`chapters` 用於章節導航：

```html
<track kind="chapters" src="./movie.chapters.vtt" srclang="zh-Hant" label="章節">
```

章節檔可能讓播放器顯示類似：

```text
00:00 課程介紹
03:20 track 基本語法
08:10 WebVTT 格式
```

`metadata` 給程式使用，通常不是直接給使用者看的字幕：

```html
<track kind="metadata" src="./movie.metadata.vtt">
```

常見用途是讓 JavaScript 在影片播放到特定時間點時觸發互動效果，例如：

- 顯示補充資料
- 切換投影片
- 高亮目前章節
- 記錄使用者觀看進度

### 5. WebVTT 基本格式

WebVTT 檔案通常長這樣：

```text
WEBVTT

00:00:00.000 --> 00:00:03.000
歡迎來到 HTML 課程。

00:00:03.500 --> 00:00:06.000
這一章我們會學習 track 標籤。
```

重點包括：

- 檔案開頭是 `WEBVTT`。
- 每段字幕有時間範圍。
- 時間格式常見為 `時:分:秒.毫秒`。
- 時間範圍下面是要顯示的文字。
- 段落之間通常用空行分隔。

也可以加上 cue identifier，方便辨識每段字幕：

```text
WEBVTT

intro-1
00:00:00.000 --> 00:00:03.000
歡迎來到 HTML 課程。

track-1
00:00:03.500 --> 00:00:06.000
這一章我們會學習 track 標籤。
```

### 6. 多語字幕

```html
<video controls src="./course.mp4">
  <track kind="subtitles" src="./course.zh-Hant.vtt" srclang="zh-Hant" label="繁體中文" default>
  <track kind="subtitles" src="./course.en.vtt" srclang="en" label="English">
  <track kind="subtitles" src="./course.ja.vtt" srclang="ja" label="日本語">
</video>
```

可以提供多條字幕，讓使用者在播放器中切換。

通常只應該有一條 `default`。  
如果多條都設成 `default`，瀏覽器行為可能不符合預期，也會讓維護者難以判斷哪一條才是預設字幕。

### 7. 可存取性重點

媒體內容如果只有聲音，聽不到的使用者會失去資訊。  
媒體內容如果只有畫面，看不到的使用者也會失去資訊。

所以：

- 影片重要對白應提供 `captions` 或 `subtitles`。
- 重要音效應在 `captions` 中標出。
- 重要視覺資訊可考慮 `descriptions`。
- 教學影片可以搭配逐字稿或章節。
- 多語影片應提供清楚的 `label`，讓使用者能選到正確字幕。

`<track>` 是媒體可存取性的重要工具之一，但不是唯一工具。實務上也常搭配：

- 逐字稿
- 清楚的章節標題
- 可鍵盤操作的播放器
- 合理的字幕對比與字級
- 螢幕閱讀器與行動裝置測試

### 8. 跨來源與檔案路徑注意

`track src` 指向的是外部文字檔。  
如果字幕檔來自不同來源，可能會遇到 CORS 或伺服器設定問題。

實務上要檢查：

- `src` 路徑是否正確。
- WebVTT 檔案是否能被瀏覽器正常下載。
- WebVTT 檔案是否以 `WEBVTT` 開頭。
- 伺服器是否用合適的 MIME type 提供檔案，例如 `text/vtt`。
- 跨來源時，伺服器是否允許讀取。
- 若跨來源載入字幕，媒體元素是否需要搭配 `crossorigin` 設定。

常見寫法：

```html
<video controls crossorigin="anonymous" src="https://example.com/media/course.mp4">
  <track
    kind="subtitles"
    src="https://cdn.example.com/subtitles/course.zh-Hant.vtt"
    srclang="zh-Hant"
    label="繁體中文"
    default>
</video>
```

### 9. JavaScript 與文字軌的關係

一般情況下，只要想顯示字幕，不一定要寫 JavaScript。

但如果你要做自訂播放器、互動式影片或章節高亮，就可能會用到媒體元素的文字軌 API。

概念上可以先知道：

```js
const video = document.querySelector('video')
const tracks = video.textTracks

// 取得第一條文字軌
const firstTrack = tracks[0]

// 顯示文字軌
firstTrack.mode = 'showing'
```

這不是本章必須深入的內容。  
目前只要知道：`<track>` 不只可以給瀏覽器顯示字幕，也可以成為 JavaScript 讀取時間軸資料的入口。

## 常見錯誤

### 錯誤 1：把 `<track>` 放在 `<video>` 外面

```html
<!-- 錯誤 -->
<video controls src="./movie.mp4"></video>
<track kind="subtitles" src="./movie.zh-Hant.vtt" srclang="zh-Hant" label="繁體中文">
```

應改成：

```html
<!-- 正確 -->
<video controls src="./movie.mp4">
  <track kind="subtitles" src="./movie.zh-Hant.vtt" srclang="zh-Hant" label="繁體中文">
</video>
```

### 錯誤 2：把字幕內容直接寫在 `<track>` 裡

```html
<!-- 錯誤 -->
<track kind="subtitles">這裡放字幕內容</track>
```

`<track>` 應該用 `src` 指向外部 WebVTT 檔案。

### 錯誤 3：多條字幕都加上 `default`

```html
<!-- 不建議 -->
<track kind="subtitles" src="./zh.vtt" srclang="zh-Hant" label="繁體中文" default>
<track kind="subtitles" src="./en.vtt" srclang="en" label="English" default>
```

通常只讓一條文字軌成為預設。

### 錯誤 4：使用 `.srt` 但期待原生 `<track>` 一定能顯示

```html
<!-- 容易出問題 -->
<track kind="subtitles" src="./movie.srt" srclang="zh-Hant" label="繁體中文">
```

原生 `<track>` 常用 WebVTT。  
如果手上是 `.srt`，實務上通常需要轉成 `.vtt`，或使用支援 `.srt` 的播放器方案。

### 錯誤 5：字幕檔路徑正確，但伺服器設定錯誤

即使 HTML 寫對，如果伺服器沒有正確提供 `.vtt` 檔案，也可能導致字幕不出現。

常見原因包括：

- 檔案 404
- MIME type 不正確
- CORS 不允許
- WebVTT 格式錯誤
- 開發環境和正式環境路徑不同

## 字幕沒有顯示時的排查流程

可以照這個順序檢查：

1. `<track>` 是否真的放在 `<video>` 或 `<audio>` 裡。
2. DevTools 的 Network 是否有載入 `.vtt` 檔案。
3. `.vtt` 檔案是否 200 成功，而不是 404 或 403。
4. `.vtt` 檔案是否以 `WEBVTT` 開頭。
5. 時間軸格式是否正確，例如 `00:00:00.000 --> 00:00:03.000`。
6. `kind="subtitles"` 時是否有設定 `srclang`。
7. `label` 是否有顯示在播放器字幕選單中。
8. 是否有多條 `default` 造成預期外行為。
9. 跨來源載入時，是否有 CORS 或 `crossorigin` 問題。
10. 不同瀏覽器或行動裝置的原生播放器 UI 是否支援你期待的顯示方式。

## 常見問法

### `<track>` 可以單獨使用嗎？

不行。  
它應該放在 `<audio>` 或 `<video>` 內。

### `<track>` 裡面可以直接寫字幕文字嗎？

不建議，也不是它的正常用法。  
`<track>` 是空元素，通常透過 `src` 指向外部 WebVTT 檔案。

### 字幕一定要用 WebVTT 嗎？

HTML 原生 `<track>` 常用 WebVTT。  
其他字幕格式，例如 `.srt`，通常需要轉換成 `.vtt`，或交給特定播放器支援。

### `label` 和 `srclang` 差在哪？

`srclang` 是語言代碼，給瀏覽器和工具判斷。  
`label` 是使用者在播放器選單中看到的名稱。

例如：

```html
<track kind="subtitles" src="./course.zh-Hant.vtt" srclang="zh-Hant" label="繁體中文">
```

這裡：

- `srclang="zh-Hant"`：給瀏覽器看的語言資訊。
- `label="繁體中文"`：給使用者看的選單名稱。

### `default` 要寫成 `default="true"` 嗎？

不用。  
`default` 是布林屬性，出現就代表啟用。

```html
<track kind="subtitles" src="./course.zh-Hant.vtt" srclang="zh-Hant" label="繁體中文" default>
```

### `subtitles` 和 `captions` 可以混用嗎？

不建議混用概念。

- 翻譯字幕偏 `subtitles`。
- 包含聲音提示、說話者、音樂提示等無障礙資訊時，偏 `captions`。

## 自測問題

1. `<track>` 應該放在哪個元素內？
2. `<track>` 是不是可以包文字內容？為什麼？
3. `<source>` 和 `<track>` 最大差別是什麼？
4. `subtitles` 和 `captions` 差在哪？
5. `srclang` 和 `label` 分別做什麼？
6. `default` 代表什麼？
7. WebVTT 檔案基本格式包含哪些部分？
8. 為什麼 `<track>` 和可存取性有關？
9. 如果字幕沒有顯示，你會先檢查哪三件事？
10. 什麼情況下會使用 `kind="metadata"`？

## 自測答案

1. `<track>` 應該放在 `<audio>` 或 `<video>` 裡。
2. 不應該包文字內容；它是空元素，通常用 `src` 指向外部 WebVTT 檔案。
3. `<source>` 提供媒體檔來源，`<track>` 提供與時間同步的文字軌。
4. `subtitles` 偏翻譯字幕；`captions` 偏聽障字幕，包含音效、說話者等資訊。
5. `srclang` 是語言代碼；`label` 是使用者在播放器選單看到的名稱。
6. `default` 表示預設啟用該文字軌，通常一個媒體元素只設定一條。
7. WebVTT 通常包含 `WEBVTT` 開頭、時間範圍、字幕文字與段落空行。
8. 因為字幕、聽障字幕、音訊描述可以讓聽不到或看不到部分媒體內容的使用者取得資訊。
9. 可先檢查 `<track>` 位置、`.vtt` 是否成功載入、WebVTT 格式是否正確。
10. 當時間軸資料是給 JavaScript 或播放器邏輯使用，而不是直接給使用者看的字幕時，可以使用 `metadata`。

## 最後整理

學 `<track>` 時，不要只背標籤，要記住這個分工：

```text
媒體檔案本身        → <video> / <audio> / <source>
時間軸文字資料      → <track>
字幕檔常見格式      → WebVTT
使用者看得到的名稱  → label
語言代碼            → srclang
預設啟用            → default
```

實務上只要你能判斷：

- 這條文字軌是字幕、聽障字幕、音訊描述、章節還是 metadata？
- `.vtt` 檔案是否能被瀏覽器正確載入？
- 使用者是否能在播放器中清楚選到想要的字幕？
- 這段媒體是否對聽障或視障使用者友善？

就算真正掌握 `<track>` 的核心了。

## 延伸閱讀

- [第四十五章｜`track` 字幕標籤](./README.md)
- [第十九章｜音頻標籤](../第十九章_音頻標籤/README.md)
- [第二十章｜視頻標籤](../第二十章_視頻標籤/README.md)
- [第三十八章｜HTML 可存取性基礎](../第三十八章_HTML可存取性基礎/README.md)
- [MDN：`<track>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
- [MDN：WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)
