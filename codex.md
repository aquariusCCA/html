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

規則如下：

1. `origin/` 只存放 `.md` 原始資料文件。
2. `origin/<章節>/` 下面的 `.md` 是原始資料。
3. `origin/<章節>/assets/` 存放該章節使用到的圖片、PDF、Excel、Word 或其他附件。
4. 不會有 `origin/<章節>/notes/`。

但是有時候 `origin/<章節>/*.md` 的原始筆記，有些單篇筆記中的章節切分的很不合理、或是某單篇筆記特別長、某單篇筆記特別短。

舉例：

```text
`origin/二分查找/二分查找.md`  ->  三千多行筆記內容
`origin/二分查找/二分查找-LeetCode習題.md`  ->  五百行筆記內容
```

再舉例：

```text
`origin/二分查找/二分查找.md`

裡面的章節切分
    -> 二分查找基礎版
    -> 二分查找改動版
    -> 二分查找平衡版 (此時錯誤的將二分查找Leftmost 与 Rightmost內容錯誤放到這)
```

我目前的想法是將 `origin/<章節>/*.md` 的原始筆記透過 prompt 切分或合併成新的原始資料放在 `origin/<章節>/atomic/*.md`。

然後輸出建議，讓使用者自行決定是否要取代原來的原始資料。

你認為這樣好嗎？