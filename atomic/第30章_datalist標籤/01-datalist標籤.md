# datalist 標籤

> 來源：origin/第30章_datalist標籤/01-datalist標籤.md / 全文

## 作用

- `<datalist>` 標籤會為指定的 `<input>` 元素提供一組建議選項。
- `<datalist>` 元素包含了一組 `<option>` 元素，這些元素表示預定義的候選值；輸入過程中瀏覽器可以顯示這些建議，但使用者仍可輸入清單外的值。
- 綁定的 `<input>` 標籤必須設置 `list` 屬性，屬性值等於 `<datalist>` 標籤的 `id` 屬性值。
- 通過 `<datalist>` 標籤的 `id` 屬性和 `<input>` 標籤的 `list` 屬性進行綁定，二者就關聯起來。

## 範例

```html
<body>
  <!-- <select> 的使用方式 : -->
  <select name="browser">
    <option value="firefox">Firefox</option>
    <option value="ie">IE</option>
    <option value="chrome">Chrome</option>
    <option value="opera">Opera</option>
    <option value="safari">Safari</option>
  </select>

  <!-- <datalist> 的使用方式 : -->
  <input type=text list=browsers>
  <datalist id=browsers>
    <option value="Firefox">
    <option value="IE">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
  </datalist>

  <!-- 搭配 form 一起使用 -->
  <form action="">
    <input type="text" list="city-list">
  </form>
  <datalist id="city-list">
    <option value="北京市"></option>
    <option value="广州市"></option>
    <option value="深圳市"></option>
  </datalist>
</body>
```
