# 第三十七章：表單進階驗證 Demo

本目錄提供一個可直接用瀏覽器開啟的範例頁：

- [html-form-advanced-validation-demo.html](./html-form-advanced-validation-demo.html)：展示 `required`、`type="email"`、`type="tel"`、`pattern`、`minlength`、`maxlength`、`min`、`max`、`step`、`select required`、`radio required`、`checkbox required`、`accept`、`multiple`、`readonly`、`disabled`、`novalidate`、`formnovalidate` 與 Constraint Validation API。

## 使用方式

1. 用瀏覽器開啟 `html-form-advanced-validation-demo.html`。
2. 點選或修改任一欄位，右側會即時顯示該欄位的 `ValidityState` 與 `validationMessage`。
3. 按 `checkValidity()` 檢查整張表單是否有效。
4. 按 `reportValidity()` 觸發瀏覽器原生驗證提示。
5. 切換 `novalidate`，再按正式送出，觀察原生驗證是否被跳過。
6. 按「儲存草稿，formnovalidate」，觀察單一 submit 按鈕跳過驗證的效果。

## 觀察重點

- `placeholder` 不能取代 `<label>`。
- `type="number"` 不適合手機號碼、OTP、郵遞區號這類文字型數字。
- `accept` 只提示檔案選擇器，不是安全驗證。
- `readonly` 欄位會送出；`disabled` 欄位不會送出。
- 前端驗證只能改善使用者體驗，後端仍必須重新驗證所有重要資料。
