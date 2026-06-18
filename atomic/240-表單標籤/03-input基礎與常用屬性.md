---
source:
  - 'origin/240-表單標籤/03-表單控件.md / 開頭至 input 常用屬性與綜合範例'
---

# input 基礎與常用屬性

`type` 屬性設置不同的屬性值，用來指定不同的控件類型。

- 在 `<input>` 標籤中，包含一個 `type` 屬性。根據不同的 `type` 屬性值，輸入字段可以是文本字段、複選框、單選按鈕等等。
- 在英文單詞中，input 是輸入的意思。在表單元素中，`<input>` 標籤用於收集用戶信息。
- `<input>` 標籤為單標籤。
- `type` 的屬性值如下：

![input type 屬性值對照表](../../origin/240-表單標籤/assets/images/form-controls-img-001-849948.png)

- 除了 `type` 屬性外，`<input>` 標籤還有其他很多屬性，其他常用屬性如下：

![input 標籤常用屬性表](../../origin/240-表單標籤/assets/images/form-controls-img-002-417f2d.png)

- `name` 常用來指定提交資料的欄位名稱；`value` 常用於 `input`、`button`、`option` 等元素，用來指定提交值或顯示值。
- `name` 是表單元素的名字。同一組單選按鈕應共用 `name`，同一組複選框也常共用 `name`，用來提交同一欄位的多個值。
- `checked` 屬性主要針對單選按鈕和複選框，作用是一打開頁面就可以默認選中某個表單元素。
- `maxlength` 是用戶可以在表單元素輸入的最大字符數，一般較少使用。

```html
<form action="xxx.php" method="get">
  <!-- type 屬性設置為 text 是文本框 -->
  <!-- 定義單行的輸入字段，用戶可在其中輸入文本。默認寬度為 20 個字符。 -->
  <!-- maxlength: 規定輸入字段中字符的最大長度 -->
  用戶名: <input type="text" name="username" value="請輸入用戶名" placeholder="文本框占位符" maxlength="6"> <br>

  <!-- type 屬性設置為 password 是密碼框，用戶看不見輸入的密碼 -->
  <!-- 定義密碼字段。該字段中的字符被掩碼 -->
  密碼: <input type="password" name="pwd" placeholder="文本框占位符"> <br>

  <!-- type 屬性設置為 radio 是單選框，可以實現多選一 -->
  <!-- name 是表單元素的名字；同一組單選框要有相同的 name 值，才能實現多選一 -->
  <!-- checked 屬性主要針對單選框和複選框，主要作用是一打開頁面就可以默認選中某個表單元素 -->
  性別:
    男 <input type="radio" name="sex" value="男">
    女 <input type="radio" name="sex" value="女" checked="checked">
    其他 <input type="radio" name="sex" value="其他">
    <br>

  <!-- type 屬性設置為 checkbox 是複選框，可以實現多選 -->
  <!-- name 是表單元素的名字；同一組複選框常使用相同的 name 值，方便提交多個同類資料 -->
  <!-- checked 屬性主要針對單選框和複選框，主要作用是一打開頁面就可以默認選中某個表單元素 -->
  愛好:
    吃飯 <input type="checkbox" name="hobby" value="吃飯">
    睡覺 <input type="checkbox" name="hobby">
    打豆豆 <input type="checkbox" name="hobby" checked="checked">
    <br>

  <!-- 點擊提交按鈕，可以把 form 裡面的表單元素值提交給後台服務器 -->
  <!-- type 屬性設置為 submit：提交按鈕會把表單數據發送到服務器 -->
  <!-- value 屬性修改按鈕顯示的值 -->
  <input type="submit" value="免費註冊"> <br>

  <!-- 重置按鈕可以還原表單元素初始的默認狀態 -->
  <!-- type 屬性設置為 reset：重置按鈕會將表單控件恢復到初始默認狀態 -->
  <!-- value 屬性修改按鈕顯示的值 -->
  <input type="reset" value="重新填寫"> <br>

  <!-- 普通按鈕 button 後期結合 JS 搭配使用 -->
  <!-- type 屬性設置為 button：是一個按鈕 -->
  <!-- value 屬性修改按鈕顯示的值 -->
  <input type="button" value="獲取短信驗證碼"> <br>

  <!-- 文件域，常用於上傳文件 -->
  <!-- type 屬性設置為 file：是文件域，可以上傳文件 -->
  <!-- multiple 表示可多選 -->
  上傳頭像: <input type="file"><br>
  上傳多張生活照: <input type="file" multiple>
</form>
```
