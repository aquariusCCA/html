# select 與 option 下拉選單

> 來源：origin/測試/05-select下拉表單元素.md / # select下拉表單元素

> 在頁面中，如果有多個選項讓用戶選擇，並且想要節約頁面空間時，我們就可以使用 `<select>` 標籤定義下拉列表。

```html
<select name="from">
  <option value="黑">黑龍江</option>
  <option value="遼">遼寧</option>
  <option value="吉">吉林</option>
  <option value="廣" selected>廣東</option>
</select>
```

注意點：

- `<select>` 中至少包含一對 `<option>`。
- `name` 屬性：指定數據的名稱。
- option 標籤設置 `value` 屬性：提交的數據值。
  - 如果沒有 `value` 屬性，提交的數據是 option 中間的文字。
  - 如果設置了 `value` 屬性，提交的數據就是 `value` 的值，建議設置 `value` 屬性。
- 在 `<option>` 中定義 `selected="selected"` 時，當前項即為默認選中項。
