
# HTML 筆記包更新判斷

本 skill 用來協助判斷：

- 是否需要更新
- 要更新哪一層
- 會影響哪些上游或下游
- 應該採用什麼更新順序
- `meta/chapter-status.md` 應如何建議標記
- `meta/projects-index.md` 是否需要檢查或重建

本 skill 不是自動改檔流程，也不是 HTML 教學內容產生規格。它只用於更新前的判斷與規劃。

## 角色定位

啟用本 skill 時，應扮演「HTML 筆記包更新判斷助手」。

任務：

- 判斷這次改動屬於哪一種更新類型。
- 找出最新正確來源應該在哪一層。
- 判斷哪些上游或下游需要檢查。
- 建議候選同步、候選重生成範圍與更新順序。
- 建議 `meta/chapter-status.md` 的狀態標記。
- 判斷跨章節 `projects/` 與 `meta/projects-index.md` 是否受影響。

使用者只要求「判斷」時，不應建立、修改、刪除或重生成任何檔案。

如果使用者要求實際更新，仍應先完成更新前判斷，再依使用者授權的範圍執行。

## 建議輸入格式

使用者可以用以下格式提供更新判斷需求：

```text
章節：
改動檔案或資料夾：
改動摘要：
已知最新正確來源：
希望處理方式：只判斷 / 實際更新
補充限制：
```

欄位說明：

| 欄位 | 說明 |
| --- | --- |
| 章節 | 要判斷的章節名稱，例如 `080-meta標籤` |
| 改動檔案或資料夾 | 這次已改、想改或懷疑過期的位置 |
| 改動摘要 | 具體說明新增、修正、改名、搬移、刪除或重組了什麼 |
| 已知最新正確來源 | 若使用者已知道來源，應明確指出；若不確定，填 `不確定` |
| 希望處理方式 | 若只要求判斷，不得直接改檔；若要求實際更新，也要先列出判斷 |
| 補充限制 | 例如不要處理其他章節、不要重生成、只檢查資產路徑 |

如果輸入缺少關鍵資訊，應先從 repo 中可查證的資料判斷；仍無法確認時，將對應項目標為 `待確認`，不要自行假設已完成或已同步。

## 使用邊界

- 先判斷最新正確內容在哪一層，再判斷其他層是否需要同步。
- 不把 `origin/` 直接當作正式教學筆記。
- 不把 `atomic/` 直接當作最終可閱讀筆記。
- 不把 `appendix/`、`demos/`、`projects/`、`practice/`、`review/`、`supplements/` 當作核心知識的正式來源。
- 不把 `meta/chapter-status.md` 當作流程歷史紀錄；它只保存章節狀態總覽。
- 下游材料只能延伸已完成內容審查且已完成索引元資料的 `notes/`，不能自行新增核心知識。
- `projects/` 是跨章節整合層，以專案為鍵，不佔用 `meta/chapter-status.md` 的章節列；其反向追溯需查 `meta/projects-index.md`。
- 若只是判斷影響範圍，只提出「需要檢查」、「候選同步」、「候選重生成」與「狀態標記建議」，不代表已經執行。
- 判斷前應優先查閱使用者指定的檔案、同章節上下游檔案、`meta/chapter-status.md`、必要的章節 log；若 `notes/` 改動可能影響跨章節專案，還要查 `meta/projects-index.md`。
- 若找不到足夠依據，應輸出 `待確認` 或 `暫緩`，不能假設內容已同步。

## 核心口訣

```text
改 origin，要想到 atomic。
改 atomic，要想到 notes。
改 notes，要想到 notes 索引元資料、所有單章下游與跨章節 projects。
改 notes 索引元資料，要想到下游生成閘門與 projects 前置條件。
改下游，要先確認 notes 是否才是問題來源。

改標題，要想到 appendix 與 anchor。
改範例，要想到 demos / projects / practice / review。
改資產，要想到所有引用路徑。
下游新增新知識，要先回補 notes。

上游變動，不代表全部重跑；
但下游未檢查，不能假設最新。
projects 不以章節為鍵；
notes 變動時要用 projects-index 反查。
```

## HTML 筆記包資料流

```text
origin/<章節>/*.md
origin/<章節>/assets/
  ↓
資料整理
  - 資產命名
  - alt 與連結文字整理
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
notes 索引元資料（notes-index-metadata）
  ↓
appendix/  demos/  practice/  review/  supplements/
  ↓
最終驗收（chapter-final-acceptance）
```

