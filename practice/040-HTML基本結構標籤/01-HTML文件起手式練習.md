---
source_notes:
  - notes/040-HTML基本結構標籤/01-HTML文件起手式.md
topics: [HTML文件骨架, DOCTYPE, lang, charset]
summary: "動手寫出 HTML 文件起手式，並修正 DOCTYPE、lang、charset 常見錯誤。"
---

# HTML 文件起手式練習

> 動手練習。概念與用法說明見 `notes/040-HTML基本結構標籤/01-HTML文件起手式.md`。

---

## 題目 1（基礎）· 應用練習題

你正在為一個主要以**繁體中文**撰寫的網站建立第一個頁面。請從空白開始，寫出一份正確的 HTML 文件骨架，需包含以下四個要素：

1. HTML5 文件類型聲明
2. 語言標示：繁體中文（台灣）
3. 字元編碼宣告：UTF-8
4. 頁面標題：「我的第一個網頁」

完成標準：四個要素全部到位，且結構順序正確（DOCTYPE 在最前面，charset 在 `<head>` 內）。

<details>
<summary>參考解答</summary>

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>我的第一個網頁</title>
</head>
<body>
  <!-- 頁面內容寫在這裡 -->
</body>
</html>
```

解題說明：

- `<!DOCTYPE html>` 必須放在文件**最前面**、`<html>` 之前，告訴瀏覽器以 HTML5 標準模式解析。
- `lang="zh-TW"` 寫在 `<html>` 標籤上，標示整份文件的主要語言為繁體中文（台灣）。
- `<meta charset="UTF-8">` 寫在 `<head>` 內，讓瀏覽器知道用 UTF-8 解讀文字，避免中文亂碼。
- `<title>` 提供頁面標題，顯示在瀏覽器分頁上。

</details>

---

## 題目 2（基礎）· 改錯題

下面這段 HTML 有 **3 個錯誤**，請找出並全部修正。

```html
<html lang="en">
  <!DOCTYPE html>
  <head>
    <title>我的網站</title>
  </head>
  <body>
    <h1>歡迎來到繁體中文網站</h1>
  </body>
</html>
```

完成標準：三處錯誤全部修正，且能說明每一處為什麼有問題。

<details>
<summary>參考解答</summary>

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>我的網站</title>
</head>
<body>
  <h1>歡迎來到繁體中文網站</h1>
</body>
</html>
```

三個錯誤說明：

1. **`<!DOCTYPE html>` 放在 `<html>` 裡面** → 應移到文件最前面、`<html>` 之前。放在裡面時瀏覽器無法在解析開始前就取得類型宣告，失去聲明的意義。

2. **缺少 `<meta charset="UTF-8">`** → 沒有字元編碼宣告時，瀏覽器可能猜錯編碼，導致中文字變成亂碼。應在 `<head>` 內補上這行。

3. **`lang="en"` 與頁面內容語言不符** → 頁面內容是繁體中文，lang 卻標示為英文（en），會讓螢幕報讀器用英文發音、翻譯工具誤判語言。應改為 `lang="zh-TW"`。

</details>
