# HTML Knowledge Pack

本 HTML 知識包用來管理 HTML 學習資料、原子化資料、正式筆記、補充內容、範例程式、練習題、複習材料與 AI 提示詞。

## 目錄結構

```text
html/
  origin/
  atomic/
  notes/
  appendix/
  demos/
  practice/
  review/
  supplements/
  prompts/
```

## 目錄說明

| 目錄 | 作用 | 用途 |
|---|---|---|
| `origin/` | 原始資料區 | 只存放 `.md` 原始資料文件。原始資料不直接修改、不直接覆蓋，作為可追溯的來源。文件內容可使用合法 Markdown 語法引用 PDF、Excel、圖片、程式碼檔案、外部連結或其他輔助資源。 |
| `atomic/` | 原子化資料區 | 根據 `origin/` 中的原始資料，透過人工或 AI 重新切分、合併、修正章節後產生的候選原子資料。此區資料尚不等於正式筆記，主要用來解決原始筆記過長、過短、章節切分不合理、內容混雜等問題。 |
| `notes/` | 正式筆記區 | 根據 `atomic/` 生成教書型正式筆記，是整個筆記包的主幹知識。 |
| `appendix/` | 附錄資料區 | 根據 `notes/` 生成查表型資料，例如名詞表、API 表、指令表、設定檔範例。 |
| `demos/` | 示範程式區 | 根據 `notes/` 生成可執行或可參考的範例程式。 |
| `practice/` | 練習題區 | 根據 `notes/` 生成練習題、實作任務、改錯題、重構題。 |
| `review/` | 複習材料區 | 根據 `notes/` 生成重點摘要、問答題、填空題、複習卡片。 |
| `supplements/` | 補充資料區 | 根據 `notes/` 延伸補充底層原理、進階觀念、相關比較與實務案例。 |
| `prompts/` | AI 提示詞管理區 | 存放可複用的 AI 提示詞資源，詳細說明見 [`prompts/README.md`](prompts/README.md)。 |

## 核心原則

* `origin/` 是不可直接覆蓋的原始資料來源
* `atomic/` 是整理原始資料的中介層，不等於正式筆記
* `notes/` 是根據 `atomic/` 生成的主幹知識
* `appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 是根據 `notes/` 生成的不同用途內容
* `prompts/` 是 AI 協作規則與生成流程的管理區，用來規範筆記生成、格式輸出、練習設計與實際提問方式
