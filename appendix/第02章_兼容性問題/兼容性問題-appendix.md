# HTML 兼容性問題 - 附錄查表資料

## Appendix 規劃

| 附錄區塊 | 對應 notes 知識點 | 產出形式 | 是否有足夠來源 |
|---|---|---|---|
| 1. 附錄定位 | 本章定位、本章學習目標、舊版瀏覽器相容處理範圍 | 範圍與使用方式 | 是 |
| 2. 附錄索引 | 全章可查找資料類型 | 索引表 | 是 |
| 3. 名詞表 | 瀏覽器兼容性、文件模式、`X-UA-Compatible`、雙核瀏覽器、`renderer`、`html5shiv`、IE 條件註解等 | 術語查表 | 是 |
| 4. HTML 元素表 | `meta`、`script`、HTML5 語意化元素、範例文件骨架元素 | 元素用途表 | 是 |
| 5. 屬性表 | `charset`、`http-equiv`、`content`、`name`、`src`、`lang` | 屬性與常見值查表 | 是 |
| 6. API / 方法表 | notes 沒有列出具體 API、方法、事件或回傳值 | 不生成並標示原因 | 否 |
| 7. 指令表 | notes 沒有 CLI 指令 | 不生成並標示原因 | 否 |
| 8. 設定檔範例 | notes 沒有設定檔內容 | 不生成並標示原因 | 否 |
| 9. 常用片段 | 相容 meta、`html5shiv` 條件載入、完整 head 範例、IE 條件註解判斷 | 最小可用 HTML 片段 | 是 |
| 10. 錯誤速查表 | 常見錯誤與修正、移除舊相容程式碼前的檢查、畫面差異調查 | 錯誤原因與修正方向表 | 是 |
| 11. 相似概念對照表 | `X-UA-Compatible` / `renderer` / `html5shiv`、IE 條件註解比較符號、舊版相容處理與現代開發慣例 | 對照表 | 是 |
| 12. 來源索引 | notes 小節標題 | 回查索引表 | 是 |
| 13. 維護備註 | notes 與 appendix 同步維護需求 | 維護清單 | 是 |

---

## 1. 附錄定位

### 適用範圍

本附錄對應 `notes/第02章_兼容性問題/兼容性問題.md`，整理本章提到的 HTML 舊版瀏覽器相容處理、IE 文件模式、雙核瀏覽器渲染提示、`html5shiv`、IE 條件註解、常見錯誤與查核重點。

### 使用方式

- 查找舊版瀏覽器相容處理名詞時，優先使用第 3 節。
- 查找 `meta`、`script` 與 HTML5 語意化元素相關寫法時，使用第 4 至第 5 節。
- 需要複用最小相容片段時，查第 9 節。
- 遇到舊專案相容程式碼是否能保留或移除的問題時，查第 10 至第 12 節。

---

## 2. 附錄索引

| 區塊 | 內容類型 | 適合查找的問題 |
|---|---|---|
| 3. 名詞表 | 概念與術語 | 這個名詞是什麼？ |
| 4. HTML 元素表 | 元素與用途 | 這個元素在本章相容處理中扮演什麼角色？ |
| 5. 屬性表 | 屬性與值 | 這個屬性用在哪個相容設定？ |
| 6. API / 方法表 | API、方法、事件 | 本章是否提到具體 API？ |
| 7. 指令表 | CLI 指令 | 本章是否提到指令？ |
| 8. 設定檔範例 | 設定片段 | 本章是否提到設定檔？ |
| 9. 常用片段 | 最小 HTML 片段 | 這個相容場景的最小寫法是什麼？ |
| 10. 錯誤速查表 | 常見錯誤 | 出錯時優先檢查什麼？ |
| 11. 相似概念對照表 | 相似概念比較 | A 和 B 差在哪？ |
| 12. 來源索引 | notes 回查資訊 | 這個附錄條目來自哪個小節？ |
| 13. 維護備註 | 後續維護規則 | notes 更新後要同步檢查什麼？ |

---

## 3. 名詞表

