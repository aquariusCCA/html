# HTML 全局屬性 - 附錄查表資料

## Appendix 規劃

| 附錄區塊 | 對應 notes 知識點 | 產出形式 | 是否有足夠來源 |
|---|---|---|---|
| 1. 附錄定位 | 本章定位、本章學習目標、核心概念 | 範圍與使用方式 | 是 |
| 2. 附錄索引 | 全章可查找資料類型 | 索引表 | 是 |
| 3. 名詞表 | 全局屬性、DOM、`data-*`、`dataset`、鍵盤操作、可訪問性、國際化等 | 術語查表 | 是 |
| 4. HTML 元素表 | notes 範例中承載全局屬性的元素，例如 `p`、`button`、`article`、`html`、`textarea`、`div` 等 | 元素與全局屬性使用情境表 | 部分足夠 |
| 5. 屬性表 | `id`、`class`、`style`、`title`、`hidden`、`data-*`、`lang`、`dir`、`translate`、`contenteditable`、`spellcheck`、`draggable`、`tabindex`、`accesskey`、`contextmenu`、`dropzone` | 全局屬性查表 | 是 |
| 6. API / 方法表 | `dataset`、`querySelector()`、`querySelectorAll()`、`setAttribute()`、`addEventListener()`、`dataTransfer`、`preventDefault()`、`append()`、`getElementById()`、`hidden` DOM 屬性 | 有限 API 查表 | 是 |
| 7. 指令表 | notes 沒有 CLI 指令 | 不生成並標示原因 | 否 |
| 8. 設定檔範例 | notes 沒有設定檔內容 | 不生成並標示原因 | 否 |
| 9. 常用片段 | 全局屬性基本寫法、`id` / `class`、`data-*`、`hidden` 切換、語言與翻譯、可編輯內容、拖放、鍵盤焦點 | 最小可用 HTML / JS 片段 | 是 |
| 10. 錯誤速查表 | 第 7 節常見錯誤與修正、各屬性注意事項 | 錯誤原因與修正方向表 | 是 |
| 11. 相似概念對照表 | `id` vs `class`、`class` vs `style`、`lang` / `dir` / `translate`、`tabindex` vs `accesskey`、`draggable` / `contextmenu` / `dropzone` | 對照表 | 是 |
| 12. 來源索引 | notes 小節標題 | 回查索引表 | 是 |
| 13. 維護備註 | notes 與 appendix 同步維護需求 | 維護清單 | 是 |

---

## 1. 附錄定位

### 適用範圍

本附錄對應 `notes/第04章_全局屬性/全局屬性.md`，整理本章提到的 HTML 全局屬性、用途分類、最小使用片段、常見錯誤、DOM / JavaScript 關係、可訪問性與國際化相關注意事項。

### 使用方式

- 查找某個全局屬性的用途、常見值與注意事項時，優先查第 5 節。
- 需要複用最小範例時，查第 9 節。
- 遇到 `id`、`class`、`style`、`data-*`、`tabindex` 或低支援屬性相關問題時，查第 10 節。
- 需要回到正式筆記深入閱讀時，查第 12 節來源索引。

---

## 2. 附錄索引

| 區塊 | 內容類型 | 適合查找的問題 |
|---|---|---|
| 3. 名詞表 | 概念與術語 | 這個名詞是什麼？ |
| 4. HTML 元素表 | 範例元素與屬性載體 | notes 中哪些元素搭配了全局屬性？ |
| 5. 屬性表 | 全局屬性與值 | 這個屬性用在哪裡？ |
| 6. API / 方法表 | DOM API、方法、屬性、事件資料 | notes 範例中用到哪些 JavaScript 操作？ |
| 7. 指令表 | CLI 指令 | 本章是否提到指令？ |
| 8. 設定檔範例 | 設定片段 | 本章是否提到設定檔？ |
| 9. 常用片段 | 最小程式碼範例 | 這個場景的最小寫法是什麼？ |
| 10. 錯誤速查表 | 常見錯誤 | 出錯時優先檢查什麼？ |
| 11. 相似概念對照表 | 相似概念比較 | A 和 B 差在哪？ |
| 12. 來源索引 | notes 回查資訊 | 這個附錄條目來自哪個小節？ |
| 13. 維護備註 | 後續維護規則 | notes 更新後要同步檢查什麼？ |

---

## 3. 名詞表

