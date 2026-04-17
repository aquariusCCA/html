# meta 標籤

所屬章節：[第八章｜meta 標籤](./README.md)

## 本節導讀

`<meta>` 是寫在 HTML `<head>` 裡的一種標籤，用來提供**頁面的中繼資料（metadata）**。

這些資訊通常**不會直接顯示在畫面上**，但會被其他對象讀取，例如：

* 瀏覽器
* 搜尋引擎
* 社群平台
* 某些工具或系統

所以學 `<meta>`，最重要的不是把所有寫法背起來，而是先搞懂：

1. 這個 `meta` 是在**告訴誰**
2. 它主要在解決**什麼問題**
3. 它是不是**每個頁面都常用**

你可以先把常見的 `<meta>` 分成三大類：

* **基本頁面設定**：給瀏覽器或裝置看的
* **搜尋引擎相關設定**：給搜尋引擎看的
* **社群分享設定**：給 Facebook、LinkedIn 等平台抓預覽資訊用的

這樣學，才不會看到 `<head>` 裡一堆 `meta` 就全部混在一起。

---

## 關鍵字

* 主題：HTML meta 標籤、頁面中繼資料
* 別名：中繼標籤、meta tags
* 英文：meta tag、metadata、viewport、Open Graph、robots
* 常見搜尋：

  * `meta charset` 是什麼
  * `viewport` 怎麼寫
  * `robots` 怎麼設定
  * Open Graph 是什麼
  * `description` 和 `og:description` 差別
* 易混淆：

  * `name` vs `http-equiv` vs `property`
  * 搜尋引擎描述 vs 社群分享描述
  * `keywords` vs `description`
  * 基本必備設定 vs SEO 設定 vs 分享預覽設定

---

## 建議回查情境

你可以在下面幾種情況回來查這篇：

* 看到 `<head>` 裡很多 `meta`，但不知道它們各自做什麼
* 忘記 `charset`、`viewport` 這些基本設定怎麼寫
* 想控制搜尋結果中的描述文字
* 想控制網頁被分享到社群平台時的預覽標題、描述、圖片
* 想知道 `name`、`http-equiv`、`property` 三種寫法差在哪裡

---

## 先記住核心觀念

### `<meta>` 的本質是什麼？

`<meta>` 的本質可以先記成一句話：

> **它是在 `<head>` 裡補充「不直接顯示在頁面上，但會被其他系統讀取」的資訊。**

也就是說，`<meta>` 不是拿來顯示畫面內容的，
而是拿來補充說明這個頁面的一些設定與描述。

---

## 30 秒複習入口

* `<meta>` 主要寫在 `<head>` 裡
* 它提供的是頁面的中繼資訊，不是畫面正文
* 常見用途可分成三類：

  * 基本頁面設定
  * 搜尋引擎相關設定
  * 社群分享設定
* 最常回查的一組通常是：

  * `charset`
  * `viewport`
  * `description`
  * `robots`
  * Open Graph（`og:title`、`og:description`、`og:image`）

---

## 速查區

### 核心定義

* **`<meta>`**：提供頁面中繼資料的標籤，通常放在 `<head>` 裡
* **`charset`**：定義頁面使用的字符編碼
* **`name`**：常用來描述頁面資訊，例如作者、描述、爬蟲設定
* **`http-equiv`**：用來模擬某些 HTTP 標頭效果
* **`property`**：常見於 Open Graph 等社群分享設定

---

### 最重要的分類方式

#### 1. 基本頁面設定

是給**瀏覽器或裝置**看的，例如：

* `charset`
* `viewport`

#### 2. 搜尋引擎相關設定

是給**搜尋引擎**看的，例如：

* `description`
* `robots`
* `keywords`

#### 3. 社群分享設定

是給**社群平台**抓分享預覽用的，例如：

* `og:title`
* `og:description`
* `og:image`

---

### 一句話對比

* **基本頁面設定**：讓瀏覽器更正確處理頁面
* **SEO 設定**：讓搜尋引擎更好理解頁面
* **Open Graph**：讓社群平台分享時顯示更好的預覽資訊

---

## 1. `<meta>` 常見長什麼樣子？

`<meta>` 常見有三種寫法：

### （1）直接設定字符編碼

