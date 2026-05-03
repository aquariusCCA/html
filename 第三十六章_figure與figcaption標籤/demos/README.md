# 第三十六章：`figure` 與 `figcaption` Demo

本目錄提供一個可直接用瀏覽器開啟的範例頁：

- [figure-figcaption-demo.html](./figure-figcaption-demo.html)：展示圖片、程式碼、表格、前後對照圖如何使用 `figure` 與 `figcaption`，並對照 `alt` 與 caption 的分工、`figcaption` 的合法位置，以及何時應該改用 `div`。

## 使用方式

1. 用瀏覽器開啟 `figure-figcaption-demo.html`。
2. 對照每一段左側的 HTML 程式碼與右側實際渲染結果。
3. 特別觀察 `figcaption` 可以放在內容前或後，但必須是 `figure` 的直接子元素。

## 範例資產

`images/` 內的 SVG 資產用來示範不同種類的 figure 內容：

- `html-structure.svg`：教學圖。
- `sales-chart.svg`：資料圖表，示範 `alt` 與 `figcaption` 的差異。
- `before.svg` / `after.svg`：多張圖片共用同一個 `figcaption`。
- `decorative-divider.svg`：裝飾圖，示範不需要使用 `figure` 的情境。
