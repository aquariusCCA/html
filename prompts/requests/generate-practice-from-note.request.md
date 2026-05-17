# 從 Notes 生成 Practice 的實際提問範本

> 檔案位置：`prompts/requests/generate-practice-from-note.request.md`  
> 用途：存放實際向 AI 發問時，可以直接複製使用的提問內容。  
> 建議搭配：
>
> - `prompts/system/learning-coach.md`
> - `prompts/system/notes-practice-generator-rules.md`
> - `prompts/workflows/notes-to-practice.workflow.md`
> - `prompts/formats/practice-format.md`

---

## 一、使用方式

當你想從 `notes/` 生成 `practice/` 練習材料時，可以把以下任一提問範本貼給 AI。

建議使用順序：

1. 先提供 `learning-coach.md` 作為教學角色規則。
2. 再提供 `notes-practice-generator-rules.md` 作為題目生成規則。
3. 再提供 `notes-to-practice.workflow.md` 作為生成流程。
4. 再提供 `practice-format.md` 作為輸出格式。
5. 最後使用本檔案中的 request 提問範本。

---

## 二、最小提問範本

適合快速從一份 notes 產生練習題。

````markdown
請根據以下 notes 內容，生成對應的 practice 練習材料。

請遵守：

1. 主要根據 notes 內容生成，不要發散到無關主題。
2. 每題都要能對應到 notes 中的知識點。
3. 題目要按照 Lv1～Lv5 由淺入深排序。
4. 題型可以包含：
   - 概念理解題
   - 練習題
   - 實作任務
   - 改錯題
   - 重構題
5. 如果 notes 不足以支撐某種題型，請明確說明原因。
6. 預設請輸出：
   - 題目區
   - 提示區
   - 參考答案區
   - 評分標準區

## Notes 資訊

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}
- 預計輸出路徑：`practice/{chapter-slug}/{note-slug}-practice.md`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 三、完整提問範本

適合正式生成一份可放入 `practice/` 的完整練習材料。

````markdown
請你扮演「程式學習教練」，根據我提供的 HTML 正式筆記，生成 `practice/` 練習材料。

請套用以下規則：

- 教學角色：`prompts/system/learning-coach.md`
- 題目規則：`prompts/system/notes-practice-generator-rules.md`
- 工作流程：`prompts/workflows/notes-to-practice.workflow.md`
- 輸出格式：`prompts/formats/practice-format.md`

## 任務目標

請從以下 notes 生成能訓練理解、應用、實作、debug 與重構能力的練習材料。

生成結果要能幫助我：

1. 檢查自己是否真的理解 notes 的核心概念。
2. 練習把 HTML 知識轉成具體程式。
3. 透過錯誤程式碼訓練 debug。
4. 透過重構題理解可讀性與維護性。
5. 透過評分標準自行檢查學習成果。

## 生成範圍

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}
- 目標輸出路徑：`practice/{chapter-slug}/{note-slug}-practice.md`
- 預計題目數量：{請填入數量，例如 10 題；若不確定，請填「由 AI 判斷」}
- 難度範圍：Lv1～Lv5
- 答案策略：提供提示、參考答案與評分標準

## 題型偏好

請依 notes 內容合理安排以下題型：

1. 概念理解題
2. 練習題
3. 實作任務
4. 改錯題
5. 重構題

如果某題型缺乏 notes 支撐，請不要硬產生，並說明不足原因。

## 請先輸出題目規劃

請先整理：

| 編號 | 題型 | 難度 | 對應 notes 知識點 | 練習目標 |
|---|---|---|---|---|

確認規劃後，直接繼續輸出完整練習材料，不需要再問我。

## 輸出要求

請包含：

1. 基本資訊
2. Notes 摘要
3. 題目清單
4. 題目區
5. 提示區
6. 參考答案區
7. 評分標準區
8. 資訊不足與補充延伸

## 限制條件

請避免：

1. 生成與 notes 無關的題目。
2. 只複製筆記內容當題目。
3. 產生沒有明確驗收標準的程式題。
4. 產生沒有問題程式碼的改錯題。
5. 產生沒有重構前程式碼與重構目標的重構題。
6. 使用 notes 沒有鋪陳的大量進階技術。
7. 把補充延伸內容偽裝成 notes 原本內容。

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 四、不要給答案的提問範本

