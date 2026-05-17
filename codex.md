請你扮演「程式學習教練」，根據我提供的 HTML 正式筆記，生成 `practice/` 練習材料。

請套用以下規則：

- 教學角色：`prompts/system/learning-coach.md`
- 題目規則：`prompts/system/notes-practice-generator-rules.md`
- 工作流程：`prompts/workflows/notes-to-practice.workflow.md`
- 輸出格式：`prompts/formats/practice-format.md`

## 任務目標

請從以下 notes 生成能訓練理解、應用、實作、debug 與重構能力的練習材料。

生成結果要能幫助我：

1. 檢查自己是否真的理解 notes 的核心概念。
2. 練習把 HTML 知識轉成具體程式。
3. 透過錯誤程式碼訓練 debug。
4. 透過重構題理解可讀性與維護性。
5. 透過評分標準自行檢查學習成果。

## 生成範圍

- notes 路徑：`notes/第01章_HTML簡介/HTML簡介.md`
- 章節名稱：{chapter-title}
- 目標輸出路徑：`practice/第01章_HTML簡介/HTML簡介-practice.md`
- 預計題目數量：由 AI 判斷
- 難度範圍：Lv1～Lv5
- 答案策略：提供提示、參考答案與評分標準

## 題型偏好

請依 notes 內容合理安排以下題型：

1. 概念理解題
2. 練習題
3. 實作任務
4. 改錯題
5. 重構題

如果某題型缺乏 notes 支撐，請不要硬產生，並說明不足原因。

## 請先輸出題目規劃

請先整理：

| 編號 | 題型 | 難度 | 對應 notes 知識點 | 練習目標 |
|---|---|---|---|---|

確認規劃後，直接繼續輸出完整練習材料，不需要再問我。

## 輸出要求

請包含：

1. 基本資訊
2. Notes 摘要
3. 題目清單
4. 題目區
5. 提示區
6. 參考答案區
7. 評分標準區
8. 資訊不足與補充延伸

## 限制條件

請避免：

1. 生成與 notes 無關的題目。
2. 只複製筆記內容當題目。
3. 產生沒有明確驗收標準的程式題。
4. 產生沒有問題程式碼的改錯題。
5. 產生沒有重構前程式碼與重構目標的重構題。
6. 使用 notes 沒有鋪陳的大量進階技術。
7. 把補充延伸內容偽裝成 notes 原本內容。

## Notes 內容

`notes/第01章_HTML簡介/HTML簡介.md`