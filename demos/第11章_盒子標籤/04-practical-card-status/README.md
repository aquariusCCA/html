# 課程卡片與狀態文字

## 1. Demo 目標

這個 demo 用來示範：

- 使用 `div` 包住一整張卡片。
- 使用 `span` 標記段落中的狀態、價格與數字。
- 使用 JavaScript 精準更新 `span` 裡的局部內容。
- 使用 `button` 表示真正的操作按鈕。

## 2. 對應 notes

- 筆記路徑：`notes/第11章_盒子標籤/盒子標籤.md`
- 對應章節：`6. 實務應用場景`、`8. 與其他概念的關係`、`11. 延伸補充`
- 對應知識點：
  - `div` 常用於卡片、列表項目、表單區塊等通用容器
  - `span` 常用於狀態文字、價格、數字或單位
  - JavaScript 可以透過 DOM 更新 `span` 中的局部文字

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 點擊「增加人數」與「切換狀態」觀察畫面變化

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `div.course-card` 是整張卡片的外層容器。
2. `span.status` 只包住狀態文字，不會包住整個段落。
3. `span#count` 只包住數字，因此 JavaScript 可以只更新數字。
4. 兩個操作元素使用真正的 `button`。

## 5. 程式碼重點

### HTML

- `div.course-card` 包住課程卡片內容。
- `span#status-text` 與 `span#count` 是 JavaScript 更新的目標。
- `button type="button"` 避免按鈕被誤當成表單提交按鈕。

### CSS

- `.status`、`.price`、`#count` 控制行內標籤外觀。
- `.status.is-open` 與 `.status.is-closed` 表示不同狀態。

### JavaScript

- `querySelector("#count")` 取得數字所在的 `span`。
- `textContent` 更新 `span` 內的文字。
- `classList.toggle()` 切換狀態樣式。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 把 `span#count` 改成包住整個段落，觀察 JavaScript 更新時會發生什麼問題。
2. 新增一個「剩餘名額」的 `span`，並用 JavaScript 讓它隨人數變動。
3. 把外層 `div.course-card` 改成 `article`，思考這張卡片是否適合變成更有語意的內容。
4. 修改 `.status.is-closed` 的樣式，讓暫停狀態更明顯。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 用 `span` 包住整張卡片 | 行內容器承載過大的區塊結構 | 使用 `div` 或更合適的語意元素 |
| 用 `div` 包住需要更新的一整段文字 | JavaScript 更新時容易覆蓋不該變動的內容 | 只用 `span` 包住需要更新的局部文字 |
| 用 `div` 假裝操作按鈕 | 缺少原生按鈕行為 | 使用 `button type="button"` |

## 8. 自我檢查

- [ ] 我能說明卡片外層為什麼適合使用 `div`。
- [ ] 我能說明狀態與數字為什麼適合使用 `span`。
- [ ] 我能指出 JavaScript 更新的是哪個 DOM 節點。
- [ ] 我能避免用無語意元素取代真正的互動元素。
