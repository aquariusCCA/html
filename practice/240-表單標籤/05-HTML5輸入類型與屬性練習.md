---
source_notes:
  - notes/240-表單標籤/05-HTML5輸入類型與表單屬性.md
topics: [HTML5 input 類型, 原生驗證, 表單屬性, placeholder]
summary: "練習依資料格式選擇 HTML5 input 類型，並使用 required、placeholder、autofocus 與 autocomplete。"
---

# HTML5 輸入類型與屬性練習

> 動手練習。概念與用法說明見 notes/240-表單標籤/05-HTML5輸入類型與表單屬性.md。

## 題目 1（基礎）· 應用練習題

請建立一個個人資料表單，包含電子郵件、網址、生日與數量欄位。

完成標準：

- 電子郵件使用 `type="email"` 並設為必填。
- 網址使用 `type="url"`。
- 生日使用 `type="date"`。
- 數量使用 `type="number"`。

<details>
<summary>參考解答</summary>

```html
<form action="/profile" method="post">
  <label>郵箱:
    <input type="email" name="email" required>
  </label>

  <label>網址:
    <input type="url" name="website">
  </label>

  <label>生日:
    <input type="date" name="birthday">
  </label>

  <label>數量:
    <input type="number" name="count">
  </label>

  <input type="submit" value="提交">
</form>
```

解題說明：HTML5 input 類型讓瀏覽器知道欄位資料應該長什麼樣子。`required` 讓欄位成為必填。
</details>

## 題目 2（基礎）· 應用練習題

請建立一個搜尋表單，欄位名稱為 `keyword`，必填，提示文字為 `請輸入關鍵字`，頁面載入後自動聚焦，並關閉自動完成。

<details>
<summary>參考解答</summary>

```html
<form action="/search">
  <input
    type="search"
    name="keyword"
    required
    placeholder="請輸入關鍵字"
    autofocus
    autocomplete="off"
  >
  <input type="submit" value="搜尋">
</form>
```

解題說明：`type="search"` 表示搜尋文字；`required` 表示必填；`placeholder` 提供提示；`autofocus` 自動聚焦；`autocomplete="off"` 關閉自動完成建議。
</details>

## 題目 3（基礎）· 應用練習題

請建立一個偏好設定片段，包含電話欄位與顏色選擇欄位。

<details>
<summary>參考解答</summary>

```html
<label for="phone">電話</label>
<input id="phone" type="tel" name="phone">

<label for="theme-color">主題顏色</label>
<input id="theme-color" type="color" name="theme_color">
```

解題說明：`tel` 主要表示電話輸入欄位，行動裝置可能顯示較適合輸入電話的鍵盤；`color` 可建立顏色選擇控件。
</details>

## 題目 4（進階）· 改錯題

下面欄位只用 placeholder 當欄位名稱。請改成有 label，且 placeholder 只作為範例提示。

```html
<input type="email" name="email" placeholder="電子郵件">
```

<details>
<summary>參考解答</summary>

```html
<label for="email">電子郵件</label>
<input id="email" type="email" name="email" placeholder="name@example.com">
```

解題說明：placeholder 在使用者開始輸入後會消失，不能取代欄位名稱。較好的做法是使用 label，placeholder 只放範例或補充提示。
</details>
