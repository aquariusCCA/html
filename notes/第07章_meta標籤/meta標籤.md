---
title: "HTML meta 標籤"
category: "HTML"
source: "origin/第07章_meta標籤/meta標籤.md"
status: "draft"
updated: "2026-05-20"
tags: ["html", "meta", "metadata", "head", "seo", "viewport", "open-graph"]
---

# HTML meta 標籤

## 1. 本章學習目標

讀完本章後，你應該能夠：

- 說明 `<meta>` 標籤的用途，以及它為什麼通常放在 `<head>` 裡。
- 使用 `<meta charset="UTF-8">` 設定 HTML 文件的字元編碼。
- 使用 viewport 設定讓網頁在行動裝置上以合適寬度顯示。
- 理解 `name`、`http-equiv`、`property` 與 `content` 這幾種常見屬性的搭配方式。
- 說明 `description`、`robots` 與 Open Graph metadata 對搜尋引擎和社群分享的作用。
- 避免把 `<meta>` 當成萬能 SEO 工具，並知道常見錯誤寫法如何修正。

## 2. 本章定位

`<meta>` 是 HTML 文件中負責描述「中繼資訊」的標籤。它不會直接產生頁面可見內容，而是提供瀏覽器、搜尋引擎、社群平台或其他工具讀取的資料。

在 HTML 學習路線中，本章屬於 `<head>` 區域的重要內容。前面學過 HTML 文件骨架與 `<title>` 後，就需要理解 `<meta>` 如何補充文件編碼、行動裝置顯示、SEO 摘要、搜尋爬蟲規則與社群分享資訊。

> 來源重點：原始資料整理了字元編碼、IE 相容性、viewport、作者、生成工具、版權、自動刷新、robots、keywords、description 與 Open Graph 設定。

## 3. 核心概念

### 3.1 `<meta>` 是什麼

`<meta>` 用來提供 HTML 文件的 metadata（中繼資料）。這些資料描述的是「文件本身」或「瀏覽器與其他工具應如何理解這份文件」，而不是頁面主內容。

常見用途包括：

| 用途 | 範例 |
|---|---|
| 指定字元編碼 | `<meta charset="UTF-8">` |
| 設定行動裝置 viewport | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| 提供頁面描述 | `<meta name="description" content="這是一段頁面描述">` |
| 告訴搜尋爬蟲索引規則 | `<meta name="robots" content="index, follow">` |
| 設定社群分享資訊 | `<meta property="og:title" content="網頁標題">` |

`<meta>` 是 void element（空元素），不需要也不應該寫結束標籤。

正確範例：

```html
<meta charset="UTF-8">
```

錯誤範例：

```html
<meta charset="UTF-8"></meta>
```

### 3.2 `<meta>` 通常放在 `<head>` 裡

`<head>` 主要放置給瀏覽器、搜尋引擎與工具讀取的文件資訊，例如 `<title>`、`<meta>`、`<link>`、`script` 與樣式設定。

`<meta>` 通常應放在 `<head>` 中，因為它的目標不是呈現畫面內容，而是協助瀏覽器在解析頁面時取得必要資訊。

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>HTML meta 標籤</title>
</head>
<body>
  <h1>HTML meta 標籤</h1>