| 名詞 | 英文 | 簡要定義 | 用途 | 注意事項 | 來源 |
|---|---|---|---|---|---|
| 全局屬性 | Global attributes | 可以用在大多數 HTML 元素上的屬性。 | 補充元素的識別、分類、樣式、語言、互動狀態或自訂資料。 | 可以使用不代表一定有用，仍要判斷實際用途。 | 2. 本章定位、3.1 什麼是全局屬性、3.2 可以使用不代表一定有用 |
| 識別與分類 | Identification and classification | 用 `id` 與 `class` 讓元素可被定位或分組。 | 供 CSS、JavaScript 或頁內連結使用。 | `id` 應唯一，分類需求優先用 `class`。 | 3.3 全局屬性的常見分類、4.3 `id` 與 `class` |
| 自訂資料 | Custom data | 透過 `data-*` 在元素上存放開發者自訂資料。 | 保存與元素相關、供前端互動讀取的資料。 | 不適合存放敏感資料。 | 3.3 全局屬性的常見分類、4.4 `data-*` |
| `dataset` | dataset | JavaScript 讀取 `data-*` 的 DOM 介面。 | 從元素取得自訂資料。 | `data-product-id` 這類連字號名稱會在 `dataset` 中轉為 camelCase。 | 4.4 `data-*`、5. 範例說明 |
| camelCase | camelCase | notes 用來描述 `data-*` 轉入 `dataset` 後的命名形式。 | 理解 `data-product-id` 對應 `dataset.productId`。 | 連字號後的字母會轉成 camelCase 形式。 | 4.4 `data-*` |
| 行內樣式 | Inline style | 透過 `style` 屬性直接寫在元素上的 CSS。 | 快速指定單一元素樣式。 | 會提高樣式覆蓋優先權，實務上不宜大量使用。 | 4.2 常用全局屬性速查、7. 常見錯誤與修正 |
| 額外提示文字 | Tooltip-like information | `title` 常見用途是提供滑鼠停留提示。 | 補充元素額外資訊。 | 重要資訊不應只放在 `title`。 | 4.2 常用全局屬性速查、7. 常見錯誤與修正 |
| 隱藏狀態 | Hidden state | `hidden` 表示元素目前不應顯示。 | 暫時隱藏內容，或由 JavaScript 切換顯示狀態。 | 視覺隱藏但仍給輔助工具時，通常不應直接使用 `hidden`。 | 4.5 `hidden` |
| 語言標示 | Language indication | `lang` 指定元素內容語言。 | 協助瀏覽器、搜尋引擎與螢幕閱讀器理解語言。 | 多語內容可在局部元素另設 `lang`。 | 4.6 語言、文字方向與翻譯控制、6. 實務應用場景 |
| 文字方向 | Text direction | `dir` 指定文字方向。 | 處理從左到右、從右到左或自動判斷的文字方向。 | notes 提到常見值有 `ltr`、`rtl`、`auto`。 | 4.2 常用全局屬性速查、4.6 語言、文字方向與翻譯控制 |
| 翻譯控制提示 | Translation hint | `translate` 提示內容是否應被翻譯。 | 常用於品牌名、書名、程式碼或專有名詞。 | 不應拿來保護機密內容。 | 4.2 常用全局屬性速查、4.6 語言、文字方向與翻譯控制 |
| 可編輯內容 | Editable content | `contenteditable` 讓元素內容可被使用者編輯。 | 建立頁面內可編輯區塊。 | 只讓畫面可編輯，不會自動保存資料。 | 4.7 `contenteditable` 與 `spellcheck` |
| 拼字檢查 | Spell checking | `spellcheck` 控制是否進行拼字或語法檢查。 | 改善文字輸入、`textarea` 或可編輯元素體驗。 | 實際檢查方式由瀏覽器與使用者環境決定。 | 4.7 `contenteditable` 與 `spellcheck` |
| 拖放操作 | Drag and drop | `draggable` 與 JavaScript 拖放事件共同支撐拖曳互動。 | 標示可拖曳元素並處理拖放行為。 | 只有 HTML 屬性通常不夠，仍需要 JavaScript 事件。 | 4.8 `draggable`、`contextmenu` 與 `dropzone` |
| 鍵盤焦點順序 | Keyboard focus order | `tabindex` 影響 Tab 鍵聚焦行為。 | 讓非自然聚焦元素可聚焦，或控制焦點行為。 | 通常優先使用自然 DOM 順序，避免濫用正整數。 | 4.9 `tabindex` 與 `accesskey` |
| 快捷鍵 | Access key | `accesskey` 為元素設定鍵盤快捷鍵。 | 作為輔助操作方式。 | 啟用方式依作業系統與瀏覽器不同，也可能衝突。 | 4.9 `tabindex` 與 `accesskey` |
| 可訪問性 | Accessibility | 與輔助工具、鍵盤操作、語言標示、隱藏狀態相關的使用者體驗。 | 評估 `lang`、`hidden`、`tabindex`、`accesskey` 等屬性的影響。 | 鍵盤操作應優先使用正確 HTML 結構與自然焦點順序。 | 6. 實務應用場景、8. 與其他概念的關係 |
| 國際化 | Internationalization | 多語系內容相關處理。 | 使用 `lang`、`dir`、`translate` 協助瀏覽器、翻譯工具與輔助工具。 | `translate` 只是提示，仍可能受工具或使用者設定影響。 | 6. 實務應用場景、8. 與其他概念的關係 |

---

## 4. HTML 元素表

本章不是 HTML 元素教學；下表只整理 notes 中作為全局屬性載體出現的元素。

