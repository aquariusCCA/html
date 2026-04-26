# 第四十二章｜`svg` 與 `canvas` 圖形

> 章節定位：理解 HTML 中兩種常見圖形技術的定位與選擇方式  
> 建議閱讀方式：先分清 SVG 是保留圖形結構的向量內容，Canvas 是用 JavaScript 繪製的像素畫布

## 本章在學什麼

這一章整理 `<svg>` 和 `<canvas>` 的基本定位。

它不是完整 SVG 或 Canvas API 教程，而是先回答：

- 什麼時候用 SVG？
- 什麼時候用 Canvas？
- 它們和 `<img>` 有什麼不同？
- 可存取性上要注意什麼？

## 本章與整體地圖的關係

- 前置知識：第十八章已學過圖片，第三十四章已學過腳本載入。
- 這章的核心任務：補上 HTML 中原生圖形能力的入口。
- 讀完後通常接：CSS、JavaScript Canvas API、SVG 圖示系統或資料視覺化。

## 建議閱讀順序

1. [`svg` 與 `canvas` 圖形](./第42章_svg與canvas圖形.md)

## 本章所有小節

- [`svg` 與 `canvas` 圖形](./第42章_svg與canvas圖形.md)

## 適合快速回查的主題

- SVG 和 Canvas 差在哪
- SVG 為什麼適合圖示和簡單圖表
- Canvas 為什麼適合大量動態繪製
- SVG 如何提供 `<title>` / `<desc>`
- Canvas 為什麼要考慮 fallback 內容
- 什麼情況用 `<img>` 更簡單

## 高頻回查入口

- 想快速分清 SVG 和 Canvas 的選擇時，看：[`svg` 與 `canvas` 圖形](./第42章_svg與canvas圖形.md)
- 想知道圖示、流程圖、遊戲畫面分別偏向哪種技術時，看：[`svg` 與 `canvas` 圖形](./第42章_svg與canvas圖形.md)

## 易混淆主題

- SVG vs Canvas：前者保留圖形元素結構，後者在畫布上繪製像素。
- SVG vs `<img>`：SVG 可以內嵌並被 CSS / JS 操作，也可以作為圖片檔載入。
- Canvas 畫面 vs HTML 內容：Canvas 裡畫出來的文字和形狀不等於 DOM 文字。

## 導航

- [返回首頁](../README.md)
