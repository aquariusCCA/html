---
source_notes:
  - notes/310-detail標籤/01-details與summary標籤.md
topics: [details標籤, summary標籤, 原生展開收合]
summary: "details 與 summary 基本結構的動手練習，包含 FAQ、文章概要與缺少 summary 的修正。"
---

# details 基本結構練習

> 動手練習。概念與用法說明見 notes/310-detail標籤/01-details與summary標籤.md。

## 題目 1（基礎）· 應用練習題

建立一個常見問題區塊。畫面一開始應該只顯示問題標題 `什麼是 HTML？`，使用者展開後才看到答案 `HTML 是用來描述網頁結構的標記語言。`。

完成標準：

- 使用 `<details>` 包住整組可展開內容。
- `<summary>` 放在 `<details>` 裡，並作為可見標題。
- 詳細答案放在 `<summary>` 之後。

<details>
<summary>參考解答</summary>

```html
<details>
  <summary>什麼是 HTML？</summary>
  <p>HTML 是用來描述網頁結構的標記語言。</p>
</details>
```

解題說明：`<details>` 表示一組可以展開或收合的詳細內容；`<summary>` 是使用者一開始看得到、可以點擊的摘要標題。答案放在 `<summary>` 後面，展開後才會顯示。

</details>

## 題目 2（基礎）· 應用練習題

建立一個文章概要區塊。可見標題是 `文章概要`，展開後顯示 `這裡放文章的詳細概要內容。`。

完成標準：

- 使用 notes 示範過的 `<details>` / `<summary>` 結構。
- `<summary>` 文字是 `文章概要`。
- 詳細內容放在 `<div>` 或 `<p>` 中皆可。

<details>
<summary>參考解答</summary>

```html
<details>
  <summary>文章概要</summary>
  <div>這裡放文章的詳細概要內容。</div>
</details>
```

解題說明：notes 的基本語法示範了這種結構。這個練習的重點不是樣式，而是用標籤本身表達「摘要標題」與「詳細內容」的關係。

</details>

## 題目 3（進階）· 改錯題

下面的程式碼只寫了 `<details>`，沒有明確提供 `<summary>`。請修正它，讓讀者一開始能看到有意義的標題。

```html
<details>
  <p>這是一段補充說明。</p>
</details>
```

完成標準：

- 在 `<details>` 裡加入 `<summary>`。
- `<summary>` 的文字能描述詳細內容。
- 詳細內容保留在 `<summary>` 後面。

<details>
<summary>參考解答</summary>

```html
<details>
  <summary>補充說明</summary>
  <p>這是一段補充說明。</p>
</details>
```

解題說明：只寫 `<details>` 時，瀏覽器可能顯示預設標題，例如 `Details`，但這不一定符合內容。正式內容應明確撰寫 `<summary>`，讓讀者知道展開後會看到什麼。

</details>
