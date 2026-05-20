# 第07章_meta標籤 - 附錄查表資料

## 1. 附錄定位

### 適用範圍

本附錄對應 `notes/第07章_meta標籤/meta標籤.md`，整理 HTML `<meta>` 標籤、metadata 相關名詞、常用屬性、常見 `<meta>` 設定片段、錯誤速查與相似概念對照。

### 使用方式

- 快速查找 `<meta>` 常見用途、屬性與最小寫法。
- 對照 `charset`、`name`、`http-equiv`、`property`、`content` 的差異。
- 複用本章提到的最小 metadata 片段。
- 透過來源索引回到正式 notes 的對應小節深入閱讀。

---

## 2. 附錄索引

| 區塊 | 內容類型 | 適合查找的問題 |
|---|---|---|
| 3. 名詞表 | 概念與術語 | metadata、viewport、robots、Open Graph 是什麼？ |
| 4. HTML 元素表 | 元素與相關結構 | `<meta>` 何時使用？與 `<head>`、`<title>` 有什麼關係？ |
| 5. 屬性表 | `<meta>` 屬性與常見值 | `charset`、`name`、`http-equiv`、`property`、`content` 怎麼查？ |
| 6. 常用片段 | 最小 HTML 範例 | 字元編碼、viewport、SEO、robots、Open Graph 的最小寫法是什麼？ |
| 7. 錯誤速查表 | 常見錯誤與修正方向 | metadata 出錯時優先檢查什麼？ |
| 8. 相似概念對照表 | 相似概念比較 | `description` 和 `keywords`、`robots` 和權限控管差在哪？ |
| 9. 來源索引 | 附錄與 notes 對應 | 本附錄內容可回到哪個 notes 小節？ |
| 10. 維護備註 | 後續維護提醒 | notes 更新時哪些內容需要同步？ |

### 未生成區塊

| 區塊 | 不生成原因 |
|---|---|
| API / 方法表 | 原筆記未明確教 API、方法、事件或 DOM 操作。 |
| 指令表 | 原筆記沒有 CLI 指令。 |
| 設定檔範例 | 原筆記沒有設定檔內容；本章可複用內容以 HTML 片段呈現。 |

---

## 3. 名詞表

