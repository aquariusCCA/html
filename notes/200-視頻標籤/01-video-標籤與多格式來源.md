---
source_atomic:
  - atomic/200-視頻標籤/01-video-標籤基本概念與常見屬性.md
  - atomic/200-視頻標籤/02-video-source-多格式與低版本瀏覽器支援.md
---

# video 標籤：在網頁中嵌入影片

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 `<video>` 標籤在 HTML 中的語意與用途。
- 使用 `<video>` 在頁面中嵌入影片。
- 判斷什麼時候需要 `controls`、`autoplay`、`muted`、`loop` 等屬性。
- 使用 `<source>` 提供多種影片格式，降低瀏覽器不支援的風險。

## 使用情境

當網頁需要直接播放影片時，例如課程影片、產品展示、活動紀錄、作品集影片或背景影片，就可以使用 `<video>` 標籤。

如果只是放一張影片縮圖並連到 YouTube，不一定需要 `<video>`；但如果影片檔案本身由網站提供，並希望瀏覽器直接在頁面中播放，`<video>` 就是對應的 HTML 標籤。

## 一句話理解

`<video>` 是用來把影片內容嵌入網頁的 HTML 語意標籤；`<source>` 則用來在 `<video>` 裡提供多個可選的影片來源。

## 基本語法

最簡單的寫法是直接在 `<video>` 上使用 `src` 指定影片檔案，並加上 `controls` 讓使用者可以播放、暫停與調整音量。

```html
<video src="movie.mp4" controls>
</video>
```

這段程式碼的意思是：

- `<video>`：在頁面中嵌入影片內容。
- `src="movie.mp4"`：指定影片檔案位置。
- `controls`：顯示瀏覽器內建的播放控制列。

沒有 `controls` 時，影片仍然可能被載入，但使用者不一定有明顯方式可以播放或暫停它。對一般內容型影片來說，通常應該保留 `controls`。

## 常用屬性

| 屬性 | 作用 | 實務提醒 |
| --- | --- | --- |
| `src` | 指定影片檔案位置 | 適合只有單一影片來源時使用 |
| `controls` | 顯示瀏覽器內建控制列 | 一般影片建議提供，讓使用者能操作 |
| `poster` | 設定影片尚未播放前顯示的封面圖片 | 可避免頁面一開始只出現空白播放器 |
| `preload` | 提示瀏覽器是否預先載入影片 | 影片很大時要留意流量與載入速度 |
| `autoplay` | 嘗試自動播放影片 | 現代瀏覽器常限制未靜音的自動播放 |
| `muted` | 設定影片初始為靜音 | 背景影片或自動播放影片常會搭配使用 |
| `loop` | 影片播放結束後循環播放 | 常見於背景影片或短循環展示 |
| `width` | 設定影片寬度 | 可用 HTML 屬性或 CSS 控制尺寸 |
| `height` | 設定影片高度 | 實務上常搭配 CSS 維持比例 |

## 範例：可操作的影片播放器

```html
<video src="movie.mp4" controls width="640" poster="cover.jpg">
</video>
```

這個範例適合一般內容型影片，例如教學影片或產品介紹。

- `src="movie.mp4"` 指向影片檔案。
- `controls` 讓使用者自行播放、暫停、調整音量。
- `width="640"` 設定播放器顯示寬度。
- `poster="cover.jpg"` 設定影片播放前的封面圖。

這種寫法的重點是「把控制權交給使用者」。只要影片是主要內容，而不是裝飾背景，就應該讓使用者能清楚控制播放行為。

## 範例：背景影片常見寫法

```html
<video src="background.mp4" autoplay muted loop>
</video>
```

背景影片通常不是主要內容，而是視覺效果，所以常見設定會是：

- `autoplay`：希望頁面載入後自動播放。
- `muted`：靜音，避免突然播放聲音，也提高自動播放成功機率。
- `loop`：循環播放，讓背景效果不中斷。
- 不加 `controls`：背景影片通常不需要顯示控制列。

但要注意，`autoplay` 不是保證一定成功。瀏覽器通常會限制有聲音的自動播放，因此背景影片如果需要自動播放，實務上通常會搭配 `muted`。

## 使用 source 提供多格式來源

不同瀏覽器對影片格式與編碼的支援可能不同。為了提高相容性，可以在 `<video>` 裡放多個 `<source>`，讓瀏覽器自己選擇第一個能播放的來源。

