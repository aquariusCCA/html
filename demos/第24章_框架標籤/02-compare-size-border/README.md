# iframe 尺寸與邊框控制對照

## 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `02-compare-size-border` |
| 建議路徑 | `demos/第24章_框架標籤/02-compare-size-border/` |
| Demo 類型 | 對照型 |
| 難度 | 基礎 |
| 對應 notes | `notes/第24章_框架標籤/框架標籤.md` |
| 主要知識點 | `width`、`height`、`frameborder`、CSS `border` |

## 1. Demo 目標

這個 demo 用來示範：

- `width` 與 `height` 可以控制 iframe 顯示尺寸。
- `frameborder` 是舊式邊框控制寫法。
- 現代程式碼建議使用 CSS 控制 iframe 的尺寸與邊框。
- 固定寬度在窄螢幕上可能造成水平捲動。

## 2. 對應 notes

- 筆記路徑：`notes/第24章_框架標籤/框架標籤.md`
- 對應章節：`4.3 width 與 height：控制框架尺寸`、`4.4 frameborder：舊式邊框控制`
- 對應知識點：
  - iframe 尺寸
  - 舊式 `frameborder`
  - CSS 控制邊框
  - 響應式呈現

## 檔案結構

```text
demos/
  第24章_框架標籤/
    02-compare-size-border/
      index.html
      style.css
      README.md
      content/
        frame-content.html
```

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 縮小瀏覽器視窗觀察兩種寫法差異

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 寫法 A 使用固定 `width="680"`，在小螢幕上可能需要水平捲動。
2. 寫法 A 使用 `frameborder="0"`，這是舊式寫法。
3. 寫法 B 使用 CSS 的 `width: 100%` 與 `border`，比較容易維護。
4. iframe 內部頁面與父頁面是兩份不同文件。

## 5. 程式碼重點

### HTML

- 兩個 iframe 都載入相同的 `content/frame-content.html`。
- 第一個 iframe 使用固定屬性。
- 第二個 iframe 使用 class 交給 CSS 控制。

### CSS

- `.frame-scroll-area` 讓固定寬度造成的水平捲動更容易觀察。
- `.responsive-frame` 使用 `width: 100%` 與 `border`。

### JavaScript

- 此 demo 不需要 JavaScript。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 把第一個 iframe 的 `width="680"` 改成 `width="300"`。
2. 把 `.responsive-frame` 的 `height` 改成 `120px`。
3. 把 `.responsive-frame` 的 `border` 改成 `border: 0;`。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 只依賴固定 `width` | 小螢幕容易溢出 | 使用 CSS 控制寬度，例如 `width: 100%` |
| 新程式碼仍使用 `frameborder` | 視覺控制分散在 HTML 屬性中 | 改用 CSS 的 `border` |
| 只改父頁面 CSS | iframe 內部文件樣式不會一起改 | 需要修改 iframe 載入的 HTML 文件 |

## 8. 自我檢查

- [ ] 我能說明 `width` 與 `height` 控制的是 iframe 外框尺寸。
- [ ] 我能說明 `frameborder` 與 CSS `border` 的差異。
- [ ] 我能修改 CSS 讓 iframe 更適合小螢幕。
- [ ] 我能分辨父頁面與 iframe 內部文件的樣式範圍。
