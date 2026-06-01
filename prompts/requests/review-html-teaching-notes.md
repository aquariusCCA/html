# HTML 教學筆記內容審查提問模板

## 用途

用來請 AI 依照 `prompts/_drafts/html-teaching-notes-content-review-draft.md` 的規則，審查指定 `notes/<章節>/` 內的正式 HTML 教學筆記，確認它們是否達到高品質教學筆記標準。

這份模板會要求 AI 採用兩階段流程：

- 第一階段先輸出內容審查報告，不建立、修改或刪除檔案。
- 第二階段在使用者確認問題 ID 後，才修正指定的 `notes/<章節>/*.md`。

## 適用場景

當 `atomic/<章節>/` 已依照 `prompts/_drafts/atomic-to-html-teaching-notes-draft.md` 重構成正式 `notes/<章節>/` 後使用。

適合用來檢查：

1. 正式 notes 是否有明確技術錯誤。
2. HTML 標籤、屬性、語意、預設行為或範例程式碼是否正確。
3. 教學順序是否適合初學者。
4. 是否有足夠問題情境、語意說明、範例拆解與實務判斷。
5. 是否已對照 atomic notes，檢查正式 notes 是否合理保留重要核心內容。
6. 是否把補充內容過度塞進主線教學。
7. 圖片、附件、標題層級、表格與程式碼區塊是否正確。

## 不適用場景

不適合用來審查尚未轉成正式 notes 的 `atomic/<章節>/*.md`。若要審查 atomic notes，應改用：

```text
prompts/requests/review-atomic-content.md
```

不適合用來直接把 atomic notes 重構成正式教學筆記。若要產生正式 notes，應改用：

```text
prompts/requests/rewrite-atomic-html-teaching-notes.md
```

不適合用來產生 demo、練習題、複習系統或索引。那些任務應使用對應的 `generate-html-*` request template。

## 使用方式

1. 將下方「可直接複製的提問」貼給具備檔案系統存取能力的 AI。
2. 將 `<notes章節路徑>` 替換成實際章節資料夾路徑。
3. 第一輪只要求輸出內容審查報告，不修改檔案。
4. 人工確認要修正的問題 ID 後，再使用「第二階段確認用提問」。
5. 執行後檢查 `notes/<章節>/`、審查報告、修正內容與 git diff。

## 第一階段內容審查提問

```text
請依照 prompts/_drafts/html-teaching-notes-content-review-draft.md 的完整規則，審查以下章節的正式 HTML 教學筆記：

<notes章節路徑>

請只處理上述指定章節，不要處理其他章節、其他 Markdown 檔案或其他資料夾。

請務必列出 Atomic 覆蓋檢查；atomic 是必要對照來源，origin 只在需要判斷來源錯誤或資產脈絡時回查。

請依照該 workflow 的第一階段完整規則，只輸出第一階段 HTML 教學筆記內容審查報告。第一階段不要建立、修改或刪除任何檔案。等我確認要修正的問題 ID 後，再更新 notes/<章節>/*.md。
```

## 第二階段確認用提問

```text
我確認修正以下問題 ID：

<問題ID清單>

請依照 prompts/_drafts/html-teaching-notes-content-review-draft.md 的第二階段完整規則，只修正已確認的問題 ID。

請只更新相關的 notes/<章節>/*.md，不要修改 atomic/<章節>/*.md、origin/<章節>/*.md、origin/<章節>/assets/ 或其他資料夾。

完成後請依照該 workflow 的第二階段輸出格式回報修正摘要、修正清單與檢查結果。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<notes章節路徑>` | 要審查的 `notes/` 章節資料夾 | `notes/HTML簡介/` |
| `<問題ID清單>` | 第一階段審查報告中確認要修正的問題 ID | `NCR-001, NCR-003, NCR-004` |
