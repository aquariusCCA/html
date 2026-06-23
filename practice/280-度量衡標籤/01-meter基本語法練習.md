---
source_notes:
  - notes/280-度量衡標籤/01-meter-度量衡標籤.md
topics: [meter 標籤, 度量衡標籤, meter 屬性]
summary: "練習 meter 的基本語法，包含 value、min、max 與缺少清楚範圍的改錯。"
---

# meter 基本語法練習

> 動手練習。概念與用法說明見 notes/280-度量衡標籤/01-meter-度量衡標籤.md。

## 題目 1（基礎）· 應用練習題

請建立一個手機電量量表，表示目前電量是 `50`，範圍是 `0` 到 `100`。

完成標準：

- 使用 `<meter>`。
- `value` 設為 `50`。
- `min` 設為 `0`。
- `max` 設為 `100`。
- 量表內提供 `50%` 作為文字內容。

<details>
<summary>參考解答</summary>

```html
<meter value="50" min="0" max="100">50%</meter>
```

解題說明：`<meter>` 表示已知範圍內的測量值。`value` 是目前值，`min` 和 `max` 定義度量範圍。
</details>

## 題目 2（基礎）· 應用練習題

請建立一個評分量表，表示目前分數是 `4.5`，滿分是 `5`。

完成標準：

- 使用 `<meter>` 表示已知範圍內的評分。
- `value` 設為 `4.5`。
- `min` 設為 `0`。
- `max` 設為 `5`。

<details>
<summary>參考解答</summary>

```html
<meter value="4.5" min="0" max="5">4.5 / 5</meter>
```

解題說明：評分數值有明確範圍，例如 0 到 5，且目前值可以放在這個範圍中被理解，因此適合用 `<meter>`。
</details>

## 題目 3（進階）· 改錯題

下面程式碼想表示 `50 / 100`，但沒有清楚寫出範圍。請修正。

```html
<meter value="50"></meter>
```

完成標準：

- 補上 `min="0"`。
- 補上 `max="100"`。
- 保留目前值 `50`。

<details>
<summary>參考解答</summary>

```html
<meter value="50" min="0" max="100">50%</meter>
```

解題說明：`<meter>` 沒有指定 `min` 和 `max` 時，預設範圍是 `0` 到 `1`。如果要表示 0 到 100 之間的 50，應該把範圍一起寫清楚。
</details>
