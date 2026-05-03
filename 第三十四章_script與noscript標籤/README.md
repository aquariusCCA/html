# 第三十四章｜`script` 與 `noscript` 標籤

> 章節定位：理解 HTML 如何載入與支援 JavaScript，以及腳本不可用時如何提供退路  
> 建議閱讀方式：先理解 `<script>` 的載入方式，再分清 `defer`、`async`、`type="module"` 與 `<noscript>` 的用途

## 本章在學什麼

這一章整理 HTML 中和 JavaScript 載入直接相關的標籤。

重點不是學 JavaScript 語法，而是理解：

- `<script>` 可以放內嵌程式，也可以透過 `src` 載入外部檔案。
- 腳本載入位置會影響 HTML 解析與頁面可用性。
- `defer` 和 `async` 都能避免傳統腳本阻塞解析，但執行時機不同。
- `<noscript>` 只能處理腳本被停用或不支援的情境，不是一般錯誤處理工具。

## 本章與整體地圖的關係

- 前置知識：前面已學過 HTML 骨架、路徑、表單與互動元素。
- 這章的核心任務：把 HTML 文件和 JavaScript 載入流程接起來。
- 讀完後通常接：後續學 DOM、事件、表單互動、動態內容時，都會回到這章確認腳本如何被載入。

## 建議閱讀順序

1. [`script` 與 `noscript` 標籤](./第34章_script與noscript標籤.md)

## 本章所有小節

- [`script` 與 `noscript` 標籤](./第34章_script與noscript標籤.md)

## 適合快速回查的主題

- `<script src>` 怎麼載入外部 JavaScript
- 為什麼腳本常放在 `body` 結尾或使用 `defer`
- `defer` 和 `async` 差在哪
- `type="module"` 有什麼特點
- `<noscript>` 適合處理什麼情境

## 高頻回查入口

- 想快速知道 JS 檔案怎麼接到 HTML 時，看：[`script` 與 `noscript` 標籤](./第34章_script與noscript標籤.md)
- 想分清 `defer` 和 `async` 時，看：[`script` 與 `noscript` 標籤](./第34章_script與noscript標籤.md)
- 想確認 `<noscript>` 的限制時，看：[`script` 與 `noscript` 標籤](./第34章_script與noscript標籤.md)

## 易混淆主題

- 載入腳本 vs 執行腳本：下載完成不代表一定立刻執行。
- `defer` vs `async`：前者保留順序並延後執行，後者下載完成後盡快執行。
- `<noscript>` vs 錯誤提示：前者只處理腳本停用或不支援，不處理程式執行錯誤。

## Demo 範例

- [`script` 與 `noscript` 標籤 Demo](./demos/script-noscript-demo.html)
- [demos 說明](./demos/README.md)

## 導航

- [返回首頁](../README.md)
