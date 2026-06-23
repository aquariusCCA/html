---
source_notes:
  - notes/290-進度條標籤/01-progress-進度條標籤.md
topics: [progress 標籤, 進度條可存取性, value 與 max]
summary: "練習用附近文字或 label 說明 progress 代表的任務，避免把進度條當成無說明的裝飾線條。"
---

# label 與進度說明練習

> 動手練習。概念與用法說明見 notes/290-進度條標籤/01-progress-進度條標籤.md。

## 題目 1（基礎）· 應用練習題

請建立一個下載進度條，表示目前下載到 `80 / 100`，並用附近文字說明用途。

完成標準：

- 使用附近文字說明「下載進度」。
- 使用 `<progress>`。
- `value="80"`、`max="100"`。

<details>
<summary>參考解答</summary>

```html
<span>下載進度: </span>
<progress value="80" max="100"></progress>
```

解題說明：進度條應該有清楚的文字說明，讓使用者知道這個進度條代表哪一項任務。
</details>

## 題目 2（基礎）· 應用練習題

請使用 `<label>` 建立一個上傳進度條，表示目前上傳到 `40 / 100`。

完成標準：

- 使用 `<label for="upload-progress">` 說明「上傳進度」。
- `<progress>` 有對應的 `id="upload-progress"`。
- `value="40"`、`max="100"`。

<details>
<summary>參考解答</summary>

```html
<label for="upload-progress">上傳進度</label>
<progress id="upload-progress" value="40" max="100"></progress>
```

解題說明：使用 `<label>` 搭配 `for` 與進度條的 `id`，可以清楚說明這條進度條代表上傳進度。
</details>

## 題目 3（進階）· 改錯題

下面程式碼只有一條進度條，請修正成有清楚任務說明的寫法。

```html
<progress value="50" max="100"></progress>
```

完成標準：

- 保留目前進度 `50 / 100`。
- 補上說明這是「資料處理進度」的文字或標籤。

<details>
<summary>參考解答</summary>

```html
<label for="process-progress">資料處理進度</label>
<progress id="process-progress" value="50" max="100"></progress>
```

解題說明：`<progress>` 不是純裝飾線條。正式介面中應搭配文字、`label` 或附近說明文字，讓使用者知道它代表哪一項任務。
</details>
