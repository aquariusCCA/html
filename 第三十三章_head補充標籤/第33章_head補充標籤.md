# `head` 補充標籤

> - 所屬章節：第三十三章｜`head` 補充標籤  
> - 關鍵字：`head`、`link`、`rel`、`href`、stylesheet、favicon、icon、preconnect、preload、`base`、相對路徑  
> - 建議回查情境：想知道 CSS 檔案怎麼接進 HTML、favicon 怎麼設定、`rel` 是什麼、`<base>` 為什麼會影響相對路徑時

## 本節導讀

`<head>` 裡放的內容大多不是直接顯示在頁面上的文字，而是用來描述這份文件、連接外部資源、設定瀏覽器如何理解文件。

前面已經學過 `<meta>` 和 `<title>`，這一篇補上兩個常被忽略但很重要的部分：

- `<link>`：描述目前 HTML 文件和外部資源之間的關係。
- `<base>`：設定整份文件中相對 URL 的基準位置或預設開啟目標。

## 整理說明

- 原始學習重點：理解 HTML 頭部除了 `meta` 和 `title`，還會連接外部資源。
- 本次整理方向：把 `<link>` 的常見用途、`rel` 判讀方式與 `<base>` 的風險補齊。
- 補強內容：加入 stylesheet、favicon、preconnect、preload、base URL 的使用判斷。
- 待查證：本節以 HTML Living Standard 與 MDN 當前文件整理，實務支援仍應依專案目標瀏覽器確認。

## 你會在這篇學到什麼

- `<link>` 和 `<a>` 的差別
- `rel`、`href`、`type`、`sizes` 各自在做什麼
- 如何在 HTML 中連接 CSS
- 如何設定 favicon
- `preconnect`、`preload` 可以先怎麼理解
- `<base>` 會如何改變相對 URL
- 什麼情況不建議使用 `<base>`

## 30 秒複習入口

- `<link>` 通常放在 `<head>`，用來建立目前文件和外部資源的關係。
- `rel` 表示 relationship，也就是這個外部資源和目前文件的關係。
- `href` 指向外部資源的位置。
- CSS 常用 `<link rel="stylesheet" href="style.css">`。
- favicon 常用 `<link rel="icon" href="/favicon.ico">`。
- `<base>` 會改變整份文件相對 URL 的解析基準。
- `<base>` 一份文件最多只有一個實際生效的基準設定，且要放在其他使用 URL 的元素之前。

## 速查區

### 常見 `link` 用法

| 用途 | 寫法 | 重點 |
|---|---|---|
| 載入 CSS | `<link rel="stylesheet" href="style.css">` | 最常見用途 |
| 設定 favicon | `<link rel="icon" href="/favicon.ico">` | 瀏覽器分頁或收藏圖示 |
| 預連線 | `<link rel="preconnect" href="https://fonts.example">` | 提前建立連線 |
| 預載重要資源 | `<link rel="preload" href="font.woff2" as="font">` | 提醒瀏覽器優先載入 |

### `<link>` 和 `<a>` 差別

| 標籤 | 核心用途 | 使用者是否直接點擊 |
|---|---|---|
| `<link>` | 描述文件和外部資源的關係 | 通常不會 |
| `<a>` | 建立可點擊的超連結 | 會 |

### `<base>` 快速判斷

| 問題 | 判斷 |
|---|---|
| 想讓整份文件的相對路徑都基於同一個 URL | 可以理解 `<base>` |
| 專案路徑很多、團隊多人維護 | 要非常小心 |
| 只是想讓某個連結打開新頁 | 不需要用 `<base>` |
| 不確定頁面中有哪些相對 URL | 先不要用 `<base>` |

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

`<head>` 裡的內容主要用來描述文件和配置資源。  
它不是頁面正文，因此不應該把要顯示給使用者閱讀的主要內容放在 `<head>` 裡。

### 2. `<link>` 在做什麼？

`<link>` 用來建立「目前文件」和「外部資源」之間的關係。

最常見的是連接 CSS：

```html
<link rel="stylesheet" href="./css/style.css">
```

這段可以拆成兩個重點：

- `rel="stylesheet"`：這個外部資源和目前文件的關係是樣式表。
- `href="./css/style.css"`：資源的位置在 `./css/style.css`。

所以不要只把 `<link>` 背成「引入 CSS 的標籤」。  
更完整的理解是：`<link>` 負責描述外部資源和目前 HTML 文件之間的關係。

### 3. `rel` 是什麼？

`rel` 是 relationship 的意思，用來描述外部資源和目前文件的關係。

例如：

```html
<link rel="stylesheet" href="./style.css">
<link rel="icon" href="/favicon.ico">
<link rel="preconnect" href="https://fonts.gstatic.com">
```

