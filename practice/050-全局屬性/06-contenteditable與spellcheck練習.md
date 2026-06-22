---
source_notes:
  - notes/050-全局屬性/05-contenteditable-spellcheck-可編輯內容與拼字檢查.md
topics: [contenteditable, spellcheck, 可編輯內容, 拼字檢查]
summary: "動手為備註區塊和輸入欄位加上正確的 contenteditable 與 spellcheck 設定，並修正代碼欄位誤開拼字檢查的常見錯誤。"
---

# contenteditable 與 spellcheck 練習

> 動手練習。概念與用法說明見 `notes/050-全局屬性/05-contenteditable-spellcheck-可編輯內容與拼字檢查.md`。

---

## 題目 1（基礎）· 應用練習題

頁面上有三個元素，請依各自的需求加上正確的屬性：

1. **備註區塊 `<div>`**：讓使用者可以直接在頁面上編輯文字內容。
2. **帳號輸入欄 `<input type="text">`**：輸入的是使用者帳號，不需要拼字檢查。
3. **留言欄 `<textarea>`**：使用者輸入自然語言留言，需要瀏覽器協助拼字檢查。

```html
<div ___ >在這裡輸入備註...</div>

<label for="account">帳號：</label>
<input type="text" id="account" name="account" ___ >

<label for="message">留言：</label>
<textarea id="message" name="message" ___></textarea>
```

完成標準：三個元素的屬性設定都正確——備註區塊可編輯，帳號欄關閉拼字檢查，留言欄啟用拼字檢查。

<details>
<summary>參考解答</summary>

```html
<div contenteditable="true">在這裡輸入備註...</div>

<label for="account">帳號：</label>
<input type="text" id="account" name="account" spellcheck="false">

<label for="message">留言：</label>
<textarea id="message" name="message" spellcheck="true"></textarea>
```

解題說明：

- `contenteditable="true"` 讓元素內容可被使用者直接在頁面上修改。注意：這不會自動儲存資料，儲存仍需 JavaScript 配合。
- 帳號欄設定 `spellcheck="false"` 關閉拼字檢查。帳號、代碼、產品編號等精確文字不是自然語言，拼字檢查只會造成不必要的干擾（例如把帳號底下畫紅線）。
- 留言欄設定 `spellcheck="true"` 啟用拼字檢查。留言是自然語言輸入，拼字檢查能協助使用者發現錯字。

</details>

---

## 題目 2（基礎）· 改錯題

下面這段 HTML 有 **1 個屬性設定錯誤**，請找出並修正。

```html
<form>
  <label for="product-code">產品代碼：</label>
  <input type="text" id="product-code" name="product-code" spellcheck="true">

  <label for="comment">使用心得：</label>
  <textarea id="comment" name="comment" spellcheck="true"></textarea>
</form>
```

完成標準：找出不適合的 spellcheck 設定並修正，且能說明原因。

<details>
<summary>參考解答</summary>

```html
<form>
  <label for="product-code">產品代碼：</label>
  <input type="text" id="product-code" name="product-code" spellcheck="false">

  <label for="comment">使用心得：</label>
  <textarea id="comment" name="comment" spellcheck="true"></textarea>
</form>
```

錯誤說明：

**`<input name="product-code" spellcheck="true">` 不適合啟用拼字檢查** → 產品代碼是精確字串，不是自然語言，啟用拼字檢查只會造成干擾：例如瀏覽器可能把「A1B2C3」這類代碼標記為拼字錯誤。應改為 `spellcheck="false"` 關閉。

`<textarea name="comment">` 的 `spellcheck="true"` 是正確的——使用者在這裡輸入自然語言心得，拼字檢查可以協助發現錯字。

</details>
