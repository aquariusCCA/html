# HTML 筆記包更新判斷規則

本文件用來協助人與 AI 在 HTML 筆記包中判斷：

- 是否需要更新
- 要更新哪一層
- 會影響哪些上游或下游
- 應該採用什麼更新順序
- `meta/chapter-status.md` 應如何建議標記

本文件不是自動改檔流程，也不是 HTML 教學內容產生規格。它只用於更新前的判斷與規劃。

## 使用邊界

- 先判斷最新正確內容在哪一層，再判斷其他層是否需要同步。
- 不把 `origin/` 直接當作正式教學筆記。
- 不把 `atomic/` 直接當作最終可閱讀筆記。
- 不把 `appendix/`、`demos/`、`practice/`、`review/` 當作核心知識的正式來源。
- 不把 `meta/chapter-status.md` 當作流程歷史紀錄；它只保存章節狀態總覽。
- 下游材料只能延伸已完成內容審查的 `notes/`，不能自行新增核心知識。
- 若只是判斷影響範圍，本文件只提出「需要檢查」、「候選同步」、「候選重生成」與「狀態標記建議」，不代表已經執行。

## 核心口訣

```text
改 origin，要想到 atomic。
改 atomic，要想到 notes。
改 notes，要想到所有下游。
改下游，要先確認 notes 是否才是問題來源。

改標題，要想到 appendix 與 anchor。
改範例，要想到 demos / practice / review。
改資產，要想到所有引用路徑。
下游新增新知識，要先回補 notes。

上游變動，不代表全部重跑；
但下游未檢查，不能假設最新。
```

## HTML 筆記包資料流

```text
origin/<章節>/*.md
origin/<章節>/assets/
  ↓
資料整理
  - 資產路徑標準化
  - alt / 連結文字整理
  - origin 內容整理與切分準備
  ↓
atomic/
  ↓
atomic review
  ↓
notes/
  ↓
notes content review
  ↓
appendix/  demos/  practice/  review/
```

這是主要判斷順序，不代表每次都要全部重跑。未受影響的層級可以略過。

## 各層責任

| 層級 | 主要責任 | 是否可作為正式知識來源 |
| --- | --- | --- |
| `origin/` | 保存原始筆記、原始素材與章節來源 | 可作為原始來源，不直接作為正式教學筆記 |
| `origin/<章節>/assets/` | 保存圖片、PDF、Excel、Word 等附件 | 可作為原始素材來源 |
| 資料整理 | 標準化資產路徑、alt、連結文字，準備切分 | 否 |
| `atomic/` | 保存可重組的單一概念候選內容 | 可作為概念來源，不直接作為最終筆記 |
| atomic review | 檢查 atomic 正確性、完整性與切分風險 | 否 |
| `notes/` | 保存可閱讀、可教學、可回查的正式筆記 | 是 |
| notes content review | 檢查 notes 是否達到正式教學品質 | 否 |
| `appendix/` | 索引、FAQ、查表資料 | 否，應回連 notes |
| `demos/` | 可執行教學範例 | 否，應延伸 notes |
| `practice/` | 練習題、實作任務與答案來源 | 否，應延伸 notes |
| `review/` | 複習題、錯題與間隔複習材料 | 否，應延伸 notes |
| `supplements/` | 補充資料 | 視內容而定；若成為正式知識，應回補 notes |
| `meta/chapter-status.md` | 章節狀態總覽 | 否 |
| `meta/chapter-logs/<章節名稱>.md` | 章節詳細流程歷史 | 否 |

## 更新判斷總則

### 1. 先判斷更新類型

| 更新類型 | 主要位置 | 常見後續檢查 |
| --- | --- | --- |
| 新增或修正原始資料 | `origin/` | `atomic/`, `notes/`, 下游材料 |
| 資產新增、改名、搬移或引用修正 | `origin/<章節>/assets/` | 所有引用該資產的位置 |
| 單一概念新增、拆分或修正 | `atomic/` | `atomic review`, `notes/`, 下游材料 |
| 教學筆記新增、重組或修正 | `notes/` | `notes content review`, 所有下游材料 |
| 索引、FAQ、查表資料更新 | `appendix/` | 確認是否只延伸 `notes/` |
| 教學範例更新 | `demos/` | 確認是否來自 `notes/`，並檢查資產路徑 |
| 練習題或答案更新 | `practice/` | 確認題目、答案與來源是否對應 `notes/` |
| 複習題、錯題、間隔複習材料更新 | `review/` | 確認複習內容是否對應 `notes/` |
| 章節狀態同步 | `meta/chapter-status.md` | 確認只更新狀態，不改變欄位結構 |

