# `head` 補充標籤

> - 所屬章節：第三十三章｜`head` 補充標籤  
> - 關鍵字：`head`、`link`、`rel`、`href`、stylesheet、favicon、icon、preconnect、preload、`base`、相對 URL、資源提示  
> - 建議回查情境：想知道 CSS 檔案怎麼接進 HTML、favicon 怎麼設定、`rel` 是什麼、`preconnect` / `preload` 差在哪、`<base>` 為什麼會影響相對路徑時

## 本節導讀

`<head>` 裡的內容大多不會直接顯示在頁面上。  
它主要用來描述這份 HTML 文件，並告訴瀏覽器一些「理解文件」與「載入資源」時需要知道的資訊。

前面已經學過 `<meta>` 和 `<title>`：

- `<meta>`：補充文件資訊，例如編碼、viewport、SEO 描述等。
- `<title>`：設定瀏覽器分頁、書籤、搜尋結果中可能看到的頁面標題。

這一篇補上另外兩個常被忽略，但很重要的 `head` 相關標籤：

- `<link>`：建立「目前 HTML 文件」和「外部資源」之間的關係。
- `<base>`：設定整份文件中相對 URL 的基準位置，或設定連結的預設開啟目標。

這一章的重點不是死背語法，而是理解：

```text
<head>
  ↓
描述文件、連接資源、設定瀏覽器解析文件時的規則
  ↓
<link>：這份文件和外部資源有什麼關係？
<base>：這份文件裡的相對 URL 要以哪裡為基準？
```

## 整理說明

- 原始學習重點：理解 HTML 頭部除了 `meta` 和 `title`，還會連接外部資源。
- 本次整理方向：補齊 `<link>` 的常見用途、`rel` 判讀方式、資源提示概念，以及 `<base>` 對相對 URL 的全局影響。
- 補強內容：加入 stylesheet、favicon、preconnect、preload、base URL、CSS 覆蓋規則、`target="_blank"` 安全提醒與常見誤用。
- 實務提醒：本節以 HTML Living Standard 與 MDN 文件方向整理；實際專案仍應依目標瀏覽器、建置工具與部署路徑確認。

## 你會在這篇學到什麼

- `<head>` 裡的內容主要負責什麼
- `<link>` 和 `<a>` 的差別
- `rel`、`href`、`type`、`sizes`、`as`、`crossorigin` 各自在做什麼
- 如何在 HTML 中連接 CSS
- 多份 CSS 的載入順序與覆蓋規則要怎麼理解
- 如何設定 favicon
- `preconnect` 和 `preload` 可以先怎麼理解
- `<base>` 會如何改變相對 URL
- `<base target>` 會如何影響連結開啟方式
- 什麼情況不建議使用 `<base>`

## 30 秒複習入口

- `<head>` 通常放「描述文件」與「連接資源」的資訊，不放頁面正文內容。
- `<link>` 通常放在 `<head>`，用來建立目前文件和外部資源的關係。
- `rel` 表示 relationship，也就是外部資源和目前文件的關係。
- `href` 指向外部資源的位置。
- CSS 常用：`<link rel="stylesheet" href="style.css">`。
- favicon 常用：`<link rel="icon" href="/favicon.ico">`。
- `preconnect` 是提前建立連線，適合即將使用的第三方來源。
- `preload` 是提前載入重要資源，通常要搭配 `as` 指明資源類型。
- `<base>` 會改變整份文件中相對 URL 的解析基準。
- `<base>` 是全局設定，不是局部設定，不確定影響範圍時不要隨便加。

## 觀念總覽

### `<head>` 裡常見內容

| 標籤 | 主要用途 | 例子 |
|---|---|---|
| `<meta>` | 描述文件資訊 | 字元編碼、viewport、description |
| `<title>` | 設定文件標題 | 瀏覽器分頁標題 |
| `<link>` | 連接外部資源或提供資源提示 | CSS、favicon、preconnect、preload |
| `<base>` | 設定相對 URL 的基準或預設 target | 統一相對路徑基準、預設新分頁開啟 |
| `<script>` | 載入或撰寫 JavaScript | 通常也可放在 `<body>` 結尾 |

這一篇主要聚焦在 `<link>` 和 `<base>`。

## 速查區

### 常見 `<link>` 用法

