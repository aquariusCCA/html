# Asset Path Normalization Workflow

## 目的

本 workflow 用於整理 Markdown 筆記中的本地資產路徑。

你需要根據 `prompts/system/asset-path-rules.md` 的規則，分析 Markdown 內容中的圖片、PDF、附件連結，產生整理後的資產目錄結構、檔名規劃、Markdown 連結重寫結果與檢查報告。

本文件回答「如何一步步做到正確」。規則來源請以 `prompts/system/asset-path-rules.md` 為準，輸出樣式請以 `prompts/formats/asset-path-normalization-format.md` 為準。

---

## 適用任務

當使用者提出以下需求時，使用本 workflow：

- 整理 Markdown 筆記中的圖片路徑。
- 整理 Notion、Obsidian、Typora 或其他工具匯出的 Markdown 資產。
- 將散落的圖片、PDF、附件統一搬移到 `assets/`。
- 將 URL encoded 路徑轉成穩定的相對路徑。
- 重新命名沒有語意的圖片、PDF 或附件檔名。
- 產生 Markdown 筆記整理後的資產目錄結構。
- 檢查 Markdown 中是否存在不符合規範的本地資產連結。

---

## 必須讀取的文件

```text
prompts/system/asset-path-rules.md
prompts/formats/asset-path-normalization-format.md
```

---

## 工作流程

### Step 1：確認輸入資料

先確認使用者是否提供以下資訊：

- Markdown 原始內容。
- Markdown 檔案名稱或主題名稱。
- Markdown slug。
- Markdown 所屬章節目錄。
- 原始資產清單。
- 原始資產路徑。
- 是否能讀取實體資產檔案並計算內容 hash。

`Markdown slug` 是用來代表這份 Markdown 檔案或主題的安全識別字，會作為無語意資產檔名中的 `<md-slug>` 前綴。它不是 Markdown 內建語法，也不是章節錨點。

產生 `Markdown slug` 時，應遵守以下原則：

- 以 Markdown 檔名或主題名稱為來源，不包含 `.md` 副檔名。
- 優先使用小寫英文字母、數字與連字號 `-`。
- 將空白、底線與分隔符號轉成連字號。
- 移除或轉換括號、`#`、`?`、`%`、反斜線與其他不適合放入檔名的特殊符號。
- 合併連續連字號，並移除開頭與結尾的連字號。
- 若原名稱是中文，應轉成簡短、可讀且能代表主題的英文 slug。

範例：

```text
HTML 標籤結構.md        -> html-tag-structure
01 CSS 盒模型.md        -> css-box-model
表單驗證範例.md         -> form-validation-example
JavaScript: DOM API.md  -> javascript-dom-api
```

若缺少 Markdown slug，根據 Markdown 檔名或主題名稱產生安全 slug。

hash 不需要使用者人工提供。若能讀取實體資產檔案，必須根據檔案內容自動產生 SHA-256，取前 6 碼小寫十六進位字元。

若無法讀取實體資產檔案，不得自行產生或猜測 hash，也不得在最終檔名或 Markdown 路徑中保留 `<hash6>`。

此時應在「需要人工確認的項目」標記：

```text
缺少實體檔案，無法計算 hash
```

---

### Step 2：掃描 Markdown 中的連結

辨識 Markdown 中的圖片與一般連結：

```md
![alt](path)
[text](path)
```

排除下列非本地資產：

```text
https://...
http://...
mailto:...
#heading
```

下列路徑視為需要整理的本地資產：

```text
image.png
./image.png
../images/image.png
%encoded%20path/image.png
/Users/user/Desktop/image.png
C:\Users\user\Desktop\image.png
../../Downloads/file.pdf
```

掃描時要保留每個資產在 Markdown 中的原始寫法、原始 path、出現順序、alt 文字或 link text。

---

### Step 3：判斷資產類型與目標資料夾

根據副檔名分流：

```text
.png, .jpg, .jpeg, .webp, .gif, .svg  -> image -> ./assets/images/
.pdf                                  -> pdf   -> ./assets/pdfs/
其他可下載檔案                         -> file  -> ./assets/files/
```

如果 PDF 或附件使用圖片語法，仍要依副檔名判斷資產類型，並在重寫時改成一般連結語法。

---

### Step 4：判斷檔名策略

若原始檔名具有明確語意，可以保留語意，必要時轉成安全 slug。

範例：

```text
標籤的結構圖.png      -> tag-structure.png
HTML 基礎講義.pdf     -> html-basic-guide.pdf
表單驗證範例.zip      -> form-validation-demo.zip
```

若原始檔名沒有明確語意，使用統一命名格式：

