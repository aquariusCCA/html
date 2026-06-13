請依照 `meta/update-rules.md` 的完整規則，幫我判斷以下 atomic 內容審查後的更新是否需要同步其他層級。

章節：
- `第16章_預格式化文本標籤`
- `第17章_文本格式化標籤`
- `第18章_圖片標籤`
- `第19章_音頻標籤`
- `第20章_視頻標籤`

改動檔案或資料夾：
- `atomic/第16章_預格式化文本標籤/01-pre-元素與預格式化文本.md`
- `atomic/第17章_文本格式化標籤/01-文本格式化標籤.md`
- `atomic/第18章_圖片標籤/01-img-標籤與常用屬性.md`
- `atomic/第18章_圖片標籤/02-常見圖片格式.md`
- `atomic/第19章_音頻標籤/01-audio-標籤基本用法.md`
- `atomic/第19章_音頻標籤/02-audio-source-多格式兼容寫法.md`
- `atomic/第20章_視頻標籤/01-video-標籤基本概念與常見屬性.md`
- `atomic/第20章_視頻標籤/02-video-source-多格式與低版本瀏覽器支援.md`

改動摘要：
- 已使用 `prompts/_drafts/atomic-content-review-draft.md` 審查第 16 - 20 章的 `atomic/<章節>/` atomic notes，並修正可直接套用的 atomic 內容問題。
- 第 16 章：修正 `<pre>` 使用說明，補充展示 HTML 標籤本身時需要轉義 `<`、`>` 等字元；並修正 CSS 範例中不合理的 `font: 12px/24px 1.66;`。
- 第 17 章：修正文本格式化標籤的語意說明，避免把 `<strong>`、`<em>`、`<ins>`、`<del>` 等標籤當成單純視覺樣式工具；補充 `<b>`、`<i>`、`<u>`、`<s>` 也有各自語意，並更新範例與圖片說明。
- 第 18 章：修正 `<img>` 的 `src`、`srcset` 與 `alt` 說明，補上範例圖片的 `alt`；修正常見圖片格式說明，包含 BMP、WebP 支援情況，以及 Base64 是編碼方式而非圖片格式。
- 第 19 章：修正 `<audio>` 常見格式與瀏覽器/編碼支援說明；補充現代瀏覽器對有聲自動播放的限制；修正 `<source>` 的 `type` 不是必填、`audio/mpeg` MIME type、備用文字轉義與多來源選擇說明。
- 第 20 章：修正 `<video>` 支援格式與編碼限制說明；調整布林屬性範例與 `controls`、`autoplay`、`muted`、`loop` 說明；補充現代瀏覽器自動播放限制、音視頻都可使用 `muted`，以及 `<source>` 多來源與備用文字顯示條件。

已知最新正確來源：
- `atomic/第16章_預格式化文本標籤/`
- `atomic/第17章_文本格式化標籤/`
- `atomic/第18章_圖片標籤/`
- `atomic/第19章_音頻標籤/`
- `atomic/第20章_視頻標籤/`

希望處理方式：只判斷

補充限制：
- 請先查證上述 atomic 檔案與資料夾、同章節 `origin/`、`notes/`、`appendix/`、`demos/`、`practice/`、`review/` 是否存在且是否受影響。
- 請查證 `meta/chapter-status.md` 與必要的 `meta/chapter-logs/<章節>.md`。
- 請區分「本輪工作樹實際改動」與「章節 log 中既有的歷史流程紀錄」；不要只根據 `meta/chapter-status.md` 目前標記就假設 atomic 內容審查尚未完成。
- 本輪只判斷更新影響，不建立、修改、刪除或重生成任何檔案。
- 不要重生成整章 notes，不要同步 appendix、demos、practice、review，也不要實際更新 `meta/chapter-status.md`。
- 若正式 `notes/` 或下游尚不存在，請在候選範圍中標明「下一步生成 / 待 notes 完成後再檢查」，不要假設已同步。
- 若現有資料不足以判斷，請標為 `待確認` 或 `暫緩`，不要自行假設。

請以章節為單位，分別只輸出 `meta/update-rules.md` 中的「判斷結論格式」：

```text
更新類型：
主要更新位置：
最新正確來源：
是否需要更新：是 / 否 / 暫緩
原因：
上游需要補齊：
下游可能影響：
候選同步 / 候選重生成範圍：
chapter-status.md 建議標記：
建議更新順序：
不應更新的位置：
待確認事項：
```
