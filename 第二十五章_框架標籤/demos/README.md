# 第二十五章｜框架標籤示例

這個資料夾收錄第二十五章筆記對應的可執行示例頁。  
這章的重點是理解 `iframe` 如何在目前頁面中載入另一份內容，並掌握 `src`、`title`、`name` 與 `target` 的分工。

## 這個資料夾怎麼用

- 想先理解概念時：先讀第二十五章 Markdown 筆記。
- 想直接操作 `target` / `name` 的對應時：打開這裡的示例頁。
- 想新增更多案例時：沿用 `主題名-demo.html` 的命名規則。

## 目前示例

- [frame-tags-demo.html](./frame-tags-demo.html)：整合展示 `iframe` 的基本嵌入、PDF 預覽、超連結 `target` 載入指定框架、表單 `target` 顯示回應、外部網站嵌入限制、`frameborder` 與 CSS `border` 的取捨。

## 附屬檔案

- [frame-tags-demo-assets/intro.html](./frame-tags-demo-assets/intro.html)：iframe 初始內容。
- [frame-tags-demo-assets/profile.html](./frame-tags-demo-assets/profile.html)：超連結載入的本地 HTML。
- [frame-tags-demo-assets/checklist.html](./frame-tags-demo-assets/checklist.html)：iframe 查錯清單。
- [frame-tags-demo-assets/form-result.html](./frame-tags-demo-assets/form-result.html)：表單送出後顯示在 iframe 中的回應頁。

## 命名規則

- 單一主題單一示例：`主題名-demo.html`
- 同一主題多個示例：`主題名-demo-01.html`、`主題名-demo-02.html`
- 若示例需要額外資產，可在 `demos/` 下再建立同名子資料夾集中管理

## 返回

- [返回第二十五章｜框架標籤](../README.md)
- [返回首頁](../../README.md)
