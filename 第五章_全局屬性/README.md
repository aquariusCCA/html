# 第五章｜全局屬性

> 章節定位：建立 HTML 全局屬性的基本判讀框架  
> 建議閱讀方式：先理解全局屬性是在描述哪些「可附加在多數元素上的共通能力」，再回到各單篇看具體用途

> **💡HTML中的全局属性**
> - 每種元素都有自己規定的屬性，這種屬性成為局部屬性。還有另外一種屬性，他可以用來配置所有元素的共有行為，這種屬性成為稱為全局屬性。全局屬性可以用在任何一個元素身上，但是不一定會帶有用或者有意義的行為改變。

## 本章在學什麼

這一章整理 HTML 中可跨多種元素使用的全局屬性。  
重點不是背屬性列表，而是先理解這些屬性通常在解決什麼類型的操作、語意或互動問題。

## 本章與整體地圖的關係

- 前置知識：第四章已先建立 HTML 文件基本結構、屬性與註解的判讀方式。
- 這章的核心任務：認識常見全局屬性的用途、適用情境與容易混淆的地方。
- 讀完後通常接：更細的元素屬性、互動行為與實作應用。

## 建議閱讀順序

1. [accesskey 屬性設置訪問元素的鍵盤快捷鍵](./accesskey%20屬性設置訪問元素的鍵盤快捷鍵.md)
2. [tabindex 屬性](./tabindex%20屬性.md)
3. [title 屬性](./title%20屬性.md)
4. [class 屬性](./class%20屬性.md)
5. [id 屬性](./id%20屬性.md)
6. [contenteditable 屬性](./contenteditable%20屬性.md)
7. [contextmenu 屬性](./contextmenu%20屬性.md)
8. [data-* 屬性](./data-%20屬性.md)
9. [dir 屬性](./dir%20屬性.md)
10. [lang 屬性](./lang%20屬性.md)
11. [translate 屬性](./translate%20屬性.md)
12. [draggable 屬性](./draggable%20屬性.md)
13. [dropzone 屬性](./dropzone%20屬性.md)
14. [hidden 屬性](./hidden%20屬性.md)
15. [spellcheck 屬性](./spellcheck%20屬性.md)
16. [style 屬性](./style%20屬性.md)

## 本章所有小節

- [accesskey 屬性設置訪問元素的鍵盤快捷鍵](./accesskey%20屬性設置訪問元素的鍵盤快捷鍵.md)
- [tabindex 屬性](./tabindex%20屬性.md)
- [title 屬性](./title%20屬性.md)
- [class 屬性](./class%20屬性.md)
- [id 屬性](./id%20屬性.md)
- [contenteditable 屬性](./contenteditable%20屬性.md)
- [contextmenu 屬性](./contextmenu%20屬性.md)
- [data-* 屬性](./data-%20屬性.md)
- [dir 屬性](./dir%20屬性.md)
- [lang 屬性](./lang%20屬性.md)
- [translate 屬性](./translate%20屬性.md)
- [draggable 屬性](./draggable%20屬性.md)
- [dropzone 屬性](./dropzone%20屬性.md)
- [hidden 屬性](./hidden%20屬性.md)
- [spellcheck 屬性](./spellcheck%20屬性.md)
- [style 屬性](./style%20屬性.md)

## 本章示例

- [查看第五章示例索引](./demos/README.md)
- [draggable-demo.html](./demos/draggable-demo.html)
- [hidden-demo.html](./demos/hidden-demo.html)
- [spellcheck-demo.html](./demos/spellcheck-demo.html)

## 適合快速回查的主題