</body>
</html>
```

### 3.3 常見屬性搭配方式

`<meta>` 的寫法會依用途不同而改變。初學者最需要掌握以下幾種搭配方式：

| 寫法 | 用途 | 範例 |
|---|---|---|
| `charset` | 指定文件字元編碼 | `<meta charset="UTF-8">` |
| `name` + `content` | 定義一般 metadata 名稱與內容 | `<meta name="description" content="頁面描述">` |
| `http-equiv` + `content` | 模擬部分 HTTP header 或瀏覽器處理指令 | `<meta http-equiv="refresh" content="3;url=https://example.com/">` |
| `property` + `content` | 定義特定 metadata 協議的屬性，例如 Open Graph | `<meta property="og:title" content="網頁標題">` |

`content` 通常負責存放 metadata 的值。可以把它理解成：「這個 metadata 項目的內容是什麼」。

### 3.4 字元編碼：`charset`

字元編碼決定瀏覽器如何解讀 HTML 文件中的文字。若編碼不正確，中文、標點符號或特殊字元可能出現亂碼。

現代 HTML 文件通常使用 `UTF-8`：

```html
<meta charset="UTF-8">
```

實務上，`<meta charset="UTF-8">` 應放在 `<head>` 前段，讓瀏覽器盡早知道要用什麼編碼解析後續內容。

### 3.5 行動裝置設定：`viewport`

`viewport` 用來控制頁面在行動裝置上的視窗寬度與初始縮放比例。常見寫法如下：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

其中：

| 設定 | 說明 |
|---|---|
| `width=device-width` | 讓版面寬度配合裝置螢幕寬度。 |
| `initial-scale=1.0` | 設定頁面初始縮放比例為 1。 |

如果缺少 viewport 設定，行動瀏覽器可能用較寬的桌面版寬度來排版，再把畫面縮小顯示，導致文字過小或響應式 CSS 不如預期。

### 3.6 IE 相容性設定：`X-UA-Compatible`

原始資料提到以下寫法：

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

這是針對舊版 Internet Explorer 的相容性設定，用來要求 IE 使用較新的文件模式渲染頁面。

> 注意：這個設定主要與舊版 IE 相容性有關。現代新專案通常不會依賴它作為核心設定；若專案仍需要支援舊 IE 環境，才需要根據實際需求保留。

### 3.7 作者、生成工具與版權資訊

`<meta>` 也可以用來描述頁面的作者、生成工具或版權資訊。

```html
<meta name="author" content="Kevin">
<meta name="generator" content="Visual Studio Code">
<meta name="copyright" content="2023-2027 版權所有">
```

這些資訊通常不會直接顯示在頁面上，也不應取代頁面可見的版權聲明。若網站需要讓使用者看到版權資訊，仍應在頁面內容中呈現，例如放在 `<footer>` 裡。

### 3.8 自動刷新與跳轉：`refresh`

`refresh` 可以讓頁面在指定秒數後刷新或跳轉。

```html
<meta http-equiv="refresh" content="3;url=https://www.example.com/">
```

這表示 3 秒後跳轉到指定網址。

> 注意：自動跳轉可能影響使用者體驗、可訪問性與搜尋引擎理解。一般頁面導向更建議使用伺服器端重新導向或明確的使用者操作；只有在確定需求合理時才使用 `refresh`。

### 3.9 搜尋爬蟲設定：`robots`

`robots` 用來提供搜尋引擎爬蟲對頁面索引與連結追蹤的建議。

```html
<meta name="robots" content="index, follow">
```

原始資料整理的常見值如下：

| 值 | 意義 |
|---|---|
| `index` | 允許搜尋爬蟲索引此頁面。 |
| `noindex` | 要求搜尋爬蟲不要索引此頁面。 |
| `follow` | 允許搜尋爬蟲跟隨此頁面上的連結。 |
| `nofollow` | 要求搜尋爬蟲不要跟隨此頁面上的連結。 |
| `all` | 與 `index, follow` 類似。 |
| `none` | 與 `noindex, nofollow` 類似。 |
| `noarchive` | 要求搜尋引擎不要快取頁面內容。 |
| `nocache` | 可視為 `noarchive` 的替代名稱。 |

> 注意：`robots` 是給搜尋引擎的爬取與索引指示，不是安全機制。若內容不能公開，應透過登入權限、伺服器設定或其他安全措施保護，而不是只依賴 `noindex`。

### 3.10 關鍵字與描述：`keywords` 與 `description`

原始資料提到可以使用 `keywords` 與 `description` 描述頁面。

```html
<meta name="keywords" content="HTML, meta, 前端, 網頁">
<meta name="description" content="本頁介紹 HTML meta 標籤的用途與常見寫法。">
```

`description` 常用來提供頁面摘要。搜尋結果有時會參考它顯示頁面簡介，但不保證一定使用。

`keywords` 用來列出關鍵字。它可以保留為 metadata，但在現代 SEO 實務中，不應把它視為提升排名的主要手段。真正重要的仍然是頁面內容品質、標題結構、語意、效能與整體網站品質。

### 3.11 社群分享設定：Open Graph

Open Graph metadata 常用於控制網頁被分享到社群平台或通訊軟體時的標題、描述與圖片。

```html
<meta property="og:title" content="網頁標題">
<meta property="og:description" content="網頁描述">
<meta property="og:image" content="https://example.com/share-image.png">
```

常見屬性包括：

| 屬性 | 用途 |
|---|---|
| `og:title` | 分享卡片標題。 |
| `og:description` | 分享卡片描述。 |
| `og:image` | 分享卡片圖片。 |
| `og:url` | 分享時對應的標準網址。 |
| `og:type` | 內容類型，例如 `website` 或 `article`。 |

> 補充說明：Open Graph 是給外部平台讀取的 metadata，不會直接改變頁面畫面。社群平台是否採用、何時更新快取，會依平台規則而不同。

## 4. 語法與基本用法

### 4.1 常見 `<head>` metadata 範例

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Kevin">
  <meta name="generator" content="Visual Studio Code">
  <meta name="copyright" content="2023-2027 版權所有">
  <meta name="robots" content="index, follow">
  <meta name="description" content="本頁介紹 HTML meta 標籤的用途與常見寫法。">
  <title>HTML meta 標籤</title>
</head>
```

