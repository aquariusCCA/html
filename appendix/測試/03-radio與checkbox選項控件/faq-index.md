# FAQ Index

## 用途

用常見問題快速找到本篇選項控件筆記中能回答的段落。

## 常見問題索引

| 問題 | 簡短回答 | 對應段落 |
| --- | --- | --- |
| `radio` 和 `checkbox` 差在哪？ | `radio` 用於多選一，`checkbox` 用於可複選。 | [一句話理解](../../../notes/測試/03-radio與checkbox選項控件.md#一句話理解) |
| 什麼時候適合用 `radio`？ | 使用者只能從一組固定選項中選一個時適合用 `radio`。 | [radio 與 checkbox 的判斷](../../../notes/測試/03-radio與checkbox選項控件.md#radio-與-checkbox-的判斷) |
| 什麼時候適合用 `checkbox`？ | 使用者可以選零個、一個或多個選項時適合用 `checkbox`。 | [radio 與 checkbox 的判斷](../../../notes/測試/03-radio與checkbox選項控件.md#radio-與-checkbox-的判斷) |
| 同一組 `radio` 為什麼要用相同 `name`？ | 相同 `name` 才會形成多選一的互斥群組。 | [radio 單選框](../../../notes/測試/03-radio與checkbox選項控件.md#radio-單選框) |
| 同一組 `radio` 使用不同 `name` 會怎樣？ | 它們不會互斥，使用者可能同時選到多個。 | [常見錯誤：同一組 radio 使用不同 name](../../../notes/測試/03-radio與checkbox選項控件.md#常見錯誤同一組-radio-使用不同-name) |
| `value` 在選項控件中做什麼？ | `value` 是該選項真正提交出去的資料值。 | [radio 單選框](../../../notes/測試/03-radio與checkbox選項控件.md#radio-單選框) |
| `checked` 屬性做什麼？ | `checked` 可以設定預設選取或預設勾選的選項。 | [radio 單選框](../../../notes/測試/03-radio與checkbox選項控件.md#radio-單選框) |
| `value` 一定要等於畫面文字嗎？ | 不一定，筆記提醒 `value` 是提交出去的資料，不一定等於畫面文字。 | [重點整理](../../../notes/測試/03-radio與checkbox選項控件.md#重點整理) |
| 選項很多且想節省空間時怎麼辦？ | 筆記建議這種情況可以優先考慮 `select`。 | [radio 與 checkbox 的判斷](../../../notes/測試/03-radio與checkbox選項控件.md#radio-與-checkbox-的判斷) |
| 可以設定預設選取嗎？ | 可以，用 `checked`，但不要讓預設值誤導使用者。 | [重點整理](../../../notes/測試/03-radio與checkbox選項控件.md#重點整理) |