| 用途 | 寫法 | 重點 |
|---|---|---|
| 載入 CSS | `<link rel="stylesheet" href="style.css">` | 最常見用途，表示資源是樣式表 |
| 設定 favicon | `<link rel="icon" href="/favicon.ico">` | 瀏覽器分頁、書籤或捷徑圖示 |
| 指定 PNG icon | `<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">` | 補充格式與尺寸資訊 |
| 預連線 | `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` | 提前建立連線，常用於第三方字體來源 |
| 預載重要資源 | `<link rel="preload" href="/fonts/site.woff2" as="font" type="font/woff2" crossorigin>` | 提醒瀏覽器提早載入重要資源 |

### `<link>` 和 `<a>` 差別

| 標籤 | 常見位置 | 核心用途 | 使用者是否直接點擊 |
|---|---|---|---|
| `<link>` | `<head>` | 描述目前文件和外部資源的關係 | 通常不會 |
| `<a>` | `<body>` | 建立使用者可以點擊的超連結 | 會 |

簡單記法：

```text
<link>：給瀏覽器看的資源關係
<a>：給使用者點擊的連結
```

### `<link>` 常見屬性

| 屬性 | 意義 | 常見範例 |
|---|---|---|
| `rel` | 外部資源和目前文件的關係 | `stylesheet`、`icon`、`preconnect`、`preload` |
| `href` | 外部資源的位置 | `./css/main.css`、`/favicon.ico` |
| `type` | 資源的 MIME type | `image/png`、`font/woff2` |
| `sizes` | icon 尺寸 | `32x32`、`180x180` |
| `as` | preload 資源類型 | `font`、`image`、`script`、`style` |
| `crossorigin` | 跨來源請求設定 | 字體、CDN 資源常見 |
| `media` | 指定樣式適用媒體條件 | `screen`、`print`、`(max-width: 768px)` |

初學時最重要的是先掌握：

```text
rel：這是什麼關係？
href：資源在哪裡？
```

其他屬性可以等遇到 favicon、字體、效能優化時再逐步補上。

### `<base>` 快速判斷

| 問題 | 判斷 |
|---|---|
| 想讓整份文件的相對路徑都基於同一個 URL | 可以理解 `<base>` 的用途 |
| 專案路徑很多、多人維護、頁面資源複雜 | 要非常小心 |
| 只是想讓某一個連結開新頁 | 不需要用 `<base>` |
| 不確定頁面中有哪些相對 URL | 先不要用 `<base>` |
| 使用 SPA、前端路由或建置工具管理路徑 | 通常不建議隨便手動加 `<base>` |

## 正文筆記

### 1. `<head>` 裡通常放什麼？

一份 HTML 文件常見骨架如下：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML 筆記</title>
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
  <h1>HTML 筆記</h1>
</body>
</html>
```

`<head>` 裡的內容主要用來描述文件、設定文件資訊、連接外部資源。  
它不是頁面正文，因此不應該把要顯示給使用者閱讀的主要內容放在 `<head>` 裡。

錯誤觀念：

```text
<head> 是畫面上方的區域
```

正確觀念：

```text
<head> 是 HTML 文件的描述區，不是視覺上的頁面頭部
```

頁面上方的導覽列、Logo、Banner 通常應該放在 `<body>` 裡，例如：

```html
<body>
  <header>
    <h1>我的網站</h1>
    <nav>...</nav>
  </header>
</body>
```

### 2. `<link>` 在做什麼？

`<link>` 用來建立「目前文件」和「外部資源」之間的關係。

最常見的是連接 CSS：

```html
<link rel="stylesheet" href="./css/style.css">
```

這段可以拆成兩個重點：

- `rel="stylesheet"`：這個外部資源和目前文件的關係是「樣式表」。
- `href="./css/style.css"`：這個外部資源的位置在 `./css/style.css`。

所以不要只把 `<link>` 背成「引入 CSS 的標籤」。  
更完整的理解是：

```text
<link> 負責描述外部資源和目前 HTML 文件之間的關係。
```

CSS 只是 `<link>` 最常見、最容易接觸到的用途之一。

### 3. `rel` 是什麼？

`rel` 是 relationship 的縮寫，用來描述外部資源和目前文件的關係。

例如：

```html
<link rel="stylesheet" href="./style.css">
<link rel="icon" href="/favicon.ico">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

同樣都是 `<link>`，但 `rel` 不同，意思就不同：

