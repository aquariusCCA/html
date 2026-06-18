---
source_atomic:
  - atomic/080-meta標籤/01-meta字元編碼與顯示環境設定.md
  - atomic/080-meta標籤/02-meta文件資訊與版權設定.md
---

# meta 標籤與網頁基本設定

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 `<meta>` 標籤通常放在哪裡，以及它提供的是哪一類資訊。
- 使用 `charset` 與 `viewport` 完成網頁最基本的顯示設定。
- 看懂作者、產生工具、版權等文件資訊型 meta 標籤。
- 判斷哪些 meta 設定是現代網頁常用設定，哪些屬於特定情境才需要的設定。

## 為什麼需要 meta 標籤

HTML 頁面不只包含使用者看得見的標題、段落、圖片與連結，也需要提供一些「給瀏覽器或工具讀的資訊」。

例如：

- 這份文件使用什麼字元編碼？
- 手機瀏覽器應該用什麼寬度顯示頁面？
- 這份頁面的作者是誰？
- 這份頁面是用什麼工具產生的？

這些資訊通常不會直接顯示在畫面上，但會影響瀏覽器解析、行動裝置顯示，或讓後續工具讀取頁面 metadata。

## 一句話理解

`<meta>` 是放在 `<head>` 裡，用來描述網頁後設資訊的標籤。

「後設資訊」可以理解成：不是頁面正文內容，但能幫瀏覽器、搜尋引擎、社群平台或其他工具理解這個頁面的資訊。

## 基本放置位置

`<meta>` 應該放在 HTML 文件的 `<head>` 區塊中：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的網頁</title>
</head>
<body>
  <h1>我的網頁</h1>
</body>
</html>
```

`<head>` 裡的內容主要是給瀏覽器和工具讀取，不是頁面主要可見內容；`<body>` 裡才是使用者在畫面上主要看到的內容。

## 常見基本設定

### 字元編碼：`charset`

```html
<meta charset="UTF-8">
```

`charset` 用來告訴瀏覽器這份 HTML 文件使用哪一種字元編碼。

初學 HTML 時，通常直接使用 `UTF-8`。它能支援中文、英文、日文、符號等多種文字，是現代網頁最常見的編碼選擇。

如果缺少或設定錯誤，瀏覽器可能用錯誤的方式解讀文字，導致中文變成亂碼。

### 行動裝置顯示：`viewport`

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`viewport` 會影響手機和平板瀏覽器如何顯示頁面。

這段設定可以拆成兩個重點：

- `width=device-width`：讓頁面寬度跟裝置螢幕寬度一致。
- `initial-scale=1.0`：設定初始縮放比例為 1 倍。

沒有這段設定時，手機瀏覽器可能會用接近桌面版的寬度去縮放頁面，導致文字變小、版面不容易閱讀。

### IE 相容模式：`X-UA-Compatible`

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

這段設定用來要求舊版 Internet Explorer 使用可用的最新文件模式渲染頁面。

在現代前端開發中，它不是每個新專案都必備；如果你的教材或專案仍需要理解舊 IE 相容設定，可以知道它的目的，但不要把它當成所有現代網頁的核心設定。

## 文件資訊型 meta

除了影響顯示與解析，`<meta>` 也可以用來描述文件資訊。

```html
<meta name="author" content="kevin">
<meta name="generator" content="Visual Studio Code">
<meta name="copyright" content="2023-2027版權所有">
```

這些標籤各自表示：

| 標籤 | 用途 |
| --- | --- |
| `<meta name="author">` | 描述網頁作者。 |
| `<meta name="generator">` | 描述產生或編輯網頁的工具。 |
| `<meta name="copyright">` | 描述版權資訊。 |

這類資訊通常不會影響畫面排版，也不等於法律文件本身；它比較像是提供給工具或讀者查閱的補充 metadata。

## 完整範例拆解

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="kevin">
  <meta name="generator" content="Visual Studio Code">
  <meta name="copyright" content="2023-2027版權所有">
  <title>個人作品集</title>
</head>
<body>
  <h1>個人作品集</h1>
</body>
</html>
```

逐段看：

- `charset="UTF-8"`：讓瀏覽器用 UTF-8 解讀文字，避免中文亂碼。
- `name="viewport"`：讓手機瀏覽器用裝置寬度顯示頁面。
- `name="author"`：標示頁面作者。
- `name="generator"`：標示頁面產生工具。
- `name="copyright"`：標示版權資訊。
- `<title>`：設定瀏覽器分頁標題，雖然也放在 `<head>`，但它不是 `<meta>` 標籤。

## 常見錯誤

### 錯誤一：漏掉 `charset`

```html
<head>
  <title>我的中文網頁</title>
</head>
```

這樣不一定每次都會出錯，但當瀏覽器或伺服器沒有正確判斷編碼時，中文可能變成亂碼。

建議在 `<head>` 前段就放入：

```html
<meta charset="UTF-8">
```

### 錯誤二：漏掉 `viewport`

```html
<head>
  <meta charset="UTF-8">
  <title>手機也要看的網頁</title>
</head>
```

頁面在桌機可能正常，但手機上可能被縮成很小的桌面版畫面。

現代響應式網頁通常會加入：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 錯誤三：把所有 meta 都當成一定會影響畫面

`author`、`generator`、`copyright` 這類設定通常不會改變畫面呈現。

學習時要分清楚：

- 有些 meta 會直接影響瀏覽器解析或顯示，例如 `charset`、`viewport`。
- 有些 meta 只是描述文件資訊，例如 `author`、`generator`。

## 實務判斷準則

寫一般 HTML 頁面時，可以先掌握這個順序：

1. 基本必備：`charset`。
2. 行動裝置常用：`viewport`。
3. 視專案需要補充：作者、產生工具、版權資訊。
4. 舊環境相容才需要特別考慮：`X-UA-Compatible`。

不要把 meta 標籤背成一串固定清單；更重要的是理解每個 meta 是「給誰讀」以及「會影響什麼」。

## 重點整理

- `<meta>` 放在 `<head>` 裡，用來提供網頁後設資訊。
- `charset="UTF-8"` 用來設定字元編碼，是避免文字亂碼的重要設定。
- `viewport` 會影響手機和平板上的頁面顯示方式。
- `author`、`generator`、`copyright` 屬於文件資訊型 metadata。
- 不是每個 meta 都會影響畫面；要依照用途判斷是否需要。

## 自我檢查

1. `<meta>` 通常應該放在 `<head>` 還是 `<body>`？為什麼？
2. 如果中文網頁出現亂碼，應該先檢查哪一個 meta 設定？
3. `viewport` 對手機瀏覽器有什麼影響？
4. `author` 與 `charset` 都是 meta，但它們的用途有什麼不同？
