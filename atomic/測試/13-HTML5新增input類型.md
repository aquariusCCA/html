# HTML5 新增 input 類型

> 來源：origin/測試/03-表單控件.md / 新增input類型

- 新增的類型如下：

![新增 input 類型與輸入限制表](../../origin/測試/assets/images/form-controls-img-003-b918e4.png)

> 注意：上圖中的 `type="data"` 應為 `type="date"`。

```html
<!-- 若要透過提交按鈕觸發瀏覽器內建驗證，通常需要放在 form 表單域中。 -->
<form action="">
  <ul>
    <li>郵箱: <input type="email"></li>
    <li>網址: <input type="url"></li>
    <li>日期: <input type="date"></li>
    <li>時間: <input type="time"></li>
    <li>數量: <input type="number"></li>
    <li>手機號碼: <input type="tel"></li>
    <li>搜索: <input type="search"></li>
    <li>顏色: <input type="color"></li>
    <!-- 當我們點擊提交按鈕就可以驗證表單了 -->
    <li><input type="submit" value="提交"></li>
  </ul>
</form>
```
