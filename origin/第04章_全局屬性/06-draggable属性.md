- draggable 屬性規定元素是否可拖動。和 JS 結合使用可以展示更好的效果。
    - 提示： 鏈接和圖像默認是可拖動的。
    - 提示： draggable 屬性經常用於拖放操作。

- 屬性值如下:
    ![draggable属性值.png](./assets/images/draggable屬性-img-001-1637f4.png)
        
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
