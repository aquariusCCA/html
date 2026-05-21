你現在要協助我整理 HTML Knowledge Pack。

請依序套用以下提示詞規則：

1. `prompts/system/base-role.md`
2. `prompts/system/html-teacher-role.md`
3. `prompts/workflows/origin-to-notes.md`
4. `prompts/formats/teaching-note-format.md`

任務目標：

請將我提供的 `origin/` 原始資料，整理成可以放入 `notes/` 的正式教書型筆記。

輸入資料：

```text
來源路徑：`origin/第09章_標題標籤/標題標籤.md`
目標主題：`標題標籤`
預期輸出路徑：`notes/第09章_標題標籤/標題標籤.md`
補充要求：`無`
```

任務要求：

1. 先判斷原始內容是否適合整理成一份筆記。
2. 如果內容過大，請提出拆分建議。
3. 如果內容足夠聚焦，請產生一份正式教書型筆記。
4. 筆記應保留原始資料核心意思。
5. 可補充必要背景，但不得偏離主題。
6. 輸出應符合 `prompts/formats/teaching-note-format.md`。
7. 若有不確定資訊，請列為「待確認」。

輸出要求：

- 使用繁體中文
- 保留原始資料中的重要知識
- 補足初學者需要理解的背景
- 使用 HTML 專業觀念說明
- 提供必要的範例程式
- 補充常見錯誤與實務注意事項
- 最終輸出為 Markdown
- 不要輸出與筆記無關的閒聊內容

以下是 origin 原始資料：

`origin/第09章_標題標籤/標題標籤.md`