| `rel` 值 | 意思 | 常見情境 |
|---|---|---|
| `stylesheet` | 這是一份樣式表 | 載入 CSS |
| `icon` | 這是頁面圖示 | favicon |
| `preconnect` | 提前和某個來源建立連線 | 第三方字體、CDN |
| `preload` | 提前載入重要資源 | 首屏字體、關鍵圖片、重要 CSS 或 JS |

因此讀 `<link>` 時，可以先問自己兩個問題：

```text
1. rel 是什麼？
   → 這個資源和目前文件是什麼關係？

2. href 指到哪裡？
   → 這個資源的位置在哪裡？
```

### 4. `href` 是什麼？

`href` 用來指定資源的位置。

例如：

```html
<link rel="stylesheet" href="./css/main.css">
```

這裡的 `href="./css/main.css"` 表示瀏覽器要去目前 HTML 文件所在位置的 `css` 資料夾底下找 `main.css`。

常見路徑概念：

| 寫法 | 意義 |
|---|---|
| `style.css` | 目前 HTML 同層的 `style.css` |
| `./style.css` | 目前 HTML 同層的 `style.css` |
| `./css/style.css` | 目前 HTML 同層 `css` 資料夾裡的 `style.css` |
| `/css/style.css` | 網站根目錄下的 `css/style.css` |
| `https://example.com/style.css` | 完整網址，指向外部或指定來源的資源 |

`href` 的解析會受到目前文件位置影響，也可能受到 `<base>` 影響。  
因此如果頁面中有使用 `<base>`，就要特別注意所有相對路徑的結果是否符合預期。

### 5. CSS 檔案怎麼接進 HTML？

最常見寫法：

```html
<link rel="stylesheet" href="./css/main.css">
```

一般會放在 `<head>` 裡，讓瀏覽器在解析頁面時能盡早知道需要載入樣式。

如果有多份 CSS，常見寫法如下：

```html
<link rel="stylesheet" href="./css/base.css">
<link rel="stylesheet" href="./css/layout.css">
<link rel="stylesheet" href="./css/page.css">
```

初學時可以先用這個順序理解：

```text
基礎樣式 → 版面樣式 → 單頁樣式 → 覆蓋樣式
```

也就是：

```text
共用、基礎、範圍大的樣式放前面
單頁、局部、覆蓋用的樣式放後面
```

不過要注意，CSS 是否覆蓋成功，不是只看「誰寫在後面」。  
它還會受到以下因素影響：

- 選擇器權重，也就是 specificity
- 樣式來源，例如瀏覽器預設、作者樣式、使用者樣式
- 是否使用 `!important`
- CSS 規則的出現順序

初學時可以先記：

> 在選擇器權重相同或相近時，後面載入或後面出現的規則比較容易覆蓋前面的規則。

### 6. CSS 的 `media` 屬性可以做什麼？

`<link rel="stylesheet">` 可以搭配 `media`，表示這份 CSS 適用在什麼媒體條件下。

例如列印樣式：

```html
<link rel="stylesheet" href="./css/print.css" media="print">
```

例如小螢幕樣式：

```html
<link rel="stylesheet" href="./css/mobile.css" media="(max-width: 768px)">
```

初學時不必急著大量拆分 CSS。  
但要知道：`<link>` 不只可以指定 CSS 檔案，也可以用屬性補充這份資源的適用條件。

### 7. favicon 怎麼寫？

favicon 是瀏覽器分頁、收藏、捷徑中常見的小圖示。

最基本寫法：

```html
<link rel="icon" href="/favicon.ico">
```

