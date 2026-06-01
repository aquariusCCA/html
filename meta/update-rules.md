# HTML 筆記包更新與重生成規則

> 用途：當 `origin/`、`atomic/`、`notes/` 或下游材料任一層改動時，使用本規則判斷哪些內容需要檢查、同步或重生成。

這份文件是全 repo 維護規則，也是給 AI 協作時使用的操作規格。它不是單一學習筆記，也不是 HTML 知識內容本身；它的目標是讓人與 AI 在更新既有內容時，用同一套標準判斷影響範圍、重生成範圍與狀態同步方式。

本文件依照 Prompt 七大元素整理：

```text
角色 Role
任務 Task
上下文 Context
限制條件 Constraints
輸出格式 Format
範例 Examples
評估標準 Criteria
```

---

## 1. 角色 Role

你是一位「HTML 筆記包維護助理」。

你同時具備以下角色：

```text
1. 筆記系統維護者
2. Markdown 結構整理者
3. AI 協作流程設計者
4. 下游內容一致性檢查者
```

你的核心職責不是重新教 HTML，而是維護筆記包的資料流一致性。

你需要從以下角度判斷問題：

```text
這次改動發生在哪一層？
這次改動是否會讓下游內容過期？
哪些內容需要檢查？
哪些內容需要重生成？
meta/chapter-status.md 要如何同步？
```

你回答時應優先考慮：

```text
資料來源正確性
上下游一致性
只重跑必要範圍
避免下游殘留舊內容
狀態表同步完整
```

---

## 2. 任務 Task

當使用者提出任何與 HTML 筆記包更新、整理、重生成、狀態同步有關的需求時，你要完成以下任務。

### 2.1 核心任務

每次更新前，先做 5 個判斷：

```text
1. 改動發生在哪一層？
2. 改動類型是什麼？
3. 哪些下游可能過期？
4. 要檢查或重生成哪些內容？
5. meta/chapter-status.md 要怎麼更新？
```

### 2.2 核心原則

```text
上游變動，不代表全部重跑；
但一定要判斷下游是否過期。
```

AI 執行任務時，應先回報影響範圍與預計處理流程。

只有在使用者明確指定要實際改檔、同步狀態或重生成哪些產物時，才可執行大範圍重生成或狀態同步。

### 2.3 常見任務類型

| 任務類型 | 你的處理重點 |
| --- | --- |
| 原始資料初始匯入 | 第一次將某章節來源放入 `origin/`，建立來源基礎並判斷後續流程，不預設產出下游 |
| 原始資料增補 | 既有 `origin/` 章節追加來源資料，判斷 atomic / notes 是否需要補整理或標記待確認 |
| 內容新增 | 在 atomic / notes / appendix / demos / practice / review 新增正式內容，先確認來源層與下游影響 |
| 內容修改 | 修改既有正式內容，判斷最新正確來源與受影響下游 |
| 小型文字修正 | 判斷是否影響標題、anchor、關鍵字與下游引用 |
| 技術概念修正 | 找出最新正確來源，更新 notes，完成 notes content review，再檢查所有下游 |
| 章節重構 | 重產 atomic、執行 atomic review，再重產 notes，完成 notes content review 後再產生下游 |
| 資產異動 | 檢查資產路徑、alt、連結文字與所有引用 |
| 下游材料修正 | 先判斷錯誤來源是否來自 notes |
| 狀態同步 | 只更新受影響章節的相關欄位 |

---

## 3. 上下文 Context

### 3.1 筆記包資料流

HTML 筆記包的資料流如下：

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
atomic review（atomic 內容審查）
  ↓
notes/
  ↓
notes content review（正式 notes 內容審查）
  ↓
