# meta 字元編碼與顯示環境設定

> 來源：origin/080-meta標籤/01-meta標籤.md / Notes：配置字符編碼、針對 IE 瀏覽器的一個兼容性設置、針對移動端的一個配置

這組 meta 標籤用來設定網頁的字元編碼、瀏覽器渲染模式與行動裝置顯示方式。

## 配置字符編碼

```html
<!-- 配置字符編碼 -->
<meta charset="UTF-8">
```

## 針對 IE 瀏覽器的一個兼容性設置

```html
<!-- 針對 IE 瀏覽器的一個兼容性設置，總是使用最新的文檔模式進行渲染。 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

## 針對移動端的一個配置

```html
<!-- 針對移動端的一個配置 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
