<!--
source_atomic:
  - atomic/080-meta標籤/06-open-graph社群分享設定.md
-->

# Open Graph：控制社群分享預覽

## 學習目標

讀完這篇筆記，你應該能夠：

- 說明 Open Graph 的用途。
- 使用常見 `og:*` meta 標籤設定分享預覽。
- 分辨 HTML 頁面標題、搜尋摘要與社群分享預覽的差異。
- 避免圖片、網址與描述設定不完整造成分享預覽異常。

## 使用情境

當使用者把你的網頁分享到 Facebook、LinkedIn、通訊軟體或其他支援預覽的平台時，平台通常會抓取頁面 metadata，產生一張分享卡片。

分享卡片可能包含：

- 標題
- 描述
- 預覽圖片
- 網址
- 網站名稱

如果沒有提供適當 metadata，平台可能自行抓取頁面中的文字或圖片，最後出現的預覽可能不符合你的期待。

## 一句話理解

Open Graph 是用一組 `og:*` meta 標籤，告訴社群平台「這個網頁分享出去時應該怎麼顯示」。

## 基本語法

Open Graph 標籤通常放在 `<head>` 裡，並使用 `property` 屬性：

```html
<meta property="og:title" content="我的精彩網頁">
```

這和一般 `name="description"` 的寫法不太一樣：

```html
<meta name="description" content="這是搜尋摘要可能使用的描述。">
```

記住這個差異：

- 搜尋與一般 metadata 常見：`name="..."`
- Open Graph 常見：`property="og:..."`

## 常見 Open Graph 標籤

### 分享標題：`og:title`

```html
<meta property="og:title" content="我的精彩網頁">
```

設定分享卡片中顯示的標題。

### 分享描述：`og:description`

```html
<meta property="og:description" content="這是一個介紹 HTML meta 標籤的教學頁面。">
```

設定分享卡片中的簡短描述。

### 分享網址：`og:url`

```html
<meta property="og:url" content="https://example.com/my-page">
```

設定這個網頁在社群圖譜中的代表網址。實務上通常放該頁的正式網址，而不是追蹤參數很多的臨時網址。

### 分享圖片：`og:image`

```html
<meta property="og:image" content="https://example.com/image.jpg">
```

設定分享卡片使用的代表圖片。這張圖片應該可以被外部平台公開存取。

如果設定了 `og:image`，也建議補上圖片替代描述：

```html
<meta property="og:image:alt" content="HTML meta 標籤教學封面圖">
```

### 內容類型：`og:type`

```html
<meta property="og:type" content="website">
```

常見類型包含 `website` 與 `article`。一般網站頁面可使用 `website`，文章頁可依情境使用 `article`。

### 網站名稱與語系

```html
<meta property="og:site_name" content="我的網站">
<meta property="og:locale" content="zh_TW">
```

- `og:site_name`：整個網站的名稱。
- `og:locale`：內容語系，例如繁體中文台灣常見寫法是 `zh_TW`。

## 完整範例

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>我的精彩網頁</title>

  <meta property="og:title" content="我的精彩網頁">
  <meta property="og:description" content="這是一個介紹 HTML meta 標籤與 Open Graph 的教學頁面。">
  <meta property="og:image" content="https://example.com/images/og-cover.jpg">
  <meta property="og:image:alt" content="HTML meta 標籤教學封面圖">
  <meta property="og:url" content="https://example.com/my-page">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="我的網站">
  <meta property="og:locale" content="zh_TW">
</head>
<body>
  <h1>我的精彩網頁</h1>
</body>
</html>
```

## 範例拆解

- `<title>`：瀏覽器分頁標題，也可能被搜尋引擎參考。
- `og:title`：社群分享卡片的標題。
- `og:description`：社群分享卡片的描述。
- `og:image`：分享預覽圖，應使用可公開讀取的完整 URL。
- `og:image:alt`：描述分享圖片內容，讓圖片資訊更完整。
- `og:url`：頁面的正式 URL。
- `og:type`：說明這個物件是網站頁、文章或其他類型。
- `og:site_name`：顯示整個網站名稱。
- `og:locale`：標示內容語系。

## HTML title、description 與 Open Graph 的差異

| 設定 | 常見用途 |
| --- | --- |
| `<title>` | 瀏覽器分頁標題、搜尋結果標題來源之一。 |
| `<meta name="description">` | 搜尋結果摘要候選來源之一。 |
| `<meta property="og:title">` | 社群分享預覽標題。 |
| `<meta property="og:description">` | 社群分享預覽描述。 |
| `<meta property="og:image">` | 社群分享預覽圖片。 |

它們可以寫相近的內容，但不要混淆用途。搜尋結果與社群分享是不同場景，讀者看到的入口也不同。

## 常見錯誤

### 錯誤一：`og:image` 使用本機或相對路徑

```html
<meta property="og:image" content="./images/cover.jpg">
```

這在你的電腦或網站內部可能看似合理，但社群平台需要從外部抓取圖片。正式網站通常應使用可公開存取的完整 URL：

```html
<meta property="og:image" content="https://example.com/images/cover.jpg">
```

### 錯誤二：忘記設定 `og:url`

如果沒有明確設定正式 URL，平台可能抓到帶有追蹤參數或不同版本的網址，造成同一頁被視為不同分享對象。

### 錯誤三：分享描述寫得和頁面內容不一致

`og:description` 應該準確描述頁面內容。若寫成誇張廣告詞，但頁面內容不相符，使用者點進來後會失望，也會降低信任感。

### 錯誤四：以為 Open Graph 只對 Facebook 有用

Open Graph 最早和 Facebook 關係密切，但許多平台都會讀取部分 Open Graph metadata。實務上，設定好 Open Graph 通常能改善多個分享場景的預覽品質。

## 實務判斷準則

一般內容頁可先準備這幾個核心欄位：

```html
<meta property="og:title" content="頁面標題">
<meta property="og:description" content="頁面簡短描述">
<meta property="og:image" content="https://example.com/images/share.jpg">
<meta property="og:image:alt" content="分享圖片描述">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="website">
```

如果是文章型內容，再依需求補充文章相關 metadata；如果是多語系網站，也要注意 `og:locale` 與替代語系設定。

## 重點整理

- Open Graph 用來控制社群平台分享預覽。
- OG 標籤通常使用 `property="og:*"`。
- 核心欄位包含 `og:title`、`og:type`、`og:image`、`og:url`。
- `og:description`、`og:site_name`、`og:locale` 能讓預覽資訊更完整。
- `og:image` 應使用可公開存取的完整 URL，並建議搭配 `og:image:alt`。

## 自我檢查

1. Open Graph 主要解決什麼問題？
2. `og:title` 和 `<title>` 的使用場景有什麼不同？
3. 為什麼正式網站的 `og:image` 不適合只寫相對路徑？
4. 如果一篇文章頁被分享到社群平台時顯示錯誤圖片，你會先檢查哪個 meta 標籤？

## 延伸參考

- [The Open Graph protocol](https://ogp.me/)
