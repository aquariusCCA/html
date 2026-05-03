# 第三十八章：HTML 可存取性基礎 Demo

本目錄提供一個可直接用瀏覽器開啟的範例頁：

- [html-accessibility-basics-demo.html](./html-accessibility-basics-demo.html)：展示語意化 HTML、landmark、skip link、標題層級、圖片 `alt`、表單 `label` / `fieldset` / `aria-describedby`、表格 `caption` / `th` / `scope`、鍵盤操作、`tabindex`、`aria-expanded`、`aria-live`，以及「先用原生 HTML，再補 ARIA」的原則。

## 使用方式

1. 用瀏覽器開啟 `html-accessibility-basics-demo.html`。
2. 使用 `Tab` 與 `Shift + Tab` 檢查焦點順序。
3. 用 Enter / Space 操作原生 button 與 `role="button"` 示範元件。
4. 點選或鍵盤操作「切換課程選單」，觀察 `aria-expanded` 與畫面狀態是否同步。
5. 在 Email 欄位輸入錯誤格式，觀察 `aria-invalid` 與錯誤訊息關聯。

## 範例資產

`images/` 內有兩個 SVG：

- `a11y-chart.svg`：有內容意義的圖片，demo 中提供描述性 `alt`。
- `decorative-wave.svg`：裝飾圖片，demo 中使用 `alt=""`。
