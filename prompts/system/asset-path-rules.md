# Asset Path Rules

## 目的

本文件定義 Markdown 筆記中的本地資產路徑規範，包含圖片、PDF、附件與其他可下載檔案。目標是讓筆記在整理、搬移、同步、版本控制與跨平台使用時，都能維持穩定、可讀、可維護的資產結構。

本規則適用於以下章節型筆記結構：

```text
<章節>/
    assets/
        images/
        pdfs/
        files/
    *.md
```

---

## 適用範圍

本規則處理 Markdown 文件中出現的本地資產連結，例如：

| 資產類型 | 常見副檔名 | 存放目錄 | Markdown 寫法 |
|---|---|---|---|
| 圖片 | `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif`, `.svg` | `assets/images/` | `![alt](path)` |
| PDF | `.pdf` | `assets/pdfs/` | `[text](path)` |
| 一般附件 | `.docx`, `.pptx`, `.xlsx`, `.csv`, `.zip`, `.json`, `.xml`, `.sql`, `.txt` | `assets/files/` | `[text](path)` |

> 外部網址不屬於本地資產。若筆記需要離線保存，應先下載檔案，再依本規則整理到 `assets/` 目錄中。

---

## 核心原則

### 1. 所有本地資產都必須集中到 `assets/`

同一章節底下的 Markdown 文件，只能引用該章節目錄中的 `assets/` 資產。

正確：

```md
![](./assets/images/html-tag-structure-img-001-a82f91.png)
[HTML 講義 PDF](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
[範例程式](./assets/files/html-demo-file-001-f8e201.zip)
```

錯誤：

```md
![](標籤組成和關係/image.png)
![](/Users/user/Desktop/image.png)
![](C:\Users\user\Desktop\image.png)
[講義](../../Downloads/html-basic.pdf)
[附件](%E9%99%84%E4%BB%B6/demo.zip)
```

---

### 2. Markdown 中一律使用相對路徑

所有本地資產引用都應使用相對路徑，並以目前 Markdown 文件所在章節為基準。

建議格式：

```md
./assets/<asset-type>/<normalized-file-name>
```

例如：

```md
![](./assets/images/html-tag-structure-img-001-a82f91.png)
[下載 PDF](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
[下載附件](./assets/files/html-practice-file-001-f8e201.zip)
```

---

### 3. 圖片、PDF、附件必須依類型分流

資產不得全部混放在 `assets/` 根目錄。

```text
assets/
    images/    # 圖片類資產
    pdfs/      # PDF 文件
    files/     # 其他一般附件
```

分類規則：

```text
.png, .jpg, .jpeg, .webp, .gif, .svg  -> assets/images/
.pdf                                  -> assets/pdfs/
其他可下載檔案                         -> assets/files/
```

---

### 4. 檔名負責管理，alt 文字與 link text 負責語意

檔名的重點是穩定、可追蹤、避免衝突；Markdown 顯示文字的重點是讀者理解。

不要把兩者混在一起。

圖片：

```md
![標籤的結構圖](./assets/images/html-tag-structure-img-001-a82f91.png)
```

PDF：

```md
[HTML 基礎講義](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
```

附件：

```md
[HTML 練習檔](./assets/files/html-practice-file-001-f8e201.zip)
```

---

## 資產命名規則

### 1. 有明確語意的原始檔名，可以沿用或轉成 slug

若原始檔名本身有清楚語意，可以保留其語意，但建議轉成英文 slug，避免跨平台或工具處理時產生編碼問題。

原始檔名：

```text
標籤的結構圖.png
HTML 基礎講義.pdf
表單驗證範例.zip
```

建議整理為：

```text
tag-structure.png
html-basic-guide.pdf
form-validation-demo.zip
```

若專案明確允許中文檔名，也可以保留中文，但同一份筆記庫應採用一致策略。

---

### 2. 沒有明確語意的原始檔名，使用統一命名格式

沒有語意的檔名包含：

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

統一命名格式：

```text
<md-slug>-<asset-kind>-<index>-<hash6>.<ext>
```

其中：

| 欄位 | 說明 | 範例 |
|---|---|---|
| `md-slug` | Markdown 檔名或主題 slug | `html-tag-structure` |
| `asset-kind` | 資產類型代碼 | `img`, `pdf`, `file` |
| `index` | 同類型資產在 Markdown 中出現的順序 | `001` |
| `hash6` | 檔案內容 hash 前 6 碼 | `a82f91` |
| `ext` | 小寫副檔名 | `png`, `pdf`, `zip` |

範例：

```text
html-tag-structure-img-001-a82f91.png
html-tag-structure-img-002-c19d20.png
html-basic-pdf-001-d91f3a.pdf
html-practice-file-001-f8e201.zip
```

---

### 3. 副檔名統一小寫

正確：

```text
html-tag-structure-img-001-a82f91.png
html-basic-pdf-001-c19d20.pdf
```

不建議：

```text
html-tag-structure-img-001-a82f91.PNG
html-basic-pdf-001-c19d20.PDF
```

---

## 序號規則

### 1. 序號根據資產在 Markdown 中出現的順序決定

第一個同類型資產：

```text
001
```

第二個同類型資產：

```text
002
```

第三個同類型資產：

```text
003
```

序號固定三位數，不足補零。

---

### 2. 不同資產類型分開計算序號

例如同一份 Markdown 中依序出現：圖片、PDF、圖片、附件。

整理後可以是：

```text
html-basic-img-001-a82f91.png
html-basic-pdf-001-c19d20.pdf
html-basic-img-002-f8e201.png
html-basic-file-001-d91f3a.zip
```

