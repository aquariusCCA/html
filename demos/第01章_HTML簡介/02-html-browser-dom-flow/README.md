# HTML 到瀏覽器與 DOM 的流程

## 1. Demo 目標

這個 demo 用來示範：

- HTML 原始碼只是文字檔。
- 瀏覽器會解析 HTML 並建立 DOM。
- CSS 與 JavaScript 多數情況會基於 DOM 進行樣式與互動處理。

## 2. 對應 notes

- 筆記路徑：`notes/第01章_HTML簡介/HTML簡介.md`
- 對應章節：`3.3 HTML、瀏覽器與網頁形成`
- 對應知識點：
  - 瀏覽器讀取檔案
  - 解析 HTML 並建立 DOM
  - 套用 CSS 與執行 JavaScript

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 點擊上方 4 個流程按鈕

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 左側文字會依流程切換，對照 HTML 被解析的階段。
2. DOM 階段顯示的是樹狀結構，不是原始 HTML 字串。
3. 最後畫面代表使用者在瀏覽器中看到的結果。

## 5. 修改練習

1. 在 `stages.source.code` 中加入一個 `<a>` 範例，觀察原始碼內容變化。
2. 修改 `stages.dom.preview`，加入 `a` 節點並觀察 DOM 樹變化。
3. 將 `render` 階段的按鈕改成連結，思考 HTML 結構與畫面呈現的關係。

## 6. 常見錯誤

| 錯誤 | 問題 | 修正方式 |
|---|---|---|
| 把 HTML 當成最後畫面 | HTML 原始碼需要瀏覽器解析才會成為頁面 | 分辨原始碼、DOM 與畫面呈現 |
| 以為 CSS 直接修改 HTML 檔案 | CSS 是套用到瀏覽器解析後的元素 | 理解 CSS 會選取 DOM 中的元素 |
| 以為 JavaScript 只操作文字 | JavaScript 常操作 DOM 節點 | 先理解 HTML 形成的樹狀結構 |

## 7. 自我檢查

- [ ] 我能說出 HTML、DOM 與瀏覽器畫面的差異。
- [ ] 我能描述瀏覽器如何將 HTML 轉成網頁。
- [ ] 我能修改流程內容並觀察畫面變化。
