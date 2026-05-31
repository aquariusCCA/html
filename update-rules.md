# HTML 筆記包更新與重生成規則

> 用途：當 `origin/`、`atomic/`、`notes/` 或下游材料任一層改動時，用這份規則判斷哪些內容需要檢查、同步或重生成。

這份文件是全 repo 維護規則。它不是單一 prompt，也不是學習內容本身；它用來讓人與 AI 在更新既有內容時，用同一套方式判斷影響範圍。

---

## 0. 快速使用方式

每次更新先做 5 個判斷：

```text
1. 改動發生在哪一層？
2. 改動類型是什麼？
3. 哪些下游可能過期？
4. 要檢查或重生成哪些內容？
5. chapter-status.md 要怎麼更新？
```

核心原則：

```text
上游變動，不代表全部重跑；
但一定要判斷下游是否過期。
```

AI 執行任務時，應先回報影響範圍與預計處理流程，再進行大範圍重生成或狀態同步。

---

## 1. 筆記包資料流

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

`origin/<章節>/*.md` 與 `origin/<章節>/assets/` 都是原始來源；`origin/<章節>/assets/` 是 `origin/` 的章節資產區，不是 repo 根目錄下的獨立資料層。

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

## 2. 來源規則

### 2.1 先找最新正確來源

更新前先判斷最新正確內容在哪一層。

```text
origin 改了 → 先看 atomic / notes 是否過期
atomic 改了 → 先看 notes 是否過期
notes 改了 → 先看下游材料是否過期
```

### 2.2 不要在下游修正上游錯誤

如果錯誤來自 `notes/`，不要只改 `demos/` 或 `practice/`。

```text
錯誤來源在 notes
  → 先修 notes
  → 再重生成受影響的下游
```

### 2.3 下游不得自行新增核心知識

`appendix/`、`demos/`、`practice/`、`review/` 只能延伸 `notes/` 已經教過的內容。

如果下游需要加入新觀念：

```text
先補 notes
  → 再更新下游
```

### 2.4 不確定時標記為「待確認」

如果無法判斷某個下游是否過期，不要假設它是最新的。

```text
不確定
  → chapter-status.md 對應欄位標記為「待確認」
  → 在「下一步」或「備註」寫明需檢查或需更新的內容
```

### 2.5 只重跑必要範圍

不要因為一個小修就全部重跑。先確認改動類型，再決定範圍。

---

## 3. 改動類型判斷

| 改動類型 | 常見情境 | 影響程度 |
| --- | --- | --- |
| 小修文字 | 錯字、標點、格式、清單縮排 | 低 |
| 技術概念改動 | 修正標籤、屬性、行為、規則、常見錯誤 | 高 |
| 結構改動 | 拆分、合併、重排章節或 atomic | 高 |
| 範例改動 | 新增、刪除、修正 HTML / CSS / JS 範例 | 中到高 |
| 資產改動 | 新增、改名、搬移圖片或附件 | 中 |
| 標題改動 | 修改 H2 / H3 標題 | 中，特別影響 appendix anchor |

---

## 4. 影響範圍總表

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

## 5. 分層更新規則

### 5.1 `origin/` 改動

#### 小修文字

只需要檢查下游是否也存在同樣錯誤。

```text
origin 小修
  → 檢查 atomic 是否也有同樣問題
  → 必要時同步 notes
  → 必要時更新 chapter-status.md
```

#### 新增重要概念、範例或注意事項

需要重新評估整條資料流。

```text
origin 新增重要內容
  → 更新 atomic
  → 使用 prompts/requests/review-atomic-content.md 執行 atomic review
  → 更新 notes
  → 檢查 appendix / demos / practice / review
  → 更新 chapter-status.md
```

#### 刪除、合併或移除錯誤內容

重點是避免下游殘留舊資料。

```text
origin 刪除或合併
  → 更新 atomic
  → 使用 prompts/requests/review-atomic-content.md 執行 atomic review
  → 更新 notes
  → 清除下游過期內容
  → 更新 chapter-status.md
```

---

### 5.2 `origin/<章節>/assets/` 改動

