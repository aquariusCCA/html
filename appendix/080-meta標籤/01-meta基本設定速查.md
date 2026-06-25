---
source_notes:
  - notes/080-meta標籤/01-meta標籤與網頁基本設定.md
  - notes/080-meta標籤/02-meta-refresh自動刷新與導向補充.md
topics: [meta, head, 字元編碼, viewport, meta refresh]
summary: "整理 meta 標籤的基本放置位置、常見顯示設定、文件資訊型 metadata 與 meta refresh 語法。"
---

# meta 基本設定速查

> 查表內容依據 `notes/080-meta標籤/01-meta標籤與網頁基本設定.md` 與 `notes/080-meta標籤/02-meta-refresh自動刷新與導向補充.md`。

## 基本觀念

| 項目 | 說明 |
| --- | --- |
| 放置位置 | `<meta>` 應放在 HTML 文件的 `<head>` 區塊中 |
| 主要用途 | 提供網頁後設資訊，讓瀏覽器、搜尋引擎、社群平台或其他工具理解頁面 |
| 與 body 的差異 | `<head>` 主要給瀏覽器和工具讀取；`<body>` 才是使用者在畫面上主要看到的內容 |
| 判斷重點 | 不要把 meta 背成固定清單；應理解每個 meta 是給誰讀、會影響什麼 |

## 常見基本設定

| 寫法 | 用途 | 適合情境 | 注意事項 |
| --- | --- | --- | --- |
| `<meta charset="UTF-8">` | 告訴瀏覽器 HTML 文件使用 UTF-8 字元編碼 | 現代網頁的基本編碼設定 | 缺少或設定錯誤時，中文可能變成亂碼 |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | 控制手機和平板瀏覽器如何顯示頁面 | 現代響應式網頁常用設定 | 缺少時，手機可能用接近桌面版的寬度縮放頁面，導致文字太小 |
| `<meta http-equiv="X-UA-Compatible" content="IE=edge">` | 要求舊版 Internet Explorer 使用可用的最新文件模式 | 仍需理解舊 IE 相容設定的教材或專案 | 不是每個現代新專案都必備 |

## viewport content 拆解

| 片段 | 意義 |
| --- | --- |
| `width=device-width` | 讓頁面寬度跟裝置螢幕寬度一致 |
| `initial-scale=1.0` | 設定初始縮放比例為 1 倍 |

## 文件資訊型 meta

| 寫法 | 用途 | 注意事項 |
| --- | --- | --- |
| `<meta name="author" content="kevin">` | 描述網頁作者 | 通常不會影響畫面排版 |
| `<meta name="generator" content="Visual Studio Code">` | 描述產生或編輯網頁的工具 | 屬於補充 metadata |
| `<meta name="copyright" content="2023-2027版權所有">` | 描述版權資訊 | 不等於法律文件本身 |

## meta refresh 語法

| 寫法 | 行為 | 適合情境 | 注意事項 |
| --- | --- | --- | --- |
| `<meta http-equiv="refresh" content="5">` | 頁面載入 5 秒後重新整理目前頁面 | 教學示範、簡單狀態頁刷新 | 過度頻繁重新整理會干擾閱讀，也可能增加伺服器負擔 |
| `<meta http-equiv="refresh" content="3;url=https://example.com/target-page">` | 頁面載入 3 秒後導向指定網址 | 非核心頁面的簡單延遲導向、沒有伺服器端設定權限時的最低限度處理 | 不適合作為正式網站搬家或永久轉址的主要方案 |

## meta refresh 使用判斷

| 可以考慮使用 | 應該避免 |
| --- | --- |
| 教學中示範 HTML 自動刷新語法 | 正式網站搬家或永久轉址 |
| 非核心頁面需要簡單延遲導向 | 需要良好 SEO 訊號的頁面 |
| 沒有伺服器端設定權限，只能用 HTML 做最低限度處理 | 會打斷閱讀或操作流程的頁面 |
| 簡單狀態頁需要重新整理 | 頻繁重新整理的動態內容頁 |

## 常見錯誤

| 錯誤 | 風險 | 建議 |
| --- | --- | --- |
| 漏掉 `charset` | 瀏覽器或伺服器沒有正確判斷編碼時，中文可能變成亂碼 | 在 `<head>` 前段放入 `<meta charset="UTF-8">` |
| 漏掉 `viewport` | 手機上可能被縮成很小的桌面版畫面 | 現代響應式網頁加入 viewport 設定 |
| 把所有 meta 都當成會影響畫面 | 混淆解析/顯示設定與文件資訊型 metadata | 分清楚 `charset`、`viewport` 和 `author`、`generator` 等用途 |
| 自動跳轉沒有提示 | 使用者可能還沒看清楚頁面內容就被帶走 | 提供清楚提示，並保留可手動點擊的連結 |
| 把 meta refresh 當成正式轉址方案 | 搜尋引擎與瀏覽器處理不如伺服器端轉址明確 | 網站搬家通常優先使用伺服器端 301 或 302 |
| 每秒重新整理頁面 | 使用者難以閱讀，也可能增加伺服器負擔 | 若要更新資料，現代網頁通常改用 JavaScript 搭配 API 局部更新 |
