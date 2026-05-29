# prompts/

`prompts/` 目錄用來管理本 HTML 知識包中的 AI 提示詞資源。

它不是正式筆記，也不是原始資料，而是用來規範 AI 如何協助產生、整理、改寫、練習、複習與檢查內容的協作規則。

簡單來說：

```text
origin/   = 原始資料
notes/    = 主幹知識
其他目錄   = 根據 notes/ 產生的學習材料
prompts/  = 控制 AI 如何產生、整理、改寫、檢查這些內容的提示詞規則
```

`prompts/` 不直接保存正式學習內容，而是保存「如何讓 AI 穩定產生內容」的規則、模板、範例與品質標準。

---

## 目錄定位

`prompts/` 的核心用途是讓 AI 協作流程可以被重複使用、穩定控制與持續優化。

它主要負責管理：

* AI 的核心規則
* 任務處理流程
* 固定輸出格式
* 可模仿的範例
* 品質檢查標準
* 實際提問模板

Prompt 可以理解成：

```text
核心規則
+ 任務流程
+ 輸出格式
+ 範例
+ 評估標準
+ 實際提問
```

因此，本目錄不是依照單一 Prompt 的七個元素逐一拆分，而是依照「管理與使用 Prompt 的生命週期」來設計。

---

## 目錄結構

```text
prompts/
  core/
  workflows/
  formats/
  examples/
  criteria/
  requests/
```

---

## 子目錄說明

| 目錄           | 作用   | 用途                                                             |
| ------------ | ---- | -------------------------------------------------------------- |
| `core/`      | 核心規則 | 存放長期穩定的 AI 使用規則，例如教學原則、回答風格、品質要求、限制條件。                         |
| `workflows/` | 任務流程 | 存放可重複執行的任務步驟，例如從 `origin/` 生成 `notes/`，或從 `notes/` 生成練習題、複習材料。 |
| `formats/`   | 輸出格式 | 存放固定輸出結構，例如教學筆記格式、練習題格式、複習卡格式、程式碼範例格式。                         |
| `examples/`  | 輸出範例 | 存放 Few-shot 範例，讓 AI 模仿固定的語氣、結構、分析方式與輸出品質。                      |
| `criteria/`  | 評估標準 | 存放品質檢查清單、驗收標準、內容評分規則，用來判斷 AI 產出的內容是否合格。                        |
| `requests/`  | 實際提問 | 存放可以直接拿去問 AI 的完整 Prompt，通常會組合前面幾類提示詞。                          |

---

## 六類提示詞的責任邊界

這六個子目錄不是彼此獨立使用，而是可以組合成一套完整的 AI 協作流程。

```text
core/
  ↓ 提供核心規則與穩定限制

workflows/
  ↓ 定義任務處理步驟

formats/
  ↓ 約束最後輸出結構

examples/
  ↓ 提供可模仿的範例

criteria/
  ↓ 定義品質檢查標準

requests/
  ↓ 組合成實際可使用的提問
```

更重要的是，每一類 Prompt 應該有清楚的責任邊界。

| 類型           | 負責內容                   | 不應該負責       |
| ------------ | ---------------------- | ----------- |
| `core/`      | AI 長期規則、教學原則、回答原則、品質要求 | 不放單次任務內容    |
| `workflows/` | 任務要怎麼一步一步處理            | 不固定完整輸出版型   |
| `formats/`   | 最後輸出應該長什麼樣子            | 不描述完整任務流程   |
| `examples/`  | 提供 AI 可模仿的輸出範例         | 不存放所有長期規則   |
| `criteria/`  | 判斷輸出是否合格的檢查標準          | 不存放正式筆記內容   |
| `requests/`  | 實際要問 AI 的完整問題          | 不長期保存所有規則細節 |

---

## 與 Prompt 七個元素的關係

Prompt 常見的七個元素是：

```text
角色 + 任務 + 上下文 + 限制條件 + 輸出格式 + 範例 + 評估標準
```

而本目錄結構的對應關係如下：

| Prompt 元素        | 建議放置位置                                         |
| ---------------- | ---------------------------------------------- |
| 角色 Role          | `core/` 或 `requests/`                          |
| 任務 Task          | `workflows/` 或 `requests/`                     |
| 上下文 Context      | `requests/`，必要時可獨立寫在 `core/`                   |
| 限制條件 Constraints | 通用限制放 `core/`，任務限制放 `workflows/` 或 `requests/` |
| 輸出格式 Format      | `formats/`                                     |
| 範例 Examples      | `examples/`                                    |
| 評估標準 Criteria    | `criteria/`                                    |

因此：

```text
七個元素 = 單一 Prompt 的內容骨架
六個目錄 = 管理 Prompt 資源的資料夾架構
```