| 元素 | 用途 | 常用屬性 | 使用情境 | 最小範例 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|
| `p` | 作為段落範例。 | `id`、`class`、`lang`、`data-*`、`hidden`、`contenteditable`、`spellcheck`、`dir`、`contextmenu` | 展示全局屬性可附加在一般文字元素上。 | `<p lang="en">Text</p>` | 不要因為可加屬性就隨意堆疊。 | 3.1、4.5、4.6、4.7、4.8 |
| `button` | 作為按鈕互動範例。 | `id`、`class`、`data-*`、`tabindex` | 展示操作按鈕、事件綁定與資料標記。 | `<button type="button" data-action="save">儲存</button>` | `type` 不是本章全局屬性重點。 | 4.1、4.5、4.9、5. 範例說明 |
| `li` | 作為清單項目範例。 | `class`、`data-*` | 展示多個元素共用 class 並以 `data-*` 保存資料。 | `<li class="item" data-type="book">書籍</li>` | `data-*` 不適合敏感資料。 | 4.4 `data-*` |
| `article` | 作為商品卡片範例。 | `id`、`class`、`data-*` | 同時連接 HTML、CSS 與 JavaScript。 | `<article id="product-42" class="product-card" data-product-id="42">...</article>` | `id` 適合唯一識別，`class` 適合分類。 | 5. 範例一 |
| `h2` | 作為標題或頁內定位範例。 | `id`、`class` | 展示頁內連結定位與卡片標題分類。 | `<h2 id="features">產品特色</h2>` | 不要為了套樣式替每個元素建立不同 `id`。 | 4.3 `id` 與 `class`、5. 範例一 |
| `a` | 作為頁內連結與快捷鍵範例。 | `href`、`accesskey` | 展示連到 `id` 的頁內連結或鍵盤快捷鍵。 | `<a href="#features">跳到產品特色</a>` | `accesskey` 不應作為主要操作方式。 | 4.3、4.9 |
| `html` | 作為整頁語言與翻譯控制範例。 | `lang`、`translate` | 宣告整頁語言或整站不希望自動翻譯。 | `<html lang="en" translate="no">...</html>` | `translate` 仍可能受工具或使用者設定影響。 | 4.6 語言、文字方向與翻譯控制 |
| `span` | 作為局部語言與翻譯控制範例。 | `lang`、`translate` | 在中文段落中標示英文術語。 | `<span lang="en" translate="no">HTML Global Attributes</span>` | 適合局部片段，不取代整頁語言宣告。 | 5. 範例二 |
| `cite` | 作為書名不翻譯範例。 | `translate` | 標示書名不建議自動翻譯。 | `<cite translate="no">How Far Can You Go?</cite>` | notes 只用於翻譯控制示例。 | 4.6 語言、文字方向與翻譯控制 |
| `textarea` | 作為文字輸入範例。 | `id`、`spellcheck` | 控制文字輸入區是否進行拼字檢查。 | `<textarea id="message" spellcheck="true"></textarea>` | 實際檢查方式由瀏覽器與使用者環境決定。 | 4.7 `contenteditable` 與 `spellcheck` |
| `div` | 作為可編輯或拖放區塊範例。 | `contenteditable`、`spellcheck`、`draggable`、`id`、`dropzone`、`tabindex` | 展示可編輯區塊、可拖曳元素與鍵盤聚焦。 | `<div tabindex="0">可聚焦區塊</div>` | `dropzone` 原始資料標示主流瀏覽器不支援。 | 4.7、4.8、4.9 |
| `section` | 作為可編輯內容範例容器。 | 原筆記未列出 `section` 自身全局屬性 | 包住個人簡介編輯範例。 | `<section>...</section>` | notes 未展開 `section` 語意。 | 5. 範例三 |
| `br` | 作為「可寫不代表有用」範例。 | `class` | 展示全局屬性可用但未必有維護價值。 | `<br class="line-break">` | 通常不會造成語法錯誤，但不一定有助於學習與維護。 | 3.2 可以使用不代表一定有用 |

---

## 5. 屬性表

