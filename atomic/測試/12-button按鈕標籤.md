# button 按鈕標籤

> 來源：
> - origin/測試/07-button 按鈕標籤.md / # button 按鈕標籤
> - origin/測試/03-表單控件.md / ### 提交與重置、### 普通按鈕

button 標籤常見類型：

- `submit`：提交按鈕。
- `reset`：重置按鈕。
- `button`：普通按鈕。

```html
<button type="submit">提交按钮</button>
<button type="reset">重置按钮</button>
<button type="button">普通按钮</button>
<button>未指定 type 的按钮</button>
```

注意點：

- button 標籤 `type` 屬性的默認值是 `submit`。
- 若要建立普通按鈕，應明確寫成 `type="button"`，否則可能引起表單提交。
- input 標籤編寫的按鈕，使用 `value` 屬性指定按鈕文字。

```html
<button>點我提交表單</button>
<button type="reset">點我重置</button>
<button type="button">普通按鈕</button>
```
