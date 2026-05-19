# tabindex、accesskey 與 draggable

## 1. Demo 目標

這個 demo 用來示範：

- `tabindex="0"` 如何讓非互動元素進入自然 Tab 順序。
- `tabindex="-1"` 如何讓元素可由 JavaScript 聚焦，但不進入自然 Tab 順序。
- `accesskey` 的快捷鍵提示與限制。
- `draggable="true"` 必須搭配 JavaScript 拖放事件才會形成完整互動。
- 為什麼不建議依賴 `contextmenu` 與 `dropzone` 作為主要功能。

## 2. 對應 notes

- 筆記路徑：`notes/第04章_全局屬性/全局屬性.md`
- 對應章節：`4.8 draggable、contextmenu 與 dropzone`、`4.9 tabindex 與 accesskey`
- 對應知識點：
  - `tabindex`
  - `accesskey`
  - `draggable`
  - 拖放事件
  - 低支援屬性注意事項

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 按 Tab 鍵觀察焦點順序
4. 拖曳 HTML、CSS 或 JavaScript 標籤到目標區

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 原生 `button` 與 `a` 本來就能被鍵盤聚焦。
2. 加上 `tabindex="0"` 的 `div` 可以進入自然 Tab 順序。
3. 加上 `tabindex="-1"` 的提示區不會被 Tab 找到，但點按按鈕後可以被 JavaScript 聚焦。
4. `accesskey="h"` 的觸發方式會因瀏覽器與作業系統不同。
5. `draggable="true"` 只是讓元素可拖曳，放到目標區仍需要 `dragover`、`drop` 等事件處理。

## 5. 程式碼重點

### HTML

- `.focusable-box` 使用 `tabindex="0"`。
- `#focus-note` 使用 `tabindex="-1"`。
- `#help-button` 使用 `accesskey="h"`。
- `.drag-chip` 使用 `draggable="true"`。

### CSS

- `:focus` 樣式讓鍵盤焦點清楚可見。
- `.is-over` 用來標示拖曳項目正在目標區上方。
- `.is-dragging` 用來標示目前拖曳中的項目。

### JavaScript

- `focusNote.focus()` 示範程式化聚焦。
- `event.dataTransfer.setData()` 保存拖曳項目 ID。
- `dropTarget.append(chip)` 將拖曳項目移到目標區。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 移除 `.focusable-box` 的 `tabindex="0"`，再按 Tab 觀察它是否仍會被聚焦。
2. 將 `#focus-note` 的 `tabindex="-1"` 改成 `0`，觀察它是否進入自然 Tab 順序。
3. 新增一個新的 `.drag-chip`，並確認它是否需要 JavaScript 額外處理。
4. 修改 `accesskey="h"` 為其他字母，測試你的瀏覽器如何觸發。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 使用正整數 `tabindex` 大量控制順序 | 鍵盤操作順序與畫面順序不一致 | 優先使用自然 DOM 順序與 `tabindex="0"` |
| 依賴 `accesskey` 當主要操作方式 | 快捷鍵可能與瀏覽器或系統衝突 | 保留可見按鈕與連結，`accesskey` 只當輔助 |
| 只寫 `draggable="true"` | 元素可拖曳但無法完成放置行為 | 搭配 `dragstart`、`dragover`、`drop` 事件 |
| 依賴 `contextmenu` 或 `dropzone` | 筆記標示支援度不佳 | 使用 JavaScript 事件與可訪問性友善設計 |

## 8. 自我檢查

- [ ] 我能說明 `tabindex="0"` 與 `tabindex="-1"` 的差異。
- [ ] 我能說出為什麼不建議濫用正整數 `tabindex`。
- [ ] 我能說明 `accesskey` 的限制。
- [ ] 我能指出 `draggable` 需要搭配哪些 JavaScript 事件。
- [ ] 我能說出為什麼不建議依賴 `contextmenu` 與 `dropzone`。

