# caption、thead、tbody、tfoot 表格結構

> 來源：origin/230-表格標籤/01-表格標籤.md / # **2. caption、thead、tbod、tfoot 介紹**

> 一個結構較完整、語意較清楚的表格，通常可以包含表格標題、表格頭部、表格主體與表格腳注。

- 表格涉及到的標籤
  - table 表格
  - caption 表格標題
  - thead 表格頭部
  - tbody 表格主體
  - tfoot 表格腳注
  - tr 每一行
  - th、td 每一個單元格
    - 通常在表頭列使用 th 表示欄位標題。
    - 表格主體、表格腳注多使用 td；需要表示列標題或其他標頭時，也可以使用 th。
- 表格示意圖

  ![表格結構與區塊標籤示意](../../origin/230-表格標籤/assets/images/html-table-tags-img-001-422a27.png)

- thead 示意圖

  ![thead 表格頭部與 th 單元格示意](../../origin/230-表格標籤/assets/images/html-table-tags-img-002-5f8921.png)

- tbody 示意圖

  ![tbody 表格主體與 tr 行示意](../../origin/230-表格標籤/assets/images/html-table-tags-img-003-99d970.png)

- tfoot 示意圖

  ![tfoot 表格腳注與 td 單元格示意](../../origin/230-表格標籤/assets/images/html-table-tags-img-004-6abf79.png)

```html
<table border="1">
  <caption>段考成績</caption>
  <thead>
    <tr>
      <th>科目</th>
      <th>分数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>语文</td>
      <td>99</td>
    </tr>
    <tr>
      <td>数学</td>
      <td>60</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>总分</td>
      <td>159</td>
    </tr>
  </tfoot>
</table>
```