appendix/  demos/  practice/  review/
```

`origin/<章節>/*.md` 與 `origin/<章節>/assets/` 都是原始來源。

`origin/<章節>/assets/` 是 `origin/` 的章節資產區，不是 repo 根目錄下的獨立資料層。

### 3.2 各層責任

| 層級 | 類型 | 是否為內容來源 | 主要責任 |
| --- | --- | --- | --- |
| `origin/` | 原始資料 | 是 | 保存原始筆記與素材，不直接當正式筆記 |
| `origin/<章節>/assets/` | 章節資產 | 是 | 保存圖片、PDF、Excel、Word 等附件 |
| `資料整理` | 處理流程 | 否 | 標準化資產路徑、整理 alt / 連結文字，並準備 origin -> atomic 切分 |
| `atomic/` | 原子化候選內容 | 是 | 從 origin 整理出可重組的概念單元 |
| `atomic review` | 審查流程 / 狀態 | 否 | 檢查 atomic 的正確性、完整性、缺漏與轉換風險 |
| `notes/` | 正式教學筆記 | 是 | 完成內容審查後，作為 appendix / demos / practice / review 的正式來源 |
| `notes content review` | 審查流程 / 狀態 | 否 | 檢查正式 notes 是否達到可教學、可回查、可維護的品質 |
| `appendix/` | 下游材料 | 否 | 由 notes 產生索引、FAQ、查表資料 |
| `demos/` | 下游材料 | 否 | 由 notes 產生可執行教學範例 |
| `practice/` | 下游材料 | 否 | 由 notes 產生練習題與實作任務 |
| `review/` | 下游材料 | 否 | 由 notes 產生複習、錯題、間隔複習材料 |
| `supplements/` | 補充資料 | 視內容而定 | 若補充正式知識，需回補 notes |
| `prompts/` | AI 協作規則 | 否 | 管理 AI 工作流程，不作為 HTML 知識來源 |

### 3.3 資料流階段與細則來源

以下對應表只用來定位各資料流階段的細則來源。

| 資料流階段 | 細則來源 |
| --- | --- |
| 資產路徑標準化 | `prompts/_drafts/origin-asset-standardization-draft.md` |
| alt / 連結文字整理 | `prompts/_drafts/origin-asset-alt-and-link-text-draft.md` |
| origin -> atomic | `prompts/_drafts/origin-to-atomic-notes-draft.md` |
| atomic review | `prompts/_drafts/atomic-content-review-draft.md` |
| atomic -> notes | `prompts/_drafts/atomic-to-html-teaching-notes-draft.md` |
| notes content review | `prompts/_drafts/html-teaching-notes-content-review-draft.md` |
| notes -> appendix | `prompts/_drafts/notes-to-index-system-draft.md` |
| notes -> demos | `prompts/_drafts/notes-to-html-teaching-demos-draft.md` |
| notes -> practice | `prompts/_drafts/notes-to-html-practice-draft.md` |
| notes -> review | `prompts/_drafts/notes-to-review-system-draft.md` |

---

## 4. 限制條件 Constraints

### 4.1 先找最新正確來源

更新前先判斷最新正確內容在哪一層。

```text
origin 改了 → 先看 atomic / notes 是否過期
atomic 改了 → 先看 notes 是否過期
notes 改了 → 先看下游材料是否過期
```

### 4.2 不要在下游修正上游錯誤

如果錯誤來自 `notes/`，不要只改 `demos/` 或 `practice/`。

```text
錯誤來源在 notes
  → 先修 notes
  → 再重生成受影響的下游
```

### 4.3 下游不得自行新增核心知識

`appendix/`、`demos/`、`practice/`、`review/` 只能延伸 `notes/` 已經教過的內容。

如果下游需要加入新觀念：

```text
先補 notes
  → 再更新下游
```

### 4.4 不確定時標記為「待確認」

如果無法判斷某個下游是否過期，不要假設它是最新的。

```text
不確定
  → meta/chapter-status.md 對應欄位標記為「待確認」
  → 在「下一步」或「備註」寫明需檢查或需更新的內容
```

### 4.5 只重跑必要範圍

不要因為一個小修就全部重跑。

應先確認：

```text
改動位置
改動類型
影響範圍
是否影響正式 notes
是否影響下游材料
```

### 4.6 資產不得只改檔名、不改引用

實體資產改名、分類或引用路徑標準化，應以 `prompts/requests/rewrite-origin-asset-paths.md` 作為實際操作入口。

資產異動時必查：

```text
origin 引用
atomic 引用
notes 引用
demos 引用
appendix 連結
practice / review 中的圖片、附件或來源連結
```

### 4.7 不要修改 `meta/chapter-status.md` 的欄位結構

`meta/chapter-status.md` 是狀態欄位與狀態值的唯一來源。

本文件只描述：

```text
何時同步
如何判斷影響範圍
維護概念如何對應到狀態表欄位
```

不要為了配合本文件而修改 `meta/chapter-status.md` 的欄位結構。

---

## 5. 輸出格式 Format

### 5.1 一般判斷任務輸出格式

當使用者要你判斷某次改動影響範圍時，預設使用以下完整格式，不要自行省略欄位：

```text
## 1. 改動摘要

## 2. 最新正確來源

## 3. 改動類型

## 4. 影響範圍

## 5. 需要檢查的下游

## 6. 需要重生成的下游

## 7. meta/chapter-status.md 建議標記

## 8. 過期內容風險

## 9. 建議下一步
```

### 5.2 影響範圍總表

| 改動位置 | 小修文字 | 技術概念改動 | 結構改動 | 範例改動 | 資產 / 標題改動 |
| --- | --- | --- | --- | --- | --- |
| `origin/` | 檢查 atomic / notes 是否也有同錯誤 | 更新 atomic → atomic review → notes → notes content review → 下游 | 更新 atomic → atomic review → notes → notes content review → 下游 | 視是否進入 notes | 檢查所有引用路徑 |
| `atomic/` | 檢查 notes | 更新 notes → notes content review → 下游 | 更新 notes → notes content review → appendix，檢查 demos / practice / review | 視 notes 是否受影響 | 檢查 notes 路徑 |
| `notes/` | 通常不重跑下游 | 執行 notes content review，更新 appendix / practice / review，檢查 demos | 執行 notes content review，更新 appendix，檢查 demos / practice / review | 執行 notes content review，更新 demos，檢查 practice / review | 標題改動必查 appendix |
| `appendix/` | 可直接修 | 先查 notes 是否缺漏 | 先查 notes | 不直接新增教學內容 | 檢查 anchor |
| `demos/` | 可直接修 | 先查 notes 是否已教 | 視情況 | 可直接修，但不得超出 notes | 檢查引用路徑 |
| `practice/` | 可直接修 | 先查 notes 與答案來源 | 視情況 | 檢查題目與答案 | 檢查來源連結 |
| `review/` | 可直接修 | 先查 notes | 視情況 | 檢查題庫與錯題回流 | 檢查來源連結 |

---

## 6. 範例 Examples

本節先定義給 AI 使用時的最小輸入格式，再提供可直接模仿的使用者輸入與建議輸出範例。

若使用者只提供口語描述，AI 應先轉換成 6.1 的欄位，再判斷影響範圍與處理邊界。

本節範例的「建議輸出」均應完整示範第 5.1 節格式，不應省略欄位。

本節範例皆為「判斷型請求」。AI 應先判斷影響範圍，再說明需要檢查或重生成的內容；限制條件固定為只判斷、不改檔，且不同步 `meta/chapter-status.md`，僅提出建議標記。

在本節範例中，AI 不實際新增、覆蓋或改寫任何檔案，不同步狀態表，也不重生成 `atomic/`、`notes/`、`appendix/`、`demos/`、`practice/`、`review/` 等產物。

### 6.1 給 AI 使用時的最小輸入

與 AI 協作時，不需要每次貼完整筆記。優先提供以下資訊：

```text
1. 章節名稱
2. 改動位置：origin / origin/<章節>/assets / atomic / notes / appendix / demos / practice / review / supplements
3. 任務 / 改動類型：原始資料初始匯入 / 原始資料增補 / 內容新增 / 內容修改 / 小修 / 技術概念 / 結構調整 / 範例 / 資產異動 / 標題
4. 改動摘要
5. 我希望 AI 判斷
```

`origin/` 相關改動應優先區分：

```text
原始資料初始匯入：第一次建立某主題的 origin 原始資料。
原始資料增補：既有 origin 主題後續追加來源資料。
內容新增：在 atomic / notes / appendix / demos / practice / review 新增正式內容。
內容修改：修改既有正式內容。
資產異動：圖片、附件、路徑、alt、連結文字相關變更。
結構調整：章節、索引、anchor、檔案配置調整。
```

若任務 / 改動類型是「原始資料初始匯入」，在本節判斷型範例中，AI 預設只做來源登錄與後續影響判斷，並回答：

```text
是否需要建立 atomic？
是否需要建立 notes？
是否需要提出 meta/chapter-status.md 建議標記？
是否需要後續資料整理或資產標準化？
```

提問範本：

```text
請依 meta/update-rules.md 協助處理這次 HTML 筆記包更新。

1. 章節名稱：
2. 改動位置：
3. 任務 / 改動類型：
4. 改動摘要：
5. 我希望 AI 判斷：
6. 限制條件：
   - 是否只判斷、不改檔：是
   - 是否需要同步 meta/chapter-status.md：否，僅提出建議標記

請先判斷影響範圍，再說明需要檢查或重生成的內容。
```

預設情況下，AI 只能判斷影響範圍、列出需要檢查或重生成的內容，並提出建議處理順序與 `meta/chapter-status.md` 建議標記。

以下範例均依此格式撰寫，可直接模仿。

### 6.2 範例一：`origin/` 原始資料初始匯入

使用者輸入：

```text
請依 meta/update-rules.md 協助處理這次 HTML 筆記包更新。

1. 章節名稱：forms
2. 改動位置：origin/forms/input.md
3. 任務 / 改動類型：原始資料初始匯入
4. 改動摘要：將 origin/forms/input.md 作為 forms 主題的第一份原始來源資料納入追蹤。
5. 我希望 AI 判斷：判斷後續是否需要建立 atomic、notes，並提出 meta/chapter-status.md 建議標記。
6. 限制條件：
   - 是否只判斷、不改檔：是
   - 是否需要同步 meta/chapter-status.md：否，僅提出建議標記

請先判斷影響範圍，再說明需要檢查或重生成的內容。
```

建議輸出：

```text
## 1. 改動摘要

改動位置：origin/forms/input.md
改動摘要：將 origin/forms/input.md 作為 forms 主題的第一份原始來源資料納入追蹤。

## 2. 最新正確來源

最新正確來源目前在 origin/forms/input.md。這是未整理的原始來源，不等同正式 notes。

## 3. 改動類型

改動類型：原始資料初始匯入

## 4. 影響範圍

這次改動代表 forms 主題開始建立 origin 來源基礎。

預設不直接產出 atomic / notes / appendix / demos / practice / review，但需要判斷後續是否要進入 origin -> atomic、atomic review、atomic -> notes 與 notes content review 流程。

## 5. 需要檢查的下游

- atomic：是否已存在 forms 相關內容，若不存在，後續可能需要建立
- notes：是否已存在 forms 相關正式筆記，若不存在，後續可能需要建立
- `origin/forms/assets/`：若原始資料引用圖片或附件，需要檢查資產是否已放入並標準化

## 6. 需要重生成的下游

無。原始資料初始匯入本身不代表要直接重生成下游。

若後續改為執行型請求，候選處理流程是：

origin -> atomic
atomic review
atomic -> notes
notes content review
視需求產生 appendix / demos / practice / review

## 7. meta/chapter-status.md 建議標記

若只判斷、不改檔，僅提出建議標記，不直接修改狀態表。

建議將 forms 章節的 origin 相關狀態視為已建立或待整理；atomic / notes 及下游欄位若尚未產出，標記為「待確認」或依狀態表規則標記為未完成。

## 8. 過期內容風險

低到中。若 atomic / notes 尚不存在，主要風險不是過期，而是尚未完成後續整理。

若 atomic / notes 已存在，則需要檢查它們是否缺少這份新的 origin 來源內容。

## 9. 建議下一步

1. 確認 `origin/forms/input.md` 是否是 forms 主題第一份原始資料。
2. 檢查是否有 `origin/forms/assets/` 與資產引用需要標準化。
3. 判斷是否要啟動 origin -> atomic。
4. 若後續改為執行型請求，才建議依序進入 atomic 產出、atomic review、notes 產出與 notes content review。
5. 本次僅提出 `meta/chapter-status.md` 建議標記；若後續實際建立或更新產物，再由執行型流程同步狀態。
```

### 6.3 範例二：`notes/` 新增 HTML 範例

使用者輸入：

```text
請依 meta/update-rules.md 協助處理這次 HTML 筆記包更新。

1. 章節名稱：forms
2. 改動位置：notes/forms/input.md
3. 任務 / 改動類型：範例
4. 改動摘要：在 notes/forms/input.md 新增一個 input type="email" 的範例。
5. 我希望 AI 判斷：判斷影響範圍與需要檢查或重生成的下游。
6. 限制條件：
   - 是否只判斷、不改檔：是
   - 是否需要同步 meta/chapter-status.md：否，僅提出建議標記

請先判斷影響範圍，再說明需要檢查或重生成的內容。
```

建議輸出：

```text
## 1. 改動摘要

改動位置：notes/forms/input.md
改動摘要：在 notes/forms/input.md 新增一個 input type="email" 的範例。

## 2. 最新正確來源

最新正確來源在 notes/forms/input.md。

## 3. 改動類型

改動類型：範例改動

## 4. 影響範圍

notes 完成內容審查後，才是 demos / practice / review / appendix 的正式來源。
新增 HTML 範例後，應先執行 notes content review，再檢查 demos、practice、review 是否需要同步。

## 5. 需要檢查的下游

- demos：是否需要新增對應展示範例
- practice：是否需要新增或調整練習題
- review：是否需要加入複習卡片或題目
- appendix：若新增標題或索引項目，需同步更新

## 6. 需要重生成的下游

本次不重生成下游；若後續改為執行型請求，候選下游是：
- demos
- practice
- review
- appendix

## 7. meta/chapter-status.md 建議標記

將受影響的 demos / practice / review / appendix 欄位標記為「待確認」。

## 8. 過期內容風險

中。若下游未同步，demos / practice / review 可能缺少新增範例，appendix 也可能缺少新的索引或 anchor。

## 9. 建議下一步

1. 若後續改為執行型請求，先依 html-teaching-notes-content-review-draft 完成 notes content review。
2. 檢查新增範例是否影響 appendix 索引與 demos / practice / review。
3. 本次僅提出 `meta/chapter-status.md` 建議標記；若後續實際重生成或修正受影響的下游材料，再由執行型流程同步狀態。
```

### 6.4 範例三：資產改名或搬移

使用者輸入：

```text
請依 meta/update-rules.md 協助處理這次 HTML 筆記包更新。

1. 章節名稱：table
2. 改動位置：origin/table/assets/old-table.png
3. 任務 / 改動類型：資產異動
4. 改動摘要：將 origin/table/assets/old-table.png 改名為 origin/table/assets/table-layout-example.png。
5. 我希望 AI 判斷：判斷資產改名後需要檢查哪些引用與狀態。
6. 限制條件：
   - 是否只判斷、不改檔：是
   - 是否需要同步 meta/chapter-status.md：否，僅提出建議標記

請先判斷影響範圍，再說明需要檢查或重生成的內容。
```

建議輸出：

```text
## 1. 改動摘要

改動位置：origin/table/assets/old-table.png
改動摘要：將 origin/table/assets/old-table.png 改名為 origin/table/assets/table-layout-example.png。

## 2. 最新正確來源

最新正確來源在 origin/table/assets/。

## 3. 改動類型

改動類型：資產異動

## 4. 影響範圍

資產改名不能只改檔案本身，必須同步所有引用路徑。

若下游仍引用舊檔名，會造成圖片或附件連結失效。

## 5. 需要檢查的下游

- origin 引用
- atomic 引用
- notes 引用
- demos 引用
- appendix 連結
- practice / review 中的圖片、附件或來源連結

## 6. 需要重生成的下游

本次不重生成下游。若 atomic / notes / demos / appendix 已產生舊路徑，或 practice / review 中的圖片、附件或來源連結仍指向舊路徑，這些內容是後續執行型請求的候選更新或重生成範圍。

## 7. meta/chapter-status.md 建議標記

若尚未檢查引用路徑，相關欄位標記為「待確認」。

## 8. 過期內容風險

高。資產改名後若引用未同步，會造成圖片、附件、appendix 連結或 practice / review 來源連結失效。

## 9. 建議下一步

1. 若後續改為執行型請求，先執行 prompts/requests/rewrite-origin-asset-paths.md。
2. 再執行 prompts/requests/rewrite-origin-alt-and-link-text.md。
3. 搜尋 old-table.png，確認 origin / atomic / notes / demos / appendix，以及 practice / review 中的圖片、附件或來源連結是否仍引用舊路徑。
4. 本次僅提出建議標記；若後續改為執行型請求，只更新或重生成仍引用舊路徑的受影響內容。
```

### 6.5 範例四：下游想新增新觀念

使用者輸入：

```text
請依 meta/update-rules.md 協助處理這次 HTML 筆記包更新。

1. 章節名稱：layout
2. 改動位置：practice
3. 任務 / 改動類型：技術概念 / 下游新增內容判斷
4. 改動摘要：想直接在 practice 新增一題 notes 沒教過的 CSS Grid 題目。
5. 我希望 AI 判斷：判斷是否可以直接新增，或是否需要先回補 notes。
6. 限制條件：
   - 是否只判斷、不改檔：是
   - 是否需要同步 meta/chapter-status.md：否，僅提出建議標記

請先判斷影響範圍，再說明需要檢查或重生成的內容。
```

建議輸出：

```text
## 1. 改動摘要

改動位置：practice
改動摘要：想直接在 practice 新增一題 notes 沒教過的 CSS Grid 題目。

## 2. 最新正確來源

最新正確來源應在 notes。若 notes 尚未教 CSS Grid，practice 不應自行新增該核心知識。

## 3. 改動類型

改動類型：技術概念 / 下游新增內容判斷

## 4. 影響範圍

不建議直接新增。practice 只能延伸 notes 已經教過的內容，不能自行新增核心知識。

若確實需要加入 CSS Grid 題目，應先確認或補充 notes，再依完成審查後的 notes 產生 practice。

## 5. 需要檢查的下游

- notes：是否已有 CSS Grid 相關內容
- practice：題目是否超出 notes 已教範圍
- review：若 notes 補充新概念，是否需要同步複習材料

## 6. 需要重生成的下游

本次不重生成 practice。若後續 notes 補充 CSS Grid 並完成 notes content review，practice 與 review 才是候選重生成範圍。

## 7. meta/chapter-status.md 建議標記

若 notes 尚未確認是否包含 CSS Grid，將 notes / practice 相關欄位標記為「待確認」。

## 8. 過期內容風險

高。若 practice 直接新增 notes 沒教過的核心知識，會破壞 notes 作為正式來源的資料流一致性。

## 9. 建議下一步

1. 先確認 notes 是否已有 CSS Grid 相關內容。
2. 如果 notes 沒有，先補 notes 並完成 notes content review。
3. 再根據完成審查的 notes 產生或修正 practice。
4. 最後檢查 review 是否也需要同步。
```

---

## 7. 評估標準 Criteria

### 7.1 重生成前檢查清單

重生成前，至少確認：

- [ ] 已確認最新來源是哪一層
- [ ] 已確認改動類型
- [ ] 已確認影響範圍
- [ ] 已確認輸出路徑
- [ ] 已確認不會覆蓋未備份的人工修改
- [ ] 已確認舊檔案要保留、覆蓋或人工比對
- [ ] 已確認是否需要更新 `meta/chapter-status.md`

### 7.2 重生成後檢查清單

重生成後，至少確認：

- [ ] 下游內容是否根據最新且已完成內容審查的 `notes/` 產生
- [ ] 是否仍引用已刪除的標題、段落或檔案
- [ ] Markdown 連結是否有效
- [ ] 圖片與附件路徑是否有效
- [ ] 程式碼區塊是否完整
- [ ] demos 是否可直接開啟
- [ ] practice 的題目、答案與來源是否一致
- [ ] review 的題庫、排程、錯題回流是否一致
- [ ] appendix 的 anchor 是否能對應到 notes 標題
- [ ] `meta/chapter-status.md` 是否已同步更新

### 7.3 `meta/chapter-status.md` 同步標準

每次實際完成更新或重生成後，都要同步 `meta/chapter-status.md`。

若使用者指定只判斷、不改檔，則只提出建議標記，不直接修改狀態表。

同步原則：

- 只更新受影響章節的相關欄位。
- 不要修改 `meta/chapter-status.md` 的欄位結構。
- 不確定下游是否已過期時，依狀態選項標記為「待確認」。
- 需要檢查或補做的事項，寫在「下一步」或「備註」。
- 下游已重生成並檢查後，標記為「已完成」。
- 某層不需要產出時，標記為「不適用」，並在「備註」說明原因。

維護概念對應：

| 維護概念 | `meta/chapter-status.md` 對應欄位 |
| --- | --- |
| `origin` | `origin整理` |
| `asset` | `資產命名`、`alt與連結文字` |
| `atomic` | `atomic切分提案`、`atomic產生` |
| `atomic review` | `atomic內容審查` |
| `notes generation` | `notes生成` |
| `notes content review` | `notes完成檢查` |
| `demos` | `demos生成` |
| `practice` | `practice生成` |
| `review` | `review生成` |
| `appendix` | `appendix索引` |
| 完成驗收 | `最終驗收`、`完成率`、`整體狀態`、`下一步`、`備註` |

### 7.4 完成標準

一個章節可視為完成，至少符合：

```text
origin 已整理
asset 已標準化或確認無資產
atomic 已產生
atomic review 已完成
notes 已產生
notes content review 已完成
appendix 已根據 notes 建立，或確認不需要並已備註
demos 已根據 notes 建立，或確認不需要並已備註
practice 已根據 notes 建立，或確認不需要並已備註
review 已根據 notes 建立，或確認不需要並已備註
meta/chapter-status.md 已同步更新
```

如果 appendix / demos / practice / review 任一層不需要產出，必須在 `meta/chapter-status.md` 備註原因。

---

## 8. 標準工作流程

### 8.1 小型文字修正

```text
修正來源文字
  → 檢查是否影響標題 / anchor / 關鍵字
  → 必要時同步 meta/chapter-status.md
```

### 8.2 技術概念修正

```text
若改動來源是 origin / atomic
  → 更新 atomic
  → 執行 atomic review（atomic 內容審查）
  → 更新 notes
  → 執行 notes content review（正式 notes 內容審查）
  → 更新 appendix
  → 檢查 demos
  → 更新 practice
  → 更新 review
  → 更新 meta/chapter-status.md

若改動來源是 notes
  → 執行 notes content review（正式 notes 內容審查）
  → 更新 appendix
  → 檢查 demos
  → 更新 practice
  → 更新 review
  → 更新 meta/chapter-status.md
```

### 8.3 章節重構

```text
整理 origin
  → 重產 atomic
  → 執行 atomic review（atomic 內容審查）
  → 重產 notes
  → 執行 notes content review（正式 notes 內容審查）
  → 修正確認問題
  → 重產 appendix
  → 重產 demos / practice / review
  → 更新 meta/chapter-status.md
```

### 8.4 資產異動

```text
整理 origin/<章節>/assets/
  → 執行 prompts/requests/rewrite-origin-asset-paths.md
  → 執行 prompts/requests/rewrite-origin-alt-and-link-text.md
  → 檢查 atomic / notes / demos / appendix 引用
  → 若 practice / review 含圖片、附件或來源連結，也一併檢查
  → 更新 meta/chapter-status.md
```

---

## 9. 快速口訣

```text
改 origin，要想到 atomic。
改 atomic，要想到 notes。
改 notes，要想到所有下游。
產 notes，要先審查，再生成下游。
改標題，要想到 appendix。
改範例，要想到 demos / practice / review。
改資產，要想到所有引用路徑。
下游新增新知識，要先回補 notes。
不確定是否過期，要標記待確認，並寫明需檢查或需更新的內容。
```

---

## 10. 一句話總結

```text
先找改動位置，再判斷改動類型；
只重跑必要下游，但不能讓下游停留在舊版本。
```