| 名詞 | 英文 | 簡要定義 | 用途 | 注意事項 | 來源 |
|---|---|---|---|---|---|
| `<meta>` | meta element | 提供 HTML 文件中繼資訊的空元素。 | 描述文件編碼、viewport、頁面摘要、爬蟲規則或社群分享資訊。 | 通常放在 `<head>`；不需要結束標籤。 | 3.1 `<meta>` 是什麼、3.2 `<meta>` 通常放在 `<head>` 裡 |
| metadata | metadata | 描述文件本身或工具如何理解文件的資料。 | 供瀏覽器、搜尋引擎、社群平台或其他工具讀取。 | 不等於頁面可見主內容。 | 2. 本章定位、3.1 `<meta>` 是什麼 |
| `<head>` | document head | 放置文件層級資訊的區域。 | 容納 `<title>`、`<meta>`、`<link>`、`script` 與樣式設定。 | `<meta>` 通常應放在這裡。 | 3.2 `<meta>` 通常放在 `<head>` 裡、8. 與其他概念的關係 |
| `charset` | character encoding | 指定 HTML 文件的字元編碼。 | 讓瀏覽器正確解讀中文、標點與特殊字元。 | 現代網頁通常使用 `UTF-8`，並放在 `<head>` 前段。 | 3.4 字元編碼：`charset` |
| viewport | viewport | 行動裝置上的版面視窗設定。 | 控制頁面寬度與初始縮放比例。 | 響應式網站通常需要設定。 | 3.5 行動裝置設定：`viewport` |
| `X-UA-Compatible` | X-UA-Compatible | 舊版 Internet Explorer 的相容性設定。 | 要求 IE 使用較新的文件模式渲染頁面。 | 主要與舊版 IE 有關，現代新專案通常不作為核心設定。 | 3.6 IE 相容性設定：`X-UA-Compatible` |
| `refresh` | refresh | 透過 `http-equiv` 指定自動刷新或跳轉。 | 讓頁面在指定秒數後刷新或跳轉。 | 可能影響使用者體驗、可訪問性與搜尋引擎理解。 | 3.8 自動刷新與跳轉：`refresh` |
| `robots` | robots meta | 提供搜尋引擎爬蟲索引與連結追蹤建議。 | 控制是否建議索引頁面、是否建議跟隨連結。 | 不是安全機制，不能取代權限控管。 | 3.9 搜尋爬蟲設定：`robots` |
| `index` | index | 允許搜尋爬蟲索引頁面。 | 用於 `robots` 的 content 值。 | 可與 `follow` 搭配。 | 3.9 搜尋爬蟲設定：`robots` |
| `noindex` | noindex | 要求搜尋爬蟲不要索引頁面。 | 用於測試頁、後台頁或暫存頁等不希望收錄的頁面。 | 不等於禁止使用者開啟頁面。 | 3.9 搜尋爬蟲設定：`robots`、5. 範例說明 |
| `follow` | follow | 允許搜尋爬蟲跟隨頁面上的連結。 | 用於 `robots` 的 content 值。 | 可與 `index` 搭配。 | 3.9 搜尋爬蟲設定：`robots` |
| `nofollow` | nofollow | 要求搜尋爬蟲不要跟隨頁面上的連結。 | 用於 `robots` 的 content 值。 | 可與 `noindex` 搭配。 | 3.9 搜尋爬蟲設定：`robots` |
| `all` | all | 與 `index, follow` 類似。 | 簡寫允許索引與跟隨連結。 | 來源 notes 僅列出等價概念，未展開更多規則。 | 3.9 搜尋爬蟲設定：`robots` |
| `none` | none | 與 `noindex, nofollow` 類似。 | 簡寫要求不要索引且不要跟隨連結。 | 來源 notes 僅列出等價概念，未展開更多規則。 | 3.9 搜尋爬蟲設定：`robots` |
| `noarchive` | noarchive | 要求搜尋引擎不要快取頁面內容。 | 用於 `robots` 的 content 值。 | notes 僅說明用途，未展開各搜尋引擎差異。 | 3.9 搜尋爬蟲設定：`robots` |
| `nocache` | nocache | 可視為 `noarchive` 的替代名稱。 | 用於 `robots` 的 content 值。 | notes 僅列出替代名稱。 | 3.9 搜尋爬蟲設定：`robots` |
| `description` | meta description | 頁面摘要 metadata。 | 供搜尋結果或分享摘要參考。 | 搜尋結果不保證一定採用。 | 3.10 關鍵字與描述：`keywords` 與 `description` |
| `keywords` | meta keywords | 頁面關鍵字 metadata。 | 列出與頁面相關的關鍵字。 | notes 提醒不應視為現代 SEO 主要手段。 | 3.10 關鍵字與描述：`keywords` 與 `description` |
| Open Graph | Open Graph | 用於社群分享卡片的 metadata 協議。 | 控制分享標題、描述與圖片。 | 平台是否採用與快取更新依平台規則而不同。 | 3.11 社群分享設定：Open Graph |
| SEO | Search Engine Optimization | 搜尋引擎最佳化。 | 讓搜尋引擎更容易理解與呈現頁面。 | SEO 不只靠 `<meta>`，也與內容品質、標題結構、語意、效能等有關。 | 3.10 關鍵字與描述、8. 與其他概念的關係 |

---

## 4. HTML 元素表

| 元素 | 用途 | 常用屬性 | 使用情境 | 最小範例 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|
| `<meta>` | 提供 HTML 文件中繼資訊。 | `charset`、`name`、`content`、`http-equiv`、`property` | 設定字元編碼、viewport、頁面描述、爬蟲規則、Open Graph 等。 | `<meta charset="UTF-8">` | 是空元素，不需要結束標籤；通常放在 `<head>`。 | 3.1 `<meta>` 是什麼、4. 語法與基本用法 |
| `<head>` | 放置文件層級資訊。 | 原筆記未展開 | 放置 `<meta>`、`<title>` 等給瀏覽器或工具讀取的資訊。 | `<head><meta charset="UTF-8"></head>` | 本章只作為 `<meta>` 的放置位置，不展開完整 `<head>` 規則。 | 3.2 `<meta>` 通常放在 `<head>` 裡、8. 與其他概念的關係 |
| `<title>` | 設定頁面標題。 | 原筆記未展開 | 與 `description` 一起協助機器理解頁面資訊。 | `<title>HTML meta 標籤</title>` | 本章只說明其與 `<meta>` 的關係，不展開 `<title>` 教學。 | 5. 範例說明、8. 與其他概念的關係 |

