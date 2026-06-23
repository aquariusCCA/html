---
source_notes:
  - notes/250-框架標籤/01-iframe框架標籤.md
topics: [iframe, 內嵌內容, iframe 屬性, iframe 邊框]
summary: "練習使用 iframe 嵌入頁面或文件，並用 CSS 控制 iframe 邊框。"
---

# iframe 基本嵌入與邊框練習

> 動手練習。概念與用法說明見 notes/250-框架標籤/01-iframe框架標籤.md。

## 題目 1（基礎）· 應用練習題

請建立一個 iframe，用來嵌入 `./demo/home.html`。

完成標準：

- 使用 `<iframe>`。
- `src` 指向 `./demo/home.html`。
- 提供能描述內容的 `title`。
- 寬度為 `900`，高度為 `300`。
- 使用 CSS 移除邊框，不使用 `frameborder`。

<details>
<summary>參考解答</summary>

```html
<iframe src="./demo/home.html" title="示範首頁" width="900" height="300" style="border: 0;"></iframe>
```

解題說明：`src` 決定 iframe 載入的內容，`title` 描述框架用途，`width` 與 `height` 設定顯示尺寸。新內容不建議使用 `frameborder`，應改用 CSS 的 `border` 控制邊框。
</details>

## 題目 2（基礎）· 應用練習題

請建立一個 iframe，用來預覽 `./media/test.pdf`，並保留可見邊框。

完成標準：

- `src` 指向 `./media/test.pdf`。
- `title` 能說明這是 PDF 文件預覽。
- 使用 CSS 設定 `1px solid currentColor` 邊框。

<details>
<summary>參考解答</summary>

```html
<iframe src="./media/test.pdf" title="PDF 文件預覽" style="border: 1px solid currentColor;"></iframe>
```

解題說明：iframe 可以嵌入瀏覽器能顯示的文件，例如 PDF。它只是把指定路徑的內容嵌入頁面中顯示；路徑必須指向實際存在且瀏覽器可顯示的檔案。
</details>

## 題目 3（進階）· 改錯題

下面程式碼使用了舊式邊框屬性，也缺少描述 iframe 內容的資訊。請修正。

```html
<iframe src="page.html" frameborder="0"></iframe>
```

完成標準：

- 移除 `frameborder`。
- 補上能描述內容的 `title`。
- 改用 CSS 控制邊框。

<details>
<summary>參考解答</summary>

```html
<iframe src="page.html" title="頁面內容" style="border: 0;"></iframe>
```

解題說明：`frameborder` 是舊式寫法，新內容應改用 CSS。`title` 讓輔助工具使用者能知道這個 iframe 內嵌的是什麼內容。
</details>
