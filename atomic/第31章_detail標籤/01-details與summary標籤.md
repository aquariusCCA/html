# details 與 summary 標籤

> 來源：origin/第31章_detail標籤/01-detail標籤.md / 全文

- 在 HTML 中，`details` 標籤是 HTML5 中新增的標籤，用來定義可讓使用者開啟和關閉的互動式控制項。
- 在 `details` 標籤中，通常會使用 `summary` 標籤來定義標題，而 `details` 標籤中的其他部分則是標題的詳細資訊。
- 標題是可見的，而詳細資訊預設是隱藏的，除非設定了 `open` 屬性。當使用者點擊標題時，會顯示出標題的詳細資訊。
- `details` 標籤通常和 `summary` 標籤一起使用，用來實作可開啟和關閉的互動式控制項。如果單獨使用 `details`，標題會使用瀏覽器預設文字。

```html
<details open>
  <summary>
    文章概要
  </summary>
  <div>文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容</div>
</details>
```
