本 HTML 知識包用來管理 HTML 學習資料、原子化資料、正式筆記、附錄查表資料、補充內容、範例程式、練習題、複習材料與 AI 提示詞。

## 目錄結構

```text
html/
  meta/
  origin/
  atomic/
  notes/
  appendix/
  demos/
  practice/
  review/
  supplements/
  skills-src/
  scripts/
```

## 目錄說明

| 目錄             | 作用        | 用途                                                                                                                                                                                                                                                                                                                                      |
| -------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `meta/`        | 專案管理資料區   | 存放章節處理狀態與 repo 維護流程紀錄。                                                                                                                                                                                                                                                                                                                  |
| `origin/`      | 原始資料區     | 存放章節原始資料文件（`*.md`）與 `assets/` 內的原始輔助資源（PDF、Excel、圖片、文件、影音等）。`*.md` 內容不直接修改、覆蓋或刪除，作為可追溯的來源；唯一例外是「資產命名」（見 [`skills-src/asset-standardization/instructions.md`](skills-src/asset-standardization/instructions.md)）與「alt 與連結文字整理」（見 [`skills-src/asset-alt-and-link-text/instructions.md`](skills-src/asset-alt-and-link-text/instructions.md)）階段的就地更新。 |
| `atomic/`      | 原子化資料區    | 根據 `origin/` 中的原始資料，透過人工或 AI 重新切分、合併、修正章節後產生的候選原子資料。此區資料尚不等於正式筆記，主要用來解決原始筆記過長、過短、章節切分不合理、內容混雜等問題。                                                                                                                                                                                                                                       |
| `notes/`       | 正式筆記區     | 根據 `atomic/` 生成正式教學筆記，是整個筆記包的主幹知識。                                                                                                                                                                                                                                                                                                     |
| `appendix/`    | 附錄資料區     | 根據 `notes/` 生成查表型資料，例如名詞表、API 表、指令表、設定檔範例。                                                                                                                                                                                                                                                                                              |
| `demos/`       | 示範程式區     | 根據 `notes/` 生成可執行或可參考的範例程式。                                                                                                                                                                                                                                                                                                             |
| `practice/`    | 練習題區      | 根據 `notes/` 生成練習題、實作任務、改錯題、重構題。                                                                                                                                                                                                                                                                                                         |
| `review/`      | 複習材料區     | 根據 `notes/` 生成重點摘要、問答題、填空題、複習卡片。                                                                                                                                                                                                                                                                                                        |
| `supplements/` | 補充資料區     | 根據 `notes/` 延伸補充底層原理、進階觀念、相關比較與實務案例；當 notes 中某概念因教學節奏未深入說明、但值得進一步理解時，視內容需要選用生成，非每章節必經。                                                                                                                                                                                                                                                  |
| `skills-src/`  | Skill 原始碼區 | 存放各 skill 的原始碼（每個子目錄對應一個 skill），由 `scripts/build-skills.mjs` 建置至各 AI 工具（Claude Code、Codex 等）的 skill 目錄，供工作流各階段呼叫。                                                                                                                                                                                                                                      |
| `scripts/`     | 維護腳本區     | 存放專案維護用的 Node.js 腳本，目前包含 `build-skills.mjs`（將 `skills-src/` 中的 skill 原始碼建置至各 AI 工具的 skill 目錄）。                                                                                                                                                                                                                                                              |

## 資料流