| 名詞 | 英文 | 簡要定義 | 用途 | 注意事項 | 來源 |
|---|---|---|---|---|---|
| 瀏覽器兼容性問題 | Browser compatibility issue | 同一份 HTML、CSS 或 JavaScript 在不同瀏覽器、版本或模式下呈現或執行不一致。 | 調查跨瀏覽器顯示差異與舊系統問題。 | 差異可能來自特性支援、標準實作、文件模式或渲染內核切換。 | 3.1 什麼是瀏覽器兼容性問題 |
| 文件模式 | Document mode | 舊版 IE 用來決定如何解釋 HTML、CSS 與部分瀏覽器行為的渲染模式。 | 判斷 IE 是否使用預期的解析方式。 | 文件模式不同，頁面行為可能不同。 | 3.2 文件模式與 `X-UA-Compatible` |
| 標準模式 | Standards mode | notes 提到的 IE 文件模式之一，代表較符合標準的解析方向。 | 與舊版相容模式做區分。 | notes 未展開完整判斷規則。 | 3.1 什麼是瀏覽器兼容性問題 |
| 舊版相容模式 | Compatibility mode | notes 提到的 IE 文件模式之一，可能使瀏覽器採用較舊的行為。 | 調查舊版 IE 畫面或行為異常。 | `IE=edge` 的重點是避免 IE 落入較舊文件模式。 | 3.1 什麼是瀏覽器兼容性問題、3.2 文件模式與 `X-UA-Compatible` |
| Internet Explorer | IE | 本章主要討論的舊版瀏覽器相容對象。 | 分析 `X-UA-Compatible`、`html5shiv` 與 IE 條件註解。 | IE10 不支援 notes 中提到的條件註解。 | 2. 本章定位、3.5 IE 條件註解 |
| `X-UA-Compatible` | X-UA-Compatible | 面向 Internet Explorer 的相容性設定。 | 提示支援此設定的 IE 使用指定文件模式。 | 不能補齊舊版 IE 原本不支援的所有 HTML5、CSS3 或 JavaScript 功能。 | 3.2 文件模式與 `X-UA-Compatible` |
| `IE=edge` | IE=edge | `X-UA-Compatible` 常見值，表示盡量使用該 IE 版本可用的最新文件模式。 | 避免 IE 進入較舊文件模式。 | 不是萬能的相容性修復工具。 | 3.2 文件模式與 `X-UA-Compatible` |
| 雙核瀏覽器 | Dual-engine browser | 同時提供兩種渲染內核的瀏覽器。 | 理解為何同一頁面可能因內核切換而不同。 | notes 指出部分瀏覽器會依網站、使用者設定或相容模式切換。 | 3.3 雙核瀏覽器與 `renderer` |
| 渲染內核 | Rendering engine | 瀏覽器用來解析與渲染頁面的核心引擎。 | 判斷頁面由 WebKit/Blink 或 Trident 類型內核處理。 | notes 只列出與雙核瀏覽器情境相關的內核類型。 | 3.3 雙核瀏覽器與 `renderer` |
| WebKit / Blink | WebKit / Blink | notes 提到的現代渲染內核類型。 | 搭配 `renderer` 理解部分雙核瀏覽器的內核提示。 | `renderer` 只對支援此寫法的特定瀏覽器有意義。 | 3.3 雙核瀏覽器與 `renderer` |
| Trident | Trident | notes 提到的 IE 渲染內核。 | 區分雙核瀏覽器中的 IE 內核與現代渲染內核。 | 本章未展開 Trident 的完整行為。 | 3.3 雙核瀏覽器與 `renderer` |
| `renderer` | renderer | 用來提示部分雙核瀏覽器優先使用指定內核的 meta 標籤名稱。 | 提示支援此寫法的雙核瀏覽器優先使用 WebKit 內核。 | 不是 HTML 標準中的通用能力。 | 3.3 雙核瀏覽器與 `renderer` |
| `html5shiv` | html5shiv | 讓 IE6、IE7、IE8 能夠建立並識別部分 HTML5 新元素的 JavaScript。 | 支援舊版 IE 處理 HTML5 語意化元素。 | 不等於完整支援 HTML5，也不能補齊所有新 API、表單功能或 CSS 能力。 | 3.4 `html5shiv` 與 HTML5 語意化元素 |
| HTML5 語意化元素 | HTML5 semantic elements | HTML5 新增、用來描述頁面區塊意義的元素。 | 建立更清楚的頁面結構。 | IE6、IE7、IE8 可能無法正確識別部分新元素。 | 3.4 `html5shiv` 與 HTML5 語意化元素、5. 範例說明 |
| IE 條件註解 | IE conditional comments | Internet Explorer 曾支援的特殊註解語法。 | 只針對特定版本 IE 載入相容性程式碼。 | 對非 IE 瀏覽器看起來只是一般 HTML 註解；IE10 不支援。 | 3.5 IE 條件註解 |
| Polyfill | Polyfill | notes 將 `html5shiv` 視為一種面向舊版 IE 的相容補丁。 | 理解相容處理可能需要補足缺少能力。 | `html5shiv` 只處理特定元素識別問題。 | 8. 與其他概念的關係 |
| Fallback | Fallback | notes 在調查畫面差異時提到的替代處理方向。 | 針對不支援的特性設計替代寫法。 | notes 未提供具體 fallback 實作。 | 6.3 調查畫面差異、11. 延伸補充 |
| DOM | Document Object Model | 瀏覽器解析 HTML 後建立的結構。 | 說明舊版瀏覽器不認識新元素時，DOM 與樣式套用可能受影響。 | 本章未列出具體 DOM API。 | 3.1 什麼是瀏覽器兼容性問題、8. 與其他概念的關係 |
| 瀏覽器支援範圍 | Browser support scope | 專案需要支援的瀏覽器與版本範圍。 | 決定是否保留 `html5shiv` 與舊 IE 相容寫法。 | notes 未提供特定專案的支援版本，需要依專案確認。 | 6.2 判斷能否移除舊相容程式碼、11. 延伸補充 |

