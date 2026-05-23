# iframe src 與 title 基本用法

## 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `01-basic-iframe-src-title` |
| 建議路徑 | `demos/第24章_框架標籤/01-basic-iframe-src-title/` |
| Demo 類型 | 單一概念 |
| 難度 | 基礎 |
| 對應 notes | `notes/第24章_框架標籤/框架標籤.md` |
| 主要知識點 | `<iframe>`、`src`、`title`、PDF 預覽 |

## 1. Demo 目標

這個 demo 用來示範：

- `<iframe>` 如何在目前頁面中嵌入另一個資源。
- `src` 如何指定 iframe 要載入的內容。
- `title` 如何描述 iframe 的內容用途。
- PDF 可以被 iframe 嘗試預覽，但結果會受瀏覽器能力影響。

## 2. 對應 notes

- 筆記路徑：`notes/第24章_框架標籤/框架標籤.md`
- 對應章節：`3. 核心概念`、`4.2 src：指定嵌入內容`、`5. 範例說明`
- 對應知識點：
  - iframe 基本語法
  - `src`
  - `title`
  - 嵌入本地頁面與 PDF

## 檔案結構

```text
demos/
  第24章_框架標籤/
    01-basic-iframe-src-title/
      index.html
      style.css
      README.md
      content/
        embedded-page.html
      assets/
        pdfs/
          framework-tags-pdf-001-78621d.pdf
```

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察本地頁面與 PDF 是否出現在 iframe 中

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 第一個 iframe 載入的是 `content/embedded-page.html`。
2. 第二個 iframe 載入的是 PDF 檔案。
3. iframe 的 `title` 描述了框架內容，而不是控制畫面樣式。
4. iframe 內部文件有自己的背景色與文字樣式。

## 5. 程式碼重點

### HTML

- 使用 `src` 指向要嵌入的頁面或 PDF。
- 使用 `title` 說明 iframe 內容。
- 提供 PDF 的一般連結作為備用開啟方式。

### CSS

- CSS 只用於讓 iframe 邊框與尺寸更容易觀察。

### JavaScript

- 此 demo 不需要 JavaScript。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 修改 `content/embedded-page.html` 的標題文字。
2. 把第一個 iframe 的 `height` 從 CSS 中改小，觀察內部頁面如何被裁切。
3. 暫時移除 iframe 的 `title`，思考輔助工具使用者會少掉什麼資訊。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| `src` 路徑寫錯 | iframe 顯示空白或載入失敗 | 確認路徑相對於 `index.html` |
| 缺少 `title` | 使用輔助工具時難以理解框架內容 | 加上能描述內容的 `title` |
| 只提供 PDF iframe | 有些瀏覽器或設定不顯示 PDF | 額外提供一般連結 |

## 8. 自我檢查

- [ ] 我能說明 `src` 的用途。
- [ ] 我能說明 iframe 為什麼需要 `title`。
- [ ] 我能修改被嵌入頁面並觀察父頁面的 iframe 內容變化。
- [ ] 我能說明 PDF iframe 為什麼需要備用連結。
