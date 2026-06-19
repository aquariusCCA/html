---
source_atomic:
  - atomic/050-全局屬性/03-contenteditable-可編輯內容.md
  - atomic/050-全局屬性/12-spellcheck-拼字檢查.md
topics: [contenteditable, spellcheck, 可編輯內容, 拼字檢查]
summary: "說明如何讓元素內容可被編輯、控制拼字檢查，並釐清可編輯不等於自動儲存。"
---

# contenteditable 與 spellcheck：可編輯內容與拼字檢查

## 學習目標

讀完這篇筆記，你應該能夠：

- 使用 `contenteditable` 讓元素內容可被使用者編輯。
- 使用 `spellcheck` 控制瀏覽器是否進行拼字或語法檢查。
- 理解可編輯內容不等於資料會自動儲存。

## 問題情境

一般 HTML 內容是靜態顯示的，使用者不能直接改動段落文字。但有些功能會需要「在頁面上直接編輯」：

- 簡單的備註區。
- 可編輯標題。
- 所見即所得編輯器。
- 原型或小工具中的文字編輯區。

當內容可以被編輯時，你可能也會想控制瀏覽器是否要做拼字檢查。這就是 `contenteditable` 和 `spellcheck` 常一起出現的原因。

## 一句話理解

`contenteditable` 控制元素內容能不能被使用者直接編輯，`spellcheck` 控制瀏覽器是否協助檢查拼字與語法。

## contenteditable：讓元素可編輯

`contenteditable` 是 HTML5 新增的全局屬性，目的是讓使用者能夠修改頁面上的元素內容。

```html
<p contenteditable="true">I love China!</p>
<p contenteditable="false">I love China!</p>
```

在這段程式碼中：

- `contenteditable="true"`：使用者可以直接編輯段落內容。
- `contenteditable="false"`：使用者不能直接編輯段落內容。
- `contenteditable="plaintext-only"`：使用者只能編輯純文字內容，不啟用富文字格式。

如果沒有設定 `contenteditable`，或使用無效值，元素會依父層的可編輯狀態繼承。

`contenteditable` 不只可用在 `<p>`，也可用在其他元素上。

```html
<div contenteditable="true">
  這是一個可以編輯的區塊。
</div>
```

## spellcheck：控制拼字檢查

`spellcheck` 屬性規定是否對元素進行拼字和語法檢查。實際檢查方式由瀏覽器決定。

可以進行拼字檢查的常見內容包含：

- `input` 元素中的文字值，但不包含密碼。
- `<textarea>` 元素中的文字。
- 可編輯元素中的文字。

```html
<input type="text" spellcheck="true">

<textarea spellcheck="false"></textarea>

<div contenteditable="true" spellcheck="true">
  這是一個支援拼字檢查的可編輯內容。
</div>
```

## 完整範例

```html
<form>
  <label for="username">使用者名稱：</label>
  <input type="text" id="username" name="username" spellcheck="false">

  <label for="message">留言：</label>
  <textarea id="message" name="message" spellcheck="true"></textarea>

  <div contenteditable="true" spellcheck="true">
    這是一個支援拼字檢查的可編輯內容。
  </div>

  <input type="submit" value="提交">
</form>
```

這段範例中：

- 使用者名稱欄位關閉拼字檢查，避免帳號或代碼被當成自然語言檢查。
- 留言欄位啟用拼字檢查，協助自然語言輸入。
- 可編輯區塊同時使用 `contenteditable` 和 `spellcheck`。

是否要啟用拼字檢查取決於內容類型。自然語言留言可以啟用；代碼、帳號、產品編號等內容通常不適合。

## contenteditable 不會自動儲存資料

這是初學者很容易誤會的地方。

```html
<p contenteditable="true">可以編輯這段文字</p>
```

這只代表使用者可以在瀏覽器中修改畫面上的文字。它不會自動：

- 把資料送到伺服器。
- 寫入資料庫。
- 下次開頁面時保留修改結果。

如果要儲存內容，仍然需要使用 JavaScript 讀取修改後的文字，再送到後端或存到本地儲存。

```html
<p id="note" contenteditable="true">可以編輯這段文字</p>
<button id="save">儲存</button>

<script>
  const note = document.getElementById('note');
  const save = document.getElementById('save');

  save.addEventListener('click', function () {
    console.log(note.textContent);
  });
</script>
```

## 常見錯誤

### 錯誤一：以為 contenteditable 會自動儲存

`contenteditable` 只處理「可不可以在畫面上編輯」。儲存資料是另一件事，需要 JavaScript 和資料保存流程。

### 錯誤二：在不適合的欄位啟用 spellcheck

```html
<input type="text" name="product-code" spellcheck="true">
```

如果輸入的是產品代碼、帳號、程式碼片段，拼字檢查可能只會造成干擾。

### 錯誤三：把 contenteditable 當成完整文字編輯器

`contenteditable` 提供基本可編輯能力，但完整編輯器還需要處理格式、貼上內容、快捷鍵、資料清理、儲存與安全性等問題。

## 實務判斷

- 只是讓一小段文字可直接編輯，可以使用 `contenteditable`。
- 需要完整表單資料，仍優先使用表單元素，例如 `<input>` 和 `<textarea>`。
- 自然語言輸入可考慮 `spellcheck="true"`。
- 代碼、帳號、編號等精確文字可考慮 `spellcheck="false"`。

## 重點整理

- `contenteditable="true"` 讓元素內容可被使用者編輯。
- `spellcheck` 控制瀏覽器是否進行拼字或語法檢查。
- `contenteditable` 不會自動儲存修改結果。
- 是否啟用拼字檢查，要看內容是否適合被自然語言檢查。

## 自我檢查

- `contenteditable` 是否會自動把使用者修改的內容存到伺服器？
- 哪些元素或內容適合使用 `spellcheck`？
- 如果你要做留言輸入欄，會選 `<textarea>` 還是只用 `<div contenteditable>`？為什麼？
