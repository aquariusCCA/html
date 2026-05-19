---
title: "HTML 基本結構標籤"
category: "HTML"
source: "origin/第03章_HTML基本結構標籤/HTML基本結構標籤.md"
status: "draft"
updated: "2026-05-19"
tags: ["html", "document-structure", "doctype", "lang", "charset", "attributes", "comments"]
---

# HTML 基本結構標籤

## 1. 本章學習目標

讀完本章後，你應該能夠：

- 說明 `<!doctype html>` 的用途與放置位置。
- 使用 `lang` 宣告 HTML 文件的主要語言。
- 使用 `<meta charset="UTF-8">` 指定文件字元編碼。
- 理解 HTML 屬性的基本寫法、常見規則與布林屬性。
- 正確撰寫 HTML 註解，並知道註解不會顯示在頁面內容中。
- 避免常見的文件結構與屬性撰寫錯誤。

## 2. 本章定位

本章是撰寫 HTML 文件時最基礎的結構設定，重點放在一份 HTML 文件開頭常見的宣告與設定，例如文件類型、文件語言、字元編碼，以及元素屬性的寫法。

這些內容通常不會直接產生漂亮的畫面，但會影響瀏覽器如何解析文件、搜尋引擎如何理解頁面、輔助工具如何讀取內容，以及中文或特殊字元是否能正確顯示。

> 來源重點：原始資料主要整理了文件類型聲明、`lang` 語言種類、`charset` 字元集、標籤屬性與 HTML 註解。

## 3. 核心概念

### 3.1 HTML 文件的基本骨架

一份 HTML 文件通常會有固定骨架。瀏覽器會從上到下讀取 HTML，先看到文件類型宣告，再解析 `<html>`、`<head>` 與 `<body>` 等結構。

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>我的第一個網頁</title>
</head>
<body>
  <h1>Hello HTML</h1>
  <p>這是一段網頁內容。</p>
</body>
</html>
```

其中，本章特別關注：

| 結構 | 用途 |
|---|---|
| `<!doctype html>` | 告訴瀏覽器使用 HTML5 的方式解析文件。 |
| `<html lang="zh-Hant">` | 表示整份文件的根元素，並宣告主要語言。 |
| `<meta charset="UTF-8">` | 指定文件使用的字元編碼。 |
| HTML 屬性 | 提供元素額外資訊，例如語言、類型、狀態或資源位置。 |
| HTML 註解 | 給開發者閱讀的說明文字，不會成為頁面可見內容。 |

### 3.2 文件類型宣告 `<!doctype html>`

`<!doctype html>` 是文件類型宣告，作用是告訴瀏覽器這份文件應該以 HTML5 的方式解析。

它必須放在 HTML 文件最前面，位於 `<html>` 元素之前：

```html
<!doctype html>
<html lang="zh-Hant">
  <!-- 其他內容 -->
</html>
```

需要注意的是，`<!doctype html>` 不是一般 HTML 元素。它沒有開始標籤、結束標籤，也不會在頁面中顯示內容。它是給瀏覽器解析文件模式時使用的宣告。

> 注意：若省略或錯放 doctype，瀏覽器可能使用不符合預期的解析模式，進而影響 CSS 盒模型、排版或舊版瀏覽器行為。

### 3.3 `lang` 文件語言

`lang` 屬性用來宣告文件或元素內容使用的語言。最常見的寫法是放在 `<html>` 元素上，表示整份文件的主要語言。

```html
<html lang="zh-Hant">
  <!-- 繁體中文頁面 -->
</html>
```

常見語言代碼如下：

| 寫法 | 意義 |
|---|---|
| `zh-Hant` | 中文，繁體字。 |
| `zh-Hans` | 中文，簡體字。 |
| `zh-CN` | 中文，中國大陸地區常見寫法。 |
| `en` | 英文。 |

`lang` 不只是給開發者看的註記。它也能幫助瀏覽器、搜尋引擎與螢幕閱讀器判斷內容語言。例如螢幕閱讀器可以根據語言選擇較適合的發音方式。

> 補充說明：如果頁面主要是繁體中文，建議使用 `zh-Hant`；若頁面主要是英文，可以使用 `en`。

### 3.4 字元集 `charset`

字元集決定 HTML 文件中的文字要如何被解讀。若字元編碼設定不正確，中文、標點符號或特殊符號可能出現亂碼。

現代 HTML 文件通常使用 `UTF-8`：

```html
<head>
  <meta charset="UTF-8">
