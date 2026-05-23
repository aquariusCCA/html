# 第24章_框架標籤 - 附錄查表資料

## 1. 附錄定位

### 適用範圍

本附錄對應 `notes/第24章_框架標籤/框架標籤.md`，範圍聚焦於 HTML `<iframe>` 元素、`src`、`title`、`name`、`width`、`height`、`frameborder`、連結與表單的 `target` 搭配、PDF 或網頁嵌入、最小可用片段、常見錯誤與相似概念比較。

### 使用方式

- 快速查找 `<iframe>` 與本章提到的相關屬性用途。
- 複用本章支撐的最小 iframe、連結 target、表單 target 片段。
- 對照 iframe 與一般媒體元素、HTML 屬性尺寸與 CSS 尺寸控制的差異。
- 透過來源索引回到正式 notes 的對應小節閱讀完整說明。

---

## 2. 附錄索引

| 區塊 | 內容類型 | 適合查找的問題 |
|---|---|---|
| 3. 名詞表 | 概念與術語 | iframe、inline frame、瀏覽上下文、target 是什麼？ |
| 4. HTML 元素表 | 元素與用途 | `<iframe>` 何時使用？相關範例載體有哪些？ |
| 5. 屬性表 | 屬性與值 | `src`、`title`、`name`、`target` 等屬性怎麼查？ |
| 9. 常用片段 | 最小 HTML / CSS 範例 | iframe、PDF 預覽、target 搭配怎麼寫？ |
| 10. 錯誤速查表 | 常見錯誤 | iframe 空白、target 失效、可訪問性問題優先檢查什麼？ |
| 11. 相似概念對照表 | 相似概念比較 | iframe 和圖片/影片、`frameborder` 和 CSS 差在哪？ |
| 12. 來源索引 | notes 對應位置 | 附錄條目來自哪個 notes 小節？ |
| 13. 維護備註 | 維護提醒 | 後續更新時要同步什麼？ |

### 未生成區塊

| 區塊 | 不生成原因 |
|---|---|
| API / 方法表 | 原筆記未明確教 API、DOM 方法、事件或 iframe 相關 JavaScript 操作。 |
| 指令表 | 原筆記沒有 CLI 指令。 |
| 設定檔範例 | 原筆記沒有設定檔內容。 |

---

## 3. 名詞表

| 名詞 | 英文 | 簡要定義 | 用途 | 注意事項 | 來源 |
|---|---|---|---|---|---|
| 框架標籤 | iframe element / `<iframe>` | 在目前 HTML 文件中建立內嵌框架的元素。 | 嵌入另一個頁面或資源。 | 會建立獨立瀏覽上下文，需注意效能、安全性與可訪問性。 | §2、§3、§9 |
| 行內框架 | inline frame | `iframe` 的英文全稱概念。 | 表示在頁面中嵌入另一份文件或資源的框架。 | 筆記將其作為 `<iframe>` 的核心概念說明。 | §3 |
| 內嵌內容 | embedded content | 被 iframe 載入到目前頁面中的網頁或資源。 | 嵌入外部網站、本地資源、PDF 或其他可顯示內容。 | 不是所有網站都允許被 iframe 嵌入。 | §2、§4.2、§5、§6 |
| 瀏覽上下文 | browsing context | iframe 內部文件的獨立顯示與載入環境。 | 讓 iframe 內部文件有自己的 HTML、CSS、JavaScript 與瀏覽歷史。 | 跨來源內容會受到瀏覽器安全限制。 | §2、§3、§8 |
| `src` | source | 指定 iframe 要載入的資源位置。 | 載入網頁、PDF、地圖、播放器等資源。 | 路徑錯誤或目標網站禁止嵌入時可能無法顯示。 | §4.1、§4.2、§5 |
| `title` | iframe title | 描述 iframe 內容用途的屬性。 | 幫助輔助工具辨識框架內容。 | 實務上應提供清楚的 `title`。 | §4.1、§7、§9 |
| `name` | frame name | 設定 iframe 的名稱。 | 讓 `<a target>` 或 `<form target>` 指定載入位置。 | 必須和 `target` 值一致。 | §4.1、§4.5、§4.6、§7 |
| `target` | target | 指定連結或表單結果顯示位置的屬性。 | 讓連結內容或表單回應載入指定 iframe。 | 若名稱對不上，內容不會載入預期 iframe。 | §4.5、§4.6、§7 |
| `frameborder` | frame border | 舊式 iframe 邊框控制屬性。 | 舊教材或舊專案中用來控制 iframe 邊框。 | 新程式碼建議改用 CSS `border`。 | §4.1、§4.4、§7、§9 |
| PDF 預覽 | PDF preview | 用 iframe 嘗試在頁面中顯示 PDF 文件。 | 文件預覽、報表預覽、合約預覽。 | 是否能直接預覽受瀏覽器能力、設定與伺服器回應影響。 | §4.2、§5.2、§8 |

