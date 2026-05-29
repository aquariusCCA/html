# prompts/

`prompts/` 目錄用來管理本 HTML 知識包中的 AI 提示詞資源。

它不是正式筆記，也不是原始資料，而是用來規範 AI 如何協助產生、整理、改寫、練習與複習內容的協作規則。

## 目錄定位

`prompts/` 的核心用途是讓 AI 協作流程可以被重複使用、穩定控制與持續優化。

它主要負責管理：

* AI 角色設定
* 教學風格規則
* 任務處理流程
* 固定輸出格式
* 實際提問範例
* 任務上下文與輸入欄位
* 生成結果的品質要求

簡單來說：

```text
origin/   = 原始資料
notes/    = 主幹知識
其他目錄   = 根據 notes/ 產生的學習材料
prompts/  = 控制 AI 如何產生、整理、改寫這些內容的提示詞規則
```

`prompts/` 不直接保存正式學習內容，而是保存「如何讓 AI 穩定產生內容」的規則。

## 目錄結構

```text
prompts/
  system/
  workflows/
  formats/
  requests/
```

## 子目錄說明

| 目錄 | 作用 | 用途 |
|---|---|---|
| `system/` | 系統規則提示詞 | 存放穩定的 AI 角色設定與總體規則，例如語言、教學風格、輸出原則、品質標準。 |
| `workflows/` | 工作流程提示詞 | 存放一套可重複執行的任務流程，例如從 `origin/` 生成 `notes/`，或從 `notes/` 生成練習題、複習材料。 |
| `formats/` | 輸出格式提示詞 | 存放固定輸出結構，例如教學型筆記格式、練習題格式、複習卡格式、API 表格格式。 |
| `requests/` | 實際提問範例 | 存放實際向 AI 發問時可直接使用或參考的提問內容，例如針對某章節、某份原始資料、某個任務的具體問題。 |

## 四類提示詞的責任邊界

這四個子目錄不是彼此獨立使用，而是可以組合成一套完整的 AI 協作流程。

```text
system/
  ↓ 提供角色、規則、教學風格

workflows/
  ↓ 定義任務步驟與處理流程

formats/
  ↓ 約束輸出結構與內容格式

requests/
  ↓ 放入具體任務與實際提問
```

更重要的是，四種類型的 Prompt 應該有清楚的責任邊界。

| 類型 | 負責內容 | 不應該負責 |
|---|---|---|
| `system/` | AI 要扮演什麼角色、遵守什麼總體規則 | 不放具體章節任務 |
| `workflows/` | 任務要怎麼一步一步處理 | 不固定最後輸出的完整版型 |
| `formats/` | 最後輸出應該長什麼樣子 | 不描述完整任務流程 |
| `requests/` | 實際要問 AI 的具體問題 | 不長期保存所有規則 |

例如要把 `origin/` 的原始資料整理成 `notes/` 的教學筆記，可以這樣組合：

```text
system/teaching-engineer.md
+ workflows/origin-to-notes.md
+ formats/teaching-note-format.md
+ requests/generate-html-note.md
```

這種拆分方式可以讓每一份 Prompt 都保持單一責任，避免把角色、流程、格式與具體問題混在同一份文件中。

## 使用場景

### 1. 生成正式筆記

當需要根據 `origin/` 產生 `notes/` 時，建議使用：

```text
system/
workflows/
formats/
requests/
```

目標是讓 AI 依照固定教學風格，把原始資料整理成高品質教學筆記。

範例組合：

```text
system/teaching-engineer.md
workflows/origin-to-notes.md
formats/teaching-note-format.md
requests/generate-html-note.md
```

### 2. 生成練習題

當需要根據 `notes/` 產生 `practice/` 時，建議使用：

```text
system/
workflows/
formats/
requests/
```

目標是讓 AI 根據正式筆記設計選擇題、問答題、實作題、改錯題或重構題。

範例組合：

```text
system/teaching-engineer.md
workflows/notes-to-practice.md
formats/practice-format.md
requests/generate-html-practice.md
```

