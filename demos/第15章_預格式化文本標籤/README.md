# HTML 預格式化文本標籤對應 Demo 規劃

## 一、Notes 摘要

本章說明 `<pre>` 是 HTML 的預格式化文本元素，用來保留文字中的空格、縮排與換行。核心知識點包含一般 HTML 空白折疊、`<pre>` 的基本用法、搭配 `<code>` 表示程式碼、顯示 HTML 原始碼時需要轉義特殊字元，以及不要用 `<pre>` 控制一般版面間距。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-pre-formatting` | 單一概念 | `<pre>` 保留空格、縮排與換行 | 觀察同一段固定格式文字在 `<pre>` 中如何原樣呈現 | `demos/第15章_預格式化文本標籤/01-basic-pre-formatting/` |
| `02-compare-pre-and-paragraph` | 對照型 | 一般 HTML 空白折疊 vs `<pre>` 預格式化 | 比較 `<p>` 與 `<pre>` 對空白、換行、縮排的處理差異 | `demos/第15章_預格式化文本標籤/02-compare-pre-and-paragraph/` |
| `03-common-mistake-unescaped-html` | 常見錯誤 | `<pre>` 不會自動轉義 HTML 標籤 | 觀察未轉義 HTML 與 entity 轉義後的差異 | `demos/第15章_預格式化文本標籤/03-common-mistake-unescaped-html/` |
| `04-practical-code-block` | 實務應用 | `<pre><code>` 與 CSS 改善閱讀體驗 | 建立可閱讀、可水平捲動的程式碼區塊 | `demos/第15章_預格式化文本標籤/04-practical-code-block/` |

## 三、整體檔案結構

```text
demos/
  第15章_預格式化文本標籤/
    README.md
    01-basic-pre-formatting/
      index.html
      style.css
      README.md
    02-compare-pre-and-paragraph/
      index.html
      style.css
      README.md
    03-common-mistake-unescaped-html/
      index.html
      style.css
      README.md
    04-practical-code-block/
      index.html
      style.css
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。