這段程式碼示範了多種 metadata 設定，但實務上不需要每個頁面都放滿所有項目。應根據頁面需求決定需要哪些 metadata。

### 4.2 `name` 與 `content` 的基本模式

```html
<meta name="description" content="這是一個描述內容">
```

可以理解為：

| 部分 | 說明 |
|---|---|
| `name="description"` | 宣告這筆 metadata 的名稱是頁面描述。 |
| `content="這是一個描述內容"` | 宣告這筆 metadata 的實際內容。 |

### 4.3 `http-equiv` 與 `content` 的基本模式

```html
<meta http-equiv="refresh" content="3;url=https://www.example.com/">
```

可以理解為：

| 部分 | 說明 |
|---|---|
| `http-equiv="refresh"` | 宣告這筆 metadata 類似一個刷新或跳轉指令。 |
| `content="3;url=..."` | 宣告 3 秒後跳轉到指定網址。 |

### 4.4 `property` 與 `content` 的基本模式

```html
<meta property="og:title" content="HTML meta 標籤教學">
```

`property` 常見於 Open Graph 等 metadata 協議。它不是一般可見內容，而是讓支援該協議的平台讀取。

## 5. 範例說明

### 範例一：一般內容頁的 `<head>` 設定

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="這篇文章整理 HTML meta 標籤的常見用途，包含字元編碼、viewport、SEO 與 Open Graph。">
  <meta name="robots" content="index, follow">
  <meta property="og:title" content="HTML meta 標籤教學">
  <meta property="og:description" content="理解 meta 如何幫助瀏覽器、搜尋引擎與社群平台讀取頁面資訊。">
  <meta property="og:image" content="https://example.com/images/html-meta-cover.png">
  <title>HTML meta 標籤教學</title>
</head>
<body>
  <h1>HTML meta 標籤教學</h1>
  <p>本頁介紹常見 metadata 設定。</p>
</body>
</html>
```

這個範例中：

- `charset` 確保中文與特殊字元能正確解析。
- `viewport` 讓頁面在行動裝置上以裝置寬度顯示。
- `description` 提供頁面摘要。
- `robots` 允許索引並允許追蹤連結。
- `og:title`、`og:description`、`og:image` 提供社群分享卡片資訊。
- `<title>` 設定瀏覽器分頁標題，和 `<meta>` 一起構成 `<head>` 的重要資訊。

### 範例二：不希望搜尋引擎索引的頁面

```html
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex, nofollow">
  <title>測試頁面</title>
</head>
```

這表示要求搜尋引擎不要索引此頁，也不要跟隨此頁上的連結。

> 注意：如果頁面內容真的不能被公開，不能只靠 `noindex`。`noindex` 是搜尋引擎索引層面的設定，不等於存取控制。

### 範例三：自動跳轉頁面

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="3;url=https://www.example.com/">
  <title>頁面跳轉中</title>
</head>
```

這表示頁面載入後 3 秒跳轉。這種寫法可以理解原始資料中的自動刷新範例，但不建議作為一般網站導向的首選方案。

## 6. 實務應用場景

在實務開發中，`<meta>` 常出現在以下情境：

- 每份 HTML 文件都應設定 `charset`，避免文字解析錯誤。
- 響應式網站通常需要 viewport 設定，讓行動版排版正常。
- 內容頁、商品頁、文章頁常會設定 `description`，協助搜尋結果或分享摘要呈現。
- 測試頁、後台頁或暫存頁可能使用 `robots` 的 `noindex` 避免被搜尋結果收錄。
- 需要在社群平台分享的頁面，通常會補上 Open Graph metadata。
- 舊系統若仍支援 IE，可能會看到 `X-UA-Compatible`；新專案應確認是否真的需要。
- 自動刷新或跳轉應謹慎使用，避免干擾使用者閱讀或操作。

## 7. 常見錯誤與修正

