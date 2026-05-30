# prompts/

`prompts/` 是 HTML 知識包中的 **AI 協作規則管理區**。

它不存放正式學習內容，也不存放原始資料；它負責管理 AI 在產生、整理、改寫、檢查與複習內容時應遵守的規則、流程、格式、範例與品質標準。

```text
origin/      = 原始資料
notes/       = 正式筆記
appendix/    = 附錄與查表資料
demos/       = 範例程式
practice/    = 練習題與實作任務
review/      = 複習材料
supplements/ = 補充資料
prompts/     = 控制 AI 如何產生與維護上述內容的規則
```

一句話理解：

```text
prompts/ 不負責保存知識內容；
prompts/ 負責讓 AI 穩定產生高品質知識內容。
```

---

## 1. 目錄目標

`prompts/` 的目標不是保存單次提問，而是建立一套可長期使用的 AI 協作系統。

它需要做到：

1. **可重複使用**：同一套規則可以反覆用在不同章節與不同任務。
2. **可組合**：核心規則、任務流程、輸出格式、範例與驗收標準可以依任務自由搭配。
3. **可維護**：每份 Prompt 有清楚責任，不把所有規則長期混在同一份文件中。

---

## 2. 建議目錄結構

```text
prompts/
  README.md
  _drafts/
  core/
  workflows/
  formats/
  examples/
  criteria/
  requests/
```

| 目錄 | 定位 | 主要用途 |
| --- | --- | --- |
| `_drafts/` | 草稿設計區 | 存放尚未穩定、尚未拆分的大型混合 Prompt 草稿。 |
| `core/` | 核心規則區 | 存放長期穩定的教學原則、回答風格、品質要求與共通限制。 |
| `workflows/` | 任務流程區 | 存放可重複執行的任務步驟，例如從 `origin/` 生成 `notes/`。 |
| `formats/` | 輸出格式區 | 存放固定輸出結構，例如教學筆記格式、練習題格式、複習卡格式。 |
| `examples/` | 範例模仿區 | 存放 Few-shot 範例，讓 AI 模仿固定語氣、結構與分析方式。 |
| `criteria/` | 品質標準區 | 存放檢查清單、驗收標準、評分規則與常見錯誤檢查。 |
| `requests/` | 實際提問區 | 存放可以直接送給 AI 使用的完整任務提問模板。 |

---

## 3. 核心設計觀念

Prompt 常見的七個元素是：

```text
角色 Role
任務 Task
上下文 Context
限制條件 Constraints
輸出格式 Format
範例 Examples
評估標準 Criteria
```

但 `prompts/` 的子目錄不是和這七個元素一對一對應，而是依照 **Prompt 的維護生命週期** 拆分。

| Prompt 元素 | 建議放置位置 |
| --- | --- |
| 初期混合草稿 | `_drafts/` |
| 角色 Role | `core/` 或 `requests/` |
| 任務 Task | `workflows/` 或 `requests/` |
| 上下文 Context | `requests/`，必要時抽到 `core/` |
| 限制條件 Constraints | 通用限制放 `core/`；任務限制放 `workflows/` 或 `requests/` |
| 輸出格式 Format | `formats/` |
| 範例 Examples | `examples/` |
| 評估標準 Criteria | `criteria/` |

可以這樣理解：

```text
七個 Prompt 元素 = 單一 Prompt 的內容骨架
七個 prompts/ 子目錄 = 管理 Prompt 資源的資料夾架構
```

---

## 4. 從草稿到正式 Prompt

建議先在 `_drafts/` 試寫完整 Prompt，等規則穩定後再拆分。

```text
_drafts/
  ↓ 設計與試寫大型混合 Prompt
core/
  ↓ 抽出長期穩定規則
workflows/
  ↓ 抽出任務處理步驟
formats/
  ↓ 抽出固定輸出結構
examples/
  ↓ 抽出可模仿範例
criteria/
  ↓ 抽出品質檢查標準
requests/
  ↓ 組合成可直接使用的提問模板
```

推薦流程：

1. 先在 `_drafts/` 撰寫大型混合 Prompt。
2. 經過幾次實際使用後，確認哪些規則會長期重複使用。
3. 將穩定內容拆到 `core/`、`workflows/`、`formats/`、`examples/`、`criteria/`。
4. 最後在 `requests/` 建立可直接使用的完整提問模板。

### 4.1 使用範例：從草稿拆成正式 Prompt

假設現在要設計一套「從 `origin/` 產生 `notes/`」的 Prompt。

一開始可以先建立草稿：

```text
_drafts/origin-to-notes-draft.md
```

草稿階段可以暫時把以下內容寫在同一份文件中：

```text
角色設定
任務目標
輸入資料
處理步驟
輸出格式
範例
品質檢查標準
實際提問文字
```

等這份 Prompt 經過幾次使用後，如果內容穩定，就可以拆成正式 Prompt 資源：

```text
core/teaching-principles.md
workflows/origin-to-notes.md
formats/teaching-note-format.md
examples/teaching-note-example.md
criteria/note-quality-checklist.md
requests/generate-note.md
```

拆分後，各檔案責任如下：

| 檔案                                   | 負責內容                         |
| ------------------------------------ | ---------------------------- |
| `core/teaching-principles.md`        | 定義 AI 的教學原則、回答風格與通用限制。       |
| `workflows/origin-to-notes.md`       | 定義從原始資料整理成正式筆記的處理步驟。         |
| `formats/teaching-note-format.md`    | 定義正式筆記的輸出結構。                 |
| `examples/teaching-note-example.md`  | 提供 AI 可以模仿的高品質筆記範例。          |
| `criteria/note-quality-checklist.md` | 定義正式筆記完成後的檢查標準。              |
| `requests/generate-note.md`          | 組合上述規則，形成可以直接拿去問 AI 的完整提問模板。 |

