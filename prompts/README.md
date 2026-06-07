# AI 提示詞管理區

`prompts/` 用來管理 HTML Knowledge Pack 中可重複使用的 AI 協作提示詞。

## 用途

本區不是 HTML 知識內容本身，而是 AI 協作流程的管理區。使用者可以從這裡選擇合適的正式提問模板，交給具備檔案系統存取能力的 AI 執行指定任務。

## 目錄結構

```text
prompts/
  requests/
  _drafts/
```

| 目錄 | 作用 | 用途 |
| --- | --- | --- |
| `requests/` | 正式提問模板 | 存放可直接複製給 AI 使用的任務提問。每份模板通常包含用途、適用場景、使用方式、可直接複製的提問與可替換欄位。 |
| `_drafts/` | 底層工作規則 | 存放 AI 執行任務時必須遵守的完整 workflow、角色、上下文、限制條件、輸出格式與品質標準。 |

## 使用流程

1. 先確認要執行的任務類型，例如整理原始資料、重構筆記、審查內容、產生 demo、產生練習題或產生索引。
2. 到 `prompts/requests/` 選擇對應的正式提問模板。
3. 將模板中的路徑、章節名稱或檔案名稱替換成實際目標。
4. 將「可直接複製的提問」貼給具備檔案系統存取能力的 AI。
5. 執行後檢查輸出資料夾、檔案清單與 git diff。
6. 若發現任務規則需要調整，先更新 `_drafts/` 中的底層規則，再同步更新 `requests/` 的正式提問模板。

## 維護原則

* `requests/` 放使用者要貼出去的正式提問，不放完整 workflow 細節。
* `_drafts/` 放 AI 執行任務時要遵守的完整規則，不作為日常複製入口。
* 一個正式 request 原則上對應一個主要 draft；若例外使用 `meta/` 規則，需在模板中明確標示。
* 新增 prompt 時，檔名應以任務動詞開頭，例如 `rewrite-`、`review-`、`generate-` 或 `check-`。
* 更新底層規則後，必須檢查相關 `requests/` 是否需要同步更新用途、適用場景、使用方式或可替換欄位。
* 不要在 README 中複製各 prompt 的完整內容；README 只作為導覽、索引與維護規範。

## 提示詞索引

| 正式模板 | 用途 | 規則來源 |
| --- | --- | --- |
| [`requests/check-html-update-impact.md`](requests/check-html-update-impact.md) | 判斷指定章節、檔案或資料夾的改動是否需要同步其他層級。 | [`../meta/update-rules.md`](../meta/update-rules.md) |
| [`requests/rewrite-origin-asset-paths.md`](requests/rewrite-origin-asset-paths.md) | 標準化 `origin/` Markdown 文件中的本地資產引用路徑與檔名。 | [`_drafts/origin-asset-standardization-draft.md`](_drafts/origin-asset-standardization-draft.md) |
| [`requests/rewrite-origin-alt-and-link-text.md`](requests/rewrite-origin-alt-and-link-text.md) | 整理 `origin/` Markdown 文件中的圖片替代文字與本地附件連結文字。 | [`_drafts/origin-asset-alt-and-link-text-draft.md`](_drafts/origin-asset-alt-and-link-text-draft.md) |
| [`requests/rewrite-origin-to-atomic-notes.md`](requests/rewrite-origin-to-atomic-notes.md) | 將 `origin/` 原始 Markdown 筆記重新切分、合併與修正為 `atomic/` notes。 | [`_drafts/origin-to-atomic-notes-draft.md`](_drafts/origin-to-atomic-notes-draft.md) |
| [`requests/review-atomic-content.md`](requests/review-atomic-content.md) | 審查 `atomic/` notes 的技術事實、教學表述、主題歸屬與轉換品質。 | [`_drafts/atomic-content-review-draft.md`](_drafts/atomic-content-review-draft.md) |
| [`requests/rewrite-atomic-html-teaching-notes.md`](requests/rewrite-atomic-html-teaching-notes.md) | 將 `atomic/` 原子化資料重構成正式 `notes/` HTML 教學筆記。 | [`_drafts/atomic-to-html-teaching-notes-draft.md`](_drafts/atomic-to-html-teaching-notes-draft.md) |
| [`requests/review-html-teaching-notes.md`](requests/review-html-teaching-notes.md) | 審查正式 `notes/` HTML 教學筆記是否達到可教學、可回查、可維護的品質。 | [`_drafts/html-teaching-notes-content-review-draft.md`](_drafts/html-teaching-notes-content-review-draft.md) |
| [`requests/generate-html-teaching-demos.md`](requests/generate-html-teaching-demos.md) | 由單一 `notes/` 正式教學筆記產生可直接開啟的 HTML 教學 demo。 | [`_drafts/notes-to-html-teaching-demos-draft.md`](_drafts/notes-to-html-teaching-demos-draft.md) |
| [`requests/generate-html-practice.md`](requests/generate-html-practice.md) | 由 `notes/` 正式教學筆記產生可實作、可除錯、可驗收的 HTML 練習題。 | [`_drafts/notes-to-html-practice-draft.md`](_drafts/notes-to-html-practice-draft.md) |
| [`requests/generate-html-review-system.md`](requests/generate-html-review-system.md) | 由章節 `notes/` 正式教學筆記產生可長期使用的 HTML 複習系統。 | [`_drafts/notes-to-review-system-draft.md`](_drafts/notes-to-review-system-draft.md) |
| [`requests/generate-html-note-indexes.md`](requests/generate-html-note-indexes.md) | 由單一 `notes/` 正式教學筆記產生方便搜尋、回查與交叉分類的索引系統。 | [`_drafts/notes-to-index-system-draft.md`](_drafts/notes-to-index-system-draft.md) |

## 新增或更新提示詞

新增正式提示詞時，請先建立或更新 `_drafts/` 中的底層工作規則，再建立 `requests/` 中可直接使用的正式提問模板。完成後同步更新本 README 的提示詞索引，確保使用者可以從入口文件找到新的模板與規則來源。