兩者不是一對一的關係，而是互相配合。

---

## 使用場景

### 1. 生成正式筆記

當需要根據 `origin/` 產生 `notes/` 時，建議使用：

```text
core/
workflows/
formats/
examples/
criteria/
requests/
```

範例組合：

```text
core/teaching-principles.md
workflows/origin-to-notes.md
formats/teaching-note-format.md
examples/teaching-note-example.md
criteria/note-quality-checklist.md
requests/generate-note.md
```

目標是讓 AI 依照固定教學風格，把原始資料整理成高品質教學筆記。

---

### 2. 生成補充資料

當需要根據 `notes/` 產生 `supplements/` 或 `appendix/` 時，建議使用：

```text
core/teaching-principles.md
workflows/notes-to-supplement.md
formats/supplement-format.md
examples/supplement-example.md
criteria/supplement-quality-checklist.md
requests/generate-supplement.md
```

目標是補充正式筆記中沒有展開，但有助於理解的背景知識、延伸說明、比較表或常見問題。

---

### 3. 生成練習題

當需要根據 `notes/` 產生 `practice/` 時，建議使用：

```text
core/teaching-principles.md
workflows/notes-to-practice.md
formats/practice-format.md
examples/practice-example.md
criteria/practice-quality-checklist.md
requests/generate-practice.md
```

目標是讓 AI 根據正式筆記設計選擇題、問答題、實作題、改錯題或重構題。

---

### 4. 生成複習材料

當需要根據 `notes/` 產生 `review/` 時，建議使用：

```text
core/teaching-principles.md
workflows/notes-to-review.md
formats/review-format.md
examples/review-example.md
criteria/review-quality-checklist.md
requests/generate-review.md
```

目標是把正式筆記轉換成重點摘要、問答題、填空題、複習卡或檢查清單。

---

### 5. 生成範例程式碼

當需要根據 `notes/` 產生 `demos/` 時，建議使用：

```text
core/code-teaching-principles.md
workflows/notes-to-demo.md
formats/demo-format.md
examples/demo-example.md
criteria/demo-quality-checklist.md
requests/generate-demo.md
```

目標是讓 AI 根據正式筆記產生可閱讀、可執行、可學習的範例程式碼。

---

## Prompt 文件格式建議

不同類型的 Prompt 文件，不應強制使用同一份結構。

`core/`、`workflows/`、`formats/`、`examples/`、`criteria/`、`requests/` 的定位不同，因此文件格式也應該不同。

建議採用：

```text
共通欄位
+
類型專用欄位
```

---

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

---

## `core/` 文件建議格式

`core/` 主要負責長期穩定的 AI 使用規則。

適合放在 `core/` 的內容：

* AI 角色定位
* 教學原則
* 回答風格
* 通用限制
* 品質要求
* 禁止事項

不適合放在 `core/` 的內容：

* 某一章節的具體任務
* 某一次提問的原始資料
* 某一種輸出的完整格式細節
* 過於短期的一次性需求

範例：

```md
# teaching-principles

## 用途

定義 AI 在本知識包中的教學原則、回答風格與基本品質要求。

## 適用場景

當需要 AI 協助生成、整理、改寫或補充教學內容時使用。

## 不適用場景

不適合用來描述單次任務、固定輸出格式或具體章節資料。

## 教學原則

- 先建立觀念，再補充範例
- 說明要清楚、循序漸進
- 避免只有結論，應說明原因
- 對初學者容易混淆的地方要主動補充說明

## 回答原則

- 不憑空補充未提供的原始資料
- 重要觀念要用範例輔助
- 輸出內容要適合整理成正式筆記
- 若資料不足，應明確標示需要補充的地方

## 品質要求

- 結構清楚
- 概念準確
- 適合學習
- 可維護、可延伸
```

---

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

範例：

```md
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

1. 閱讀並理解原始資料
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
- 若原始資料不足，應明確標示
```

---

## `formats/` 文件建議格式

`formats/` 主要負責輸出結構。

它描述的是「最後產物應該長什麼樣子」，而不是「AI 應該如何處理任務」。

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

範例：

````md
# teaching-note-format

## 用途

定義正式教學筆記的輸出結構。

## 適用場景

當需要產生 `notes/` 中的教學型筆記時使用。

## 不適用場景

不適合用來定義 AI 角色，也不適合描述完整任務流程。

## 輸出結構