---

## 4. HTML 元素表

| 元素 | 用途 | 常用屬性 | 使用情境 | 最小範例 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|
| `html` | 整份 HTML 文件的根元素。 | `lang` | 相容設定完整範例中的文件外層。 | `<html lang="zh-Hant">...</html>` | notes 主要用於完整範例，未展開 `html` 元素教學。 | 4.1 建議放置位置、5. 範例說明 |
| `head` | 放置文件中繼資訊與相容設定。 | 原筆記未列出 `head` 自身屬性。 | 放置 `charset`、`X-UA-Compatible`、`renderer`、`title` 與條件載入腳本。 | `<head>...</head>` | 與瀏覽器解析、渲染模式有關的 meta 通常放在 `<head>` 前段。 | 4.1 建議放置位置 |
| `meta` | 提供文件中繼資訊或相容提示。 | `charset`、`http-equiv`、`content`、`name` | 設定字元編碼、提示 IE 文件模式、提示雙核瀏覽器內核。 | `<meta http-equiv="X-UA-Compatible" content="IE=edge">` | `renderer` 不是通用標準；`IE=edge` 也不是完整相容修復。 | 3.2 文件模式與 `X-UA-Compatible`、3.3 雙核瀏覽器與 `renderer`、4.1 建議放置位置 |
| `title` | 設定文件標題。 | 原筆記未列出 | 出現在完整相容設定範例。 | `<title>兼容性設定範例</title>` | 本章未展開 `title` 的其他用途。 | 4.1 建議放置位置、5. 範例說明 |
| `script` | 載入 JavaScript 檔案。 | `src` | 透過 IE 條件註解載入 `html5shiv.min.js`。 | `<script src="./js/html5shiv.min.js"></script>` | notes 建議只讓低於 IE9 的 IE 載入 `html5shiv`。 | 3.5 IE 條件註解、4.2 使用 `html5shiv` |
| `body` | 放置頁面可見內容。 | 原筆記未列出 | 完整範例中的頁面主體。 | `<body>...</body>` | 本章未展開 `body` 的其他用途。 | 4.1 建議放置位置、5. 範例說明 |
| `header` | HTML5 語意化元素，用於頁首區域。 | 原筆記未列出 | 範例中包住網站標題。 | `<header><h1>網站標題</h1></header>` | IE6、IE7、IE8 可能需要 `html5shiv` 才能較好識別 HTML5 新元素。 | 3.4 `html5shiv` 與 HTML5 語意化元素、5. 範例說明 |
| `nav` | HTML5 語意化元素。 | 原筆記未列出 | notes 將它列為 HTML5 新增語意化元素之一。 | 原筆記未提供最小範例。 | notes 未展開 `nav` 的具體頁面用途。 | 3.4 `html5shiv` 與 HTML5 語意化元素 |
| `main` | HTML5 語意化元素，用於主要內容區。 | 原筆記未列出 | 範例中包住文章主要內容。 | `<main><article>...</article></main>` | notes 補充非常舊的瀏覽器可能不認識 `main`，需搭配實測確認。 | 3.4 `html5shiv` 與 HTML5 語意化元素、5. 範例說明 |
| `section` | HTML5 語意化元素。 | 原筆記未列出 | notes 將它列為 HTML5 新增語意化元素之一。 | 原筆記未提供最小範例。 | notes 未展開 `section` 的具體頁面用途。 | 3.4 `html5shiv` 與 HTML5 語意化元素 |
| `article` | HTML5 語意化元素，用於文章內容區。 | 原筆記未列出 | 範例中包住文章標題與段落。 | `<article><h2>文章標題</h2></article>` | 在舊版 IE 中可能需要 `html5shiv` 協助識別。 | 3.4 `html5shiv` 與 HTML5 語意化元素、5. 範例說明 |
| `aside` | HTML5 語意化元素。 | 原筆記未列出 | notes 將它列為 HTML5 新增語意化元素之一。 | 原筆記未提供最小範例。 | notes 未展開 `aside` 的具體頁面用途。 | 3.4 `html5shiv` 與 HTML5 語意化元素 |
| `footer` | HTML5 語意化元素，用於頁尾區域。 | 原筆記未列出 | 範例中放頁尾資訊。 | `<footer><p>頁尾資訊</p></footer>` | 在舊版 IE 中可能需要 `html5shiv` 協助識別。 | 3.4 `html5shiv` 與 HTML5 語意化元素、5. 範例說明 |
| `h1` | 表示主要標題。 | 原筆記未列出 | 範例中作為網站標題。 | `<h1>網站標題</h1>` | 本章未展開標題層級規則。 | 4.1 建議放置位置、5. 範例說明 |
| `h2` | 表示次級標題。 | 原筆記未列出 | 範例中作為文章標題。 | `<h2>文章標題</h2>` | 本章未展開標題層級規則。 | 5. 範例說明 |
| `p` | 表示段落文字。 | 原筆記未列出 | 範例中放文章內容或頁尾資訊。 | `<p>這是一段使用 HTML5 語意化元素撰寫的內容。</p>` | 本章未展開段落元素規則。 | 5. 範例說明 |

