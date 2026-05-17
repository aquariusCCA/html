# 從 Notes 生成 Review 的實際提問範本

> 檔案位置：`prompts/requests/generate-review-from-notes.md`
>
> 用途：存放實際向 AI 發問時，可以直接複製使用的提問內容。
>
> 建議搭配：
>
> - `prompts/system/review-generator.md`
> - `prompts/workflows/notes-to-review.md`
> - `prompts/formats/review-material-format.md`

---

## 一、使用方式

當你想從 `notes/` 生成 `review/` 複習材料時，可以把以下任一提問範本貼給 AI。

建議使用順序：

1. 先提供 `review-generator.md` 作為複習材料生成規則。
2. 再提供 `notes-to-review.md` 作為生成流程。
3. 再提供 `review-material-format.md` 作為輸出格式。
4. 最後使用本檔案中的 request 提問範本。

預設輸出路徑沿用 `notes-to-review.md` 的單檔章節命名方式：

```text
review/{chapter-number}-{chapter-slug}-review.md
```

---

## 二、最小提問範本

適合快速從一份 notes 產生 review 複習材料。

````markdown
請根據以下 notes 內容，生成對應的 review 複習材料。

請遵守：

1. 只能根據 notes 內容生成，不要加入 notes 沒有提到的外部知識。
2. 輸出語言使用繁體中文。
3. 內容要適合複習、回想、檢測與考前快速瀏覽，不要重新寫成完整教學筆記。
4. 優先保留 notes 原本的章節脈絡與概念順序。
5. 請依照 `prompts/formats/review-material-format.md` 的格式輸出。
6. 如果 notes 資訊不足以產生某個區塊，請標示「原筆記資訊不足」，不要硬補。
7. 若需要補充推論，必須明確標示為「補充理解」或「延伸提醒」。

## Notes 資訊

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}
- 預計輸出路徑：`review/{chapter-number}-{chapter-slug}-review.md`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 三、完整提問範本

適合正式生成一份可放入 `review/` 的完整複習材料。

````markdown
請你扮演「學習複習材料生成助手」，根據我提供的 HTML 正式筆記，生成 `review/` 複習材料。

請套用以下規則：

- 系統規則：`prompts/system/review-generator.md`
- 工作流程：`prompts/workflows/notes-to-review.md`
- 輸出格式：`prompts/formats/review-material-format.md`

## 任務目標

請從以下 notes 生成適合複習、主動回想、自我檢測與考前衝刺使用的複習材料。

生成結果要能幫助我：

1. 快速掌握本章核心重點。
2. 建立本章知識架構。
3. 用問題與題目檢查自己是否真的理解。
4. 找出容易混淆或容易犯錯的觀念。
5. 在考前用精簡版本快速回顧。

## 生成範圍

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}
- 目標輸出路徑：`review/{chapter-number}-{chapter-slug}-review.md`
- 生成完整度：完整複習材料
- 答案策略：提供填空題、判斷題與簡答題的答案或參考答案

## 請先輸出 Review 規劃

請先整理：

| 區塊 | 對應 notes 知識點 | 複習目的 | 產出方式 |
|---|---|---|---|

確認規劃後，直接繼續輸出完整複習材料，不需要再問我。

## 輸出要求

請包含：

1. 章節總覽
2. 核心重點摘要
3. 知識架構
4. 必背觀念
5. 易混淆觀念比較
6. 常見錯誤與注意事項
7. 主動回想問題
8. 填空題
9. 判斷題
10. 簡答題
11. 複習檢查清單
12. 考前快速複習版
13. 本章複習建議

## 限制條件

請避免：

1. 生成與 notes 無關的知識點。
2. 把 notes 重新改寫成另一份完整教學筆記。
3. 大段複製 notes 原文而沒有轉換成複習形式。
4. 加入 notes 沒有提到的進階觀念、語法或實務細節。
5. 產生無法從 notes 找到依據的題目或答案。
6. 把補充推論偽裝成 notes 原本內容。
7. 輸出與複習材料無關的閒聊內容。

## 資訊不足處理

如果 notes 不足以支撐某個區塊，請依情況使用以下寫法：

- `原筆記資訊不足，無法整理此項。`
- `本章原筆記中沒有明顯需要比較的易混淆觀念。`
- `此題型缺乏足夠內容支撐，因此不硬產生。`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 四、不顯示答案的提問範本

適合想先自行作答，不希望直接看到題目答案。

````markdown
請根據以下 notes 內容，生成 review 複習材料，但不要提供題目答案。

請遵守：

1. 只能根據 notes 內容生成。
2. 輸出繁體中文。
3. 請保留主動回想問題、填空題、判斷題與簡答題。
4. 請不要輸出填空題答案、判斷題答案與解析、簡答題參考答案。
5. 可以保留「答案區」標題，但內容請標示：`請先自行作答後再回頭檢查 notes。`
6. 如果 notes 資訊不足，請明確標示「原筆記資訊不足」。

