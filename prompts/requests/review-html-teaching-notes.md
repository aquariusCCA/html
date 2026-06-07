# HTML 教學筆記內容審查提問模板

## 用途

用來請 AI 依照 `prompts/_drafts/html-teaching-notes-content-review-draft.md` 的完整規則，審查指定 `notes/<章節>/` 內的正式 HTML 教學筆記，判斷它們是否達到可教學、可回查、可維護的品質。

這份模板會要求 AI 採用兩階段流程：

- 第一階段先輸出 HTML 教學筆記內容審查報告，不建立、修改或刪除任何檔案。
- 第二階段在使用者確認問題 ID 後，才修正指定的 `notes/<章節>/*.md`。

## 適用場景

當 `atomic/<章節>/*.md` 已經重構成正式 `notes/<章節>/*.md`，並準備交給初學者閱讀、練習或後續產生 demo、practice、review、index 前使用。

適合用來檢查：

1. 正式 notes 是否有明確技術錯誤或範例程式碼錯誤。
2. HTML 標籤、屬性、語意、預設行為與實務說明是否正確。
3. 教學順序是否符合初學者理解路徑。
4. 是否保留 atomic notes 的核心內容，且沒有誤解、弱化或遺漏重要概念。
5. 範例是否足夠、可理解、可拆解，且與主題直接相關。
6. 是否有太絕對、缺少條件或容易誤導初學者的說法。
7. 主題邊界、章節順序、Markdown 格式、圖片或附件路徑是否合理。
8. 是否有需要人工確認的教學取捨、內容歸屬或技術判斷。

## 不適用場景

不適合用來審查 `atomic/<章節>/*.md` 的技術事實、來源轉換或主題歸屬。若要審查 atomic notes，應改用：

```text
prompts/requests/review-atomic-content.md
```

不適合用來從 atomic notes 產生正式教學筆記。若要將 atomic notes 重構成正式 notes，應改用：

```text
prompts/requests/rewrite-atomic-html-teaching-notes.md
```

不適合用來重新整理 `origin/<章節>/*.md` 原始資料、標準化 origin 資產路徑，或修改圖片替代文字與附件連結文字。那些任務應使用對應的 `rewrite-origin-*` request template。

不適合用來產生 demo、練習題、複習系統或索引。那些任務應使用對應的 `generate-html-*` request template。

## 使用方式

1. 將下方「第一階段內容審查用提問」貼給具備檔案系統存取能力的 AI。
2. 將 `<notes章節路徑>`、`<atomic章節路徑>`、`<origin章節路徑>` 與 `<章節>` 替換成實際章節資料夾與章節名稱。
3. 第一輪只要求輸出內容審查報告，不修改檔案。
4. 檢查問題 ID、嚴重度、判斷理由、Atomic 覆蓋檢查、需要人工確認與不建議修改項目。
5. 人工確認要修正的問題 ID 後，再使用「第二階段確認修正用提問」。
6. 執行後檢查 `notes/<章節>/`、修正回報、git diff，以及是否未修改 atomic、origin、assets 或其他非 notes 目錄。

## 第一階段內容審查用提問