```html
<meta charset="UTF-8">
```

這種寫法最常見，直接告訴瀏覽器這個頁面用什麼編碼。

---

### （2）使用 `name` + `content`

```html
<meta name="description" content="這是一個描述內容">
```

這種很常用來描述頁面資訊，例如：

* `author`
* `description`
* `robots`
* `keywords`
* `viewport`

---

### （3）使用 `http-equiv` + `content`

```html
<meta http-equiv="refresh" content="3;url=https://example.com/">
```

這種通常是在模擬某種 HTTP 標頭效果。

---

### （4）使用 `property` + `content`

```html
<meta property="og:title" content="網頁標題">
```

這種常見於 Open Graph，主要給社群平台讀取。

---

## 2. 哪些是最常見、最先要會的？

不是所有 `meta` 重要程度都一樣。
如果你是初學者，建議先把下面這些分層記住。

### 第一層：最常用、最值得先記

#### 1. `charset`

```html
<meta charset="UTF-8">
```

作用：定義字符編碼。

最常見的是 `UTF-8`，因為它能正確處理中文、英文與多種語言文字。
如果沒有正確設定編碼，頁面可能出現亂碼。

---

#### 2. `viewport`

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

作用：控制行動裝置上的顯示寬度與初始縮放。

這是做響應式網頁時非常常見的一個設定。
你可以先把它理解成：

> 讓瀏覽器在手機上，不要用奇怪的縮放方式去猜頁面大小。

---

#### 3. `description`

```html
<meta name="description" content="這是一個描述內容">
```

作用：提供頁面描述資訊。

它常被拿來當作搜尋引擎結果中的摘要參考內容之一。
所以它屬於很常見的 SEO 基礎設定。

---

#### 4. `robots`

```html
<meta name="robots" content="index, follow">
```

作用：提示搜尋引擎爬蟲該怎麼處理這個頁面。

例如：

* `index`：可以收錄這個頁面
* `noindex`：不要收錄這個頁面
* `follow`：可以追蹤頁面上的連結
* `nofollow`：不要追蹤頁面上的連結

你可以先記成：

> `robots` 是拿來提示搜尋引擎「怎麼對待這個頁面」。

---

### 第二層：常見，但不是每個頁面都一定要特別關注

#### 1. `author`

```html
<meta name="author" content="kevin">
```

作用：標記作者資訊。

---

#### 2. `generator`

```html
<meta name="generator" content="Visual Studio Code">
```

作用：標記頁面或檔案可能由什麼工具產生。

---

#### 3. `copyright`

```html
<meta name="copyright" content="2023-2027 版權所有">
```

作用：提供版權資訊。

---

### 第三層：特定情境才用

#### 1. `refresh`

```html
<meta http-equiv="refresh" content="3;url=https://example.com/">
```

作用：讓頁面在指定秒數後自動刷新或跳轉。

例如上面的意思是：

* 3 秒後跳轉到指定網址

這種寫法不是每個頁面都會用，通常只在特定需求下才出現。

---

#### 2. `X-UA-Compatible`

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

作用：和舊版 IE 瀏覽器的相容模式有關。

這類設定在現代前端裡已經不像以前那麼核心，但你在舊專案中還是可能看到。

---

## 3. 基本頁面設定相關的 `meta`

這一類最主要是給瀏覽器與裝置看的。

### （1）字符編碼

```html
<meta charset="UTF-8">
```

作用：告訴瀏覽器這份 HTML 文件使用什麼字符編碼。

如果頁面含有中文，最常見也最安全的做法就是設成 `UTF-8`。

---

### （2）行動裝置顯示設定

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

作用：控制手機等行動裝置的畫面顯示方式。

常見內容意思可以先這樣理解：

* `width=device-width`：頁面寬度跟裝置寬度一致
* `initial-scale=1.0`：初始縮放比例是 1

---

### （3）舊版瀏覽器兼容設定

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

作用：提示 IE 使用最新文件模式渲染。

這種設定比較偏歷史相容用途，現在看到時要知道它是做什麼，不一定要把它當成現代開發的核心必備。

---

## 4. 搜尋引擎相關的 `meta`

這一類主要是給搜尋引擎看的。

### （1）頁面描述

