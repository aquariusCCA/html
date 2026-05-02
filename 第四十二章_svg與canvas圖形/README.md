# 第四十二章｜`svg` 與 `canvas` 圖形

> 章節定位：建立 HTML 原生圖形技術的選型判斷能力。  
> 建議閱讀方式：先分清「SVG 保留圖形結構」與「Canvas 繪製像素畫面」，再回頭看各自適合的情境。

## 本章一句話

`<img>` 適合顯示既有圖片，`<svg>` 適合保留結構的向量圖形，`<canvas>` 適合用 JavaScript 大量或高頻繪製像素畫面。

## 本章在學什麼

這一章整理 `<svg>` 和 `<canvas>` 的基本定位。

它不是完整 SVG 語法或 Canvas API 教程，而是先回答：

- 什麼時候用 SVG？
- 什麼時候用 Canvas？
- SVG、Canvas 和 `<img>` 有什麼不同？
- 圖形內容如果承載資訊，可存取性上要注意什麼？
- 初學者遇到圖示、圖表、遊戲畫面時，應該怎麼選？

## 本章與整體地圖的關係

- 前置知識：第十八章已學過圖片，第三十四章已學過腳本載入，第三十八章已學過 HTML 可存取性基礎。
- 這章的核心任務：補上 HTML 中「可內嵌」與「可程式繪製」的圖形能力入口。
- 讀完後通常接：CSS 圖形樣式、JavaScript Canvas API、SVG 圖示系統、資料視覺化或前端互動繪圖。

## 建議閱讀順序

1. [`svg` 與 `canvas` 圖形](./第42章_svg與canvas圖形.md)
2. 回頭複習第十八章圖片標籤，分清 `<img>` 與 SVG 圖檔的使用方式。
3. 如果要做互動圖表或遊戲，再延伸學 Canvas API 或資料視覺化工具。

## 本章所有小節

- [`svg` 與 `canvas` 圖形](./第42章_svg與canvas圖形.md)

## 適合快速回查的主題

- SVG 和 Canvas 最大差異是什麼
- SVG 為什麼適合圖示、Logo、線條圖和簡單圖表
- Canvas 為什麼適合遊戲、粒子效果、影像處理和大量動態繪製
- `viewBox` 和 `width` / `height` 的差別
- SVG 作為 `<img>` 載入與內嵌在 HTML 的差別
- SVG 如何提供 `<title>` / `<desc>` 或 `aria-label`
- Canvas 為什麼要考慮 fallback、替代文字或同步資料表
- 什麼情況用 `<img>` 比 SVG 或 Canvas 更簡單

## 高頻回查入口

- 想快速分清 SVG 和 Canvas 的選擇時，看：[`svg` 與 `canvas` 圖形 → 速查區](./第42章_svg與canvas圖形.md#速查區)
- 想照需求快速選技術時，看：[`svg` 與 `canvas` 圖形 → 選型流程](./第42章_svg與canvas圖形.md#選型流程)
- 想理解 `viewBox` 時，看：[`svg` 與 `canvas` 圖形 → 最簡單的-svg](./第42章_svg與canvas圖形.md#1-最簡單的-svg)
- 想理解 Canvas 為什麼不是 DOM 元素時，看：[`svg` 與 `canvas` 圖形 → 最簡單的-canvas](./第42章_svg與canvas圖形.md#3-最簡單的-canvas)
- 想確認可存取性做法時，看：[`svg` 與 `canvas` 圖形 → 可存取性注意點](./第42章_svg與canvas圖形.md#7-可存取性注意點)

## 易混淆主題

- SVG vs Canvas：SVG 保留圖形元素結構，Canvas 最終呈現的是畫布上的像素。
- SVG vs `<img>`：SVG 可以作為圖片檔載入，也可以內嵌成 HTML 中可被 CSS / JS 操作的圖形結構。
- Canvas 畫面 vs HTML 內容：Canvas 裡畫出來的文字和形狀不等於 DOM 文字，也不能像普通 HTML 元素一樣被選取或搜尋。
- `width` / `height` vs `viewBox`：`width` / `height` 偏向外部顯示尺寸，`viewBox` 決定 SVG 內部座標系。
- Canvas fallback vs 完整可存取性：`<canvas>` 標籤內文字可以作為 fallback，但重要資料更建議同步提供 HTML 文字或資料表。

## 學完檢查

讀完本章後，應該能回答：

1. 為什麼 icon 通常用 SVG，而不是 Canvas？
2. 為什麼大量粒子動畫或 2D 遊戲通常會考慮 Canvas？
3. 什麼情況下 `<img src="icon.svg">` 比內嵌 `<svg>` 更簡單？
4. 為什麼 Canvas 畫出來的文字不等於 HTML 文字？
5. 如果圖表資訊很重要，為什麼不能只把資料畫在 Canvas 上？

## 導航

- [返回首頁](../README.md)
