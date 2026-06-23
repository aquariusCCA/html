---
source_notes:
  - notes/210-超鏈接標籤/04-特殊-href-用法補充.md
topics: [特殊 href, 空連結, javascript URL, 通訊連結, app scheme]
summary: "特殊 href 用法的動手練習，包含明確回頂部錨點、tel/mailto、javascript URL 與空連結修正。"
---

# 特殊 href 用法練習

> 動手練習。概念與用法說明見 notes/210-超鏈接標籤/04-特殊-href-用法補充.md。

## 題目 1（基礎）· 應用練習題

請建立一個正式頁面中較明確的「回到頂部」連結。頁面頂部是 `<header>`，連結文字是「回到頂部」。

完成標準：

- 不使用不明確的 `##`。
- 使用 `href="#top"` 指向明確錨點。
- 在頁面頂部元素上設定 `id="top"`。

<details>
<summary>參考解答</summary>

```html
<a href="#top">回到頂部</a>

<header id="top">
  ...
</header>
```

解題說明：

`href="#"` 常見於回到頂部或臨時連結，但正式功能更適合使用明確目標，例如 `href="#top"` 搭配 `id="top"`。兩個井號 `##` 不是可靠的回頂部寫法。

</details>

## 題目 2（基礎）· 應用練習題

請建立兩個聯絡入口：一個客服電話連結，電話是 `10010`；一個郵件連結，收件地址是 `10010@qq.com`。

完成標準：

- 電話入口使用 `tel:`。
- 郵件入口使用 `mailto:`。
- 連結文字清楚描述用途。
- 不把這兩個連結寫成普通網頁路徑。

<details>
<summary>參考解答</summary>

```html
<a href="tel:10010">電話聯繫</a>
<a href="mailto:10010@qq.com">郵件聯繫</a>
```

解題說明：

`tel:` 可以嘗試喚起裝置的撥號功能，`mailto:` 可以嘗試開啟郵件應用並建立新郵件。不過它們都會受裝置、瀏覽器與使用者設定影響。

</details>

## 題目 3（進階）· 改錯題

以下程式碼使用 `javascript:` 作為主要互動。請改成語意更清楚的按鈕寫法。

```html
<a href="javascript:submitForm()">送出</a>
```

完成標準：

- 不使用 `javascript:` 作為正式頁面的主要互動寫法。
- 使用 `<button>` 表示送出操作。
- 使用適合送出的 `type`。

<details>
<summary>參考解答</summary>

```html
<button type="submit">送出</button>
```

解題說明：

`javascript:` 會把 HTML 結構與 JavaScript 行為混在一起，也容易讓 `<a>` 被誤用成按鈕。如果動作是「送出」而不是前往某個位置，應改用 `<button>` 表示操作。

</details>

## 題目 4（進階）· 改錯題

以下程式碼把還沒決定目標的「更多內容」做成空連結。請改成正式頁面中較清楚的寫法：如果暫時沒有目標，就先不要輸出可點擊的 `<a>`。

```html
<a href="">更多內容</a>
```

完成標準：

- 不長期保留空 `href`。
- 不讓使用者看到可點擊但意圖不清楚的連結。
- 保留文字內容，但先不要做成連結。

<details>
<summary>參考解答</summary>

```html
<span>更多內容</span>
```

解題說明：

空 `href` 通常會指向目前頁面，點擊後可能重新載入或回到目前 URL，意圖不清楚。如果連結目標還沒決定，正式頁面中應先避免輸出可點擊的 `<a>`。

</details>
