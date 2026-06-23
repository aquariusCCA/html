---
source_notes:
  - notes/310-detail標籤/01-details與summary標籤.md
topics: [details標籤, summary標籤, 互動語意]
summary: "details 使用情境判斷練習，聚焦適合的展開內容與不適合取代的複雜互動。"
---

# details 使用情境判斷練習

> 動手練習。概念與用法說明見 notes/310-detail標籤/01-details與summary標籤.md。

## 題目 1（基礎）· 實作任務

建立一個產品規格細節區塊。需求如下：

- 一開始只顯示標題 `產品規格`。
- 展開後顯示兩段規格文字：`重量：1.2 公斤。`、`材質：鋁合金。`
- 使用原生 HTML 建立展開與收合效果。

完成標準：

- 使用 `<details>` / `<summary>`。
- `<summary>` 文字是 `產品規格`。
- 詳細規格放在 `<summary>` 之後。

<details>
<summary>參考解答</summary>

```html
<details>
  <summary>產品規格</summary>
  <p>重量：1.2 公斤。</p>
  <p>材質：鋁合金。</p>
</details>
```

解題說明：產品規格細節屬於 notes 提到的「不想一開始佔用太多版面的次要內容」，也符合「一個標題加上一段可選擇查看的詳細資訊」，適合使用 `<details>`。

</details>

## 題目 2（基礎）· 應用練習題

建立一個文章中的延伸說明區塊。標題是 `延伸說明`，展開後顯示 `這段內容補充主文沒有展開的背景。`。

完成標準：

- 不使用 JavaScript。
- 使用 `<summary>` 提供一開始可見、可點擊的標題。
- 詳細內容放在 `<details>` 內。

<details>
<summary>參考解答</summary>

```html
<details>
  <summary>延伸說明</summary>
  <p>這段內容補充主文沒有展開的背景。</p>
</details>
```

解題說明：notes 說明文章中的補充說明適合優先考慮 `<details>`。如果只是簡單的點擊標題後展開內容，HTML 原生標籤就能完成，不一定需要先寫 JavaScript。

</details>

## 題目 3（進階）· 重構題

下面的註解把 `<details>` 說成可以取代所有互動元件。請改寫成符合 notes 的說法，不需要實作複雜選單或分頁。

```html
<!-- 主要導覽選單、分頁切換和複雜操作面板都可以直接用 details 取代。 -->
```

完成標準：

- 不再宣稱 `<details>` 可以取代所有互動元件。
- 說明 `<details>` 適合簡單的展開與收合內容。
- 提醒複雜互動通常需要更完整的設計。

<details>
<summary>參考解答</summary>

```html
<!-- details 適合簡單的展開與收合內容，例如常見問題、補充說明或產品規格細節。 -->
<!-- 主要導覽選單、分頁切換和複雜操作面板，通常需要更完整的 HTML、CSS 與 JavaScript 配合。 -->
```

解題說明：notes 明確說明 `<details>` 不適合承擔所有互動需求。它適合的是簡單的展開與收合內容；複雜互動、細緻動畫、焦點管理或資料狀態不是本章 practice 要用 `<details>` 硬做的範圍。

</details>