### 3. 生成複習材料

當需要根據 `notes/` 產生 `review/` 時，建議使用：

```text
system/
workflows/
formats/
requests/
```

目標是讓 AI 把正式筆記轉換成重點摘要、問答題、填空題或複習卡。

範例組合：

```text
system/teaching-engineer.md
workflows/notes-to-review.md
formats/review-card-format.md
requests/generate-html-review.md
```

### 4. 統一輸出格式

當希望不同章節、不同主題的輸出風格一致時，主要使用：

```text
formats/
```

目標是讓筆記、表格、練習題、複習卡具有一致的結構與閱讀體驗。

## Prompt 文件格式建議

不同類型的 Prompt 文件，不應強制使用同一份結構。

`system/`、`workflows/`、`formats/`、`requests/` 的定位不同，因此文件格式也應該不同。

建議採用：

```text
共通欄位
+
類型專用欄位
```

這樣可以避免把角色設定、任務流程、輸出格式與實際提問硬套在同一種模板中。

## 共通欄位

每一份 Prompt 文件都建議保留以下基礎欄位：

```md
# 提示詞名稱

## 用途

說明這份 Prompt 的主要用途。

## 適用場景

說明什麼情況下應該使用這份 Prompt。

## 不適用場景

說明什麼情況下不應該使用這份 Prompt。

## 使用方式

說明這份 Prompt 應該如何單獨使用，或如何搭配其他 Prompt 使用。
```

共通欄位只負責讓文件容易理解與維護，不應該把所有規則都塞進共通欄位中。

## `system/` 文件建議格式

`system/` 主要負責 AI 角色、總體規則與教學風格。

適合放在 `system/` 的內容：

* AI 角色
* 語氣風格
* 教學原則
* 回答原則
* 品質標準
* 禁止事項

不適合放在 `system/` 的內容：

* 某一章節的具體任務
* 某一次提問的原始資料
* 某一種輸出的完整格式細節
* 過於短期的一次性需求

建議格式：

```md
# teaching-engineer

## 用途

定義 AI 在 HTML 知識包中的教學角色、回答風格與品質標準。

## 適用場景

當需要 AI 協助生成、整理、改寫或補充 HTML 教學內容時使用。

## 不適用場景

不適合用來描述單次任務、固定輸出格式或具體章節資料。

## AI 角色

你是一位資深前端教學型工程師。

## 教學風格

- 先建立觀念，再補充範例
- 說明要清楚、循序漸進
- 避免只有結論，應說明原因
- 避免過度簡化導致觀念不完整

## 回答原則

- 不憑空補充未提供的原始資料
- 重要觀念要用範例輔助
- 輸出內容要適合整理成正式筆記
- 對初學者容易混淆的地方要主動補充說明

## 品質要求

- 結構清楚
- 概念準確
- 適合學習
- 可維護、可延伸
```

## `workflows/` 文件建議格式

`workflows/` 主要負責任務處理流程。

它描述的是「AI 應該怎麼做」，而不是「最後輸出長什麼樣子」。

適合放在 `workflows/` 的內容：

* 任務目標
* 輸入資料
* 處理步驟
* 檢查步驟
* 流程限制
* 與其他 Prompt 的搭配方式

不適合放在 `workflows/` 的內容：

* AI 長期角色設定
* 完整輸出版型
* 單次任務的具體原文
* 實際可直接送出的完整提問

建議格式：

````md
# origin-to-notes

## 用途

定義如何將 `origin/` 的原始資料整理成 `notes/` 的正式教學筆記。

## 適用場景

當需要根據原始資料產生正式筆記時使用。

## 不適用場景

不適合用來規定筆記的完整版型，也不適合存放單次任務的完整提問。

## 輸入資料

使用時需要提供：

- 原始資料內容
- 章節主題
- 目標讀者程度
- 是否需要補充範例
- 是否需要保留原文重點

## 處理流程

