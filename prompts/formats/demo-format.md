# Demo 輸出格式提示詞

> 檔案位置：`prompts/formats/demo-format.md`  
> 用途：規範從 `notes/` 生成 `demos/` 時的固定輸出格式。  
> 建議搭配：
>
> - `prompts/system/demo-generator.system.md`
> - `prompts/workflows/notes-to-demos.workflow.md`

---

## 一、輸出格式總原則

生成 demo 時，請輸出「可直接建立檔案」的內容。

每個 demo 都要讓學習者清楚知道：

1. 這個 demo 放在哪裡
2. 這個 demo 示範什麼
3. 對應 notes 哪些知識點
4. 如何執行
5. 要觀察什麼
6. 可以怎麼修改
7. 常見錯誤是什麼

---

## 二、單一 Demo 輸出格式

請使用以下格式輸出單一 demo。

````markdown
# Demo：{demo-title}

## 一、基本資訊

| 欄位 | 內容 |
|---|---|
| Demo 名稱 | `{demo-slug}` |
| 建議路徑 | `demos/{chapter-slug}/{demo-slug}/` |
| Demo 類型 | 單一概念 / 對照型 / 常見錯誤 / 實務應用 / 小型整合 |
| 難度 | 基礎 / 進階 / 整合 |
| 對應 notes | `{notes-path}` |
| 主要知識點 | `{concept}` |

## 二、學習目標

完成這個 demo 後，學習者應該能夠：

1. ...
2. ...
3. ...

## 三、對應 notes 知識點

| notes 知識點 | demo 中的呈現方式 |
|---|---|
| ... | ... |
| ... | ... |

## 四、檔案結構

```text
demos/
  {chapter-slug}/
    {demo-slug}/
      index.html
      style.css
      main.js
      README.md
```

## 五、檔案內容

### `index.html`

```html
<!-- 請輸出完整 HTML -->
```

### `style.css`

```css
/* 若不需要 CSS，請改成：此 demo 不需要 style.css */
```

### `main.js`

```js
// 若不需要 JavaScript，請改成：此 demo 不需要 main.js
```

### `README.md`

```markdown
# {demo-title}

## Demo 目標

...

## 如何執行

1. 開啟 `index.html`
2. 使用瀏覽器觀察畫面

## 觀察重點

1. ...
2. ...
3. ...

## 修改練習

1. ...
2. ...
3. ...

## 常見錯誤

1. ...
2. ...

## 自我檢查

- [ ] 我能說出這個 demo 示範的 HTML 概念
- [ ] 我能修改程式碼並觀察結果變化
- [ ] 我能指出錯誤寫法與正確寫法的差異
```

## 六、執行方式

...

## 七、觀察重點

1. ...
2. ...
3. ...

## 八、修改練習

1. ...
2. ...
3. ...

## 九、常見錯誤或注意事項

1. ...
2. ...

## 十、自我檢查

- [ ] ...
- [ ] ...
- [ ] ...
````

---

## 三、多個 Demo 輸出格式

如果一次生成多個 demo，請先輸出總覽，再逐一輸出每個 demo。

````markdown
# `{notes-title}` 對應 Demo 規劃

## 一、Notes 摘要

簡要說明這份 notes 的主題與核心知識點。

## 二、Demo 清單

| 編號 | Demo 名稱 | 類型 | 對應知識點 | 建議路徑 |
|---:|---|---|---|---|
| 01 | `{demo-slug}` | 單一概念 | ... | `demos/...` |
| 02 | `{demo-slug}` | 對照型 | ... | `demos/...` |
| 03 | `{demo-slug}` | 常見錯誤 | ... | `demos/...` |

## 三、整體檔案結構

```text
demos/
  {chapter-slug}/
    01-xxx/
      index.html
      README.md
    02-xxx/
      index.html
      style.css
      README.md
    03-xxx/
      index.html
      style.css
      main.js
      README.md
```

---

# Demo 01：{demo-title}

依照「單一 Demo 輸出格式」輸出。

---

# Demo 02：{demo-title}

依照「單一 Demo 輸出格式」輸出。

---

# Demo 03：{demo-title}

