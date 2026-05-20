# 行內與區塊盒模型尺寸

## 1. Demo 目標

這個 demo 用來示範：

- 一般行內元素不適合直接用 `width`、`height` 控制尺寸。
- 塊級元素可以直接設定寬度與高度。
- `display: inline-block` 可以讓元素維持同行排列並套用尺寸。
- 表單控制項雖然常出現在行內排版中，但有自己的尺寸行為。

## 2. 對應 notes

- 筆記路徑：`notes/第06章_HTML塊級元素與行內元素/HTML塊級元素與行內元素.md`
- 對應章節：`3.1 什麼是塊級元素`、`3.2 什麼是行內元素`、`8. 與其他概念的關係`
- 對應知識點：
  - 行內元素寬高限制
  - 塊級元素盒模型
  - CSS `display`
  - 表單控制項的特殊行為

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察四個區塊中的元素尺寸與排列差異

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 第一段的 `span` 設定寬高後，仍然不像固定區塊。
2. 第二段的 `div` 可以形成明確寬高。
3. 第三段的 `span` 加上 `display: inline-block` 後，可以控制寬高。
4. `input` 可以設定寬度與高度，但它不是用來當通用排版容器。

## 5. 程式碼重點

### HTML

- 使用 `span` 示範一般行內元素。
- 使用 `div` 示範塊級元素。
- 使用 `input` 示範表單控制項。

### CSS

- `.sized-inline`、`.sized-block`、`.sized-inline-block` 使用同一組寬高設定，方便比較。
- `.sized-inline-block` 額外設定 `display: inline-block`。

### JavaScript

- 此 demo 不需要 JavaScript。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 移除 `.sized-inline-block` 的 `display: inline-block`。
2. 把 `.sized-block` 改成 `display: inline`。
3. 調整 `margin` 與 `padding`，觀察行內元素與區塊元素的差異。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 對 `span` 設定寬高後期待它像卡片一樣排版 | 一般行內元素不會套用完整區塊尺寸行為 | 使用合適區塊元素，或搭配 CSS `display` |
| 為了排版把所有元素改成 `div` | 會失去文字、連結或表單原本語意 | 保留正確 HTML 語意，再用 CSS 調整 |
| 用上下 `margin` 控制行內文字間距 | 結果可能不符合預期 | 段落間距使用區塊元素與 CSS 管理 |

## 8. 自我檢查

- [ ] 我能說明一般行內元素與塊級元素的尺寸差異。
- [ ] 我能說出 `inline-block` 的用途。
- [ ] 我能判斷什麼時候該改 CSS，而不是換錯 HTML 元素。
- [ ] 我能修改 demo 並觀察排列變化。

