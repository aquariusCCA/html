---
source_atomic:
  - atomic/050-全局屬性/09-hidden-隱藏元素.md
  - atomic/050-全局屬性/15-title-提示文字.md
---

# hidden 與 title：隱藏內容與提供補充資訊

## 學習目標

讀完這篇筆記，你應該能夠：

- 理解 `hidden` 與 `title` 的用途差異。
- 知道什麼內容適合暫時隱藏，什麼內容適合補充提示。
- 避免把重要資訊放在使用者不容易取得的位置。

## 問題情境

網頁上不一定所有內容都要立刻顯示。有些內容可能要等使用者勾選選項、點擊按鈕或符合某個條件後才出現。

另外，有些元素可能需要補充說明，例如縮寫的全名、按鈕的額外提示或某段文字的附加資訊。

這兩種情境看起來都和「顯示資訊」有關，但用途不同：

- `hidden` 是讓元素暫時不顯示。
- `title` 是提供元素的補充資訊。

## 一句話理解

`hidden` 控制元素是否出現在頁面上，`title` 則提供元素的額外說明。

## hidden：隱藏元素

`hidden` 屬性規定元素被隱藏。加上 `hidden` 的元素不會被顯示。

```html
<p>這是一個沒有隱藏的段落。</p>
<p hidden>這是一個隱藏的段落。</p>
```

`hidden` 常用在「目前不該讓使用者看到，但之後可能會顯示」的內容。

除了一般的 `hidden` 或空值，HTML 也定義了 `hidden="until-found"`。這種狀態下元素一開始仍是隱藏的，但內容可以被頁內搜尋或 fragment navigation 找到；當瀏覽器要跳到該內容時，會先揭露它。這個值的瀏覽器支援仍需注意，不應作為唯一的顯示機制。

例如，使用者勾選某個選項後，再用 JavaScript 移除 `hidden`：

```html
<label>
  <input type="checkbox" id="show-detail">
  顯示詳細資料
</label>

<p id="detail" hidden>這裡是詳細資料。</p>

<script>
  const checkbox = document.getElementById('show-detail');
  const detail = document.getElementById('detail');

  checkbox.addEventListener('change', function () {
    detail.hidden = !checkbox.checked;
  });
</script>
```

這段程式碼中：

- 一開始 `<p id="detail" hidden>` 不顯示。
- 使用者勾選 checkbox 後，JavaScript 把 `hidden` 移除。
- 使用者取消勾選後，再把內容隱藏。

## title：提供補充提示

`title` 屬性規定元素的額外資訊。瀏覽器通常會在滑鼠移到元素上時顯示工具提示文字。

```html
<abbr title="People's Republic of China">PRC</abbr>
```

這裡的畫面文字是 `PRC`，`title` 補充說明它代表 `People's Republic of China`。

也可以用在一般元素上：

```html
<p title="Free Web tutorials">W3School.com.cn</p>
```

## hidden 和 title 的差異

| 屬性 | 用途 | 使用者是否直接看到 | 適合內容 |
| --- | --- | --- | --- |
| `hidden` | 隱藏整個元素 | 不會顯示 | 尚未符合條件才顯示的內容 |
| `title` | 補充元素資訊 | 通常滑鼠移過才顯示 | 縮寫、附加說明、簡短提示 |

`hidden` 是「這個元素暫時不要出現」，`title` 是「這個元素有額外資訊」。

## 常見錯誤

### 錯誤一：把必要內容藏在 hidden 中卻沒有顯示機制

```html
<p hidden>請先閱讀這段重要說明再送出表單。</p>
<button>送出</button>
```

如果這段說明對完成操作是必要資訊，就不應永遠保持隱藏。應讓它直接可見，或提供清楚的互動方式讓它出現。

### 錯誤二：把重要操作說明只放在 title

```html
<button title="點擊後會永久刪除資料">刪除</button>
```

`title` 不適合承載關鍵警告，因為觸控裝置、鍵盤操作或輔助工具使用者不一定能穩定取得這段提示。重要說明應該放在可見文字、確認對話框或鄰近說明中。

### 錯誤三：把 title 當成主要內容

```html
<span title="這是產品完整介紹">產品 A</span>
```

如果「產品完整介紹」是使用者必須閱讀的內容，就不應只放在 `title`。

## 實務判斷

- 需要讓整個元素暫時不顯示時，使用 `hidden`。
- 需要提供簡短補充提示時，可以使用 `title`。
- 重要資訊不要只依賴 `title`。
- 使用 `hidden` 時，要確認內容有合理的顯示時機或互動流程。

## 重點整理

- `hidden` 會讓元素不顯示。
- `title` 提供元素的額外資訊，常見呈現方式是滑鼠提示。
- `hidden` 適合條件式顯示，`title` 適合簡短補充。
- 重要資訊應該直接可見，或用更可靠的互動方式呈現。

## 自我檢查

- `hidden` 適合用來永久藏住重要說明嗎？
- `title` 的內容是否一定能被所有使用者穩定看到？
- 如果一段警告文字會影響使用者是否送出表單，應該只放在 `title` 裡嗎？
