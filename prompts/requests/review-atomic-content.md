# Atomic 內容審查提問模板

## 用途

用來請 AI 依照 `prompts/_drafts/atomic-content-review-draft.md` 的規則，審查指定 `atomic/<章節>/` 內的 atomic notes，找出技術事實錯誤、範例程式碼錯誤、原始資料錯誤、轉換錯誤、主題歸屬錯誤、邏輯順序問題與容易誤導初學者的表述。

這份模板會要求 AI 採用兩階段流程：

- 第一階段先輸出內容審查報告，不建立、修改或刪除檔案。
- 第二階段在使用者確認問題 ID 後，才修正指定的 `atomic/<章節>/*.md`。

## 適用場景

當 `atomic/<章節>/*.md` 已經由 `origin/<章節>/*.md` 原子化產生，並準備進一步轉成正式 `notes/<章節>/` 前使用。

適合用來檢查：

1. atomic note 中是否有明確技術錯誤。
2. HTML 標籤、屬性、預設行為或範例程式碼是否錯誤。
3. `origin/` 原始資料本身是否存在錯誤。
4. `origin -> atomic` 轉換過程是否造成誤改、漏改或移錯位置。
5. atomic note 的主題與內容是否不一致。
6. 是否有太絕對、缺少條件或容易誤導初學者的說法。

## 不適用場景

不適合用來重新切分、合併或產生 atomic notes。若要從 `origin/<章節>/` 產生 atomic notes，應改用 `prompts/requests/rewrite-origin-to-atomic-notes.md`。

不適合用來直接產生正式教學筆記。若 atomic notes 已完成內容審查，並準備轉成正式筆記，應改用 atomic-to-notes 類型的 Prompt。

## 使用方式

1. 將下方「可直接複製的提問」貼給具備檔案系統存取能力的 AI。
2. 將 `<atomic章節路徑>` 替換成實際章節資料夾路徑。
3. 第一輪只要求輸出內容審查報告，不修改檔案。
4. 人工確認要修正的問題 ID 後，再使用「第二階段確認用提問」。
5. 執行後檢查 `atomic/<章節>/`、審查報告、修正內容與 git diff。

## 可直接複製的提問

```text
請依照 prompts/_drafts/atomic-content-review-draft.md 的完整規則，審查以下章節的 atomic notes：

<atomic章節路徑>

請務必先閱讀 workflow 文件，並嚴格遵守其中的角色、任務、上下文、與 origin-to-atomic 品質檢查的關係、審查目標、問題類型、嚴重度分級、證據與判斷規則、兩階段流程、輸出格式、長章節處理策略與品質檢查清單。

請先執行第一階段：

1. 只掃描指定章節根目錄下的 `*.md` 檔案。
2. 不要把 notes/、appendix/、demos/、practice/、review/ 或 supplements/ 當成審查輸入。
3. 不要建立、修改或刪除任何檔案。
4. 依檔名前綴或自然章節順序閱讀 atomic notes。
5. 建立 Atomic Inventory，列出每個 atomic 檔案的主題、來源、疑似問題與備註。
6. 根據 atomic note 的來源資訊，必要時回查對應的 origin/<章節>/*.md。
7. 區分問題來源是 origin 原始資料錯誤、origin -> atomic 轉換錯誤、atomic 主題歸屬問題，還是技術事實需要人工確認。
8. 依照問題類型分類，包括技術事實錯誤、範例程式碼錯誤、原始資料錯誤、轉換錯誤、主題歸屬錯誤、邏輯順序問題、表述風險與需要人工確認。
9. 為每個問題標註 S1、S2、S3 或 S4 嚴重度，並標註信心為高、中或低。
10. 不要因為表述可以更漂亮就列為技術錯誤。
11. 不要把本任務變成正式教材改寫任務。
12. 如果證據不足或技術判斷不確定，請列入「需要人工確認」，不要假裝確定。
13. 產生完整內容審查報告，包含 Atomic 內容審查報告、Atomic Inventory、問題清單、需要人工確認、不建議修改的項目與審查摘要。

請只輸出第一階段內容審查報告。等我確認要修正的問題 ID 後，再更新 atomic/<章節>/*.md。
```

## 第二階段確認用提問

```text
我確認修正以下問題 ID：

<問題ID清單>

請依照 prompts/_drafts/atomic-content-review-draft.md 的第二階段規則，修正已確認的問題。

請遵守以下要求：

1. 只修正我確認的問題 ID。
2. 只更新相關的 atomic/<章節>/*.md。
3. 不要修改 origin/<章節>/*.md 原始檔。
4. 不要修改、刪除或搬移 origin/<章節>/assets/。
5. 不要修改 notes/、appendix/、demos/、practice/、review/、supplements/ 或 prompts/。
6. 保留每篇 atomic note 開頭的來源資訊。
7. 以最小必要變更修正問題，不要把 atomic note 改寫成正式 notes。
8. 如果某個問題來自 origin 原始資料，請只修正 atomic note，並在回報中標明 origin 原始資料仍保留原狀。
9. 如果修正會大幅改變段落結構，請先提出修正方案並停止，等待我確認。
10. 完成後回報修正摘要、修正清單與檢查結果。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<atomic章節路徑>` | 要審查的 `atomic/` 章節資料夾 | `atomic/表單/` |
| `<問題ID清單>` | 第一階段審查報告中確認要修正的問題 ID | `ACR-001, ACR-003, ACR-004` |
