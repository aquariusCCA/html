# data-* 與 hidden 互動

## 1. Demo 目標

這個 demo 用來示範：

- 如何在 HTML 元素上使用 `data-*` 存放自訂資料。
- JavaScript 如何透過 `dataset` 讀取 `data-*`。
- 如何用 `hidden` 切換區塊顯示與隱藏。
- 為什麼 `data-*` 不適合存放敏感資料。

## 2. 對應 notes

- 筆記路徑：`notes/第04章_全局屬性/全局屬性.md`
- 對應章節：`4.4 data-*`、`4.5 hidden`、`5. 範例說明`
- 對應知識點：
  - `data-*`
  - `dataset`
  - `hidden`
  - DOM attribute 操作

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 點擊任一商品的「查看資料」按鈕

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 商品卡片上的 `data-product-id`、`data-category`、`data-stock` 不直接顯示，但可被 JavaScript 讀取。
2. 點擊按鈕後，原本有 `hidden` 的 `.detail` 區塊會顯示。
3. `data-product-id` 在 JavaScript 中透過 `card.dataset.productId` 讀取。
4. 同一時間只展開一張卡片，這是 JavaScript 控制的互動邏輯，不是 `hidden` 自動完成的。

## 5. 程式碼重點

### HTML

- 商品卡片使用 `data-product-id`、`data-category`、`data-stock` 保存自訂資料。
- 詳細資訊區塊預設加上 `hidden`。
- 按鈕使用 `data-action="toggle-detail"` 表示操作目的。

### CSS

- `.is-selected` 讓目前選取的卡片更容易觀察。
- `.detail` 只是輔助觀察展開內容。

### JavaScript

- `card.dataset.productId` 讀取 `data-product-id`。
- `detail.hidden = false` 顯示詳細資訊。
- `detail.hidden = true` 隱藏詳細資訊。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 新增一張商品卡片，並設定自己的 `data-product-id` 與 `data-stock`。
2. 把 `data-stock="0"` 改成其他數字，觀察顯示結果。
3. 修改 `closeAllDetails()`，讓多張卡片可以同時展開。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 在 `data-*` 放密碼或 token | 使用者可以透過開發者工具看到 | 敏感資料不要放在 DOM |
| 寫成 `dataProductId` | 這不是 HTML `data-*` 屬性格式 | 使用 `data-product-id` |
| 忘記處理 `hidden` 狀態 | 區塊無法依互動顯示或隱藏 | 用 JavaScript 切換 `element.hidden` |
| 以為 `data-*` 會自動產生互動 | `data-*` 只存資料，不會自動執行邏輯 | 搭配 JavaScript 讀取與處理 |

## 8. 自我檢查

- [ ] 我能說明 `data-*` 適合存放什麼資料。
- [ ] 我能用 `dataset` 讀取 `data-product-id`。
- [ ] 我能切換元素的 `hidden` 狀態。
- [ ] 我能說出為什麼敏感資料不應放在 `data-*`。