也可以指定格式與尺寸：

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
```

這裡的重點仍然是 `rel`：

- `rel="icon"`：表示這個資源是文件圖示。
- `href`：指向圖示檔案。
- `type`：補充圖示格式。
- `sizes`：補充圖示尺寸。

常見 favicon 設定可以依專案需求逐步增加，不一定一開始就要寫很多種格式。  
初學階段先掌握下面這行就夠了：

```html
<link rel="icon" href="/favicon.ico">
```

### 8. `preconnect` 先怎麼理解？

`preconnect` 是一種資源提示。  
它不是載入某個檔案，而是提醒瀏覽器：

```text
這個頁面等等很可能會跟某個來源拿資源，你可以先建立連線。
```

例如：

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

它適合用在頁面很快就會向某個第三方來源請求資源的情境，例如：

- 第三方字體服務
- CDN
- API 或靜態資源來源

但 `preconnect` 不適合到處亂加。  
因為提前建立連線也會消耗瀏覽器與網路資源，如果預連線的來源最後根本沒用到，就可能浪費資源。

初學時可以這樣記：

> `preconnect` 是「提前建立連線」，不是「提前下載檔案」。

### 9. `preload` 先怎麼理解？

`preload` 也是一種資源提示。  
它的作用是提醒瀏覽器：

```text
這個資源很重要，等等很快會用到，請提早載入。
```

例如預載字體：

```html
<link rel="preload" href="/fonts/site.woff2" as="font" type="font/woff2" crossorigin>
```

`preload` 通常要搭配 `as`，告訴瀏覽器這個資源的類型：

| `as` 值 | 資源類型 |
|---|---|
| `font` | 字體 |
| `image` | 圖片 |
| `script` | JavaScript |
| `style` | CSS |
| `fetch` | 透過 fetch 取得的資源 |

`as` 很重要，因為瀏覽器會根據資源類型決定：

- 請求優先級
- 快取策略
- 安全檢查方式
- 後續能不能正確重用這個資源

`preload` 也不要亂用。  
它適合用在「真的很快會用到，而且對首屏或關鍵體驗很重要」的資源。  
如果預載後沒有使用，反而可能浪費頻寬，甚至在開發者工具中看到瀏覽器警告。

初學時可以這樣記：

```text
preconnect：先建立連線
preload：先下載重要資源
```

### 10. `preconnect` 和 `preload` 差在哪？

| 項目 | `preconnect` | `preload` |
|---|---|---|
| 核心作用 | 提前建立連線 | 提前載入指定資源 |
| 是否指定檔案 | 通常只指定來源 | 會指定具體資源 |
| 常見屬性 | `href`、`crossorigin` | `href`、`as`、`type`、`crossorigin` |
| 使用時機 | 很快會連到某個第三方來源 | 很快會用到某個重要檔案 |
| 常見例子 | 第三方字體來源、CDN | 首屏字體、關鍵圖片、重要 CSS 或 JS |

例子：

```html
<!-- 提前和字體來源建立連線 -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- 提前載入指定字體檔案 -->
<link rel="preload" href="/fonts/site.woff2" as="font" type="font/woff2" crossorigin>
```

初學階段不需要急著在所有頁面都加這些優化。  
比較好的順序是：

```text
先理解普通資源載入
再用開發者工具觀察效能瓶頸
最後才針對關鍵資源加 preconnect 或 preload
```

### 11. `<base>` 在做什麼？

`<base>` 用來設定整份文件中相對 URL 的基準。

例如：

```html
<head>
  <base href="https://example.com/docs/">
</head>
<body>
  <a href="intro.html">介紹</a>
</body>
```

這裡的：

```html
<a href="intro.html">介紹</a>
```

最後會被解析成：

```text
https://example.com/docs/intro.html
```

也就是說，`<base>` 會影響頁面中後續相對 URL 的解析方式。

沒有 `<base>` 時，相對 URL 通常以目前 HTML 文件的位置作為基準。  
有 `<base href="...">` 時，相對 URL 會改成以 `<base>` 指定的位置作為基準。

### 12. `<base>` 要放在哪裡？

`<base>` 應該放在 `<head>` 裡，而且要放在其他使用 URL 的元素之前。

例如：

```html
<head>
  <base href="https://example.com/docs/">
  <link rel="stylesheet" href="style.css">
