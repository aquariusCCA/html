---
source_notes:
  - notes/050-全局屬性/01-id-class-style-元素識別分類與樣式.md
topics: [style, 行內樣式, 可維護性]
summary: "練習 style 行內樣式的正確使用時機，並將大量重複 style 重構為共用 class。"
---

# style 行內樣式練習

> 動手練習。概念與用法說明見 `notes/050-全局屬性/01-id-class-style-元素識別分類與樣式.md`。

---

## 題目 1（基礎）· 應用練習題

你正在快速測試一個按鈕的文字顏色，這個效果只是暫時的測試，整個頁面只有這一個按鈕需要這個顏色，不打算之後重複套用。

請為下方按鈕加上行內樣式，讓文字顏色變成紅色（`color: red`）：

```html
<button ___>送出表單</button>
```

完成標準：`style` 屬性格式正確，包含有效的 CSS 宣告 `color: red;`。

<details>
<summary>參考解答</summary>

```html
<button style="color: red;">送出表單</button>
```

解題說明：

- `style` 屬性讓你直接在元素上寫 CSS，適合**快速測試**、**少量一次性**的樣式。
- 屬性值是 CSS 宣告，格式為 `屬性名: 值;`，例如 `color: red;`。
- 因為只是測試、只有一個按鈕需要，使用行內 `style` 是合理的。若整個網站要讓所有按鈕都是紅色，就應該改用 `class` 搭配 CSS 規則，避免樣式分散在 HTML 裡。

</details>

---

## 題目 2（基礎）· 重構題

下面這段 HTML 中，三個 `<p>` 都套用了完全相同的行內樣式。這種寫法讓樣式分散在 HTML 各處，日後若要修改顏色或字型，需要逐一更改每個元素，維護困難。

```html
<p style="color: red; font-size: 18px;">系統通知一</p>
<p style="color: red; font-size: 18px;">系統通知二</p>
<p style="color: red; font-size: 18px;">系統通知三</p>
```

請將這三個段落的 `style` 屬性移除，改為使用共用的 `class` 屬性（class 名稱自訂，例如 `notice`）。不需要撰寫 CSS，只需修改 HTML 的屬性部分。

完成標準：三個 `style` 屬性全部移除，替換為相同的 `class` 名稱。

<details>
<summary>參考解答</summary>

```html
<p class="notice">系統通知一</p>
<p class="notice">系統通知二</p>
<p class="notice">系統通知三</p>
```

解題說明：

- 多個元素需要共用同一套樣式時，應用 `class` 標記它們，再在 CSS 中統一設定。這樣改樣式時只要改一個地方，不需要逐一修改每個元素。
- 重構後的 HTML 更簡潔，也更容易維護。實際專案中，還需要在 CSS 中補上 `.notice { color: red; font-size: 18px; }` 才會有視覺效果，但 HTML 結構調整本身就是重構的第一步。
- `class` 名稱可以自訂，只要語意清楚、一致即可。

</details>
