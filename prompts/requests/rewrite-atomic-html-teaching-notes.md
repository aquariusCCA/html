# HTML 教學筆記重構提問模板

## 用途

用來請 AI 依照 `prompts/_drafts/atomic-to-html-teaching-notes-draft.md` 的完整規則，將指定章節的 `atomic/<章節>/*.md` 原子化資料，安全重構成 `notes/<章節>/*.md` 的正式 HTML 教學筆記。

這份模板會要求 AI 採用兩階段流程：

- 第一階段先輸出 atomic -> notes 映射提案，不建立、修改或刪除任何檔案。
- 第二階段必須在使用者明確確認第一階段提案後，才依照確認後的提案建立或更新 `notes/<章節>/*.md`。

## 適用場景

當整個 `atomic/<章節>/` 已完成原子化整理與內容審查，並準備轉換成正式 `notes/<章節>/` 教學筆記時使用。

適合用來處理：

1. 將多篇 atomic notes 整合成有教學脈絡的正式 notes。
2. 判斷哪些 atomic 適合單獨成篇、哪些應該合併、哪些適合作為補充型 notes。
3. 為每篇正式 notes 加上 `source_atomic` 隱藏註解，保留 atomic 來源追溯。
4. 移除 atomic 原文中的 `> 來源：origin/...` 區塊。
5. 將 atomic notes 中的本地資產引用修正為可從 `notes/<章節>/` 正確連到 `origin/<章節>/assets/` 的相對路徑。

執行本模板之前，應先使用：

```text
prompts/requests/rewrite-origin-asset-paths.md
```

完成該章節的本地資產路徑與檔名標準化。

若尚未完成資產標準化，請先不要執行本模板。

## 不適用場景

不適合用來重新整理 `origin/<章節>/*.md` 原始資料。若要從 origin 產生 atomic notes，應改用：

```text
prompts/requests/rewrite-origin-to-atomic-notes.md
```

不適合用來審查 atomic notes 的技術事實、主題歸屬或轉換品質。若要審查 atomic 內容，應改用：

```text
prompts/requests/review-atomic-content.md
```

不適合用來審查已產出的正式 notes。若要審查正式 HTML 教學筆記，應改用：

```text
prompts/requests/review-html-teaching-notes.md
```

不適合用來產生 demo、練習題、複習系統或索引。那些任務應使用對應的 `generate-html-*` request template。

## 使用方式

1. 將下方「第一階段映射提案用提問」貼給具備檔案系統存取能力的 AI。
2. 將 `<atomic章節路徑>` 與 `<章節>` 替換成實際章節資料夾與章節名稱。
3. 第一輪只要求輸出 atomic -> notes 映射提案，不修改檔案。
4. 檢查映射提案中的 atomic 來源、目標 notes、轉換類型、操作類型、檔名、資產路徑檢查與需要人工確認項目。
5. 確認提案無誤後，再使用「第二階段確認重構用提問」。
6. 執行後檢查 `notes/<章節>/`、`source_atomic` 隱藏註解、資產路徑、正式筆記內容與 git diff。

## 第一階段映射提案用提問