```text
<md-slug>-<asset-kind>-<index>-<hash6>.<ext>
```

常見無語意檔名：

```text
image.png
image 1.png
img.png
picture.png
screenshot.png
untitled.png
file.pdf
document.pdf
attachment.zip
下載.pdf
未命名.docx
```

`asset-kind` 對應：

```text
image -> img
pdf   -> pdf
file  -> file
```

`<hash6>` 只是格式欄位名稱。實際輸出時必須替換成真實檔案 hash 前 6 碼；若無法計算 hash，該項目必須列為需要人工確認。

---

### Step 5：建立序號與資產對照表

同一份 Markdown 內，不同資產類型分開計算序號，序號固定三位數。

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

建立資產對照表時，每個項目都要包含：

- 原始 Markdown 寫法。
- 原始路徑。
- 資產類型。
- 整理後路徑。
- 命名原因。
- 是否需要搬移檔案。
- hash 是否已由實體檔案內容計算。
- 是否需要人工確認。

---

### Step 6：產生整理後目錄結構

根據資產類型產生章節目錄結構：

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

若某類資產不存在，可省略該目錄，或保留空目錄並標註：

```text
pdfs/
    # no pdf assets
```

---

### Step 7：重寫 Markdown 連結

只重寫本地資產路徑，不修改外部網址與章節錨點。

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

PDF 或一般附件若原本使用圖片語法，必須改成一般連結語法。若 link text 缺失或過於模糊，補上可讀文字並在對照表說明。

---

### Step 8：檢查違規與風險

輸出前逐項檢查：

- 整理後路徑是否全部使用 `./assets/images/`、`./assets/pdfs/` 或 `./assets/files/`。
- 是否仍有絕對路徑。
- 是否仍有 URL encoded 路徑。
- 是否仍有上一層或多層相對路徑。
- PDF 是否誤用圖片語法。
- 附件是否誤用圖片語法。
- PDF 或附件是否缺少 link text。
- 檔名是否含空白、括號、`#`、`?`、`%`、反斜線或特殊符號。
- 最終檔名或 Markdown 路徑是否仍含 `<hash6>`、`hash6`、`<hash>`。
- 不同內容的檔案是否可能同名覆蓋。

若發現任何問題，必須列入「需要人工確認的項目」或「發現的違規或風險」。

---

### Step 9：依格式輸出整理報告

最後依 `prompts/formats/asset-path-normalization-format.md` 輸出：

1. 整理摘要。
2. 資產整理對照表。
3. 整理後目錄結構。
4. 重寫後 Markdown。
5. 需要人工確認的項目。
6. 發現的違規或風險。
7. 最終建議。

---

## 完整處理範例

### 輸入 Markdown

```md
# HTML 標籤組成和關係

![](%E6%A8%99%E7%B1%A4%E7%B5%84%E6%88%90%E5%92%8C%E9%97%9C%E4%BF%82/image.png)

![標籤的結構圖](%E6%A8%99%E7%B1%A4%E7%B5%84%E6%88%90%E5%92%8C%E9%97%9C%E4%BF%82/%25E6%25A8%2599%25E7%25B1%25A4%25E7%259A%2584%25E7%25B5%2590%25E6%25A7%258B%25E5%259C%2596.png)

[HTML 講義](HTML%20Basic.pdf)

[練習檔案](demo.zip)
```

### 整理後目錄

```text
HTML/
    assets/
        images/
            html-tag-composition-img-001-a82f91.png
            tag-structure.png
        pdfs/
            html-basic-pdf-001-c19d20.pdf
        files/
            html-practice-file-001-f8e201.zip
    html-tag-composition.md
```

### 重寫後 Markdown

```md
# HTML 標籤組成和關係

![](./assets/images/html-tag-composition-img-001-a82f91.png)

![標籤的結構圖](./assets/images/tag-structure.png)

[HTML 講義](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)

[練習檔案](./assets/files/html-practice-file-001-f8e201.zip)
```

---

## 不可做的事

不得：

- 保留絕對路徑。
- 保留 URL encoded 路徑。
- 修改外部網址。
- 修改普通章節錨點。
- 將所有資產混放在 `assets/` 根目錄。
- 將 PDF 或附件放到 `assets/images/`。
- 使用圖片語法引用 PDF。
- 使用圖片語法引用一般附件。
- 因圖片沒有 alt 就跳過。
- 因附件沒有 link text 就跳過。
- 在不同內容檔案同名時直接覆蓋。
- 自行假設 hash 已經正確。
- 在最終檔名或 Markdown 引用中保留 `<hash6>`、`hash6`、`<hash>` 等佔位文字。
