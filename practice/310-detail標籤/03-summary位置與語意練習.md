---
source_notes:
  - notes/310-detail標籤/01-details與summary標籤.md
topics: [details標籤, summary標籤, 互動語意]
summary: "summary 位置與語意練習，包含 summary 放錯位置與結構重構。"
---

# summary 位置與語意練習

> 動手練習。概念與用法說明見 notes/310-detail標籤/01-details與summary標籤.md。

## 題目 1（基礎）· 改錯題

下面的 `<summary>` 放在 `<details>` 外面，結構語意不清楚。請修正它。

```html
<summary>文章概要</summary>
<details>
  <p>文章詳細內容。</p>
</details>
```

完成標準：

- `<summary>` 放進 `<details>` 裡。
- `<summary>` 成為 `<details>` 的第一個子元素。
- 詳細內容放在 `<summary>` 後面。

<details>
<summary>參考解答</summary>

```html
<details>
  <summary>文章概要</summary>
  <p>文章詳細內容。</p>
</details>
```

解題說明：`<summary>` 應該放在 `<details>` 裡面，並且作為第一個子元素。放在外面時，它就不再是該組可展開內容的摘要標題。

</details>

## 題目 2（基礎）· 改錯題

下面的 `<summary>` 雖然在 `<details>` 裡，但不是第一個子元素。請調整順序。

```html
<details>
  <p>這是一段補充說明。</p>
  <summary>補充說明</summary>
</details>
```

完成標準：

- `<summary>` 移到 `<details>` 裡的第一個子元素位置。
- 補充說明內容保留在 `<summary>` 後面。
- 不新增 CSS 或 JavaScript。

<details>
<summary>參考解答</summary>

```html
<details>
  <summary>補充說明</summary>
  <p>這是一段補充說明。</p>
</details>
```

解題說明：notes 強調 `<summary>` 應放在 `<details>` 裡面作為第一個子元素。這樣瀏覽器才能把它當成該組可展開內容的可見摘要標題。

</details>

## 題目 3（進階）· 重構題

下面這段補充說明目前只是一般標題加段落。請重構成一個原生可展開與收合的內容區塊。

```html
<p>補充說明</p>
<p>這段內容不需要一開始全部顯示，但讀者可以自行展開查看。</p>
```

完成標準：

- 使用 `<details>` 包住整組內容。
- 使用 `<summary>` 表示 `補充說明`。
- 詳細文字放在 `<summary>` 後面。

<details>
<summary>參考解答</summary>

```html
<details>
  <summary>補充說明</summary>
  <p>這段內容不需要一開始全部顯示，但讀者可以自行展開查看。</p>
</details>
```

解題說明：如果內容符合「一個標題加上一段可選擇查看的詳細資訊」，就可以優先考慮 `<details>` 與 `<summary>`。重構後，標籤本身就表達了摘要標題與詳細內容的關係。

</details>