| 屬性 | 適用元素 | 常見值 | 用途 | 範例 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|
| `id` | 多數 HTML 元素 | `intro`、`features`、`product-42` | 定義文件中唯一的元素識別名稱。 | `<h2 id="features">產品特色</h2>` | 同一份 HTML 文件中不應重複。 | 4.2 常用全局屬性速查、4.3 `id` 與 `class` |
| `class` | 多數 HTML 元素 | `lead`、`intro important`、`product-card featured` | 定義元素分類，供 CSS 或 JavaScript 選取。 | `<p class="intro important">文字</p>` | 多個 class 用空格分隔，不要重複寫多個 `class` 屬性。 | 4.2、4.3、7. 常見錯誤與修正 |
| `style` | 多數 HTML 元素 | `color: red` | 設定行內樣式。 | `<h1 style="color: blue;">標題</h1>` | 會提高樣式覆蓋優先權，實務上不宜大量使用。 | 4.2、7. 常見錯誤與修正 |
| `title` | 多數 HTML 元素 | `補充說明` | 提供元素額外資訊，常見為滑鼠停留提示。 | `<button title="補充說明">送出</button>` | 不應把重要資訊只放在 `title`。 | 4.2、7. 常見錯誤與修正 |
| `hidden` | 多數 HTML 元素 | 布林屬性，或由 JavaScript 切換 DOM 屬性 | 表示元素目前不應顯示。 | `<p hidden>暫時隱藏</p>` | 若只是視覺隱藏但仍提供給輔助工具，通常不應直接使用 `hidden`。 | 4.2、4.5 |
| `data-*` | 多數 HTML 元素 | `data-user-id="42"`、`data-action="save"`、`data-product-id="42"` | 存放頁面或應用程式需要的自訂資料。 | `<button data-action="add-to-cart">加入購物車</button>` | 建議使用小寫與連字號；不可存放密碼、token、個人隱私或敏感資料。 | 4.2、4.4、5. 範例一 |
| `lang` | 多數 HTML 元素，常見於 `html` 或局部文字元素 | `zh-Hant`、`en` | 指定元素內容語言。 | `<p lang="en">This paragraph is written in English.</p>` | 有助於搜尋引擎、瀏覽器與螢幕閱讀器理解語言。 | 4.2、4.6、5. 範例二 |
| `dir` | 多數 HTML 元素 | `ltr`、`rtl`、`auto` | 指定文字方向。 | `<p dir="rtl">文字</p>` | notes 僅整理常見實務用法。 | 4.2、4.6 |
| `translate` | 多數 HTML 元素 | `no` | 指定內容是否適合被翻譯。 | `<span translate="no">HTML Global Attributes</span>` | `translate` 是提示，不應用來保護機密內容。 | 4.2、4.6、5. 範例二 |
| `contenteditable` | 多數 HTML 元素 | `true`、`false` | 讓元素內容可被使用者編輯。 | `<p contenteditable="true">可編輯文字</p>` | 不等於自動保存資料，仍需額外讀取與儲存流程。 | 4.2、4.7、5. 範例三 |
| `spellcheck` | 文字輸入、`textarea` 或可編輯元素 | `true` | 控制是否進行拼字或語法檢查。 | `<textarea spellcheck="true"></textarea>` | 實際檢查方式由瀏覽器與使用者環境決定。 | 4.2、4.7、6. 實務應用場景 |
| `draggable` | 多數 HTML 元素 | `true` | 指定元素是否可拖曳。 | `<div id="drag-item" draggable="true">拖曳我</div>` | 通常需要搭配 JavaScript Drag and Drop API。 | 4.2、4.8 |
| `tabindex` | 多數 HTML 元素 | `0`、`-1`、`1` 或更大 | 控制元素是否可被 Tab 鍵聚焦，以及焦點順序。 | `<div tabindex="0">可聚焦區塊</div>` | 通常優先使用自然 DOM 順序，避免濫用正整數。 | 4.2、4.9 |
| `accesskey` | 多數 HTML 元素 | `s` | 為元素設定鍵盤快捷鍵。 | `<a href="/search" accesskey="s">搜尋</a>` | 啟用方式因作業系統與瀏覽器不同，也可能與既有快捷鍵衝突。 | 4.2、4.9 |
| `contextmenu` | 多數 HTML 元素 | `menu-id`、`my-menu` | 原始用途是把元素與自訂右鍵選單關聯。 | `<p contextmenu="my-menu">右鍵點擊這段文字。</p>` | 原始資料標示主流瀏覽器支援不佳，不建議依賴。 | 4.2、4.8 |
| `dropzone` | 多數 HTML 元素 | `copy` | 原始用途是描述拖放資料進入元素時的處理意圖。 | `<div dropzone="copy"></div>` | 原始資料標示主流瀏覽器不支援，實務上不建議使用。 | 4.2、4.8 |

---

## 6. API / 方法表

| API / 方法 | 類型 | 用途 | 語法 | 回傳值 | 範例 | 注意事項 | 來源 |
|---|---|---|---|---|---|---|---|
| `document.querySelectorAll()` | DOM API 方法 | 選取多個符合選擇器的元素。 | `document.querySelectorAll(".class-name")` | 原筆記未說明回傳值。 | `const items = document.querySelectorAll(".class-name");` | notes 用於讀取多個帶有 `data-*` 的元素。 | 4.4 `data-*` |
| `document.querySelector()` | DOM API 方法 | 選取第一個符合選擇器的元素。 | `document.querySelector("#apple")` | 原筆記未說明回傳值。 | `const product = document.querySelector("#product-42");` | notes 用於取得元素後讀寫屬性或綁定事件。 | 4.4 `data-*`、4.5 `hidden`、5. 範例一 |
| `Element.dataset` | DOM 屬性 | 讀取 `data-*` 自訂資料。 | `element.dataset.productId` | 原筆記未說明完整回傳值規則。 | `console.log(product.dataset.productId);` | `data-product-id` 會對應到 `dataset.productId`。 | 4.4 `data-*`、5. 範例一 |
| `Element.setAttribute()` | DOM API 方法 | 設定元素 attribute。 | `element.setAttribute("data-food-type", "fruit")` | 原筆記未提供回傳值。 | `apple.setAttribute("data-food-type", "fruit");` | notes 用於設定 `data-*`。 | 4.4 `data-*` |
| `Element.hidden` | DOM 屬性 | 讀寫元素的 `hidden` 狀態。 | `element.hidden = !element.hidden` | 原筆記未說明回傳值。 | `helpText.hidden = !helpText.hidden;` | 可用於切換元素顯示與隱藏。 | 4.5 `hidden` |
| `Element.addEventListener()` | DOM API 方法 | 監聽使用者操作或拖放事件。 | `element.addEventListener("click", handler)` | 原筆記未提供回傳值。 | `button.addEventListener("click", () => {...});` | notes 用於點擊切換、加入購物車與拖放事件。 | 4.5、4.8、5. 範例一 |
| `event.dataTransfer.setData()` | Drag and Drop API 方法 | 在拖曳開始時設定拖放資料。 | `event.dataTransfer.setData("text/plain", item.id)` | 原筆記未提供回傳值。 | `event.dataTransfer.setData("text/plain", item.id);` | 用於 `dragstart` 範例。 | 4.8 `draggable`、`contextmenu` 與 `dropzone` |
| `event.dataTransfer.getData()` | Drag and Drop API 方法 | 在放下時取得拖放資料。 | `event.dataTransfer.getData("text/plain")` | 原筆記未說明回傳值。 | `const id = event.dataTransfer.getData("text/plain");` | 用於 `drop` 範例取得拖曳元素 id。 | 4.8 `draggable`、`contextmenu` 與 `dropzone` |
| `event.preventDefault()` | 事件方法 | 阻止預設行為。 | `event.preventDefault()` | 原筆記未提供回傳值。 | `event.preventDefault();` | notes 在 `dragover` 與 `drop` 中使用。 | 4.8 `draggable`、`contextmenu` 與 `dropzone` |
| `target.append()` | DOM API 方法 | 把節點加入目標元素。 | `target.append(document.getElementById(id))` | 原筆記未提供回傳值。 | `target.append(document.getElementById(id));` | notes 用於拖放後移動元素。 | 4.8 `draggable`、`contextmenu` 與 `dropzone` |
| `document.getElementById()` | DOM API 方法 | 依 id 取得元素。 | `document.getElementById(id)` | 原筆記未說明回傳值。 | `document.getElementById(id)` | notes 用於拖放範例。 | 4.8 `draggable`、`contextmenu` 與 `dropzone` |

