---
source_notes:
  - notes/290-進度條標籤/01-progress-進度條標籤.md
topics: [progress 標籤, 任務進度, value 與 max]
summary: "練習修正 progress 常見錯誤，包含 value 大於 max、用 progress 表示一般數值或裝飾線條。"
---

# progress 常見錯誤與語意判斷練習

> 動手練習。概念與用法說明見 notes/290-進度條標籤/01-progress-進度條標籤.md。

## 題目 1（基礎）· 改錯題

下面進度條的目前值大於目標值。請修正成合理的進度狀態。

```html
<progress value="120" max="100"></progress>
```

完成標準：

- `value` 不應大於 `max`。
- 保留 `max="100"`。
- 修正成已完成 `100 / 100` 的狀態。

<details>
<summary>參考解答</summary>

```html
<progress value="100" max="100"></progress>
```

解題說明：`value` 代表目前進度，`max` 代表完成目標。當目前值大於目標值時，語意會變得不合理，也會讓後續維護者難以判斷真實狀態。
</details>

## 題目 2（進階）· 情境判斷實作題

下面需求是顯示商品評分 `4.5 / 5`。請判斷是否適合使用 `<progress>`，並改成不使用 progress 的文字呈現。

完成標準：

- 不使用 `<progress>`。
- 保留評分文字。
- 說明這不是任務完成進度。

<details>
<summary>參考解答</summary>

```html
商品評分：4.5 / 5
```

解題說明：`<progress>` 適合表示任務進度，不適合用來表示評分、溫度、庫存量這類一般數值。不要只因為畫面可能長得像長條，就使用 `<progress>`。
</details>

## 題目 3（進階）· 改錯題

下面程式碼只是想做一條視覺上的分隔線，卻使用了 `<progress>`。請改成不使用 progress 的寫法。

```html
<progress value="100" max="100"></progress>
```

完成標準：

- 不使用 `<progress>` 表示純裝飾線條。
- 說明 `<progress>` 應該留給任務完成進度。

<details>
<summary>參考解答</summary>

```html
這裡需要的是視覺分隔線，不是任務進度，因此不應使用 <progress>。
```

解題說明：如果只是要做一條視覺上的分隔線、裝飾線、評分條或普通數值條，就不應該只因為外觀看起來像進度條而使用 `<progress>`。
</details>
