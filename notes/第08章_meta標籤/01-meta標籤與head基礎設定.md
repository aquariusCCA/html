<!--
source_atomic:
  - atomic/第08章_meta標籤/01-meta基礎環境設定.md
  - atomic/第08章_meta標籤/02-meta文件資訊設定.md
-->

# meta 標籤與 head 基礎設定

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 `<meta>` 標籤通常放在 `<head>` 中，用來描述文件或提供瀏覽器設定。
- 寫出常見的 `charset`、`viewport` 與舊版 IE 相容性設定。
- 分辨哪些 metadata 是常用必要設定，哪些只是文件資訊記錄。
- 知道 `author`、`generator`、`copyright` 這類資訊在實務上的使用界線。

## 問題情境

一個網頁不只需要把文字、圖片、按鈕放到畫面上，也需要先讓瀏覽器和工具理解這份文件的基本設定。

例如：

- 中文要不要正常顯示。
- 手機上要不要用符合裝置寬度的版面。
- 舊版瀏覽器要不要使用較新的文件模式。
- 這份頁面是否需要記錄作者或產生工具。

這些資訊大多不會直接顯示在頁面內容區，但會影響瀏覽器解析、行動裝置顯示與文件維護。

## 一句話理解

`<meta>` 是放在 `<head>` 裡的文件描述與設定標籤，用來告訴瀏覽器、搜尋引擎或其他工具「這份頁面應該如何被理解」。

## `<meta>` 放在哪裡

`<meta>` 通常放在 `<head>` 中：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>頁面標題</title>
</head>
<body>
  <h1>頁面內容</h1>
</body>
</html>
```

`head` 裡放的是文件設定與描述資訊；真正要顯示給使用者看的標題、段落、圖片和表單，應該放在 `body`。

## 基礎環境設定

### 字元編碼：`charset`

```html
<meta charset="UTF-8">
```

`charset` 用來指定這份 HTML 文件使用的字元編碼。現代網頁通常使用 `UTF-8`，因為它能表示中文、英文、符號與多種語言文字。

如果沒有正確設定字元編碼，中文或特殊符號可能會出現亂碼。

### 行動裝置視窗：`viewport`

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`viewport` 會影響行動裝置如何計算頁面寬度。

這段設定可以拆成兩個部分：

| 設定 | 意義 |
| --- | --- |
| `width=device-width` | 讓頁面寬度以裝置螢幕寬度為基準。 |
| `initial-scale=1.0` | 頁面初始縮放比例為 1。 |

在響應式網頁中，這通常是必要設定。沒有它時，手機瀏覽器可能用較寬的虛擬畫布來顯示頁面，導致版面看起來被縮小。

### 舊版 IE 相容性：`X-UA-Compatible`

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

這是針對舊版 Internet Explorer 的相容性設定，意思是要求 IE 使用可用的最高文件模式來渲染頁面。

現代瀏覽器通常會忽略這段設定。閱讀舊教材或維護舊專案時需要理解它的歷史用途；新專案是否保留，應依目標瀏覽器與團隊規範判斷。

## 文件資訊 metadata

除了環境設定，`<meta>` 也可以用來描述文件資訊。

### 作者資訊

```html
<meta name="author" content="kevin">
```

`author` 可用來記錄頁面作者或內容負責人。它通常是文件描述資訊，不會直接顯示在頁面上。

### 產生工具

```html
<meta name="generator" content="Frontweaver 8.2">
```

`generator` 常用於標示頁面由哪個工具、CMS 或系統產生。手寫頁面不一定需要加入。

### 版權資訊記錄

```html
<meta name="copyright" content="2023-2027版權所有">
```

這類寫法可以作為自訂記錄，但不要把它當成正式授權聲明。

如果頁面需要清楚說明版權、授權條款或使用限制，實務上通常會另外提供：

- 頁面可見的版權文字。
- 授權頁面。
- 法律條款頁。
- 明確的授權連結。

## 完整範例

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="kevin">
  <title>meta 基礎設定範例</title>
</head>
<body>
  <h1>meta 標籤示範</h1>
</body>
</html>
```

這個範例中：

- `charset` 解決文字編碼問題。
- `X-UA-Compatible` 服務於舊版 IE 相容性情境。
- `viewport` 讓行動裝置以裝置寬度顯示頁面。
- `author` 用來記錄文件資訊。
- `title` 設定瀏覽器分頁標題，不是 `<meta>`，但同樣屬於 `head` 中的重要資訊。

## 常見錯誤

### 把 meta 放進 body

較不理想：

```html
<body>
  <meta charset="UTF-8">
  <h1>頁面標題</h1>
</body>
```

建議寫法：

```html
<head>
  <meta charset="UTF-8">
</head>
```

`<meta>` 是描述文件的資料，應放在 `<head>` 中。

### 忘記 viewport

如果頁面需要在手機上正常呈現，通常應加入：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

這不是讓版面自動變漂亮的魔法。它只是讓 CSS 的響應式規則能以正確的裝置寬度運作。

### 把所有資訊都塞進 meta

`<meta>` 適合放文件描述與機器可讀的設定，不適合取代頁面正文。

例如版權、作者介紹、網站聲明，如果是使用者需要閱讀的內容，就應該放在頁面可見區域或獨立頁面，而不只是藏在 `<meta>` 裡。

## 實務使用原則

建立新 HTML 文件時，可以先使用這組常見基礎設定：

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>頁面標題</title>
</head>
```

如果專案需要支援舊版 IE，再依需求加入 `X-UA-Compatible`。如果頁面由 CMS 或工具產生，才考慮加入 `generator`。不要為了看起來完整而放入沒有實際用途的 metadata。

## 重點整理

- `<meta>` 通常放在 `<head>` 中，用來描述文件或提供瀏覽器設定。
- `<meta charset="UTF-8">` 用來設定字元編碼，能降低中文亂碼風險。
- `viewport` 是行動裝置與響應式版面的重要基礎設定。
- `X-UA-Compatible` 主要服務於舊版 IE，相容性需求不存在時不一定需要。
- `author`、`generator`、`copyright` 屬於文件資訊記錄，不應取代可見的正式聲明。

## 自我檢查

- 我是否能說明 `<meta>` 為什麼通常放在 `<head>`？
- 我是否能寫出 `charset` 與 `viewport` 的基本設定？
- 我是否能分辨必要設定和可選文件資訊？
