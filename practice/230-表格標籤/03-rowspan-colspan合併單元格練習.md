---
source_notes:
  - notes/230-表格標籤/02-rowspan-colspan-合併單元格.md
topics: [rowspan, colspan, 合併單元格, 表格結構檢查]
summary: "練習使用 rowspan 與 colspan 合併表格單元格，並刪除被合併的多餘儲存格。"
---

# rowspan / colspan 合併單元格練習

> 動手練習。概念與用法說明見 notes/230-表格標籤/02-rowspan-colspan-合併單元格.md。

## 題目 1（基礎）· 應用練習題

請完成一張三欄課表，欄位為「時間」「科目」「教室」。其中「HTML 基礎」連續兩個時段都在 A101 教室。

完成標準：

- 表格有三欄。
- 「HTML 基礎」那格使用 `rowspan="2"`。
- 下一列要刪除被 `rowspan` 占用的科目格。

<details>
<summary>參考解答</summary>

```html
<table border="1">
  <tr>
    <th>時間</th>
    <th>科目</th>
    <th>教室</th>
  </tr>
  <tr>
    <td>09:00</td>
    <td rowspan="2">HTML 基礎</td>
    <td>A101</td>
  </tr>
  <tr>
    <td>10:00</td>
    <td>A101</td>
  </tr>
</table>
```

解題說明：`rowspan="2"` 讓「HTML 基礎」向下跨兩列，所以第二個時段那列不需要再寫科目欄位，只保留時間與教室。
</details>

## 題目 2（基礎）· 應用練習題

請建立一張三欄表格，最後一列的「備註：請準時到場」要橫跨三欄。

完成標準：

- 最後一列只保留一個儲存格。
- 這個儲存格使用 `colspan="3"`。
- 不要在同一列繼續保留被合併的多餘 `<td>`。

<details>
<summary>參考解答</summary>

```html
<table border="1">
  <tr>
    <th>姓名</th>
    <th>項目</th>
    <th>狀態</th>
  </tr>
  <tr>
    <td>小明</td>
    <td>報到</td>
    <td>完成</td>
  </tr>
  <tr>
    <td colspan="3">備註：請準時到場</td>
  </tr>
</table>
```

解題說明：`colspan="3"` 讓該儲存格向右跨三欄，因此最後一列只需要一個 `<td>`。
</details>

## 題目 3（進階）· 改錯題

下面的表格在第一列使用 `colspan="2"`，但仍保留了被合併掉的多餘儲存格。請修正。

```html
<table border="1">
  <tr>
    <td>分類</td>
    <td colspan="2">資料</td>
    <td>多餘</td>
  </tr>
  <tr>
    <td>A</td>
    <td>10</td>
    <td>20</td>
  </tr>
</table>
```

<details>
<summary>參考解答</summary>

```html
<table border="1">
  <tr>
    <td>分類</td>
    <td colspan="2">資料</td>
  </tr>
  <tr>
    <td>A</td>
    <td>10</td>
    <td>20</td>
  </tr>
</table>
```

解題說明：`colspan="2"` 已經占用兩欄，所以同一列中右側被合併的位置不應再保留額外 `<td>`。
</details>

## 題目 4（進階）· 改錯題

下面的表格想讓「上午」跨兩列，但下一列仍保留了被占用的第一欄，導致欄位錯位。請修正。

```html
<table border="1">
  <tr>
    <th>時段</th>
    <th>課程</th>
    <th>教室</th>
  </tr>
  <tr>
    <td rowspan="2">上午</td>
    <td>HTML</td>
    <td>A101</td>
  </tr>
  <tr>
    <td>上午</td>
    <td>CSS</td>
    <td>A102</td>
  </tr>
</table>
```

<details>
<summary>參考解答</summary>

```html
<table border="1">
  <tr>
    <th>時段</th>
    <th>課程</th>
    <th>教室</th>
  </tr>
  <tr>
    <td rowspan="2">上午</td>
    <td>HTML</td>
    <td>A101</td>
  </tr>
  <tr>
    <td>CSS</td>
    <td>A102</td>
  </tr>
</table>
```

解題說明：`rowspan="2"` 讓「上午」占用目前列與下一列的第一欄，因此下一列要刪除原本第一欄的 `<td>`。
</details>
