# fieldest與legend標籤

<aside>
💡 **Questions:**

*Write it during the class*

</aside>

<aside>
💡 **Key Points:**

*Write it after the class*

</aside>

<aside>
📌 **Summary:**

*Write it after the class*

</aside>

<aside>
✏️

**Notes:**

*Write it during the class*

- fieldset 可以為表單控件分組。
- legend 標籤是分組的標題。

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

</aside>