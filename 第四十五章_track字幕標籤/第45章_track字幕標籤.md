# `track` 字幕標籤

> - 所屬章節：第四十五章｜`track` 字幕標籤  
> - 關鍵字：`track`、字幕、subtitles、captions、descriptions、chapters、metadata、WebVTT、`srclang`、`label`、`default`  
> - 建議回查情境：想替影片加字幕、聽障字幕、音訊描述、章節標記，或想分清 `<source>` 和 `<track>` 時

## 本節導讀

第十九章和第二十章已經學過 `<audio>`、`<video>` 和 `<source>`。  
這一章補的是媒體的時間軸文字資料：`<track>`。

`<track>` 可以替影片或音訊提供：

- 字幕
- 聽障字幕
- 音訊描述
- 章節
- 給程式使用的 metadata

它通常搭配 WebVTT 檔案使用。

## 整理說明

- 原始學習重點：前面已學過音訊和影片來源。
- 本次整理方向：補上媒體文字軌道與可存取性。
- 補強內容：加入 `kind`、`srclang`、`label`、`default` 和 WebVTT 基本格式。
- 待查證：不同瀏覽器播放器 UI、字幕樣式和跨來源載入限制需實測。

## 你會在這篇學到什麼

- `<track>` 的用途
- `<track>` 放在哪裡
- `kind` 有哪些常見值
- `srclang` 和 `label` 怎麼分
- `default` 代表什麼
- subtitles 和 captions 差在哪
- WebVTT 檔案基本格式

## 30 秒複習入口

- `<track>` 放在 `<audio>` 或 `<video>` 裡。
- `<source>` 提供媒體檔，`<track>` 提供時間軸文字資料。
- `kind="subtitles"` 常用於翻譯字幕。
- `kind="captions"` 常用於聽障字幕，包含對白與聲音資訊。
- `srclang` 指字幕語言。
- `label` 是播放器中給使用者看的名稱。
- `default` 表示預設啟用的文字軌。
- 字幕檔常見格式是 WebVTT。

## 速查區

### `kind` 常見值

| kind | 用途 |
|---|---|
| `subtitles` | 翻譯字幕，假設使用者聽得到聲音 |
| `captions` | 聽障字幕，包含對白、音效、說話者等資訊 |
| `descriptions` | 音訊描述，描述畫面中重要視覺資訊 |
| `chapters` | 章節導航 |
| `metadata` | 給程式使用的時間軸資料 |

### 常見屬性

| 屬性 | 作用 |
|---|---|
| `src` | WebVTT 檔案位置 |
| `kind` | 文字軌類型 |
| `srclang` | 文字軌語言 |
| `label` | 使用者看到的軌道名稱 |
| `default` | 預設啟用 |

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

- `video` 提供影片本身。
- `track` 提供字幕文字軌。
- `src` 指向 WebVTT 檔案。
- `srclang` 表示字幕語言。
- `label` 是播放器選單中顯示的名稱。
- `default` 表示預設開啟這條字幕。

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

簡單記：

- `<source>`：影片或音訊檔案。
- `<track>`：和時間同步的文字資料。

### 3. subtitles 和 captions 差在哪？

`subtitles` 通常是翻譯字幕。  
假設使用者聽得到影片聲音，只是不懂語言。

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
```

### 4. descriptions、chapters、metadata

`descriptions` 用於音訊描述，描述畫面中重要視覺資訊：

```html
<track kind="descriptions" src="./movie.desc.vtt" srclang="zh-Hant" label="口述影像">
```

`chapters` 用於章節：

```html
<track kind="chapters" src="./movie.chapters.vtt" srclang="zh-Hant" label="章節">
```

`metadata` 給程式使用，通常不是直接給使用者看的字幕。

```html
<track kind="metadata" src="./movie.metadata.vtt">
```

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
- 時間範圍下面是要顯示的文字。

### 6. 多語字幕

```html
<video controls src="./course.mp4">
  <track kind="subtitles" src="./course.zh-Hant.vtt" srclang="zh-Hant" label="繁體中文" default>
  <track kind="subtitles" src="./course.en.vtt" srclang="en" label="English">
</video>
```

可以提供多條字幕，讓使用者在播放器中切換。

通常只應該有一條 `default`。  
如果多條都設成 default，瀏覽器行為可能不符合預期。

### 7. 可存取性重點

媒體內容如果只有聲音，聽不到的使用者會失去資訊。  
如果只有畫面，看不到的使用者也會失去資訊。

所以：

- 影片重要對白應提供 captions 或 subtitles。
- 重要音效應在 captions 中標出。
- 重要視覺資訊可考慮 descriptions。
- 教學影片可以搭配逐字稿或章節。

`<track>` 是媒體可存取性的重要工具之一。

### 8. 跨來源與檔案路徑注意

`track src` 指向的是外部文字檔。  
如果字幕檔來自不同來源，可能會遇到 CORS 或伺服器設定問題。

實務上要檢查：

- `src` 路徑是否正確。
- WebVTT 檔案是否能正常被伺服器提供。
- 檔案 MIME type 是否合適。
- 跨來源時伺服器是否允許讀取。

## 常見問法

### `<track>` 可以單獨使用嗎？

不行。  
它應該放在 `<audio>` 或 `<video>` 內。

### 字幕一定要用 WebVTT 嗎？

HTML 的 `<track>` 常用 WebVTT。  
其他字幕格式通常需要播放器或轉換工具支援。

### `label` 和 `srclang` 差在哪？

`srclang` 是語言代碼，給瀏覽器和工具判斷。  
`label` 是使用者在播放器選單中看到的名稱。

### subtitles 和 captions 可以混用嗎？

不建議混用概念。

翻譯字幕偏 `subtitles`。  
包含聲音提示、說話者等無障礙資訊時，偏 `captions`。

## 自測問題

1. `<track>` 應該放在哪個元素內？
2. `<source>` 和 `<track>` 最大差別是什麼？
3. `subtitles` 和 `captions` 差在哪？
4. `srclang` 和 `label` 分別做什麼？
5. `default` 代表什麼？
6. WebVTT 檔案基本格式包含哪些部分？
7. 為什麼 `<track>` 和可存取性有關？

## 延伸閱讀

- [第四十五章｜`track` 字幕標籤](./README.md)
- [第十九章｜音頻標籤](../第十九章_音頻標籤/README.md)
- [第二十章｜視頻標籤](../第二十章_視頻標籤/README.md)
- [第三十八章｜HTML 可存取性基礎](../第三十八章_HTML可存取性基礎/README.md)
- [MDN：`<track>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)
- [MDN：WebVTT](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)
