# spellcheck 拼字檢查

> 來源：origin/050-全局屬性/12-spellcheck 属性.md / 全文

> 檢查方式由瀏覽器決定。

<aside>
👉

**定義和用法：**

- spellcheck 屬性規定是否對元素進行拼寫和語法檢查。
- 可以對以下內容進行拼寫檢查：
  - input 元素中的文本值（非密碼）。
  - `<textarea>` 元素中的文本。
  - 可編輯元素中的文本。

</aside>

```html
<body>
  <form>
    <!-- 使用 spellcheck 屬性在文本輸入框啟用或禁用拼寫檢查 -->
    <label for="username">使用者名稱:</label>
    <input type="text" id="username" name="username" spellcheck="true">
    <br>
    <hr>

    <!-- 在 textarea 中啟用或禁用拼寫檢查 -->
    <label for="message">留言:</label>
    <textarea id="message" name="message" spellcheck="false"></textarea>
    <br>
    <hr>

    <!-- 在 contenteditable 元素中啟用或禁用拼寫檢查 -->
    <div contenteditable="true" spellcheck="true">
      這是一個支援拼寫檢查的可編輯內容。
    </div>

    <input type="submit" value="提交">
  </form>
</body>
```
