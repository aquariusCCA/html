# HTML 兼容性問題對應 Demo 規劃

## 一、Notes 摘要

本章說明舊版瀏覽器相容處理，重點包含不同瀏覽器與文件模式造成的顯示差異、`X-UA-Compatible`、`renderer`、`html5shiv`、IE 條件註解，以及何時應保留或移除舊版相容程式碼。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-meta-compatibility-head` | 單一概念 | `doctype`、`X-UA-Compatible`、`renderer` 的放置位置與用途 | 看懂相容性 meta 標籤應放在 `head` 前段，並分辨它們的適用範圍 | `demos/第02章_兼容性問題/01-meta-compatibility-head/` |
| `02-conditional-html5shiv-load` | 常見錯誤 | `html5shiv` 應搭配 `lt IE 9` 條件註解載入 | 比較「所有瀏覽器都載入」與「只給舊版 IE 載入」的差異 | `demos/第02章_兼容性問題/02-conditional-html5shiv-load/` |
| `03-semantic-elements-legacy-ie` | 對照型 | 舊版 IE 對 HTML5 語意化元素的識別問題與 `html5shiv` 的角色 | 觀察 `header`、`nav`、`section`、`article`、`footer` 在現代瀏覽器與模擬舊版環境中的呈現差異 | `demos/第02章_兼容性問題/03-semantic-elements-legacy-ie/` |
| `04-compatibility-decision-helper` | 實務應用 | 根據專案瀏覽器支援範圍決定是否保留相容寫法 | 練習判斷何時需要 `X-UA-Compatible`、`renderer`、`html5shiv` | `demos/第02章_兼容性問題/04-compatibility-decision-helper/` |

## 三、整體檔案結構

```text
demos/
  第02章_兼容性問題/
    README.md
    01-meta-compatibility-head/
      index.html
      style.css
      README.md
    02-conditional-html5shiv-load/
      index.html
      style.css
      main.js
      README.md
    03-semantic-elements-legacy-ie/
      index.html
      style.css
      main.js
      README.md
    04-compatibility-decision-helper/
      index.html
      style.css
      main.js
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。

## 五、自我檢查

- [ ] Demo 內容主要來自 `notes/第02章_兼容性問題/兼容性問題.md`。
- [ ] 每個 demo 聚焦一個主要相容性觀念。
- [ ] 所有 demo 都可以直接打開 `index.html` 觀察。
- [ ] 沒有引入 Vue、React、Bootstrap 或其他第三方框架。