```html
<meta name="description" content="這是一個描述內容">
```

這一段描述文字，常常會成為搜尋引擎結果中顯示的摘要參考內容。

所以它的重點不是「寫給使用者直接在頁面上看」，
而是「幫搜尋引擎理解頁面內容，也影響搜尋結果呈現」。

---

### （2）關鍵字

```html
<meta name="keywords" content="關鍵詞1, 關鍵詞2, 關鍵詞3">
```

這是早期比較常見的 SEO 設定。

你可以知道它是什麼，但在學習時不要把它和 `description` 放在同等重要的位置。
對初學者來說，**`description` 通常比 `keywords` 更值得先理解。**

---

### （3）爬蟲規則

```html
<meta name="robots" content="index, follow">
```

這是拿來提示搜尋引擎爬蟲如何處理頁面的設定。

常見值例如：

* `index`
* `noindex`
* `follow`
* `nofollow`

重點不是把所有組合背起來，
而是先知道：

> `robots` 是在控制搜尋引擎要不要收錄、要不要跟著連結繼續爬。

---

## 5. 社群分享相關的 `meta`：Open Graph

### 5.1 Open Graph 是什麼？

Open Graph（簡稱 OG）是一種協議，
主要用途是：

> **讓網頁在社群平台被分享時，可以顯示較完整的預覽資訊。**

例如分享連結時，社群平台可能會顯示：

* 標題
* 描述
* 圖片
* 網址
* 網站名稱

這些資訊很多時候就是從 Open Graph 標籤讀來的。

常見平台包括：

* Facebook
* LinkedIn
* 某些聊天工具或社群服務

---

### 5.2 為什麼它和 SEO 描述不是同一件事？

很多人會把下面兩個搞混：

* `meta name="description"`
* `meta property="og:description"`

它們雖然都叫「描述」，但服務對象不同。

#### 搜尋引擎描述

```html
<meta name="description" content="這是一個描述內容">
```

主要是給搜尋引擎參考的。

#### 社群分享描述

```html
<meta property="og:description" content="這是一個分享描述">
```

主要是給社群平台抓預覽時用的。

所以你可以這樣記：

> **SEO description 是給搜尋結果看的，OG description 是給分享卡片看的。**

---

### 5.3 常見的 Open Graph 標籤

#### 1. 標題

```html
<meta property="og:title" content="你的網頁標題">
```

分享時顯示的標題。

---

#### 2. 描述

```html
<meta property="og:description" content="你的網頁描述">
```

分享時顯示的簡短說明。

---

#### 3. 網址

```html
<meta property="og:url" content="https://example.com/your-page">
```

分享頁面的正式網址。

---

#### 4. 圖片

```html
<meta property="og:image" content="https://example.com/your-image.jpg">
```

分享時顯示的代表圖片。

---

#### 5. 類型

```html
<meta property="og:type" content="website">
```

常見內容類型如：

* `website`
* `article`

---

#### 6. 網站名稱

```html
<meta property="og:site_name" content="你的網站名稱">
```

標示網站名稱。

---

#### 7. 語言地區

```html
<meta property="og:locale" content="zh_TW">
```

表示語言或地區資訊。

---

### 5.4 一個完整的 Open Graph 例子

```html
<head>
  <meta property="og:title" content="我的精彩網頁">
  <meta property="og:description" content="這是一個令人驚嘆的網頁，介紹了許多有趣的內容。">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:url" content="https://example.com/my-page">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="我的網站">
  <meta property="og:locale" content="zh_TW">
</head>
```

---

### 5.5 Open Graph 最常回查的欄位

如果你不想一開始背太多，先記下面五個就夠：

* `og:title`
* `og:description`
* `og:image`
* `og:url`
* `og:type`

因為它們最直接影響分享預覽的基本樣子。

---

## 6. `name`、`http-equiv`、`property` 到底差在哪裡？

這三組很容易看起來像只是不同寫法，但其實代表的使用情境不同。

### `name`

常用來描述頁面資訊。

例如：

* `author`
* `description`
* `robots`
* `viewport`

可以先理解成：

> 「這份頁面資訊的名稱是什麼？」

---

### `http-equiv`

常用來模擬某些 HTTP 標頭效果。