```text
請依照 `prompts/_drafts/atomic-to-html-teaching-notes-draft.md` 的完整規則，為以下章節建立 atomic -> notes 映射提案：

`<atomic章節路徑>`

## 本次處理範圍

* 專案根目錄：`html/`
* 目標章節名稱：`<章節>`
* 目標 atomic 路徑：`<atomic章節路徑>`
* 掃描範圍：`<atomic章節路徑>/*.md`
* 目標輸出位置：`notes/<章節>/*.md`
* 資產來源：`origin/<章節>/assets/`
* 執行階段：第一階段「映射提案」
* 是否允許寫入檔案：否

請注意：

1. 本輪只允許輸出 atomic -> notes 映射提案，不要建立、修改、刪除、移動或重新命名任何檔案。
2. 只讀取 `<atomic章節路徑>/*.md` 作為主要輸入，不要處理其他章節、其他 Markdown 檔案或其他資料夾。
3. 可以唯讀檢查 `notes/<章節>/` 是否已有既有 notes，用來判斷第二階段可能建立或更新哪些檔案；不要修改或刪除任何既有 notes。
4. 可以唯讀檢查 `origin/<章節>/assets/`，只用來確認 atomic notes 中的本地資產引用是否能對應到標準化後的位置。
5. 不要修改 `origin/<章節>/*.md`，也不要修改、刪除或搬移 `origin/<章節>/assets/` 內的任何資產。
6. 不要把 `meta/`、`appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 或 `prompts/` 當成輸入來源。
7. 請先依檔名前綴與學習順序理解整章 atomic notes，再判斷哪些 atomic 適合一對一轉換、哪些應該合併、哪些適合作為補充型 notes。
8. 請為每篇預計產出的 `notes/<章節>/*.md` 規劃清楚標題、檔名、對應 atomic 來源、轉換類型、操作類型與理由。
9. 補充型 notes 仍然輸出到 `notes/<章節>/`，不要改放到 `appendix/` 或 `supplements/`。
10. 如果發現 origin 資產尚未依照 `prompts/requests/rewrite-origin-asset-paths.md` 完成標準化，或 atomic notes 中的本地資產引用明顯無法對應到標準化後的位置，請停止並提醒我先執行該流程。
11. 如果既有 `notes/<章節>/` 中有可能被覆蓋、取代或不再對應的檔案，請列入「需要人工確認」，不要假設可以刪除。
12. 若指定章節內容太長，超過單次上下文可安全處理的範圍，請先輸出 Atomic Inventory，再提出分批處理建議，不要直接重構 notes。

## 回報要求

請回報以下內容：

1. Atomic Inventory：列出本章每篇 atomic note 的檔名、主題、核心概念、圖片或附件狀態。
2. atomic -> notes 映射提案：列出 atomic 來源、建議 notes、轉換類型（一對一、合併、補充型）、操作類型（建立、更新、需確認）與判斷摘要。
3. 預計輸出檔案：列出每個 `notes/<章節>/*.md` 目標檔案與對應的 `source_atomic` 來源。
4. 資產路徑檢查：列出已正確、需改寫、無法確認或需先執行資產標準化的項目。
5. 需要人工確認：列出覆蓋風險、檔名歸屬、內容合併、資產對應或其他不確定項目。
6. 第二階段執行說明：說明確認後應如何產生或更新 notes。

如果沒有某一類資料，請填寫「無」。
```

## 第二階段確認重構用提問

```text
確認，請依照已確認的 atomic -> notes 映射提案重構正式 HTML 教學筆記。

請依照 `prompts/_drafts/atomic-to-html-teaching-notes-draft.md` 的完整規則，根據我已確認的第一階段映射提案，重構以下章節的 atomic notes：

`<atomic章節路徑>`

## 本次處理範圍

* 專案根目錄：`html/`
* 目標章節名稱：`<章節>`
* 目標 atomic 路徑：`<atomic章節路徑>`
* 輸入來源：`<atomic章節路徑>/*.md`
* 目標輸出位置：`notes/<章節>/*.md`
* 資產來源：`origin/<章節>/assets/`
* 執行階段：第二階段「確認後重構」
* 是否允許寫入檔案：是，只限已確認映射提案中的 `notes/<章節>/*.md`

## 已確認的映射提案補充

<確認後的映射提案補充>

請注意：

1. 只允許建立或更新已確認映射提案中的 `notes/<章節>/*.md`。
2. 如果 `notes/<章節>/` 不存在，可以建立該目標目錄。
3. 如果任何目標檔案已存在，且第一階段提案未明確列為可更新，請先列出既有檔案清單並要求我確認，不要直接覆蓋。
4. 不要刪除未涉及的 notes 檔案。
5. 不要清空整個 `notes/<章節>/` 目錄。
6. 不要修改、刪除或搬移 `origin/<章節>/*.md`。
7. 不要修改、刪除或搬移 `origin/<章節>/assets/` 內的任何資產。
8. 不要修改 `atomic/<章節>/*.md`。
9. 不要修改 `meta/`、`appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 或 `prompts/` 中的內容。
10. 每篇正式 notes 開頭必須加入 `source_atomic` 隱藏註解，且只列出該篇 notes 對應的 atomic 檔案。
11. 不要在 `source_atomic` 加入 type、title、chapter、order 等非必要欄位。
12. 請移除 atomic 原文中的 `> 來源：origin/...` 區塊，不要把 origin 來源資訊放進正式 notes 正文開頭。
13. 請依正式 notes 的主題類型安排教學結構，不要硬套同一個標題模板。
14. 請保留 atomic notes 的重要概念、定義、範例、圖片與連結，但不要逐字照抄。
15. 請先講概念，再講語法，再拆解範例；避免把正式 notes 寫成單純資料整理。
16. 請依規則修正圖片與附件相對路徑，讓 `notes/<章節>/*.md` 能正確連到 `../../origin/<章節>/assets/...`。
17. 不要改寫外部網址、錨點連結、特殊協議連結、空連結或 fenced code block 內不應改寫的示例路徑。
18. 如果執行中發現 origin 資產尚未標準化，或本地資產引用無法安全對應，請停止重構並提醒我先執行 `prompts/requests/rewrite-origin-asset-paths.md`。

## 回報要求

完成後請回報：

已完成。

映射摘要：
- atomic/<章節>/<檔名A>.md -> notes/<章節>/<檔名A>.md
- atomic/<章節>/<檔名B>.md + atomic/<章節>/<檔名C>.md -> notes/<章節>/<合併檔名>.md

輸出檔案：
- notes/<章節>/<檔名A>.md
- notes/<章節>/<檔名B>.md

注意事項：
- 若無異常，寫「無」。
- 若有資產路徑、缺漏內容、未處理檔案或需要後續確認的項目，請列出。

不要在完成回覆中貼出正式 notes 全文，除非我要求。

如果因為環境限制不能直接寫入檔案，請改依規則檔格式輸出每個目標檔案的完整 Markdown 內容。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<atomic章節路徑>` | 要重構的 `atomic/` 章節資料夾 | `atomic/HTML簡介/` |
| `<章節>` | 章節目錄名稱，需與 `atomic/<章節>/`、`origin/<章節>/` 和 `notes/<章節>/` 對應 | `HTML簡介` |
| `<確認後的映射提案補充>` | 第二階段可貼上第一階段已確認的映射提案、修正後提案或補充要求 | `依第一階段提案全部產生；既有 01-網頁與HTML入門.md 可覆蓋更新。` |