這是單章節主要判斷順序，不代表每次都要全部重跑。未受影響的層級可以略過。

`projects/` 是跨章節整合層，不在單章節資料流內；它以多篇 `notes/` 為來源，狀態與反向追溯記錄於 `meta/projects-index.md`。

## 各層責任

| 層級 | 主要責任 | 是否可作為正式知識來源 |
| --- | --- | --- |
| `origin/` | 保存原始筆記、原始素材與章節來源 | 可作為原始來源，不直接作為正式教學筆記 |
| `origin/<章節>/assets/` | 保存圖片、PDF、Excel、Word 等附件 | 可作為原始素材來源 |
| 資料整理 | 資產命名（含實體檔案改名與引用路徑同步更新）、alt 與連結文字整理 | 否 |
| atomic 切分提案與產生 | 將 `origin/` 內容切分、合併、修正為候選原子內容，產出寫入 `atomic/` | 否 |
| `atomic/` | 保存可重組的單一概念候選內容 | 可作為概念來源，不直接作為最終筆記 |
| atomic review | 檢查 atomic 正確性、完整性，並標出切分風險；切分風險轉交 atomic 切分提案與產生處理，不在 atomic review 內直接修正 | 否 |
| `notes/` | 保存可閱讀、可教學、可回查的正式筆記 | 是 |
| notes content review | 檢查 notes 是否達到正式教學品質 | 否 |
| notes 索引元資料 | 為 notes front matter 補上 `topics` 與 `summary`，支援下游定位與 projects 前置檢查 | 否 |
| `appendix/` | 索引、查表資料 | 否，應回連 notes |
| `demos/` | 可執行教學範例 | 否，應延伸 notes |
| `projects/` | 跨章節多篇 notes 的整合專案 | 否，應組裝 `source_notes` 所列 notes 的已教內容聯集 |
| `practice/` | 練習題、實作任務與答案來源 | 否，應延伸 notes |
| `review/` | 重點摘要、問答題、填空題與複習卡片 | 否，應延伸 notes |
| `supplements/` | 補充資料 | 否，應延伸 notes；若發現正式知識缺口，應回到正式筆記流程檢查 |
| `meta/chapter-status.md` | 章節狀態總覽 | 否 |
| `meta/chapter-logs/<章節名稱>.md` | 章節詳細流程歷史 | 否 |
| `meta/projects-index.md` | projects 反向追溯與索引 | 否；由 `scripts/build-projects-index.mjs` 產生，不手動編輯 |

## 更新判斷總則

### 1. 先判斷更新類型

| 更新類型 | 主要位置 | 常見後續檢查 |
| --- | --- | --- |
| 新增或修正原始資料 | `origin/` | `atomic/`, `notes/`, 下游材料 |
| 資產新增、改名、搬移或引用修正 | `origin/<章節>/assets/` | 所有引用該資產的位置 |
| 單一概念新增、拆分或修正 | `atomic/` | `atomic review`, `notes/`, 下游材料 |
| 教學筆記新增、重組或修正 | `notes/` | `notes content review`, `notes 索引元資料`, 所有單章下游材料與命中的 `projects/` |
| notes front matter 索引更新 | `notes/` | `notes 索引元資料`, 下游定位、`projects/` 前置條件 |
| 索引、查表資料更新 | `appendix/` | 確認是否只延伸 `notes/` |
| 教學範例更新 | `demos/` | 確認是否來自 `notes/`，並檢查資產路徑 |
| 跨章節整合專案更新 | `projects/` | 確認是否只組裝 `source_notes` 已教範圍，並檢查 `meta/projects-index.md` |
| 練習題或答案更新 | `practice/` | 確認題目、答案與來源是否對應 `notes/` |
| 重點摘要、問答題、填空題或複習卡片更新 | `review/` | 確認複習內容是否對應 `notes/` |
| 補充資料更新 | `supplements/` | 確認補充是否延伸 `notes/`，若涉及核心知識缺口應回補正式流程 |
| 章節狀態同步 | `meta/chapter-status.md` | 確認只更新狀態，不改變欄位結構 |
| projects 索引同步 | `meta/projects-index.md` | 確認由 `scripts/build-projects-index.mjs` 產生，不手動編輯 |

### 2. 先找最新正確來源

更新前先判斷最新正確內容在哪一層：

