# 從 Notes 生成 Demo 的實際提問範本

> 檔案位置：`prompts/requests/generate-demo-from-note-request.md`
> 用途：存放實際向 AI 發問時，可以直接複製使用的提問內容。  
> 建議搭配：
>
> - `prompts/system/demo-generator-system.md`
> - `prompts/workflows/notes-to-demos-workflow.md`
> - `prompts/formats/demo-format.md`

---

## 一、使用方式

當你想從 `notes/` 生成 `demos/` 時，可以把以下任一提問範本貼給 AI。

建議使用順序：

1. 先提供 `demo-generator.system.md` 作為系統規則。
2. 再提供 `notes-to-demos-workflow.md` 作為生成流程。
3. 再提供 `demo-format.md` 作為輸出格式。
4. 最後使用本檔案中的 request 提問範本。

---

## 二、最小提問範本

適合快速從一份 notes 產生 demo。

````markdown
請根據以下 notes 內容，生成對應的 demos 範例程式。

請套用以下規格：

- 系統規則：`prompts/system/demo-generator-system.md`
- 工作流程：`prompts/workflows/notes-to-demos-workflow.md`
- 輸出格式：`prompts/formats/demo-format.md`

請遵守：

1. 主要根據 notes 內容生成，不要發散到無關主題。
2. 每個 demo 聚焦一個主要概念。
3. 優先生成可直接在瀏覽器打開的 HTML / CSS / JavaScript 範例。
4. 每個 demo 都要包含：
   - Demo 目標
   - 對應 notes 知識點
   - 檔案結構
   - 完整程式碼
   - 執行方式
   - 觀察重點
   - 修改練習
   - 常見錯誤或注意事項
5. 如果 notes 資訊不足，請明確標註不足處，不要憑空生成複雜功能。

## Notes 資訊

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}
- 預計輸出路徑：`demos/{chapter-slug}/`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 三、完整提問範本

適合正式生成一章節的 demo。

````markdown
請你扮演「Demo 生成器」，根據我提供的 HTML 正式筆記，生成 `demos/` 範例程式。

請套用以下規則：

- 系統規則：`prompts/system/demo-generator-system.md`
- 工作流程：`prompts/workflows/notes-to-demos-workflow.md`
- 輸出格式：`prompts/formats/demo-format.md`

## 任務目標

請從以下 notes 生成適合初學者觀察、執行、修改的 demo。

生成結果要能幫助我：

1. 把筆記中的抽象概念轉成可執行範例。
2. 觀察不同 HTML 寫法造成的差異。
3. 透過修改程式碼加深理解。
4. 後續可以銜接到 `practice/` 練習題。

## 生成範圍

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}
- 目標輸出路徑：`demos/{chapter-slug}/`
- 預計 demo 數量：{請填入數量，例如 3 個；若不確定，請填「由 AI 判斷」}
- 難度：基礎 / 進階 / 整合
- 檔案形式：
  - 優先拆成 `index.html`、`style.css`、`main.js`、`README.md`
  - 如果 demo 很小，可以只使用 `index.html` 與 `README.md`

## Demo 類型偏好

請優先考慮以下類型：

1. 單一概念 demo
2. 對照型 demo
3. 常見錯誤 demo
4. 實務應用 demo
5. 小型整合 demo

## 請先輸出 Demo 規劃

請先整理：

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|

確認規劃後，直接繼續輸出完整 demo，不需要再問我。

## 輸出要求

每個 demo 請包含：

1. 基本資訊
2. 學習目標
3. 對應 notes 知識點
4. 檔案結構
5. 完整檔案內容
6. 執行方式
7. 觀察重點
8. 修改練習
9. 常見錯誤或注意事項
10. 自我檢查

## 限制條件

請避免：

1. 生成與 notes 無關的 demo。
2. 一次產生過度龐大的專案。
3. 使用 Vue、React、Bootstrap 或其他第三方框架。
4. 將 appendix、practice、review 的內容混入 demo。
5. 只給程式碼但沒有教學說明。
6. 產生不可執行或缺少關鍵檔案的範例。

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 四、指定產生單一 Demo 的提問範本

