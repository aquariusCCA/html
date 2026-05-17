# Asset Path Normalization Output Format

## 目的

本格式用於規範「Markdown 本地資產路徑整理」任務的輸出形式。

請搭配以下規則使用：

```text
prompts/system/asset-path-rules.md
prompts/workflows/asset-path-normalization-workflow.md
```

---

## 輸出格式

請依照以下結構輸出。

---

# Markdown 資產路徑整理結果

## 1. 整理摘要

請用簡短條列說明本次整理結果。

格式：

```md
- Markdown 檔案：<markdown-file-name>
- 所屬章節：<chapter-name>
- 圖片數量：<image-count>
- PDF 數量：<pdf-count>
- 一般附件數量：<file-count>
- 是否發現 URL encoded 路徑：<是/否>
- 是否發現絕對路徑：<是/否>
- 是否有需要人工確認的項目：<是/否>
```

---

## 2. 資產整理對照表

請用表格列出每一個本地資產的整理結果。

格式：

```md
| 編號 | 類型 | 原始寫法 | 原始路徑 | 整理後路徑 | 命名原因 | 備註 |
|---|---|---|---|---|---|---|
| 1 | image | `![](image.png)` | `image.png` | `./assets/images/html-basic-img-001-a82f91.png` | 原始檔名無語意，使用統一命名格式 | 需搬移檔案 |
| 2 | pdf | `[講義](HTML%20Basic.pdf)` | `HTML%20Basic.pdf` | `./assets/pdfs/html-basic-pdf-001-c19d20.pdf` | URL encoded 路徑，轉為安全檔名 | 需確認 hash |
```

欄位說明：

| 欄位    | 說明                   |
| ----- | -------------------- |
| 編號    | 資產出現順序               |
| 類型    | `image`、`pdf`、`file` |
| 原始寫法  | Markdown 原始連結語法      |
| 原始路徑  | 原始 path              |
| 整理後路徑 | 轉換後相對路徑              |
| 命名原因  | 為什麼使用該檔名             |
| 備註    | 是否需搬移、確認 hash、確認語意等  |

---

## 3. 整理後目錄結構

請輸出整理後的章節目錄結構。

格式：

```text
<chapter-name>/
    assets/
        images/
            <image-file-name>
        pdfs/
            <pdf-file-name>
        files/
            <attachment-file-name>
    <markdown-file-name>
```

如果某一類資產不存在，可以省略該目錄，或保留空目錄並標註：

```text
pdfs/
    # no pdf assets
```

---

## 4. 重寫後 Markdown

請輸出完整重寫後 Markdown。

格式：

```md
<rewritten-markdown-content>
```

要求：

* 保留原本 Markdown 的主要內容。
* 僅重寫本地資產路徑。
* 圖片 alt 原則上保留。
* PDF 與附件 link text 原則上保留。
* 若 link text 過於模糊，可以優化，但需在整理對照表說明。
* 不要修改外部網址。
* 不要修改普通章節錨點。

---

## 5. 需要人工確認的項目

若有不確定事項，請列出。

格式：

```md
- `xxx.png`：無法取得檔案內容 hash，需實際讀取檔案後產生 hash。
- `[附件](demo.zip)`：link text 過於籠統，建議確認附件內容後改成更具語意的文字。
- `../Downloads/file.pdf`：原始路徑疑似不在章節目錄內，需確認檔案是否存在。
```

若沒有，輸出：

```md
無。
```

---

## 6. 發現的違規或風險

請列出原始 Markdown 中違反規則的地方。

常見違規：

* 使用絕對路徑。
* 使用 URL encoded 路徑。
* 使用上一層或多層相對路徑引用資產。
* 圖片、PDF、附件混放。
* PDF 使用圖片語法。
* 附件沒有 link text。
* 不同檔案可能同名覆蓋。
* 原始檔名包含空白、括號、百分比、反斜線或特殊符號。

格式：

```md
| 問題 | 原始內容 | 建議修正 |
|---|---|---|
| URL encoded 路徑 | `![](%E6%A8%99%E7%B1%A4/image.png)` | 改為 `./assets/images/...` |
| 絕對路徑 | `![](/Users/user/Desktop/image.png)` | 搬移到 `assets/images/` 後使用相對路徑 |
```

若沒有，輸出：

```md
無。
```

---

## 7. 最終建議

請用 1 到 3 點補充建議。

例如：

```md
1. 建議先實際搬移資產檔案，再批次重寫 Markdown。
2. 若無法取得檔案 hash，可先用 `<hash6>` 佔位，待程式處理時替換。
3. 建議將本規則整合進 Markdown 匯入或整理腳本，避免人工重複處理。
```

---

## 輸出限制

不得輸出：

* 絕對路徑。
* URL encoded 路徑作為整理後結果。
* PDF 的圖片語法。
* 附件的圖片語法。
* 未分類的 `./assets/<file>` 路徑。
* 未說明原因的檔名變更。
