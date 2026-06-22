---
source_notes:
  - notes/020-HTML簡介/03-HTML文件基本骨架.md
topics: [HTML文件骨架, 文件類型宣告, head與body, 相容模式]
summary: "HTML5 文件骨架的動手練習，含從零撰寫骨架與找出並修正骨架錯誤。"
---

# HTML 文件骨架練習

> 動手練習。概念與用法說明見 `notes/020-HTML簡介/03-HTML文件基本骨架.md`。

---

## 題目 1（基礎）· 應用練習題

從零開始，寫出一份符合以下規格的 HTML5 文件骨架：

- 文件語言：繁體中文（`lang="zh-Hant"`）
- 文字編碼：UTF-8
- 瀏覽器分頁標題列顯示：`我的第一個網頁`
- 頁面正文內容：一個文字為「歡迎！」的最大層級標題

完成標準：
1. `<!DOCTYPE html>` 寫在第一行。
2. `<html>` 標籤帶有 `lang="zh-Hant"` 屬性。
3. `<meta charset="UTF-8">` 寫在 `<head>` 內。
4. `<title>` 內容為「我的第一個網頁」，寫在 `<head>` 內。
5. 標題元素（`<h1>`）及其文字內容寫在 `<body>` 內。

<details>
<summary>參考解答</summary>

```html
<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8">
    <title>我的第一個網頁</title>
  </head>
  <body>
    <h1>歡迎！</h1>
  </body>
</html>
```

解題說明：

- `<!DOCTYPE html>` 必須放在最前面，告訴瀏覽器用 HTML5 標準解析，省略時瀏覽器可能進入相容模式（quirks mode），造成樣式或版面出現非預期差異。
- `lang="zh-Hant"` 寫在 `<html>` 上，讓瀏覽器、搜尋引擎與螢幕報讀器知道這份文件主要語言是繁體中文。
- `<meta charset="UTF-8">` 放在 `<head>` 內，確保中文字元能正確顯示而不變成亂碼。
- `<title>` 的內容顯示在瀏覽器分頁標題列上，不會出現在頁面正文。
- 所有要在畫面上呈現的內容（此處為 `<h1>`）一律寫在 `<body>` 內。

</details>

---

## 題目 2（進階）· 改錯題

下面這份 HTML 骨架有三處錯誤，請找出全部錯誤、說明錯在哪裡，並寫出修正後的版本。

```html
<html lang="zh-Hant">
  <body>
    <meta charset="UTF-8">
    <title>測試頁面</title>
  </body>
  <head>
    <p>這是一段正文。</p>
  </head>
</html>
```

完成標準：
1. 找出三處錯誤並各自說明原因。
2. 寫出修正後的完整骨架。

<details>
<summary>參考解答</summary>

**三處錯誤：**

**錯誤一：漏寫 `<!DOCTYPE html>`**

整份文件開頭沒有文件類型宣告。缺少 `<!DOCTYPE html>` 時，瀏覽器可能以相容模式（quirks mode）解析，導致樣式或版面出現非預期差異，且這類問題在畫面上不容易一眼看出原因。

**錯誤二：`<head>` 與 `<body>` 順序顛倒**

正確結構是 `<head>` 在前、`<body>` 在後，兩者都是 `<html>` 的子元素。此範例把 `<body>` 寫在前、`<head>` 寫在後，違反了文件結構的基本假設，也讓其他開發者難以閱讀。

**錯誤三：內容放錯區塊（`<meta>`、`<title>` 在 `<body>` 裡；`<p>` 在 `<head>` 裡）**

`<meta charset="UTF-8">` 與 `<title>` 是描述文件的設定資訊，應放在 `<head>` 內。`<p>` 是要顯示在畫面上的正文內容，應放在 `<body>` 內。兩者位置互換後，瀏覽器雖然會嘗試自動修正，但產生的 DOM 結構往往不符合預期。

**修正後的版本：**

```html
<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8">
    <title>測試頁面</title>
  </head>
  <body>
    <p>這是一段正文。</p>
  </body>
</html>
```

</details>
