---
source_notes:
  - notes/020-HTML簡介/HTML文件宣告版本比較補充.md
topics: [文件類型宣告, HTML版本差異, HTML4與XHTML, 舊專案維護]
summary: "HTML5、HTML4 與 XHTML 文件宣告差異與實務判斷速查。"
---

# HTML 文件宣告版本比較

> 查表用。概念與用法說明見 notes/020-HTML簡介/HTML文件宣告版本比較補充.md。

## 宣告範例

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

## 版本宣告對照

| 版本 | 宣告特徵 | 額外要求 / 特徵 | 實務判斷 |
| --- | --- | --- | --- |
| HTML5 | `<!DOCTYPE html>` | 不需要記住 DTD 網址，也不需要額外命名空間屬性 | 新專案一律使用 |
| HTML4 | `<!DOCTYPE HTML PUBLIC ...>` 且包含 DTD 名稱與網址 | 宣告本身較長、較難記 | 舊專案中看到時，代表文件依照較舊標準撰寫 |
| XHTML | `<!DOCTYPE html PUBLIC ...>` 且包含 XHTML DTD 網址 | `<html>` 上會出現 `xmlns`、`xml:lang` 等屬性；語法規則更嚴格 | 舊專案中看到時，不必急著升級，但要注意寫法習慣可能不同 |

## 差異速查

| 差異點 | HTML5 | HTML4 | XHTML |
| --- | --- | --- | --- |
| 文件宣告長度 | 簡短 | 較長 | 較長 |
| 是否需要 DTD 網址 | 不需要 | 需要 | 需要 |
| `<html>` 額外屬性 | 範例使用 `lang="en"` | 範例未列額外屬性 | 範例含 `xmlns` 與 `xml:lang` |
| 現代教學與新專案 | 採用 | 不建議新專案使用 | 不建議新專案使用 |

## 實務判斷

| 情境 | 建議 |
| --- | --- |
| 新建 HTML 檔案 | 第一行寫 `<!DOCTYPE html>` |
| 新專案 | 使用 HTML5 宣告，不需要也不建議使用 HTML4 或 XHTML 宣告 |
| 維護舊專案時看到 HTML4 或 XHTML 宣告 | 先不用急著升級，但要知道這代表文件依照較舊標準撰寫 |
| 宣告與內文寫法不一致 | 容易讓程式碼風格混亂、難以維護 |
| 從舊範例複製宣告 | 避免把 `<!DOCTYPE HTML PUBLIC ...>` 複製到新檔案 |

