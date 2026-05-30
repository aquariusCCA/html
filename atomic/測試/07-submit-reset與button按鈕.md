# submit、reset 與 button 按鈕

> 來源：
> - origin/測試/03-表單控件.md / 提交與重置、普通按鈕
> - origin/測試/07-button 按鈕標籤.md / 全文

## 提交按鈕

```html
<input type="submit" value="點我提交表單">
<button type="submit">點我提交表單</button>
```

- 點擊提交按鈕，可以把表單域 `<form>` 裡面的表單元素值提交給後台服務器。
- `type="submit"` 表示提交按鈕會把表單數據發送到服務器。
- `input` 標籤編寫的按鈕，使用 `value` 屬性指定按鈕文字。

## 重置按鈕

```html
<input type="reset" value="點我重置">
<button type="reset">點我重置</button>
```

- 重置按鈕可以還原表單元素初始的默認狀態。
- `type="reset"` 表示重置按鈕會清除表單中的所有數據。
- `input` 標籤編寫的按鈕，使用 `value` 屬性指定按鈕文字。

## 普通按鈕

> 注意點：普通按鈕的 `type` 值為 `button`，若 `<button>` 不寫 `type` 值，在表單中預設會是 `submit`，可能會引起表單提交。

```html
<input type="button" value="普通按鈕">
<button type="button">普通按鈕</button>
```

`button` 標籤的 `type` 屬性可以明確指定按鈕類型：

```html
<button type="submit">提交按鈕</button>
<button type="reset">重置按鈕</button>
<button type="button">普通按鈕</button>
<button>未指定 type 時，在表單中預設為提交按鈕</button>
```
