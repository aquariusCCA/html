# Atomic 內容審查提問模板

## 用途

用來請 AI 依照 `prompts/_drafts/atomic-content-review-draft.md` 的完整規則，審查指定 `atomic/<章節>/` 內的 atomic notes，找出技術事實錯誤、範例程式碼錯誤、原始資料錯誤、轉換錯誤、主題歸屬錯誤、邏輯順序問題、容易誤導初學者的表述，以及需要人工確認的歸屬、表述或技術判斷。

這份模板會要求 AI 採用兩階段流程：

- 第一階段先輸出 Atomic 內容審查報告，不建立、修改或刪除任何檔案。
- 第二階段在使用者確認問題 ID 後，才修正指定的 `atomic/<章節>/*.md`。

## 適用場景

當 `atomic/<章節>/*.md` 已經由 `origin/<章節>/*.md` 原子化產生，並準備進一步轉成正式 `notes/<章節>/` 前使用。

適合用來檢查：

1. atomic note 中是否有明確技術錯誤。
2. HTML 標籤、屬性、預設行為或範例程式碼是否正確。
3. CSS 與 JavaScript 的概念說明是否符合常見標準與實務行為。
4. `origin/` 原始資料本身是否存在錯誤。
5. `origin -> atomic` 轉換過程是否造成誤改、漏改或移錯位置。
6. atomic note 的主題與內容是否一致。
7. 是否有太絕對、缺少條件或容易誤導初學者的說法。
8. 是否有需要人工確認的歸屬、表述或技術判斷。

## 不適用場景

不適合用來重新切分、合併或產生 atomic notes。若要從 `origin/<章節>/` 產生 atomic notes，應改用：

```text
prompts/requests/rewrite-origin-to-atomic-notes.md
```

不適合用來直接產生正式教學筆記。若 atomic notes 已完成內容審查，並準備轉成正式筆記，應改用：

```text
prompts/requests/rewrite-atomic-html-teaching-notes.md
```

不適合用來審查正式 `notes/<章節>/*.md`。若要審查正式 HTML 教學筆記，應改用：

```text
prompts/requests/review-html-teaching-notes.md
```

不適合用來產生 demo、練習題、複習系統或索引。那些任務應使用對應的 `generate-html-*` request template。

## 使用方式

1. 將下方「第一階段內容審查用提問」貼給具備檔案系統存取能力的 AI。
2. 將 `<atomic章節路徑>` 與 `<章節>` 替換成實際章節資料夾與章節名稱。
3. 第一輪只要求輸出內容審查報告，不修改檔案。
4. 人工確認要修正的問題 ID 後，再使用「第二階段確認修正用提問」。
5. 執行後檢查 `atomic/<章節>/`、審查報告、修正內容與 git diff。

## 第一階段內容審查用提問

```text
請依照 `prompts/_drafts/atomic-content-review-draft.md` 的完整規則，審查以下章節的 atomic notes：

`<atomic章節路徑>`

## 本次審查範圍

* 專案根目錄：`html/`
* 目標章節名稱：`<章節>`
* 目標 atomic 路徑：`<atomic章節路徑>`
* 掃描範圍：`<atomic章節路徑>/*.md`
* 對照來源：`origin/<章節>/*.md`，必要時才唯讀回查
* 執行階段：第一階段「內容審查報告」
* 是否允許寫入檔案：否

請注意：

1. 本輪只允許輸出 Atomic 內容審查報告，不要建立、修改、刪除、移動或重新命名任何檔案。
2. 只審查 `<atomic章節路徑>/*.md`，不要處理其他章節、其他 Markdown 檔案或其他資料夾。
3. `origin/<章節>/*.md` 只作為唯讀對照來源，用來判斷問題來自原始資料或 atomic 轉換過程。
4. 不要修改 `origin/<章節>/*.md`，也不要修改、刪除或搬移 `origin/<章節>/assets/`。
5. 不要把 `meta/`、`notes/`、`appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 或 `prompts/` 當成審查輸入。
6. 若問題主要是切分不合理、來源資訊缺失或 asset 路徑錯誤，請標為 `origin-to-atomic 品質檢查範圍`，不要在本任務中展開修正。
7. 若無法查證或判斷信心不足，請列為「需要人工確認」，不要假裝確定。
8. 如果沒有發現問題，請在問題清單中寫「無」，不要硬湊問題。
9. 若指定章節內容太長，超過單次上下文可安全處理的範圍，請先輸出 Atomic Inventory，再分批審查並保留穩定問題 ID。

## 回報要求

請依照規則檔中的第一階段輸出格式，回報「Atomic 內容審查報告」、「Atomic Inventory」、「問題清單」、「需要人工確認」、「不建議修改的項目」與「審查摘要」。

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
* 對照來源：`origin/<章節>/*.md`，必要時才唯讀回查
* 執行階段：第二階段「確認後修正」
* 是否允許寫入檔案：是，只限已確認問題 ID 對應的 `atomic/<章節>/*.md`

請注意：

1. 只修正我確認的問題 ID，不要修正未確認的問題。
2. 只更新相關的 `atomic/<章節>/*.md`。
3. 不要修改 `origin/<章節>/*.md`，也不要修改、刪除或搬移 `origin/<章節>/assets/`。
4. 不要修改 `meta/`、`notes/`、`appendix/`、`demos/`、`practice/`、`review/`、`supplements/` 或 `prompts/` 中的內容。
5. 保留每篇 atomic note 開頭的來源資訊。
6. 以最小必要變更修正問題，不要把 atomic note 改寫成正式教材。
7. 如果修正會大幅改變 atomic note 的段落結構、主題邊界或內容組織，請先提出修正方案，等待我再次確認後再修改。
8. 如果問題來自 `origin/` 原始資料，只修正 atomic note，並在回報中標明 origin 仍保留原狀。

## 回報要求

完成後請依照規則檔中的第二階段輸出格式，回報「修正摘要」、「修正清單」與「檢查結果」。

如果沒有某一類資料，請填寫「無」。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<atomic章節路徑>` | 要審查或修正的 `atomic/` 章節資料夾 | `atomic/第01章_HTML簡介/` |
| `<章節>` | 章節目錄名稱，需與 `atomic/<章節>/` 和 `origin/<章節>/` 對應 | `第01章_HTML簡介` |
| `<問題ID清單>` | 第一階段審查報告中確認要修正的問題 ID | `ACR-001, ACR-003, ACR-004` |
