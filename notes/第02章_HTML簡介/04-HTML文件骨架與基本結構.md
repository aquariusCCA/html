<!--
source_atomic:
  - atomic/第02章_HTML簡介/06-HTML文件骨架與基本結構標籤.md
-->

# HTML 文件骨架與基本結構

## 學習目標

讀完這篇筆記，你應該能夠：

- 寫出一份基本 HTML5 文件骨架。
- 說明 `html`、`head`、`title`、`body` 各自的作用。
- 理解頁面內容為什麼要放在固定結構中。

## 問題情境

一篇文章通常會有標題、正文與其他輔助資訊。網頁也一樣，不是把內容隨便寫進檔案就好，而是需要一個固定的基本結構。

這個固定結構就是 HTML 文件骨架。它讓瀏覽器知道整份文件從哪裡開始，哪些內容是給瀏覽器或搜尋引擎讀的，哪些內容是要顯示給使用者看的。

## 一句話理解

HTML 文件骨架是每個網頁的基本外框，用來區分文件設定與實際顯示內容。

## 基本 HTML5 骨架

一份常見的 HTML5 文件可以從這個結構開始：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8">
    <title>我的第一個網頁</title>
  </head>
  <body>
    <h1>歡迎來到我的網頁</h1>
    <p>這是一段顯示在頁面上的內容。</p>
  </body>
</html>
```

原始教材中的骨架圖示如下。圖中重點放在基本結構標籤；完整 HTML5 範本通常還會包含 `<!DOCTYPE html>` 與 `<meta charset="UTF-8">`。

![HTML 文件骨架程式碼示例](../../origin/第02章_HTML簡介/assets/images/html-skeleton-img-001-8bc9f3.jpg)

![HTML 骨架標籤說明表格](../../origin/第02章_HTML簡介/assets/images/html-skeleton-img-002-26bafc.jpg)

## 結構拆解

| 結構 | 作用 |
| --- | --- |
| `<!DOCTYPE html>` | 文件類型宣告，讓瀏覽器以標準模式解析 HTML。 |
| `<html>` | 整份 HTML 文件的根元素，所有 HTML 內容都放在裡面。 |
| `<head>` | 放文件設定與描述資訊，通常不直接顯示在頁面主體。 |
| `<meta charset="UTF-8">` | 指定文件編碼，避免中文或特殊字元顯示錯誤。 |
| `<title>` | 設定瀏覽器分頁標題，也會影響書籤與搜尋結果顯示。 |
| `<body>` | 放使用者會在頁面中看到的主要內容。 |

## head 與 body 的分工

`head` 和 `body` 是初學者最容易混淆的兩個區域。

`head` 負責描述文件本身，例如：

- 字元編碼。
- 分頁標題。
- 頁面描述。
- 引入 CSS 或其他資源。

`body` 負責放頁面主體內容，例如：

- 標題。
- 段落。
- 圖片。
- 連結。
- 表格。
- 表單。

簡單判斷方式：

```text
給瀏覽器、搜尋引擎或工具看的設定，多半放在 head。
給使用者在頁面上閱讀或操作的內容，多半放在 body。
```

## HTML 頁面也是文件

HTML 頁面也可以稱為 HTML 文件。本地檔案通常使用 `.html` 或 `.htm` 副檔名。

例如：

```text
index.html
about.html
contact.html
```

當這些文件由伺服器回應給瀏覽器時，伺服器也需要正確告訴瀏覽器這是一份 HTML 文件。入門階段可以先記住：你寫的 `.html` 檔案會被瀏覽器讀取，瀏覽器再把文件結構轉換成頁面。

## 常見錯誤

### 把可見內容放進 head

較不理想：

```html
<head>
  <h1>網站標題</h1>
</head>
```

標題是使用者要看到的內容，應放在 `body` 中：

```html
<body>
  <h1>網站標題</h1>
</body>
```

### 忘記設定字元編碼

如果沒有設定字元編碼，某些環境可能出現亂碼。現代頁面通常會在 `head` 中加入：

```html
<meta charset="UTF-8">
```

### 把 title 當成頁面主標題

`title` 會顯示在瀏覽器分頁或搜尋結果中，不是頁面內容區的主標題。頁面主標題通常使用 `h1` 放在 `body` 中。

## 實務使用場景

新建 HTML 檔案時，可以先建立骨架，再往 `body` 裡加入實際內容：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8">
    <title>個人簡介</title>
  </head>
  <body>
    <h1>王小明</h1>
    <p>我正在學習 HTML。</p>
  </body>
</html>
```

這樣能讓文件從一開始就有清楚結構，後續加入 CSS、JavaScript 或更多內容時也更容易維護。

## 重點整理

- HTML 文件骨架是每個網頁的基本外框。
- `html` 是根元素，`head` 放文件設定，`body` 放頁面可見內容。
- `title` 不是頁面主標題，而是瀏覽器分頁標題。
- 現代 HTML 文件通常會包含 `<!DOCTYPE html>` 與 `<meta charset="UTF-8">`。
- 寫 HTML 時，先建立骨架，再逐步加入頁面內容。

## 自我檢查

- 我是否能默寫基本 HTML5 骨架？
- 我是否能分辨哪些內容該放在 `head`，哪些內容該放在 `body`？
- 我是否知道 `title` 和 `h1` 的差別？
