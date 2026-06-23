---
source_notes:
  - notes/310-detail標籤/01-details與summary標籤.md
topics: [details標籤, summary標籤, open屬性]
summary: "open 屬性的動手練習，包含預設展開、預設收合與錯誤位置修正。"
---

# open 預設展開練習

> 動手練習。概念與用法說明見 notes/310-detail標籤/01-details與summary標籤.md。

## 題目 1（基礎）· 應用練習題

建立一個補充說明區塊，並讓它一開始就是展開狀態。可見標題是 `補充說明`，詳細內容是 `這段內容預設展開，讀者可以再收合。`。

完成標準：

- 使用 `<details open>`。
- `<summary>` 放在 `<details>` 裡。
- 詳細內容放在 `<summary>` 之後。

<details>
<summary>參考解答</summary>

```html
<details open>
  <summary>補充說明</summary>
  <p>這段內容預設展開，讀者可以再收合。</p>
</details>
```

解題說明：`open` 是布林屬性。只要出現在 `<details>` 上，就代表這個區塊預設展開；使用者仍可以點擊 `<summary>` 切換展開狀態。

</details>

## 題目 2（基礎）· 應用練習題

建立兩個文章相關區塊：

- 第一個標題是 `文章概要`，預設展開。
- 第二個標題是 `延伸閱讀`，預設收合。

完成標準：

- 只有第一個 `<details>` 加上 `open`。
- 第二個 `<details>` 不加 `open`。
- 兩個區塊都要有 `<summary>`。

<details>
<summary>參考解答</summary>

```html
<details open>
  <summary>文章概要</summary>
  <p>文章內容、重點整理或補充說明可以放在這裡。</p>
</details>

<details>
  <summary>延伸閱讀</summary>
  <p>這裡放延伸閱讀說明。</p>
</details>
```

解題說明：有 `open` 的 `<details>` 會預設展開；沒有 `open` 時，內容通常預設收合。兩者的差別只在 `<details>` 上是否出現 `open`。

</details>

## 題目 3（進階）· 改錯題

下面這段程式碼想讓區塊預設展開，但把 `open` 放錯位置。請修正它。

```html
<details>
  <summary open>文章概要</summary>
  <p>文章內容、重點整理或補充說明可以放在這裡。</p>
</details>
```

完成標準：

- `open` 應放在 `<details>` 上。
- `<summary>` 只負責可見標題。
- 修正後內容預設展開。

<details>
<summary>參考解答</summary>

```html
<details open>
  <summary>文章概要</summary>
  <p>文章內容、重點整理或補充說明可以放在這裡。</p>
</details>
```

解題說明：notes 說明如果希望內容一開始就是展開狀態，要在 `<details>` 上加入 `open`。`<summary>` 的責任是摘要標題，不是控制預設展開狀態。

</details>
