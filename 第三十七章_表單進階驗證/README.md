# 第三十七章｜表單進階驗證

> 章節定位：補齊 HTML 表單欄位驗證、輸入限制、瀏覽器提示行為，以及可運行範例  
> 建議閱讀方式：先理解瀏覽器內建驗證能做什麼，再分清它不能取代後端驗證，最後透過 Demo 實際測試各種驗證狀態

---

## 本章在學什麼

這一章延續第二十四章表單內容，進一步補上更完整的表單驗證與欄位限制。

核心重點包括：

- `required` 如何處理必填欄位。
- `type="email"`、`type="url"`、`type="number"` 等輸入型別如何帶來內建驗證。
- `minlength` / `maxlength` 如何限制文字長度。
- `min` / `max` / `step` 如何限制數值、日期或範圍。
- `pattern` 如何用正則表達式描述輸入格式。
- `select`、`radio`、`checkbox` 搭配 `required` 時的注意事項。
- `readonly`、`disabled`、`placeholder`、`autocomplete` 的差異。
- `accept`、`multiple` 在檔案輸入中的作用與限制。
- `novalidate` 和 `formnovalidate` 如何關閉 HTML 內建驗證。
- Constraint Validation API 如何透過 JavaScript 檢查與自訂驗證訊息。
- 為什麼前端驗證不能取代後端驗證。

---

## 本章與整體地圖的關係

- 前置知識：第二十四章已學過表單域、表單控制項、`label`、`fieldset` 與基本表單屬性。
- 本章核心任務：讓表單從「可以輸入」進一步變成「能描述輸入規則」。
- 後續銜接：
  - JavaScript 表單處理
  - 表單送出與資料收集
  - 使用者體驗 UX
  - 可存取性 Accessibility
  - 前後端資料驗證分工

---

## 建議閱讀順序

1. [表單進階驗證｜9.5 分版本](./第37章_表單進階驗證_9.5分版本.md)
2. [可運行範例：HTML 表單進階驗證 Demo](./html-form-advanced-validation-demo.html)
3. 回頭整理自己的理解：哪些規則是 HTML 內建驗證，哪些必須靠 JavaScript 或後端處理。

---

## 本章所有檔案

| 檔案 | 用途 |
|---|---|
| [README.md](./README.md) | 本章導覽與回查入口 |
| [第37章_表單進階驗證_9.5分版本.md](./第37章_表單進階驗證_9.5分版本.md) | 本章主筆記，整理 HTML 表單進階驗證觀念 |
| [html-form-advanced-validation-demo.html](./html-form-advanced-validation-demo.html) | 可直接用瀏覽器開啟的表單驗證範例 |

---

## 適合快速回查的主題

- `required` 怎麼判斷必填。
- `select required` 為什麼第一個提示選項通常要設 `value=""`。
- 同一組 `radio` 如何設定必選。
- 單一 `checkbox required` 適合用在哪些情境。
- 多個 `checkbox` 想做到「至少選一個」時，為什麼通常需要 JavaScript 或後端驗證。
- `minlength` / `maxlength` 和 `min` / `max` 差在哪。
- `step` 為什麼不只是控制加減幅度，也會影響合法值。
- `pattern` 如何描述格式，以及為什麼整個輸入值都要符合。
- `inputmode` 為什麼只是鍵盤提示，不是驗證規則。
- `readonly` 和 `disabled` 差在哪。
- `placeholder` 為什麼不能取代 `<label>`。
- `autocomplete` 是做什麼的。
- `accept` 為什麼不是安全保證。
- `novalidate` 和 `formnovalidate` 如何關閉驗證。
- `checkValidity()`、`reportValidity()`、`setCustomValidity()` 的用途。
- 前端驗證和後端驗證如何分工。

---

## 高頻回查入口

### 想快速做必填欄位

看：

- [表單進階驗證｜9.5 分版本](./第37章_表單進階驗證_9.5分版本.md)

重點回查：

- `required`
- `select required`
- `radio required`
- `checkbox required`

---

### 想限制 Email、網址或電話格式

看：

- [表單進階驗證｜9.5 分版本](./第37章_表單進階驗證_9.5分版本.md)
- [可運行範例：HTML 表單進階驗證 Demo](./html-form-advanced-validation-demo.html)

重點回查：

- `type="email"`
- `type="url"`
- `type="tel"`
- `pattern`
- `title`
- `inputmode`

---

### 想限制字數、數字範圍或日期範圍

看：

- [表單進階驗證｜9.5 分版本](./第37章_表單進階驗證_9.5分版本.md)

重點回查：

- `minlength`
- `maxlength`
- `min`
- `max`
- `step`

---

### 想知道欄位能不能被送到後端

看：

- [表單進階驗證｜9.5 分版本](./第37章_表單進階驗證_9.5分版本.md)

重點回查：

- `readonly`
- `disabled`
- 表單提交資料
- Constraint Validation

---

### 想練習實際操作

直接開啟：

- [可運行範例：HTML 表單進階驗證 Demo](./html-form-advanced-validation-demo.html)

可以測試：

- Email 輸入錯誤格式。
- 使用者名稱輸入不符合 `pattern` 的字元。
- 數值輸入小於 `min` 或大於 `max`。
- 數值不符合 `step` 間隔。
- 密碼與確認密碼不一致。
- 不選城市、不選程度、不勾選同意條款。
- 使用 `formnovalidate` 跳過內建驗證。
- 使用 `checkValidity()` 只檢查表單是否合法。

