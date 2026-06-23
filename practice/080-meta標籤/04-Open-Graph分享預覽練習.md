---
source_notes:
  - notes/080-meta標籤/04-Open-Graph社群分享設定.md
topics: [Open Graph, 社群分享, 分享預覽, og:image, og:url]
summary: "補全 Open Graph 分享預覽設定，並修正 og:image、og:url 與用途混淆的常見錯誤。"
---

# Open Graph 分享預覽練習

> 動手練習。概念與用法說明見 `notes/080-meta標籤/04-Open-Graph社群分享設定.md`。

起始檔：[`starter.html`](./04-Open-Graph分享預覽練習-starter/starter.html)

---

## 題目 1（基礎）· 應用練習題

請依需求補全 Open Graph meta。

需求：

1. 分享標題：「HTML meta 標籤教學」
2. 分享描述：「學習 meta 基本設定、搜尋摘要與社群分享預覽。」
3. 分享圖片：`https://example.com/images/meta-og-cover.jpg`
4. 分享圖片替代描述：「HTML meta 標籤教學封面圖」
5. 正式網址：`https://example.com/html-meta`
6. 內容類型：`website`

```html
___
___
___
___
___
___
```

完成標準：

1. 使用 `property="og:*"`，不是 `name="og:*"`。
2. 正確設定 `og:title`、`og:description`、`og:image`、`og:image:alt`、`og:url`、`og:type`。
3. `og:image` 使用可公開存取的完整 URL。

<details>
<summary>參考解答</summary>

```html
<meta property="og:title" content="HTML meta 標籤教學">
<meta property="og:description" content="學習 meta 基本設定、搜尋摘要與社群分享預覽。">
<meta property="og:image" content="https://example.com/images/meta-og-cover.jpg">
<meta property="og:image:alt" content="HTML meta 標籤教學封面圖">
<meta property="og:url" content="https://example.com/html-meta">
<meta property="og:type" content="website">
```

解題說明：

Open Graph 標籤通常使用 `property="og:*"`。其中 `og:image` 應使用外部平台能公開抓取的完整 URL；若設定分享圖片，也建議補上 `og:image:alt`。

</details>

---

## 題目 2（基礎）· 改錯題

下面這段 Open Graph 設定有 3 個問題，請找出並修正。

```html
<meta name="og:title" content="我的精彩網頁">
<meta property="og:image" content="./images/cover.jpg">
<meta property="og:description" content="全網最強的神奇頁面，點了就知道。">
```

完成標準：

1. 修正 `og:title` 的屬性寫法。
2. 修正 `og:image` 為完整 URL。
3. 把 `og:description` 改成準確描述頁面內容的文字。

<details>
<summary>參考解答</summary>

```html
<meta property="og:title" content="我的精彩網頁">
<meta property="og:image" content="https://example.com/images/cover.jpg">
<meta property="og:description" content="這是一個介紹 HTML meta 標籤與 Open Graph 的教學頁面。">
```

三個問題說明：

1. Open Graph 常見寫法是 `property="og:*"`，不是 `name="og:*"`。
2. 社群平台需要從外部抓取圖片，正式網站的 `og:image` 通常應使用完整 URL。
3. `og:description` 應準確描述頁面內容，不應寫成和內容不一致的誇張廣告詞。

</details>

---

## 題目 3（進階）· 實作任務

請打開起始檔 [`starter.html`](./04-Open-Graph分享預覽練習-starter/starter.html)，完成以下任務：

1. 補上缺少的核心 Open Graph 欄位。
2. 修正 `og:image` 的相對路徑問題。
3. 補上分享圖片替代描述。
4. 讓搜尋摘要與社群分享描述各自使用合適的 meta。

完成標準：

1. `<title>` 保留作為瀏覽器分頁標題。
2. `<meta name="description">` 使用 `name`，作為搜尋摘要候選。
3. Open Graph 使用 `property="og:*"`。
4. `og:image` 使用完整 URL。
5. `og:url` 使用頁面正式網址。

<details>
<summary>參考解答</summary>

起始檔可改成下列 `<head>`：

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML meta 標籤教學</title>
  <meta name="description" content="學習 HTML meta 標籤的基本用途，包含顯示設定、搜尋摘要與社群分享預覽。">

  <meta property="og:title" content="HTML meta 標籤教學">
  <meta property="og:description" content="用實例學會 meta 基本設定、搜尋摘要與 Open Graph 分享預覽。">
  <meta property="og:image" content="https://example.com/images/meta-og-cover.jpg">
  <meta property="og:image:alt" content="HTML meta 標籤教學封面圖">
  <meta property="og:url" content="https://example.com/html-meta">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="HTML 教學筆記">
  <meta property="og:locale" content="zh_TW">
</head>
```

解題說明：

- `<title>`、`description` 與 Open Graph 都放在 `<head>`，但用途不同。
- `description` 是搜尋摘要候選來源之一。
- `og:title`、`og:description`、`og:image` 等欄位控制社群分享預覽。
- `og:image` 不適合只寫相對路徑，正式網站應提供可公開存取的完整 URL。

</details>
