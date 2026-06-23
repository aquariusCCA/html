---
source_notes:
  - notes/290-進度條標籤/01-progress-進度條標籤.md
topics: [progress 標籤, 任務進度, value 與 max]
summary: "練習 progress 的基本語法，包含 value、max 與進度條用途說明。"
---

# progress 基本語法練習

> 動手練習。概念與用法說明見 notes/290-進度條標籤/01-progress-進度條標籤.md。

## 題目 1（基礎）· 應用練習題

請建立一個進度條，表示目前完成 `50`，目標值是 `100`。

完成標準：

- 使用 `<progress>`。
- `value` 設為 `50`。
- `max` 設為 `100`。
- 搭配附近文字說明這是當前進度。

<details>
<summary>參考解答</summary>

```html
<span>當前進度: </span>
<progress value="50" max="100"></progress>
```

解題說明：`<progress>` 表示任務完成進度。`value="50"` 是目前完成的數值，`max="100"` 是任務完成時的目標值，因此代表完成了一半。
</details>

## 題目 2（基礎）· 應用練習題

請建立一個進度條，表示目前完成 `3`，總目標是 `10`。

完成標準：

- 使用 `<progress>`。
- `value` 設為 `3`。
- `max` 設為 `10`。

<details>
<summary>參考解答</summary>

```html
<progress value="3" max="10"></progress>
```

解題說明：`max` 用來指定進度完成時的目標值。這段表示目前完成 3，總目標是 10。
</details>

## 題目 3（進階）· 改錯題

下面進度條沒有說明它代表什麼任務。請補上清楚的用途說明。

```html
<progress value="80" max="100"></progress>
```

完成標準：

- 保留 `value="80"` 與 `max="100"`。
- 補上文字或標籤，讓使用者知道這是什麼進度。

<details>
<summary>參考解答</summary>

```html
<span>下載進度: </span>
<progress value="80" max="100"></progress>
```

解題說明：如果畫面上完全沒有文字說明，使用者可能不知道進度條代表上傳、下載還是其他任務。實務上應該搭配文字、`label` 或附近說明文字。
</details>