---

## 易混淆主題

### 1. 前端驗證 vs 後端驗證

前端驗證主要負責：

- 即時提示
- 改善使用者體驗
- 減少明顯錯誤
- 降低不必要的請求

後端驗證主要負責：

- 保護資料完整性
- 保護系統安全
- 防止惡意請求
- 防止繞過前端限制

結論：

> HTML 表單驗證是使用者體驗輔助，不是安全邊界。  
> 真正重要的資料仍然必須在後端重新驗證。

---

### 2. `minlength` / `maxlength` vs `min` / `max`

| 屬性 | 主要用途 | 常見欄位 |
|---|---|---|
| `minlength` / `maxlength` | 限制文字長度 | `text`、`password`、`textarea` |
| `min` / `max` | 限制數值、日期、時間範圍 | `number`、`range`、`date`、`time` |

簡單記法：

- 文字長度：看 `length`
- 數值大小或日期範圍：看 `min` / `max`

---

### 3. `step` 不是只有控制加減按鈕

`step` 也會影響哪些值被視為合法。

例如：

```html
<input type="number" min="0" step="2">
```

常見合法值可以理解為：

```text
0、2、4、6、8...
```

如果輸入 `3`，雖然它是數字，但可能不符合 `step` 規則。

---

### 4. `pattern` vs JavaScript 自訂驗證

`pattern` 適合處理簡單、穩定、容易描述的格式，例如：

- 邀請碼
- 手機格式
- 簡單帳號規則
- 郵遞區號

如果驗證邏輯需要：

- 比對兩個欄位
- 查詢後端資料
- 根據條件動態改變規則
- 顯示複雜錯誤訊息

通常應改用 JavaScript 或後端驗證。

---

### 5. `readonly` vs `disabled`

| 屬性 | 可聚焦 | 可修改 | 通常會提交 | 常見用途 |
|---|---:|---:|---:|---|
| `readonly` | 是 | 否 | 是 | 顯示固定值，但仍要送出 |
| `disabled` | 否 | 否 | 否 | 暫時停用欄位，不送出 |

簡單記法：

- 還要提交，只是不讓使用者改：用 `readonly`
- 整個控制項失效，而且不想提交：用 `disabled`

---

### 6. `placeholder` vs `<label>`

`placeholder` 是輸入前的提示文字。  
使用者開始輸入後，它通常會消失。

`<label>` 是欄位名稱，應該穩定存在，讓使用者和輔助技術知道欄位的意義。

結論：

> `placeholder` 不能取代 `<label>`。

---

### 7. `accept` 不是安全保證

`accept` 只是提示瀏覽器檔案選擇器可以選哪些檔案類型。

例如：

```html
<input type="file" accept="image/png, image/jpeg">
```

它不能保證使用者一定不會送出其他檔案。  
真正的檔案類型、大小、內容檢查仍然要由後端處理。

---

## 本章練習建議

### 練習 1：基本必填表單

建立一個註冊表單，包含：

- Email
- 使用者名稱
- 密碼
- 確認密碼
- 城市
- 同意條款

要求：

- Email 必填且格式正確。
- 使用者名稱限制 3 到 16 字。
- 密碼至少 8 字。
- 城市必選。
- 同意條款必須勾選。

---

### 練習 2：數值與日期驗證

建立一個預約表單，包含：

- 預約日期
- 預約人數
- 預算金額

要求：

- 日期限制在指定範圍內。
- 人數最少 1 人，最多 10 人。
- 預算金額以 1000 為間隔。

---

### 練習 3：使用 JavaScript 自訂驗證

在註冊表單中加入：

- 密碼與確認密碼必須一致。
- 至少選擇一個技能興趣。
- 送出前用 `checkValidity()` 檢查。
- 錯誤時用 `reportValidity()` 顯示提示。
- 自訂錯誤用 `setCustomValidity()`。

---

## 自測問題

1. `required` 的作用是什麼？
2. `select required` 的第一個提示選項為什麼通常要設成 `value=""`？
3. 同一組 `radio` 要怎麼設定必選？
4. 單一 `checkbox required` 和多個 checkbox 至少選一個有什麼不同？
5. `minlength` / `maxlength` 和 `min` / `max` 分別適合什麼？
6. `step` 為什麼會影響合法值？
7. `pattern` 適合處理什麼類型的驗證？
8. `inputmode` 為什麼不是驗證規則？
9. `readonly` 和 `disabled` 最大差別是什麼？
10. 為什麼 `placeholder` 不能取代 `<label>`？
11. `accept` 為什麼不能當成安全檢查？
12. `novalidate` 和 `formnovalidate` 差在哪？
13. `checkValidity()` 和 `reportValidity()` 差在哪？
14. `setCustomValidity()` 可以解決哪類 HTML 原生驗證做不到的問題？
15. 為什麼後端仍然必須驗證？

---

## 延伸閱讀

- [表單進階驗證｜9.5 分版本](./第37章_表單進階驗證_9.5分版本.md)
- [可運行範例：HTML 表單進階驗證 Demo](./html-form-advanced-validation-demo.html)
- [第二十四章｜表單標籤](../第二十四章_表單標籤/README.md)
- [MDN：Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [MDN：pattern attribute](https://developer.mozilla.org/docs/Web/HTML/Reference/Attributes/pattern)
- [MDN：autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
- [MDN：Constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation)

---

## 導航

- [返回首頁](../README.md)
