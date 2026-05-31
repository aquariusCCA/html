# input 標籤基本概念與通用屬性

> 來源：origin/測試/03-表單控件.md / # 表單控件

> type 屬性設置不同的屬性值用來指定不同的控件類型。

- 在 `<input>` 標籤中，包含一個 type 屬性，根據不同的 type 屬性值，輸入字段擁有很多種形式，可以是文本字段、複選框、單選按鈕等等。
- 在英文單詞中，input 是輸入的意思，而在表單元素中，`<input>` 標籤用於收集用戶信息。
- `<input/>` 標籤為單標籤。
- type 的屬性值如下：

![input type 屬性值與用途表](../../origin/測試/assets/images/form-controls-img-001-849948.png)

- 除了 type 屬性外，`<input>` 標籤還有其他很多屬性，其他常用屬性如下：

![input 標籤常用屬性與用途表](../../origin/測試/assets/images/form-controls-img-002-417f2d.png)

- `name` 和 `value` 是每個表單元素都有的屬性值，主要是給後台人員使用。
- `name` 是表單元素的名字，要求單選按鈕和複選框要有相同的 name 值。
- `checked` 屬性主要針對單選按鈕和複選框，主要作用是一打開頁面，就可以默認選中某個表單元素。
- `maxlength` 是用戶可以在表單元素輸入的最大字符數，一般較少使用。

## 綜合範例

```html
<form action="xxx.php" method="get">
  <!-- type 属性设置为 text 是文本框 -->
  <!-- 定义单行的输入字段，用户可在其中输入文本。默认宽度为 20 个字符。 -->
  <!-- maxlength: 规定输入字段中字符的最大长度 -->
  用户名: <input type="text" name="username" value="请输入用户名" placeholder="文本框占位符" maxlength="6"> <br>

  <!-- type 属性设置为 password 是密码框，用户看不见输入的密码 -->
  <!-- 定义密码字段。该字段中的字符被掩码 -->
  密码: <input type="password" name="pwd" placeholder="文本框占位符"> <br>

  <!-- type 属性设置为 radio 是单选框，可以实现多选一 -->
  <!-- name 是表单元素的名字，要求单选框和复选框要有相同的 name 值 -->
  <!-- checked 属性主要针对于单选框和复选框，主要作用是一打开页面，就可以默认选中某个表单元素 -->
  性别:
    男 <input type="radio" name="sex" value="男">
    女 <input type="radio" name="sex" value="女" checked="checked">
    其他 <input type="radio" name="sex" value="其他">
    <br>

  <!-- type 属性设置为 checkbox 是复选框，可以实现多选 -->
  <!-- name 是表单元素的名字，要求单选框和复选框要有相同的 name 值 -->
  <!-- checked 属性主要针对于单选框和复选框，主要作用是一打开页面，就可以默认选中某个表单元素 -->
  爱好:
    吃饭 <input type="checkbox" name="hobby" value="吃饭">
    睡觉 <input type="checkbox" name="hobby">
    打豆豆 <input type="checkbox" name="hobby" checked="checked">
    <br>

  <!-- 点击了提交按钮,可以把 表单域 form 里面的表单元素 里面的值 提交给后台服务器 -->
  <!-- type 属性设置为 submit：提交按钮会把表单数据发送到服务器 -->
  <!-- 属性 value 修改按钮显示的值 -->
  <input type="submit" value="免费注册"> <br>

  <!-- 重置按钮可以还原表单元素初始的默认状态 -->
  <!-- type 属性设置为 reset：重置按钮会清除表单中的所有数据 -->
  <!-- 属性 value 修改按钮显示的值 -->
  <input type="reset" value="重新填写"> <br>

  <!-- 普通按钮 button 后期结合 js 搭配使用 -->
  <!-- type 属性设置为 button：是一个按钮 -->
  <!-- 属性 value 修改按钮显示的值 -->
  <input type="button" value="获取短信验证码"> <br>

  <!-- 文件域 使用场景 上传文件使用的 -->
  <!-- type 属性设置为 file：是一个文件域，可以上传文件 -->
  <!-- multiple 多选 -->
  上传头像: <input type="file"><br>
  上傳多張生活照: <input type="file" multiple />
</form>
```
