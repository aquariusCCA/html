# 判斷範例：修改 notes 標題

使用者輸入：

```text
章節：100-標題標籤
改動檔案或資料夾：notes/100-標題標籤/
改動摘要：調整一篇 notes 的 H2 標題文字，但核心內容未改。
已知最新正確來源：notes/100-標題標籤/
希望處理方式：只判斷
補充限制：不要實際改檔。
```

建議判斷：

```text
更新類型：教學筆記標題修正
主要更新位置：notes/100-標題標籤/
最新正確來源：notes/100-標題標籤/
是否需要更新：暫緩
原因：notes 標題已變動，需確認 notes 索引元資料、appendix 索引或 anchor 是否引用舊標題；核心內容未改，暫不判定需要重生成 demos、practice、review、supplements 或 projects。
上游需要補齊：無
下游可能影響：notes front matter 的 summary/topics；appendix/100-標題標籤/ 的索引文字或 anchor；可能影響 demos/practice/review/supplements 中引用該標題的文字；若 meta/projects-index.md 的 source_notes 命中本章 notes，對應 projects 需列為候選檢查。
候選同步 / 候選重生成範圍：候選檢查 notes 索引元資料與 appendix 索引；候選檢查 demos/practice/review/supplements 的標題引用；用 meta/projects-index.md 反查 projects；不建議重生成全部下游。
chapter-status.md 建議標記：notes 索引元資料與 appendix 索引可標為待確認；若本章已通過最終驗收，最終驗收可標為待確認；notes 生成與 notes 完成檢查需依實際內容審查結果判斷，不因標題改動自動改為已完成。
projects-index.md 建議檢查：需要讀取 meta/projects-index.md，以本章 notes 路徑反查是否有 projects 的 source_notes 命中；若無命中，不需重建。
建議更新順序：先檢查 notes 標題與 anchor，再檢查 notes 索引元資料與 appendix 索引，接著搜尋單章下游是否引用舊標題，最後用 meta/projects-index.md 反查受影響 projects。
不應更新的位置：origin/、atomic/、其他章節、未受影響的下游內容、未命中 source_notes 的 projects。
待確認事項：新的標題是否改變 anchor；notes 索引元資料、appendix 或下游是否引用舊標題；meta/projects-index.md 是否有 projects 命中本章 notes。
```