| 常見錯誤 | 問題原因 | 修正方式 |
|---|---|---|
| 把 `<meta>` 寫在 `<body>` 裡 | `<meta>` 是文件 metadata，通常應放在 `<head>` 中 | 將 metadata 移到 `<head>` |
| 忘記設定 `charset` | 中文或特殊字元可能被錯誤解析 | 在 `<head>` 前段加入 `<meta charset="UTF-8">` |
| 行動版頁面缺少 viewport | 手機可能用桌面寬度縮放頁面，造成文字過小或排版異常 | 加入 `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| 以為 `keywords` 一定能提高 SEO 排名 | `keywords` 不應被視為現代 SEO 的主要手段 | 專注於內容品質、標題結構、語意與頁面體驗 |
| `description` 寫得太籠統 | 搜尋結果或分享摘要可能無法清楚表達頁面內容 | 撰寫具體、自然、符合頁面主題的描述 |
| 用 `robots` 當成權限控管 | `robots` 只是給搜尋引擎的索引建議，不會阻止使用者開啟頁面 | 機密內容應使用登入、權限或伺服器端保護 |
| 濫用 `refresh` 做跳轉 | 可能影響可訪問性與使用者體驗 | 優先使用伺服器端重新導向或明確連結 |
| 將 `X-UA-Compatible` 當成現代頁面必要設定 | 它主要針對舊 IE 文件模式 | 只有在舊系統相容需求下才保留 |

### 錯誤範例：缺少 `content`

```html
<meta name="description">
```

問題：`description` 需要搭配 `content` 才能提供描述內容。

### 正確範例

```html
<meta name="description" content="本頁介紹 HTML meta 標籤的用途與常見寫法。">
```

修正後，metadata 名稱與內容都清楚存在。

## 8. 與其他概念的關係

| 相關概念 | 關係 |
|---|---|
| `<head>` | `<meta>` 通常放在 `<head>` 中，屬於文件層級資訊。 |
| `<title>` | `<title>` 設定頁面標題，`description` 補充頁面摘要，兩者都會影響機器如何理解頁面。 |
| 瀏覽器解析 | `charset` 會影響瀏覽器如何解讀文字；viewport 會影響行動裝置的版面視窗。 |
| SEO | `description`、`robots` 等 metadata 可協助搜尋引擎理解頁面，但 SEO 不只靠 `<meta>`。 |
| 可訪問性 | 自動刷新或跳轉可能干擾使用者操作，應謹慎使用。 |
| CSS 響應式設計 | viewport 設定會影響 media query 與行動版排版效果。 |
| JavaScript 與 DOM | `<meta>` 會成為 DOM 中的節點，JavaScript 可以讀取或修改，但通常應在 HTML 中先正確設定。 |
| 社群平台 | Open Graph metadata 可協助平台產生分享卡片。 |

## 9. 重點整理

- `<meta>` 用來描述 HTML 文件的中繼資訊，通常放在 `<head>` 中。
- `charset` 負責字元編碼，現代網頁通常使用 `UTF-8`。
- viewport 設定對行動裝置與響應式設計很重要。
- `name` 搭配 `content` 常用於 `description`、`robots`、`author` 等一般 metadata。
- `http-equiv` 可用於相容性或刷新等特殊指令，但不應濫用。
- `description` 可能被搜尋結果或分享摘要參考，但不保證一定顯示。
- `robots` 是搜尋引擎索引建議，不是安全或權限控管。
- Open Graph metadata 用於社群分享卡片，不會直接改變頁面可見內容。

## 10. 自我檢查問題

1. `<meta>` 標籤的主要用途是什麼？它通常應該放在哪裡？
2. 為什麼 HTML 文件通常要寫 `<meta charset="UTF-8">`？
3. `viewport` 設定中的 `width=device-width` 與 `initial-scale=1.0` 分別代表什麼？
4. `name="description"` 與 `content="..."` 的關係是什麼？
5. `robots` 的 `noindex` 和 `nofollow` 分別代表什麼？
6. 為什麼不應該只依賴 `keywords` 來做 SEO？
7. Open Graph metadata 解決的是什麼實務問題？

## 11. 延伸補充

> 補充說明：HTML 原始碼會被瀏覽器解析成 DOM。`<meta>` 雖然不會顯示在頁面主內容中，但仍會成為 DOM 裡的節點，瀏覽器、搜尋引擎工具或 JavaScript 都可能讀取它。

`<meta>` 的重點不是「寫越多越好」，而是根據頁面需求提供正確、清楚且一致的 metadata。對初學者而言，最基本、最常用的組合通常是：

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="清楚描述本頁內容的一句話。">
```

掌握這三項後，再依照專案需求補充 `robots`、Open Graph 或其他 metadata。
