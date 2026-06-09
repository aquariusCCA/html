# 特殊 href 用法

> 來源：
> - origin/第21章_超鏈接標籤/01-超鏈接標籤.md / ## 3.4 跳到本頁的頂部
> - origin/第21章_超鏈接標籤/01-超鏈接標籤.md / ## 3.5 空鏈接
> - origin/第21章_超鏈接標籤/01-超鏈接標籤.md / ## 3.6 執行JS代碼
> - origin/第21章_超鏈接標籤/01-超鏈接標籤.md / ## 3.7 喚起指定應用

## 跳到本頁的頂部

> ⚠️ 注意點 → 兩個井號單擊並不會返回頂部。

```html
<div style="height: 2000px;">空盒子</div>
<!-- 跳到本頁的頂部 -->
<a href="#">回到頂部</a>
```

## 空鏈接

```html
<h4>空鏈接</h4>
<a href="">刷新本頁面</a>
```

## 執行 JS 代碼

```html
<h4>執行 JS</h4>
<a href="javascript:alert('Hello, World!');">點擊我</a>
```

## 喚起指定應用

> 通過 a 標籤可以喚起設備應用程序。

```html
<!-- 喚起設備撥號 --><a href="tel:10010">電話聯繫</a>

<!-- 喚起設備發送郵件 --><a href="mailto:10010@qq.com">郵件聯繫</a>

<!-- 喚起LINE --><a href="line://msg/text/Hello%20World">使用 LINE 發送消息</a>
```
