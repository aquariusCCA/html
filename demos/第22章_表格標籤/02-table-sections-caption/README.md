# 完整表格區域：caption、thead、tbody、tfoot

## 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `02-table-sections-caption` |
| 建議路徑 | `demos/第22章_表格標籤/02-table-sections-caption/` |
| Demo 類型 | 單一概念 / 對照型 |
| 難度 | 基礎 |
| 對應 notes | `notes/第22章_表格標籤/表格標籤.md` |
| 主要知識點 | `<caption>`、`<thead>`、`<tbody>`、`<tfoot>` |

## 1. Demo 目標

這個 demo 用來示範：

- `<caption>` 可以說明整張表格的主題。
- `<thead>` 適合放欄位標題。
- `<tbody>` 適合放主要資料。
- `<tfoot>` 適合放總計、平均或彙總資訊。

## 2. 對應 notes

- 筆記路徑：`notes/第22章_表格標籤/表格標籤.md`
- 對應章節：`3.3 完整表格可以分成多個區域`、`4.2 加上表格標題與區域分組`
- 對應知識點：
  - `<caption>` 表格標題
  - `<thead>` 表格頭部
  - `<tbody>` 表格主體
  - `<tfoot>` 表格腳注

## 檔案結構

```text
demos/
  第22章_表格標籤/
    02-table-sections-caption/
      index.html
      style.css
      README.md
```

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察表格不同區域的背景色與內容角色

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `<caption>` 不是普通段落，而是表格本身的標題。
2. `<thead>` 裡的 `<th>` 描述每一欄代表什麼。
3. `<tbody>` 放主要資料列。
4. `<tfoot>` 放平均分數與彙總評語。
5. CSS 可以分別選取 `thead`、`tbody`、`tfoot` 來套用不同樣式。

## 5. 程式碼重點

### HTML

- 使用完整表格區域提升結構清楚度。
- `tfoot` 中的「平均」使用 `<th>`，因為它是該列的標題。

### CSS

- 使用 `caption-side`、`thead`、`tbody`、`tfoot` 選擇器輔助觀察不同區域。
- 使用 `tbody tr:nth-child(even)` 呈現資料列差異。

### JavaScript

- 此 demo 不需要 JavaScript。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 移除 `<caption>`，觀察表格是否仍容易看出主題。
2. 在 `<tbody>` 新增一列科目資料，並重新計算平均。
3. 修改 `tfoot` 的背景色，觀察 CSS 如何選取表格腳注。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 用普通 `<p>` 取代表格標題 | 表格與標題的語意關係不夠明確 | 使用 `<caption>` |
| 所有資料都直接放在 `<table>` 下 | 結構不易閱讀與維護 | 使用 `<thead>`、`<tbody>`、`<tfoot>` 分區 |
| 把彙總資料放在一般資料列中但未標示 | 使用者不容易分辨主要資料與總結資料 | 將彙總資料放在 `<tfoot>` |

## 8. 自我檢查

- [ ] 我能說明 `<caption>` 的用途。
- [ ] 我能分辨 `<thead>`、`<tbody>`、`<tfoot>` 的角色。
- [ ] 我能用 CSS 分別選取不同表格區域。
- [ ] 我能建立一張結構完整的資料表。
