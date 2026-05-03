# 第 40 章 技術與細節文本標籤 Demo

本目錄提供對應第 40 章筆記的範例頁，重點放在技術文件與細節文字的語意判斷。

## Demo

- [technical-detail-text-tags-demo.html](./technical-detail-text-tags-demo.html)：示範 `<code>`、`<pre>`、`<kbd>`、`<samp>`、`<var>`、`<sub>`、`<sup>`、`<small>`、`<time>` 的使用情境，以及常見混淆修正。

## 觀察重點

- 行內程式碼用 `<code>`；多行且需要保留格式時用 `<pre><code>`。
- `<kbd>` 表示使用者輸入；`<samp>` 表示程式、系統或終端機輸出。
- `<var>` 適合說明文字中的抽象變數，完整程式碼片段仍放在 `<code>` 裡。
- `<sub>` / `<sup>` 只在下標或上標本身有語意時使用。
- `<small>` 表示旁註、法律聲明、版權或附屬說明，不是單純縮小字工具。
- `<time datetime>` 可以同時保留人類可讀的時間文字與機器可讀的時間值。
- 只是想改變外觀時，應使用 CSS，而不是濫用語意標籤。

## 返回

- [回到第 40 章 README](../README.md)
- [回到總目錄](../../README.md)
