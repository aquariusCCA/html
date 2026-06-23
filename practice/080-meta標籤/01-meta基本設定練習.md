---
source_notes:
  - notes/080-meta標籤/01-meta標籤與網頁基本設定.md
topics: [meta, head, 字元編碼, viewport, 文件資訊]
summary: "補全 HTML head 中的基本 meta 設定，並分辨影響顯示的 meta 與文件資訊型 meta。"
---

# meta 基本設定練習

> 動手練習。概念與用法說明見 `notes/080-meta標籤/01-meta標籤與網頁基本設定.md`。

---

## 題目 1（基礎）· 應用練習題

請補全下方 HTML 的 `<head>`，讓它符合一般現代中文網頁的基本設定。

需求：

1. 使用 UTF-8 字元編碼。
2. 讓手機瀏覽器以裝置寬度顯示，初始縮放比例為 1。
3. 設定作者為 `kevin`。
4. 保留原本的 `<title>`。

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  ___
  ___
  ___
  <title>個人作品集</title>
</head>
<body>
  <h1>個人作品集</h1>
</body>
</html>
```

完成標準：

1. 正確加入 `charset="UTF-8"`。
2. 正確加入 `name="viewport"` 與 `content="width=device-width, initial-scale=1.0"`。
3. 正確加入作者資訊型 meta。
4. 所有 meta 都放在 `<head>` 中。

<details>
<summary>參考解答</summary>

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="kevin">
  <title>個人作品集</title>
</head>
<body>
  <h1>個人作品集</h1>
</body>
</html>
```

解題說明：

- `charset="UTF-8"` 告訴瀏覽器用 UTF-8 解讀文件，能支援中文與多種文字。
- `viewport` 設定會影響手機和平板上的顯示方式。
- `author` 是文件資訊型 meta，通常不會直接改變畫面。
- `<meta>` 應放在 `<head>` 裡，因為它提供的是給瀏覽器或工具讀取的後設資訊。

</details>

---

## 題目 2（基礎）· 改錯題

下面這份 HTML 有 2 個 meta 相關問題，請找出並修正。

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <title>手機也要看的中文網頁</title>
</head>
<body>
  <meta charset="UTF-8">
  <h1>手機也要看的中文網頁</h1>
</body>
</html>
```

完成標準：

1. `charset` 放回 `<head>`。
2. 補上適合行動裝置顯示的 `viewport`。
3. 能說明這兩個設定各自解決什麼問題。

<details>
<summary>參考解答</summary>

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>手機也要看的中文網頁</title>
</head>
<body>
  <h1>手機也要看的中文網頁</h1>
</body>
</html>
```

兩個問題說明：

1. `charset` 應放在 `<head>` 裡，讓瀏覽器在解析文件前段時就知道應使用 UTF-8，避免中文被錯誤解讀。
2. 原本缺少 `viewport`。沒有這段設定時，手機瀏覽器可能用接近桌面版的寬度縮放頁面，造成文字過小、不易閱讀。

</details>

---

## 題目 3（基礎）· 分類判斷題

請把下列 meta 分成兩類：「會影響瀏覽器解析或顯示」與「文件資訊型 metadata」。

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="author" content="kevin">
<meta name="generator" content="Visual Studio Code">
<meta name="copyright" content="2023-2027版權所有">
```

完成標準：

1. 正確分類 `charset` 與 `viewport`。
2. 正確分類 `author`、`generator`、`copyright`。
3. 能說明不是每個 meta 都會影響畫面。

<details>
<summary>參考解答</summary>

| 類型 | meta |
| --- | --- |
| 影響瀏覽器解析或顯示 | `charset`、`viewport` |
| 文件資訊型 metadata | `author`、`generator`、`copyright` |

解題說明：

`charset` 會影響瀏覽器如何解讀文字，`viewport` 會影響行動裝置顯示方式。`author`、`generator`、`copyright` 則主要用來描述文件資訊，通常不會直接改變頁面排版或畫面呈現。

</details>