---

## 5. 屬性表

| 屬性 | 適用元素 | 常見值 | 用途 | 範例 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|
| `charset` | `<meta>` | `UTF-8` | 指定文件字元編碼。 | `<meta charset="UTF-8">` | 應放在 `<head>` 前段；避免中文或特殊字元解析錯誤。 | 3.4 字元編碼：`charset` |
| `name` | `<meta>` | `viewport`、`author`、`generator`、`copyright`、`robots`、`keywords`、`description` | 宣告一般 metadata 的名稱。 | `<meta name="description" content="頁面描述">` | 通常要搭配 `content` 才有實際值。 | 3.3 常見屬性搭配方式、4.2 `name` 與 `content` 的基本模式 |
| `content` | `<meta>` | 依 metadata 類型而定 | 存放 metadata 的實際內容。 | `<meta name="robots" content="index, follow">` | 缺少 `content` 時，像 `description` 這類 metadata 無法提供內容。 | 3.3 常見屬性搭配方式、7. 常見錯誤與修正 |
| `http-equiv` | `<meta>` | `X-UA-Compatible`、`refresh` | 模擬部分 HTTP header 或瀏覽器處理指令。 | `<meta http-equiv="refresh" content="3;url=https://www.example.com/">` | `refresh` 應謹慎使用；`X-UA-Compatible` 主要針對舊 IE。 | 3.6 IE 相容性設定、3.8 自動刷新與跳轉 |
| `property` | `<meta>` | `og:title`、`og:description`、`og:image`、`og:url`、`og:type` | 定義 Open Graph 等 metadata 協議的屬性。 | `<meta property="og:title" content="網頁標題">` | 不會直接改變頁面畫面，主要供外部平台讀取。 | 3.11 社群分享設定：Open Graph、4.4 `property` 與 `content` 的基本模式 |

### 5.1 常見 `name` 值速查

| `name` 值 | 搭配範例 | 用途 | 注意事項 | 來源 |
|---|---|---|---|---|
| `viewport` | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | 控制行動裝置視窗寬度與初始縮放。 | 響應式網站通常需要。 | 3.5 行動裝置設定：`viewport` |
| `author` | `<meta name="author" content="Kevin">` | 描述頁面作者。 | 不會直接顯示在頁面上。 | 3.7 作者、生成工具與版權資訊 |
| `generator` | `<meta name="generator" content="Visual Studio Code">` | 描述頁面生成工具。 | 不應被當成頁面可見資訊。 | 3.7 作者、生成工具與版權資訊 |
| `copyright` | `<meta name="copyright" content="2023-2027 版權所有">` | 描述版權資訊。 | 不應取代頁面可見的版權聲明。 | 3.7 作者、生成工具與版權資訊 |
| `robots` | `<meta name="robots" content="index, follow">` | 提供搜尋爬蟲索引與連結追蹤建議。 | 不是安全機制。 | 3.9 搜尋爬蟲設定：`robots` |
| `keywords` | `<meta name="keywords" content="HTML, meta, 前端, 網頁">` | 列出頁面關鍵字。 | 不應視為現代 SEO 主要手段。 | 3.10 關鍵字與描述 |
| `description` | `<meta name="description" content="本頁介紹 HTML meta 標籤。">` | 提供頁面摘要。 | 搜尋結果不保證一定採用。 | 3.10 關鍵字與描述 |

### 5.2 常見 Open Graph `property` 值速查

