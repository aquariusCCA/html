---
source:
  - 'origin/240-表單標籤/03-表單控件.md / `### 新增input類型`'
---

# 新增 input 類型

新增的 input 類型如下：

![新增 input 類型對照表](../../origin/240-表單標籤/assets/images/form-controls-img-003-b918e4.png)

注意：上圖中的 `type="data"` 應為 `type="date"`。

```html
<!-- 若要示範瀏覽器在提交時的原生驗證，通常會放在 form 表單域中。 -->
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
    <!-- 點擊提交按鈕時，瀏覽器會依各 input type 與屬性觸發對應的原生驗證 -->
    <li><input type="submit" value="提交"></li>
  </ul>
</form>
```
