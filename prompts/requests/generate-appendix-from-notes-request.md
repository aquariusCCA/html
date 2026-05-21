# 從 Notes 生成 Appendix 的實際提問範本

> 檔案位置：`prompts/requests/generate-appendix-from-notes-request.md`
>
> 用途：存放實際向 AI 發問時，可以直接複製使用的提問內容。
>
> 建議搭配：
>
> - `prompts/system/base-role.md`
> - `prompts/system/appendix-generator.md`
> - `prompts/workflows/notes-to-appendix-workflow.md`
> - `prompts/formats/appendix-format.md`

---

## 一、使用方式

當你想從 `notes/` 生成 `appendix/` 查表型資料時，可以把以下任一提問範本貼給 AI。

建議使用順序：

1. 先提供 `base-role.md` 作為 Knowledge Pack 基本規則。
2. 再提供 `appendix-generator.md` 作為附錄資料生成規則。
3. 再提供 `notes-to-appendix-workflow.md` 作為生成流程。
4. 再提供 `appendix-format.md` 作為輸出格式。
5. 最後使用本檔案中的 request 提問範本。

預設輸出路徑建議：

```text
appendix/{chapter-slug}/{topic-slug}-appendix.md
```

若一章只有一份附錄，也可以使用：

```text
appendix/{chapter-slug}-appendix.md
```

---

## 二、最小提問範本

適合快速從一份 `notes` 產生查表型附錄資料。

````markdown
請根據以下 notes 內容，生成對應的 appendix 查表型附錄資料。

請遵守：

1. 只能根據 notes 內容生成，不要加入 notes 沒有提到的外部知識。
2. 輸出語言使用繁體中文。
3. 內容要適合查找、對照、速查與複用，不要重新寫成完整教學筆記。
4. 優先使用表格、索引與最小可用範例。
5. 請依照 `prompts/formats/appendix-format.md` 的格式輸出。
6. 正文只輸出 notes 可支撐、且與章節主題直接相關的區塊，不要硬補。
7. 若需要補充推論，必須明確標示為「補充理解」或「延伸提醒」。
8. 如果某個區塊不適用，請集中列在「未生成區塊」，不要保留完整空標題與空表格。

## Notes 資訊

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}
- 目標輸出路徑：`appendix/{chapter-slug}/{topic-slug}-appendix.md`
- 條目粒度：主題級

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 三、完整提問範本

適合正式生成一份可放入 `appendix/` 的完整查表資料。

````markdown
請你扮演「查表型附錄資料生成助手」，根據我提供的正式筆記，生成 `appendix/` 附錄查表資料。

請套用以下規則：

- 基本規則：`prompts/system/base-role.md`
- 系統規則：`prompts/system/appendix-generator.md`
- 工作流程：`prompts/workflows/notes-to-appendix-workflow.md`
- 輸出格式：`prompts/formats/appendix-format.md`

## 任務目標

請從以下 notes 生成適合查找、對照、速查與複用的附錄資料。

生成結果要能幫助我：

1. 快速查找本章提到的名詞、元素、屬性、API、指令或設定。
2. 快速比較相似概念或相似使用情境。
3. 找到最小可用範例。
4. 根據來源索引回到 notes 深入閱讀。
5. 長期維護本章的參考資料。

## 生成範圍

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}
- 目標輸出路徑：`appendix/{chapter-slug}/{topic-slug}-appendix.md`
- 條目粒度：主題級完整附錄
- 生成完整度：主題裁切式完整附錄，只輸出 notes 可支撐的區塊
- 指定附錄類型：依 notes 內容自動判斷
- 範例策略：只保留最小可用範例
- 來源索引需求：需要

## Appendix 區塊規劃

請先在內部整理：

| 附錄區塊 | 對應 notes 知識點 | 產出形式 | 是否有足夠來源 |
|---|---|---|---|

規劃只作為生成判斷，不要輸出 `Appendix 規劃` 表。請直接輸出正式 appendix 內容。

## 輸出要求

請依 notes 內容適合程度生成有來源支撐的區塊，不需要硬產生全部類型。

固定保留：

- 附錄定位
- 附錄索引
- 來源索引
- 維護備註

依內容選用：

- 未生成區塊
- 名詞表
- HTML 元素表
- 屬性表
- API / 方法表
- 指令表
- 設定檔範例
- 常用片段
- 錯誤速查表
- 相似概念對照表

HTML appendix 請特別注意：

1. `HTML 元素表` 只在章節主題是元素、語意結構、文件骨架或標籤關係時完整生成。
2. 若元素只是範例載體，不要擴寫成完整元素表。
3. `API / 方法表` 只在 notes 明確教 API、方法或事件時生成。
4. 範例中的輔助 JavaScript 不要自動抽成 API 表。