- `accesskey` 是做什麼的
- `accesskey` 的基本語法怎麼寫
- `accesskey` 在 `HTML4` 與 `HTML5` 的差別
- 不同瀏覽器的 `accesskey` 為什麼可能有不同按法
- `tabindex` 是做什麼的
- `tabindex="0"`、`tabindex="-1"`、正整數有什麼差別
- 為什麼 `tabindex` 不適合用來硬排整頁鍵盤順序
- `title` 是做什麼的
- `title` 屬性和 `<title>` 標籤有什麼差別
- 滑鼠移到元素上顯示的小提示怎麼寫
- `class` 是做什麼的
- 一個元素怎麼同時寫多個 class
- `class` 在 CSS 與 JavaScript 中分別扮演什麼角色
- `id` 是做什麼的
- 為什麼同一頁面中的 `id` 應該唯一
- `id` 和 `class` 的差別是什麼
- `contenteditable` 是做什麼的
- `contenteditable="true"` 和 `contenteditable="false"` 的差別
- 什麼時候適合用 `contenteditable`
- `contextmenu` 原本是做什麼的
- `contextmenu` 和 `<menu>` 的關係
- 為什麼 `contextmenu` 不適合當成現代主流方案
- `data-*` 是做什麼的
- `data-foo-bar` 和 `dataset.fooBar` 的對應關係
- 什麼資料適合放在 `data-*` 上
- `dir` 的 `ltr`、`rtl`、`auto` 有什麼差別
- 什麼時候該用 `dir="auto"`
- `dir` 和 CSS `direction` 的差別
- `lang` 是做什麼的
- `lang` 和 `dir` 的差別是什麼
- 語言代碼在 `lang` 中怎麼寫
- `translate` 是做什麼的
- `translate="yes"` 和 `translate="no"` 的差別
- 什麼情況下會想禁止內容被翻譯
- `draggable="true"` 和預設 `auto` 的差別
- `draggable` 為什麼不是布林屬性
- `draggable` 和拖放事件的關係
- `dropzone` 原本是做什麼的
- `dropzone` 為什麼不適合當成現代做法
- `dropzone` 和 `draggable` 的角色差別
- `hidden` 是做什麼的
- `hidden` 為什麼只要屬性存在就會隱藏
- 怎麼用 JavaScript 讓帶有 `hidden` 的元素重新顯示
- `spellcheck` 是做什麼的
- 哪些元素可以做拼寫檢查
- `spellcheck="true"` 和 `spellcheck="false"` 的差別
- `style` 是做什麼的
- 什麼是行內樣式
- `style` 和 `class` 的差別是什麼

## 高頻回查入口

- 想快速確認 `accesskey` 的作用時，看：[accesskey 屬性設置訪問元素的鍵盤快捷鍵](./accesskey%20屬性設置訪問元素的鍵盤快捷鍵.md)
- 想回查 `accesskey` 的語法與示例時，看：[accesskey 屬性設置訪問元素的鍵盤快捷鍵](./accesskey%20屬性設置訪問元素的鍵盤快捷鍵.md)
- 想確認 `accesskey` 的使用限制與注意點時，看：[accesskey 屬性設置訪問元素的鍵盤快捷鍵](./accesskey%20屬性設置訪問元素的鍵盤快捷鍵.md)
- 想知道按 `Tab` 鍵時元素順序怎麼控制時，看：[tabindex 屬性](./tabindex%20屬性.md)
- 想快速分清 `tabindex="0"`、`tabindex="-1"` 和正整數的差別時，看：[tabindex 屬性](./tabindex%20屬性.md)
- 想知道 `tabindex` 為什麼不適合被拿來硬排整頁焦點順序時，看：[tabindex 屬性](./tabindex%20屬性.md)
- 想知道滑鼠移到元素上時的小提示文字怎麼寫時，看：[title 屬性](./title%20屬性.md)
- 想快速分清 `title` 屬性和 `<title>` 標籤的差別時，看：[title 屬性](./title%20屬性.md)
- 想知道 `abbr` 為什麼常搭配 `title` 使用時，看：[title 屬性](./title%20屬性.md)
- 想知道 `class` 為什麼能同時被 CSS 和 JavaScript 使用時，看：[class 屬性](./class%20屬性.md)
- 想快速回查多個 class 怎麼寫時，看：[class 屬性](./class%20屬性.md)
- 想知道 `id` 為什麼要保持唯一時，看：[id 屬性](./id%20屬性.md)
- 想快速分清 `id` 和 `class` 的差別時，看：[id 屬性](./id%20屬性.md)
- 想知道元素內容能不能直接在頁面上編輯時，看：[contenteditable 屬性](./contenteditable%20屬性.md)
- 想快速回查 `contenteditable="true"` 和 `contenteditable="false"` 的差別時，看：[contenteditable 屬性](./contenteditable%20屬性.md)
- 想知道右鍵上下文選單的舊式 HTML 寫法在做什麼時，看：[contextmenu 屬性](./contextmenu%20屬性.md)
- 想回查 `contextmenu` 為什麼更適合當成歷史語法知識時，看：[contextmenu 屬性](./contextmenu%20屬性.md)
- 想知道元素上的自定義資料要怎麼存、怎麼用 JavaScript 讀時，看：[data-* 屬性](./data-%20屬性.md)
- 想快速回查 `data-user-id` 為什麼會變成 `dataset.userId` 時，看：[data-* 屬性](./data-%20屬性.md)
- 想知道 HTML 文字方向怎麼設定時，看：[dir 屬性](./dir%20屬性.md)
- 想快速分清 `ltr`、`rtl`、`auto` 時，看：[dir 屬性](./dir%20屬性.md)
- 想知道元素內容的語言怎麼標示時，看：[lang 屬性](./lang%20屬性.md)
- 想快速分清 `lang` 和 `dir` 的差別時，看：[lang 屬性](./lang%20屬性.md)
- 想知道某段內容應不應該被翻譯時，看：[translate 屬性](./translate%20屬性.md)
- 想快速分清 `translate="yes"` 和 `translate="no"` 時，看：[translate 屬性](./translate%20屬性.md)
- 想知道元素怎麼變成可拖曳時，看：[draggable 屬性](./draggable%20屬性.md)
- 想快速分清 `draggable="true"` 和預設 `auto` 時，看：[draggable 屬性](./draggable%20屬性.md)
- 想知道 `dropzone` 原本在拖放流程中想解決什麼時，看：[dropzone 屬性](./dropzone%20屬性.md)
- 想快速確認為什麼 `dropzone` 不適合當成現代主流方案時，看：[dropzone 屬性](./dropzone%20屬性.md)
- 想知道 `hidden` 怎麼隱藏元素時，看：[hidden 屬性](./hidden%20屬性.md)
- 想快速回查怎麼讓隱藏元素重新顯示時，看：[hidden 屬性](./hidden%20屬性.md)
- 想知道欄位文字要不要啟用拼寫檢查時，看：[spellcheck 屬性](./spellcheck%20屬性.md)
- 想快速回查哪些元素常搭配 `spellcheck` 使用時，看：[spellcheck 屬性](./spellcheck%20屬性.md)
- 想知道元素上的行內樣式怎麼寫時，看：[style 屬性](./style%20屬性.md)
- 想快速分清 `style` 和 `class` 的差別時，看：[style 屬性](./style%20屬性.md)
- 想直接操作拖曳示例並觀察事件順序時，看：[draggable-demo.html](./demos/draggable-demo.html)

