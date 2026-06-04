# 本地資產 Alt 與連結文字整理提問模板

## 用途

用來請 AI 依照 `prompts/_drafts/origin-asset-alt-and-link-text-draft.md` 的規則，整理指定 `origin/<章節>/` 內 Markdown 文件中非程式碼範例內的圖片替代文字與本地附件連結文字。

這份模板只處理文字描述，不處理資產路徑或實體檔案名稱。

## 適用場景

當指定章節的本地資產路徑已經整理完成，但圖片 alt、HTML `alt` 屬性或附件連結文字仍然過於籠統時使用。

建議在執行 `prompts/_drafts/origin-asset-standardization-draft.md` 並確認路徑正常後，再執行本模板。

## 使用方式

1. 將下方「可直接複製的提問」貼給具備檔案系統存取能力的 AI。
2. 將 `<章節路徑>` 替換成實際章節目錄。
3. 一次只處理一個章節，避免跨章節誤改。
4. 執行後檢查 git diff，確認只改到 Markdown 圖片 alt、HTML `alt` 屬性或本地附件連結文字。

## 可直接複製的提問

```text
請依照 `prompts/_drafts/origin-asset-alt-and-link-text-draft.md` 的完整規則，處理以下章節：

`<章節路徑>`

請只處理上述指定章節，不要處理其他章節或其他資料夾。
```

## 可替換欄位

| 欄位 | 說明 | 範例 |
| --- | --- | --- |
| `<章節路徑>` | 要處理的 `origin/` 章節目錄 | `origin/第17章_圖片標籤/` |