---

## 4. HTML 元素表

| 元素 | 用途 | 常用屬性 | 使用情境 | 最小範例 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|
| `<iframe>` | 在目前頁面中嵌入另一個頁面或資源。 | `src`、`title`、`name`、`width`、`height`、`frameborder` | 嵌入外部網站、PDF、地圖、播放器、表單提交結果等。 | `<iframe src="https://example.com" title="Example 網站"></iframe>` | 需提供 `title`；第三方內容可能被阻擋或有安全風險。 | §2、§3、§4、§5、§6、§7 |

> 注意：`<a>`、`<form>`、`<input>`、`<button>` 在本章主要作為 `target` 搭配 iframe 的範例載體出現，不擴寫成完整 HTML 元素表條目。

### 4.1 範例載體索引

| 元素 | 在本章中的角色 | 相關屬性 | 最小範例 | 來源 |
|---|---|---|---|---|
| `<a>` | 將連結內容載入指定 iframe。 | `href`、`target` | `<a href="./page.html" target="container">開啟內容</a>` | §4.5、§5.3、§8 |
| `<form>` | 將表單提交後的回應載入指定 iframe。 | `action`、`target` | `<form action="/search" target="container"></form>` | §4.6、§5.4、§8 |
| `<input>` | 在表單範例中提供搜尋關鍵字欄位。 | `type`、`id`、`name` | `<input type="text" id="keyword" name="keyword">` | §4.6、§5.4 |
| `<button>` | 在表單範例中提交表單。 | `type` | `<button type="submit">搜尋</button>` | §4.6、§5.4 |

---

## 5. 屬性表

| 屬性 | 適用元素 | 常見值 | 用途 | 範例 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|
| `src` | `<iframe>` | URL、相對路徑、PDF 路徑 | 指定 iframe 要載入的內容。 | `<iframe src="./assets/pdfs/demo.pdf" title="PDF 文件預覽"></iframe>` | 目標資源需要能被瀏覽器載入；外部網站可能禁止嵌入。 | §4.1、§4.2、§5 |
| `title` | `<iframe>` | 描述文字 | 描述 iframe 內容用途。 | `<iframe src="https://example.com" title="Example 網站"></iframe>` | 缺少 `title` 會影響輔助工具理解。 | §4.1、§7、§9 |
| `name` | `<iframe>` | 自訂名稱 | 作為 `<a target>` 或 `<form target>` 的載入目標。 | `<iframe name="container" title="連結內容顯示區"></iframe>` | `target` 值需與 iframe `name` 完全一致。 | §4.1、§4.5、§4.6、§7 |
| `width` | `<iframe>` | 數值 | 設定 iframe 顯示寬度。 | `<iframe width="900" height="300"></iframe>` | 固定寬度可能不適合小螢幕；可改用 CSS。 | §4.1、§4.3、§7 |
| `height` | `<iframe>` | 數值 | 設定 iframe 顯示高度。 | `<iframe width="900" height="300"></iframe>` | 高度不足時可能裁切內嵌內容。 | §4.1、§4.3、§7 |
| `frameborder` | `<iframe>` | `0`、`1` | 舊式控制是否顯示 iframe 邊框。 | `<iframe src="https://example.com" frameborder="0"></iframe>` | 新程式碼建議用 CSS `border` 控制邊框。 | §4.1、§4.4、§7 |
| `href` | `<a>` | URL、相對路徑 | 指定連結要載入的資源。 | `<a href="./page.html" target="container">開啟內容</a>` | 本章只作為 iframe `target` 搭配情境。 | §4.5、§5.3 |
| `target` | `<a>` | iframe `name` | 指定連結開啟位置。 | `<a href="./page.html" target="container">開啟內容</a>` | 需對應 `<iframe name="container">`。 | §4.5、§7 |
| `action` | `<form>` | URL | 指定表單提交目的地。 | `<form action="/search" target="container"></form>` | 本章只在表單結果顯示到 iframe 的情境中使用。 | §4.6、§5.4 |
| `target` | `<form>` | iframe `name` | 指定表單回應頁面的顯示位置。 | `<form action="/search" target="container"></form>` | 需對應 `<iframe name="container">`。 | §4.6、§7 |
| `name` | `<input>` | 欄位名稱 | 表單提交時的欄位名稱。 | `<input type="text" name="keyword">` | 本章範例用於搜尋關鍵字欄位。 | §4.6、§5.4 |
| `style` | `<iframe>` | CSS 宣告 | 範例中用來以 CSS 移除邊框。 | `<iframe style="border: 0;"></iframe>` | 筆記建議新程式碼優先使用 CSS 控制邊框。 | §4.4、§5.1 |
| `class` | `<iframe>` | class 名稱 | 將 iframe 樣式交給 CSS 選擇器控制。 | `<iframe class="preview-frame" title="Example 網站"></iframe>` | 筆記用於示範響應式尺寸與邊框控制。 | §4.3 |

