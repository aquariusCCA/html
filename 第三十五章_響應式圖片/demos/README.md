# 第三十五章：響應式圖片 Demo

本目錄提供一個可直接用瀏覽器開啟的響應式圖片範例頁：

- [responsive-images-demo.html](./responsive-images-demo.html)：展示 `srcset` 的 `1x / 2x`、`w` 描述符、`sizes` 計算、`picture/source` 的 `type` 與 `media` 條件、`img` fallback、`alt` 放置位置，以及常見情境對照。

## 使用方式

1. 用瀏覽器開啟 `responsive-images-demo.html`。
2. 調整瀏覽器寬度，觀察 `picture media` 是否在桌機寬圖與手機直圖之間切換。
3. 開啟 DevTools 的 Network 面板，勾選 Disable cache，再重新整理頁面。
4. 篩選 Img，觀察瀏覽器實際下載的是 `logo-1x.svg`、`logo-2x.svg`、`banner-480.svg`、`banner-800.svg` 或 `banner-1200.svg`。

## 範例資產

`images/` 內的 SVG 圖片故意在圖面上標示候選名稱，例如 `480w`、`800w`、`1200w`、`MOBILE`、`DESKTOP`，方便用肉眼與 DevTools 對照瀏覽器選圖結果。
