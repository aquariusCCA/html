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

請依照該 workflow 的第一階段完整規則，只輸出第一階段內容審查報告。等我確認要修正的問題 ID 後，再更新 atomic/<章節>/*.md。
```

## 第二階段確認用提問

```text
我確認修正以下問題 ID：

<問題ID清單>

請依照 prompts/_drafts/atomic-content-review-draft.md 的第二階段完整規則，只修正已確認的問題 ID。

完成後請依照該 workflow 的第二階段輸出格式回報修正摘要、修正清單與檢查結果。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<atomic章節路徑>` | 要審查的 `atomic/` 章節資料夾 | `atomic/表單/` |
| `<問題ID清單>` | 第一階段審查報告中確認要修正的問題 ID | `ACR-001, ACR-003, ACR-004` |