### 2. 先找最新正確來源

更新前先判斷最新正確內容在哪一層：

```text
origin 改了 → 檢查 atomic / notes 是否過期
atomic 改了 → 檢查 notes 是否過期
notes 改了 → 檢查 appendix / demos / practice / review 是否過期
下游改了 → 先判斷問題是否源自 notes 或更上游
```

若無法確認最新正確來源，應暫緩更新或標記為待確認。

### 3. 上游優先於下游

如果一項更新同時影響上游與下游，應先更新正式來源，再更新衍生內容。

如果下游內容發現上游缺漏或錯誤，應先回到主要責任位置修正，再重新檢查受影響的下游。

### 4. 下游不得自行新增核心知識

`appendix/`、`demos/`、`practice/`、`review/` 只能延伸 `notes/` 已經教過的內容。

如果下游需要加入新觀念：

```text
先確認 notes 是否已包含該觀念
  ↓
若 notes 沒有，先補 notes
  ↓
完成 notes content review
  ↓
再更新下游
```

### 5. 區分檢查、候選同步與實際執行

| 類型 | 意思 |
| --- | --- |
| 需要檢查 | 需要確認內容是否過期、缺漏、不一致或引用錯誤 |
| 候選同步 / 候選重生成 | 後續若授權，可能需要由其他流程處理 |
| 實際同步 / 實際重生成 | 真的改檔、產出檔案或更新狀態表 |

判斷結果不等於執行結果。除非使用者明確要求實際改檔，否則只提出候選範圍與建議標記。

### 6. 只列出必要範圍

不要因為一個小修就把全部章節與全部下游列為候選重生成。

判斷時至少確認：

- 改動位置與改動類型
- 最新正確來源
- 是否影響正式 `notes/`
- 是否影響標題、anchor、關鍵字或引用路徑
- 是否影響資產、圖片、附件或來源連結
- 是否影響 `appendix/`、`demos/`、`practice/`、`review/`

## 各層更新判斷

| 如果更新了 | 應檢查 |
| --- | --- |
| `origin/` | 是否影響 `atomic/` 的概念、來源追溯、切分方式或事實正確性 |
| `origin/<章節>/assets/` | 是否有任何層級仍引用舊路徑、舊檔名、錯誤 alt 或錯誤連結文字 |
| `atomic/` | 是否影響 `notes/` 的說明、教學順序、標題或範例 |
| `notes/` | 是否影響 `appendix/`、`demos/`、`practice/`、`review/` |
| `appendix/` | 是否只是索引或摘要更新；若涉及正式內容，應回到 `notes/` |
| `demos/` | 是否超出 notes 已教範圍，或是否需要回補 notes |
| `practice/` | 題目、答案、提示與來源是否仍對應 notes |
| `review/` | 複習題、錯題、答案與解析是否仍對應 notes |
| `supplements/` | 是否已變成正式知識；若是，應回補 `atomic/` 或 `notes/` |
| `meta/chapter-status.md` | 是否只更新既有欄位與狀態值，不改變欄位結構 |

## 資產異動判斷

資產異動不能只看檔名，必須檢查所有可能引用位置。

常見資產異動包括：

- 新增圖片、PDF、Excel、Word 或其他附件。
- 資產改名、搬移或刪除。
- Markdown 圖片路徑或附件連結改變。
- alt、title、連結文字或來源說明需要整理。

資產異動時，至少檢查：

```text
origin 引用
atomic 引用
notes 引用
demos 引用
appendix 連結
practice / review 中的圖片、附件或來源連結
```

## `meta/chapter-status.md` 標記原則

`meta/chapter-status.md` 是章節狀態總覽，不是詳細流程紀錄。

### 狀態值使用原則

