---
source_notes:
  - notes/280-度量衡標籤/01-meter-度量衡標籤.md
topics: [meter 標籤, progress 差異, 測量值語意]
summary: "練習判斷 meter 與 progress 的使用情境，並修正用 meter 表示任務進度的錯誤。"
---

# meter 與 progress 判斷練習

> 動手練習。概念與用法說明見 notes/280-度量衡標籤/01-meter-度量衡標籤.md。

## 題目 1（基礎）· 情境判斷實作題

請為「手機電量目前 40%，總範圍是 0 到 100」選擇合適標籤並寫出 HTML。

完成標準：

- 使用 `<meter>`。
- `value="40"`、`min="0"`、`max="100"`。
- 量表內容顯示 `40%`。

<details>
<summary>參考解答</summary>

```html
<meter value="40" min="0" max="100">40%</meter>
```

解題說明：手機電量是在描述已知範圍內某個值的狀態，因此應使用 `<meter>`。
</details>

## 題目 2（基礎）· 情境判斷實作題

請為「檔案下載完成 40%」選擇合適標籤並寫出 HTML。

完成標準：

- 使用 `<progress>`。
- 不使用 `<meter>`。
- 表示目前進度是 `40 / 100`。

<details>
<summary>參考解答</summary>

```html
<progress value="40" max="100">40%</progress>
```

解題說明：檔案下載是任務完成進度，不是度量衡數值。任務進度應該使用 `<progress>`。
</details>

## 題目 3（進階）· 改錯題

下面程式碼想表示檔案下載完成 60%，但使用了不合適的標籤。請修正。

```html
<meter value="60" min="0" max="100">60%</meter>
```

完成標準：

- 改用 `<progress>`。
- 保留目前值 `60`。
- 保留最大值 `100`。

<details>
<summary>參考解答</summary>

```html
<progress value="60" max="100">60%</progress>
```

解題說明：`<meter>` 不應該用來表示任務進度。下載進度是任務進行狀態，應使用 `<progress>`。
</details>
