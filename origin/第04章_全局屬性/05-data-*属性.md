> 使用 `data-*` 屬性來嵌入自定義數據：

- 定義和用法 :
    - `data-*` 屬性用於存儲頁面或應用程序的私有自定義數據。
    - `data-*` 屬性賦予我們在所有 HTML 元素上嵌入自定義 data 屬性的能力。
    - 存儲的（自定義）數據能夠被頁面的 JavaScript 中利用，以創建更好的用戶體驗（不需要使用 Ajax 或去服務端查詢數據）。

- `data-*` 屬性包括兩部分：
    - 屬性名不應該包含任何大寫字母，並且在前綴 “data-” 之後必須有至少一個字符。
    - 屬性值可以是任意字符串。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <ul>
    <li class="animal" data-animal-type="bird">喜鹊</li>
    <li class="animal" data-animal-type="fish">金枪鱼</li>
    <li class="animal" data-animal-type="spider">蝇虎</li>
  </ul>

  <ul>
    <li id="apple">蘋果</li>
  </ul>
</body>

<script>
	// 在腳本中讀取 data-* 屬性
	let elments = document.querySelectorAll('.animal');

    for (let i = 0; i < elments.length; i++) {
        console.log(elments[i].dataset.animalType);
    }

	// 在腳本中設定 data-* 屬性
	let apple = document.getElementById('apple');
  apple.setAttribute('data-food-type', 'fruit');
</script>
</html>
```

> ⚠️ **自定義屬性前綴 "data-" 會被客戶端忽略。**