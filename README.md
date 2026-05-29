# HTML Knowledge Pack

本 HTML 知識包用來管理 HTML 學習資料、正式筆記、補充內容、範例程式、練習題、複習材料與 AI 提示詞。

## 目錄結構

```text
html/
  origin/
  notes/
  appendix/
  demos/
  practice/
  review/
  supplements/
  prompts/
    ├── system/
    ├── workflows/
    ├── formats/
    └── requests/
```

## 目錄說明

| 目錄 | 作用 | 用途 |
|---|---|---|
| `origin/` | 原始資料區 | 只存放 `.md` 原始資料文件；文件內容可使用合法 Markdown 語法引用 PDF、Excel、圖片、程式碼檔案、外部連結或其他輔助資源。 |
| `notes/` | 正式筆記區 | 根據 `origin/` 生成教書型筆記，是整個筆記包的主幹知識。 |
| `appendix/` | 附錄資料區 | 根據 `notes/` 生成查表型資料，例如名詞表、API 表、指令表、設定檔範例。 |
| `demos/` | 示範程式區 | 根據 `notes/` 生成可執行或可參考的範例程式。 |
| `practice/` | 練習題區 | 根據 `notes/` 生成練習題、實作任務、改錯題、重構題。 |
| `review/` | 複習材料區 | 根據 `notes/` 生成重點摘要、問答題、填空題、複習卡片。 |
| `supplements/` | 補充資料區 | 根據 `notes/` 延伸補充底層原理、進階觀念、相關比較與實務案例。 |
| `prompts/` | AI 提示詞管理區 | 存放可複用的 AI 提示詞資源，包括系統規則、工作流程、輸出格式、實際提問範例、必要上下文、輸入欄位與使用備註。詳細格式見 [`prompts/README.md`](prompts/README.md)。 |

## 資料流

```text
origin/
  ↓
notes/
  ↓
appendix/
demos/
practice/
review/
supplements/
prompts/
```

## 核心原則

* `origin/` 是原始資料來源
* `notes/` 是主幹知識
* `appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 是根據 `notes/` 生成的不同用途內容
* `prompts/` 是 AI 協作規則與生成流程的管理區，用來規範筆記生成、格式輸出、練習設計與實際提問方式