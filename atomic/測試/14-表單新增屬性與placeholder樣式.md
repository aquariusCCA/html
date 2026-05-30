# 表單新增屬性與 placeholder 樣式

> 來源：origin/測試/09-新增表單屬性.md / 全文

![表單新增屬性與使用說明表](../../origin/測試/assets/images/new-form-attributes-img-001-e0f09b.png)

```html
<form action="">
  <input type="search" name="sear" required="required" placeholder="pink老師" autofocus="autofocus" autocomplete="off">
  <input type="submit" value="提交">
</form>
```

- 可以通過以下設置方式修改 `placeholder` 裡面的字體顏色：

```css
input::placeholder {
  color: pink;
}
```
