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

AI 執行任務時，應先回報影響範圍與預計處理流程，再進行大範圍重生成或狀態同步。

### 2.3 常見任務類型

| 任務類型 | 你的處理重點 |
| --- | --- |
| 小型文字修正 | 判斷是否影響標題、anchor、關鍵字與下游引用 |
| 技術概念修正 | 找出最新正確來源，更新 notes，檢查所有下游 |
| 章節重構 | 重產 atomic、執行 atomic review，再重產 notes 與下游 |
| 資產重整 | 檢查資產路徑、alt、連結文字與所有引用 |
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
| `notes/` | 正式教學筆記 | 是 | 作為 appendix / demos / practice / review 的正式來源 |
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

資產改動時必查：

```text
origin 引用
atomic 引用
notes 引用
demos 引用
appendix 連結
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

當使用者要你判斷某次改動影響範圍時，請優先使用以下格式：

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

### 5.2 最小輸出格式

如果使用者只要求快速判斷，使用以下最小格式：

```text
1. 需要檢查的下游
2. 需要重生成的下游
3. meta/chapter-status.md 應標記的狀態
4. 是否有過期內容風險
```

### 5.3 影響範圍總表

| 改動位置 | 小修文字 | 技術概念改動 | 結構改動 | 範例改動 | 資產 / 標題改動 |
| --- | --- | --- | --- | --- | --- |
| `origin/` | 檢查 atomic / notes 是否也有同錯誤 | 更新 atomic → atomic review → notes → 下游 | 更新 atomic → atomic review → notes → 下游 | 視是否進入 notes | 檢查所有引用路徑 |
| `atomic/` | 檢查 notes | 更新 notes → 下游 | 更新 notes → appendix，檢查 demos / practice / review | 視 notes 是否受影響 | 檢查 notes 路徑 |
| `notes/` | 通常不重跑下游 | 更新 appendix / practice / review，檢查 demos | 更新 appendix，檢查 demos / practice / review | 更新 demos，檢查 practice / review | 標題改動必查 appendix |
| `appendix/` | 可直接修 | 先查 notes 是否缺漏 | 先查 notes | 不直接新增教學內容 | 檢查 anchor |
| `demos/` | 可直接修 | 先查 notes 是否已教 | 視情況 | 可直接修，但不得超出 notes | 檢查引用路徑 |
| `practice/` | 可直接修 | 先查 notes 與答案來源 | 視情況 | 檢查題目與答案 | 檢查來源連結 |
| `review/` | 可直接修 | 先查 notes | 視情況 | 檢查題庫與錯題回流 | 檢查來源連結 |

---

## 6. 範例 Examples

### 6.1 範例一：`origin/` 小修文字

使用者輸入：

```text
我修正了 origin/forms/input.md 裡的一個錯字，請判斷是否需要重生成。
```

建議輸出：

```text
## 1. 改動摘要

改動位置：origin/forms/input.md
改動類型：小修文字

## 2. 最新正確來源

最新正確來源在 origin。

## 3. 影響範圍

通常不需要全部重跑，但需要檢查 atomic / notes 是否也有相同錯字。

## 4. 需要檢查的下游

- atomic
- notes
- 若錯字出現在標題或 anchor，需檢查 appendix

## 5. 需要重生成的下游

目前不一定需要重生成，除非 atomic / notes 已同步更新且影響下游內容。

## 6. meta/chapter-status.md 建議標記

若僅修正 origin 且下游尚未確認，可將 atomic / notes 相關欄位標記為「待確認」。
```

### 6.2 範例二：`notes/` 新增 HTML 範例

使用者輸入：

```text
我在 notes/form/input.md 新增了一個 input type="email" 的範例，請判斷影響範圍。
```

建議輸出：

```text
## 1. 改動摘要

改動位置：notes/form/input.md
改動類型：範例改動

## 2. 最新正確來源

最新正確來源在 notes。

## 3. 影響範圍

notes 是 demos / practice / review / appendix 的正式來源。
新增 HTML 範例後，demos、practice、review 都可能需要檢查。

## 4. 需要檢查的下游

- demos：是否需要新增對應展示範例
- practice：是否需要新增或調整練習題
- review：是否需要加入複習卡片或題目
- appendix：若新增標題或索引項目，需同步更新

