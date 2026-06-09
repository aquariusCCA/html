# disabled 禁用表單控件

> 來源：origin/第24章_表單標籤/08-禁用表單控件.md / 全文

- 給表單控件的標籤設置 `disabled` 即可禁用表單控件。
- `input`、`textarea`、`button`、`select`、`option` 都可以設置 `disabled` 屬性。

## 禁用單個表單控件

**輸入框（input）：**

```html
<input type="text" value="無法輸入" disabled>
```

**按鈕（button）：**

```html
<button disabled>無法點擊的按鈕</button>
```

**下拉選單（select）：**

```html
<select disabled>
  <option>選項 1</option>
  <option>選項 2</option>
</select>
```

**多行文本框（textarea）：**

```html
<textarea disabled>無法編輯</textarea>
```

**單選按鈕（radio）和複選框（checkbox）：**

```html
<input type="radio" disabled> 單選按鈕
<input type="checkbox" disabled> 複選框
```

## 使用 fieldset 禁用一組表單控件

如果想一次禁用一組表單控件，可以在 `<fieldset>` 標籤上使用 `disabled` 屬性。這會自動禁用該組內的表單元素。

```html
<form action="">
  <fieldset disabled>
    <input type="text" value="這裡無法輸入">
    <button type="button">這裡無法點擊</button>
  </fieldset>
</form>
```

## 注意事項

- `disabled` 的控件不會被包含在表單的提交數據中。
- 某些瀏覽器會自動以灰色顯示被禁用的表單控件，來提示用戶它們不可用。