資產命名、分類、hash 與引用路徑細節，以 `prompts/_drafts/origin-asset-standardization-draft.md` 為準；`update-rules.md` 只負責判斷何時需要執行資產標準化流程，以及哪些下游可能過期。

#### 新增資產

```text
新增資產
  → 放入 origin/<章節>/assets/
  → 執行 prompts/requests/rewrite-origin-asset-paths.md
  → 執行 prompts/requests/rewrite-origin-alt-and-link-text.md
  → 檢查 atomic / notes / demos / appendix 是否受影響
```

新增資產必查：

| 檢查項目 | 說明 |
| --- | --- |
| origin 引用 | 不要只放檔案但沒有被 `origin/<章節>/*.md` 引用 |
| 資產標準化 | 是否已依 `prompts/requests/rewrite-origin-asset-paths.md` 完成 |
| alt / 連結文字 | 是否已依 `prompts/requests/rewrite-origin-alt-and-link-text.md` 完成 |
| 下游引用 | atomic / notes / demos / appendix 是否仍引用舊路徑 |

#### 資產改名或搬移

禁止只改檔名、不改引用。實體資產改名、分類或引用路徑標準化，應以 `prompts/requests/rewrite-origin-asset-paths.md` 作為實際操作入口。

必查：

```text
origin 引用
atomic 引用
notes 引用
demos 引用
appendix 連結
```

如果無法確認某個下游是否引用舊路徑，將該下游狀態標記為「待確認」，並在「下一步」或「備註」寫明需檢查引用路徑。

---

### 5.3 `atomic/` 改動

#### 修正技術錯誤

```text
atomic 修正技術錯誤
  → 更新 notes
  → 檢查 appendix / demos / practice / review 是否仍保留舊說法
  → 更新 chapter-status.md
```

#### 調整切分、合併或順序

```text
atomic 結構調整
  → 更新 notes
  → 更新 appendix
  → 檢查 demos / practice / review 的來源是否失效
  → 更新 chapter-status.md
```

---

### 5.4 `notes/` 改動

`notes/` 是正式筆記，也是下游材料的直接來源。

| notes 改動 | 必做處理 |
| --- | --- |
| 只修正文句 | 通常不重跑下游；若標題、關鍵字或 anchor 改變，檢查 appendix |
| 修改 H2 / H3 | 必查 appendix anchor |
| 調整段落結構 | 更新 appendix，檢查 demos / practice / review |
| 新增或修改 HTML 範例 | 更新 demos，檢查 practice / review |
| 新增核心概念 | 更新 appendix / practice / review，視情況新增 demos |
| 刪除核心概念 | 移除下游相關 demo、題目、索引、複習材料 |

只要 `notes/` 的 HTML 範例改動，就必須檢查：

```text
demos/
practice/
review/
```

是否仍使用舊範例或舊答案。

---

### 5.5 下游材料改動

#### `appendix/`

`appendix/` 只能索引 `notes/` 已有內容。

```text
appendix 缺內容
  → 先查 notes
  → notes 有：更新 appendix
  → notes 沒有：先補 notes
```

只要 `notes/` 的 H2 / H3 標題改名，就必須檢查 `appendix/` 裡的 anchor 是否失效。

#### `demos/`

`demos/` 可以手動微調，但不能教 `notes/` 沒有的核心知識。

```text
demo 新增新觀念
  → 先補 notes
  → 再檢查 practice / review
```

#### `practice/`

先判斷錯誤來源。

| 錯誤來源 | 處理方式 |
| --- | --- |
| 題目設計錯 | 直接修 practice |
| notes 說法錯 | 先修 notes，再更新 practice |
| 題目超出 notes | 刪題，或先補 notes |

#### `review/`

只要 `notes/` 的核心觀念、範例、常見錯誤或章節結構改變，`review/` 通常需要檢查。

---

## 6. 標準工作流程

### 6.1 小型文字修正

```text
修正來源文字
  → 檢查是否影響標題 / anchor / 關鍵字
  → 必要時同步 chapter-status.md
```

### 6.2 技術概念修正