| `property` 值 | 搭配範例 | 用途 | 注意事項 | 來源 |
|---|---|---|---|---|
| `og:title` | `<meta property="og:title" content="網頁標題">` | 分享卡片標題。 | 供支援 Open Graph 的平台讀取。 | 3.11 社群分享設定：Open Graph |
| `og:description` | `<meta property="og:description" content="網頁描述">` | 分享卡片描述。 | 不會直接改變頁面可見內容。 | 3.11 社群分享設定：Open Graph |
| `og:image` | `<meta property="og:image" content="https://example.com/share-image.png">` | 分享卡片圖片。 | 平台是否採用與快取更新依平台規則而不同。 | 3.11 社群分享設定：Open Graph |
| `og:url` | 原筆記未提供完整範例 | 分享時對應的標準網址。 | 原筆記僅列為常見屬性，未示範完整值。 | 3.11 社群分享設定：Open Graph |
| `og:type` | 原筆記未提供完整範例 | 內容類型，例如 `website` 或 `article`。 | 原筆記僅列為常見屬性，未展開類型規則。 | 3.11 社群分享設定：Open Graph |

---

## 6. 常用片段

### 6.1 最基本 metadata

| 項目 | 說明 |
|---|---|
| 使用情境 | 建立 HTML 文件時先放入最基本的編碼與行動裝置設定。 |
| 使用前提 | 放在 `<head>` 中。 |
| 來源 | 11. 延伸補充 |

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### 6.2 頁面描述

| 項目 | 說明 |
|---|---|
| 使用情境 | 為內容頁、商品頁或文章頁提供頁面摘要。 |
| 使用前提 | 放在 `<head>` 中，描述應符合頁面主題。 |
| 來源 | 3.10 關鍵字與描述、7. 常見錯誤與修正 |

```html
<meta name="description" content="本頁介紹 HTML meta 標籤的用途與常見寫法。">
```

### 6.3 關鍵字

| 項目 | 說明 |
|---|---|
| 使用情境 | 列出頁面相關關鍵字。 |
| 使用前提 | 不應把它視為 SEO 排名的主要手段。 |
| 來源 | 3.10 關鍵字與描述 |

```html
<meta name="keywords" content="HTML, meta, 前端, 網頁">
```

### 6.4 允許索引與跟隨連結

| 項目 | 說明 |
|---|---|
| 使用情境 | 希望搜尋引擎可索引頁面並跟隨頁面連結。 |
| 使用前提 | 放在 `<head>` 中。 |
| 來源 | 3.9 搜尋爬蟲設定：`robots`、5. 範例說明 |

```html
<meta name="robots" content="index, follow">
```

### 6.5 不希望搜尋引擎索引

| 項目 | 說明 |
|---|---|
| 使用情境 | 測試頁、後台頁或暫存頁不希望被搜尋結果收錄。 |
| 使用前提 | 這不是權限控管；機密內容仍需登入或伺服器保護。 |
| 來源 | 5. 範例說明、6. 實務應用場景 |

```html
<meta name="robots" content="noindex, nofollow">
```

### 6.6 舊版 IE 相容性設定

| 項目 | 說明 |
|---|---|
| 使用情境 | 舊系統仍需要支援 Internet Explorer 文件模式。 |
| 使用前提 | 依實際舊 IE 支援需求判斷是否保留。 |
| 來源 | 3.6 IE 相容性設定：`X-UA-Compatible` |

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

### 6.7 自動跳轉

| 項目 | 說明 |
|---|---|
| 使用情境 | 頁面載入後指定秒數跳轉。 |
| 使用前提 | 應謹慎使用，避免影響使用者體驗與可訪問性。 |
| 來源 | 3.8 自動刷新與跳轉：`refresh`、5. 範例說明 |

```html
<meta http-equiv="refresh" content="3;url=https://www.example.com/">
```

### 6.8 Open Graph 分享卡片

| 項目 | 說明 |
|---|---|
| 使用情境 | 網頁分享到社群平台或通訊軟體時提供卡片資訊。 |
| 使用前提 | 放在 `<head>` 中，供支援 Open Graph 的平台讀取。 |
| 來源 | 3.11 社群分享設定：Open Graph、5. 範例說明 |

```html
<meta property="og:title" content="網頁標題">
<meta property="og:description" content="網頁描述">
<meta property="og:image" content="https://example.com/share-image.png">
```

---

## 7. 錯誤速查表

