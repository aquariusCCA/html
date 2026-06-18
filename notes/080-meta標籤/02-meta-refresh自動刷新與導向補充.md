---
source_atomic:
  - atomic/080-meta標籤/03-meta自動刷新設定.md
---

# meta refresh：自動刷新與延遲導向

## 學習目標

讀完這篇筆記，你應該能夠：

- 看懂 `http-equiv="refresh"` 的基本語法。
- 分辨「重新整理目前頁面」與「延遲導向到其他 URL」的差異。
- 知道 meta refresh 的實務限制，避免把它當成主要轉址方式。

## 使用情境

有些頁面會在幾秒後自動重新載入，或顯示一段提示後再導向到另一個頁面。

例如：

- 「操作完成，3 秒後回到首頁」
- 「頁面已搬移，稍後前往新網址」
- 「狀態頁每隔一段時間重新整理」

這類行為可以用 `meta refresh` 做到，但它不是最理想的主要轉址方案。學習它的目的，是看懂既有 HTML 寫法，並知道什麼時候應該避免濫用。

## 一句話理解

`meta refresh` 是放在 `<head>` 裡，用秒數控制頁面重新整理或延遲導向的 meta 設定。

## 基本語法

### 幾秒後重新整理目前頁面

```html
<meta http-equiv="refresh" content="5">
```

這代表頁面載入 5 秒後，重新整理目前頁面。

### 幾秒後導向其他網址

```html
<meta http-equiv="refresh" content="3;url=https://example.com/target-page">
```

這代表頁面載入 3 秒後，導向 `https://example.com/target-page`。

## 範例拆解

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="3;url=https://example.com/target-page">
  <title>即將前往新頁面</title>
</head>
<body>
  <p>操作完成，3 秒後將前往新頁面。</p>
</body>
</html>
```

這段程式碼的重點是：

- `http-equiv="refresh"`：表示這個 meta 要模擬 HTTP refresh 行為。
- `content="3;url=..."`：前面的 `3` 是等待秒數，後面的 `url` 是導向目標。
- `<body>` 裡的提示文字：讓使用者知道接下來會發生什麼，不要讓頁面突然跳走。

## 常見錯誤

### 錯誤一：沒有提示就自動跳轉

```html
<meta http-equiv="refresh" content="1;url=https://example.com">
```

使用者可能還沒看清楚頁面內容，就被帶到另一個網址。這會造成困惑，也不利於無障礙使用者理解頁面變化。

較好的做法是提供清楚提示，並保留可手動點擊的連結：

```html
<p>
  頁面即將前往新網址。
  如果沒有自動跳轉，請<a href="https://example.com">點此開啟</a>。
</p>
```

### 錯誤二：把 meta refresh 當成正式轉址方案

如果網站真的搬到新網址，通常應該使用伺服器端的 301 或 302 轉址，而不是只靠 meta refresh。

原因是：

- 伺服器端轉址更明確，也更適合搜尋引擎與瀏覽器處理。
- meta refresh 需要等 HTML 被讀取後才發生。
- 太短的延遲可能造成使用者體驗問題。

### 錯誤三：過度頻繁重新整理

```html
<meta http-equiv="refresh" content="1">
```

每秒重新整理一次會讓使用者難以閱讀，也可能增加伺服器負擔。若要更新資料，現代網頁通常會用 JavaScript 搭配 API 局部更新，而不是一直重整整頁。

## 實務判斷準則

可以使用 meta refresh 的情境：

- 教學中示範 HTML 自動刷新語法。
- 非核心頁面需要簡單延遲導向。
- 沒有伺服器端設定權限，只能用 HTML 做最低限度處理。

應該避免的情境：

- 正式網站搬家或永久轉址。
- 需要良好 SEO 訊號的頁面。
- 會打斷閱讀或操作流程的頁面。
- 頻繁重新整理的動態內容頁。

## 重點整理

- `meta refresh` 使用 `<meta http-equiv="refresh">` 設定。
- `content="5"` 表示 5 秒後重新整理目前頁面。
- `content="3;url=..."` 表示 3 秒後導向指定網址。
- 自動導向應提供文字提示與手動連結。
- 正式轉址通常優先使用伺服器端 301 或 302。

## 自我檢查

1. `content="3;url=https://example.com"` 中的 `3` 代表什麼？
2. 如果網站永久搬家，為什麼不建議只用 meta refresh？
3. 自動導向頁面為什麼應該保留可手動點擊的連結？
