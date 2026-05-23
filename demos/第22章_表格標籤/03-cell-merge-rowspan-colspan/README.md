# 合併儲存格：rowspan 與 colspan

## 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `03-cell-merge-rowspan-colspan` |
| 建議路徑 | `demos/第22章_表格標籤/03-cell-merge-rowspan-colspan/` |
| Demo 類型 | 單一概念 |
| 難度 | 基礎 |
| 對應 notes | `notes/第22章_表格標籤/表格標籤.md` |
| 主要知識點 | `rowspan`、`colspan` |

## 1. Demo 目標

這個 demo 用來示範：

- `colspan` 可以讓儲存格橫向跨越多欄。
- `rowspan` 可以讓儲存格直向跨越多列。
- 合併後要刪除多餘的儲存格，避免表格欄列錯亂。

## 2. 對應 notes

- 筆記路徑：`notes/第22章_表格標籤/表格標籤.md`
- 對應章節：`4.5 合併儲存格`
- 對應知識點：
  - `rowspan`
  - `colspan`
  - 合併儲存格三步驟

## 檔案結構

```text
demos/
  第22章_表格標籤/
    03-cell-merge-rowspan-colspan/
      index.html
      style.css
      README.md
```

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察標示為綠色的合併儲存格

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `colspan="2"` 會讓單一儲存格佔據兩個欄位寬度。
2. `rowspan="2"` 會讓單一儲存格佔據兩列高度。
3. 使用 `rowspan` 後，下一列不需要再補被合併位置的 `<td>`。
4. 合併儲存格可以呈現特殊資料關係，但太複雜會增加閱讀成本。

## 5. 程式碼重點

### HTML

- 合併屬性寫在 `<td>` 或 `<th>` 上。
- `rowspan` 與 `colspan` 的值是要跨越的列數或欄數。

### CSS

- `.merged` 只用來標示合併儲存格，方便觀察。

### JavaScript

- 此 demo 不需要 JavaScript。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 把 `colspan="2"` 改成 `colspan="1"`，觀察表格如何變化。
2. 將課表中的 `rowspan="2"` 改成 `rowspan="3"`，思考還需要移除哪些儲存格。
3. 新增一列課表資料，並讓同一門課跨越三個時間段。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 加了 `rowspan` 但沒有刪掉下一列多餘 `<td>` | 欄列數錯亂，表格資料難以對齊 | 移除被合併位置上的多餘儲存格 |
| 把 `rowspan` 與 `colspan` 的方向搞反 | 合併結果不符合預期 | `rowspan` 是跨列，`colspan` 是跨欄 |
| 為了美觀過度合併 | 表格變得難讀，也不利於維護 | 只在資料關係需要時合併 |

## 8. 自我檢查

- [ ] 我能分辨 `rowspan` 與 `colspan`。
- [ ] 我能指出合併儲存格應寫在哪個標籤上。
- [ ] 我能在合併後移除多餘儲存格。
- [ ] 我能判斷合併是否真的有助於表達資料關係。
