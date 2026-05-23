# 實務應用：後台會員資料表

## 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `05-practical-dashboard-table` |
| 建議路徑 | `demos/第22章_表格標籤/05-practical-dashboard-table/` |
| Demo 類型 | 實務應用 / 小型整合 |
| 難度 | 整合 |
| 對應 notes | `notes/第22章_表格標籤/表格標籤.md` |
| 主要知識點 | 後台資料表、CSS 樣式、JavaScript 篩選排序 |

## 1. Demo 目標

這個 demo 用來示範：

- 後台資料列表適合使用 `<table>` 呈現。
- 表格可以使用 `<caption>`、`<thead>`、`<tbody>`、`<tfoot>` 建立清楚結構。
- CSS 負責表格外觀與狀態標籤。
- JavaScript 可以在不破壞表格語意的前提下做篩選與排序。

## 2. 對應 notes

- 筆記路徑：`notes/第22章_表格標籤/表格標籤.md`
- 對應章節：`6. 實務應用場景`、`8. 與其他概念的關係`
- 對應知識點：
  - 後台資料表
  - 表格與 CSS 的關係
  - 表格與 JavaScript 的關係
  - 完整表格語意結構

## 檔案結構

```text
demos/
  第22章_表格標籤/
    05-practical-dashboard-table/
      index.html
      style.css
      main.js
      README.md
```

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 使用篩選按鈕與排序按鈕觀察表格變化

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 表格資料本身使用 HTML 表格標籤描述。
2. `caption` 說明整張表格的主題。
3. `thead` 放欄位名稱，`tbody` 放會員資料，`tfoot` 放顯示筆數。
4. JavaScript 透過 `data-status` 與 `data-score` 操作資料列。
5. 篩選與排序改變顯示結果，但不改變表格應有的語意結構。

## 5. 程式碼重點

### HTML

- 每一位會員是一個 `<tr>`。
- 狀態與積分透過 `data-status`、`data-score` 提供給 JavaScript 使用。
- `tfoot` 用來放目前顯示筆數。

### CSS

- 使用 `border-collapse`、`thead`、`tfoot`、狀態標籤輔助觀察表格結構。
- 表格設定 `min-width`，小螢幕時可橫向捲動。

### JavaScript

- 篩選按鈕控制哪些資料列被隱藏。
- 排序按鈕根據積分重新排列 `<tr>`。
- 顯示筆數會同步更新到工具列與 `tfoot`。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 新增一筆會員資料，確認篩選與排序是否仍正常。
2. 新增一種會員狀態，例如 `pending`，並補上對應篩選按鈕與 CSS。
3. 將排序欄位從積分改成最後登入日期。
4. 移除 `<tfoot>`，思考彙總資訊放在哪裡比較清楚。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 用一堆 `<div>` 模擬資料表 | 欄列語意不足，後續維護困難 | 真正的欄列資料使用 `<table>` |
| JavaScript 直接拼接大量 HTML 字串 | 容易出錯，也不易閱讀 | 初學階段先操作既有 DOM 結構 |
| 篩選後沒有更新顯示筆數 | 使用者不知道目前資料狀態 | 同步更新工具列與 `tfoot` |
| 只靠顏色表示狀態 | 顏色辨識不一定可靠 | 狀態文字也要清楚寫出「啟用」或「停用」 |

## 8. 自我檢查

- [ ] 我能說明這張表格為什麼適合使用 `<table>`。
- [ ] 我能指出 `caption`、`thead`、`tbody`、`tfoot` 各自的內容。
- [ ] 我能修改會員資料並觀察表格更新。
- [ ] 我能說明 CSS 與 JavaScript 在這個 demo 中的分工。
