# fieldset 與 legend 表單分組

> 來源：origin/240-表單標籤/10-fieldest與legend標籤.md / 全文

- `fieldset` 可以為表單控件分組。
- `legend` 標籤是分組的標題。

```html
<form action="">
  <fieldset>
    <legend>主要信息</legend>
    <label for="account">帳戶</label>
    <input type="text" id="account" name="account" maxlength="10"><br>

    <label>
      密碼:
      <input type="password" name="pwd" maxlength="6">
    </label><br>
  </fieldset>

  <fieldset>
    <legend>勾選區域</legend>
    性別:
    <input type="radio" name="gender" value="woman" id="woman">
    <label for="woman">女</label>
    <label>
      <input type="radio" name="gender" value="man"> 男
    </label>
  </fieldset>

  <input type="submit" value="提交">
</form>
```
