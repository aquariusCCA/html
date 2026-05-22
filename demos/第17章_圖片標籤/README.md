# HTML 圖片標籤 img 對應 Demo 規劃

## 一、Notes 摘要

本章說明 HTML `<img>` 圖片標籤的用途與常見屬性，核心知識點包含 `src` 圖片來源、`alt` 替代文字、`title` 提示文字、`width` / `height` 尺寸控制、常見圖片格式，以及圖片在可訪問性、SEO、效能與實務維護上的注意事項。

## 二、Demo 清單

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|
| `01-basic-img-src-alt` | 單一概念 | `<img>` 基本語法、`src`、`alt`、`title` | 理解圖片標籤如何載入圖片，並觀察替代文字與提示文字的角色 | `demos/第17章_圖片標籤/01-basic-img-src-alt/` |
| `02-compare-alt-and-broken-image` | 對照型 / 常見錯誤 | 圖片載入失敗、`alt` 替代文字、缺少 `alt` 的問題 | 比較圖片正常、圖片失敗但有 `alt`、圖片失敗且缺少 `alt` 的差異 | `demos/第17章_圖片標籤/02-compare-alt-and-broken-image/` |
| `03-compare-image-dimensions` | 對照型 | `width`、`height`、圖片比例、響應式圖片 | 觀察只設定單一尺寸與錯誤寬高比例造成的差異 | `demos/第17章_圖片標籤/03-compare-image-dimensions/` |
| `04-practical-product-card-images` | 實務應用 | 產品圖片、語意文字、`alt`、CSS 圖片排版 | 在產品卡片情境中正確使用圖片與文字內容 | `demos/第17章_圖片標籤/04-practical-product-card-images/` |

## 三、整體檔案結構

```text
demos/
  第17章_圖片標籤/
    README.md
    assets/
      images/
        avatar-profile.svg
        photo-landscape.svg
        product-headphones.svg
    01-basic-img-src-alt/
      index.html
      style.css
      README.md
    02-compare-alt-and-broken-image/
      index.html
      style.css
      README.md
    03-compare-image-dimensions/
      index.html
      style.css
      README.md
    04-practical-product-card-images/
      index.html
      style.css
      README.md
```

## 四、使用方式

每個 demo 都可以直接用瀏覽器開啟 `index.html`。若使用 VS Code，也可以在 demo 資料夾上使用 Live Server 觀察結果。
