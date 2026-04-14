# meta 標籤

所屬章節：[第八章｜meta 標籤](./README.md)

## 本節導讀

這篇在整理 HTML `<meta>` 標籤最常見的用途，包括字符編碼、瀏覽器兼容、行動裝置設定、搜尋引擎資訊與社群分享資訊。  
重點不是把所有 `meta` 寫法背起來，而是先分清每一類設定到底是在告訴誰看：瀏覽器、搜尋引擎，還是社交平台。  
如果你常在 `head` 裡看到很多 `meta`，卻不知道哪些是基本必備、哪些是 SEO、哪些是分享預覽用，這篇就是回查入口。

## 關鍵字

- 主題：HTML meta 標籤、頁面中繼資料
- 別名：中繼標籤、meta tags
- 英文：meta tag、metadata、Open Graph、viewport
- 常見搜尋：`meta charset` 是什麼、`viewport` 怎麼寫、`robots` 怎麼設定、Open Graph 是什麼
- 易混淆：`name` vs `http-equiv` vs `property`、SEO 描述 vs Open Graph 描述、`keywords` vs `description`

## 建議回查情境

- 當你想知道 `head` 裡常見的 `meta` 到底分別在做什麼時
- 當你忘記 `charset`、`viewport`、`robots` 這些常用設定該怎麼寫時
- 當你想控制搜尋結果摘要或社群分享預覽時

## 30 秒複習入口

- `<meta>` 主要是在 `<head>` 裡提供頁面的中繼資訊。
- 常見用途可分成：基本頁面設定、搜尋引擎相關設定、社群分享設定。
- `charset`、`viewport`、`description`、`robots`、Open Graph 是最常回查的一組。

## 速查區

### 核心定義

- `<meta>`：用來提供網頁的中繼資料，本身通常不直接顯示在頁面內容中。
- `name`：常用來描述頁面資訊，例如 `author`、`description`、`robots`。
- `http-equiv`：用來模擬 HTTP 標頭效果，例如 `refresh`、`X-UA-Compatible`。
- `property`：常見於 Open Graph 等社群分享設定。

### 關鍵規則 / 判準

- `charset` 用來定義字符編碼。
- `viewport` 常用於行動裝置畫面縮放與寬度設定。
- `description` 和 `keywords` 偏向搜尋引擎相關資訊。
- `robots` 用來提示爬蟲如何處理頁面。
- Open Graph 主要控制社群平台分享時的預覽資訊。

### 常見錯誤

- 把搜尋引擎描述和社群分享描述當成同一件事。
- 看到很多 `meta` 就全部硬背，卻不知道它們分別服務哪個對象。
- 程式碼貼上時把 `html`、`複製程式碼` 這類無關文字一起留在筆記裡。

### 一句話對比

- 基本頁面設定是給瀏覽器看的；SEO 相關設定偏向搜尋引擎；Open Graph 偏向社群分享預覽。

## 正文

### 1. Open Graph

#### 1.1 Open Graph 是什麼

Open Graph（`OG`）協議是一種標準，用來讓網頁內容在社交媒體平台分享時，顯示出更完整的預覽資訊，例如標題、描述、圖片等。

常見的分享平台包括：

- Facebook
- Twitter（雖然更常見的是 Twitter Cards，但也可能參考部分 Open Graph 資訊）
- LinkedIn

你需要在 HTML 的 `<head>` 區塊中加入適當的 Open Graph 標籤來配置預覽資料。  
Open Graph 常使用 `property` 屬性來定義內容類型。

#### 1.2 常見的 Open Graph 標籤

1. 網頁標題：

   ```html
   <meta property="og:title" content="你的網頁標題">
   ```

2. 網頁描述：

   ```html
   <meta property="og:description" content="你的網頁描述">
   ```

3. 網頁 URL：

   ```html
   <meta property="og:url" content="https://example.com/your-page">
   ```

4. 圖片 URL（預覽時顯示的圖片）：

   ```html
   <meta property="og:image" content="https://example.com/your-image.jpg">
   ```

5. 內容類型：

   ```html
   <meta property="og:type" content="website">
   ```

6. 網站名稱：

   ```html
   <meta property="og:site_name" content="你的網站名稱">
   ```

7. 語言：

   ```html
   <meta property="og:locale" content="zh_TW">
   ```

#### 1.3 一個完整的 Open Graph 例子

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

#### 1.4 Open Graph 最常回查的欄位

1. `og:title`：分享時顯示的標題。
2. `og:description`：分享時的簡短描述。
3. `og:image`：用來代表頁面的圖片。
4. `og:url`：當前網頁的 URL，通常設置為分享頁面的正式地址。
5. `og:type`：內容類型，常見如 `website` 或 `article`。

### 2. 基本頁面設定相關的 meta

#### 配置字符編碼

```html
<!-- 配置字符編碼 -->
<meta charset="UTF-8">
```

#### 針對 IE 瀏覽器的兼容性設置

```html
<!-- 針對 IE 瀏覽器的一個兼容性設置，總是使用最新的文檔模式進行渲染。 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

#### 針對移動端的配置

```html
<!-- 針對移動端的一個配置 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 3. 頁面資訊相關的 meta

#### 配置網頁作者

```html
<!-- 配置網頁作者 -->
<meta name="author" content="kevin">
```

#### 配置網頁生成工具

```html
<!-- 配置網頁生成工具 -->
<meta name="generator" content="Visual Studio Code">
```

#### 配置網頁版權信息

```html
<!-- 配置定義網頁版權信息 -->
<meta name="copyright" content="2023-2027版權所有">
```

### 4. 行為控制相關的 meta

#### 配置網頁自動刷新

```html
<!-- 自動刷新 -->
<meta http-equiv="refresh" content="3;url=https://www.bilibili.com/">
```

### 5. 搜尋引擎相關的 meta

#### 針對搜索引擎爬蟲配置

```html
<!-- 針對搜索引擎爬蟲配置 -->
<meta name="robots" content="此處可選值見下表">
```

![搜索引擎爬蟲可選值.png](./images/image_1776130510832_44b8a356..png)

#### 關鍵字和描述訊息

```html
<!-- 可以解讀為「你要描述（meta）的內容名稱（name），內容（content）是什麼」。 -->
<meta name="keywords" content="關鍵詞1, 關鍵詞2, 關鍵詞3">
<meta name="description" content="這是一個描述內容">
```

![cee2be8ebc7e127c1b388fe66b5ca112.png](./images/cee2be8ebc7e127c1b388fe66b5ca112.png)

頁面描述也就是搜尋引擎顯示的簡介文字，如下：

![e00c9fb0975fe71232f6e8e57a41629b.png](./images/e00c9fb0975fe71232f6e8e57a41629b.png)

- 參考文章：[HTML基础语法（2）-网页关键词和页面描述](https://blog.csdn.net/weixin_45586870/article/details/120138274)

## 自測問題

1. `meta` 標籤常見可以分成哪幾類用途？
2. `name`、`http-equiv`、`property` 這三種常見寫法分別常出現在什麼情境？
3. 搜尋引擎摘要與社群分享預覽，常分別回查哪一組 `meta`？

## 延伸閱讀

- 前置知識：[HTML 基本結構標籤](../第四章_HTML基本結構標籤/第04章_HTML基本結構標籤.md)
- 相關主題：[第三章｜兼容性問題](../第三章_兼容性問題/README.md)
- 返回章節入口：[第八章｜meta 標籤](./README.md)
