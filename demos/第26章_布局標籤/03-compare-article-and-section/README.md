# article 與 section 對照

## 1. 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `03-compare-article-and-section` |
| 建議路徑 | `demos/第26章_布局標籤/03-compare-article-and-section/` |
| Demo 類型 | 對照型 |
| 難度 | 基礎 |
| 對應 notes | `notes/第26章_布局標籤/布局標籤.md` |
| 主要知識點 | `article` 與 `section` 的差異 |

## 2. 學習目標

這個 demo 用來示範：

- `article` 強調內容可以獨立存在。
- `section` 強調文件或文章中的主題分段。
- 一個 `article` 裡面可以包含多個 `section`。

## 3. 對應 notes

- 筆記路徑：`notes/第26章_布局標籤/布局標籤.md`
- 對應章節：`3.3 article 與 section 的核心差異`、`5. 範例說明`
- 對應知識點：
  - `article` 與 `section` 的判斷標準
  - `article` 內可以有多個 `section`
  - `section` 通常應有清楚標題

## 4. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察三張卡片分別使用哪些 HTML 標籤

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 5. 觀察重點

1. 第一張卡片是一篇可以獨立閱讀的內容，因此使用 `article`。
2. 第二張卡片是頁面中的主題區塊，因此使用 `section`。
3. 第三張卡片外層是 `article`，內部再用多個 `section` 分段。
4. 每個 `section` 都有標題，讓主題更明確。

## 6. 程式碼重點

### HTML

- `article` 用在可獨立閱讀的文章或卡片。
- `section` 用在有明確主題的內容分段。
- `aria-labelledby` 讓區塊和標題建立關聯。

### CSS

- CSS 用不同色條輔助辨識三種結構。
- 視覺設計不代表語意；仍要看 HTML 元素本身。

### JavaScript

- 此 demo 不需要 JavaScript。

## 7. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 把第一張卡片改成 `section`，思考是否仍能表達獨立內容。
2. 在第三張卡片新增一個 `section`，並替它加上標題。
3. 新增一個只為排版存在的外層容器，判斷它應該用 `div` 還是 `section`。

## 8. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 把所有文章段落都寫成 `article` | 內容獨立性被誇大 | 文章內分段通常使用 `section` |
| 把純排版容器寫成 `section` | 產生沒有主題的語意區塊 | 純排版容器使用 `div` |
| `section` 沒有標題 | 使用者不容易知道區塊主題 | 加上能描述主題的標題 |

## 9. 自我檢查

- [ ] 我能說明 `article` 和 `section` 的差異。
- [ ] 我能判斷一段內容是否可以獨立存在。
- [ ] 我能在 `article` 中合理使用多個 `section`。
- [ ] 我能避免把 `section` 當成純排版容器。