> 延伸提醒：筆記提到 `sandbox`、`allow`、`referrerpolicy` 可作為正式專案後續研究方向，但未提供語法或值表，因此本附錄不將其列入屬性表。

---

## 9. 常用片段

### 9.1 最小 iframe

| 項目 | 說明 |
|---|---|
| 使用情境 | 在目前頁面中嵌入另一個網頁或資源。 |
| 使用前提 | 目標資源允許被 iframe 載入。 |
| 來源 | §3、§4.1 |

```html
<iframe src="https://example.com" title="Example 網站"></iframe>
```

### 注意事項

- `src` 指定要載入的內容。
- `title` 應描述 iframe 內容或用途。

### 9.2 嵌入 PDF 文件

| 項目 | 說明 |
|---|---|
| 使用情境 | 在頁面中預覽 PDF 文件。 |
| 使用前提 | PDF 路徑正確，且瀏覽器支援直接預覽。 |
| 來源 | §4.2、§5.2 |

```html
<iframe
  src="./assets/pdfs/framework-tags-pdf-001-78621d.pdf"
  title="PDF 文件預覽"
  width="900"
  height="500"
></iframe>
```

### 注意事項

- PDF 是否能直接顯示會受瀏覽器能力、使用者設定與伺服器回應影響。
- 若 PDF 是正式下載資源，可另外提供一般連結。

### 9.3 用 CSS 控制 iframe 尺寸與邊框

| 項目 | 說明 |
|---|---|
| 使用情境 | 讓 iframe 更容易配合響應式版面。 |
| 使用前提 | iframe 使用 class 交給 CSS 控制。 |
| 來源 | §4.3、§4.4 |

```html
<iframe
  class="preview-frame"
  src="https://example.com"
  title="Example 網站"
></iframe>
```

```css
.preview-frame {
  width: 100%;
  height: 360px;
  border: 0;
}
```

### 注意事項

- `frameborder="0"` 是舊式寫法，新程式碼優先使用 CSS `border`。
- 固定寬度可能不適合小螢幕。

### 9.4 連結載入指定 iframe

| 項目 | 說明 |
|---|---|
| 使用情境 | 點擊連結後，在指定 iframe 中顯示連結內容。 |
| 使用前提 | `<a target>` 的值與 `<iframe name>` 一致。 |
| 來源 | §4.5、§5.3 |

```html
<a href="https://www.bilibili.com/" target="container">點我去 B 站</a>

<iframe
  name="container"
  title="連結內容顯示區"
  width="900"
  height="300"
></iframe>
```

### 注意事項

- `target="container"` 會尋找名為 `container` 的瀏覽上下文。
- 若目標網站禁止被 iframe 嵌入，瀏覽器可能阻擋顯示。

### 9.5 表單結果顯示到 iframe

| 項目 | 說明 |
|---|---|
| 使用情境 | 表單提交後不離開目前頁面，而是在指定 iframe 中顯示回應。 |
| 使用前提 | `<form target>` 的值與 `<iframe name>` 一致。 |
| 來源 | §4.6、§5.4 |

```html
<form action="https://so.toutiao.com/search" target="container2">
  <label for="keyword">搜尋關鍵字</label>
  <input type="text" id="keyword" name="keyword">
  <button type="submit">搜尋</button>
</form>

<iframe
  name="container2"
  title="搜尋結果顯示區"
  width="900"
  height="300"
></iframe>
```