```html
<video controls>
  <source src="../../origin/200-視頻標籤/assets/files/video-tags-file-001-7239dd.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  您的瀏覽器不支援 video 標籤。
</video>
```

這段範例的流程是：

1. 瀏覽器看到 `<video controls>`，建立影片播放器並顯示控制列。
2. 瀏覽器檢查第一個 `<source>`：如果支援 `video/mp4` 並且檔案可播放，就使用它。
3. 如果第一個來源不能播放，瀏覽器再嘗試下一個 `<source>`。
4. 如果瀏覽器完全不支援 `<video>` 標籤，才會顯示內部的備用文字。

`<source>` 上常見的兩個屬性是：

- `src`：影片檔案的位置。
- `type`：影片的 MIME 類型，例如 `video/mp4`、`video/webm`，可幫助瀏覽器判斷是否支援。

## src 與 source 的選擇

如果只有一個影片檔案來源，可以直接寫在 `<video src="...">` 上：

```html
<video src="movie.mp4" controls>
</video>
```

如果要提供多種格式，應改用多個 `<source>`：

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
</video>
```

不要同時把主要影片寫在 `<video src="...">`，又在內部放一組不同用途的 `<source>`。對初學者來說，先用這個判斷就夠清楚：

- 單一來源：用 `<video src="...">`。
- 多格式備援：用 `<video>` 搭配多個 `<source>`。

## 常見錯誤

### 忘記加 controls

```html
<video src="lesson.mp4">
</video>
```

這段程式碼不是語法錯誤，但使用者可能看不到播放按鈕，也不知道怎麼操作影片。除非這支影片是背景或由 JavaScript 自訂控制，否則一般影片應加上 `controls`。

正確寫法：

```html
<video src="lesson.mp4" controls>
</video>
```

### 誤以為 autoplay 一定會成功

```html
<video src="intro.mp4" autoplay>
</video>
```

現代瀏覽器通常會限制未靜音的自動播放，避免網頁一打開就突然發出聲音。因此這段程式碼即使有 `autoplay`，也可能不會自動播放。

如果是背景影片，常見寫法是：

```html
<video src="intro.mp4" autoplay muted loop>
</video>
```

如果影片是重要內容，不應只依賴自動播放；應提供 `controls`，讓使用者可以自行播放。

### 只提供單一格式卻忽略瀏覽器支援

```html
<video src="movie.webm" controls>
</video>
```

單一格式在部分環境可能無法播放。若這支影片很重要，應考慮提供多種格式：

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
</video>
```

### 誤解備用文字的顯示時機

```html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  您的瀏覽器不支援 video 標籤。
</video>
```

這段備用文字主要給「不支援 `<video>` 標籤」的瀏覽器使用，不是所有影片載入失敗時都一定會顯示。若要處理影片不存在、網路失敗或播放錯誤，通常需要再搭配其他前端邏輯。

## 實務判斷準則

| 情境 | 建議寫法 |
| --- | --- |
| 一般教學影片、產品影片 | 使用 `<video src="..." controls>` |
| 需要支援多種格式 | 使用 `<video>` 搭配多個 `<source>` |
| 背景影片 | 常用 `autoplay muted loop`，通常不加 `controls` |
| 影片尚未播放前需要封面 | 加上 `poster` |
| 不希望網頁一開始載入大量影片資料 | 留意 `preload` 設定與實際載入策略 |

## 重點整理

- `<video>` 用來在 HTML 文件中嵌入影片內容。
- 一般影片應提供 `controls`，讓使用者能播放、暫停與控制音量。
- `autoplay` 可能受到瀏覽器限制，尤其是未靜音影片。
- 背景影片常搭配 `autoplay`、`muted`、`loop`。
- 多格式影片來源應使用多個 `<source>`，瀏覽器會選擇第一個可播放的來源。
- 備用文字主要給不支援 `<video>` 標籤的瀏覽器，不等於完整的播放錯誤處理。

## 自我檢查

1. 如果你要在文章中放一支教學影片，為什麼通常應該加上 `controls`？
2. 為什麼背景影片常常要同時使用 `autoplay` 和 `muted`？
3. 什麼情況下會從 `<video src="...">` 改成 `<video>` 搭配多個 `<source>`？
4. `<source>` 的 `type="video/mp4"` 對瀏覽器有什麼幫助？
5. `<video>` 內的備用文字是不是所有影片播放失敗時都會顯示？為什麼？
