# 基本布局標籤

## 1. 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `01-basic-layout-tags` |
| 建議路徑 | `demos/第26章_布局標籤/01-basic-layout-tags/` |
| Demo 類型 | 單一概念 |
| 難度 | 基礎 |
| 對應 notes | `notes/第26章_布局標籤/布局標籤.md` |
| 主要知識點 | 常見布局標籤與基本頁面結構 |

## 2. 學習目標

這個 demo 用來示範：

- 使用 `header`、`nav`、`main`、`article`、`section`、`aside`、`footer` 建立頁面骨架。
- `header` 與 `footer` 可以屬於整個頁面，也可以屬於單一 `article`。
- `aside` 適合放與主要內容相關、但不是主線的補充資訊。

## 3. 對應 notes

- 筆記路徑：`notes/第26章_布局標籤/布局標籤.md`
- 對應章節：`3. 核心概念`、`4. 語法與基本用法`
- 對應知識點：
  - 常見布局標籤的用途
  - 基本頁面結構
  - HTML 描述語意，CSS 負責視覺呈現

## 4. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察畫面上標示的 HTML 區塊角色

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 5. 觀察重點

1. 頁面最外層有網站用的 `header`、`nav`、`main` 與 `footer`。
2. 主要內容集中在一個 `main` 中。
3. `article` 內部也可以有自己的 `header` 與 `footer`。
4. 文章中的主題段落使用 `section`，且每個 `section` 都有標題。
5. `aside` 與 `article` 並列，表示它是補充內容。

## 6. 程式碼重點

### HTML

- `nav` 使用 `aria-label="主要導覽"` 描述這組導覽的用途。
- `article` 使用 `aria-labelledby` 對應文章標題。
- `section` 搭配標題，避免變成只有排版用途的容器。

### CSS

- CSS 只用來標示區塊邊界，幫助觀察。
- 使用 `[data-role]::before` 顯示每個區塊的語意角色。

### JavaScript

- 此 demo 不需要 JavaScript。

## 7. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 新增一個 `section`，並替它加上清楚的標題。
2. 把 `aside` 移到 `article` 裡面，思考補充內容和文章主線的關係是否改變。
3. 移除 `main`，再觀察頁面是否還能清楚判斷主要內容。

## 8. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 一頁放多個主要 `main` | 主要內容範圍不清楚 | 一般頁面只保留一個主要 `main` |
| `section` 沒有標題 | 區塊主題不明確 | 為 `section` 加上能描述主題的標題 |
| 把補充內容放進主線文章 | 主線與補充資訊混在一起 | 和主內容相關但不是主線時，可使用 `aside` |

## 9. 自我檢查

- [ ] 我能說明每個布局標籤在本頁的角色。
- [ ] 我能指出頁面 `header` 與文章 `header` 的差異。
- [ ] 我能判斷一段內容應放在 `article`、`section` 還是 `aside`。
- [ ] 我能修改 HTML 結構並保持語意清楚。