同樣都是 `<link>`，但 `rel` 不同，意思就不同：

- `stylesheet`：這是一份樣式表。
- `icon`：這是頁面圖示。
- `preconnect`：請瀏覽器提前和某個來源建立連線。

### 4. CSS 檔案怎麼接進 HTML？

最常見寫法：

```html
<link rel="stylesheet" href="./css/main.css">
```

一般會放在 `<head>` 裡，讓瀏覽器在解析頁面時能盡早知道需要載入樣式。

如果有多份 CSS，瀏覽器會依照載入與套用規則處理，後面的樣式可能覆蓋前面的樣式：

```html
<link rel="stylesheet" href="./css/base.css">
<link rel="stylesheet" href="./css/page.css">
```

初學時可以先記：

> 全站共用樣式在前，單頁或覆蓋樣式在後。

### 5. favicon 怎麼寫？

favicon 是瀏覽器分頁、收藏或捷徑中常見的小圖示。

常見寫法：

```html
<link rel="icon" href="/favicon.ico">
```

也可以指定格式與尺寸：

```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
```

這裡的重點仍然是 `rel`：

- `rel="icon"` 表示這個資源是文件圖示。
- `href` 指向圖示檔案。

### 6. `preconnect` 和 `preload` 先怎麼理解？

這兩個屬於效能優化相關的資源提示。

`preconnect` 是提前建立連線：

```html
<link rel="preconnect" href="https://fonts.gstatic.com">
```

它適合用在頁面很快就會向某個第三方來源請求資源的情境。

`preload` 是提醒瀏覽器某個資源很重要，應該提早載入：

```html
<link rel="preload" href="/fonts/site.woff2" as="font" type="font/woff2" crossorigin>
```

`preload` 通常還要搭配 `as` 告訴瀏覽器資源類型，例如 `font`、`image`、`script`、`style`。

初學時不需要急著大量使用這些優化提示。  
更重要的是先知道它們不是一般連結，而是瀏覽器載入資源時的提示。

### 7. `<base>` 在做什麼？

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

這裡 `<a href="intro.html">` 最後會被解析成：

```text
https://example.com/docs/intro.html
```

也就是說，`<base>` 會影響頁面中後續相對 URL 的解析方式。

### 8. `<base target>` 會做什麼？

`<base>` 也可以設定預設開啟目標：

```html
<base target="_blank">
```

這會讓文件中沒有明確寫 `target` 的連結預設用 `_blank` 開啟。

但這種寫法要小心，因為它會影響整份文件的連結行為。  
如果只想讓某一個連結開新頁，應該直接寫在該連結上：

```html
<a href="https://example.com" target="_blank" rel="noopener">外部網站</a>
```

### 9. 為什麼 `<base>` 要小心？

因為它會影響所有相對 URL。

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

這些相對路徑的解析都可能被改變。

初學時可以這樣記：

> `<base>` 是全局設定，不是局部設定。只要用了，就要重新檢查整份文件裡所有相對 URL。

## 常見問法

### `<link>` 是不是只能載入 CSS？

不是。

CSS 是最常見用途，但 `<link>` 的核心是描述文件與外部資源的關係。  
favicon、預連線、預載資源也都可能使用 `<link>`。

### `<link>` 和 `<a>` 都有 `href`，差在哪？

`href` 都是指向某個資源的位置，但標籤語意不同。

- `<link>` 通常放在 `<head>`，用來描述文件和資源的關係。
- `<a>` 通常放在 `<body>`，用來建立使用者可點擊的連結。

### `<base>` 可以放很多個嗎？

不應該這樣使用。

一份文件中如果有多個 `<base>`，通常只有第一個相關設定會生效，後面的容易造成混亂。  
實務上應該避免多個 `<base>`。

### `<base>` 常用嗎？

不算常用。

它在特定場景有用，例如文件系統、嵌入頁或統一改變相對 URL 基準。  
但一般網站更常直接使用清楚的相對路徑或絕對路徑。

## 自測問題

1. `<link>` 的核心作用是什麼？
2. `rel` 和 `href` 分別在描述什麼？
3. CSS 樣式表最常見的 `<link>` 寫法是什麼？
4. favicon 可以如何設定？
5. `<base href>` 會影響哪些 URL？
6. 為什麼 `<base>` 不適合隨便加？

## 延伸閱讀

- [第三十三章｜`head` 補充標籤](./README.md)
- [第八章｜meta 標籤](../第八章_meta標籤/README.md)
- [第九章｜title 標籤](../第九章_title標籤/README.md)
- [MDN：`<link>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
- [MDN：`<base>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
- [HTML Living Standard：document metadata](https://html.spec.whatwg.org/multipage/semantics.html#document-metadata)
