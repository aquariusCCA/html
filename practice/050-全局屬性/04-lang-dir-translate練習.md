---
source_notes:
  - notes/050-全局屬性/03-lang-dir-translate-語言方向與翻譯控制.md
topics: [lang, dir, translate, 多語內容, 內容語意]
summary: "為多語頁面正確標示主語言、局部外語與翻譯控制，並修正缺少 lang 與誤用 dir 做視覺對齊的常見錯誤。"
---

# lang、dir、translate 練習

> 動手練習。概念與用法說明見 `notes/050-全局屬性/03-lang-dir-translate-語言方向與翻譯控制.md`。

---

## 題目 1（基礎）· 應用練習題

你正在建立一個主要以**繁體中文**撰寫的頁面，其中引用了一本英文書名，且這個書名**不應被瀏覽器翻譯工具自動翻譯**。

請補全下方 HTML，加上所有必要的語言屬性：

1. 在 `<html>` 上標示整份文件的主要語言為繁體中文（`zh-Hant`）。
2. 在書名的 `<cite>` 元素上標示語言為英文（`en`），並防止翻譯。

```html
<html ___>
<head>
  <meta charset="UTF-8">
  <title>閱讀筆記</title>
</head>
<body>
  <p>
    這本書的英文標題是
    <cite ___ ___>How Far Can You Go?</cite>，值得一讀。
  </p>
</body>
</html>
```

完成標準：`<html>` 上有 `lang="zh-Hant"`，`<cite>` 上有 `lang="en"` 和 `translate="no"`，共三個屬性全部到位。

<details>
<summary>參考解答</summary>

```html
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>閱讀筆記</title>
</head>
<body>
  <p>
    這本書的英文標題是
    <cite lang="en" translate="no">How Far Can You Go?</cite>，值得一讀。
  </p>
</body>
</html>
```

解題說明：

- `lang="zh-Hant"` 放在 `<html>` 上，標示整份文件主要語言為繁體中文，影響螢幕報讀器發音、搜尋引擎語言判斷與瀏覽器翻譯行為。
- `lang="en"` 放在 `<cite>` 上，標示局部內容使用英文，覆蓋文件層級的語言設定。
- `translate="no"` 放在 `<cite>` 上，告訴瀏覽器翻譯工具不要翻譯這個書名。書名、品牌名、專有名詞是 `translate="no"` 的典型使用情境。

</details>

---

## 題目 2（基礎）· 改錯題

下面這段 HTML 有 **2 個問題**，請找出並修正或說明改善方向。

```html
<html>
<head>
  <meta charset="UTF-8">
  <title>台灣旅遊指南</title>
</head>
<body>
  <h1>台灣旅遊指南</h1>
  <p dir="rtl">本網站介紹台灣各地景點，歡迎參考。</p>
</body>
</html>
```

完成標準：兩處問題全部找出，提供正確修正方案，並能說明每一處的問題所在。

<details>
<summary>參考解答</summary>

```html
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>台灣旅遊指南</title>
</head>
<body>
  <h1>台灣旅遊指南</h1>
  <p class="align-right">本網站介紹台灣各地景點，歡迎參考。</p>
</body>
</html>
```

（搭配 CSS：`.align-right { text-align: right; }`）

兩個問題說明：

1. **`<html>` 缺少 `lang` 屬性** → 沒有語言標示時，瀏覽器、搜尋引擎、螢幕報讀器都少了判斷內容語言的依據。這是以繁體中文為主的頁面，應補上 `lang="zh-Hant"`。

2. **`dir="rtl"` 誤用於視覺靠右** → `dir` 用來描述**內容語言本身的方向**（例如阿拉伯文、希伯來文是由右至左書寫）。這段中文內容只是想讓文字靠右顯示，屬於純視覺排版需求，應改用 CSS 的 `text-align: right`，而不是 `dir="rtl"`。誤用 `dir="rtl"` 會讓輔助工具誤以為這段文字的語言方向是從右到左。

</details>