1. 先閱讀並理解原始資料
2. 判斷資料中的核心觀念
3. 整理出適合學習的章節脈絡
4. 補充必要的觀念說明
5. 加入簡單範例或對照說明
6. 檢查內容是否適合作為正式筆記
7. 標示原始資料不足或需要後續補充的地方

## 流程規則

- 不要直接複製原始資料
- 不要跳過概念脈絡
- 不要產生與主題無關的內容
- 若原始資料不足，應明確標示需要補充的地方

## 建議搭配

```text
system/teaching-engineer.md
formats/teaching-note-format.md
requests/generate-html-note.md
```
````

## `formats/` 文件建議格式

`formats/` 主要負責輸出結構。

它描述的是「最後產物應該長什麼樣子」，而不是「AI 應該如何推理或處理任務」。

適合放在 `formats/` 的內容：

* 標題層級
* 區塊順序
* 表格欄位
* 程式碼呈現規則
* 題目格式
* 卡片格式
* 輸出限制

不適合放在 `formats/` 的內容：

* AI 角色設定
* 任務處理流程
* 單次任務資料
* 大量背景說明

建議格式：

````md
# teaching-note-format

## 用途

定義正式教學筆記的輸出結構。

## 適用場景

當需要產生 `notes/` 中的教學型筆記時使用。

## 不適用場景

不適合用來定義 AI 角色，也不適合描述完整任務流程。

## 輸出結構

```md
# 主題名稱

## 1. 學習目標

說明本章學完後應該理解什麼。

## 2. 核心概念

用簡單語言解釋主要觀念。

## 3. 為什麼需要這個觀念

說明這個觀念解決什麼問題。

## 4. 基本語法或結構

整理必要語法、規則或結構。

## 5. 範例說明

提供簡單範例，並解釋範例重點。

## 6. 常見錯誤

整理初學者容易犯的錯。

## 7. 重點整理

用條列方式總結本章重點。
```

## 格式規則

- 標題層級不可混亂
- 不要輸出閒聊文字
- 程式碼區塊需標明語言
- 表格只在有助於比較時使用
- 若某區塊沒有內容，可以省略，但不可影響整體理解
````

## `requests/` 文件建議格式

`requests/` 主要負責實際提問。

它可以組合 `system/`、`workflows/`、`formats/` 的內容，形成一份可直接送給 AI 的完整任務。

適合放在 `requests/` 的內容：

* 實際提問文字
* 任務背景
* 輸入欄位
* 可替換變數
* 建議搭配的 Prompt
* 使用範例

不適合放在 `requests/` 的內容：

* 所有長期規則
* 所有輸出格式細節
* 與單次任務無關的教學規則
* 大量正式筆記內容

建議格式：

````md
# generate-html-note

## 用途

提供一份可直接使用的提問範例，用來請 AI 根據原始資料產生 HTML 教學筆記。

## 適用場景

當需要把某份 `origin/` 原始資料整理成 `notes/` 正式筆記時使用。

## 不適用場景

不適合用來保存長期角色規則，也不適合單獨定義完整輸出格式。

## 建議搭配

```text
system/teaching-engineer.md
workflows/origin-to-notes.md
formats/teaching-note-format.md
```

## 使用前準備

請先準備：

- 原始資料內容
- 目標章節名稱
- 預期讀者程度
- 是否需要補充範例
- 是否需要保留特定段落或術語

## 變數

| 變數 | 說明 |
|---|---|
| `{{chapter_title}}` | 章節名稱 |
| `{{origin_content}}` | 原始資料內容 |
| `{{target_reader}}` | 目標讀者程度 |
| `{{extra_requirements}}` | 額外要求 |

## Prompt

請根據以下原始資料，整理成一份高品質 HTML 教學筆記。

請遵守以下要求：

1. 先理解原始資料，不要直接複製
2. 按照教學型筆記格式輸出
3. 補充必要的觀念說明
4. 加入適合初學者理解的範例
5. 不要加入與主題無關的內容
6. 若原始資料不足，請標示需要補充的地方

章節名稱：

```text
{{chapter_title}}
```

目標讀者：

```text
{{target_reader}}
```

原始資料：