```text
修正 origin / atomic / notes
  → 更新 notes
  → 更新 appendix
  → 檢查 demos
  → 更新 practice
  → 更新 review
  → 更新 chapter-status.md
```

### 6.3 章節重構

```text
整理 origin
  → 重產 atomic
  → 執行 atomic review（atomic 內容審查）
  → 重產 notes
  → 重產 appendix
  → 重產 demos / practice / review
  → 更新 chapter-status.md
```

### 6.4 資產重整

```text
整理 origin/<章節>/assets/
  → 執行 prompts/requests/rewrite-origin-asset-paths.md
  → 執行 prompts/requests/rewrite-origin-alt-and-link-text.md
  → 檢查 atomic / notes / demos / appendix 引用
  → 更新 chapter-status.md
```

---

## 7. 重生成檢查清單

### 7.1 重生成前

- [ ] 已確認最新來源是哪一層
- [ ] 已確認改動類型
- [ ] 已確認影響範圍
- [ ] 已確認輸出路徑
- [ ] 已確認不會覆蓋未備份的人工修改
- [ ] 已確認舊檔案要保留、覆蓋或人工比對
- [ ] 已確認是否需要更新 `chapter-status.md`

### 7.2 重生成後

- [ ] 下游內容是否根據最新 `notes/` 產生
- [ ] 是否仍引用已刪除的標題、段落或檔案
- [ ] Markdown 連結是否有效
- [ ] 圖片與附件路徑是否有效
- [ ] 程式碼區塊是否完整
- [ ] demos 是否可直接開啟
- [ ] practice 的題目、答案與來源是否一致
- [ ] review 的題庫、排程、錯題回流是否一致
- [ ] appendix 的 anchor 是否能對應到 notes 標題
- [ ] `chapter-status.md` 是否已同步更新

---

## 8. `chapter-status.md` 同步規則

每次完成更新或重生成後，都要同步 `chapter-status.md`。

`chapter-status.md` 是狀態欄位與狀態值的唯一來源。本文件只描述何時同步、如何判斷影響範圍，以及維護概念如何對應到狀態表欄位；不要在本文件另行定義欄位或狀態清單。

同步原則：

- 只更新受影響章節的相關欄位。
- 不要為了配合本文件而修改 `chapter-status.md` 的欄位結構。
- 不確定下游是否已過期時，依 `chapter-status.md` 的狀態選項標記為「待確認」。
- 需要檢查或補做的事項，寫在 `下一步` 或 `備註`。
- 下游已重生成並檢查後，標記為「已完成」。
- 某層不需要產出時，標記為「不適用」，並在 `備註` 說明原因。

維護概念對應：

| 維護概念 | `chapter-status.md` 對應欄位 |
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

狀態判斷：

```text
上游被修改
  → 相關下游標記為「待確認」
  → 在「下一步」或「備註」寫明需檢查或需更新的內容

下游已重生成並檢查
  → 標記為「已完成」

某層不需要產出
  → 標記為「不適用」，並在備註說明原因
```

例如：

```text
本章無圖片資產，因此 asset 標記為「不適用」，備註「無本地資產」。
```

---

## 9. 給 AI 使用時的最小輸入

與 AI 協作時，不需要每次貼完整筆記。優先提供以下資訊：

```text
1. 章節名稱
2. 改動位置：origin / origin/<章節>/assets / atomic / notes / appendix / demos / practice / review
3. 改動類型：小修 / 技術概念 / 結構 / 範例 / 資產 / 標題
4. 改動摘要
5. 你希望 AI 判斷什麼
```

建議指令：

```text
請依 update-rules.md 判斷這次改動的影響範圍。
只輸出：
1. 需要檢查的下游
2. 需要重生成的下游
3. chapter-status.md 應標記的狀態
4. 是否有過期內容風險
```

---

## 10. 完成標準

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
chapter-status.md 已同步更新
```

如果某一層不需要產出，必須在 `chapter-status.md` 備註原因。

---

## 11. 快速口訣

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

## 12. 一句話總結

```text
先找改動位置，再判斷改動類型；
只重跑必要下游，但不能讓下游停留在舊版本。
```
