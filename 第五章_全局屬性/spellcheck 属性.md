# spellcheck 屬性

> 所屬章節：第五章｜全局屬性  
> 關鍵字：`spellcheck`、拼寫檢查、語法檢查、瀏覽器檢查、`input`、`textarea`、`contenteditable`  
> 建議回查情境：想確認 `spellcheck` 是做什麼的、想知道哪些元素可以做拼寫檢查、想分清 `spellcheck="true"` 和 `spellcheck="false"` 的用途

## 本節導讀

這篇整理 HTML 全局屬性 `spellcheck` 的基本用途。  
它的核心問題很單純：要不要讓瀏覽器對這個元素中的文字做拼寫或語法檢查。

不過要先抓住一個前提。  
`spellcheck` 只是在告訴瀏覽器「允許或不要進行檢查」，真正怎麼檢查、檢查得多完整，仍由瀏覽器決定。

## 30 秒複習入口

- `spellcheck` 用來指定是否對元素中的文字做拼寫或語法檢查。
- 常見可檢查對象包括文字型 `input`、`textarea`、以及可編輯元素。
- 檢查效果由瀏覽器決定，不是 HTML 自己保證完全一致。

## 速查區

### 核心概念

- `spellcheck` 是 HTML 全局屬性。
- 它處理的是「要不要啟用瀏覽器的文字檢查」。

### 關鍵規則 / 判準

- `spellcheck="true"` 表示啟用拼寫檢查。
- `spellcheck="false"` 表示不要進行拼寫檢查。
- 實際檢查方式與表現由瀏覽器決定。

### 常見可用對象

- 文字型 `input` 的輸入值，通常不包含密碼欄位。
- `<textarea>` 內的文字。
- `contenteditable` 元素中的可編輯文字。

### 常見混淆點

- `spellcheck` 不是表單驗證；它不負責檢查資料是否符合商業規則。
- `spellcheck` 不是翻譯功能；它處理的是拼寫或語法提示。
- 就算你設定了 `spellcheck`，不同瀏覽器的提示方式也可能不同。

### 一句話對比

- `spellcheck` 決定「要不要檢查文字拼寫」，`required` 這類屬性才是在管「表單能不能送出」。

## 正文筆記

### 這篇在解決什麼問題？

- 當使用者在頁面上輸入文字時，有時希望瀏覽器幫忙提示可能的拼寫問題。
- `spellcheck` 就是在決定某個可輸入或可編輯區域要不要啟用這類檢查。

## 1. `spellcheck` 是什麼

> `spellcheck` 屬性用來規定是否對元素進行拼寫和語法檢查。

- 可以把它理解成「讓不讓瀏覽器幫忙檢查這段輸入文字」。
- 但要注意，這只是交給瀏覽器的提示，不代表所有瀏覽器都會用同樣方式呈現。

## 2. 哪些內容通常可以做拼寫檢查

- 原始教材列出三類常見對象：
- `input` 元素中的文字值，但通常不包含密碼欄位。
- `<textarea>` 元素中的文字。
- 可編輯元素中的文字，也就是像 `contenteditable="true"` 這類區塊。

## 3. 基本示例

```html
<body>
  <form>
    <label for="username">使用者名稱:</label>
    <input type="text" id="username" name="username" spellcheck="true">

    <label for="message">留言:</label>
    <textarea id="message" name="message" spellcheck="false"></textarea>

    <div contenteditable="true" spellcheck="true">
      這是一個支援拼寫檢查的可編輯內容。
    </div>

    <input type="submit" value="提交">
  </form>
</body>
```

- 可直接打開示例頁：[spellcheck-demo.html](./demos/spellcheck-demo.html)

### 這段怎麼理解？

- 第一個文字輸入框把 `spellcheck` 設成 `true`，表示允許瀏覽器做拼寫檢查。
- `textarea` 設成 `false`，表示不要對這個欄位做拼寫檢查。
- `contenteditable` 區塊同樣可以搭配 `spellcheck="true"`，讓可編輯內容接受瀏覽器的文字檢查。

## 4. 什麼時候會用到

- 當欄位主要是自然語言輸入，例如留言、說明、文章內容時，常會考慮開啟 `spellcheck`。
- 當欄位輸入的是帳號、代碼片段、識別碼或其他不希望被語言工具干擾的內容時，常會考慮關閉它。
- 實務判斷重點不是「永遠開」或「永遠關」，而是看這個欄位的內容類型適不適合接受拼寫提示。

## 5. 和其他屬性怎麼分

- `spellcheck` 關心的是文字檢查提示。
- `contenteditable` 關心的是元素能不能直接編輯。
- `required`、`pattern` 這類屬性關心的是表單驗證規則。
- 所以它們可能一起出現，但負責的問題不一樣。

## 自測問題

1. `spellcheck` 屬性的主要作用是什麼？
2. 哪幾類元素中的文字通常可以進行拼寫檢查？
3. 為什麼說 `spellcheck` 的檢查方式是由瀏覽器決定，而不是完全由 HTML 保證一致？

## 延伸閱讀

- [spellcheck-demo.html](./demos/spellcheck-demo.html)
- [第五章示例索引](./demos/README.md)
- [contenteditable 屬性](./contenteditable%20属性.md)
- [第五章｜全局屬性](./README.md)
- [返回首頁](../README.md)
