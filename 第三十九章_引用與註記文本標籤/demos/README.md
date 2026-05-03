# 第 39 章 引用與註記文本標籤 Demo

本目錄提供對應第 39 章筆記的範例頁，重點放在引用、來源標題、縮寫與術語定義的語意判斷。

## Demo

- [quote-annotation-tags-demo.html](./quote-annotation-tags-demo.html)：示範 `<blockquote>`、`<q>`、`cite` 屬性、`<cite>`、`<abbr>`、`<dfn>` 的使用情境，以及常見誤用修正。

## 觀察重點

- `<blockquote>` 用於整段或多段引用；`<q>` 用於句子中的短引用。
- `cite` 屬性通常放來源 URL，不會自動顯示在頁面上。
- `<cite>` 是可見的作品、文章、書籍、文件或規格名稱，不是普通作者姓名。
- `<abbr title>` 可以補充縮寫全稱，但重要資訊不應只依賴 `title`。
- `<dfn>` 適合放在正在定義術語的位置，不是每次提到關鍵字都要使用。
- 只是想改變外觀時，應使用 CSS，而不是濫用語意標籤。

## 返回

- [回到第 39 章 README](../README.md)
- [回到總目錄](../../README.md)
