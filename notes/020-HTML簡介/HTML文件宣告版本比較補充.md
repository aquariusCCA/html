<!--
source_atomic:
  - atomic/020-HTML簡介/06-HTML版本宣告範例.md
-->

# 補充：HTML5、HTML4 與 XHTML 的文件宣告比較

## 為什麼會看到不同的文件宣告

如果你之後有機會看到比較舊的網頁原始碼，可能會發現它們開頭的「文件類型宣告」跟現在學的 `<!DOCTYPE html>` 完全不一樣——有些長達一整行，甚至包含網址。

這是因為 HTML 在發展過程中經歷了不同版本與標準：HTML4 時期的宣告需要指明完整的 DTD（文件類型定義）；同時期還有採用更嚴格 XML 語法規則的 XHTML；到了 HTML5，文件宣告被大幅簡化成一行 `<!DOCTYPE html>`。

這篇筆記不是要你「學會寫」HTML4 或 XHTML 的宣告（新專案不會這樣寫），而是讓你之後在閱讀舊專案程式碼時，看到這些宣告能知道「這是什麼」，不會感到陌生或誤以為寫錯了。

## 三種版本的宣告對照

### HTML5 版本

```html
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>

	<body>

	</body>

</html>
```

### HTML4 版本

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
  </head>
  <body>

  </body>
</html>
```

### XHTML 版本

```html
<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh">

  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
  </head>
  <body>

  </body>
</html>
```

## 對照之後看出的差異

把三段程式碼放在一起看，可以發現一個明顯的趨勢：

- **HTML4** 的 `<!DOCTYPE>` 需要寫出完整的 DTD 名稱與網址，宣告本身又長又難記。
- **XHTML** 不只 `<!DOCTYPE>` 複雜，`<html>` 標籤上還多了 `xmlns`（XML 命名空間）等屬性，因為 XHTML 要求頁面符合更嚴格的 XML 語法規則。
- **HTML5** 把這一切簡化成一句 `<!DOCTYPE html>`，不需要記住任何 DTD 網址，也不需要額外的命名空間屬性。

這也是為什麼現在的教學與專案幾乎都直接採用 HTML5：宣告方式更簡單，且後續學到的標籤、屬性也是以 HTML5 標準為主。

## 實務判斷

- **新專案**：一律使用 `<!DOCTYPE html>`（HTML5），不需要、也不建議使用 HTML4 或 XHTML 的宣告方式。
- **舊專案**：如果在維護的程式碼中看到 HTML4 或 XHTML 的宣告，先不用急著「升級」，但要知道這代表這份文件是依照較舊的標準撰寫的，某些寫法（例如標籤大小寫、屬性寫法的嚴格程度）可能與 HTML5 的習慣不同。

## 常見錯誤

- **新專案誤用舊版宣告**：例如從舊範例複製貼上整段 `<!DOCTYPE HTML PUBLIC ...>`，導致瀏覽器以非 HTML5 的方式解析文件，可能影響後續樣式或行為的判斷。**避免方法**：新檔案一律從 `<!DOCTYPE html>` 開始。
- **宣告與標籤寫法不一致**：例如宣告寫的是 HTML5，但內文卻混用 XHTML 的嚴格語法習慣（或反過來），雖然多數情況瀏覽器仍會嘗試正常顯示，但這種不一致會讓程式碼風格混亂、難以維護。

## 自我檢查

1. 如果在舊專案的 HTML 檔案開頭看到一大段 `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" ...>`，這代表這份文件依照的是哪個版本的標準？
2. 你自己新建一個 HTML 檔案時，第一行應該寫什麼？
