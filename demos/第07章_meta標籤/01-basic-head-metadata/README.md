# 基本 head metadata

## 1. Demo 目標

這個 demo 用來示範：

- `<meta>` 通常放在 `<head>` 中。
- `charset`、viewport、`description`、`robots` 與 Open Graph 的基本寫法。
- metadata 不會直接顯示在頁面內容，但會成為 DOM 節點。

## 2. 對應 notes

- 筆記路徑：`notes/第07章_meta標籤/meta標籤.md`
- 對應章節：`3.1 <meta> 是什麼`、`3.2 <meta> 通常放在 <head> 裡`、`3.3 常見屬性搭配方式`
- 對應知識點：
  - `<meta>` 是 void element
  - `<meta>` 屬於文件層級資訊
  - `charset`
  - `name` / `content`
  - `property` / `content`

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察表格列出的 metadata

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `<meta>` 寫在 `<head>`，不會成為頁面可見內容。
2. `charset` 不需要 `content`，它直接使用 `charset` 屬性。
3. `description`、`robots`、`author` 使用 `name` 搭配 `content`。
4. Open Graph 使用 `property` 搭配 `content`。

## 5. 程式碼重點

### HTML

- `<head>` 中放入本章常見 metadata。
- `body` 中只放可見內容與觀察表格。

### CSS

- 樣式只用來讓程式碼區塊與表格容易閱讀。

### JavaScript

- 使用 `document.head.querySelectorAll("meta")` 讀取 metadata。
- 把每個 `<meta>` 的屬性整理成表格。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 修改 `description` 的 `content`，重新整理後觀察表格。
2. 新增 `<meta name="copyright" content="2026 版權所有">`。
3. 刪除 `og:description`，觀察表格少了哪一列。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 把 `<meta>` 寫成畫面內容 | 使用者看不到，且語意位置錯誤 | 將 metadata 放在 `<head>` |
| `<meta charset="UTF-8"></meta>` | `<meta>` 是空元素，不需要結束標籤 | 寫成 `<meta charset="UTF-8">` |
| `description` 沒有 `content` | metadata 沒有實際描述內容 | 補上 `content="..."` |

## 8. 自我檢查

- [ ] 我能說明 `<meta>` 為什麼通常放在 `<head>`。
- [ ] 我能分辨 `charset`、`name`、`property` 三種寫法。
- [ ] 我能修改 metadata 並在表格中觀察結果。
- [ ] 我能說明 metadata 不等於頁面可見內容。

