# HTML 複習系統生成提問模板

## 用途

用來請 AI 依照 `prompts/_drafts/notes-to-review-system-draft.md` 的完整規則，將指定章節的 `notes/<章節>/*.md` 正式教學筆記，轉換成可長期使用的 HTML 複習系統。

## 適用場景

當某個 `notes/<章節>/` 已經整理成正式教學筆記，並準備為整個章節補上可回憶、可解釋、可應用、可安排間隔複習、可追蹤錯題回流的複習材料時使用。

這份模板只適合處理整個章節，不適合只處理單一筆記。如果只想為單篇筆記產生實作練習，應改用 `prompts/requests/generate-html-practice.md`。

不適合直接根據 `origin/` 或 `atomic/` 產生複習系統。如果正式筆記還沒有重構完成，應先使用對應的 notes 重構或審查 request template。

## 使用方式

1. 將下方「可直接複製的提問」貼給具備檔案系統存取能力的 AI。
2. 將 `<章節>` 替換成實際的章節資料夾名稱，例如 `表單` 或 `HTML簡介`。
3. 一次只處理一個章節，避免跨章節誤讀或誤改。
4. 執行後檢查 `review/<章節>/` 與 git diff，確認只建立或覆蓋該章節的五個複習系統檔案。
5. 檢查題目是否能追溯到來源筆記，Level 分布是否合理，間隔複習與錯題回流是否具體，`review_concepts` / `context_points` 是否分流清楚。

## 可直接複製的提問

```text
請依照 `prompts/_drafts/notes-to-review-system-draft.md` 的完整規則，為以下 HTML 正式筆記章節產生或更新複習系統：

`<章節>`

本次輸入是章節目錄名稱，不是完整路徑。請只讀取 `notes/<章節>/*.md`，並只建立或覆蓋以下五個檔案：

- `review/<章節>/README.md`
- `review/<章節>/question-bank.md`
- `review/<章節>/spaced-review-plan.md`
- `review/<章節>/wrong-question-loop.md`
- `review/<章節>/checkpoints.md`

請不要處理其他章節、其他 Markdown 檔案或其他資料夾，也不要讀取 `origin/`、`atomic/`、`practice/`、`demos/`、`appendix/`、`supplements/` 或 `prompts/` 作為內容來源。

完成後請依照 workflow 的最終回報格式，回報來源章節、讀取的正式筆記、產生或覆蓋的檔案、題目分布、間隔複習節點摘要、錯題回流設計摘要、`review_concepts` / `context_points` 分流檢查與品質檢查結果。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<章節>` | 要產生複習系統的正式筆記章節資料夾名稱，會推導為 `notes/<章節>/` 與 `review/<章節>/` | `表單`、`HTML簡介` |
