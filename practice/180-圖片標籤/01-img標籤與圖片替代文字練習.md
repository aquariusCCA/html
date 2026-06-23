---
source_notes:
  - notes/180-圖片標籤/01-img標籤與圖片替代文字.md
topics: [img標籤, 圖片來源, 圖片替代文字, 圖片尺寸]
summary: "img 標籤與圖片替代文字的動手練習，包含 src、alt、title、width 與常見錯誤修正。"
---

# img 標籤與圖片替代文字練習

> 動手練習。概念與用法說明見 notes/180-圖片標籤/01-img標籤與圖片替代文字.md。

## 題目 1（基礎）· 應用練習題

請為商品介紹頁寫出一個商品圖片。圖片檔案在 `./assets/images/headphones.jpg`，圖片內容是「黑色無線耳機」，滑鼠停留時提示「點擊查看商品詳情」，顯示寬度為 `300`。

完成標準：

- 使用 `<img>` 單標籤。
- `src` 指向正確圖片路徑。
- `alt` 能替代圖片真正傳達的資訊。
- `title` 作為額外提示，不取代 `alt`。
- 只設定 `width`，讓高度依比例縮放。

<details>
<summary>參考解答</summary>

```html
<img
  src="./assets/images/headphones.jpg"
  alt="黑色無線耳機"
  title="點擊查看商品詳情"
  width="300"
>
```

解題說明：

`src` 指定圖片位置，`alt` 說明圖片內容，`title` 提供額外提示。這題只要求控制寬度，因此使用 `width="300"` 即可，避免在不知道原圖比例時同時亂設 `width` 和 `height`。

</details>

## 題目 2（基礎）· 應用練習題

頁面中有一張只作為分隔線裝飾的圖片，檔案是 `line-decoration.png`。這張圖片消失時，使用者不會少掉任何內容資訊。請寫出合適的圖片標籤。

完成標準：

- 使用 `<img>` 顯示圖片。
- `src` 指向 `line-decoration.png`。
- 因為圖片只是裝飾，使用空的 `alt=""`。
- 不把 `alt` 寫成「圖片」或「分隔線圖片」這類多餘描述。

<details>
<summary>參考解答</summary>

```html
<img src="line-decoration.png" alt="">
```

解題說明：

`alt` 是圖片的替代內容。如果圖片只是裝飾、不承載內容資訊，空的 `alt=""` 通常比硬寫「圖片」更合適，因為它不會把沒有必要的資訊交給讀者或輔助工具。

</details>

## 題目 3（基礎）· 改錯題

以下兩張商品圖片都有替代文字問題。請修正它們，讓圖片無法顯示時，使用者仍能知道圖片代表的內容。

```html
<img src="product.jpg">
<img src="product-side.jpg" alt="圖片">
```

完成標準：

- 第一張有內容意義的圖片要補上 `alt`。
- 第二張不能使用沒有資訊量的 `alt="圖片"`。
- 替代文字要描述圖片真正代表的內容。

<details>
<summary>參考解答</summary>

```html
<img src="product.jpg" alt="黑色無線耳機">
<img src="product-side.jpg" alt="黑色無線耳機側面">
```

解題說明：

有內容意義的圖片應該提供替代文字。`alt="圖片"` 只說明它是一張圖片，沒有交代圖片資訊；更好的寫法是描述圖片實際代表的內容，例如商品名稱或商品角度。

</details>

## 題目 4（進階）· 改錯題

以下程式碼把 `title` 當成替代文字，並同時設定不合比例的寬高，可能造成圖片變形。請修正它。

```html
<img src="logo.png" title="公司標誌" width="300" height="100">
```

完成標準：

- 圖片有資訊意義時，使用 `alt` 提供替代文字。
- `title` 可以保留為額外提示，但不能取代 `alt`。
- 不確定圖片比例時，只設定一邊尺寸。

<details>
<summary>參考解答</summary>

```html
<img src="logo.png" alt="公司標誌" title="返回首頁" width="300">
```

解題說明：

`title` 不是圖片無法顯示時的主要替代內容，所以不能取代 `alt`。同時設定 `width` 和 `height` 時，如果比例不符合原圖，圖片可能被拉伸或壓扁；不確定比例時，只設定 `width` 通常比較不容易出錯。

</details>
