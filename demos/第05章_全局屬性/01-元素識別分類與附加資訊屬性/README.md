# 元素識別、分類與附加資訊屬性 HTML 教學範例

來源筆記：`notes/第05章_全局屬性/01-元素識別分類與附加資訊屬性.md`

## 建議學習順序

| 順序 | Demo | 對應觀念 | 觀察重點 | 建議修改任務 |
| --- | --- | --- | --- | --- |
| 1 | `01-id唯一識別與頁內錨點.html` | `id` 是元素的唯一識別 | `href="#pricing"` 會連到同一頁中 `id="pricing"` 的元素 | 把目標區塊的 `id` 改成 `plans`，同步修改連結的 `href` |
| 2 | `02-class分類與多個class.html` | `class` 可重複分類，一個元素可有多個 class | 多個元素共用 `notice` 樣式，單一元素也可同時有 `notice important` | 替最後一段加上 `class="notice"`，觀察它是否加入同一組樣式 |
| 3 | `03-data自訂資料與dataset.html` | `data-*` 存放給 JavaScript 使用的自訂資料 | `data-product-id` 會透過 `dataset.productId` 讀取 | 修改 `data-product-id` 或 `data-stock-status`，重新整理後觀察讀取結果 |
| 4 | `04-style行內樣式與class對照.html` | `style` 是直接寫在元素上的行內 CSS | 少量行內樣式會直接作用；共用樣式更適合改用 `class` | 移除其中一段的 `class="warning"`，觀察樣式只留在有 class 的段落 |
| 5 | `05-常見錯誤與正確選用.html` | 避免混用 `id`、`class`、`data-*` 與 `style` | 比較重複 `id`、把資料塞進 class、大量重複行內 style 的修正方向 | 說出三組正確寫法分別解決「分類」、「資料」或「共用樣式」哪一種需求 |

## 學習提醒

這組 demo 的目標不是取代正式筆記，而是幫助你把筆記中的觀念轉成可觀察、可修改、可練習的 HTML 範例。
