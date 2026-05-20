# robots 規則對照

## 1. Demo 目標

這個 demo 用來示範：

- `robots` metadata 的常見值。
- `index`、`noindex`、`follow`、`nofollow`、`noarchive`、`none` 的差異。
- `robots` 是搜尋引擎索引建議，不是權限控管。

## 2. 對應 notes

- 筆記路徑：`notes/第07章_meta標籤/meta標籤.md`
- 對應章節：`3.9 搜尋爬蟲設定：robots`、`7. 常見錯誤與修正`
- 對應知識點：
  - `<meta name="robots" content="index, follow">`
  - `noindex`
  - `nofollow`
  - `noarchive`
  - `none`
  - robots 不等於安全機制

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 點擊不同 robots 設定按鈕

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `index` 與 `noindex` 影響是否建議索引頁面。
2. `follow` 與 `nofollow` 影響是否建議跟隨連結。
3. `none` 可視為 `noindex, nofollow`。
4. `noarchive` 是要求搜尋引擎不要快取頁面。
5. 即使設定 `noindex`，頁面仍可以被直接開啟。

## 5. 程式碼重點

### HTML

- `<head>` 中先放入 `<meta name="robots" content="index, follow">`。
- 按鈕提供常見 robots content 選項。

### CSS

- `.is-active` 用來標示目前選到的 robots 設定。

### JavaScript

- 更新 `<head>` 中的 robots meta content。
- 將 content 解析成索引、連結追蹤與快取三個觀察結果。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 新增一個 `all` 按鈕，觀察它和 `index, follow` 的關係。
2. 新增一個 `nocache` 按鈕，讓快取狀態顯示不要快取。
3. 修改 `updateRobots()` 中的說明文字，讓它更符合你的理解。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 用 `noindex` 保護機密頁 | 使用者仍可直接開啟網址 | 使用登入、權限或伺服器端保護 |
| 把 `nofollow` 理解成不能點連結 | 它只是給搜尋引擎的連結追蹤建議 | 區分使用者行為與爬蟲指示 |
| 忘記寫 `content` | robots 沒有明確指示 | 寫成 `<meta name="robots" content="...">` |

## 8. 自我檢查

- [ ] 我能說明 `index` 與 `noindex` 的差異。
- [ ] 我能說明 `follow` 與 `nofollow` 的差異。
- [ ] 我能指出 `robots` 不是安全機制。
- [ ] 我能新增一個 robots content 選項並解讀結果。