---

## 7. 指令表

原筆記資訊不足，暫不生成此區塊。

此 notes 內容不足以生成「指令表」，原因：本章沒有提供任何 CLI 指令、參數或執行範例。

---

## 8. 設定檔範例

原筆記資訊不足，暫不生成此區塊。

此 notes 內容不足以生成「設定檔範例」，原因：本章沒有提供設定檔、設定欄位、修改位置或設定檔格式。

---

## 9. 常用片段

### 9.1 全局屬性基本寫法

| 項目 | 說明 |
|---|---|
| 使用情境 | 在元素開始標籤中補充識別、分類或自訂資料。 |
| 使用前提 | 已有需要補充資訊的 HTML 元素。 |
| 來源 | 3.1 什麼是全局屬性、4.1 全局屬性的基本語法 |

```html
<p id="intro" class="lead" lang="zh-Hant" data-section="hero">
  歡迎學習 HTML。
</p>
```

### 注意事項

- 全局屬性通常可以寫在多數元素上。
- 是否應該使用，仍取決於屬性能否清楚表達用途、狀態或操作需求。

### 9.2 `id`、`class` 與頁內連結

| 項目 | 說明 |
|---|---|
| 使用情境 | 需要唯一定位某個區塊，並讓連結跳到該區塊。 |
| 使用前提 | 目標元素的 `id` 在文件中唯一。 |
| 來源 | 4.3 `id` 與 `class` |

```html
<h2 id="features">產品特色</h2>
<a href="#features">跳到產品特色</a>
```

### 注意事項

- `id` 適合唯一識別。
- 重複分類或套樣式需求，優先使用 `class`。

### 9.3 多個 class

| 項目 | 說明 |
|---|---|
| 使用情境 | 同一元素需要同時屬於多個分類。 |
| 使用前提 | 每個 class 名稱用空格分隔。 |
| 來源 | 4.3 `id` 與 `class`、7. 常見錯誤與修正 |

```html
<p class="intro important">這是一段重要的介紹文字。</p>
```

### 注意事項

- 不要在同一元素重複寫多個 `class` 屬性。

### 9.4 `data-*` 與 `dataset`

| 項目 | 說明 |
|---|---|
| 使用情境 | 在 HTML 元素上存放前端互動需要的自訂資料。 |
| 使用前提 | 資料不是密碼、token、個人隱私或其他敏感資料。 |
| 來源 | 4.4 `data-*`、5. 範例一 |

```html
<button type="button" data-action="add-to-cart">
  加入購物車
</button>
```

```js
const button = document.querySelector("[data-action='add-to-cart']");

button.addEventListener("click", () => {
  console.log(button.dataset.action);
});
```

### 注意事項

- `data-*` 內容會出現在 HTML 或 DOM 中。
- `data-product-id` 在 `dataset` 中會變成 `productId`。

### 9.5 切換 `hidden`

| 項目 | 說明 |
|---|---|
| 使用情境 | 需要根據使用者操作顯示或隱藏提示文字。 |
| 使用前提 | JavaScript 可取得要切換的元素。 |
| 來源 | 4.5 `hidden` |

```html
<button type="button" id="toggle-help">顯示或隱藏說明</button>
<p id="help-text" hidden>請輸入有效的電子郵件地址。</p>
```

```js
const button = document.querySelector("#toggle-help");
const helpText = document.querySelector("#help-text");

button.addEventListener("click", () => {
  helpText.hidden = !helpText.hidden;
});
```

### 注意事項

