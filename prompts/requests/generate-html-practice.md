# HTML 練習題生成提問模板

## 用途

用來請 AI 依照 `prompts/_drafts/notes-to-html-practice-draft.md` 的完整規則，將指定的 `notes/` 正式教學筆記，轉換成 `practice/` 中可實作、可除錯、可驗收的 HTML 練習題 Markdown 檔案。

## 適用場景

當 `notes/` 中的正式教學筆記已經整理完成，並準備為學習者補上由淺入深的 HTML 實作練習時使用。

這份模板支援兩種模式：

1. 單篇筆記練習：輸入 `notes/<章節>/<檔名>.md`，輸出 `practice/<章節>/<檔名>/README.md`。
2. 章節複習練習：輸入 `notes/<章節>/`，輸出 `practice/<章節>/chapter-review.md`。

不適合直接根據 `origin/` 或 `atomic/` 產生練習題。如果正式筆記還沒有重構完成，應先使用對應的 notes 重構或審查 request template。

## 使用方式

1. 將下方「可直接複製的提問」貼給具備檔案系統存取能力的 AI。
2. 將 `<notes來源路徑>` 替換成實際的單篇 `notes/` Markdown 檔案，或章節 `notes/` 資料夾。
3. 一次只處理一個來源路徑，避免跨章節或跨檔案誤改。
4. 執行後檢查推導出的 `practice/` 目標檔案與 git diff，確認只建立或覆蓋指定來源對應的練習題檔案。
5. 檢查題目是否能追溯到來源筆記，Level 分布是否合理，參考答案是否正確，完成回報是否列出題目數量、略過 Level 與品質檢查結果。

## 可直接複製的提問

```text
請依照 `prompts/_drafts/notes-to-html-practice-draft.md` 的完整規則，為以下正式筆記產生 HTML 練習題：

`<notes來源路徑>`

請根據指定 `notes/` 來源的學習目標、核心觀念、重要範例、常見錯誤與重點整理，設計以 HTML 實作為主、可檢查、可逐步提升難度的 Markdown 練習題。

請先判斷輸入是「單篇筆記模式」或「章節複習模式」：

- 如果是單一 `notes/<章節>/<檔名>.md`，請輸出到 `practice/<章節>/<檔名>/README.md`。
- 如果是章節資料夾 `notes/<章節>/`，請輸出到 `practice/<章節>/chapter-review.md`。

請只處理上述指定的 `notes/` 來源，並只建立或覆蓋由該來源推導出的 `practice/` 目標檔案。不要處理其他章節、其他 Markdown 檔案或其他資料夾。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<notes來源路徑>` | 要產生練習題的正式筆記來源，可以是單篇 `notes/` Markdown 檔案或章節資料夾 | `notes/HTML簡介/標籤組成和關係.md`、`notes/HTML簡介/` |
