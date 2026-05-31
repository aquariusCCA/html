# input 提交、重置與普通按鈕

> 來源：origin/測試/03-表單控件.md / ### 提交與重置、### 普通按鈕

## 提交按鈕

```html
<input type="submit" value="點我提交表單">
```

注意點：

- 點擊提交按鈕，可以把表單域 `<form>` 裡面的表單元素值提交給後台服務器。
- `type="submit"` 的按鈕會把表單數據發送到服務器。
- input 標籤編寫的按鈕，使用 `value` 屬性指定按鈕文字。

## 重置按鈕

```html
<input type="reset" value="點我重置">
```

注意點：

- 重置按鈕可以還原表單元素初始的默認狀態。
- `type="reset"` 的按鈕會將表單控件還原為初始默認狀態，不一定是清空。
- input 標籤編寫的按鈕，使用 `value` 屬性指定按鈕文字。

## 普通按鈕

> 普通按鈕的 type 值為 button。

```html
<input type="button" value="普通按鈕">
```

普通按鈕後期通常結合 JavaScript 搭配使用。
