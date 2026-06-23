---
source_notes:
  - notes/250-框架標籤/01-iframe框架標籤.md
topics: [iframe, target 導向, name 屬性, 連結]
summary: "練習讓連結透過 target 載入到指定 name 的 iframe 中，並修正 target/name 不一致的錯誤。"
---

# iframe name 與連結 target 練習

> 動手練習。概念與用法說明見 notes/250-框架標籤/01-iframe框架標籤.md。

## 題目 1（基礎）· 應用練習題

請建立一個連結，點擊後把 `./demo/news.html` 載入到同一個 iframe 中。

完成標準：

- 連結的 `href` 指向 `./demo/news.html`。
- 連結的 `target` 指向 iframe 的名稱。
- iframe 使用相同的 `name`。
- iframe 有 `title`、寬度、高度與 CSS 邊框設定。

<details>
<summary>參考解答</summary>

```html
<a href="./demo/news.html" target="container">開啟最新消息</a>
<iframe name="container" title="連結開啟結果" width="900" height="300" style="border: 0;"></iframe>
```

解題說明：`<iframe name="container">` 建立名為 `container` 的框架，`<a target="container">` 會把連結目標載入到這個框架中。
</details>

## 題目 2（基礎）· 實作任務

請建立兩個連結，分別開啟 `./demo/home.html` 與 `./demo/news.html`，但結果都要顯示在同一個 iframe 中。

完成標準：

- 兩個連結都使用相同的 `target`。
- iframe 的 `name` 與兩個連結的 `target` 完全一致。
- iframe 有能說明用途的 `title`。

<details>
<summary>參考解答</summary>

```html
<a href="./demo/home.html" target="content">開啟首頁</a>
<a href="./demo/news.html" target="content">開啟最新消息</a>

<iframe name="content" title="連結開啟結果" width="900" height="300" style="border: 0;"></iframe>
```

解題說明：多個連結可以指向同一個 iframe，只要它們的 `target` 值和 iframe 的 `name` 一致即可。
</details>

## 題目 3（進階）· 改錯題

下面程式碼想把連結內容載入 iframe，但 `target` 和 `name` 對不起來。請修正。

```html
<a href="page.html" target="content">開啟頁面</a>
<iframe name="container"></iframe>
```

完成標準：

- 讓連結的 `target` 與 iframe 的 `name` 使用相同值。
- iframe 補上描述內容的 `title`。

<details>
<summary>參考解答</summary>

```html
<a href="page.html" target="content">開啟頁面</a>
<iframe name="content" title="頁面內容"></iframe>
```

解題說明：`target` 的值必須和 iframe 的 `name` 一致。若名稱不同，瀏覽器找不到對應的 iframe，可能會改用新視窗或其他瀏覽目標開啟。
</details>
