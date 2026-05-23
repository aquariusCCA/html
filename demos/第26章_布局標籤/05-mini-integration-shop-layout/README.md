# 小型整合：商品活動頁布局

## 1. 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `05-mini-integration-shop-layout` |
| 建議路徑 | `demos/第26章_布局標籤/05-mini-integration-shop-layout/` |
| Demo 類型 | 小型整合 |
| 難度 | 整合 |
| 對應 notes | `notes/第26章_布局標籤/布局標籤.md` |
| 主要知識點 | 完整商品活動頁語意布局 |

## 2. 學習目標

這個 demo 用來示範：

- 使用布局標籤組成一個簡化版商品活動頁。
- 在頁面中安排主要導覽、活動側邊欄、主要文章內容與頁尾。
- 在 `article` 內使用多個 `section` 表示主題分段。

## 3. 對應 notes

- 筆記路徑：`notes/第26章_布局標籤/布局標籤.md`
- 對應章節：`5. 範例說明`、`6. 實務應用場景`
- 對應知識點：
  - 完整頁面布局
  - `aside` 作為補充內容
  - `article` 內包含多個 `section`
  - `footer` 可以作為頁面或區塊底部資訊

## 4. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 點擊活動專區連結，觀察頁面跳到對應 `section`

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 5. 觀察重點

1. `header` 放網站名稱與頁面說明。
2. 第一個 `nav` 是網站主要導覽。
3. `main` 內包含補充導覽 `aside` 與主要內容 `article`。
4. `aside` 裡的第二個 `nav` 是活動導覽，因此使用 `aria-label="活動導覽"`。
5. `article` 內有多個 `section`，每個 `section` 都有對應標題。
6. 頁面最下方的 `footer` 放頁尾連結。

## 6. 程式碼重點

### HTML

- `main` 包住頁面核心內容。
- `aside` 與 `article` 並列，形成側邊補充與主要文章的關係。
- 連結的 `href="#flash-sale"` 對應到 `section id="flash-sale"`。

### CSS

- CSS 使用 grid 建立左右欄，只負責視覺排版。
- HTML 標籤仍負責表達內容語意。

### JavaScript

- 此 demo 不需要 JavaScript。

## 7. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 新增一個活動區塊，並在 `aside` 導覽中補上對應連結。
2. 把 `aside` 移到 `article` 後面，觀察視覺位置與 HTML 語意是否仍合理。
3. 將其中一個 `section` 改成 `div`，思考它是否仍能表達主題分段。

## 8. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 把活動導覽放在普通 `div` 中 | 導覽角色不明確 | 使用 `nav` 並加上清楚標示 |
| `article` 裡的分段沒有標題 | 文章結構不容易理解 | 每個主要 `section` 搭配標題 |
| 用 CSS grid 後忽略 HTML 語意 | 畫面可排版，但結構不清楚 | CSS 控制版面，HTML 保留語意 |

## 9. 自我檢查

- [ ] 我能指出本頁每個布局標籤的用途。
- [ ] 我能說明為什麼活動專區適合用 `aside`。
- [ ] 我能在 `article` 內合理新增 `section`。
- [ ] 我能區分 HTML 語意與 CSS 排版的責任。