適合只想針對某個知識點生成一個 demo。

````markdown
請根據以下 notes 中的指定知識點，生成一個小而清楚的 demo。

請套用以下規格：

- 系統規則：`prompts/system/demo-generator-system.md`
- 工作流程：`prompts/workflows/notes-to-demos-workflow.md`
- 輸出格式：`prompts/formats/demo-format.md`

## 指定知識點

{例如：label 與 input 的綁定關係}

## Demo 要求

1. 只聚焦這個知識點，不要加入太多額外概念。
2. 使用原生 HTML / CSS / JavaScript。
3. 可以直接在瀏覽器打開。
4. 請包含 README 說明。
5. 請提供至少 3 個修改練習。

## 建議輸出路徑

`demos/{chapter-slug}/{demo-slug}/`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 五、指定產生對照型 Demo 的提問範本

適合比較兩種寫法差異。

````markdown
請根據以下 notes 內容，生成一個「對照型 demo」。

請套用以下規格：

- 系統規則：`prompts/system/demo-generator-system.md`
- 工作流程：`prompts/workflows/notes-to-demos-workflow.md`
- 輸出格式：`prompts/formats/demo-format.md`

## 對照主題

請比較：

- 寫法 A：{例如：沒有 label for 的表單}
- 寫法 B：{例如：有 label for 的表單}

## Demo 要求

1. 在同一個畫面中清楚呈現兩種寫法。
2. README 要說明兩者差異。
3. 請列出使用者可以觀察的行為差異。
4. 請列出至少 3 個修改練習。
5. 不要使用第三方套件。

## 建議輸出路徑

`demos/{chapter-slug}/{demo-slug}/`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 六、指定產生常見錯誤 Demo 的提問範本

適合整理錯誤寫法與修正方式。

````markdown
請根據以下 notes 內容，生成一個「常見錯誤 demo」。

請套用以下規格：

- 系統規則：`prompts/system/demo-generator-system.md`
- 工作流程：`prompts/workflows/notes-to-demos-workflow.md`
- 輸出格式：`prompts/formats/demo-format.md`

## 錯誤主題

{例如：表單欄位缺少 name 屬性}

## Demo 要求

1. 同時呈現錯誤寫法與正確寫法。
2. 說明錯誤會造成什麼問題。
3. 說明正確寫法如何修正問題。
4. 程式碼要保持小而清楚。
5. README 要包含常見錯誤表格。

## 建議輸出路徑

`demos/{chapter-slug}/{demo-slug}/`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 七、指定產生實務應用 Demo 的提問範本

適合把 HTML 概念放進實際頁面情境。

````markdown
請根據以下 notes 內容，生成一個「實務應用 demo」。

請套用以下規格：

- 系統規則：`prompts/system/demo-generator-system.md`
- 工作流程：`prompts/workflows/notes-to-demos-workflow.md`
- 輸出格式：`prompts/formats/demo-format.md`

## 實務場景

{例如：文章頁、商品卡片、登入表單、FAQ 區塊、聯絡我們表單}

## Demo 要求

1. 場景要小，不要做成大型專案。
2. 必須能看出 notes 中的核心知識點如何被使用。
3. 只使用原生 HTML / CSS / JavaScript。
4. README 要說明每個重要結構對應的 notes 概念。
5. 請提供修改練習，讓我能延伸成 practice 題目。

## 建議輸出路徑

`demos/{chapter-slug}/{demo-slug}/`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 八、請 AI 先規劃、不直接寫程式碼的提問範本

適合 notes 很長，想先確認 demo 拆分是否合理。

````markdown
請先不要生成完整程式碼。

請根據以下 notes，幫我規劃可以生成哪些 demos。

請套用以下規格：

- 系統規則：`prompts/system/demo-generator-system.md`
- 工作流程：`prompts/workflows/notes-to-demos-workflow.md`
- 輸出格式：`prompts/formats/demo-format.md`