</head>
```

原始資料提到的常見字元集包含 `GB2312`、`BIG5`、`GBK` 與 `UTF-8`。其中，`UTF-8` 是現代網頁最常使用的選擇，能涵蓋多數語言所需的字元。

> 注意：`<meta charset="UTF-8">` 通常應放在 `<head>` 前段，讓瀏覽器盡早知道要用什麼編碼解析後續文字。

### 3.5 HTML 標籤屬性

屬性是寫在元素開始標籤中的附加資訊，用來描述元素的設定、狀態或行為。

基本形式如下：

```html
<元素名稱 屬性名="屬性值">內容</元素名稱>
```

例如：

```html
<p class="intro" id="welcome-text">歡迎學習 HTML。</p>
<img src="logo.png" alt="網站標誌">
<input type="text" name="username" disabled>
```

屬性可以出現在雙標籤元素，也可以出現在單標籤元素：

```html
<a href="https://example.com">前往範例網站</a>
<input type="email" name="email">
```

屬性的幾個基本規則：

| 規則 | 說明 |
|---|---|
| 寫在開始標籤內 | 屬性通常放在開始標籤中，例如 `<a href="...">`。 |
| 屬性與標籤名要用空格隔開 | 正確是 `<input type="text">`，不是 `<inputtype="text">`。 |
| 多個屬性用空格隔開 | 例如 `<input type="text" name="username">`。 |
| 屬性順序通常不影響結果 | `<input name="username" type="text">` 也可以被解析。 |
| 屬性名稱建議小寫 | HTML 屬性名稱通常不區分大小寫，但實務上建議統一小寫。 |
| 屬性值建議加雙引號 | 單引號在許多情況也可用，但團隊規範通常會統一使用雙引號。 |
| 不要重複同名屬性 | 重複屬性屬於錯誤寫法，瀏覽器解析結果不應依賴。 |

> 注意：原始範例使用 `<marquee>` 示範屬性寫法，但 `<marquee>` 屬於早期非建議使用的元素。現代開發應使用合適的 HTML 結構與 CSS 動畫處理跑馬燈效果。

### 3.6 布林屬性

有些 HTML 屬性屬於 Boolean attributes（布林屬性）。這類屬性只要出現在元素上，就表示啟用該狀態。

例如：

```html
<input type="text" name="username" disabled>
<input type="checkbox" checked>
```

在這裡，`disabled` 表示這個輸入框被停用，`checked` 表示核取方塊預設被勾選。

> 注意：布林屬性不是「沒有屬性名，只有屬性值」。以 `<input disabled>` 為例，`disabled` 本身就是屬性名，只是它可以省略屬性值。

### 3.7 HTML 註解

HTML 註解是寫給開發者閱讀的說明，不會顯示在頁面的可見內容中。

語法如下：

```html
<!-- 這是一段 HTML 註解 -->
```

註解常用於說明區塊用途、暫時標記待處理事項，或讓其他維護者理解某段結構的目的。

```html
<!-- 網站導覽列 -->
<nav>
  <a href="/">首頁</a>
  <a href="/courses">課程</a>
</nav>
```

> 注意：HTML 註解雖然不會顯示在頁面上，但使用者仍可能透過檢視原始碼或開發者工具看到。不要把密碼、API key、內部機密或敏感資料放進註解。

## 4. 語法與基本用法

### 4.1 建議的 HTML5 基本結構

正式撰寫 HTML 文件時，可以先建立以下基本結構：

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>HTML 基本結構</title>
</head>
<body>
  <h1>HTML 基本結構</h1>
  <p>這是一份使用 HTML5 結構撰寫的文件。</p>
</body>
</html>
```