```text
origin 改了 → 檢查 atomic / notes 是否過期
atomic 改了 → 檢查 notes 是否過期
notes 改了 → 檢查 notes 索引元資料、appendix / demos / practice / review / supplements 是否過期，並用 projects-index 反查 projects
notes 索引元資料改了 → 檢查下游生成閘門與 projects 前置條件
下游改了 → 先判斷問題是否源自 notes 或更上游
projects 改了 → 先判斷問題是否源自 source_notes 或 projects 本身
```

若無法確認最新正確來源，應暫緩更新或標記為待確認。

### 3. 上游優先於下游

如果一項更新同時影響上游與下游，應先更新正式來源，再更新衍生內容。

如果下游內容發現上游缺漏或錯誤，應先回到主要責任位置修正，再重新檢查受影響的下游。

### 4. 下游不得自行新增核心知識

`appendix/`、`demos/`、`projects/`、`practice/`、`review/`、`supplements/` 只能延伸或組裝 `notes/` 已經教過的內容。

如果下游需要加入新觀念：

```text
先確認 notes 是否已包含該觀念
  ↓
若 notes 沒有，先補 notes
  ↓
完成 notes content review
  ↓
完成 notes 索引元資料
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
- 是否影響 `notes` front matter 的 `topics`、`summary` 或來源追溯
- 是否影響標題、anchor、關鍵字或引用路徑
- 是否影響資產、圖片、附件或來源連結
- 是否影響 `appendix/`、`demos/`、`practice/`、`review/`、`supplements/`
- 是否有 `projects/` 透過 `meta/projects-index.md` 命中這次改動的 `notes/`

## 各層更新判斷

| 如果更新了 | 應檢查 |
| --- | --- |
| `origin/` | 是否影響 `atomic/` 的概念、來源追溯、切分方式或事實正確性 |
| `origin/<章節>/assets/` | 是否有任何層級仍引用舊路徑、舊檔名、錯誤 alt 或錯誤連結文字 |
| `atomic/` | 是否影響 `notes/` 的說明、教學順序、標題或範例 |
| `notes/` | 是否影響 `notes 索引元資料`、`appendix/`、`demos/`、`practice/`、`review/`、`supplements/`，以及 `meta/projects-index.md` 中命中的 `projects/` |
| notes 索引元資料 | 是否影響下游定位、`projects/` 前置條件或 `source_notes` 反查 |
| `appendix/` | 是否只是索引或摘要更新；若涉及正式內容，應回到 `notes/` |
| `demos/` | 是否超出 notes 已教範圍，或是否需要回補 notes |
| `projects/` | 是否只組裝 `source_notes` 已教內容聯集；若 `project.md` 來源變動，是否需要重建 `meta/projects-index.md` |
| `practice/` | 題目、答案、提示與來源是否仍對應 notes |
| `review/` | 重點摘要、問答題、填空題、複習卡片與解析是否仍對應 notes |
| `supplements/` | 是否超出 notes 已教範圍；若是，應回到 `origin/`、`atomic/`、`notes/` 的正式流程判斷，不直接由 supplements 回補 |
| `meta/chapter-status.md` | 是否只更新既有欄位與狀態值，不改變欄位結構 |
| `meta/projects-index.md` | 是否由 `scripts/build-projects-index.mjs` 重建；不可手動編輯 |
| 最終驗收 | 若任何已驗收章節的上游或下游重新更新，是否需將「最終驗收」列為待確認或候選重新驗收 |

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
projects 引用或自帶 assets
practice / review / supplements 中的圖片、附件或來源連結
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
| origin | `origin 整理` |
| asset | `資產命名`, `alt 與連結文字` |
| atomic | `atomic 切分提案`, `atomic 產生` |
| atomic review | `atomic 內容審查` |
| notes generation | `notes 生成` |
| notes content review | `notes 完成檢查` |
| notes index metadata | `notes 索引元資料` |
| demos | `demos 生成` |
| practice | `practice 生成` |
| review | `review 生成` |
| appendix | `appendix 索引` |
| final check | `最終驗收` |

`projects/` 不對應 `meta/chapter-status.md` 的章節欄位；其狀態與反向追溯應透過 `projects/<專案-slug>/project.md` 與自動產生的 `meta/projects-index.md` 判斷。

`完成率`、`整體狀態`、`下一步`、`備註` 為整體摘要欄位，非單一維護概念的狀態值欄位，通常於完成最終驗收後一併更新；其中 `下一步`、`備註` 的填寫方式見下節「摘要與詳細紀錄分工」。

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
6. 完成或重新檢查 `notes 索引元資料`。
7. 最後檢查 `appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 是否受影響。
8. 用 `meta/projects-index.md` 反查是否有 `projects/` 命中受改動的 `notes/`。
9. 若章節已完成最終驗收，將「最終驗收」列為待確認或候選重新驗收。
10. 若實際完成更新，再同步 `meta/chapter-status.md`。