| 狀態 | 使用時機 |
| --- | --- |
| 未開始 | 尚未處理 |
| 進行中 | 已開始但尚未完成 |
| 待確認 | 需要人工確認、內容檢查或下游是否過期無法判斷 |
| 已完成 | 已完成並通過必要檢查 |
| 暫停 | 暫時停止處理 |
| 不適用 | 該章節不需要此步驟，且已說明原因 |

### 維護概念與欄位對應

| 維護概念 | 對應欄位 |
| --- | --- |
| origin | `origin整理` |
| asset | `資產命名`, `alt與連結文字` |
| atomic | `atomic切分提案`, `atomic產生` |
| atomic review | `atomic內容審查` |
| notes generation | `notes生成` |
| notes content review | `notes完成檢查` |
| demos | `demos生成` |
| practice | `practice生成` |
| review | `review生成` |
| appendix | `appendix索引` |
| final check | `最終驗收`, `完成率`, `整體狀態`, `下一步`, `備註` |

### 摘要與詳細紀錄分工

| 位置 | 用途 |
| --- | --- |
| `下一步` | 目前最重要的待辦、檢查或決策 |
| `備註` | 短摘要、特殊決策、不適用原因、章節 log 連結 |
| `meta/chapter-logs/<章節名稱>.md` | 詳細流程歷史、已執行流程、修正紀錄與待確認背景 |

不要為了更新規則而修改 `meta/chapter-status.md` 的欄位結構。

## 建議更新順序

### 原始資料或核心概念更新

1. 確認 `origin/` 是否為最新正確來源。
2. 判斷是否需要新增、拆分或修正 `atomic/`。
3. 完成或重新檢查 `atomic review`。
4. 判斷 `notes/` 是否需要更新。
5. 完成或重新檢查 `notes content review`。
6. 最後檢查 `appendix/`、`demos/`、`practice/`、`review/` 是否受影響。
7. 若實際完成更新，再同步 `meta/chapter-status.md`。

### notes 或下游更新

1. 先確認問題是否真的只在下游。
2. 如果問題源自 notes，先修正 `notes/`。
3. 完成 notes content review。
4. 再檢查或同步受影響的下游。
5. 最後更新章節狀態總覽。

### 資產更新

1. 確認資產最新檔名、位置與用途。
2. 搜尋舊檔名與舊路徑。
3. 檢查 origin、atomic、notes、appendix、demos、practice、review 是否仍引用舊路徑。
4. 若實際修正引用，再更新相關狀態欄位。

## 暫緩更新的情況

遇到以下情況時，應先暫緩更新或只記錄待確認事項：

- 無法判斷最新正確來源。
- 無法判斷改動屬於哪一層。
- 無法確認下游內容是否超出 notes 已教範圍。
- 資產是否仍被引用無法確認。
- 標題或 anchor 改動是否影響 appendix 無法確認。
- 章節狀態與實際檔案內容不一致。
- 只是想同步狀態，但缺少實際完成依據。
- 備註欄已累積太多流程歷史，應先移入章節 log。

## 更新前檢查清單

每次更新前，先檢查：

- 這次改動發生在哪一層？
- 這次改動屬於哪一種更新類型？
- 最新正確來源在哪裡？
- 是否影響正式 `notes/`？
- 是否影響標題、anchor、關鍵字或索引？
- 是否影響圖片、附件、資產路徑、alt 或連結文字？
- 是否影響 `appendix/`、`demos/`、`practice/`、`review/`？
- 是否只是需要檢查，而不是直接重生成？
- `meta/chapter-status.md` 哪些欄位應建議標記為 `已完成`、`待確認`、`不適用` 或 `進行中`？
- 是否需要暫緩，等來源、內容或引用確認後再更新？

## 判斷結論格式

更新前可以用以下格式整理判斷：

```text
更新類型：
主要更新位置：
最新正確來源：
是否需要更新：是 / 否 / 暫緩
原因：
上游需要補齊：
下游可能影響：
候選同步 / 候選重生成範圍：
chapter-status.md 建議標記：
建議更新順序：
不應更新的位置：
待確認事項：
```

這個結論只用來規劃更新，不代表必須自動修改任何檔案。