這份骨架有幾個重點：

- `<!doctype html>` 放在第一行，讓瀏覽器使用 HTML5 解析方式。
- `<html lang="zh-Hant">` 宣告頁面主要語言為繁體中文。
- `<meta charset="UTF-8">` 放在 `<head>` 中，指定文件編碼。
- `<title>` 設定瀏覽器分頁標題。
- `<body>` 放置使用者主要看到的頁面內容。

### 4.2 屬性的正確寫法

正確範例：

```html
<input type="text" name="username" placeholder="請輸入帳號">
```

這個元素有三個屬性：

| 屬性 | 說明 |
|---|---|
| `type="text"` | 表示這是一個文字輸入框。 |
| `name="username"` | 表示表單提交時的欄位名稱。 |
| `placeholder="請輸入帳號"` | 表示輸入框尚未輸入內容時的提示文字。 |

錯誤範例：

```html
<inputtype="text"name="username">
```

問題是標籤名稱、屬性與屬性之間沒有用空格隔開，瀏覽器無法按照預期解析。

修正後：

```html
<input type="text" name="username">
```

### 4.3 重複屬性的問題

不要在同一個元素上寫兩個同名屬性。

錯誤範例：

```html
<input type="text" type="password">
```

這種寫法會造成 HTML 結構不清楚，也不應依賴瀏覽器最後採用哪一個值。

正確範例：

```html
<input type="password" name="password">
```

## 5. 範例說明

### 範例：一份包含基本結構、屬性與註解的 HTML 文件

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <title>課程報名頁</title>
</head>
<body>
  <!-- 頁面主標題 -->
  <h1>HTML 入門課程報名</h1>

  <p class="intro">請填寫以下資料完成報名。</p>

  <form action="/signup" method="post">
    <label for="student-name">姓名</label>
    <input id="student-name" type="text" name="studentName" required>

    <label for="email">Email</label>
    <input id="email" type="email" name="email" required>

    <button type="submit">送出報名</button>
  </form>
