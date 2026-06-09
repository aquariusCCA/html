# Open Graph 社群分享設定

> 來源：
> - origin/第08章_meta標籤/01-meta標籤.md / Questions：Open Graph 是什麼？
> - origin/第08章_meta標籤/01-meta標籤.md / Notes：社交媒體分享配置（Open Graph）

Open Graph（OG）協議是一種標準，用來讓網頁上的內容在社交媒體平台（如 Facebook、Twitter、LinkedIn 等）分享時，顯示出更具吸引力的預覽，像是標題、描述、圖片等。

## 具體使用方法

你需要在 HTML 的 `<head>` 區塊中加入適當的 Open Graph 標籤來配置網頁的預覽數據。Open Graph 標籤使用 `property` 屬性來定義內容類型，例如標題、描述、圖片等。

## 常見 Open Graph 標籤

### 網頁標題

```html
<meta property="og:title" content="你的網頁標題">
```

### 網頁描述

```html
<meta property="og:description" content="你的網頁描述">
```

### 網頁 URL

```html
<meta property="og:url" content="https://example.com/your-page">
```

### 圖片 URL

```html
<meta property="og:image" content="https://example.com/your-image.jpg">
```

### 內容類型

```html
<meta property="og:type" content="website">
```

### 網站名稱

```html
<meta property="og:site_name" content="你的網站名稱">
```

### 語言

```html
<meta property="og:locale" content="zh_TW">
```

## 完整範例

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

## 常用 Open Graph 標籤說明

1. **`og:title`**：分享時顯示的標題。
2. **`og:description`**：分享時的簡短描述。
3. **`og:image`**：用來代表頁面的圖片。
4. **`og:url`**：當前網頁的 URL，通常設置為分享的網頁地址。
5. **`og:type`**：內容類型，通常設置為 `"website"` 或 `"article"`，視內容而定。

## 常見的社交媒體平台支持

- **Facebook**：會利用 Open Graph 標籤生成預覽，顯示標題、描述和圖片。
- **Twitter**：使用類似的 Twitter Cards，但也支持部分 Open Graph 標籤。

這些標籤可以幫助你的內容在社交媒體平台上更具吸引力，並能更好地控制預覽效果。