## Notes 資訊

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}
- 預計輸出路徑：`review/{chapter-number}-{chapter-slug}-review.md`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 五、指定複習區塊的提問範本

適合只想針對某幾個 review 區塊生成內容。

````markdown
請根據以下 notes 內容，只生成指定的 review 區塊。

## 指定區塊

{請填入一個或多個區塊，例如：核心重點摘要 / 知識架構 / 易混淆觀念比較 / 主動回想問題 / 填空題 / 判斷題 / 簡答題 / 考前快速複習版}

## 生成要求

1. 只根據 notes 內容生成。
2. 不要輸出未指定的區塊。
3. 內容要偏向複習、回想與檢測，不要重新教學。
4. 如果指定區塊缺乏 notes 支撐，請標示「原筆記資訊不足」。
5. 若生成題目，請讓每題都能對應到 notes 中的知識點。

## Notes 資訊

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 六、指定知識點的提問範本

適合只針對 notes 中某個小概念生成小型 review。

````markdown
請根據以下 notes 中的指定知識點，生成一份小型 review 複習材料。

## 指定知識點

{例如：HTML 標籤的開始標籤、內容與結束標籤}

## 複習要求

1. 只聚焦這個知識點，不要延伸到其他主題。
2. 請包含：
   - 核心重點摘要
   - 必背觀念
   - 易錯提醒
   - 主動回想問題
   - 3 題填空題
   - 3 題判斷題
   - 考前快速複習版
3. 每個重點與題目都必須能對應 notes 內容。
4. 如果 notes 對指定知識點描述不足，請標示「原筆記資訊不足」。

## 建議輸出路徑

`review/{chapter-number}-{concept-slug}-review.md`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 七、考前快速複習版提問範本

適合只想從 notes 產生短版考前複習材料。

````markdown
請根據以下 notes 內容，生成「考前快速複習版」。

## 輸出要求

請只輸出以下區塊：

1. 必看重點
2. 必記關鍵字
3. 最容易錯的地方
4. 5 題主動回想問題
5. 5 項考前檢查清單

## 限制條件

1. 只能根據 notes 內容生成。
2. 內容要短、密度高，適合考前快速掃過。
3. 不要重新解釋完整概念。
4. 不要加入 notes 沒有提到的補充知識。
5. 如果 notes 沒有提到容易錯的地方，請標示「原筆記資訊不足」。

## Notes 資訊

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 八、多章節整合複習提問範本

適合把多份 notes 整理成一份跨章節總複習。

````markdown
請根據以下多份 notes 內容，生成一份跨章節 review 總複習材料。

請套用：

- 系統規則：`prompts/system/review-generator.md`
- 工作流程：`prompts/workflows/notes-to-review.md`
- 輸出格式：`prompts/formats/review-material-format.md`

## 整合目標

請幫我整理出：

1. 各章節的核心重點。
2. 跨章節的知識架構。
3. 容易混淆的觀念比較。
4. 適合總複習的主動回想問題。
5. 可用於考前快速瀏覽的濃縮版本。

## 生成範圍

- notes 數量：{請填入數量}
- 章節範圍：{例如：第 01 章到第 03 章}
- 目標輸出路徑：`review/{review-slug}-summary-review.md`

## 限制條件

1. 只能根據提供的 notes 內容生成。
2. 請保留各章節來源脈絡，不要把不同章節混成無法追溯的內容。
3. 跨章節比較必須有 notes 內容支撐。
4. 如果某章節資訊不足，請標示是哪一章不足。
5. 不要加入 notes 沒有提到的外部知識。

## Notes 內容

### Notes 1

- notes 路徑：`notes/{chapter-1}/{note-file-1}.md`
- 章節名稱：{chapter-title-1}

```md
{貼上第 1 份 notes 內容}
```

### Notes 2

- notes 路徑：`notes/{chapter-2}/{note-file-2}.md`
- 章節名稱：{chapter-title-2}

```md
{貼上第 2 份 notes 內容}
```

{如有更多 notes，請依序增加}
````

---

## 九、簡短版提問

````markdown
請根據 `prompts/system/review-generator.md`、`prompts/workflows/notes-to-review.md`、`prompts/formats/review-material-format.md`，幫我把下面 notes 轉成 `review/` 複習材料。

要求：

1. 只根據 notes 內容生成。
2. 使用繁體中文。
3. 輸出為 Markdown。
4. 包含重點摘要、知識架構、必背觀念、易混淆比較、主動回想問題、填空題、判斷題、簡答題、複習檢查清單與考前快速複習版。
5. 資訊不足處請標示「原筆記資訊不足」。

目標輸出路徑：`review/{chapter-number}-{chapter-slug}-review.md`

Notes 內容：

```md
{貼上 notes 內容}
```
````