```text
origin/<章節>/*.md
origin/<章節>/assets/
  ↓
資產命名（就地更新 origin/）
  ↓
alt 與連結文字整理（就地更新 origin/）
  ↓
atomic 切分提案與產生
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

說明：

* 「資產命名」「alt 與連結文字整理」是 `origin/` 唯讀規則的例外，須在 atomic 切分提案前完成（或標記為不適用）：「資產命名」（見 [`skills-src/asset-standardization/instructions.md`](skills-src/asset-standardization/instructions.md)）就地重新命名 `origin/<章節>/assets/` 實體資產檔案並同步更新 `origin/<章節>/*.md` 的本地資產引用路徑；「alt 與連結文字整理」（見 [`skills-src/asset-alt-and-link-text/instructions.md`](skills-src/asset-alt-and-link-text/instructions.md)）就地更新 `origin/<章節>/*.md` 中的 alt 文字與連結顯示文字，不涉及資產改名
* 「atomic 切分提案與產生」對應 `meta/chapter-status.md` 的「atomic 切分提案」「atomic 產生」欄位（見 [`skills-src/atomic-note-splitting/instructions.md`](skills-src/atomic-note-splitting/instructions.md)），是 `origin → atomic` 的生成過程，產出直接寫入 `atomic/`，不會再修改 `origin/`
* `atomic review` 對應 `meta/chapter-status.md` 的「atomic 內容審查」欄位（見 [`skills-src/atomic-content-review/instructions.md`](skills-src/atomic-content-review/instructions.md)），審查 `atomic/<章節>/*.md` 的技術正確性、邏輯可靠性、主題歸屬與教學可用性，分為審查報告與確認後修正兩階段，且只更新 `atomic/`、不修改 `origin/`
* `notes/` 生成對應 `meta/chapter-status.md` 的「notes 生成」欄位（見 [`skills-src/notes-generation/instructions.md`](skills-src/notes-generation/instructions.md)），是 `atomic → notes` 的生成過程，須在 `atomic review` 通過後進行，分為映射與結構提案、確認後產生正式教學筆記兩階段，且只更新 `notes/`、不修改 `origin/` 或 `atomic/`
* `notes content review` 對應 `meta/chapter-status.md` 的「notes 完成檢查」欄位，審查 `notes/<章節>/*.md` 是否符合正式教學筆記要求，審查通過後才能進入 `appendix/demos/practice/review/supplements` 生成
* `atomic review`、`notes content review` 為審查關卡，審查通過後才能進入下一層生成
* `appendix/`、`demos/`、`practice/`、`review/` 皆以 `notes/` 為唯一來源生成，為每章節標準輸出
* `supplements/` 為選用補充，當 `notes/` 中某概念因教學節奏未深入說明、但值得進一步理解時，以 `notes/` 為唯一來源生成底層原理、進階觀念、相關比較或實務案例，非每章節必經

## 各層目錄規則

### origin/

```text
origin/
  <章節>/
    assets/
      images/
      pdfs/
      excels/
      word/
      files/
      ...
    *.md
```

* `origin/` 為唯讀原始資料，不可直接修改、覆蓋或刪除；唯一例外是「資產命名」（見 [`skills-src/asset-standardization/instructions.md`](skills-src/asset-standardization/instructions.md)）可就地更新 `assets/` 實體檔名與 `*.md` 的本地資產引用路徑，以及「alt 與連結文字整理」（見 [`skills-src/asset-alt-and-link-text/instructions.md`](skills-src/asset-alt-and-link-text/instructions.md)）可就地更新 `*.md` 中的 alt 文字與連結顯示文字
* `assets/` 依資源類型分類存放

### atomic/

```text
atomic/
  <章節>/
    *.md
```

* atomic 可在同一 `<章節>` 內重新切分、合併、修正 `origin/` 的 `*.md`，但不會新增、刪除或重新命名 `<章節>` 資料夾
* atomic 的 `*.md` 引用 `origin/<章節>/assets/` 中的資產（已完成資產命名、alt 與連結文字整理）

### notes/

```text
notes/
  <章節>/
    *.md
```

* 根據對應的 `atomic/<章節>/` 生成正式教學筆記
* 引用 `origin/<章節>/assets/` 中的資產

### appendix/ practice/ review/ supplements/

```text
<目錄>/
  <章節>/
    *.md
```

* 根據 `notes/<章節>/*.md` 生成，章節資料夾與 `origin/`、`atomic/`、`notes/` 對齊
* `supplements/` 為選用，僅在該章節有對應補充內容時才建立

### demos/

```text
demos/
  <章節>/
    <筆記名>/
      index.html
      ...
```

* `notes/<章節>/<筆記名>.md` 對應一個 `demos/<章節>/<筆記名>/` 資料夾
* 資料夾內存放可獨立開啟執行的 HTML 教學 demo，可包含對應的 CSS、JS 或其他資源

### 工具目錄

```text
skills-src/
  <skill-name>/
    ...

scripts/
  build-skills.mjs
  ...
```

* `skills-src/` 每個子目錄對應一個 skill，由 `scripts/build-skills.mjs` 建置至各 AI 工具（Claude Code、Codex 等）的 skill 目錄；新增或修改 skill 原始碼後，執行 `node scripts/build-skills.mjs` 重新建置
* `scripts/` 存放專案維護腳本，不屬於 HTML 知識內容，不參與 `origin → supplements` 的資料流

## 章節命名規則

* 格式：`<編號>-<章節標題>`，編號為三位數，間隔 10（例如 `010`、`020`、`030`...）
* 目前 `origin/` 共 32 個章節，編號範圍 `010` ~ `320`
* 同一章節的資料夾名稱（編號+標題）須在 `origin/`、`atomic/`、`notes/`、`appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 之間保持一致
* 編號間隔 10 預留插入空間：未來新增章節可使用中間編號（如 `015`），不需重新命名既有章節資料夾

## meta/ 章節索引

`meta/chapter-status.md` 記錄所有章節的：

* 章節編號與標題
* 各維護概念（origin 整理、資產命名、alt 與連結文字、atomic 切分提案／產生／內容審查、notes 生成／完成檢查、demos／practice／review 生成、appendix 索引、最終驗收）的處理狀態
* 整體完成率、整體狀態、下一步待辦與備註

其中「origin 整理」欄位代表原始資料與資產已放入 `origin/<章節>/` 目錄結構（`*.md` 置於章節根目錄、各類資產依分類放入 `assets/`），是後續資產命名、alt 與連結文字整理、atomic 切分提案的前提；與「資產命名」「alt 與連結文字」是先後接續關係，內容不互相重疊。

狀態值共六種：未開始 / 進行中 / 待確認 / 已完成 / 暫停 / 不適用。

作為整個知識包的進度總表。

`meta/chapter-logs/<章節名稱>.md` 記錄各章節的狀態摘要、已執行流程與待確認與下一步事項，由 `meta/chapter-status.md` 的「備註」欄連結。

## 核心原則

* `origin/` 是不可直接修改、覆蓋或刪除的原始資料來源；唯一例外是「資產命名」「alt 與連結文字整理」階段的就地更新（見資料流說明）
* `meta/` 是專案管理資料的集中位置，不作為 HTML 知識來源
* 更新判斷規則集中於 `skills-src/update-judgment/instructions.md`，不屬於 `meta/`
* `atomic/` 是整理原始資料的中介層，不等於正式筆記
* `notes/` 是根據 `atomic/` 生成的主幹知識
* `appendix/`、`demos/`、`practice/`、`review/` 是根據 `notes/` 生成的不同用途內容，為每章節標準輸出
* `supplements/` 為選用補充，當 `notes/` 中某概念值得進一步理解但教學節奏未深入說明時，以 `notes/` 為來源生成，非每章節必經
* 各層 `<章節>` 資料夾名稱（編號+標題）需在 `origin/` ~ `supplements/` 之間保持一致
* `atomic/`、`notes/` 不另存資產，統一引用 `origin/<章節>/assets/`