### 注意事項

- `input name="keyword"` 是提交搜尋關鍵字時的欄位名稱。
- `form target="container2"` 需要對應 `iframe name="container2"`。

### 9.6 iframe 缺少 title 的修正

| 項目 | 說明 |
|---|---|
| 使用情境 | 修正常見的 iframe 可訪問性問題。 |
| 使用前提 | 已能描述 iframe 載入內容。 |
| 來源 | §7 |

```html
<iframe
  src="https://example.com"
  title="Example 網站內容"
></iframe>
```

### 注意事項

- `title` 應描述內容用途，不是裝飾文字。
- 不要只為了通過檢查而填入模糊文字。

---

## 10. 錯誤速查表

| 錯誤現象 | 可能原因 | 修正方向 | 對應知識點 | 來源 |
|---|---|---|---|---|
| 輔助工具使用者難以理解 iframe 內容。 | iframe 缺少 `title`。 | 為 iframe 加上能描述內容的 `title`。 | `title`、可訪問性 | §7、§9 |
| iframe 邊框控制分散或不符合現代寫法。 | 只用 `frameborder` 控制邊框。 | 新程式碼改用 CSS `border`。 | `frameborder`、CSS `border` | §4.4、§7、§9 |
| 手機或窄螢幕上 iframe 溢出。 | 固定 `width`、`height` 不適合小螢幕。 | 使用 CSS 設定 `width: 100%` 並搭配合適高度。 | `width`、`height`、響應式尺寸 | §4.3、§7 |
| iframe 顯示空白或被瀏覽器阻擋。 | 目標網站不允許被其他網站 iframe 嵌入。 | 改用一般連結，或使用官方提供的嵌入方式。 | `src`、第三方內容嵌入 | §4.2、§6、§7 |
| 第三方 iframe 帶來安全或隱私風險。 | 嵌入不可信來源。 | 只嵌入可信來源；必要時評估限制能力的做法。 | 第三方內容、安全性 | §6、§7、§11 |
| 點擊連結後沒有載入預期 iframe。 | `<a target>` 找不到對應 iframe `name`。 | 確認 `target` 與 `name` 完全一致。 | `target`、`name` | §4.5、§7 |
| 表單提交結果沒有顯示到預期 iframe。 | `<form target>` 找不到對應 iframe `name`。 | 確認 `form target` 與 iframe `name` 完全一致。 | `form target`、`iframe name` | §4.6、§7 |
| PDF 無法在 iframe 中預覽。 | 瀏覽器能力、使用者設定或伺服器回應不支援直接預覽。 | 提供一般 PDF 連結作為替代開啟方式。 | PDF 預覽、備用連結 | §5.2 |

---

## 11. 相似概念對照表

### 11.1 `<iframe>` vs `<img>` / `<audio>` / `<video>`

| 比較項目 | `<iframe>` | `<img>` / `<audio>` / `<video>` |
|---|---|---|
| 定義 | 嵌入另一個頁面或資源，形成獨立瀏覽上下文。 | 嵌入單一圖片、音訊或影片媒體資源。 |
| 使用時機 | 要嵌入完整頁面、第三方服務、PDF 預覽或指定框架內容。 | 只需要插入圖片、音訊或影片時。 |
| 常見寫法 | `<iframe src="https://example.com" title="Example 網站"></iframe>` | 筆記只列為對照概念，未提供本章媒體元素語法。 |
| 注意事項 | 需注意效能、安全性、可訪問性與來源是否允許嵌入。 | 依各媒體元素處理對應資源。 |
| 常見錯誤 | 把所有嵌入內容都用 iframe 處理。 | 在需要嵌入完整頁面時，媒體元素並不適用。 |

### 選用建議

- 嵌入完整頁面或第三方服務時，使用 `<iframe>`。
- 只是插入圖片、音訊或影片時，優先使用對應媒體元素。

### 11.2 HTML `width` / `height` vs CSS 尺寸控制