\```md
# 主題名稱

## 1. 學習目標

## 2. 核心概念

## 3. 為什麼需要這個觀念

## 4. 基本語法或結構

## 5. 範例說明

## 6. 常見錯誤

## 7. 重點整理
\```

## 格式規則

- 標題層級不可混亂
- 不要輸出閒聊文字
- 程式碼區塊需標明語言
- 表格只在有助於比較時使用
````

---

## `examples/` 文件建議格式

`examples/` 主要負責提供可模仿的範例。

它的用途不是保存正式筆記，而是讓 AI 參考既有範例，穩定產生相似品質、相似結構、相似語氣的內容。

適合放在 `examples/` 的內容：

* 高品質輸出範例
* Few-shot 範例
* 好的問答範例
* 好的程式碼講解範例
* 好的練習題範例
* 好的複習卡範例

不適合放在 `examples/` 的內容：

* 大量正式筆記
* 原始資料
* 完整任務流程
* 所有長期規則

範例：

```md
# teaching-note-example

## 用途

提供教學筆記的輸出範例，讓 AI 模仿其結構、語氣與說明方式。

## 適用場景

當需要生成新的教學筆記，且希望輸出風格一致時使用。

## 範例主題

HTML 表單的基本結構

## 範例內容

# HTML 表單的基本結構

## 1. 學習目標

學完本章後，應該能理解表單的基本用途，以及常見表單元素的角色。

## 2. 核心概念

HTML 表單用來收集使用者輸入的資料，例如帳號、密碼、搜尋關鍵字、留言內容等。

## 3. 為什麼需要這個觀念

網頁不只是展示內容，很多時候也需要讓使用者輸入資料。表單就是使用者與網站互動的重要入口。
```

---

## `criteria/` 文件建議格式

`criteria/` 主要負責定義品質檢查標準。

它的用途是讓 AI 產生內容後，可以根據標準自我檢查，也方便人工檢查內容是否合格。

適合放在 `criteria/` 的內容：

* 品質檢查清單
* 驗收標準
* 評分規則
* 常見錯誤檢查
* 是否符合學習目標的判斷標準

不適合放在 `criteria/` 的內容：

* 具體章節筆記
* 單次任務資料
* 完整輸出格式
* 大量範例內容

範例：

```md
# note-quality-checklist

## 用途

檢查教學筆記是否適合作為正式學習內容。

## 適用場景

當 AI 產生 `notes/` 內容後，用來檢查品質。

## 檢查項目

### 1. 結構檢查

- 是否有清楚標題
- 是否有合理段落
- 是否由淺入深
- 是否避免段落過長

### 2. 概念檢查

- 是否說明核心概念
- 是否說明為什麼需要這個概念
- 是否避免只列語法、不講用途
- 是否補充初學者容易混淆的地方

### 3. 範例檢查

- 是否有適合的範例
- 範例是否能對應概念
- 程式碼是否容易閱讀
- 程式碼是否有必要說明

### 4. 品質檢查

- 是否有不必要的閒聊文字
- 是否有明顯錯誤
- 是否有過度延伸
- 是否適合放入正式筆記
```

---

## `requests/` 文件建議格式

`requests/` 主要負責實際提問。

它可以組合 `core/`、`workflows/`、`formats/`、`examples/`、`criteria/` 的內容，形成一份可直接送給 AI 的完整任務。

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

範例：

````md
# generate-note

## 用途

提供一份可直接使用的提問範例，用來請 AI 根據原始資料產生教學筆記。

## 適用場景

當需要把某份 `origin/` 原始資料整理成 `notes/` 正式筆記時使用。

## 不適用場景

不適合用來保存長期角色規則，也不適合單獨定義完整輸出格式。

## 建議搭配

```text
core/teaching-principles.md
workflows/origin-to-notes.md
formats/teaching-note-format.md
examples/teaching-note-example.md
criteria/note-quality-checklist.md
````

## 使用前準備

請先準備：

* 原始資料內容
* 目標章節名稱
* 預期讀者程度
* 是否需要補充範例
* 是否需要保留特定段落或術語

## 變數

| 變數                       | 說明     |
| ------------------------ | ------ |
| `{{chapter_title}}`      | 章節名稱   |
| `{{origin_content}}`     | 原始資料內容 |
| `{{target_reader}}`      | 目標讀者程度 |
| `{{extra_requirements}}` | 額外要求   |

## Prompt

請根據以下原始資料，整理成一份高品質教學筆記。

請遵守以下要求：

1. 先理解原始資料，不要直接複製
2. 按照教學型筆記格式輸出
3. 補充必要的觀念說明
4. 加入適合初學者理解的範例
5. 不要加入與主題無關的內容
6. 若原始資料不足，請標示需要補充的地方
7. 完成後請根據品質檢查清單自我檢查

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

---

## 命名建議

提示詞檔案應使用清楚、可讀、可搜尋的命名方式。

建議使用小寫英文與連字號：