可以這樣理解：

```text
_drafts/origin-to-notes-draft.md
= 設計中的大型混合 Prompt

requests/generate-note.md
= 拆分完成後，實際拿來執行任務的正式 Prompt
```

因此，`_drafts/` 不是永久存放區，而是 Prompt 成熟前的設計區；當內容穩定後，就應該依照責任拆分到正式目錄中。

---

## 5. Prompt 文件建議格式

不同類型的 Prompt 文件不必硬套同一種格式，但每份文件至少建議包含以下欄位。

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

這些欄位只負責讓文件容易理解與維護，不應把所有規則都塞進共通欄位。

---

## 6. 放置規則

| 目錄 | 適合放 | 不適合放 |
| --- | --- | --- |
| `_drafts/` | 尚未穩定的大型混合 Prompt、正在試寫的任務設計 | 已確認穩定的正式規則、正式筆記、原始資料 |
| `core/` | AI 角色定位、教學原則、回答風格、通用限制、品質要求 | 單次任務、某章節原始資料、完整輸出版型 |
| `workflows/` | 任務目標、輸入要求、處理步驟、檢查步驟 | 長期角色設定、完整輸出版型、實際可直接送出的完整提問 |
| `formats/` | 標題層級、區塊順序、表格欄位、程式碼呈現規則 | 任務處理流程、AI 角色設定、大量背景說明 |
| `examples/` | 高品質輸出範例、Few-shot 範例、好的問答或程式碼講解範例 | 大量正式筆記、原始資料、完整任務流程 |
| `criteria/` | 品質檢查清單、驗收標準、評分規則、常見錯誤檢查 | 具體章節筆記、單次任務資料、完整輸出格式 |
| `requests/` | 實際提問文字、任務背景、輸入欄位、可替換變數、使用範例 | 所有長期規則、所有輸出格式細節、大量正式筆記內容 |

---

## 7. 命名規則

Prompt 檔案建議使用小寫英文與連字號。

| 類型 | 命名模式 | 範例 |
| --- | --- | --- |
| 草稿 | `<task>-draft.md` | `origin-to-notes-draft.md` |
| 核心規則 | `<domain>-principles.md` | `teaching-principles.md` |
| 任務流程 | `<source>-to-<target>.md` | `notes-to-practice.md` |
| 輸出格式 | `<output>-format.md` | `teaching-note-format.md` |
| 輸出範例 | `<output>-example.md` | `practice-example.md` |
| 驗收標準 | `<output>-quality-checklist.md` | `note-quality-checklist.md` |
| 實際提問 | `generate-<target>.md` | `generate-note.md` |

建議使用：

```text
origin-to-notes-draft.md
teaching-principles.md
origin-to-notes.md
teaching-note-format.md
practice-example.md
note-quality-checklist.md
generate-note.md
```

避免使用：

```text
prompt1.md
test.md
new.md
note.md
ai.md
```

---

## 8. 維護原則

1. **先草稿，後拆分**：Prompt 尚未穩定時先放 `_drafts/`；穩定後再拆到正式目錄。
2. **一份文件只負責一件事**：避免同一份文件同時負責規則、流程、格式、範例與驗收。
3. **長期規則不要重複複製**：會反覆使用的規則應抽到 `core/`。
4. **流程與格式分開管理**：`workflows/` 描述「怎麼做」；`formats/` 描述「結果長什麼樣」。
5. **範例只放少量高品質樣本**：`examples/` 是 Few-shot 範例區，不是正式筆記倉庫。
6. **驗收標準要可檢查**：避免「內容要很好」這種空泛標準，改用明確檢查項目。
7. **Prompt 不取代正式筆記**：正式知識內容應存放在 `notes/`，不要放在 `prompts/`。

---

## 9. 新增 Prompt 前檢查清單

新增一份 Prompt 前，請確認：

- [ ] 這份 Prompt 的用途是否清楚？
- [ ] 它應該放在 `_drafts/`、`core/`、`workflows/`、`formats/`、`examples/`、`criteria/` 還是 `requests/`？
- [ ] 是否和既有 Prompt 重複？
- [ ] 是否只負責一個明確任務？
- [ ] 是否有說明適用場景與不適用場景？
- [ ] 是否有清楚的使用方式？
- [ ] 如果是流程，是否有明確步驟？
- [ ] 如果是格式，是否有清楚輸出結構？
- [ ] 如果是範例，是否值得讓 AI 模仿？
- [ ] 如果是驗收標準，是否可以被檢查？
- [ ] 檔名是否清楚、可搜尋、可長期維護？

---

## 10. 總結

`prompts/` 的價值不在於把 Prompt 拆得越細越好，而在於讓 AI 協作流程更穩定、更可控、更容易維護。

```text
_drafts/   = Prompt 草稿在哪裡設計
core/      = AI 長期要遵守什麼規則
workflows/ = 任務應該怎麼處理
formats/   = 最終輸出長什麼樣
examples/  = AI 應該模仿什麼範例
criteria/  = 怎樣才算合格
requests/  = 實際要怎麼問 AI
```

當這七類資源能夠清楚分工，就可以穩定地把 `origin/`、`notes/` 與其他知識材料轉換成適合學習、練習、複習與維護的內容。
