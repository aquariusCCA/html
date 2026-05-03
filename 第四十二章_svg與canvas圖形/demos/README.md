# 第 42 章 `svg` 與 `canvas` 圖形 Demo

本目錄提供對應第 42 章筆記的範例頁，重點放在 `<img>`、內嵌 SVG 與 Canvas 的選型差異。

## Demo

- [svg-canvas-graphics-demo.html](./svg-canvas-graphics-demo.html)：示範 SVG `viewBox`、內嵌 SVG 可互動圖形、Canvas 動態繪製、Canvas fallback 與同步 HTML 資料表。

## 觀察重點

- 普通照片、商品圖、文章配圖通常優先使用 `<img>`。
- SVG 保留圖形結構，適合圖示、Logo、流程圖、線條圖與少量互動圖表。
- `viewBox` 定義 SVG 內部座標系，和頁面顯示尺寸不同。
- 內嵌 SVG 可以操作內部圖形元素，例如 `<circle>`、`<rect>`、`<path>`。
- Canvas 是用 JavaScript 繪製像素畫面，適合大量、高頻、像素導向的繪製。
- Canvas 內畫出的文字與圖形不等於 HTML 結構；重要資訊應同步提供 HTML 文字或資料表。
- 圖形承載資訊時，要補可存取名稱、描述或等價資料。

## 返回

- [回到第 42 章 README](../README.md)
- [回到總目錄](../../README.md)
