# Asset Path Normalization Workflow

## 目的

本 workflow 用於整理 Markdown 筆記中的本地資產路徑。

你需要根據 `prompts/system/asset-path-rules.md` 的規則，協助使用者分析 Markdown 內容中的圖片、PDF、附件連結，並產生整理後的資產目錄結構、檔名規劃與 Markdown 連結重寫結果。

---

## 適用任務

當使用者提出以下需求時，使用本 workflow：

- 整理 Markdown 筆記中的圖片路徑。
- 整理 Notion、Obsidian、Typora 或其他工具匯出的 Markdown 資產。
- 將散落的圖片、PDF、附件統一搬移到 `assets/`。
- 將 URL encoded 路徑轉成穩定的相對路徑。
- 重新命名沒有語意的圖片或附件檔名。
- 產生 Markdown 筆記整理後的資產目錄結構。
- 檢查 Markdown 中是否存在不符合規範的本地資產連結。

---

## 必須遵守的系統規則

你必須遵守：

```text
prompts/system/asset-path-rules.md
```

特別注意以下原則：

1. 所有本地資產必須集中到該章節目錄下的 `assets/`。
2. Markdown 中一律使用相對路徑。
3. 圖片放入 `assets/images/`。
4. PDF 放入 `assets/pdfs/`。
5. 其他附件放入 `assets/files/`。
6. 不得保留 URL encoded 路徑。
7. 不得使用絕對路徑。
8. 不得把 PDF 或附件放入 `assets/images/`。
9. 圖片使用圖片語法。
10. PDF 與一般附件使用一般連結語法。
11. 圖片 alt 文字原則上保留。
12. PDF 與附件 link text 原則上保留。
13. 沒有語意的檔名必須依統一格式重新命名。
14. 不同內容檔案不得因同名而覆蓋。
15. 相同內容的重複資產可以共用同一份檔案。

---

## 工作流程

### Step 1：確認輸入資料

先確認使用者是否提供以下資訊：

* Markdown 原始內容。
* Markdown 檔案名稱或主題名稱。
* Markdown 所屬章節目錄。
* 原始資產清單。
* 原始資產路徑。
* 是否能讀取實體資產檔案並計算內容 hash。

hash 不需要使用者人工提供。若能讀取實體資產檔案，必須根據檔案內容自動產生 hash。

預設使用 SHA-256，取前 6 碼小寫十六進位字元。

如果無法讀取實體資產檔案，不得使用 `<hash6>` 作為檔名或 Markdown 路徑的一部分。

此時應在輸出中標記為：

```text
缺少實體檔案，無法計算 hash
```

---

### Step 2：掃描 Markdown 中的本地資產連結

辨識以下語法：

```md
![alt](path)
[text](path)
```

並判斷 `path` 是否為本地資產。

以下不視為本地資產：

```text
https://...
http://...
mailto:...
#heading
```

本地資產包含：

```text
image.png
./image.png
../images/image.png
%encoded%20path/image.png
/Users/user/Desktop/image.png
C:\Users\user\Desktop\image.png
../../Downloads/file.pdf
```

---

### Step 3：判斷資產類型

根據副檔名分流：

```text
.png, .jpg, .jpeg, .webp, .gif, .svg  -> image
.pdf                                  -> pdf
其他可下載檔案                         -> file
```

目標目錄如下：

```text
image -> ./assets/images/
pdf   -> ./assets/pdfs/
file  -> ./assets/files/
```

---

### Step 4：判斷檔名策略

若原始檔名具有明確語意：

```text
tag-structure.png
html-basic-guide.pdf
form-validation-demo.zip
```

可以保留語意，必要時轉成安全 slug。

若原始檔名沒有明確語意，例如：

```text
image.png
image 1.png
img.png
screenshot.png
file.pdf
document.pdf
attachment.zip
下載.pdf
未命名.docx
```

使用統一格式：

```text
<md-slug>-<asset-kind>-<index>-<hash6>.<ext>
```

`<hash6>` 是格式說明中的欄位名稱，不是最終檔名文字。實際輸出時必須替換成檔案內容 hash 前 6 碼。

其中：

```text
asset-kind:
image -> img
pdf   -> pdf
file  -> file
```

---

### Step 5：建立序號

同一份 Markdown 內，不同資產類型分開計算序號。

例如 Markdown 中依序出現：

```text
圖片、PDF、圖片、附件
```

則命名為：

```text
xxx-img-001-a82f91.png
xxx-pdf-001-c19d20.pdf
xxx-img-002-f8e201.png
xxx-file-001-d91f3a.zip
```

---

### Step 6：產生目標資產路徑

依資產類型產生整理後路徑：

```md
./assets/images/<normalized-file-name>
./assets/pdfs/<normalized-file-name>
./assets/files/<normalized-file-name>
```

---

### Step 7：重寫 Markdown 連結

圖片：

```md
![原始 alt](./assets/images/<normalized-file-name>)
```

圖片沒有 alt 時：

```md
![](./assets/images/<normalized-file-name>)
```

PDF：

```md
[原始或優化後的 link text](./assets/pdfs/<normalized-file-name>)
```

一般附件：

```md
[原始或優化後的 link text](./assets/files/<normalized-file-name>)
```

---

### Step 8：產生整理報告

最後輸出以下內容：

1. 整理摘要。
2. 資產整理對照表。
3. 整理後目錄結構。
4. 重寫後 Markdown。
5. 需要人工確認的項目。
6. 發現的違規路徑或風險。

---

## 不可做的事

不得：

* 保留絕對路徑。
* 保留 URL encoded 路徑。
* 將所有資產混放在 `assets/` 根目錄。
* 將 PDF 或附件放到 `assets/images/`。
* 使用圖片語法引用 PDF。
* 使用圖片語法引用一般附件。
* 因圖片沒有 alt 就跳過。
* 因附件沒有 link text 就跳過。
* 在不同內容檔案同名時直接覆蓋。
* 自行假設 hash 已經正確；hash 必須來自已讀取的檔案內容。
* 在最終檔名或 Markdown 引用中保留 `<hash6>`、`hash6`、`<hash>` 等佔位文字。
* 修改外部網址。
