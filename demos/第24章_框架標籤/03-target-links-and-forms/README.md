# 使用 target 把內容載入指定 iframe

## 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `03-target-links-and-forms` |
| 建議路徑 | `demos/第24章_框架標籤/03-target-links-and-forms/` |
| Demo 類型 | 實務應用 |
| 難度 | 進階 |
| 對應 notes | `notes/第24章_框架標籤/框架標籤.md` |
| 主要知識點 | `iframe name`、`a target`、`form target` |

## 1. Demo 目標

這個 demo 用來示範：

- `iframe` 的 `name` 可以成為瀏覽目標。
- `<a target="content-frame">` 可以把連結結果載入指定 iframe。
- `<form target="content-frame">` 可以把表單提交結果載入指定 iframe。
- `target` 的值必須與 iframe 的 `name` 一致。

## 2. 對應 notes

- 筆記路徑：`notes/第24章_框架標籤/框架標籤.md`
- 對應章節：`4.5 name 搭配連結的 target`、`4.6 name 搭配表單的 target`
- 對應知識點：
  - iframe `name`
  - 連結 `target`
  - 表單 `target`
  - 表單提交結果顯示位置

## 檔案結構

```text
demos/
  第24章_框架標籤/
    03-target-links-and-forms/
      index.html
      style.css
      README.md
      content/
        default.html
        page-a.html
        page-b.html
        search-result.html
```

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 點擊連結或送出表單，觀察右側 iframe 的內容變化

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 點擊「載入課程公告」時，父頁面不會整頁跳轉，右側 iframe 會換內容。
2. 點擊「載入課程資源」時，同一個 iframe 會再被替換。
3. 送出表單時，結果頁會載入 iframe，並讀取 query string 中的 `keyword`。
4. `target="content-frame"` 必須對上 `iframe name="content-frame"`。

## 5. 程式碼重點

### HTML

- iframe 使用 `name="content-frame"`。
- 連結與表單都使用 `target="content-frame"`。
- 表單使用 `method="get"`，方便觀察送出的 query string。

### CSS

- CSS 只用於將控制區與 iframe 顯示區並排，方便觀察互動結果。

### JavaScript

- 主要頁面不需要 JavaScript。
- `content/search-result.html` 使用少量 JavaScript 讀取 URL query string，讓表單結果更容易觀察。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 把其中一個連結的 `target` 改成 `content-frame-wrong`。
2. 把 iframe 的 `name` 改成 `result-frame`，再同步修改所有 `target`。
3. 把表單中的 `name="keyword"` 改掉，觀察結果頁是否還能讀到關鍵字。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| `target` 與 iframe `name` 不一致 | 內容不會載入預期 iframe | 確認名稱完全一致 |
| iframe 缺少 `name` | 連結或表單找不到指定目標 | 為 iframe 設定穩定的 `name` |
| 表單欄位缺少 `name` | 提交結果沒有該欄位資料 | 需要提交的欄位必須設定 `name` |

## 8. 自我檢查

- [ ] 我能說明 `iframe name` 與 `target` 的對應關係。
- [ ] 我能讓不同連結載入同一個 iframe。
- [ ] 我能讓表單結果顯示在指定 iframe。
- [ ] 我能修正 target 名稱不一致的問題。