</body>
</html>
```

這個範例中：

- `<!doctype html>` 宣告文件使用 HTML5。
- `lang="zh-Hant"` 表示頁面主要語言是繁體中文。
- `<meta charset="UTF-8">` 讓中文內容能用 UTF-8 正確解析。
- `class="intro"` 是屬性，用來補充元素資訊，常被 CSS 或 JavaScript 使用。
- `for` 與 `id` 讓 `<label>` 對應到指定輸入框，有助於可訪問性。
- `required` 是布林屬性，表示欄位必填。
- `<!-- 頁面主標題 -->` 是註解，方便開發者閱讀，不會顯示在頁面中。

## 6. 實務應用場景

### 6.1 建立所有頁面的基本模板

在專案中，幾乎每個 HTML 頁面都需要基本結構。即使使用 Vue、React 或其他框架，最後輸出到瀏覽器的結果仍然會形成 HTML 與 DOM，因此文件語言、字元編碼與結構仍然重要。

### 6.2 避免中文亂碼

若 HTML 文件與伺服器回應使用的編碼不一致，中文可能顯示成亂碼。對一般初學與現代網頁開發而言，統一使用 UTF-8 是最常見、也最容易維護的做法。

### 6.3 改善可訪問性與搜尋理解

`lang` 可以協助螢幕閱讀器判斷朗讀語言，也有助於搜尋引擎理解頁面內容。良好的屬性使用，例如圖片的 `alt`、表單的 `name`、輸入框與 `label` 的關聯，也會影響使用者操作體驗。

### 6.4 提升團隊維護性

屬性寫法一致、註解適量、文件骨架固定，可以讓團隊成員更快理解頁面結構。註解應該解釋「為什麼這樣寫」或標示重要區塊，而不是重複描述一眼就能看懂的程式碼。

## 7. 常見錯誤與修正

| 常見錯誤 | 問題原因 | 修正方式 |
|---|---|---|
| 把 `<!doctype html>` 放在 `<html>` 後面 | doctype 應位於文件最前面 | 將 `<!doctype html>` 放在第一行 |
| 省略 `<meta charset="UTF-8">` | 瀏覽器可能無法正確判斷字元編碼 | 在 `<head>` 前段加入 `<meta charset="UTF-8">` |
| 繁體中文頁面使用不適合的 `lang` | 語言宣告會影響搜尋引擎與輔助工具理解 | 繁體中文頁面可使用 `lang="zh-Hant"` |
| 屬性與標籤名沒有空格 | 瀏覽器無法正確解析標籤與屬性 | 寫成 `<input type="text">` |
| 同一元素重複寫同名屬性 | 屬性結果不清楚，屬於錯誤寫法 | 每個屬性只寫一次 |
| 以為 `disabled="false"` 表示未停用 | 布林屬性只要存在通常就代表啟用該狀態 | 要取消停用就移除 `disabled` 屬性 |
| 把敏感資料寫在註解裡 | 註解仍可能被檢視原始碼的人看到 | 不在 HTML 註解中放密碼、token 或內部資訊 |
| 用註解長期保留大量廢棄程式碼 | 會干擾閱讀與維護 | 使用版本控制管理歷史，不需要的程式碼應移除 |

## 8. 與其他概念的關係

| 相關概念 | 關係 |
|---|---|
| DOM | 瀏覽器會根據 HTML 建立 DOM Tree，屬性會成為元素節點的一部分資訊。 |
| CSS | CSS 常透過 `class`、`id` 或屬性選擇器選取 HTML 元素並套用樣式。 |
| JavaScript | JavaScript 可透過 DOM API 讀取與修改元素屬性，例如 `getAttribute()` 或 `setAttribute()`。 |
| 表單 | `type`、`name`、`value`、`required`、`disabled` 等屬性會影響表單輸入與提交資料。 |
| 可訪問性 | `lang`、`alt`、`label` 關聯等屬性會影響輔助工具理解頁面。 |
| SEO | `lang`、`title`、語意結構與正確編碼有助於搜尋引擎理解頁面內容。 |

## 9. 重點整理

- `<!doctype html>` 是文件類型宣告，不是一般 HTML 標籤，應放在文件最前面。
- `lang` 用來宣告文件或元素的語言，繁體中文頁面常用 `zh-Hant`。
- `<meta charset="UTF-8">` 用來指定文件字元編碼，能避免中文與特殊字元亂碼。
- HTML 屬性寫在開始標籤中，用來提供元素的附加資訊。
- 屬性名稱建議小寫，屬性值建議使用雙引號。
- 布林屬性只要出現通常就代表啟用，例如 `disabled`、`checked`、`required`。
- HTML 註解給開發者閱讀，不會顯示在頁面內容中，但仍可能被檢視原始碼的人看到。

## 10. 自我檢查問題

1. `<!doctype html>` 的作用是什麼？應該放在 HTML 文件的哪裡？
2. `lang="zh-Hant"` 與 `lang="en"` 分別代表什麼？
3. 為什麼現代 HTML 文件通常會使用 `<meta charset="UTF-8">`？
4. HTML 屬性應該寫在開始標籤還是結束標籤？
5. 為什麼不應該在同一個元素上重複寫同名屬性？
6. `<input disabled>` 中的 `disabled` 是什麼類型的屬性？
7. HTML 註解會不會顯示在頁面上？它是否適合存放敏感資訊？

## 11. 延伸補充

> 補充說明：HTML 原始碼不是瀏覽器最後操作的結構。瀏覽器會先解析 HTML，建立 DOM Tree；CSS 與 JavaScript 多數情況下都是根據 DOM 進行樣式套用與互動操作。因此，文件宣告、屬性與基本結構寫得清楚，會讓後續樣式、互動、可訪問性與維護工作更穩定。

> 補充說明：HTML 屬性雖然有些語法彈性，例如部分屬性值在特定條件下可以不加引號，但正式開發建議統一使用小寫屬性名與雙引號屬性值，讓程式碼更一致、更容易被團隊維護。