```text
teaching-principles.md
code-teaching-principles.md
origin-to-notes.md
notes-to-practice.md
notes-to-review.md
teaching-note-format.md
practice-format.md
review-format.md
teaching-note-example.md
practice-example.md
note-quality-checklist.md
practice-quality-checklist.md
generate-note.md
generate-practice.md
generate-review.md
````

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
核心規則：teaching-principles.md
任務流程：origin-to-notes.md
輸出格式：teaching-note-format.md
輸出範例：teaching-note-example.md
評估標準：note-quality-checklist.md
實際提問：generate-note.md
```

---

## 維護原則

### 1. 穩定規則放在 `core/`

只要是長期不容易改變的教學原則、回答風格、輸出原則、品質標準，都應放在 `core/`。

---

### 2. 任務流程放在 `workflows/`

只要是有明確步驟的任務，例如「從原始資料生成筆記」、「從筆記生成練習題」、「從筆記生成複習卡」，都應放在 `workflows/`。

---

### 3. 輸出結構放在 `formats/`

只要是固定的輸出版型，例如筆記格式、表格格式、題目格式、卡片格式，都應放在 `formats/`。

---

### 4. 範例放在 `examples/`

只要是希望 AI 模仿的輸出風格、結構、語氣、分析邏輯，都應放在 `examples/`。

---

### 5. 驗收標準放在 `criteria/`

只要是用來判斷內容好不好、是否合格、是否適合放入正式筆記的標準，都應放在 `criteria/`。

---

### 6. 具體提問放在 `requests/`

只要是實際可以拿去問 AI 的完整問題，都應放在 `requests/`。

---

### 7. 不要把所有內容混在同一份 Prompt

應盡量拆分為：

```text
核心規則
任務流程
輸出格式
輸出範例
評估標準
實際提問
```

這樣可以提高重複使用性，也方便之後替換其中一部分。

---

### 8. 不要讓 Prompt 取代正式筆記

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

---

### 9. 優先維持單一責任

每一份 Prompt 應該盡量只負責一件事情。

如果一份 Prompt 同時包含核心規則、流程、格式、範例、評估標準與完整提問，通常代表它應該被拆分。

---

## 常見錯誤

### 1. 把 `core/` 寫成單次任務

不建議：

```text
請幫我整理第 3 章 HTML 表單筆記。
```

這是具體任務，應該放在 `requests/`。

---

### 2. 把 `workflows/` 寫成完整輸出格式

不建議在 `workflows/` 中規定完整標題結構。

`workflows/` 應該描述處理步驟，完整輸出結構應放在 `formats/`。

---

### 3. 把 `formats/` 寫成任務流程

不建議：

```text
先閱讀原始資料，再分析重點，最後產生筆記。
```

這是流程，應該放在 `workflows/`。

---

### 4. 把 `examples/` 當成正式筆記區

`examples/` 只放少量高品質範例，用來讓 AI 模仿。

完整的正式筆記仍然應該放在：

```text
notes/
```

---

### 5. 把 `criteria/` 寫成空泛標準

不建議：

```text
內容要很好。
```

比較好的寫法：

```text
內容需要符合以下標準：
1. 有清楚的學習目標
2. 有核心概念說明
3. 有範例輔助
4. 有常見錯誤提醒
5. 適合初學者閱讀
```

---

### 6. 把 `requests/` 寫得過度龐大

`requests/` 可以是完整提問，但不應該把所有長期規則都複製進來。

如果某些規則會重複使用，應拆到：

```text
core/
workflows/
formats/
examples/
criteria/
```

---

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
* `prompts/` 負責保存 AI 生成、改寫、轉換與檢查這些內容時使用的提示詞規則

---

## 核心原則

* `prompts/` 是 AI 協作規則的管理區
* `core/` 管理穩定規則與教學原則
* `workflows/` 管理任務處理流程
* `formats/` 管理固定輸出格式
* `examples/` 管理可模仿的高品質範例
* `criteria/` 管理品質檢查與驗收標準
* `requests/` 管理實際提問模板
* 不同類型的 Prompt 不應強制套用同一種文件格式
* 提示詞應該可重複使用、可組合、可維護
* 提示詞不應取代正式筆記，正式知識內容應存放在 `notes/`

---

## 總結

`prompts/` 的設計目標不是把 Prompt 拆得越細越好，而是讓 AI 協作流程更穩定、更容易維護。

可以用一句話理解：

```text
core/      = AI 要遵守什麼基本規則
workflows/ = 任務要怎麼做
formats/   = 結果要長什麼樣
examples/  = 參考什麼範例
criteria/  = 怎樣才算合格
requests/  = 實際怎麼問 AI
```

當這六類提示詞能夠清楚分工，就可以穩定地把 `origin/`、`notes/` 中的內容轉換成各種可學習、可練習、可複習的材料。