```md
{{origin_content}}
```

額外要求：

```text
{{extra_requirements}}
```
````

## 命名建議

提示詞檔案應使用清楚、可讀、可搜尋的命名方式。

建議使用小寫英文與連字號：

```text
teaching-engineer.md
origin-to-notes.md
notes-to-practice.md
notes-to-review.md
teaching-note-format.md
practice-format.md
review-card-format.md
generate-html-note.md
generate-html-practice.md
generate-html-review.md
```

避免使用過於模糊的名稱：

```text
prompt1.md
test.md
new.md
note.md
ai.md
```

命名時可以依照以下模式：

```text
角色或規則：teaching-engineer.md
任務流程：origin-to-notes.md
輸出格式：teaching-note-format.md
實際提問：generate-html-note.md
```

## 維護原則

### 1. 穩定規則放在 `system/`

只要是長期不容易改變的 AI 角色、語氣、教學風格、輸出原則，都應放在 `system/`。

### 2. 任務流程放在 `workflows/`

只要是有明確步驟的任務，例如「從原始資料生成筆記」、「從筆記生成練習題」、「從筆記生成複習卡」，都應放在 `workflows/`。

### 3. 輸出結構放在 `formats/`

只要是固定的輸出版型，例如筆記格式、表格格式、題目格式、卡片格式，都應放在 `formats/`。

### 4. 具體提問放在 `requests/`

只要是實際可以拿去問 AI 的完整問題，都應放在 `requests/`。

### 5. 不要把所有內容混在同一份 Prompt

應盡量拆分為：

```text
角色規則
任務流程
輸出格式
實際提問
```

這樣可以提高重複使用性，也方便之後替換其中一部分。

### 6. 不要讓 Prompt 取代正式筆記

`prompts/` 只保存 AI 協作規則，不保存正式知識內容。

正式知識內容應放在：

```text
notes/
```

衍生學習材料應放在：

```text
appendix/
demos/
practice/
review/
supplements/
```

### 7. 優先維持單一責任

每一份 Prompt 應該盡量只負責一件事情。

如果一份 Prompt 同時包含角色、流程、格式、具體資料與完整提問，通常代表它應該被拆分。

## 常見錯誤

### 1. 把 `system/` 寫成單次任務

不建議：

```text
請幫我整理第 3 章 HTML 表單筆記。
```

這是具體任務，應該放在 `requests/`。

### 2. 把 `workflows/` 寫成完整輸出格式

不建議在 `workflows/` 中規定完整標題結構。

`workflows/` 應該描述處理步驟，完整輸出結構應放在 `formats/`。

### 3. 把 `formats/` 寫成任務流程

不建議：

```text
先閱讀原始資料，再分析重點，最後產生筆記。
```

這是流程，應該放在 `workflows/`。

### 4. 把 `requests/` 寫得過度龐大

`requests/` 可以是完整提問，但不應該把所有長期規則都複製進來。

如果某些規則會重複使用，應拆到 `system/`、`workflows/` 或 `formats/`。

## 與其他目錄的關係

```text
origin/
  ↓ 使用 prompts/ 的生成流程
notes/
  ↓ 使用 prompts/ 的轉換流程
appendix/
demos/
practice/
review/
supplements/
```

`prompts/` 不直接存放學習內容本身，而是存放產生與整理學習內容時所需的 AI 協作規則。

因此：

* `origin/` 負責保存原始資料
* `notes/` 負責保存正式筆記
* `appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 負責保存衍生學習材料
* `prompts/` 負責保存 AI 生成、改寫與轉換這些內容時使用的提示詞規則

## 核心原則

* `prompts/` 是 AI 協作規則的管理區
* `system/` 管理穩定角色與總體規則
* `workflows/` 管理任務流程
* `formats/` 管理輸出格式
* `requests/` 管理實際提問範例
* 不同類型的 Prompt 不應強制套用同一種文件格式
* 提示詞應該可重複使用、可組合、可維護
* 提示詞不應取代正式筆記，正式知識內容應存放在 `notes/`
