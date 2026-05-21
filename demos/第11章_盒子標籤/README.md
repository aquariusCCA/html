# HTML 盒子標籤對應 Demo 規劃

## 一、Notes 摘要

本章說明 `div` 與 `span` 是 HTML 中常見的無語意容器。核心知識點包含：`div` 預設是區塊型容器、`span` 預設是行內型容器、兩者常搭配 CSS 與 JavaScript 使用，以及有更合適語意元素時不應全部改用 `div` 或 `span`。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-div-span-flow` | 單一概念 | `div` 預設獨佔一行、`span` 預設可同一行排列 | 觀察 `div` 與 `span` 在預設排版上的差異 | `demos/第11章_盒子標籤/01-basic-div-span-flow/` |
| `02-compare-container-roles` | 對照型 | `div` 適合包住區塊內容，`span` 適合包住文字中的小範圍內容 | 比較區塊容器與行內容器的使用情境 | `demos/第11章_盒子標籤/02-compare-container-roles/` |
| `03-common-mistake-nonsemantic-containers` | 常見錯誤 | 不應全部使用 `div`、不應用 `div` 或 `span` 假裝語意元素或互動元素 | 辨識常見錯誤，將非語意寫法改成語意較清楚的 HTML | `demos/第11章_盒子標籤/03-common-mistake-nonsemantic-containers/` |
| `04-practical-card-status` | 實務應用 | `div` 作為卡片容器、`span` 標記狀態或數字、JavaScript 更新局部內容 | 建立小型課程卡片範例，觀察 HTML、CSS、DOM 的分工 | `demos/第11章_盒子標籤/04-practical-card-status/` |

## 三、整體檔案結構

```text
demos/
  第11章_盒子標籤/
    README.md
    01-basic-div-span-flow/
      index.html
      style.css
      README.md
    02-compare-container-roles/
      index.html
      style.css
      README.md
    03-common-mistake-nonsemantic-containers/
      index.html
      style.css
      main.js
      README.md
    04-practical-card-status/
      index.html
      style.css
      main.js
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。
