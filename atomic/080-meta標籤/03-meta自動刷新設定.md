# meta 自動刷新設定

> 來源：origin/080-meta標籤/01-meta標籤.md / Notes：配置網頁自動刷新

`http-equiv="refresh"` 可設定延遲重新載入目前頁面；若 `content` 加上 `;url=`，則會在指定秒數後導向其他 URL。下面範例會在 3 秒後導向指定網址。

```html
<!-- 3 秒後導向指定網址 -->
<meta http-equiv="refresh" content="3;url=https://www.bilibili.com/">
```