- `hidden` 表示元素目前不應顯示。
- 若內容只是視覺上隱藏但仍要提供給輔助工具，notes 提醒通常不應直接使用 `hidden`。

### 9.6 語言與翻譯控制

| 項目 | 說明 |
|---|---|
| 使用情境 | 在中文內容中保留英文術語或專有名詞。 |
| 使用前提 | 需要讓工具知道局部內容語言與翻譯意圖。 |
| 來源 | 4.6 語言、文字方向與翻譯控制、5. 範例二 |

```html
<p lang="zh-Hant">
  本章會提到
  <span lang="en" translate="no">HTML Global Attributes</span>
  這個主題。
</p>
```

### 注意事項

- `lang` 可標示內容語言。
- `translate="no"` 只是給工具的提示，不應用來保護機密內容。

### 9.7 可編輯內容與拼字檢查

| 項目 | 說明 |
|---|---|
| 使用情境 | 讓頁面上的文字內容可直接編輯，並提示瀏覽器可檢查拼字。 |
| 使用前提 | 仍需另外設計儲存流程。 |
| 來源 | 4.7 `contenteditable` 與 `spellcheck`、5. 範例三 |

```html
<p id="bio" contenteditable="true" spellcheck="true">
  請在這裡輸入你的個人簡介。
</p>
```

### 注意事項

- `contenteditable` 只處理瀏覽器中的編輯互動。
- 若要保存結果，需要額外用 JavaScript 讀取內容並送到後端或儲存位置。

### 9.8 拖曳元素標記

| 項目 | 說明 |
|---|---|
| 使用情境 | 標示某個元素可被拖曳。 |
| 使用前提 | 需要搭配 JavaScript 拖放事件才能完成拖放操作。 |
| 來源 | 4.8 `draggable`、`contextmenu` 與 `dropzone` |

```html
<div id="drag-item" draggable="true">拖曳我</div>
<div id="drop-target">放到這裡</div>
```

### 注意事項

- 只有 `draggable="true"` 通常不夠。
- notes 的完整拖放範例還處理 `dragstart`、`dragover` 與 `drop` 事件。

### 9.9 鍵盤焦點

| 項目 | 說明 |
|---|---|
| 使用情境 | 讓一般區塊也可以依自然 DOM 順序被 Tab 聚焦。 |
| 使用前提 | 需要考慮鍵盤操作與可訪問性。 |
| 來源 | 4.9 `tabindex` 與 `accesskey` |

```html
<button type="button" tabindex="0">可以依自然順序聚焦</button>
<div tabindex="0">這個區塊也可以被鍵盤聚焦</div>
```

### 注意事項

- 通常優先使用自然 DOM 順序。
- 避免濫用正整數 `tabindex` 強制改變焦點順序。

---

## 10. 錯誤速查表

| 錯誤現象 | 可能原因 | 修正方向 | 對應知識點 | 來源 |
|---|---|---|---|---|
| 在同一份文件中重複使用相同 `id` | `id` 應該唯一，重複會讓 CSS、JavaScript 或頁內連結行為難以預測。 | 改用唯一 `id`，重複分類需求使用 `class`。 | `id` 與 `class` | 7. 常見錯誤與修正 |
| 為同一元素寫多個 `class` 屬性 | HTML 不應重複同名屬性。 | 把多個 class 放在同一個屬性值中，用空格分隔。 | `class` | 7. 常見錯誤與修正 |
| 大量使用 `style` 寫樣式 | 行內樣式不易維護，也容易覆蓋外部 CSS。 | 優先使用 class 搭配 CSS 檔案管理樣式。 | `style`、CSS | 7. 常見錯誤與修正 |
| 把重要說明只放在 `title` | `title` 不一定能被觸控、鍵盤或輔助工具使用者穩定取得。 | 重要資訊應放在可見文字、label 或適當的輔助文字中。 | `title`、可訪問性 | 7. 常見錯誤與修正 |
| 用正整數 `tabindex` 強制調整焦點順序 | 會破壞 DOM 自然順序，頁面變大後很難維護。 | 優先調整 HTML 結構，必要時使用 `tabindex="0"` 或 `-1`。 | `tabindex` | 4.9、7. 常見錯誤與修正 |
| 依賴 `accesskey` 作為主要操作方式 | 快捷鍵組合因系統與瀏覽器不同，且可能衝突。 | 把它當輔助功能，不要取代清楚的按鈕、連結與表單操作。 | `accesskey` | 4.9、7. 常見錯誤與修正 |
| 把敏感資料放進 `data-*` | `data-*` 會暴露在 DOM 中，使用者可透過開發者工具看到。 | 敏感資料應留在後端或透過安全流程取得。 | `data-*` | 4.4、7. 常見錯誤與修正 |
| 使用 `contenteditable` 但沒有保存與清理資料 | 使用者修改的內容只存在瀏覽器畫面中，也可能輸入不安全 HTML。 | 明確設計儲存流程，送出前進行必要驗證與清理。 | `contenteditable` | 4.7、7. 常見錯誤與修正 |
| 依賴 `contextmenu` 或 `dropzone` | 原始資料標示這些屬性支援不佳。 | 改用 JavaScript 事件與可訪問性友善的互動設計。 | `contextmenu`、`dropzone` | 4.8、7. 常見錯誤與修正 |
| 認為全局屬性能寫就應該寫 | 全局屬性可以用在多數元素上，但不一定對每個元素都有實際價值。 | 只在屬性能清楚表達用途、狀態或操作需求時使用。 | 全局屬性使用判斷 | 3.2 可以使用不代表一定有用 |
| 用 `translate` 保護機密內容 | `translate` 只是給工具的提示，不能保證內容不被翻譯或保護。 | 機密內容不應放在前端頁面或 DOM 中。 | `translate` | 4.6 語言、文字方向與翻譯控制 |
| 只加 `draggable` 卻期待完整拖放功能 | `draggable` 只指定元素是否可拖曳。 | 搭配 JavaScript Drag and Drop API 處理事件。 | `draggable`、拖放事件 | 4.8 `draggable`、`contextmenu` 與 `dropzone` |