## 請輸出

1. Notes 主題摘要
2. 可示範知識點清單
3. 建議 demo 清單
4. 每個 demo 的類型
5. 每個 demo 的學習目標
6. 建議資料夾名稱
7. 是否需要 HTML / CSS / JavaScript
8. 哪些內容不適合生成 demo
9. 哪些 notes 內容不足，需要補充

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 九、請 AI 檢查既有 Demo 的提問範本

適合你已經有 demo，想檢查是否符合筆記。

````markdown
請幫我檢查以下 demo 是否符合 notes 內容與 demo 生成規則。

請套用以下規格：

- 系統規則：`prompts/system/demo-generator-system.md`
- 工作流程：`prompts/workflows/notes-to-demos-workflow.md`
- 輸出格式：`prompts/formats/demo-format.md`

## 檢查目標

請檢查：

1. Demo 是否主要根據 notes 生成
2. 是否偏離章節主題
3. 是否可以直接執行
4. 是否每個 demo 聚焦一個主要概念
5. 是否有足夠教學說明
6. 是否有觀察重點與修改練習
7. 是否有常見錯誤或注意事項
8. 是否需要拆分或簡化
9. 是否可以銜接到 practice

## Notes 內容

```md
{貼上 notes 內容}
```

## Demo 內容

```text
{貼上 demo 檔案結構與程式碼}
```
````

---

## 十、常用變數表

| 變數 | 說明 | 範例 |
|---|---|---|
| `{chapter-title}` | 章節名稱 | HTML 表單 |
| `{chapter-slug}` | 章節資料夾名稱 | `html-form` |
| `{note-file}` | 筆記檔名 | `form-basic.md` |
| `{demo-slug}` | demo 資料夾名稱 | `01-basic-input-types` |
| `{concept}` | 目標知識點 | `input type` |
| `{demo-count}` | demo 數量 | `3` |
| `{difficulty}` | 難度 | `基礎`、`進階`、`整合` |

---

## 十一、推薦預設值

如果沒有特別指定，建議使用以下預設值：

| 項目 | 預設值 |
|---|---|
| Demo 數量 | 由 AI 根據 notes 判斷 |
| Demo 類型 | 單一概念、對照型、常見錯誤優先 |
| 程式碼 | 原生 HTML / CSS / JavaScript |
| 檔案結構 | `index.html` + `README.md`，必要時加 `style.css`、`main.js` |
| 語言 | 繁體中文 |
| 難度 | 基礎到進階 |
| 輸出格式 | 完整輸出 |

---

## 十二、實際範例

以下是一個可直接使用的範例。

````markdown
請根據以下 notes 內容，生成 3 個 demos 範例程式。

請套用以下規格：

- 系統規則：`prompts/system/demo-generator-system.md`
- 工作流程：`prompts/workflows/notes-to-demos-workflow.md`
- 輸出格式：`prompts/formats/demo-format.md`

## Notes 資訊

- notes 路徑：`notes/html-form/form-basic.md`
- 章節名稱：HTML 表單基礎
- 預計輸出路徑：`demos/html-form/`
- Demo 數量：3 個
- 難度：基礎
- Demo 類型：單一概念、對照型、常見錯誤

## 輸出要求

請每個 demo 都包含：

1. 基本資訊
2. 學習目標
3. 對應 notes 知識點
4. 檔案結構
5. 完整檔案內容
6. 執行方式
7. 觀察重點
8. 修改練習
9. 常見錯誤
10. 自我檢查

## Notes 內容

```md
# HTML 表單基礎

表單用來收集使用者輸入資料。

常見元素包含：

- form
- label
- input
- select
- textarea
- button

label 可以透過 for 屬性綁定 input 的 id，讓使用者點擊文字時也能聚焦到輸入框。

input 的 type 會影響輸入行為，例如 text、email、password、number。

表單欄位若要提交資料，通常需要設定 name 屬性。
```
````
