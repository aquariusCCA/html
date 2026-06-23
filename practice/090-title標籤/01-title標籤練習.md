---
source_notes:
  - notes/090-title標籤/01-title標籤的作用與寫法.md
topics: [title標籤, head, 文件標題, h1標籤, title屬性]
summary: "練習正確放置與撰寫 `<title>`，並分辨它和 `<h1>`、`title` 屬性的用途差異。"
---

# title 標籤練習

> 動手練習。概念與用法說明見 `notes/090-title標籤/01-title標籤的作用與寫法.md`。

---

## 題目 1（基礎）· 應用練習題

請補全下方 HTML，讓這份文件的標題顯示為「小明的個人網站」。

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  ___
</head>
<body>
  <h1>小明的個人網站</h1>
  <p>這裡介紹我的作品與學習紀錄。</p>
</body>
</html>
```

完成標準：

1. 使用 `<title>` 標籤。
2. `<title>` 放在 `<head>` 裡。
3. 文件標題文字為「小明的個人網站」。

<details>
<summary>參考解答</summary>

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>小明的個人網站</title>
</head>
<body>
  <h1>小明的個人網站</h1>
  <p>這裡介紹我的作品與學習紀錄。</p>
</body>
</html>
```

解題說明：

`<title>` 是設定整份 HTML 文件標題的標籤，應寫在 `<head>` 中。它常會影響瀏覽器分頁、書籤與搜尋結果中的標題顯示。

</details>

---

## 題目 2（基礎）· 改錯題

下面這份 HTML 把 `<title>` 放錯位置了。請找出問題，並寫出修正後的版本。

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <title>我的網站</title>
  <h1>我的網站</h1>
</body>
</html>
```

完成標準：

1. 說明 `<title>` 不應放在 `<body>`。
2. 修正後 `<title>` 位於 `<head>`。
3. `<h1>` 保留在 `<body>`，作為畫面中的主標題。

<details>
<summary>參考解答</summary>

**錯誤說明：**

`<title>` 屬於文件資訊，應放在 `<head>` 裡；`<body>` 裡放的是使用者在頁面上主要看到的內容。把 `<title>` 寫進 `<body>`，瀏覽器可能會修正或忽略這種錯誤結構。

**修正後：**

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>我的網站</title>
</head>
<body>
  <h1>我的網站</h1>
</body>
</html>
```

解題說明：

`<title>` 設定文件標題；`<h1>` 顯示頁面正文中的主標題。兩者文字可以相同，也可以不同，但位置與責任不同。

</details>

---

## 題目 3（基礎）· 分辨題

請分辨下列三種寫法的用途，並填入對應說明。

```html
<title>HTML title 標籤教學</title>
<h1>HTML title 標籤教學</h1>
<abbr title="HyperText Markup Language">HTML</abbr>
```

| 寫法 | 用途 |
| --- | --- |
| `<title>` | ___ |
| `<h1>` | ___ |
| `title` 屬性 | ___ |

完成標準：

1. 說明 `<title>` 是整份 HTML 文件標題。
2. 說明 `<h1>` 是頁面正文中的主標題。
3. 說明 `title` 屬性是補充某個元素的提示資訊，不是 `<title>` 標籤。

<details>
<summary>參考解答</summary>

| 寫法 | 用途 |
| --- | --- |
| `<title>` | 設定整份 HTML 文件的標題，常影響瀏覽器分頁、書籤與搜尋結果標題。 |
| `<h1>` | 顯示在頁面正文中的主標題。 |
| `title` 屬性 | 補充某個元素的提示資訊，例如說明縮寫的完整名稱；不能用來設定整份文件標題。 |

解題說明：

`<title>` 是標籤，且應放在 `<head>` 裡；`title` 屬性是屬性，可以出現在某些元素上。兩者名稱相似，但用途完全不同。

</details>

---

## 題目 4（進階）· 情境撰寫題

請根據情境，從候選標題中選出較好的 `<title>`，或改寫成更清楚的版本。

**(A)** 一篇介紹 HTML 圖片標籤與 alt 文字的教學頁：

```html
<title>教學</title>
<title>HTML img 標籤：插入圖片與 alt 文字</title>
```

**(B)** 一個個人網站的作品集頁面，網站名稱是「小明的個人網站」：

```html
<title>首頁</title>
<title>作品集 - 小明的個人網站</title>
```

**(C)** 請把下面這個堆砌關鍵字的標題改成自然可讀的版本：

```html
<title>HTML HTML教學 HTML入門 HTML標籤 HTML學習</title>
```

完成標準：

1. 選出的標題要清楚描述目前頁面主題。
2. 若網站有多個頁面，標題能和其他頁面區分。
3. 改寫後不要堆砌關鍵字。

<details>
<summary>參考解答</summary>

**(A) 較好的選擇：**

```html
<title>HTML img 標籤：插入圖片與 alt 文字</title>
```

`教學` 太籠統，使用者無法知道頁面主題。

**(B) 較好的選擇：**

```html
<title>作品集 - 小明的個人網站</title>
```

這個標題同時說明頁面主題與網站名稱，比 `首頁` 更容易在分頁或書籤中辨識。

**(C) 可改寫為：**

```html
<title>HTML 標籤入門教學</title>
```

解題說明：

好的 `<title>` 應清楚、具體、自然可讀，能反映目前頁面的主題。它不是用來堆砌關鍵字的地方。

</details>
