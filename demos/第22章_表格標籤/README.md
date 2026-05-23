# HTML 表格標籤 table 對應 Demo 規劃

## 一、Notes 摘要

本章說明 HTML 表格標籤的語意與基本結構，核心知識點包含 `<table>`、`<tr>`、`<th>`、`<td>`、`<caption>`、`<thead>`、`<tbody>`、`<tfoot>`、`rowspan`、`colspan`，以及表格不應用於版面布局、表格樣式應交給 CSS、實務中可搭配 JavaScript 做排序或篩選。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-table-structure` | 單一概念 | `<table>`、`<tr>`、`<th>`、`<td>` | 建立最基本的欄列資料表 | `demos/第22章_表格標籤/01-basic-table-structure/` |
| `02-table-sections-caption` | 單一概念 / 對照型 | `<caption>`、`<thead>`、`<tbody>`、`<tfoot>` | 觀察完整表格區域如何讓資料更清楚 | `demos/第22章_表格標籤/02-table-sections-caption/` |
| `03-cell-merge-rowspan-colspan` | 單一概念 | `rowspan`、`colspan` | 理解跨列與跨欄合併儲存格 | `demos/第22章_表格標籤/03-cell-merge-rowspan-colspan/` |
| `04-common-mistake-table-layout` | 常見錯誤 | 表格不是布局工具、表格需要清楚語意 | 比較錯誤表格布局與正確資料表結構 | `demos/第22章_表格標籤/04-common-mistake-table-layout/` |
| `05-practical-dashboard-table` | 實務應用 / 小型整合 | 後台資料表、CSS 樣式、JavaScript 篩選排序 | 建立可觀察、可互動的會員資料表 | `demos/第22章_表格標籤/05-practical-dashboard-table/` |

## 三、整體檔案結構

```text
demos/
  第22章_表格標籤/
    README.md
    01-basic-table-structure/
      index.html
      style.css
      README.md
    02-table-sections-caption/
      index.html
      style.css
      README.md
    03-cell-merge-rowspan-colspan/
      index.html
      style.css
      README.md
    04-common-mistake-table-layout/
      index.html
      style.css
      main.js
      README.md
    05-practical-dashboard-table/
      index.html
      style.css
      main.js
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。

建議學習順序：

1. 先看 `01-basic-table-structure`，理解表格的最小結構。
2. 再看 `02-table-sections-caption`，學會完整表格區域分組。
3. 接著看 `03-cell-merge-rowspan-colspan`，練習跨列與跨欄合併。
4. 再看 `04-common-mistake-table-layout`，避免把表格當布局工具。
5. 最後看 `05-practical-dashboard-table`，觀察表格在後台資料介面的實務用法。