```text
請依照 `prompts/_drafts/html-teaching-notes-content-review-draft.md` 的完整規則，審查以下章節的正式 HTML 教學筆記：

`<notes章節路徑>`

## 本次審查範圍

* 專案根目錄：`html/`
* 目標章節名稱：`<章節>`
* 目標 notes 路徑：`<notes章節路徑>`
* 掃描範圍：`<notes章節路徑>/*.md`
* Atomic 對照來源：`<atomic章節路徑>/*.md`
* Origin 回查來源：`<origin章節路徑>/*.md`，必要時才唯讀回查
* 執行階段：第一階段「內容審查報告」
* 是否允許寫入檔案：否

請注意：

1. 本輪只允許輸出 HTML 教學筆記內容審查報告，不要建立、修改、刪除、移動或重新命名任何檔案。
2. 只審查 `<notes章節路徑>/*.md`，不要審查其他章節、其他 Markdown 檔案或其他資料夾。
3. `<atomic章節路徑>/*.md` 只作為對照來源，用來判斷正式 notes 是否合理保留 atomic 核心內容。
4. `<origin章節路徑>/*.md` 只在需要判斷來源錯誤、原始語境或資產脈絡時唯讀回查。
5. 不要修改 `atomic/<章節>/*.md`、`origin/<章節>/*.md`，也不要修改、刪除或搬移 `origin/<章節>/assets/`。
6. 不要把 `meta/`、`demos/`、`practice/`、`review/`、`appendix/`、`supplements/` 或 `prompts/` 當成 notes 內容審查輸入。
7. 優先指出會教錯或誤導初學者的問題，並區分技術錯誤、教學品質問題與單純文筆偏好。
8. 如果只是風格偏好，請列入「不建議修改」或不列入問題，不要列成嚴重問題。
9. 若無法查證或判斷信心不足，請列為「需要人工確認」，不要假裝確定。
10. 如果沒有發現問題，請在問題清單中寫「無」，不要硬湊問題。
11. 若指定章節內容太長，超過單次上下文可安全處理的範圍，請先輸出 Notes Inventory 與 Atomic 覆蓋檢查初稿，再分批審查並保留穩定問題 ID。

## 回報要求

請依照規則檔中的第一階段輸出格式，回報「HTML 教學筆記內容審查報告」、「Notes Inventory」、「問題清單」、「Atomic 覆蓋檢查」、「需要人工確認」、「不建議修改的項目」與「審查摘要」。

如果沒有某一類資料，請填寫「無」。
```

## 第二階段確認修正用提問

```text
我確認修正以下問題 ID：

<問題ID清單>

請依照 `prompts/_drafts/html-teaching-notes-content-review-draft.md` 的第二階段完整規則，只修正已確認的問題 ID。

## 本次修正範圍

* 專案根目錄：`html/`
* 目標章節名稱：`<章節>`
* 目標 notes 路徑：`<notes章節路徑>`
* 可更新範圍：相關的 `notes/<章節>/*.md`
* Atomic 對照來源：`<atomic章節路徑>/*.md`，必要時才唯讀對照
* Origin 回查來源：`<origin章節路徑>/*.md`，必要時才唯讀回查
* 執行階段：第二階段「確認後修正」
* 是否允許寫入檔案：是，只限已確認問題 ID 對應的 `notes/<章節>/*.md`

請注意：

1. 只修正我確認的問題 ID，不要修正未確認的問題。
2. 只更新相關的 `notes/<章節>/*.md`。
3. 不要修改 `atomic/<章節>/*.md`。
4. 不要修改 `origin/<章節>/*.md`，也不要修改、刪除或搬移 `origin/<章節>/assets/`。
5. 不要修改 `meta/`、`demos/`、`practice/`、`review/`、`appendix/`、`supplements/` 或 `prompts/` 中的內容。
6. 以最小必要變更修正問題，保留正式 notes 原本的主題定位與章節順序。
7. 不要藉由修正任務重新生成或大幅改寫整個章節。
8. 如果修正需要超出已確認問題 ID、改動非 notes 檔案、或大幅改變章節結構，請先停止並回報需要人工確認。
9. 如果問題來自 `atomic/` 或 `origin/`，本階段仍只修正 notes，並在回報中標明 atomic 或 origin 仍保留原狀。

## 回報要求

完成後請依照規則檔中的第二階段輸出格式，回報「修正摘要」、「修正清單」與「檢查結果」。

如果沒有某一類資料，請填寫「無」。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<notes章節路徑>` | 要審查或修正的 `notes/` 章節資料夾 | `notes/HTML簡介/` |
| `<章節>` | 章節目錄名稱，需與 `notes/<章節>/`、`atomic/<章節>/` 和 `origin/<章節>/` 對應 | `HTML簡介` |
| `<atomic章節路徑>` | 用來對照正式 notes 是否合理保留核心內容的 atomic 章節資料夾 | `atomic/HTML簡介/` |
| `<origin章節路徑>` | 必要時才唯讀回查的 origin 章節資料夾 | `origin/HTML簡介/` |
| `<問題ID清單>` | 第一階段審查報告中確認要修正的問題 ID | `NCR-001, NCR-003, NCR-004` |