適合想先自行作答，不希望直接看到參考答案。

````markdown
請根據以下 notes 內容，生成 practice 練習材料，但不要提供參考答案。

請輸出：

1. 題目區
2. 提示區
3. 評分標準區

請不要輸出：

1. 參考答案
2. 完整解法
3. 可直接複製的最終程式碼

題目要求：

1. 每題都要對應 notes 知識點。
2. 題目按照 Lv1～Lv5 排序。
3. 程式題要有明確驗收標準。
4. 改錯題要提供有問題的程式碼。
5. 重構題要提供重構前程式碼與重構目標。

## Notes 資訊

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}
- 預計輸出路徑：`practice/{chapter-slug}/{note-slug}-practice.md`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 五、指定題型的提問範本

適合只針對某一種題型生成練習。

````markdown
請根據以下 notes 內容，只生成「{指定題型}」。

## 指定題型

{請填入：概念理解題 / 練習題 / 實作任務 / 改錯題 / 重構題}

## 題目要求

1. 題目數量：{請填入數量}
2. 難度範圍：{例如 Lv1～Lv3}
3. 每題都要對應 notes 知識點。
4. 題目要具體，不能只是複製筆記。
5. 請提供提示、參考答案與評分標準。

## 題型特殊要求

- 如果是改錯題，必須提供有問題的程式碼。
- 如果是重構題，必須提供重構前程式碼與重構目標。
- 如果是實作任務，必須提供功能需求、限制條件與驗收標準。

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

適合只針對 notes 中某個小概念生成練習。

````markdown
請根據以下 notes 中的指定知識點，生成一組小型 practice 練習。

## 指定知識點

{例如：label 與 input 的綁定關係}

## 練習要求

1. 只聚焦這個知識點，不要加入太多額外概念。
2. 題目數量：3～5 題。
3. 至少包含 1 題概念理解題。
4. 若 notes 內容足夠，請包含 1 題練習題或改錯題。
5. 請提供提示、參考答案與評分標準。

## 建議輸出路徑

`practice/{chapter-slug}/{concept-slug}-practice.md`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 七、生成改錯題與重構題的提問範本

適合專門訓練 debug 與程式碼品質。

````markdown
請根據以下 notes 內容，生成一組「改錯題與重構題」。

## 題目目標

請訓練以下能力：

1. 看懂錯誤程式碼。
2. 找出錯誤原因。
3. 修正錯誤並說明原因。
4. 判斷程式碼可讀性與維護性問題。
5. 在不改變外部行為的前提下重構程式碼。

## 題目要求

1. 改錯題至少 {number} 題。
2. 重構題至少 {number} 題。
3. 每題都要提供程式碼。
4. 每題都要對應 notes 知識點。
5. 每題都要包含提示、參考答案與評分標準。
6. 不要使用 notes 沒有鋪陳的大量進階技巧。

## Notes 資訊

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}
- 預計輸出路徑：`practice/{chapter-slug}/{note-slug}-debug-refactor-practice.md`

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 八、從整個章節生成 Practice 的提問範本

適合一次針對多份 notes 產生章節練習。

````markdown
請根據以下多份 notes，生成一份章節級 practice 練習材料。

## 章節資訊

- 章節名稱：{chapter-title}
- 章節 notes 路徑：`notes/{chapter-slug}/`
- 預計輸出路徑：`practice/{chapter-slug}/chapter-practice.md`
- 預計題目數量：{請填入數量；若不確定，請填「由 AI 判斷」}
- 難度範圍：Lv1～Lv5

## 生成要求

1. 先整理本章核心知識點。
2. 題目需涵蓋不同 notes 的重點。
3. 題目按照難度排序。
4. 避免多題重複測同一個概念。
5. 實作任務可以整合多份 notes 的知識。
6. 改錯題與重構題必須提供程式碼。
7. 請輸出題目區、提示區、參考答案區與評分標準區。

## Notes 內容

### Notes 1：`notes/{chapter-slug}/{note-file-1}.md`

```md
{貼上 notes 1 內容}
```

### Notes 2：`notes/{chapter-slug}/{note-file-2}.md`

```md
{貼上 notes 2 內容}
```

### Notes 3：`notes/{chapter-slug}/{note-file-3}.md`

```md
{貼上 notes 3 內容}
```
````