## 限制條件

請避免：

1. 生成與 notes 無關的知識點。
2. 把 notes 重新改寫成另一份完整教學筆記。
3. 大段複製 notes 原文而沒有轉換成查表形式。
4. 加入 notes 沒有提到的進階觀念、語法、API、屬性、指令或設定。
5. 產生無法從 notes 找到依據的條目。
6. 把補充推論偽裝成 notes 原本內容。
7. 用長段落取代表格與索引。
8. 輸出與附錄資料無關的閒聊內容。

## 資訊不足處理

如果 notes 不足以支撐某個區塊，請依情況使用以下寫法：

- `原筆記資訊不足，暫不生成此區塊。`
- `此 notes 內容不足以生成「{附錄類型}」，原因：{不足原因}`
- `notes 路徑未提供，來源索引只能標示章節或小節名稱。`

不適用區塊請集中列在「未生成區塊」，不要在正文保留完整空標題與空表格。

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 四、指定附錄類型的提問範本

適合只想生成某一類附錄，例如名詞表、HTML 元素表、屬性表、錯誤速查表。

````markdown
請根據以下 notes 內容，只生成指定的 appendix 附錄區塊。

## 指定區塊

{請填入一個或多個區塊，例如：名詞表 / HTML 元素表 / 屬性表 / API 表 / 指令表 / 設定檔範例 / 常用片段 / 錯誤速查表 / 相似概念對照表}

## 生成要求

1. 只根據 notes 內容生成。
2. 不要輸出未指定的區塊。
3. 內容要偏向查表、速查與對照，不要重新教學。
4. 如果指定區塊缺乏 notes 支撐，請標示「原筆記資訊不足」。
5. 每個條目都要能對應到 notes 中的知識點。
6. 請保留來源欄位或來源索引。
7. 若指定區塊不適合本章主題，請說明原因，不要硬生成。
8. 若指定 `HTML 元素表` 但元素只是範例載體，請改為說明不適合生成完整元素表；必要時只輸出「範例載體索引」。
9. 若指定 `API / 方法表` 但 notes 沒有明確教 API、方法或事件，請標示資訊不足，不要把範例中的輔助 JavaScript 擴寫成 API 表。

## Notes 資訊

- notes 路徑：`notes/{chapter}/{note-file}.md`
- 章節名稱：{chapter-title}
- 條目粒度：指定區塊

## Notes 內容

```md
{貼上 notes 內容}
```
````

---

## 五、章節級附錄提問範本

適合把同一章多份 `notes` 合併成一份章節級附錄。

````markdown
請根據以下多份 notes，生成一份章節級 `appendix/` 查表型附錄資料。

## 生成要求

1. 請整合同一章內重複或相近的條目。
2. 同一名詞、元素、屬性或 API 不要重複列出。
3. 如果不同 notes 對同一條目提供不同資訊，請合併並在來源欄列出多個來源。
4. 只根據我提供的 notes 生成。
5. 輸出繁體中文。
6. 請依照 `prompts/formats/appendix-format.md` 的格式輸出。
7. 正文只輸出有 notes 支撐、且與章節主題直接相關的區塊。
8. 不適用的區塊請集中列在「未生成區塊」，不要保留完整空標題與空表格。
9. 不要輸出 `Appendix 規劃` 表，除非我另外要求。

## 章節資訊

- 章節名稱：{chapter-title}
- 目標輸出路徑：`appendix/{chapter-slug}/{chapter-slug}-appendix.md`
- 條目粒度：章節級

## Notes 內容

### Notes 1

- notes 路徑：`notes/{chapter}/{note-file-1}.md`

```md
{貼上 notes 1 內容}
```

### Notes 2

- notes 路徑：`notes/{chapter}/{note-file-2}.md`

```md
{貼上 notes 2 內容}
```

### Notes 3

- notes 路徑：`notes/{chapter}/{note-file-3}.md`

```md
{貼上 notes 3 內容}
```
````

---

## 六、只生成來源索引的提問範本

適合已經有附錄內容，只想補上或重建來源索引。

````markdown
請根據以下 appendix 內容與 notes 內容，補上或重建來源索引。

## 生成要求

1. 不要重寫 appendix 主內容。
2. 只輸出「來源索引」區塊。
3. 來源索引需標示附錄區塊、notes 路徑、對應章節或小節、備註。
4. 若某條目找不到來源，請標示「來源待確認」。
5. 不要為找不到來源的條目捏造來源。

## 生成範圍

- 條目粒度：來源索引重建
- 來源索引需求：補上或重建

## Appendix 內容

```md
{貼上目前 appendix 內容}
```

## Notes 內容

```md
{貼上 notes 內容}
```
````
