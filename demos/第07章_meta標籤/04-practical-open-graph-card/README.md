# Open Graph 分享卡片

## 1. Demo 目標

這個 demo 用來示範：

- Open Graph 使用 `property` 搭配 `content`。
- `og:title`、`og:description`、`og:image`、`og:url`、`og:type` 各自負責的資訊。
- metadata 可被外部平台讀取，但不會直接改變頁面主內容。

## 2. 對應 notes

- 筆記路徑：`notes/第07章_meta標籤/meta標籤.md`
- 對應章節：`3.11 社群分享設定：Open Graph`、`4.4 property 與 content 的基本模式`
- 對應知識點：
  - `<meta property="og:title" content="...">`
  - `og:description`
  - `og:image`
  - `og:url`
  - `og:type`

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 修改左側表單，觀察右側分享卡片與程式碼

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `og:title` 對應分享卡片標題。
2. `og:description` 對應分享卡片摘要。
3. `og:image` 通常是分享卡片圖片網址。
4. `og:url` 是分享時對應的標準網址。
5. Open Graph metadata 是否被採用，仍取決於外部平台規則與快取。

## 5. 程式碼重點

### HTML

- `<head>` 中放入 Open Graph metadata。
- 表單欄位對應每一筆 Open Graph metadata。

### CSS

- `.share-card` 模擬社群分享卡片的視覺結構。
- `.preview-image` 只用來輔助觀察 `og:image` 的值。

### JavaScript

- 表單改變時同步更新 `<head>` 裡的 Open Graph meta。
- 將目前 metadata 轉成可閱讀的程式碼區塊。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 把 `og:type` 從 `article` 改成 `website`。
2. 把 `og:title` 改成不同文章標題。
3. 清空 `og:image`，觀察預覽如何提醒缺少圖片。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 用 `name="og:title"` | Open Graph 常用 `property` 屬性 | 寫成 `property="og:title"` |
| 圖片網址無法公開存取 | 社群平台可能抓不到圖片 | 使用可公開讀取的圖片網址 |
| 以為改完 metadata 立即更新所有平台 | 平台可能有快取 | 使用平台除錯工具或等待快取更新 |

## 8. 自我檢查

- [ ] 我能說明 Open Graph metadata 的用途。
- [ ] 我能指出 `property` 與 `content` 的關係。
- [ ] 我能修改分享卡片標題、描述與圖片網址。
- [ ] 我能說明 Open Graph 不會直接改變頁面主內容。

