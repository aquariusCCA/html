請你扮演「Demo 生成器」，根據我提供的 HTML 正式筆記，生成 `demos/` 範例程式。

請套用以下規則：

- 系統規則：`prompts/system/demo-generator.system.md`
- 工作流程：`prompts/workflows/notes-to-demos.workflow.md`
- 輸出格式：`prompts/formats/demo-format.md`

## 任務目標

請從以下 notes 生成適合初學者觀察、執行、修改的 demo。

生成結果要能幫助我：

1. 把筆記中的抽象概念轉成可執行範例。
2. 觀察不同 HTML 寫法造成的差異。
3. 透過修改程式碼加深理解。
4. 後續可以銜接到 `practice/` 練習題。

## 生成範圍

- notes 路徑：`notes/第02章_兼容性問題/兼容性問題.md`
- 章節名稱：{chapter-title}
- 目標輸出路徑：`demos/第02章_兼容性問題/`
- 預計 demo 數量：{請填入數量，例如 3 個；若不確定，請填「由 AI 判斷」}
- 難度：基礎 / 進階 / 整合
- 檔案形式：
  - 優先拆成 `index.html`、`style.css`、`main.js`、`README.md`
  - 如果 demo 很小，可以只使用 `index.html` 與 `README.md`

## Demo 類型偏好

請優先考慮以下類型：

1. 單一概念 demo
2. 對照型 demo
3. 常見錯誤 demo
4. 實務應用 demo
5. 小型整合 demo

## 請先輸出 Demo 規劃

請先整理：

| Demo | 類型 | 對應 notes 知識點 | 學習目標 | 建議路徑 |
|---|---|---|---|---|

確認規劃後，直接繼續輸出完整 demo，不需要再問我。

## 輸出要求

每個 demo 請包含：

1. 基本資訊
2. 學習目標
3. 對應 notes 知識點
4. 檔案結構
5. 完整檔案內容
6. 執行方式
7. 觀察重點
8. 修改練習
9. 常見錯誤或注意事項
10. 自我檢查

## 限制條件

請避免：

1. 生成與 notes 無關的 demo。
2. 一次產生過度龐大的專案。
3. 使用 Vue、React、Bootstrap 或其他第三方框架。
4. 將 appendix、practice、review 的內容混入 demo。
5. 只給程式碼但沒有教學說明。
6. 產生不可執行或缺少關鍵檔案的範例。

## Notes 內容

`notes/第02章_兼容性問題/兼容性問題.md`