---

## 11. 相似概念對照表

### 11.1 `id` vs `class`

| 比較項目 | `id` | `class` |
|---|---|---|
| 定義 | 文件中的唯一元素識別名稱。 | 元素分類名稱。 |
| 使用時機 | 頁內連結、JavaScript 選取或特定區塊定位。 | CSS 樣式、JavaScript 選取或可重複套用的狀態分類。 |
| 常見寫法 | `<h2 id="features">產品特色</h2>` | `<p class="intro important">文字</p>` |
| 注意事項 | 同一份 HTML 文件中不應重複。 | 多個 class 寫在同一個 `class` 屬性中，用空格分隔。 |
| 常見錯誤 | 為了套樣式替每個元素建立不同 `id`。 | 重複寫多個 `class` 屬性。 |

### 選用建議

- 唯一定位用 `id`；可重複分類與樣式管理用 `class`。

### 11.2 `class` vs `style`

| 比較項目 | `class` | `style` |
|---|---|---|
| 定義 | 替元素指定分類。 | 直接在元素上寫行內樣式。 |
| 使用時機 | 多個元素共用樣式或狀態分類。 | notes 僅示範可設定行內樣式。 |
| 常見寫法 | `<h1 class="page-title">標題</h1>` | `<h1 style="color: blue;">標題</h1>` |
| 注意事項 | 適合搭配 CSS 檔案管理樣式。 | 會提高樣式覆蓋優先權，不宜大量使用。 |
| 常見錯誤 | 原筆記未列出 class 管理樣式本身的錯誤。 | 用 `style` 管理大量樣式，導致維護困難。 |

### 選用建議

- 實務上優先使用 `class` 搭配 CSS 檔案；`style` 不適合大量承擔樣式管理。

### 11.3 `lang` vs `dir` vs `translate`

| 比較項目 | `lang` | `dir` | `translate` |
|---|---|---|---|
| 定義 | 指定元素內容語言。 | 指定文字方向。 | 指定內容是否適合被翻譯。 |
| 使用時機 | 需要讓瀏覽器、搜尋引擎或螢幕閱讀器理解語言。 | 需要控制文字從左到右、從右到左或自動判斷。 | 品牌名、書名、程式碼或專有名詞不建議翻譯時。 |
| 常見寫法 | `<p lang="en">Text</p>` | `<p dir="rtl">文字</p>` | `<span translate="no">HTML Global Attributes</span>` |
| 注意事項 | 可放在整頁或局部元素。 | 常見值有 `ltr`、`rtl`、`auto`。 | 是否翻譯仍可能受到瀏覽器、翻譯工具或使用者設定影響。 |
| 常見錯誤 | 原筆記未列出具體錯誤。 | 原筆記未列出具體錯誤。 | 用來保護機密內容。 |

### 選用建議

- 語言、文字方向與翻譯意圖是不同問題；多語內容可視需要同時使用這三類屬性。

### 11.4 `hidden` vs 視覺隱藏

| 比較項目 | `hidden` | 視覺隱藏 |
|---|---|---|
| 定義 | 表示元素目前不應顯示。 | notes 提到可用專門的 visually hidden CSS 寫法處理。 |
| 使用時機 | 某段內容需要等使用者完成操作後才顯示。 | 內容只想視覺上隱藏，但仍要提供給輔助工具。 |
| 常見寫法 | `<p hidden>暫時隱藏</p>` | 原筆記未提供 CSS 寫法。 |
| 注意事項 | 可用 JavaScript 移除或切換此屬性。 | 原筆記只提醒此情境通常不應直接使用 `hidden`。 |
| 常見錯誤 | 把需要給輔助工具的內容直接設為 `hidden`。 | 原筆記未列出具體錯誤。 |

### 選用建議

- 不應顯示的內容可用 `hidden`；若只是視覺隱藏但仍要讓輔助工具取得，應另用合適 CSS 寫法。

### 11.5 `tabindex` vs `accesskey`

