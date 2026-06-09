# img 標籤與常用屬性

> 來源：
> - origin/第18章_圖片標籤/01-圖片標籤.md / # 1. 圖像標籤和屬性介紹
> - origin/第18章_圖片標籤/01-圖片標籤.md / # 2. 圖像標籤屬性的注意點
> - origin/第18章_圖片標籤/01-圖片標籤.md / # 4. 圖像標籤的使用

## 圖像標籤介紹

- 場景 : 在網頁中顯示圖片。
- 單詞 image 的縮寫，意為圖像。
- `src 是 <img> 標籤的必要屬性`，它用於指定圖像文件的路徑和文件名。
- 特點 :
    - 單標籤。
    - **img** 標籤要展示對應的效果，需要藉助標籤的屬性進行設置。

![img 標籤常用屬性說明表](../../origin/第18章_圖片標籤/assets/images/img-tag-img-001-7e5dcd.png)

```html
<img
  src="图片地址"
  alt="替换文本"
  title="提示文本"
  width="宽度"
  height="高度"
/>
```

## 圖像標籤屬性的注意點

- 圖像標籤可以擁有很多屬性，必須寫在標籤名的後面。
- 屬性之間不分先後順序，標籤名與屬性、屬性與屬性之間均以空格分開。
- 屬性採取鍵值對的格式，即 **key = "value"** 的格式，**屬性 = "屬性值"**。

## width 和 height 屬性

- 如果只設置 `width` 或 `height` 中的一個，另一個沒設置的會 **自動等比例縮放** ( 此時圖片不會變形 )。
- 如果同時設置了 `width` 和 `height` 兩個，**若設置不當此時圖片可能會變形**。

## 圖像標籤的使用

```html
<body>
  <h4>圖像標籤的使用:</h4>
  <img src="./assets/images/img-tag-img-002-354aea.jpg" /><br>
  <hr>

  <h4> alt 替換文本 圖像顯示不出來的時候用文字替換:</h4>
  <img src="img1.jpg" alt="我是pink老師" /> <br>
  <hr>

  <h4> title 提示文本 鼠標放到圖像上,提示的文字:</h4>
  <img src="./assets/images/img-tag-img-002-354aea.jpg" title="我是pink老師思密達" /><br>
  <hr>

  <h4> width、height</h4>
  <img src="./assets/images/img-tag-img-002-354aea.jpg" width="200" height="200" /><br>
  <hr>
</body>
```