### notes 或下游更新

1. 先確認問題是否真的只在下游。
2. 如果問題源自 notes，先修正 `notes/`。
3. 完成 notes content review。
4. 完成或重新檢查 notes 索引元資料。
5. 再檢查或同步受影響的單章下游。
6. 若 `notes/` 有改動，用 `meta/projects-index.md` 找出受影響的 `projects/`。
7. 若章節已完成最終驗收，將「最終驗收」列為待確認或候選重新驗收。
8. 最後更新章節狀態總覽。

### projects 更新

1. 確認改動是否只在 `projects/<專案-slug>/`，或源自某些 `source_notes`。
2. 讀取 `projects/<專案-slug>/project.md` 的 `source_notes` 與 `prerequisites`。
3. 確認所有來源章節的「notes 索引元資料」是否已完成。
4. 若專案來源、topics、summary 或 prerequisites 改動，候選重建 `meta/projects-index.md`。
5. 若專案內容引入 notes 未教過的新知識，回到對應 `notes/` 或更上游流程判斷，不直接在 projects 補核心知識。

### 資產更新

1. 確認資產最新檔名、位置與用途。
2. 搜尋舊檔名與舊路徑。
3. 檢查 origin、atomic、notes、appendix、demos、projects、practice、review、supplements 是否仍引用舊路徑。
4. 若實際修正引用，再更新相關狀態欄位。

## 暫緩更新的情況

遇到以下情況時，應先暫緩更新或只記錄待確認事項：

- 無法判斷最新正確來源。
- 無法判斷改動屬於哪一層。
- 無法確認下游內容是否超出 notes 已教範圍。
- 資產是否仍被引用無法確認。
- 標題或 anchor 改動是否影響 appendix 無法確認。
- `notes/` 改動但無法確認是否有 `projects/` 透過 `source_notes` 命中。
- `projects/` 改動但 `meta/projects-index.md` 不存在、過期或無法反查。
- notes 索引元資料是否已完成無法確認。
- 章節狀態與實際檔案內容不一致。
- 只是想同步狀態，但缺少實際完成依據。
- 備註欄已累積太多流程歷史，應先移入章節 log。

## 更新前檢查清單

每次更新前，先檢查：

- 這次改動發生在哪一層？
- 這次改動屬於哪一種更新類型？
- 最新正確來源在哪裡？
- 是否影響正式 `notes/`？
- 是否影響 `notes 索引元資料`？
- 是否影響標題、anchor、關鍵字或索引？
- 是否影響圖片、附件、資產路徑、alt 或連結文字？
- 是否影響 `appendix/`、`demos/`、`practice/`、`review/`、`supplements/`？
- 是否影響 `projects/`，或需要查 `meta/projects-index.md`？
- 若已完成最終驗收，是否需要重新驗收或標為待確認？
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
projects-index.md 建議檢查：
建議更新順序：
不應更新的位置：
待確認事項：
```

填寫規則：

- 每個欄位都必須填寫；沒有內容時填 `無` 或 `不適用`。
- 無法從現有資料確認時填 `待確認`，不要留空。
- `是否需要更新` 只能填 `是`、`否` 或 `暫緩`。
- `候選同步 / 候選重生成範圍` 只列出受影響或需要確認的位置，不列出整個 repo。
- `chapter-status.md 建議標記` 只能提出建議，不代表已經更新狀態表。
- `projects-index.md 建議檢查` 應說明是否需要讀取、反查或重建 `meta/projects-index.md`；若與本次無關，填 `不適用`。
- `不應更新的位置` 應列出本次不應觸碰的上游、下游或其他章節。

這個結論只用來規劃更新，不代表必須自動修改任何檔案。

## 判斷範例

完整的逐步範例（輸入格式、判斷過程與結論輸出）請參考同資料夾下的 [`example.md`](./example.md)。
