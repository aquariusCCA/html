# label 關聯方式對照

## 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `02-compare-label-binding` |
| 建議路徑 | `demos/第23章_表單標籤/02-compare-label-binding/` |
| Demo 類型 | 對照型 |
| 難度 | 基礎 |
| 對應 notes | `notes/第23章_表單標籤/表單標籤.md` |
| 主要知識點 | `<label>`、`for`、`id`、表單控制項關聯 |

## 1. Demo 目標

這個 demo 用來示範：

- `label for` 應對應控制項的 `id`。
- 控制項也可以直接放在 `<label>` 裡面。
- 沒有 label 關聯時，點擊文字不會聚焦或切換控制項。
- 正確 label 關聯能改善操作體驗與可訪問性。

## 2. 對應 notes

- 筆記路徑：`notes/第23章_表單標籤/表單標籤.md`
- 對應章節：`3.4 提示文字應與表單控制項建立關聯`、`4.7 label 的兩種關聯方式`
- 對應知識點：
  - `for/id` 關聯
  - 巢狀 label
  - 未關聯提示文字的問題

## 檔案結構

```text
demos/
  第23章_表單標籤/
    02-compare-label-binding/
      index.html
      style.css
      main.js
      README.md
```

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 分別點擊各區塊中的文字與輸入框

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 點擊第一區的 label 文字，輸入框會聚焦。
2. 點擊第二區的文字，checkbox 會被切換。
3. 點擊第三區的普通文字，不會聚焦輸入框。
4. 焦點觀察區會顯示目前聚焦的欄位。

## 5. 程式碼重點

### HTML

- `label for="email"` 對應 `input id="email"`。
- 巢狀 label 不需要 `for/id` 也能建立關聯。
- 使用普通 `<span>` 不能取代 label。

### CSS

- 使用 `:focus` 樣式讓焦點更容易觀察。

### JavaScript

- 只用來顯示目前聚焦的欄位，方便觀察互動結果。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 把第一區的 `for="email"` 改錯，觀察 label 是否仍能聚焦輸入框。
2. 把 checkbox 從 label 裡移出來，觀察點擊文字是否還能切換。
3. 把第三區的 `<span>` 改成正確的 `<label>`。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| `for` 與 `id` 不一致 | 點擊 label 不會聚焦控制項 | 讓 `for` 的值完全等於控制項 `id` |
| 用 `<span>` 當欄位名稱 | 缺少表單提示語意 | 使用 `<label>` |
| 多個元素使用相同 `id` | label 可能指向錯誤控制項 | 同一頁的 `id` 應保持唯一 |

## 8. 自我檢查

- [ ] 我能說明 `label for` 與 `input id` 的關係。
- [ ] 我能使用巢狀 label 建立控制項關聯。
- [ ] 我能指出普通文字不能取代 label 的原因。
- [ ] 我能修正 label 未關聯控制項的錯誤。