</head>
```

這時：

```html
<link rel="stylesheet" href="style.css">
```

可能會被解析成：

```text
https://example.com/docs/style.css
```

因此 `<base>` 的位置很重要。  
如果你要使用 `<base>`，應該先設定它，再放其他依賴相對 URL 的元素。

實務上，建議把它理解成：

```text
<base> 是整份文件的 URL 解析設定，越早出現越合理。
```

### 13. `<base>` 會影響哪些地方？

`<base href>` 會影響文件中相對 URL 的解析。

常見會受影響的屬性如下：

| 標籤 / 屬性 | 例子 | 可能影響 |
|---|---|---|
| `<a href>` | `<a href="about.html">` | 連結目的地 |
| `<img src>` | `<img src="./images/logo.png">` | 圖片載入位置 |
| `<script src>` | `<script src="./js/app.js">` | JavaScript 載入位置 |
| `<link href>` | `<link href="./css/main.css">` | CSS、icon 等資源位置 |
| `<form action>` | `<form action="./submit">` | 表單提交位置 |
| `<source src>` | `<source src="video.mp4">` | 影音資源位置 |
| `<iframe src>` | `<iframe src="page.html">` | 嵌入頁面位置 |

例如頁面中有：

```html
<img src="./images/logo.png" alt="Logo">
<a href="./about.html">關於我們</a>
<form action="./submit">...</form>
```

如果加上：

```html
<base href="https://cdn.example.com/assets/">
```

這些相對路徑的解析都可能被改變：

```text
./images/logo.png → https://cdn.example.com/assets/images/logo.png
./about.html      → https://cdn.example.com/assets/about.html
./submit          → https://cdn.example.com/assets/submit
```

這就是 `<base>` 危險的地方：它不是只影響某一個連結，而是影響整份文件中相對 URL 的解析。

### 14. 頁內錨點也可能受 `<base>` 影響

這是一個很容易忽略的細節。

一般頁內錨點會這樣寫：

```html
<a href="#section1">跳到第一段</a>
```

直覺上它只是跳到目前頁面的 `id="section1"`。

但如果頁面設定了：

```html
<base href="https://example.com/docs/">
```

那麼 `href="#section1"` 也可能被解析成基於 `<base href>` 的 URL。

因此使用 `<base>` 時，連看起來很單純的頁內錨點也要檢查。  
這也是為什麼一般網站不建議隨便加 `<base>`。

### 15. `<base target>` 會做什麼？

`<base>` 也可以設定預設開啟目標：

```html
<base target="_blank">
```

這會讓文件中沒有明確寫 `target` 的連結預設用 `_blank` 開啟。

例如：

```html
<head>
  <base target="_blank">
</head>
<body>
  <a href="https://example.com">外部網站</a>
</body>
```

上面的 `<a>` 沒有寫 `target="_blank"`，但因為 `<base target="_blank">` 的影響，它也會預設開新分頁。

但這種寫法要小心，因為它會影響整份文件的連結行為。  
如果只想讓某一個連結開新頁，應該直接寫在該連結上：

```html
<a href="https://example.com" target="_blank" rel="noopener">外部網站</a>
```

這裡的 `rel="noopener"` 是安全提醒。  
它可以避免新開啟的頁面透過 `window.opener` 影響原本頁面，是使用 `target="_blank"` 時常見的安全搭配。

### 16. `<base>` 可以放很多個嗎？

不建議，也不應該這樣使用。

一份文件中應該只設定一個 `<base>`。  
如果出現多個 `<base>`，瀏覽器通常只會採用第一個相關設定，後面的設定容易被忽略，也會讓程式碼變得難以理解。

不建議寫法：

```html
<head>
  <base href="https://example.com/docs/">
  <base href="https://cdn.example.com/assets/">
</head>
```

比較合理的做法是：

```html
<head>
  <base href="https://example.com/docs/">
</head>
```

而且在實務專案中，如果沒有明確需求，通常可以不用 `<base>`。

### 17. 為什麼 `<base>` 要小心？

因為它是全局設定。

只要用了 `<base href>`，頁面中所有相對 URL 都要重新檢查。  
它可能影響：

- CSS 是否載入得到
- 圖片是否載入得到
- JavaScript 是否載入得到
- 表單是否送到正確位置
- 連結是否跳到正確頁面
- 頁內錨點是否仍然正常

初學時可以這樣記：

> `<base>` 是全局 URL 解析設定，不是局部連結設定。只要用了，就要重新檢查整份文件裡所有相對 URL。

### 18. 什麼情況可能會用到 `<base>`？

`<base>` 不算常用，但在特定場景有價值。

可能使用情境：

| 情境 | 說明 |
|---|---|
| 文件型網站 | 希望整份文件的相對路徑基於固定文件根路徑 |
| 嵌入頁面 | 頁面被放在不同位置，但資源基準希望固定 |
| 靜態 HTML 產生器 | 產生的 HTML 需要統一資源解析基準 |
| 特殊部署路徑 | 頁面實際位置和資源基準不同 |

但一般網站、Vue / React / Spring Boot 搭配前端建置工具的專案，通常會由路由、打包工具或伺服器設定處理資源路徑，不一定需要手動使用 `<base>`。

尤其在 SPA 專案中，`<base>` 可能和前端路由、部署子目錄、靜態資源路徑互相影響。  
如果不了解整個專案的路由與部署方式，不建議隨便加。

## 常見問法

### `<link>` 是不是只能載入 CSS？

不是。

CSS 是最常見用途，但 `<link>` 的核心是描述文件與外部資源的關係。  
favicon、預連線、預載資源也都可能使用 `<link>`。

### `<link>` 和 `<a>` 都有 `href`，差在哪？

`href` 都是指向某個資源的位置，但標籤語意不同。

- `<link>` 通常放在 `<head>`，用來描述文件和資源的關係。
- `<a>` 通常放在 `<body>`，用來建立使用者可點擊的連結。

可以這樣理解：

```text
<link href="...">：瀏覽器根據資源關係去處理
<a href="...">：使用者點擊後進行導覽
```

### `rel` 和 `href` 哪個比較重要？

兩個都重要，但負責的事情不同。

- `rel`：說明這個資源和目前文件的關係。
- `href`：說明這個資源的位置。

如果只寫 `href`，瀏覽器不知道這個資源和文件的關係。  
如果只寫 `rel`，瀏覽器不知道要去哪裡找資源。

例如：

```html
<link rel="stylesheet" href="./css/main.css">
```

可以讀成：

```text
目前文件有一個外部資源，
它的關係是 stylesheet，
它的位置是 ./css/main.css。
```

### 多個 CSS 檔案，後面的 CSS 一定會蓋掉前面的嗎？

不一定。

後面的 CSS 比較容易覆蓋前面的 CSS，但前提通常是選擇器權重相同或相近。  
實際結果還會受到 specificity、`!important`、來源順序等因素影響。

例如：

```css
/* base.css */
#title {
  color: red;
}

