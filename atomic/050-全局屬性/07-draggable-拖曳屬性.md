---
source:
  - 'origin/050-全局屬性/07-draggable 属性.md / 全文'
---

# draggable 拖曳屬性

## 參考文章

- [原生JS的拖拽属性draggable（详解）](https://blog.csdn.net/weixin_46726346/article/details/128149227)
- [javascript拖拽功能](https://juejin.cn/post/7157917666580103198)

draggable 屬性規定元素是否可拖動。和 JS 結合使用可以展示更好的效果。

- 鏈接和圖像默認是可拖動的。
- draggable 屬性經常用於拖放操作。

## 屬性值

![draggable 屬性值與拖動狀態對照表](../../origin/050-全局屬性/assets/images/draggable-attribute-img-001-1637f4.png)

`draggable` 明確設定時應使用 `true` 或 `false`。`auto` 是未設定或無效值時的預設行為，代表由瀏覽器決定是否可拖動。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .A {
      width: 200px;
      height: 200px;
      background-color: orange;
    }

    .B {
      width: 400px;
      height: 400px;
      background-color: gray;
    }
  </style>
</head>
<body>
  <div id="Adiv" class="A" draggable="true">
    A---拖曳的元素
  </div>
  <div id="Bdiv" class="B">
    B---A被拖進的元素
  </div>
</body>

<script>
  Bdiv.ondragenter = function (e) {
    e.preventDefault();
    this.appendChild(Adiv);
  }
  Bdiv.ondragover = function (e) {
    e.preventDefault();
  }

  Adiv.ondragstart = function (e) {
    this.style.backgroundColor = "yellow";
  }
  Adiv.ondrag = function (e) {
    console.log("drag事件");
  }
  Adiv.ondragend = function (e) {
    this.style.backgroundColor = "orange";
    console.log("dragend事件");
  }
</script>
</html>
```