## 易混淆主題

- `accesskey` vs 元素本身功能：前者是快捷訪問方式，後者才是元素真正的功能。
- `HTML4` vs `HTML5`：前者可用元素較有限，後者把 `accesskey` 視為全局屬性。
- `accesskey` vs `tabindex`：前者偏快速觸發元素，後者偏控制鍵盤焦點移動順序。
- `tabindex="0"` vs `tabindex="-1"`：前者通常能進入一般 `Tab` 導航，後者通常不能。
- `title` 屬性 vs `<title>` 標籤：前者是元素的附加說明，後者是整份頁面的標題。
- `title` 屬性 vs 主要文案：前者偏補充提示，後者才是應直接呈現在介面上的主要資訊。
- `class` vs 樣式本身：前者是類名標記，後者才是實際呈現效果。
- `class` vs `id`：前者可重複使用，後者通常用於單一元素識別。
- `id` vs `class`：前者偏唯一識別，後者偏分組與重複使用。
- `contenteditable` vs 表單欄位：前者是讓一般元素內容可直接編輯，後者則是專門的輸入控制項。
- `contenteditable` vs 資料儲存：前者只負責讓內容可修改，不負責自動保存結果。
- `contextmenu` 屬性 vs `contextmenu` 事件：前者是舊式 HTML 屬性，後者是 JavaScript 事件機制。
- 舊式 `<menu type="context">` vs 現代自訂選單：前者偏歷史語法，後者通常靠事件與自訂介面處理。
- `data-*` vs `id`：前者存放自定義資料，後者負責唯一識別元素。
- `data-*` vs `class`：前者偏資料承載，後者偏分組、選取與樣式掛載。
- `dir` vs CSS `direction`：前者偏語意與內容方向，後者偏樣式控制。
- `dir="rtl"` vs `dir="auto"`：前者是明確指定方向，後者是依內容自動判斷。
- `lang` vs `dir`：前者標示語言，後者標示文字方向。
- `lang` vs `translate`：前者標示內容屬於哪種語言，後者標示內容是否應被翻譯。
- `draggable` vs 拖放 API：前者負責能不能拖，後者負責整個拖放流程。
- `draggable="true"` vs `auto`：前者是明確允許拖曳，後者是交給瀏覽器原生預設行為。
- `draggable` vs `dropzone`：前者偏拖曳來源，後者原本偏放置目標。
- `dropzone` vs 現代事件式 drop target：前者是舊式 HTML 屬性，後者通常靠 `dragenter`、`dragover`、`drop` 事件建立。
- `hidden` vs 一般顯示狀態：前者是用 HTML 屬性直接把元素隱藏，後者則是元素正常出現在頁面上。
- `spellcheck` vs 表單驗證：前者處理拼寫提示，後者處理資料規則與送出條件。
- `style` vs `class`：前者直接寫樣式結果，後者透過分類名稱配合 CSS 規則。

## 導航

- [返回首頁](../README.md)