例如：

* `refresh`
* `X-UA-Compatible`

可以先理解成：

> 「這是一種比較接近瀏覽器行為 / 標頭效果的設定。」

---

### `property`

常見於 Open Graph。

例如：

* `og:title`
* `og:description`
* `og:image`

可以先理解成：

> 「這是在描述某種社群分享屬性。」

---

## 7. 常見錯誤

### 錯誤一：把所有 `meta` 當成同一層級

不對。
`charset`、`viewport`、`description`、Open Graph、`generator`、`refresh` 的重要性和使用頻率並不一樣。

---

### 錯誤二：把搜尋引擎描述和社群分享描述當成同一件事

不對。

* `description`：偏搜尋引擎摘要
* `og:description`：偏社群分享預覽

---

### 錯誤三：看到很多 `meta` 就全部硬背

這樣很容易亂。
更好的方式是先按「服務對象」分類：

* 給瀏覽器
* 給搜尋引擎
* 給社群平台

---

### 錯誤四：不知道哪些是常用必備，哪些只是特定情境才出現

初學時最容易失焦。
建議先熟：

* `charset`
* `viewport`
* `description`
* `robots`
* 常見 OG 欄位

其他再慢慢補。

---

### 錯誤五：把無關文字一起抄進筆記

例如從網頁複製程式碼時，把 `html`、`複製程式碼`、多餘說明一起貼進來。
這會影響筆記可讀性。

---

## 8. 實務記憶法

你可以用下面這句話快速記：

> **先問這個 `meta` 是要給誰看的。**

然後分成三類去想：

* **給瀏覽器 / 裝置** → `charset`、`viewport`
* **給搜尋引擎** → `description`、`robots`、`keywords`
* **給社群平台** → `og:title`、`og:description`、`og:image`

這樣你之後在 `<head>` 看到任何 `meta`，就不會只是在背字串，而是知道它大概屬於哪一類。

---

## 9. 一個最常見的 `<head>` 範例

下面這段很適合拿來當初學版參考：

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta name="description" content="這是一個介紹 HTML meta 標籤的頁面">
  <meta name="robots" content="index, follow">

  <meta property="og:title" content="meta 標籤教學">
  <meta property="og:description" content="帶你快速分清 meta 的常見用途">
  <meta property="og:image" content="https://example.com/meta-cover.jpg">
  <meta property="og:url" content="https://example.com/meta-page">
  <meta property="og:type" content="website">

  <title>meta 標籤教學</title>
</head>
```

這段的重點不是要你死背，
而是讓你看到：

* 基本設定
* SEO 設定
* OG 設定

可以怎麼一起出現在 `<head>` 裡。

---

## 10. 本節總結

這篇最重要的，不是背很多 `meta` 名字，
而是建立下面這個理解框架：

### 第一層：`meta` 是做什麼的？

提供頁面的中繼資料，不直接顯示在畫面上。

### 第二層：它是在告訴誰？

* 瀏覽器 / 裝置
* 搜尋引擎
* 社群平台

### 第三層：哪些最值得先記？

* `charset`
* `viewport`
* `description`
* `robots`
* `og:title`
* `og:description`
* `og:image`

所以這章最核心的一句話可以記成：

> **`meta` 不是寫給畫面看的，而是寫給瀏覽器、搜尋引擎、社群平台等系統讀取的。**

---

## 自測問題

1. `<meta>` 標籤的主要作用是什麼？
2. 為什麼說學 `meta` 時，先分清「它是告訴誰看」很重要？
3. `name`、`http-equiv`、`property` 這三種常見寫法，分別常出現在什麼情境？
4. `meta name="description"` 和 `meta property="og:description"` 差在哪裡？
5. 為什麼 `charset` 和 `viewport` 應該優先於很多其他 `meta` 先理解？
6. 如果想控制社群平台分享時的預覽圖片，最常回查哪個欄位？

---

## 延伸閱讀

* 前置知識：[HTML 基本結構標籤](../第四章_HTML基本結構標籤/第04章_HTML基本結構標籤.md)
* 相關主題：[第三章｜兼容性問題](../第三章_兼容性問題/README.md)
* 返回章節入口：[第八章｜meta 標籤](./README.md)

---