| 比較項目 | `tabindex` | `accesskey` |
|---|---|---|
| 定義 | 控制元素是否可被 Tab 聚焦，以及焦點順序。 | 為元素設定鍵盤快捷鍵。 |
| 使用時機 | 需要讓元素可聚焦，或配合 JavaScript 焦點控制。 | 需要提供輔助性快捷操作。 |
| 常見寫法 | `<div tabindex="0">可聚焦區塊</div>` | `<a href="/search" accesskey="s">搜尋</a>` |
| 注意事項 | 優先使用自然 DOM 順序，避免濫用正整數。 | 啟用方式因系統與瀏覽器不同，且可能衝突。 |
| 常見錯誤 | 用正整數強制調整焦點順序。 | 依賴它作為主要操作方式。 |

### 選用建議

- 鍵盤操作應先建立正確 HTML 結構與自然焦點順序；`tabindex` 與 `accesskey` 都不應拿來補救混亂的操作設計。

### 11.6 `draggable` vs `contextmenu` vs `dropzone`

| 比較項目 | `draggable` | `contextmenu` | `dropzone` |
|---|---|---|---|
| 定義 | 指定元素是否可拖曳。 | 原始用途是把元素與自訂右鍵選單關聯。 | 原始用途是描述拖放資料進入元素時的處理意圖。 |
| 使用時機 | 需要拖曳互動時，搭配 JavaScript 拖放事件使用。 | 原筆記僅展示原始用途。 | 原筆記僅展示原始用途。 |
| 常見寫法 | `<div draggable="true">拖曳我</div>` | `<p contextmenu="my-menu">右鍵點擊這段文字。</p>` | `<div dropzone="copy"></div>` |
| 注意事項 | 只有 HTML 屬性通常不夠。 | 原始資料標示只有 Firefox 支援。 | 原始資料標示所有主流瀏覽器都不支援。 |
| 常見錯誤 | 只加屬性就期待完整拖放功能。 | 在正式專案中依賴此屬性。 | 在正式專案中依賴此屬性。 |

### 選用建議

- 拖放操作以 `draggable` 搭配 JavaScript 事件處理；`contextmenu` 與 `dropzone` 因 notes 標示支援不佳，不建議依賴。

---

## 12. 來源索引

| 附錄區塊 | 對應 notes 路徑 | 對應章節或小節 | 備註 |
|---|---|---|---|
| Appendix 規劃 | `notes/第04章_全局屬性/全局屬性.md` | 全章 | 依 notes 可支撐的附錄類型規劃。 |
| 1. 附錄定位 | `notes/第04章_全局屬性/全局屬性.md` | 1. 本章學習目標、2. 本章定位 | 整理附錄適用範圍。 |
| 2. 附錄索引 | `notes/第04章_全局屬性/全局屬性.md` | 全章 | 依可查找資料類型建立索引。 |
| 3. 名詞表 | `notes/第04章_全局屬性/全局屬性.md` | 3. 核心概念、4. 語法與基本用法、6. 實務應用場景、8. 與其他概念的關係 | 收錄本章可查找術語。 |
| 4. HTML 元素表 | `notes/第04章_全局屬性/全局屬性.md` | 3.1、3.2、4.1 至 4.9、5. 範例說明 | 僅整理 notes 範例中承載全局屬性的元素。 |
| 5. 屬性表 | `notes/第04章_全局屬性/全局屬性.md` | 2. 本章定位、3.3、4.2 至 4.9、5. 範例說明 | 收錄 notes 明確提到的全局屬性。 |
| 6. API / 方法表 | `notes/第04章_全局屬性/全局屬性.md` | 4.4、4.5、4.8、5. 範例說明、8. 與其他概念的關係 | 整理 notes 範例中使用的 DOM 與拖放相關 API。 |
| 7. 指令表 | `notes/第04章_全局屬性/全局屬性.md` | 全章 | 原筆記資訊不足，暫不生成。 |
| 8. 設定檔範例 | `notes/第04章_全局屬性/全局屬性.md` | 全章 | 原筆記資訊不足，暫不生成。 |
| 9. 常用片段 | `notes/第04章_全局屬性/全局屬性.md` | 3.1、4.1 至 4.9、5. 範例說明 | 整理最小可用 HTML / JS 片段。 |
| 10. 錯誤速查表 | `notes/第04章_全局屬性/全局屬性.md` | 3.2、4.2 至 4.9、7. 常見錯誤與修正 | 整理錯誤現象、原因與修正方向。 |
| 11. 相似概念對照表 | `notes/第04章_全局屬性/全局屬性.md` | 3.3、4.3 至 4.9、7. 常見錯誤與修正 | 依 notes 中容易混淆的概念建立對照。 |
| 13. 維護備註 | `notes/第04章_全局屬性/全局屬性.md` | 全章 | 提醒後續同步維護。 |

---

## 13. 維護備註

- 若 `notes/` 新增全局屬性、屬性值、DOM API、事件或範例，需同步更新第 5、6、9、10、11 節。
- 若後續補充 `contextmenu`、`dropzone` 的標準狀態、瀏覽器版本支援或替代方案，需更新第 5、10、11 節。
- 若後續補充 visually hidden CSS 寫法，需更新第 9 節常用片段與第 11.4 節對照表。
- 若新增完整拖放教學，應確認是否拆到補充資料或獨立附錄，不要讓本附錄變成完整 Drag and Drop 教學。
- 若某區塊標示「原筆記資訊不足」，後續補齊 `notes/` 後再重新生成。
- 常用片段應維持最小可用範例，避免變成另一份完整教學筆記。