## 5. 需要重生成的下游

視需求重生成：
- demos
- practice
- review
- appendix

## 6. meta/chapter-status.md 建議標記

將受影響的 demos / practice / review / appendix 欄位標記為「待確認」。
```

### 6.3 範例三：資產改名或搬移

使用者輸入：

```text
我把 origin/table/assets/old-table.png 改名為 table-layout-example.png。
```

建議輸出：

```text
## 1. 改動摘要

改動位置：origin/<章節>/assets/
改動類型：資產改動

## 2. 影響範圍

資產改名不能只改檔案本身，必須同步所有引用路徑。

## 3. 需要檢查的下游

- origin 引用
- atomic 引用
- notes 引用
- demos 引用
- appendix 連結

## 4. 需要執行的流程

1. 執行 prompts/requests/rewrite-origin-asset-paths.md
2. 執行 prompts/requests/rewrite-origin-alt-and-link-text.md
3. 檢查 atomic / notes / demos / appendix 是否仍引用舊路徑

## 5. meta/chapter-status.md 建議標記

若尚未檢查引用路徑，相關欄位標記為「待確認」。
```

### 6.4 範例四：下游想新增新觀念

使用者輸入：

```text
我想直接在 practice 新增一題 notes 沒教過的 CSS Grid 題目，可以嗎？
```

建議輸出：

```text
不建議直接新增。

原因：practice 只能延伸 notes 已經教過的內容，不能自行新增核心知識。

建議流程：

1. 先確認 notes 是否已有 CSS Grid 相關內容
2. 如果 notes 沒有，先補 notes
3. 再根據 notes 產生 practice
4. 最後檢查 review 是否也需要同步
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

- [ ] 下游內容是否根據最新 `notes/` 產生
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

每次完成更新或重生成後，都要同步 `meta/chapter-status.md`。

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
| `notes` | `notes生成`、`notes完成檢查` |
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
notes 已產生並檢查
appendix 已根據 notes 建立
demos 已根據 notes 建立或確認不需要
practice 已根據 notes 建立
review 已根據 notes 建立
meta/chapter-status.md 已同步更新
```

如果某一層不需要產出，必須在 `meta/chapter-status.md` 備註原因。

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
修正 origin / atomic / notes
  → 更新 notes
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
  → 重產 appendix
  → 重產 demos / practice / review
  → 更新 meta/chapter-status.md
```

### 8.4 資產重整

```text
整理 origin/<章節>/assets/
  → 執行 prompts/requests/rewrite-origin-asset-paths.md
  → 執行 prompts/requests/rewrite-origin-alt-and-link-text.md
  → 檢查 atomic / notes / demos / appendix 引用
  → 更新 meta/chapter-status.md
```

---

## 9. 給 AI 使用時的最小輸入

與 AI 協作時，不需要每次貼完整筆記。優先提供以下資訊：

```text
1. 章節名稱
2. 改動位置：origin / origin/<章節>/assets / atomic / notes / appendix / demos / practice / review / supplements
3. 任務 / 改動類型：初次產物製作 / 小修 / 技術概念 / 結構 / 範例 / 資產 / 標題
4. 改動摘要
5. 你希望 AI 判斷什麼
```

提問範本：

```text
請依 meta/update-rules.md 協助處理這次 HTML 筆記包更新。

1. 章節名稱：
2. 改動位置：
3. 任務 / 改動類型：
4. 改動摘要：
5. 我希望 AI 判斷或處理：
6. 限制條件：
   - 是否只判斷、不改檔：
   - 是否允許重生成：
   - 是否需要同步 meta/chapter-status.md：

請先判斷影響範圍，再說明需要檢查或重生成的內容。
```

---

## 10. 快速口訣

```text
改 origin，要想到 atomic。
改 atomic，要想到 notes。
改 notes，要想到所有下游。
改標題，要想到 appendix。
改範例，要想到 demos / practice / review。
改資產，要想到所有引用路徑。
下游新增新知識，要先回補 notes。
不確定是否過期，要標記待確認，並寫明需檢查或需更新的內容。
```

---

## 11. 一句話總結

```text
先找改動位置，再判斷改動類型；
只重跑必要下游，但不能讓下游停留在舊版本。
```
