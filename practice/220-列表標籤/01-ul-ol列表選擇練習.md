---
source_notes:
  - notes/220-列表標籤/01-列表標籤入門與-ul-ol.md
topics: [ul, ol, li, "列表選擇"]
summary: "練習依照內容是否有順序，選擇 ul 或 ol，並用 li 寫出正確的列表結構。"
---

# ul / ol 列表選擇練習

> 本練習對應 notes/220-列表標籤/01-列表標籤入門與-ul-ol.md

## 練習 1：把材料清單寫成合適的列表

你要在網頁中列出「需要準備的教材」：

- HTML 筆記
- 範例檔案
- 練習題
- 瀏覽器

請判斷這組內容應該使用 `<ul>` 還是 `<ol>`，並寫出完整 HTML。

<details>
<summary>參考解答</summary>

```html
<ul>
  <li>HTML 筆記</li>
  <li>範例檔案</li>
  <li>練習題</li>
  <li>瀏覽器</li>
</ul>
```

解題說明：這組內容只是準備項目，沒有先後順序，因此使用無序列表 `<ul>`。每個列表項目都要放在 `<li>` 裡。
</details>

## 練習 2：把操作步驟寫成合適的列表

你要說明「完成練習的流程」：

1. 開啟 notes
2. 閱讀範例
3. 完成練習
4. 對照解答

請判斷這組內容應該使用 `<ul>` 還是 `<ol>`，並寫出完整 HTML。

<details>
<summary>參考解答</summary>

```html
<ol>
  <li>開啟 notes</li>
  <li>閱讀範例</li>
  <li>完成練習</li>
  <li>對照解答</li>
</ol>
```

解題說明：這組內容有明確的執行順序，因此使用有序列表 `<ol>`。`<ol>` 裡的每一個項目同樣要使用 `<li>`。
</details>

## 練習 3：為兩組內容選擇不同列表

請用 HTML 表示以下兩組內容：

第一組是「課程主題」：

- HTML
- CSS
- JavaScript

第二組是「學習順序」：

1. 先認識 HTML 結構
2. 再學習 CSS 樣式
3. 最後加入 JavaScript 互動

請分別選擇適合的列表標籤。

<details>
<summary>參考解答</summary>

```html
<h3>課程主題</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h3>學習順序</h3>
<ol>
  <li>先認識 HTML 結構</li>
  <li>再學習 CSS 樣式</li>
  <li>最後加入 JavaScript 互動</li>
</ol>
```

解題說明：「課程主題」只是同類項目的集合，適合 `<ul>`；「學習順序」有先後關係，適合 `<ol>`。標題可用來區分兩組列表。
</details>

## 練習 4：判斷列表選擇是否合理

觀察下面的 HTML：

```html
<ul>
  <li>下載範例檔</li>
  <li>打開 index.html</li>
  <li>修改列表結構</li>
  <li>重新整理瀏覽器</li>
</ul>
```

這段內容如果是在說明操作流程，是否應該調整？請寫出你認為更合適的 HTML。

<details>
<summary>參考解答</summary>

```html
<ol>
  <li>下載範例檔</li>
  <li>打開 index.html</li>
  <li>修改列表結構</li>
  <li>重新整理瀏覽器</li>
</ol>
```

解題說明：如果這些項目是必須依序完成的步驟，就應改用 `<ol>`。列表的核心判斷是內容本身是否有順序，而不是外觀想顯示哪一種符號。
</details>