---

## 5. 屬性表

| 屬性 | 適用元素 | 常見值 | 用途 | 範例 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|
| `charset` | `meta` | `UTF-8` | 指定文件字元編碼。 | `<meta charset="UTF-8">` | notes 將它放在 `<head>` 前段範例中。 | 4.1 建議放置位置、5. 範例說明 |
| `http-equiv` | `meta` | `X-UA-Compatible` | 宣告 IE 相容性設定項目。 | `<meta http-equiv="X-UA-Compatible" content="IE=edge">` | 面向 Internet Explorer，不是所有瀏覽器的通用相容能力。 | 3.2 文件模式與 `X-UA-Compatible`、4.1 建議放置位置 |
| `content` | `meta` 搭配 `http-equiv="X-UA-Compatible"` | `IE=edge` | 指定 IE 盡量使用最新可用文件模式。 | `<meta http-equiv="X-UA-Compatible" content="IE=edge">` | 不會讓舊版 IE 支援它原本不支援的所有功能。 | 3.2 文件模式與 `X-UA-Compatible` |
| `name` | `meta` | `renderer` | 宣告特定 meta 設定名稱。 | `<meta name="renderer" content="webkit">` | `renderer` 主要面向特定雙核瀏覽器。 | 3.3 雙核瀏覽器與 `renderer` |
| `content` | `meta` 搭配 `name="renderer"` | `webkit` | 提示支援此寫法的雙核瀏覽器優先使用 WebKit 內核。 | `<meta name="renderer" content="webkit">` | 不是 HTML 標準中的通用能力。 | 3.3 雙核瀏覽器與 `renderer` |
| `src` | `script` | `./js/html5shiv.min.js` | 指定要載入的 JavaScript 檔案位置。 | `<script src="./js/html5shiv.min.js"></script>` | 建議搭配 IE 條件註解，只讓低於 IE9 的 IE 載入。 | 3.5 IE 條件註解、4.2 使用 `html5shiv` |
| `lang` | `html` | `zh-Hant` | 宣告文件語言。 | `<html lang="zh-Hant">` | 本章只在完整 HTML 範例中使用。 | 4.1 建議放置位置 |

