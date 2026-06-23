---
source_notes:
  - notes/130-語意化標籤/02-div與語意化佈局比較.md
topics: [div, 語意化佈局, 標籤選擇, section使用判斷]
summary: "div 佈局與語意化佈局比較的動手練習，包含重構與常見誤用改錯。"
---

# div 與語意化佈局比較練習

> 動手練習。概念與用法說明見 notes/130-語意化標籤/02-div與語意化佈局比較.md。

## 題目 1（基礎）· 重構題

下面這段 HTML 使用 `div` 包出頁首、導覽列與一段主題內容。請依內容角色改成語意化標籤。

```html
<body>
  <div class="header">頭部標籤</div>
  <div class="nav">導航欄標籤</div>
  <div class="section">
    <h2>最新消息</h2>
    <p>這是一段與最新消息相關的內容。</p>
  </div>
</body>
```

完成標準：

- 頁首區改用能表示開頭內容的標籤。
- 導覽區改用能表示導覽的標籤。
- 有標題的主題內容改用合適的主題區塊標籤。
- 保留 `h2` 與 `p` 的內容結構。

<details>
<summary>參考解答</summary>

```html
<body>
  <header>頭部標籤</header>
  <nav>導航欄標籤</nav>
  <section>
    <h2>最新消息</h2>
    <p>這是一段與最新消息相關的內容。</p>
  </section>
</body>
```

解題說明：當這些區塊本來就分別代表頁首、導覽列與有共同主題的內容區塊時，使用 `<header>`、`<nav>`、`<section>` 能直接表達內容角色。畫面可能與 `div` 版本相同，但 HTML 結構更容易被維護者、搜尋引擎與輔助技術理解。

</details>

## 題目 2（進階）· 改錯題

下面的寫法只因為 class 名稱叫 `nav`，就把外層改成 `<nav>`。但內容其實不是導覽連結，而是一段一般提示文字。請修正它。

```html
<nav class="nav">
  <p>本頁內容適合初學者閱讀。</p>
</nav>
```

完成標準：

- 不因為 class 名稱叫 `nav` 就使用 `<nav>`。
- 依內容實際用途選擇更合理的容器。
- 不新增 notes 未教過的語意化標籤。

<details>
<summary>參考解答</summary>

```html
<div class="nav">
  <p>本頁內容適合初學者閱讀。</p>
</div>
```

解題說明：語意化不是「class 名稱看起來像就換標籤」，而是根據內容實際用途選擇標籤。`<nav>` 應該用於導覽連結；這裡只是一般提示文字，沒有導覽角色，因此使用沒有特別內容語意的 `<div>` 更合理。

</details>

## 題目 3（基礎）· 改錯題

下面這段 HTML 把一組只為了排版而包在一起的按鈕改成 `<section>`。請修正它。

```html
<section class="button-group">
  <button>儲存</button>
  <button>取消</button>
</section>
```

完成標準：

- 不把純排版或分組需求誤用成 `section`。
- 保留兩個按鈕。
- 使用 notes 中建議的合理容器。

<details>
<summary>參考解答</summary>

```html
<div class="button-group">
  <button>儲存</button>
  <button>取消</button>
</div>
```

解題說明：`<section>` 代表有共同主題的一段內容，通常應該能搭配標題。這裡只是把兩個按鈕包起來方便排版，沒有形成一個獨立主題，所以使用 `<div>` 這個通用容器更合適。沒有明確語意需求時，繼續使用 `<div>` 並不是退步，而是正確使用。

</details>
