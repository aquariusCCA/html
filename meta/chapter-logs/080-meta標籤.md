# 080-meta標籤

## 狀態摘要

- origin 整理：已完成
- 資產命名：已完成
- alt 與連結文字：已完成
- notes 生成：已完成
- notes 完成檢查：已完成
- notes 索引 metadata：已完成
- demos 生成：已完成
- practice 生成：已完成
- 目前最新正確來源：`notes/080-meta標籤/`（已通過 notes 完成檢查）
- 後續流程：demos 與 practice 生成已完成；下一步依標準輸出規則生成或同步 `appendix/`、`review/`。

## 已執行流程

- 2026-06-07：已匯入本章 origin Markdown，共 1 個來源檔案。
- 2026-06-07：已整理本章本地圖片資產，共 3 個圖片檔。
- 2026-06-07：已依 `.claude/skills/asset-standardization/SKILL.md` 完成本地資產路徑與檔名標準化。
- 2026-06-07：已依 `.claude/skills/asset-alt-and-link-text/SKILL.md` 完成圖片替代文字與本地附件連結文字整理。
- 2026-06-07：依 `.claude/skills/update-judgment/SKILL.md` 判斷，本章目前應由 `origin/` 進入 `atomic` 切分提案階段；下游尚無實質檔案可同步。
- 2026-06-09：已依 `.claude/skills/atomic-note-splitting/SKILL.md` 產生或更新 `atomic/080-meta標籤/`，共 6 個 atomic notes；尚未執行 atomic 內容審查。
- 2026-06-12：已依 `.claude/skills/atomic-content-review/SKILL.md` 完成 `atomic/080-meta標籤/` 內容審查，並完成必要 atomic 內容修正。
- 2026-06-12：依 `.claude/skills/update-judgment/SKILL.md` 判斷，最新正確來源為 `atomic/080-meta標籤/`；後續應先生成 `notes/080-meta標籤/` 並完成 notes 內容檢查，再依標準輸出規則生成或同步 `appendix/`、`demos/`、`practice/`、`review/`。

- 2026-06-17：已依 `.codex/skills/notes-generation/SKILL.md` 由已審查的 `atomic/080-meta標籤/` 生成正式教學筆記 `notes/080-meta標籤/`；尚未執行 notes 完成檢查。

- 2026-06-19：已依 `.codex/skills/notes-content-review/SKILL.md` 完成 `notes/080-meta標籤/` 內容檢查；正式教學筆記可作為後續 notes 索引 metadata 與下游生成來源。

- 2026-06-19：已依 `.codex/skills/notes-index-metadata/SKILL.md` 完成 `notes/080-meta標籤/` 的 topics / summary 標記；並確認 `scripts/build-index.mjs --check` 通過，`meta/index.md` 與 notes front matter 一致。

- 2026-06-21：已依 `.codex/skills/notes-demo-generation/SKILL.md` 由已完成檢查的 `notes/080-meta標籤/` 生成 `demos/080-meta標籤/` 教學 demo；靜態檢查與瀏覽器驗證已完成，`demos 生成` 可同步標記為已完成。

- 2026-06-23：已依 `.codex/skills/notes-practice-generation/SKILL.md` 由已完成檢查的 `notes/080-meta標籤/` 生成 `practice/080-meta標籤/` 練習題，共 4 份 practice Markdown，並建立 1 組 `starter.html`；已完成 source_notes 回溯、`<details>` 成對與 starter HTML 骨架檢查，`practice 生成` 可同步標記為已完成。

## 待確認與下一步
- 依標準輸出規則生成或同步 `appendix/`、`review/`。
