# 04 Registration Form

## 練習目標

建立一個純 HTML 報名表單頁，練習表單結構、欄位標籤、輸入型別、下拉選單、文字區域與按鈕。

## 可使用標籤

- `html`、`head`、`meta`、`title`、`body`
- `header`、`main`、`section`、`footer`
- `h1`、`h2`、`p`
- `form`、`fieldset`、`legend`
- `label`、`input`、`select`、`option`、`textarea`、`button`

## 禁止事項

- 不使用 CSS
- 不使用 JavaScript
- 不省略重要欄位的 `label`
- 不用 `div` 取代原生表單元素

## 任務需求

請在 `starter/index.html` 完成一個活動報名表單，至少包含：

1. 活動名稱與說明。
2. 報名者姓名。
3. Email。
4. 電話。
5. 參加場次下拉選單。
6. 至少一組單選或複選欄位。
7. 備註文字區域。
8. 送出與重設按鈕。

## 自我檢查

- [ ] 每個主要欄位都有 `label`。
- [ ] `label for` 對應到欄位的 `id`。
- [ ] 需要送出的欄位有合適的 `name`。
- [ ] Email 使用 `type="email"`。
- [ ] 電話使用 `type="tel"`。
- [ ] 表單分組使用 `fieldset` 和 `legend`。
- [ ] 沒有使用 CSS 或 JavaScript。

## 加分挑戰

- 使用 `required` 標記必要欄位。
- 使用 `placeholder` 提供輸入提示。
- 使用 `fieldset` 分成「基本資料」與「活動選項」。