---

## 6. API / 方法表

原筆記資訊不足，暫不生成此區塊。

此 notes 內容不足以生成「API / 方法表」，原因：本章只提到 HTML、CSS、JavaScript、DOM、polyfill 與相容性處理的關係，沒有列出具體 API、方法、事件、語法或回傳值。

---

## 7. 指令表

原筆記資訊不足，暫不生成此區塊。

此 notes 內容不足以生成「指令表」，原因：本章沒有提供任何 CLI 指令、參數或執行範例。

---

## 8. 設定檔範例

原筆記資訊不足，暫不生成此區塊。

此 notes 內容不足以生成「設定檔範例」，原因：本章提供的是 HTML `meta` 與條件註解片段，沒有提供設定檔、設定欄位、修改位置或設定檔格式。

---

## 9. 常用片段

### 9.1 IE 文件模式提示

| 項目 | 說明 |
|---|---|
| 使用情境 | 需要提示支援此設定的 IE 使用最新可用文件模式。 |
| 使用前提 | 專案仍需處理舊版 IE 文件模式問題。 |
| 來源 | 3.2 文件模式與 `X-UA-Compatible`、4.1 建議放置位置 |

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

### 注意事項

- `IE=edge` 主要避免 IE 落入較舊文件模式。
- 它不能補齊所有 HTML5、CSS3 或 JavaScript 功能。

### 9.2 雙核瀏覽器 WebKit 內核提示

| 項目 | 說明 |
|---|---|
| 使用情境 | 需要提示部分雙核瀏覽器優先使用 WebKit 內核。 |
| 使用前提 | 目標環境確實包含支援 `renderer` 的雙核瀏覽器。 |
| 來源 | 3.3 雙核瀏覽器與 `renderer`、4.1 建議放置位置 |

```html
<meta name="renderer" content="webkit">
```

### 注意事項

- `renderer` 不是 HTML 標準中的通用能力。
- 現代專案不應把它當成所有瀏覽器都會遵守的標準 meta 標籤。

### 9.3 相容 meta 放置在 head 前段

| 項目 | 說明 |
|---|---|
| 使用情境 | 需要讓瀏覽器盡早讀取編碼與相容模式提示。 |
| 使用前提 | HTML 文件中可編輯 `<head>` 區塊。 |
| 來源 | 4.1 建議放置位置 |

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="renderer" content="webkit">
  <title>舊版瀏覽器相容處理範例</title>
</head>
```

### 注意事項

- 與瀏覽器解析、渲染模式有關的 meta 通常放在 `<head>` 前段。
- 是否保留這些設定應根據專案支援範圍判斷。

### 9.4 低於 IE9 才載入 html5shiv

| 項目 | 說明 |
|---|---|
| 使用情境 | 專案需要支援 IE8 與更舊版本，且頁面使用 HTML5 語意化元素。 |
| 使用前提 | 專案有 `./js/html5shiv.min.js` 這類相容腳本檔案。 |
| 來源 | 3.5 IE 條件註解、4.2 使用 `html5shiv`、7. 常見錯誤與修正 |

```html
<!--[if lt IE 9]>
<script src="./js/html5shiv.min.js"></script>
<![endif]-->
```

### 注意事項

- 現代瀏覽器不會載入這段舊版相容腳本。
- `html5shiv` 主要處理舊版 IE 對部分 HTML5 元素識別不足的問題。

### 9.5 舊版 IE 與雙核瀏覽器相容設定範例

| 項目 | 說明 |
|---|---|
| 使用情境 | 舊系統需要同時保留 IE 文件模式提示、雙核瀏覽器內核提示與 `html5shiv`。 |
| 使用前提 | 專案支援範圍包含相關舊版瀏覽器或特定雙核瀏覽器。 |
| 來源 | 5. 範例說明 |

```html
<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="renderer" content="webkit">
  <title>兼容性設定範例</title>

  <!--[if lt IE 9]>
  <script src="./js/html5shiv.min.js"></script>
  <![endif]-->
