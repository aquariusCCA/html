---
source_notes:
  - notes/280-度量衡標籤/01-meter-度量衡標籤.md
topics: [meter 標籤, meter 屬性, 測量值語意]
summary: "練習使用 low、high、optimum 補充 meter 測量值的偏低、偏高與最佳值語意。"
---

# low、high、optimum 練習

> 動手練習。概念與用法說明見 notes/280-度量衡標籤/01-meter-度量衡標籤.md。

## 題目 1（基礎）· 應用練習題

請建立一個手機電量量表，表示目前電量 `50 / 100`，並設定 20 以下偏低、80 以上偏高。

完成標準：

- 使用 `<span>` 顯示「手機電量：」。
- 使用 `<meter>` 表示電量。
- `value="50"`、`min="0"`、`max="100"`。
- `low="20"`、`high="80"`。

<details>
<summary>參考解答</summary>

```html
<span>手機電量：</span>
<meter value="50" min="0" max="100" low="20" high="80">50%</meter>
```

解題說明：`low` 和 `high` 用來補充度量值的狀態語意，表示哪些範圍可被視為偏低或偏高。
</details>

## 題目 2（基礎）· 應用練習題

請在上一題的電量量表中加入最佳值，表示接近 `90` 是比較理想的狀態。

完成標準：

- 保留 `value="70"`、`min="0"`、`max="100"`。
- 保留 `low="20"`、`high="80"`。
- 加上 `optimum="90"`。

<details>
<summary>參考解答</summary>

```html
<span>手機電量：</span>
<meter value="70" min="0" max="100" low="20" high="80" optimum="90">70%</meter>
```

解題說明：`optimum` 表示在這個情境中最理想或最佳的值。手機電量接近 90 通常可被視為較理想的狀態。
</details>

## 題目 3（進階）· 情境實作題

請建立一個磁碟用量量表，表示已使用 `80GB / 100GB`，並設定用量接近 `10` 比較理想。

完成標準：

- 使用 `<span>` 說明這是磁碟用量。
- 使用 `<meter>`。
- `value="80"`、`min="0"`、`max="100"`。
- 加上 `optimum="10"`。

<details>
<summary>參考解答</summary>

```html
<span>磁碟用量：</span>
<meter value="80" min="0" max="100" optimum="10">80GB / 100GB</meter>
```

解題說明：`optimum` 的意義會依情境改變。手機電量接近 90 通常是好事，但磁碟用量接近 90 可能代表空間快滿了，所以磁碟用量情境可能是越低越理想。
</details>
