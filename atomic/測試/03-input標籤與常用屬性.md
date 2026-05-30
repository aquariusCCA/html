# input 標籤與常用屬性

> 來源：origin/測試/03-表單控件.md / input 開頭說明、type 與常用屬性表、綜合範例相關片段

> ✍️ type 屬性設置不同的屬性值用來指定不同的控件類型。

- 在 `<input>` 標籤中，包含一個 `type` 屬性，根據不同的 `type` 屬性值，輸入字段擁有很多種形式，可以是文本字段、複選框、單選按鈕等等。
- 在英文單詞中，input 是輸入的意思，而在表單元素中，`<input>` 標籤用於收集用戶信息。
- `<input>` 標籤為單標籤。
- `type` 的屬性值如下：

![input type 屬性值與控件類型表](../../origin/測試/assets/images/form-controls-img-001-849948.png)

- 除了 `type` 屬性外，`<input>` 標籤還有其他很多屬性，其他常用屬性如下：

![input 常用屬性與作用表](../../origin/測試/assets/images/form-controls-img-002-417f2d.png)

- `name` 和 `value` 是每個表單元素都有的屬性值，主要是給後台人員使用。
- `name` 是表單元素的名字，要求單選按鈕和複選框要有相同的 `name` 值。
- `checked` 屬性主要針對於單選按鈕和複選框，主要作用是一打開頁面，就可以默認選中某個表單元素。
- `maxlength` 是用戶可以在表單元素輸入的最大字符數，一般較少使用。

## 文件域

文件域的使用場景是上傳文件。

```html
<!-- type 屬性設置為 file：是一个文件域，可以上傳文件 -->
<!-- multiple 多選 -->
上傳頭像: <input type="file"><br>
上傳多張生活照: <input type="file" multiple>
```
