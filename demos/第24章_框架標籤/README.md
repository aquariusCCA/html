# HTML 框架標籤 iframe 對應 Demo 規劃

## 一、Notes 摘要

本章說明 HTML 的 `<iframe>` 元素，核心知識點包含 `src` 指定嵌入內容、`title` 提供可訪問性描述、`width` 與 `height` 控制尺寸、舊式 `frameborder` 與現代 CSS 邊框控制，以及 `iframe name` 搭配 `<a>` 或 `<form>` 的 `target`。

iframe 的學習重點不是只會把另一個頁面放進目前頁面，而是要理解它會建立獨立瀏覽上下文，因此需要注意內容來源、尺寸、可訪問性、安全性與目標名稱對應。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-iframe-src-title` | 單一概念 | `<iframe>`、`src`、`title`、PDF 預覽 | 觀察 iframe 如何載入本地頁面與 PDF，並理解 `title` 的用途 | `demos/第24章_框架標籤/01-basic-iframe-src-title/` |
| `02-compare-size-border` | 對照型 | `width`、`height`、`frameborder`、CSS `border` | 比較固定尺寸、舊式邊框控制與 CSS 響應式寫法 | `demos/第24章_框架標籤/02-compare-size-border/` |
| `03-target-links-and-forms` | 實務應用 | `iframe name`、`a target`、`form target` | 觀察連結與表單如何把結果載入同一個 iframe | `demos/第24章_框架標籤/03-target-links-and-forms/` |
| `04-common-mistake-iframe-accessibility` | 常見錯誤 | 缺少 `title`、target 名稱不一致、固定寬度 | 用檢查器找出 iframe 常見錯誤並對照修正寫法 | `demos/第24章_框架標籤/04-common-mistake-iframe-accessibility/` |

## 三、整體檔案結構

```text
demos/
  第24章_框架標籤/
    README.md
    01-basic-iframe-src-title/
      index.html
      style.css
      README.md
      content/
        embedded-page.html
      assets/
        pdfs/
          framework-tags-pdf-001-78621d.pdf
    02-compare-size-border/
      index.html
      style.css
      README.md
      content/
        frame-content.html
    03-target-links-and-forms/
      index.html
      style.css
      README.md
      content/
        default.html
        page-a.html
        page-b.html
        search-result.html
    04-common-mistake-iframe-accessibility/
      index.html
      style.css
      main.js
      README.md
      content/
        safe-preview.html
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。

建議學習順序：

1. 先看 `01-basic-iframe-src-title`，理解 iframe 的最小結構與 `src`、`title`。
2. 再看 `02-compare-size-border`，比較舊式與現代尺寸、邊框控制。
3. 接著看 `03-target-links-and-forms`，觀察 `name` 與 `target` 的對應。
4. 最後看 `04-common-mistake-iframe-accessibility`，檢查常見錯誤與修正方式。
