我目前有一個 HTML 筆記包，目錄結構如下：

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

```text
notes/
  <章節>/
    *.md
```

規則如下：

`notes/<章節>/*.md` 存放的是從 `origin/<章節>/*.md` 原始學習資料重構成高品質、可長期維護、適合初學者逐步學習的教學筆記。

例如：

```text
origin/HTML簡介/標籤組成和關係.md
  -> notes/HTML簡介/標籤組成和關係.md
```

我想製作一個 `prompt` 根據 `notes/<章節>/*.md` 的教學筆記，製作出 **查表型資料**。

