# rowspan 與 colspan 合併單元格

> 來源：origin/230-表格標籤/01-表格標籤.md / # **4. 合併單元格**

> 特殊情況下，可以把多個單元格合併為一個單元格。

![跨行與跨列合併示意](../../origin/230-表格標籤/assets/images/html-table-tags-img-011-f3bfdd.jpg)

- 跨行合併: `rowspan = "合併單元格的個數"`。
- 跨列合併: `colspan = "合併單元格的個數"`。

<aside>
👉

**合併單元格三部曲**

- Step 1: 先確定是跨行還是跨列合併。
- Step 2: 找到目標單元格，寫上合併方式 = 合併的單元格數量。
- Step 3: 刪除多餘的單元格。
</aside>

```html
<table width="500" height="249" border="1" cellspacing="0">
  <tr>
      <td></td>
      <td colspan="2"></td>
  </tr>

  <tr>
      <td rowspan="2"></td>
      <td></td>
      <td></td>
  </tr>

  <tr>
      <td></td>
      <td></td>
  </tr>
</table>
```
