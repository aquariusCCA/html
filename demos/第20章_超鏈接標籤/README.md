# HTML 超鏈接標籤 a 對應 Demo 規劃

## 一、Notes 摘要

本章說明 HTML `<a>` 超鏈接標籤的用途與常見屬性，核心知識點包含 `href`、`target`、外部連結、內部連結、檔案連結、錨點連結、應用程式 URL scheme、圖片連結，以及 `<a>` 與 `<button>` 的語意差異。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-a-href-target` | 單一概念 | `<a>` 基本語法、`href`、`target`、`rel` | 理解連結如何指定目標，以及目前頁面與新分頁開啟方式的差異 | `demos/第20章_超鏈接標籤/01-basic-a-href-target/` |
| `02-anchor-navigation` | 單一概念 / 實務應用 | `href="#id"`、錨點連結、回到頁首 | 觀察頁內目錄如何跳轉到指定區塊 | `demos/第20章_超鏈接標籤/02-anchor-navigation/` |
| `03-file-and-app-links` | 實務應用 | 檔案連結、`download`、`tel:`、`mailto:` | 觀察連結如何指向檔案與應用程式 URL scheme | `demos/第20章_超鏈接標籤/03-file-and-app-links/` |
| `04-common-mistake-link-vs-button` | 常見錯誤 | `<a>` 與 `<button>` 語意差異、`href="#"` 風險 | 比較用連結假裝按鈕與使用原生按鈕的差異 | `demos/第20章_超鏈接標籤/04-common-mistake-link-vs-button/` |
| `05-practical-card-links` | 實務應用 / 小型整合 | `<a>` 包裹區塊、圖片連結、`alt`、避免互動元素巢狀 | 在卡片式版面中正確使用整張卡片連結 | `demos/第20章_超鏈接標籤/05-practical-card-links/` |

## 三、整體檔案結構

```text
demos/
  第20章_超鏈接標籤/
    README.md
    01-basic-a-href-target/
      index.html
      target-page.html
      style.css
      README.md
    02-anchor-navigation/
      index.html
      style.css
      README.md
    03-file-and-app-links/
      index.html
      style.css
      README.md
      assets/
        files/
          sample-download.txt
    04-common-mistake-link-vs-button/
      index.html
      style.css
      main.js
      README.md
    05-practical-card-links/
      index.html
      style.css
      README.md
      assets/
        images/
          article-preview.svg
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。

部分 demo 會開啟新分頁、下載檔案，或嘗試喚起電話與郵件應用。這些行為會依瀏覽器、作業系統與使用者設定而有所不同。
