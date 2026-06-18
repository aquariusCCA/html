---
source:
  - 'origin/250-框架標籤/01-框架標籤.md / 全文'
---

# iframe 框架標籤

## 實際應用

- 在網頁中嵌入廣告。
- 與超鏈接或表單的 `target` 配合，展示不同的內容。

## 常用屬性

- `name`：框架的名字，可以與 `target` 屬性配合使用。
- `width`：框架的寬度。
- `height`：框架的高度。
- `frameborder`（舊式/已廢棄）：曾用來控制是否顯示邊框，常見值為 `0` 或 `1`。
  - 新內容應改用 CSS 的 `border` 控制 `<iframe>` 邊框。

## 使用範例

```html
<!-- 利用 iframe 嵌入一個普通的網頁 -->
<iframe src="https://www.bilibili.com/" width="900" height="300" style="border: 0;"></iframe>
<hr>

<!-- 利用 iframe 嵌入其他內容：src 為示意路徑，請替換成實際存在的 PDF 檔案路徑 -->
<iframe src="./media/test.pdf" style="border: 1px solid currentColor;"></iframe>
<hr>

<!-- 與超鏈接的 target 屬性配合使用 -->
<a href="https://www.bilibili.com/" target="container">點我去 B站</a>
<iframe name="container" width="900" height="300" style="border: 0;"></iframe>
<hr>

<!-- 與表單的 target 屬性配合使用
  1. target 屬性指定了表單提交後的頁面在哪個目標中顯示。這裡的值是 "container2"，也就是下面 <iframe> 的名稱。
  2. name 屬性指定了 <iframe> 的名稱為 "container2"，這樣表單提交後的結果會在這個 <iframe> 中顯示。
-->
<form action="https://so.toutiao.com/search" target="container2">
    <input type="text" name="keyword">
    <input type="submit" value="搜索">
</form>
<iframe name="container2" width="900" height="300" style="border: 0;"></iframe>
```
