---
source_notes:
  - notes/250-框架標籤/01-iframe框架標籤.md
topics: [iframe, iframe 屬性, target 導向, 使用判斷]
summary: "練習修正 iframe 的常見錯誤，包含舊式 frameborder、缺少 title、target/name 不一致與誤用 iframe 做版面結構。"
---

# iframe 改錯與重構練習

> 動手練習。概念與用法說明見 notes/250-框架標籤/01-iframe框架標籤.md。

## 題目 1（基礎）· 改錯題

下面 iframe 想嵌入 `./demo/home.html`，但寫法不符合新內容建議。請修正。

```html
<iframe src="./demo/home.html" frameborder="0" width="900" height="300"></iframe>
```

完成標準：

- 移除 `frameborder`。
- 補上能描述內容的 `title`。
- 使用 CSS 控制邊框。
- 保留 `src`、`width`、`height`。

<details>
<summary>參考解答</summary>

```html
<iframe src="./demo/home.html" title="示範首頁" width="900" height="300" style="border: 0;"></iframe>
```

解題說明：`frameborder` 是舊式屬性，新內容應改用 CSS 的 `border`。iframe 也應提供 `title`，讓輔助工具能辨識框架用途。
</details>

## 題目 2（進階）· 改錯題

下面程式碼同時有兩個問題：連結目標沒有載入到指定 iframe，iframe 也缺少內容描述。請修正。

```html
<a href="./demo/news.html" target="newsFrame">開啟最新消息</a>
<iframe name="container" width="900" height="300" style="border: 0;"></iframe>
```

完成標準：

- 讓連結的 `target` 與 iframe 的 `name` 一致。
- 補上 iframe 的 `title`。
- 保留 iframe 的尺寸與 CSS 邊框設定。

<details>
<summary>參考解答</summary>

```html
<a href="./demo/news.html" target="newsFrame">開啟最新消息</a>
<iframe name="newsFrame" title="最新消息內容" width="900" height="300" style="border: 0;"></iframe>
```

解題說明：連結的 `target` 必須對應 iframe 的 `name`，瀏覽器才知道要把連結載入到哪個框架。`title` 則說明框架載入內容的用途。
</details>

## 題目 3（進階）· 重構題

下面寫法把 iframe 當成一般版面容器，用來切出主要內容與側邊欄。請移除不適合的 iframe，改成一般 HTML 結構。

```html
<iframe src="./layout/main.html" title="主要內容"></iframe>
<iframe src="./layout/sidebar.html" title="側邊欄"></iframe>
```

完成標準：

- 不再使用 iframe 來做一般版面切分。
- 使用目前頁面中的 HTML 結構呈現主要內容與側邊欄。
- 說明為什麼這種需求不適合 iframe。

<details>
<summary>參考解答</summary>

```html
<main>
  這裡放目前頁面的主要內容。
</main>

<section>
  這裡放目前頁面的側邊欄內容。
</section>
```

解題說明：iframe 適合嵌入另一個頁面或文件，不適合用來取代一般版面結構。如果只是要把頁面分成主要內容與側邊欄，應使用目前頁面的 HTML 結構與 CSS 排版處理。
</details>