| 錯誤現象 | 可能原因 | 修正方向 | 對應知識點 | 來源 |
|---|---|---|---|---|
| 把 `<meta>` 寫在 `<body>` 裡。 | 混淆 metadata 與頁面可見內容。 | 將 `<meta>` 移到 `<head>`。 | `<meta>` 放置位置 | 7. 常見錯誤與修正 |
| 忘記設定 `charset`。 | 文件缺少字元編碼宣告。 | 在 `<head>` 前段加入 `<meta charset="UTF-8">`。 | 字元編碼 | 3.4 字元編碼、7. 常見錯誤與修正 |
| 手機版文字過小或響應式排版不如預期。 | 缺少 viewport 設定。 | 加入 `<meta name="viewport" content="width=device-width, initial-scale=1.0">`。 | viewport | 3.5 行動裝置設定、7. 常見錯誤與修正 |
| 以為 `keywords` 一定能提高 SEO 排名。 | 把 `keywords` 視為現代 SEO 主要手段。 | 專注於內容品質、標題結構、語意與頁面體驗。 | SEO、keywords | 3.10 關鍵字與描述、7. 常見錯誤與修正 |
| `description` 寫得太籠統。 | 頁面摘要沒有清楚表達主題。 | 撰寫具體、自然、符合頁面主題的描述。 | meta description | 7. 常見錯誤與修正 |
| 用 `robots` 當成權限控管。 | 誤以為 `noindex` 會阻止使用者開啟頁面。 | 機密內容應使用登入、權限或伺服器端保護。 | robots、安全邊界 | 3.9 搜尋爬蟲設定、7. 常見錯誤與修正 |
| 濫用 `refresh` 做跳轉。 | 把自動跳轉當成一般導向首選。 | 優先使用伺服器端重新導向或明確連結。 | refresh、可訪問性 | 3.8 自動刷新與跳轉、7. 常見錯誤與修正 |
| 將 `X-UA-Compatible` 當成現代頁面必要設定。 | 混淆舊 IE 相容需求與現代新專案需求。 | 只有在舊系統相容需求下才保留。 | IE 相容性 | 3.6 IE 相容性設定、7. 常見錯誤與修正 |
| `<meta name="description">` 缺少 `content`。 | 只宣告 metadata 名稱，沒有提供實際內容。 | 加上 `content="..."`。 | `name` + `content` | 7. 常見錯誤與修正 |

---

## 8. 相似概念對照表

### 8.1 `charset` vs `name` + `content` vs `http-equiv` + `content` vs `property` + `content`

| 比較項目 | `charset` | `name` + `content` | `http-equiv` + `content` | `property` + `content` |
|---|---|---|---|---|
| 主要用途 | 指定文件字元編碼。 | 定義一般 metadata 名稱與內容。 | 模擬部分 HTTP header 或瀏覽器處理指令。 | 定義特定 metadata 協議屬性。 |
| 常見範例 | `<meta charset="UTF-8">` | `<meta name="description" content="頁面描述">` | `<meta http-equiv="refresh" content="3;url=...">` | `<meta property="og:title" content="網頁標題">` |
| 常見情境 | 避免文字解析錯誤。 | viewport、description、robots、author 等。 | IE 相容性、自動刷新或跳轉。 | Open Graph 分享卡片。 |
| 注意事項 | 建議放在 `<head>` 前段。 | 多數情況需要搭配 `content`。 | 不應濫用；`refresh` 可能影響體驗。 | 平台是否採用依平台規則而定。 |

### 選用建議

- 設定文件編碼時使用 `charset`。
- 描述一般頁面資訊時使用 `name` + `content`。
- 需要特殊瀏覽器處理指令時才使用 `http-equiv`。
- 設定 Open Graph 等協議資訊時使用 `property` + `content`。

### 8.2 `description` vs `keywords`

| 比較項目 | `description` | `keywords` |
|---|---|---|
| 定義 | 頁面摘要 metadata。 | 頁面關鍵字 metadata。 |
| 使用時機 | 內容頁、商品頁、文章頁提供摘要。 | 列出頁面相關關鍵字。 |
| 常見寫法 | `<meta name="description" content="本頁介紹 HTML meta 標籤。">` | `<meta name="keywords" content="HTML, meta, 前端, 網頁">` |
| SEO 注意事項 | 搜尋結果有時會參考，但不保證使用。 | 不應視為現代 SEO 主要手段。 |
| 常見錯誤 | 描述太籠統或缺少 `content`。 | 以為一定能提高 SEO 排名。 |

