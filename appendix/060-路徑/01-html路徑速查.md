---
source_notes:
  - notes/060-路徑/01-路徑：讓 HTML 找到圖片與資源.md
topics: [HTML 路徑, 絕對路徑, 相對路徑, 資源引用, 路徑失效]
summary: "整理 HTML 引用圖片、CSS、JavaScript 等外部資源時常見的路徑類型、相對路徑寫法與失效原因。"
---

# HTML 路徑速查

> 查表內容依據 `notes/060-路徑/01-路徑：讓 HTML 找到圖片與資源.md`。

## 路徑類型

| 類型 | 參考點 | 範例 | 常見用途 | 注意事項 |
| --- | --- | --- | --- | --- |
| 本機絕對路徑 | 電腦上的固定磁碟位置 | `D:\day01\images\1.jpg` | 自己電腦上的少數固定位置資源 | 不適合正式網頁；換電腦、換磁碟或部署到伺服器後通常失效 |
| 網路絕對路徑 | 完整網址 | `https://example.com/logo.gif` | CDN、其他網站提供的外部資源 | 外部資源可能被刪除、改網址、拒絕外部引用或因網路問題載入失敗 |
| 網站根目錄路徑 | 網站根目錄 | `/images/logo.png` | 伺服器環境中的網站內資源 | 不是從目前 HTML 檔案所在資料夾出發；直接用檔案總管開本機 HTML 時可能不符合預期 |
| 相對路徑 | 目前 HTML 檔案所在位置 | `images/1.jpg`、`../images/1.jpg` | 專案內圖片、CSS、JavaScript | 依賴目前 HTML 檔案位置；移動 HTML 或資源檔後要同步檢查 |

## 相對路徑寫法

| 情境 | 專案結構概念 | 寫法 | 意義 |
| --- | --- | --- | --- |
| 同一層 | HTML 檔案和圖片在同一個資料夾 | `logo.png` | 從目前 HTML 所在資料夾直接找 `logo.png` |
| 同一層，明確寫目前資料夾 | HTML 檔案和圖片在同一個資料夾 | `./logo.png` | `./` 代表目前資料夾，通常可以省略 |
| 下一層 | 圖片在 HTML 旁邊的 `images` 資料夾 | `images/logo.png` | 從目前位置進入 `images`，再找 `logo.png` |
| 上一層再進入資料夾 | HTML 在 `pages`，圖片在上一層的 `images` | `../images/logo.png` | 先用 `../` 回到上一層，再進入 `images` 找檔案 |

## 常見資源引用

| 資源 | 範例 | 說明 |
| --- | --- | --- |
| 圖片 | `<img src="images/banner.jpg" alt="首頁橫幅">` | `src` 指向圖片檔案位置 |
| CSS | `<link rel="stylesheet" href="css/style.css">` | `href` 指向樣式表位置 |
| JavaScript | `<script src="js/main.js"></script>` | `src` 指向 JavaScript 檔案位置 |
| 外部 JavaScript | `<script src="https://cdn.example.com/library.js"></script>` | 完整網址型絕對路徑適合引用外部資源 |

## 路徑拆解

| 路徑 | 尋找順序 |
| --- | --- |
| `images/photo.jpg` | 從目前 HTML 所在資料夾出發，進入 `images`，找到 `photo.jpg` |
| `../images/product.jpg` | 從目前 HTML 所在資料夾出發，回到上一層，進入 `images`，找到 `product.jpg` |
| `./logo.png` | 從目前 HTML 所在資料夾出發，找到 `logo.png` |

## 常見失效原因

| 情境 | 錯誤或風險 | 建議做法 |
| --- | --- | --- |
| 使用本機絕對路徑 | `D:\day01\images\1.jpg` 只對特定電腦有意義 | 把圖片放進專案資料夾，改用相對路徑，例如 `images/1.jpg` |
| 移動 HTML 檔案後沿用舊路徑 | 原本在根目錄的 `images/logo.png`，移到 `pages/index.html` 後會從 `pages` 裡找 `images` | 依新位置改成 `../images/logo.png` |
| 引用外站圖片 | 對方可能改網址、刪圖片、限制外部引用或發生網路問題 | 自己網站需要穩定顯示的圖片，應放進自己的專案或自己的伺服器 |
| 檔名或資料夾名稱錯誤 | 任一層資料夾名稱、檔名或相對位置錯了，資源就載入失敗 | 檢查目前 HTML 位置、每一層資料夾名稱與目標檔名 |

## 實務判斷

| 需求 | 優先選擇 |
| --- | --- |
| 引用專案內圖片、CSS、JavaScript | 相對路徑 |
| 整個專案資料夾要能搬移或部署 | 保持內部資料夾結構，使用相對路徑 |
| 引用 CDN 或其他網站提供的檔案 | 完整網址型絕對路徑 |
| 引用自己網站需要穩定顯示的圖片 | 放進自己的專案或自己的伺服器中管理 |
| 只是想表示目前資料夾 | `./`，但多數情況可省略 |
| 需要回到上一層資料夾 | `../` |