/* page.css */
h1 {
  color: blue;
}
```

即使 `page.css` 比較後面載入，`#title` 的權重仍然比 `h1` 高，所以不一定會被覆蓋。

### favicon 一定要用 `.ico` 嗎？

不一定。

`.ico` 很常見，也具有較好的傳統相容性。  
現代網站也常使用 PNG、SVG 等格式。初學階段先掌握：

```html
<link rel="icon" href="/favicon.ico">
```

之後再依專案需求補不同尺寸與格式即可。

### `preconnect` 和 `preload` 要不要每個網站都加？

不用。

它們是效能優化工具，不是基本必備語法。  
初學時先知道它們的概念即可：

- `preconnect`：先建立連線。
- `preload`：先載入重要資源。

實務上應該先透過開發者工具或效能分析確認瓶頸，再決定要不要加。

### `<base>` 可以放很多個嗎？

不應該這樣使用。

一份文件中應該只設定一個 `<base>`。  
如果出現多個 `<base>`，通常只有第一個相關設定會生效，後面的容易造成混亂。

### `<base>` 常用嗎？

不算常用。

它在特定場景有用，例如文件系統、嵌入頁、靜態頁產生器或統一改變相對 URL 基準。  
但一般網站更常直接使用清楚的相對路徑、絕對路徑，或交給建置工具與伺服器設定處理。

### 為什麼不建議隨便用 `<base target="_blank">`？

因為它會讓整份文件中沒有明確設定 `target` 的連結都預設開新分頁。  
這可能造成使用者體驗不一致，也讓其他維護者不容易看出連結為什麼會開新分頁。

如果只是某一個外部連結要開新頁，直接寫在該連結上比較清楚：

```html
<a href="https://example.com" target="_blank" rel="noopener">外部網站</a>
```

## 常見錯誤整理

### 錯誤 1：把 `<head>` 當成頁面上方區塊

錯誤理解：

```text
head = 頁面最上方的 header 區域
```

正確理解：

```text
<head> 是文件資訊區
<header> 才是頁面或區塊的頁首內容
```

### 錯誤 2：把 `<link>` 只背成「引入 CSS」

錯誤理解：

```text
<link> = 引入 CSS
```

正確理解：

```text
<link> = 建立目前文件和外部資源的關係
```

CSS 只是其中一種常見關係。

### 錯誤 3：只看 `href`，不看 `rel`

錯誤理解：

```html
<link href="./style.css">
```

問題是：瀏覽器不知道這個資源和目前文件是什麼關係。

正確寫法：

```html
<link rel="stylesheet" href="./style.css">
```

### 錯誤 4：以為 CSS 後寫就一定覆蓋前面

錯誤理解：

```text
後面的 CSS 一定贏
```

正確理解：

```text
CSS 覆蓋結果要一起看權重、來源、!important、順序。
```