### 選用建議

- 優先寫清楚且符合頁面內容的 `description`。
- `keywords` 可作為 metadata 保留，但不要把它當成 SEO 核心策略。

### 8.3 `robots` vs 權限控管

| 比較項目 | `robots` | 權限控管 |
|---|---|---|
| 定義 | 給搜尋引擎爬蟲的索引與追蹤建議。 | 控制使用者能否存取內容的安全措施。 |
| 使用時機 | 不希望頁面出現在搜尋結果，或控制爬蟲是否跟隨連結。 | 內容不能公開，需要登入、權限或伺服器保護。 |
| 常見寫法 | `<meta name="robots" content="noindex, nofollow">` | 原筆記未提供具體實作。 |
| 注意事項 | 不會阻止使用者直接開啟頁面。 | 原筆記只提醒應用權限或伺服器保護，未展開做法。 |
| 常見錯誤 | 把 `noindex` 當作保密手段。 | 原筆記未展開。 |

### 選用建議

- 搜尋結果收錄控制用 `robots`。
- 機密或不公開內容需要真正的存取控制。

### 8.4 `description` vs Open Graph description

| 比較項目 | `meta description` | `og:description` |
|---|---|---|
| 定義 | 一般頁面摘要 metadata。 | Open Graph 分享卡片描述。 |
| 主要讀取者 | 搜尋引擎等工具。 | 社群平台或通訊軟體等支援 Open Graph 的平台。 |
| 常見寫法 | `<meta name="description" content="頁面描述">` | `<meta property="og:description" content="網頁描述">` |
| 使用時機 | 希望搜尋結果或工具能參考頁面摘要。 | 希望分享連結時出現合適卡片描述。 |
| 注意事項 | 搜尋結果不保證一定採用。 | 平台是否採用與快取更新依平台規則而不同。 |

### 選用建議

- 面向搜尋摘要時設定 `description`。
- 面向社群分享卡片時設定 Open Graph 相關屬性。

---

## 9. 來源索引

| 附錄區塊 | 對應 notes 路徑 | 對應章節或小節 | 備註 |
|---|---|---|---|
| 3. 名詞表 | `notes/第07章_meta標籤/meta標籤.md` | 2. 本章定位、3. 核心概念、8. 與其他概念的關係 | 整理本章核心術語與注意事項。 |
| 4. HTML 元素表 | `notes/第07章_meta標籤/meta標籤.md` | 3.1 `<meta>` 是什麼、3.2 `<meta>` 通常放在 `<head>` 裡、5. 範例說明 | 只列出本章直接相關元素，不擴寫範例載體。 |
| 5. 屬性表 | `notes/第07章_meta標籤/meta標籤.md` | 3.3 常見屬性搭配方式、3.4 至 3.11、4. 語法與基本用法 | 包含 `<meta>` 屬性與常見值速查。 |
| 6. 常用片段 | `notes/第07章_meta標籤/meta標籤.md` | 4. 語法與基本用法、5. 範例說明、11. 延伸補充 | 只保留最小可用 HTML 片段。 |
| 7. 錯誤速查表 | `notes/第07章_meta標籤/meta標籤.md` | 7. 常見錯誤與修正 | 轉換 notes 的錯誤、原因與修正方向。 |
| 8. 相似概念對照表 | `notes/第07章_meta標籤/meta標籤.md` | 3.3 常見屬性搭配方式、3.9、3.10、3.11、8. 與其他概念的關係 | 對照容易混淆的 metadata 寫法與用途。 |

---

## 10. 維護備註

- 若 `notes/` 新增 `<meta>` 屬性、`name` 值、`http-equiv` 值或 Open Graph 屬性，需同步更新「屬性表」與「常用片段」。
- 若 `notes/` 後續補充 API、DOM 操作、CLI 指令或設定檔，再重新評估是否生成對應區塊。
- 本附錄只整理 `notes/第07章_meta標籤/meta標籤.md` 已支撐的內容；未在 notes 中展開的規格細節不在此擴寫。
- 若調整 notes 中的 SEO、robots、Open Graph 注意事項，需同步更新「錯誤速查表」與「相似概念對照表」。
