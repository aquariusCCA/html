# Atomic 內容審查提問模板

## 用途

用來請 AI 依照 `prompts/_drafts/atomic-content-review-draft.md` 的完整規則，審查指定 `atomic/<章節>/` 內的 atomic notes，判斷它們的技術內容、邏輯表述、主題歸屬與來源轉換品質是否足以進入正式 notes 重構流程。

這份模板會要求 AI 採用兩階段流程：

- 第一階段先輸出 Atomic 內容審查報告，不建立、修改或刪除任何檔案。
- 第二階段在使用者確認問題 ID 後，才修正指定的 `atomic/<章節>/*.md`。

## 適用場景

當 `origin/<章節>/*.md` 已經整理成 `atomic/<章節>/*.md`，並準備進一步重構成正式 `notes/<章節>/*.md` 前使用。

適合用來檢查：

1. atomic notes 是否存在 HTML、CSS 或 JavaScript 技術事實錯誤。
2. HTML 標籤、屬性、語意、預設行為與範例程式碼是否正確。
3. atomic note 的主題與內容是否一致，是否容易被後續重構成正式 notes。
4. 是否有 `origin/` 正確、但轉成 `atomic/` 時被改錯、漏掉條件或改錯範例的情況。
5. 是否有 `origin/` 原始資料本身就存在的明顯錯誤。
6. 是否有太絕對、缺少條件或容易誤導初學者的表述。
7. 是否有需要人工確認的主題歸屬、技術判斷或教學取捨。

## 不適用場景

不適合用來從 `origin/<章節>/*.md` 切分或產生 atomic notes。若要從 origin 產生 atomic notes，應改用：

```text
prompts/requests/rewrite-origin-to-atomic-notes.md
```

不適合用來標準化 `origin/` 資產路徑、重新命名資產檔案、整理圖片 alt 或附件連結文字。那些任務應使用對應的 `rewrite-origin-*` request template。

不適合用來將 atomic notes 重構成正式教學筆記。若要產生正式 notes，應改用：

```text
prompts/requests/rewrite-atomic-html-teaching-notes.md
```

不適合用來審查已產出的正式 `notes/<章節>/*.md`。若要審查正式 HTML 教學筆記，應改用：

```text
prompts/requests/review-html-teaching-notes.md
```

不適合用來產生 demo、練習題、複習系統或索引。那些任務應使用對應的 `generate-html-*` request template。

## 使用方式

1. 將下方「第一階段內容審查用提問」貼給具備檔案系統存取能力的 AI。
2. 將 `<atomic章節路徑>`、`<origin章節路徑>` 與 `<章節>` 替換成實際章節資料夾與章節名稱。
3. 第一輪只要求輸出內容審查報告，不修改檔案。
4. 檢查 Atomic Inventory、問題 ID、嚴重度、問題類型、判斷理由、origin 對照、建議修正、轉交項目與需要人工確認項目。
5. 人工確認要修正的問題 ID 後，再使用「第二階段確認修正用提問」。
6. 執行後檢查 `atomic/<章節>/`、修正回報、git diff，以及是否未修改 origin、assets 或其他非 atomic 目錄。

## 第一階段內容審查用提問