### 錯誤 5：隨便加 `<base>`

錯誤寫法：

```html
<base href="https://cdn.example.com/assets/">
```

如果沒有確認整份文件裡所有相對 URL，這可能導致 CSS、圖片、連結、表單路徑全部被改變。

正確心法：

```text
不確定影響範圍時，不要使用 <base>。
```

## 實務建議

### 初學者建議掌握到什麼程度？

初學階段優先掌握：

1. `<head>` 是文件資訊區，不是畫面上的頁首。
2. `<link>` 的核心是建立文件與外部資源的關係。
3. `rel` 說明關係，`href` 說明位置。
4. CSS 最常見寫法是 `<link rel="stylesheet" href="...">`。
5. favicon 最基本寫法是 `<link rel="icon" href="/favicon.ico">`。
6. `preconnect` 和 `preload` 屬於效能優化，先理解概念，不要濫用。
7. `<base>` 會影響整份文件的相對 URL，不熟不要亂加。

### 寫專案時的建議

一般靜態頁面可以先這樣寫：

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的網站</title>
  <link rel="icon" href="/favicon.ico">
  <link rel="stylesheet" href="./css/main.css">
</head>
```

如果沒有明確需求，先不要加：

```html
<base href="...">
```

也不要一開始就加一堆：

```html
<link rel="preload" ...>
<link rel="preconnect" ...>
```

比較好的做法是先讓頁面正確運作，再根據效能分析逐步優化。

## 自測問題

1. `<head>` 和 `<header>` 的差別是什麼？
2. `<link>` 的核心作用是什麼？
3. `rel` 和 `href` 分別在描述什麼？
4. CSS 樣式表最常見的 `<link>` 寫法是什麼？
5. 多個 CSS 檔案時，後面的 CSS 一定會覆蓋前面的嗎？為什麼？
6. favicon 可以如何設定？
7. `preconnect` 和 `preload` 的差別是什麼？
8. `<base href>` 會影響哪些 URL？
9. 為什麼 `<base>` 不適合隨便加？
10. 如果只想讓某一個連結開新頁，應該用 `<base target="_blank">` 還是直接在 `<a>` 上寫 `target="_blank"`？

## 自測答案

1. `<head>` 是 HTML 文件資訊區，通常不直接顯示；`<header>` 是頁面或區塊的頁首內容，會出現在 `<body>` 裡。
2. `<link>` 用來建立目前文件和外部資源之間的關係。
3. `rel` 描述關係，`href` 指定資源位置。
4. `<link rel="stylesheet" href="./css/main.css">`。
5. 不一定。CSS 覆蓋結果還要看選擇器權重、來源、`!important` 和規則順序。
6. 基本可以寫 `<link rel="icon" href="/favicon.ico">`，也可以搭配 `type`、`sizes` 指定格式與尺寸。
7. `preconnect` 是提前建立連線；`preload` 是提前載入指定的重要資源。
8. 會影響相對 URL，例如 `<a href>`、`<img src>`、`<script src>`、`<link href>`、`<form action>` 等。
9. 因為它是全局設定，可能改變整份文件中所有相對 URL 的解析結果。
10. 應該直接在該 `<a>` 上寫 `target="_blank"`，並搭配 `rel="noopener"`，不要為了單一連結使用 `<base target="_blank">`。

## 本節總結

這一篇可以用三句話收斂：

```text
<head> 負責描述文件與配置資源。
<link> 負責建立目前文件和外部資源的關係。
<base> 負責改變整份文件相對 URL 的解析基準，要非常小心使用。
```

初學者最需要掌握的不是把所有 `rel` 類型背起來，而是養成閱讀 `<link>` 的方式：

```text
看到 <link> 時，先看 rel，再看 href。
rel 告訴你這是什麼關係。
href 告訴你資源在哪裡。
```

而看到 `<base>` 時，要立刻提醒自己：

```text
這不是局部設定，而是整份文件的 URL 解析規則。
```

## 延伸閱讀

- [第三十三章｜`head` 補充標籤](./README.md)
- [第八章｜meta 標籤](../第八章_meta標籤/README.md)
- [第九章｜title 標籤](../第九章_title標籤/README.md)
- [MDN：`<link>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
- [MDN：`<base>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
- [MDN：Preloading content with rel="preload"](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload)
- [HTML Living Standard：document metadata](https://html.spec.whatwg.org/multipage/semantics.html#document-metadata)

---