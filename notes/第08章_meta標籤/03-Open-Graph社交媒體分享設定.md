<!--
source_atomic:
  - atomic/第08章_meta標籤/06-open-graph社交媒體分享.md
-->

# Open Graph 社交媒體分享設定

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 Open Graph 解決的是社群分享預覽問題。
- 在 `<head>` 中寫出常見 Open Graph meta 標籤。
- 分辨 `name` 類 meta 與 `property="og:..."` 類 meta 的差異。
- 知道設定分享標題、描述、圖片與網址時的實務注意事項。

## 問題情境

當你把一個網址貼到 Facebook、LinkedIn、通訊軟體或其他社群平台時，平台通常會產生一張預覽卡片。

預覽卡片可能包含：

- 標題。
- 描述。
- 預覽圖片。
- 網站名稱。
- 頁面網址。

如果頁面沒有提供明確資訊，平台可能自行抓取頁面文字或圖片，結果就可能出現錯誤圖片、過長標題或不適合分享的摘要。

## 一句話理解

Open Graph 是一組放在 HTML `<head>` 裡的 metadata，用來控制網頁被分享到社群平台時的預覽內容。

## 基本觀念

一般頁面描述常使用：

```html
<meta name="description" content="頁面描述">
```

Open Graph 則使用 `property` 屬性，並且屬性名稱通常以 `og:` 開頭：

```html
<meta property="og:title" content="網頁標題">
```

這表示這段 metadata 是提供給支援 Open Graph 的平台，用來產生分享預覽。

## 常用 Open Graph 標籤

| 標籤 | 用途 |
| --- | --- |
| `og:title` | 分享卡片顯示的標題。 |
| `og:description` | 分享卡片顯示的簡短描述。 |
| `og:image` | 分享卡片使用的預覽圖片。 |
| `og:url` | 這個頁面的正式 URL。 |
| `og:type` | 內容類型，例如 `website` 或 `article`。 |
| `og:site_name` | 網站名稱。 |
| `og:locale` | 內容語系，例如 `zh_TW`。 |

## 基本寫法

```html
<meta property="og:title" content="網頁標題">
<meta property="og:description" content="網頁描述">
<meta property="og:image" content="https://example.com/your-image.jpg">
```

這三個是最容易影響分享預覽觀感的設定：

- `og:title` 決定使用者第一眼看到的主標題。
- `og:description` 補充說明這個頁面值得點開的原因。
- `og:image` 提供視覺預覽，通常會大幅影響分享卡片是否醒目。

## 完整例子

```html
<head>
  <meta property="og:title" content="我的精彩網頁">
  <meta property="og:description" content="這是一個介紹 HTML meta 標籤的教學頁面。">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:url" content="https://example.com/my-page">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="我的網站">
  <meta property="og:locale" content="zh_TW">
  <title>我的精彩網頁</title>
</head>
```

## 範例拆解

### `og:title`

```html
<meta property="og:title" content="我的精彩網頁">
```

這是分享預覽中的標題。它可以和 `<title>` 相同，也可以為社群分享重新設計。

### `og:description`

```html
<meta property="og:description" content="這是一個介紹 HTML meta 標籤的教學頁面。">
```

這是分享卡片中的描述文字。它應該簡短、準確，並且和頁面內容一致。

### `og:image`

```html
<meta property="og:image" content="https://example.com/image.jpg">
```

這是分享卡片中的圖片。實務上通常使用完整的 `https://` 圖片 URL，避免平台抓不到相對路徑圖片。

### `og:url`

```html
<meta property="og:url" content="https://example.com/my-page">
```

這是頁面的正式網址。當同一篇內容可能有多種網址時，`og:url` 可以幫助平台理解應該把哪個 URL 視為主要分享目標。

### `og:type`

```html
<meta property="og:type" content="website">
```

`og:type` 用來表示內容類型。一般網站頁面常用 `website`，文章內容可依平台需求使用 `article`。

## Open Graph 與搜尋摘要的差異

| 用途 | 常見寫法 | 主要使用者 |
| --- | --- | --- |
| 搜尋摘要 | `<meta name="description" content="...">` | 搜尋引擎。 |
| 社群分享預覽 | `<meta property="og:description" content="...">` | 社群平台與分享工具。 |

兩者可以內容相近，但目的不同：

- 搜尋摘要偏向幫助使用者在搜尋結果中判斷頁面是否相關。
- Open Graph 偏向讓頁面在社群分享時形成清楚、吸引人的預覽卡片。

## 常見錯誤

### 用 `name` 寫 Open Graph

較不理想：

```html
<meta name="og:title" content="網頁標題">
```

建議寫法：

```html
<meta property="og:title" content="網頁標題">
```

Open Graph 標籤通常使用 `property` 屬性。

### 圖片使用相對路徑

較不理想：

```html
<meta property="og:image" content="./images/share.jpg">
```

建議寫法：

```html
<meta property="og:image" content="https://example.com/images/share.jpg">
```

社群平台抓取頁面時，不一定能正確解析你的本地或相對圖片路徑。分享圖建議使用外部可存取的完整 URL。

### 以為設定後會立刻更新所有平台預覽

社群平台常會快取網址預覽。你修改 Open Graph 後，平台上舊的預覽不一定會立刻更新，通常需要等待快取過期或使用平台提供的除錯工具重新抓取。

## 實務使用原則

公開頁面如果需要被分享，可以至少準備這幾個設定：

```html
<meta property="og:title" content="頁面分享標題">
<meta property="og:description" content="頁面分享描述">
<meta property="og:image" content="https://example.com/share-image.jpg">
<meta property="og:url" content="https://example.com/page">
<meta property="og:type" content="website">
```

撰寫時可以用這個順序檢查：

```text
分享標題是否清楚
  -> 分享描述是否準確
  -> 分享圖片是否能公開讀取
  -> 分享 URL 是否為正式網址
  -> 平台預覽是否實際測試過
```

Twitter 等平台可能使用自己的卡片標籤，也可能支援部分 Open Graph 資訊。需要精準控制不同平台預覽時，應再查對應平台文件。

## 重點整理

- Open Graph 用來控制網址被分享到社群平台時的預覽內容。
- OG 標籤通常寫在 `<head>` 中，並使用 `property="og:..."`。
- 常見設定包含 `og:title`、`og:description`、`og:image`、`og:url` 和 `og:type`。
- `og:image` 建議使用平台可公開存取的完整圖片 URL。
- 搜尋用的 `description` 和社群用的 `og:description` 目的相近，但服務對象不同。

## 自我檢查

- 我是否能說明 Open Graph 解決什麼問題？
- 我是否能寫出一組基本 OG 分享設定？
- 我是否知道為什麼 `og:image` 不應只寫本地相對路徑？