圖片有自己的序號，PDF 有自己的序號，附件也有自己的序號。

---

## Hash 規則

hash 用於避免不同資產檔名衝突，也能協助判斷兩個檔案是否可能為同一內容。

建議使用檔案內容產生 hash，取前 6 碼。

例如：

```text
a82f91
```

完整命名：

```text
html-tag-structure-img-001-a82f91.png
```

若兩張圖片或兩個附件原本都叫做 `image.png`、`file.pdf`、`attachment.zip`，也不會互相覆蓋。

---

## Markdown 連結重寫規則

### 1. 圖片使用圖片語法

原始：

```md
![標籤的結構圖](image.png)
```

整理後：

```md
![標籤的結構圖](./assets/images/html-tag-structure-img-001-a82f91.png)
```

---

### 2. PDF 使用一般連結語法

原始：

```md
[HTML 基礎講義](HTML%20Basic.pdf)
```

整理後：

```md
[HTML 基礎講義](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
```

PDF 不應使用圖片語法：

```md
![HTML 基礎講義](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
```

---

### 3. 一般附件使用一般連結語法

原始：

```md
[範例檔案](demo.zip)
```

整理後：

```md
[範例檔案](./assets/files/html-basic-file-001-f8e201.zip)
```

---

### 4. 原本沒有 link text 的附件，應補上可讀文字

圖片沒有 alt 文字時，可以保持空 alt。

```md
![](./assets/images/html-basic-img-001-a82f91.png)
```

但一般連結若缺少文字，會降低可讀性，建議使用原始檔名或整理後的語意名稱作為 link text。

不建議：

```md
[](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
```

建議：

```md
[HTML 基礎講義](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
```

---

## Alt 文字與 Link Text 規則

### 1. 圖片原本有 alt 文字，原則上保留

原始：

```md
![標籤的結構圖](image.png)
```

整理後：

```md
![標籤的結構圖](./assets/images/html-tag-structure-img-001-a82f91.png)
```

---

### 2. 圖片原本沒有 alt 文字，不要硬補檔名

原始：

```md
![](image.png)
```

整理後：

```md
![](./assets/images/html-tag-structure-img-001-a82f91.png)
```

不要變成：

```md
![html-tag-structure-img-001](./assets/images/html-tag-structure-img-001-a82f91.png)
```

---

### 3. PDF 與附件的 link text 原則上保留

原始：

```md
[授課講義](file.pdf)
```

整理後：

```md
[授課講義](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
```

若原始 link text 不清楚，例如 `下載`、`附件`、`點我`，可以依內容補成更具語意的文字。

---

## URL 編碼與特殊字元規則

### 1. 不得保留 URL encoded 路徑

錯誤：

```md
![](%E6%A8%99%E7%B1%A4/image.png)
[講義](HTML%20Basic.pdf)
```

正確：

```md
![](./assets/images/html-tag-structure-img-001-a82f91.png)
[HTML 基礎講義](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)
```

---

### 2. 檔名建議只使用安全字元

建議使用：

```text
a-z
0-9
-
_
.
```

避免使用：

```text
空白
括號
井字號 #
問號 ?
百分比 %
反斜線 \
特殊符號
```

---

## 衝突處理規則

### 1. 不同檔案產生相同目標檔名時，加上 hash

例如兩個附件都整理成：

```text
html-basic-demo.zip
```

應改為：

```text
html-basic-demo-a82f91.zip
html-basic-demo-c19d20.zip
```

---

### 2. 相同內容的重複資產可以共用同一檔案

若兩個 Markdown 連結指向的檔案內容完全相同，可以只保留一份資產，並讓多個連結指向同一個整理後路徑。

但若只是檔名相同、內容不同，不得覆蓋。

---

## 最終輸出規範

圖片：

```md
![<原始 alt 文字>](./assets/images/<normalized-file-name>)
```

圖片 alt 為空：

```md
![](./assets/images/<normalized-file-name>)
```

PDF：

```md
[<原始或優化後的 link text>](./assets/pdfs/<normalized-file-name>)
```

一般附件：

```md
[<原始或優化後的 link text>](./assets/files/<normalized-file-name>)
```

---

## 禁止事項

不得輸出以下路徑：

```md
![](Notion自動產生資料夾/image.png)
![](%E6%A8%99%E7%B1%A4/image.png)
![](../../Downloads/image.png)
![](/Users/user/Desktop/image.png)
![](C:\Users\user\Desktop\image.png)
[講義](../../Downloads/html-basic.pdf)
[附件](C:\Users\user\Downloads\demo.zip)
```

不得：

- 使用絕對路徑。
- 保留 URL encoded 路徑。
- 將所有資產混放在同一個資料夾。
- 將 PDF 或附件放到 `assets/images/`。
- 使用圖片語法引用 PDF 或一般附件。
- 只依賴圖片 alt 文字作為唯一命名依據。
- 因為圖片沒有 alt 文字就跳過處理。
- 因為附件沒有 link text 就跳過處理。
- 在不同內容檔案同名時直接覆蓋。

---

## 完整範例

### 輸入

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

### 輸出

```md
# HTML 標籤組成和關係

![](./assets/images/html-tag-composition-img-001-a82f91.png)

![標籤的結構圖](./assets/images/tag-structure.png)

[HTML 講義](./assets/pdfs/html-basic-pdf-001-c19d20.pdf)

[練習檔案](./assets/files/html-practice-file-001-f8e201.zip)
```