</head>
<body>
  <header>
    <h1>網站標題</h1>
  </header>

  <main>
    <article>
      <h2>文章標題</h2>
      <p>這是一段使用 HTML5 語意化元素撰寫的內容。</p>
    </article>
  </main>

  <footer>
    <p>頁尾資訊</p>
  </footer>
</body>
</html>
```

### 注意事項

- `<!doctype html>` 讓瀏覽器以 HTML5 標準模式解析文件。
- `html5shiv` 只會在低於 IE9 的 IE 中被載入。
- 非常舊的瀏覽器仍需搭配實際測試確認 CSS 與互動行為。

### 9.6 IE 條件註解版本判斷

| 項目 | 說明 |
|---|---|
| 使用情境 | 需要閱讀或維護舊專案中的 IE 條件註解。 |
| 使用前提 | 目標語法屬於 IE 曾支援的條件註解。 |
| 來源 | 4.3 IE 條件註解的比較符號 |

```html
<!--[if IE 8]>僅 IE8 可見<![endif]-->
<!--[if gt IE 8]>高於 IE8 的 IE 可見<![endif]-->
<!--[if lt IE 8]>低於 IE8 的 IE 可見<![endif]-->
<!--[if gte IE 8]>IE8 或更新的 IE 可見<![endif]-->
<!--[if lte IE 8]>IE8 及以下可見<![endif]-->
<!--[if !IE 8]>非 IE8 的 IE 可見<![endif]-->
```

### 注意事項

- 這些語法屬於歷史相容處理。
- 新專案通常不應以 IE 條件註解作為主要相容策略。
- notes 提到 IE10 不支援條件註解。

---

## 10. 錯誤速查表

| 錯誤現象 | 可能原因 | 修正方向 | 對應知識點 | 來源 |
|---|---|---|---|---|
| 以為 `IE=edge` 可以解決所有兼容性問題 | `IE=edge` 主要影響 IE 文件模式，不能補齊所有標準支援。 | 搭配功能支援檢查、fallback、polyfill 與實際測試。 | `X-UA-Compatible`、文件模式 | 7. 常見錯誤與修正 |
| 把 `renderer` 當成所有瀏覽器都支援的標準 | `renderer` 主要針對特定雙核瀏覽器，並非通用標準。 | 只在確有目標瀏覽器需求時使用，並註明目的。 | `renderer`、雙核瀏覽器 | 7. 常見錯誤與修正 |
| 在所有瀏覽器都載入 `html5shiv` | `html5shiv` 對非舊版 IE 通常沒有意義。 | 使用 IE 條件註解只讓低於 IE9 的瀏覽器載入。 | `html5shiv`、IE 條件註解 | 7. 常見錯誤與修正 |
| 以為 `html5shiv` 等於完整支援 HTML5 | 它主要處理 HTML5 元素識別問題，不包含所有 HTML5 API。 | 根據需要另外處理 CSS、JavaScript 或 API 相容性。 | `html5shiv`、HTML5 語意化元素 | 7. 常見錯誤與修正 |
| 沒有寫 `<!doctype html>` | 瀏覽器可能進入怪異模式或非預期解析模式。 | 在 HTML 文件最前面加入 `<!doctype html>`。 | 文件模式、HTML5 標準模式 | 7. 常見錯誤與修正 |
| 新專案照抄舊版 IE 相容程式碼 | 未根據專案支援範圍判斷，增加無用程式碼與維護成本。 | 根據專案瀏覽器支援範圍決定是否保留。 | 瀏覽器支援範圍 | 7. 常見錯誤與修正 |
| 移除 `html5shiv` 前未確認使用者環境 | 專案可能仍有 IE6、IE7、IE8 使用情境。 | 先確認支援版本、客戶情境與測試覆蓋，再評估移除。 | 判斷能否移除舊相容程式碼 | 6.2 判斷能否移除舊相容程式碼 |
| 以為 IE10 會執行 IE 條件註解 | notes 提到 IE10 不支援條件註解。 | 將 IE10 視為不會執行這類條件註解的瀏覽器。 | IE 條件註解 | 3.5 IE 條件註解 |
| 看到畫面差異時只檢查 HTML 程式碼本身 | 差異可能來自 doctype、IE 相容模式、特性支援或內核切換。 | 依序檢查 `<!doctype html>`、相容模式、特性支援、內核切換與必要 fallback。 | 調查畫面差異 | 6.3 調查畫面差異 |

---

## 11. 相似概念對照表

### 11.1 `X-UA-Compatible` vs `renderer` vs `html5shiv`

| 比較項目 | `X-UA-Compatible` | `renderer` | `html5shiv` |
|---|---|---|---|
| 類型 | `meta` 相容性設定 | `meta` 內核提示 | JavaScript 相容腳本 |
| 主要對象 | 舊版 Internet Explorer | 部分雙核瀏覽器 | IE6、IE7、IE8 |
| 主要目的 | 提示 IE 使用最新可用文件模式 | 提示優先使用 WebKit 內核 | 讓舊版 IE 能建立並識別 HTML5 新元素 |
| 最小寫法 | `<meta http-equiv="X-UA-Compatible" content="IE=edge">` | `<meta name="renderer" content="webkit">` | 透過條件註解載入 `html5shiv.min.js` |
| 不能解決 | 不能補齊所有 HTML5、CSS3 或 JavaScript 功能 | 不能要求所有瀏覽器遵守 | 不能補齊所有 HTML5 API、表單功能或 CSS 能力 |
| 使用判斷 | 舊版 IE 文件模式有需求時 | 目標環境有特定雙核瀏覽器需求時 | 需要支援 IE8 與更舊版本且使用 HTML5 語意化元素時 |
| 來源 | 3.2 文件模式與 `X-UA-Compatible` | 3.3 雙核瀏覽器與 `renderer` | 3.4 `html5shiv` 與 HTML5 語意化元素、4.2 使用 `html5shiv` |

### 選用建議

- 不要把三者視為互相替代的工具，它們處理的是不同相容問題。
- 是否使用應由專案瀏覽器支援範圍決定。

### 11.2 IE 條件註解比較符號

| 條件 | 意義 | 最小範例 | 來源 |
|---|---|---|---|
| `lt` | 小於 | `<!--[if lt IE 9]>...<![endif]-->` | 4.3 IE 條件註解的比較符號 |
| `lte` | 小於等於 | `<!--[if lte IE 8]>...<![endif]-->` | 4.3 IE 條件註解的比較符號 |
| `gt` | 大於 | `<!--[if gt IE 8]>...<![endif]-->` | 4.3 IE 條件註解的比較符號 |
| `gte` | 大於等於 | `<!--[if gte IE 8]>...<![endif]-->` | 4.3 IE 條件註解的比較符號 |
| `!` | 邏輯非 | `<!--[if !IE 8]>...<![endif]-->` | 4.3 IE 條件註解的比較符號 |

### 選用建議

- 這些符號主要用於閱讀與維護舊專案。
- 新專案通常不應以 IE 條件註解作為主要相容策略。

### 11.3 舊版瀏覽器相容處理 vs 現代 HTML 開發慣例

| 比較項目 | 舊版瀏覽器相容處理 | 現代 HTML 開發慣例 |
|---|---|---|
| 主要目標 | 維持舊系統、企業內部系統或特定舊版瀏覽器可用。 | 優先面向現代瀏覽器。 |
| 常見寫法 | `X-UA-Compatible`、`renderer`、IE 條件註解、`html5shiv`。 | 根據支援範圍選擇必要的 doctype、polyfill、fallback 或替代實作。 |
| 使用風險 | 無條件保留會增加無用程式碼與維護成本。 | 若忽略舊使用者環境，可能造成舊系統不可用。 |
| 判斷依據 | 是否仍需支援 IE6、IE7、IE8 或特定雙核瀏覽器。 | 專案支援的瀏覽器與版本範圍。 |
| 來源 | 2. 本章定位、6.1 維護舊系統、6.2 判斷能否移除舊相容程式碼 | 2. 本章定位、11. 延伸補充 |

### 選用建議

- 維護舊系統時先理解相容程式碼的目的，再決定是否修改。
- 新專案不要直接照抄舊版 IE 相容片段，應先定義支援範圍。

---

## 12. 來源索引

| 附錄區塊 | 對應 notes 路徑 | 對應章節或小節 | 備註 |
|---|---|---|---|
| Appendix 規劃 | `notes/第02章_兼容性問題/兼容性問題.md` | 1. 本章學習目標、2. 本章定位 | 判斷可生成與不可生成區塊。 |
| 1. 附錄定位 | `notes/第02章_兼容性問題/兼容性問題.md` | 1. 本章學習目標、2. 本章定位 | 說明本附錄範圍與使用方式。 |
| 2. 附錄索引 | `notes/第02章_兼容性問題/兼容性問題.md` | 全章 | 依 notes 內容類型建立索引。 |
| 3. 名詞表 | `notes/第02章_兼容性問題/兼容性問題.md` | 3. 核心概念、8. 與其他概念的關係、11. 延伸補充 | 收錄本章支撐的術語與限制。 |
| 4. HTML 元素表 | `notes/第02章_兼容性問題/兼容性問題.md` | 3.4 `html5shiv` 與 HTML5 語意化元素、4. 語法與基本用法、5. 範例說明 | 收錄相容設定與範例中出現的元素。 |
| 5. 屬性表 | `notes/第02章_兼容性問題/兼容性問題.md` | 3.2 文件模式與 `X-UA-Compatible`、3.3 雙核瀏覽器與 `renderer`、4.1 建議放置位置、5. 範例說明 | 收錄相容相關屬性與常見值。 |
| 6. API / 方法表 | `notes/第02章_兼容性問題/兼容性問題.md` | 全章 | notes 未提供具體 API 或方法。 |
| 7. 指令表 | `notes/第02章_兼容性問題/兼容性問題.md` | 全章 | notes 未提供 CLI 指令。 |
| 8. 設定檔範例 | `notes/第02章_兼容性問題/兼容性問題.md` | 全章 | notes 未提供設定檔格式。 |
| 9. 常用片段 | `notes/第02章_兼容性問題/兼容性問題.md` | 4. 語法與基本用法、5. 範例說明、7. 常見錯誤與修正 | 收錄最小可用相容片段。 |
| 10. 錯誤速查表 | `notes/第02章_兼容性問題/兼容性問題.md` | 6. 實務應用場景、7. 常見錯誤與修正 | 整理常見錯誤、原因與修正方向。 |
| 11. 相似概念對照表 | `notes/第02章_兼容性問題/兼容性問題.md` | 3. 核心概念、4.3 IE 條件註解的比較符號、6. 實務應用場景、11. 延伸補充 | 整理相似技術與歷史相容語法差異。 |
| 13. 維護備註 | `notes/第02章_兼容性問題/兼容性問題.md` | 6.2 判斷能否移除舊相容程式碼、11. 延伸補充 | 提醒後續同步維護條件。 |

---

## 13. 維護備註

- 若 `notes/` 新增明確瀏覽器版本、支援範圍或專案案例，需同步更新名詞表、錯誤速查表與選用建議。
- 若 `notes/` 新增具體 API、方法、事件、CLI 指令或設定檔格式，再補齊第 6 至第 8 節。
- 若專案已不再支援 IE6、IE7、IE8，需重新檢查 `html5shiv` 相關片段是否仍應保留。
- 若 `renderer` 的目標瀏覽器環境有更具體描述，需更新 `renderer` 的適用範圍與限制。
- 若來源 notes 修改 HTML5 語意化元素清單，需同步更新第 4 節元素表與第 9 節範例。
- `codex.md` 的「notes 路徑」與最後「Notes 內容」指向不同章節；本附錄依「notes 路徑」與「目標輸出路徑」使用第 02 章內容生成。