```text
請依照 `prompts/_drafts/atomic-content-review-draft.md` 的完整規則，審查以下章節的 atomic notes：

`<atomic章節路徑>`

## 本次審查範圍

* 專案根目錄：`html/`
* 目標章節名稱：`<章節>`
* 目標 atomic 路徑：`<atomic章節路徑>`
* 掃描範圍：`<atomic章節路徑>/*.md`
* Origin 回查來源：`<origin章節路徑>/*.md`，必要時才唯讀回查
* 執行階段：第一階段「內容審查報告」
* 是否允許寫入檔案：否

如果目標章節名稱、目標 atomic 路徑或 origin 回查來源未填、仍是 placeholder，或不是明確的同一章節路徑，請停止並要求我補充，不要自行掃描整個 `atomic/` 或 `origin/`。

請注意：

1. 本輪只允許輸出 Atomic 內容審查報告，不要建立、修改、刪除、移動或重新命名任何檔案。
2. 只審查 `<atomic章節路徑>/*.md`，不要審查其他章節、其他 Markdown 檔案或其他資料夾。
3. `<origin章節路徑>/*.md` 只作為唯讀對照來源，用來判斷問題來自原始資料、atomic 轉換過程或現有資料不足。
4. 不要修改 `origin/<章節>/*.md`，也不要修改、刪除或搬移 `origin/<章節>/assets/`。
5. 不要把 `meta/`、`notes/`、`appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 或 `prompts/` 當成 atomic 內容審查輸入。
6. 優先指出會教錯或誤導初學者的問題，並區分技術事實錯誤、範例程式碼錯誤、原始資料錯誤、轉換錯誤、主題歸屬錯誤、邏輯順序問題與表述風險。
7. 如果問題主要是切分不合理、來源資訊缺失、asset 路徑錯誤、需要移動段落或需要重切 atomic 邊界，請列入 `origin-to-atomic 轉交項目`，不要列為第二階段可直接修正的內容問題。
8. 如果只是風格偏好或可以寫得更漂亮，請列入「不建議修改」或不列入問題，不要列成嚴重問題。
9. 若無法查證或判斷信心不足，請列為「需要人工確認」，不要假裝確定。
10. 如果沒有發現內容問題，請在問題清單中寫「無」，不要硬湊問題。
11. 若指定章節內容太長，超過單次上下文可安全處理的範圍，請先輸出 Atomic Inventory，再分批審查並保留穩定問題 ID。

## 回報要求

請依照規則檔中的第一階段輸出格式，回報「Atomic 內容審查報告」、「Atomic Inventory」、「問題清單」、「origin-to-atomic 轉交項目」、「需要人工確認」、「不建議修改的項目」與「審查摘要」。

如果沒有某一類資料，請填寫「無」。
```

## 第二階段確認修正用提問

```text
我確認修正以下問題 ID：

<問題ID清單>

請依照 `prompts/_drafts/atomic-content-review-draft.md` 的第二階段完整規則，只修正已確認的問題 ID。

## 本次修正範圍

* 專案根目錄：`html/`
* 目標章節名稱：`<章節>`
* 目標 atomic 路徑：`<atomic章節路徑>`
* 可更新範圍：相關的 `atomic/<章節>/*.md`
* Origin 回查來源：`<origin章節路徑>/*.md`，必要時才唯讀回查
* 執行階段：第二階段「確認後修正」
* 是否允許寫入檔案：是，只限已確認問題 ID 對應的 `atomic/<章節>/*.md`

請注意：

1. 只修正我確認的問題 ID，不要修正未確認的問題。
2. 只修正屬於 atomic 內容審查範圍的問題 ID；若確認的 ID 屬於 `origin-to-atomic 轉交項目`，請停止修正並回報應回到 `prompts/requests/rewrite-origin-to-atomic-notes.md` 流程處理。
3. 只更新相關的 `atomic/<章節>/*.md`。
4. 不要修改 `origin/<章節>/*.md`，也不要修改、刪除或搬移 `origin/<章節>/assets/`。
5. 不要修改 `meta/`、`notes/`、`appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 或 `prompts/` 中的內容。
6. 保留每篇 atomic note 開頭的來源資訊。
7. 以最小必要變更修正問題，不要藉由修正任務重新生成、大幅改寫或正式教材化整篇 atomic note。
8. 如果修正需要超出已確認問題 ID、改動非 atomic 檔案、大幅改變段落結構、移動內容或重切 atomic 邊界，請先停止並回報需要人工確認。
9. 如果問題來自 `origin/` 原始資料，本階段仍只修正 atomic note，並在回報中標明 origin 仍保留原狀。

## 回報要求

完成後請依照規則檔中的第二階段輸出格式，回報「修正摘要」、「修正清單」與「檢查結果」。

如果沒有某一類資料，請填寫「無」。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<atomic章節路徑>` | 要審查或修正的 `atomic/` 章節資料夾 | `atomic/HTML簡介/` |
| `<章節>` | 章節目錄名稱，需與 `atomic/<章節>/` 和 `origin/<章節>/` 對應 | `HTML簡介` |
| `<origin章節路徑>` | 必要時才唯讀回查的 origin 章節資料夾 | `origin/HTML簡介/` |
| `<問題ID清單>` | 第一階段審查報告中確認要修正的問題 ID | `ACR-001, ACR-003, ACR-004` |
