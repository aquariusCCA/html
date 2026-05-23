# iframe 常見錯誤與修正

## 基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `04-common-mistake-iframe-accessibility` |
| 建議路徑 | `demos/第24章_框架標籤/04-common-mistake-iframe-accessibility/` |
| Demo 類型 | 常見錯誤 |
| 難度 | 進階 |
| 對應 notes | `notes/第24章_框架標籤/框架標籤.md` |
| 主要知識點 | `title`、`target/name` 對應、固定寬度、CSS 尺寸控制 |

## 1. Demo 目標

這個 demo 用來示範：

- iframe 缺少 `title` 的問題。
- `target` 與 iframe `name` 不一致的問題。
- 固定寬度 iframe 在小螢幕上的風險。
- 如何用檢查器對照錯誤寫法與修正寫法。

## 2. 對應 notes

- 筆記路徑：`notes/第24章_框架標籤/框架標籤.md`
- 對應章節：`6. 實務應用場景`、`7. 常見錯誤與修正`
- 對應知識點：
  - iframe `title`
  - iframe `name`
  - 連結 `target`
  - CSS 響應式尺寸

## 檔案結構

```text
demos/
  第24章_框架標籤/
    04-common-mistake-iframe-accessibility/
      index.html
      style.css
      main.js
      README.md
      content/
        safe-preview.html
```

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 點擊「檢查 iframe 寫法」
4. 比較錯誤寫法與修正寫法的檢查結果

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. 錯誤寫法缺少 `title`。
2. 錯誤寫法的連結 `target` 找不到同名 iframe。
3. 錯誤寫法使用固定 `width="900"`。
4. 修正寫法使用 `title`、一致的 `target/name` 與 CSS class。

## 5. 程式碼重點

### HTML

- 錯誤區故意保留缺少 `title`、target 名稱不一致與固定寬度。
- 修正區使用可描述內容的 `title`，並讓 target 與 iframe name 一致。

### CSS

- `.responsive-frame` 示範以 CSS 控制 iframe 尺寸。
- `.frame-wrap` 讓固定寬度造成的溢出更容易觀察。

### JavaScript

- 使用 DOM 查詢 iframe、link 的屬性。
- 檢查 `title` 是否存在、target 是否找得到同名 iframe、是否使用大尺寸固定寬度。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 幫錯誤寫法中的 iframe 補上 `title`，再重新檢查。
2. 把錯誤寫法中的 link `target` 改成 `lesson-frame`，再重新檢查。
3. 移除錯誤 iframe 的 `width="900"`，改用 CSS class 控制尺寸。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 缺少 iframe `title` | 輔助工具難以說明框架用途 | 加上清楚描述內容的 `title` |
| `target` 與 `name` 不一致 | 內容不會載入預期 iframe | 確認名稱完全一致 |
| 固定寬度過大 | 小螢幕可能溢出 | 使用 CSS 控制響應式寬度 |

## 8. 自我檢查

- [ ] 我能指出錯誤寫法中的 iframe 問題。
- [ ] 我能修正缺少 `title` 的問題。
- [ ] 我能讓 `target` 對應到正確的 iframe `name`。
- [ ] 我能用 CSS 改善 iframe 的響應式尺寸。
