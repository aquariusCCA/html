# id、class、style 與 title 對照

## 1. Demo 目標

這個 demo 用來示範：

- `id` 適合用來唯一識別元素。
- `class` 適合重複套用在多個元素上。
- 行內 `style` 可以生效，但不適合大量管理樣式。
- `title` 可以提供補充提示，但重要資訊應放在可見內容中。

## 2. 對應 notes

- 筆記路徑：`notes/第04章_全局屬性/全局屬性.md`
- 對應章節：`4.3 id 與 class`、`4.2 常用全局屬性速查`、`7. 常見錯誤與修正`
- 對應知識點：
  - `id`
  - `class`
  - `style`
  - `title`

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 點擊頁面上方的頁內連結並觀察跳轉位置

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. `href="#notice-panel"` 會找到具有 `id="notice-panel"` 的元素。
2. 多張卡片共用 `card` class，因此有一致外觀。
3. `featured` class 只套用在第一張卡片上，所以只有它有強調樣式。
4. 行內 `style` 會直接套用，但樣式散落在 HTML 中。
5. `title` 的提示不一定適合鍵盤與觸控使用者，所以重要資訊要可見。

## 5. 程式碼重點

### HTML

- `id` 用在唯一區塊。
- 多個 class 寫在同一個 `class` 屬性中，例如 `class="card featured"`。
- `abbr` 使用 `title` 提供縮寫補充。

### CSS

- `.card` 控制共用卡片外觀。
- `.featured` 控制特定狀態外觀。
- `.good-title` 示範用 class 管理標題樣式。

### JavaScript

- 此 demo 不需要 JavaScript。

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. 將第二張卡片也加上 `featured` class。
2. 把 `id="notice-panel"` 改成其他名稱，再測試頁內連結是否仍可跳轉。
3. 將行內 `style` 移到 `style.css`，改用 class 管理。

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| 重複使用同一個 `id` | 頁內連結或 JavaScript 選取可能出現不明確結果 | 同一份文件中保持 `id` 唯一 |
| 寫成 `class="card" class="featured"` | 重複同名屬性不應依賴瀏覽器解析結果 | 寫成 `class="card featured"` |
| 大量使用行內 `style` | 樣式難以維護與重複使用 | 優先使用 class 搭配 CSS |
| 把重要資訊只放在 `title` | 鍵盤或觸控使用者可能不容易取得 | 重要內容直接顯示在頁面上 |

## 8. 自我檢查

- [ ] 我能說明 `id` 與 `class` 的差異。
- [ ] 我能把多個 class 正確寫在同一個屬性中。
- [ ] 我能說出為什麼不建議大量使用行內 `style`。
- [ ] 我能判斷哪些資訊不應只放在 `title`。