依照「單一 Demo 輸出格式」輸出。
````

---

## 四、README.md 固定格式

每個 demo 的 `README.md` 建議使用以下格式。

````markdown
# {demo-title}

## 1. Demo 目標

這個 demo 用來示範：

- ...
- ...

## 2. 對應 notes

- 筆記路徑：`{notes-path}`
- 對應章節：`{section-title}`
- 對應知識點：
  - ...
  - ...

## 3. 如何執行

方式一：直接打開檔案

1. 找到 `index.html`
2. 使用瀏覽器開啟
3. 觀察畫面與互動效果

方式二：使用 VS Code Live Server

1. 在 demo 資料夾上按右鍵
2. 選擇 `Open with Live Server`
3. 在瀏覽器中查看結果

## 4. 觀察重點

1. ...
2. ...
3. ...

## 5. 程式碼重點

### HTML

- ...

### CSS

- ...

### JavaScript

- ...

## 6. 修改練習

請嘗試修改以下內容，觀察結果差異：

1. ...
2. ...
3. ...

## 7. 常見錯誤

| 錯誤 | 可能造成的問題 | 修正方式 |
|---|---|---|
| ... | ... | ... |

## 8. 自我檢查

- [ ] 我能說明這個 demo 的主要概念
- [ ] 我能指出關鍵 HTML 結構
- [ ] 我能修改 demo 並觀察結果
- [ ] 我能避免 README 中列出的常見錯誤
````

---

## 五、程式碼輸出規範

### 1. `index.html`

若生成完整 HTML 檔，請至少包含：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Demo Title</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <!-- Demo content -->

  <script src="./main.js"></script>
</body>
</html>
```

若不需要 CSS 或 JavaScript，請不要引入對應檔案。

---

### 2. `style.css`

CSS 只用來輔助觀察，不要讓視覺設計蓋過 HTML 主題。

建議包含：

```css
* {
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 24px;
}

.demo-section {
  margin-bottom: 24px;
}
```

可依 demo 需要調整，但不要加入大型 CSS reset 或第三方框架。

---

### 3. `main.js`

只有在需要互動時才加入 `main.js`。

例如：

```js
const output = document.querySelector('[data-output]');
const button = document.querySelector('[data-action]');

button.addEventListener('click', () => {
  output.textContent = '你剛剛觸發了按鈕事件。';
});
```

如果 notes 是純 HTML 主題，通常不需要 JavaScript。

---

## 六、Demo 類型標籤

請在基本資訊中使用以下標籤之一。

| 標籤 | 說明 |
|---|---|
| 單一概念 | 聚焦一個 HTML 標籤、屬性或觀念 |
| 對照型 | 比較不同寫法造成的差異 |
| 常見錯誤 | 展示錯誤寫法與修正方式 |
| 實務應用 | 將知識點放入真實頁面情境 |
| 小型整合 | 整合一章節內多個相關知識點 |

---

## 七、難度標籤

請在基本資訊中使用以下標籤之一。

| 難度 | 說明 |
|---|---|
| 基礎 | 適合剛學完該筆記後直接觀察 |
| 進階 | 需要理解多個相關概念 |
| 整合 | 整合一個小節或章節內容 |

---

## 八、輸出時的省略規則

如果使用者要求「簡短輸出」，可以只輸出：

1. Demo 規劃清單
2. 檔案結構
3. 主要檔案內容

如果使用者要求「完整輸出」，必須包含：

1. Notes 摘要
2. Demo 清單
3. 檔案結構
4. 所有檔案內容
5. README
6. 執行方式
7. 觀察重點
8. 修改練習
9. 常見錯誤
10. 自我檢查

---

## 九、禁止輸出格式

請避免以下輸出方式：

1. 只給一段零散程式碼，沒有檔案名稱。
2. 只說明概念，沒有可執行 demo。
3. 沒有標示 demo 對應 notes 哪個知識點。
4. 把正式筆記內容原封不動貼成 demo。
5. 一個 demo 同時混入過多不相關概念。
6. 使用 Vue、React、Bootstrap 等 notes 未要求的框架或套件。