| 比較項目 | HTML `width` / `height` | CSS 尺寸控制 |
|---|---|---|
| 定義 | 直接在 `<iframe>` 屬性中設定顯示寬高。 | 使用 CSS 選擇器設定 iframe 的寬高。 |
| 使用時機 | 簡單固定尺寸範例。 | 需要配合版面、響應式或集中管理樣式時。 |
| 常見寫法 | `<iframe width="900" height="300"></iframe>` | `.preview-frame { width: 100%; height: 360px; }` |
| 注意事項 | 固定尺寸可能不適合小螢幕。 | 更適合維護視覺樣式。 |
| 常見錯誤 | 寬度寫死造成手機版溢出。 | 只設定寬度，忘記設定合適高度。 |

### 選用建議

- 初學範例可以用 HTML 屬性快速觀察。
- 正式專案較建議用 CSS 控制 iframe 尺寸。

### 11.3 `frameborder` vs CSS `border`

| 比較項目 | `frameborder` | CSS `border` |
|---|---|---|
| 定義 | 舊式 iframe 邊框控制屬性。 | CSS 邊框樣式控制。 |
| 使用時機 | 閱讀舊教材或舊專案時可能遇到。 | 新程式碼控制 iframe 邊框時。 |
| 常見寫法 | `<iframe frameborder="0"></iframe>` | `iframe { border: 0; }` |
| 注意事項 | 筆記建議新程式碼不要優先依賴。 | 可與其他 iframe 樣式集中管理。 |
| 常見錯誤 | 只會用 `frameborder`，導致樣式散落在 HTML。 | 忘記為 iframe 加上 class 或選擇器。 |

### 選用建議

- 看懂 `frameborder="0"` 的舊式意義。
- 新程式碼優先用 CSS `border`。

### 11.4 `<a target>` vs `<form target>`

| 比較項目 | `<a target>` | `<form target>` |
|---|---|---|
| 定義 | 指定連結開啟位置。 | 指定表單提交後回應頁面的顯示位置。 |
| 使用時機 | 點擊連結後把頁面載入指定 iframe。 | 表單提交後把結果載入指定 iframe。 |
| 常見寫法 | `<a href="./page.html" target="container">開啟</a>` | `<form action="/search" target="container"></form>` |
| 注意事項 | `target` 需對應 iframe `name`。 | `target` 需對應 iframe `name`。 |
| 常見錯誤 | `target` 名稱與 iframe `name` 不一致。 | `target` 名稱與 iframe `name` 不一致。 |

### 選用建議

- 要載入連結內容時使用 `<a target>`。
- 要載入表單提交結果時使用 `<form target>`。

---

## 12. 來源索引

| 附錄區塊 | 對應 notes 路徑 | 對應章節或小節 | 備註 |
|---|---|---|---|
| 3. 名詞表 | `notes/第24章_框架標籤/框架標籤.md` | §2 本章定位、§3 核心概念、§4 語法與基本用法、§6 實務應用場景、§8 與其他概念的關係 | 彙整 iframe 核心術語與用途。 |
| 4. HTML 元素表 | `notes/第24章_框架標籤/框架標籤.md` | §3 核心概念、§4 語法與基本用法、§5 範例說明 | `<iframe>` 為本章主題；`<a>`、`<form>` 等只列範例載體索引。 |
| 5. 屬性表 | `notes/第24章_框架標籤/框架標籤.md` | §4.1-§4.6、§5.1-§5.4 | 只列 notes 明確使用或說明的屬性。 |
| 9. 常用片段 | `notes/第24章_框架標籤/框架標籤.md` | §3、§4.1-§4.6、§5.1-§5.4、§7 | 片段保留最小可用範例。 |
| 10. 錯誤速查表 | `notes/第24章_框架標籤/框架標籤.md` | §4.2、§5.2、§6、§7、§9 | 對應 notes 的常見錯誤、注意事項與重點整理。 |
| 11. 相似概念對照表 | `notes/第24章_框架標籤/框架標籤.md` | §4.3、§4.4、§4.5、§4.6、§8、§11 | 對照 iframe 與其他元素、尺寸控制、邊框控制、target 用法。 |

---

## 13. 維護備註

- 若 `notes/` 新增 iframe 相關屬性、值、限制或安全設定，需同步更新名詞表、屬性表與錯誤速查表。
- 若後續 notes 補充 `sandbox`、`allow`、`referrerpolicy` 的語法與值表，再新增對應屬性條目。
- 若 notes 新增 iframe 相關 JavaScript API、事件或 DOM 操作，才新增 API / 方法表。
- 本附錄的 `<a>`、`<form>`、`<input>`、`<button>` 只作為 iframe target 搭配載體；若要查完整用法，應回到各自章節附錄。
