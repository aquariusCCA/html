目前我的筆記包架構如下：

```text
html/
  origin/
  notes/
  appendix/
  demos/
  practice/
  review/
  supplements/
  prompts/
```

其中：

- `origin/` 只存放 `.md` 原始資料文件。
- 章節中的筆記只會放在章節根目錄下，不會有 `origin/<章節>/notes/`。

`origin/` 的章節目錄規則如下：

```text
origin/
  <章節>/
    assets/
      images/
      pdfs/
      excels/
      word/
      files/
      ...
    *.md
```

一開始會先使用 `prompts/requests/rewrite-origin-asset-paths.md` 將 Markdown 原始資料中的本地資產引用重新命名為標準檔名。

標準檔名格式如下：

```text
<md-slug>-<asset-kind>-<index>-<hash6>.<ext>
```

但是有時候 `alt` 文字沒有填寫、或是根本不符合本地資產。

- **連結語法** 中的 **Link Text（連結文字）** 沒有填寫、或是根本不符合本地資產。
- **圖片語法** 中的 **Alt Text（替代文字）** 沒有填寫、或是根本不符合本地資產。

例如：

```text
![圖片.png](./assets/images/image-tags-img-001-7e5dcd.png)
[下載](./assets/word/html-basic-word-001-774caa.docx)
```

是一律將 `alt` 留空白，還是讓 AI 製作規範的 `alt` 文字。

你建議一律留白，還是讓 AI 判斷上下文後填寫？ 

之後我會開一個獨立的 prompt 用於處理 `alt` 文字，請先告訴我你會建議怎麼做？