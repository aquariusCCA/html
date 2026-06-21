// Source notes: notes/260-字符實體/01-字符實體基本概念.md
// 即時預覽：把使用者輸入的原始碼文字交給瀏覽器解析，觀察字符實體渲染結果。

(function () {
  "use strict";

  var input = document.getElementById("entity-input");
  var output = document.getElementById("entity-output");
  var literal = document.getElementById("entity-literal");

  function update() {
    var raw = input.value;

    // 渲染結果：以瀏覽器原生解析方式顯示實體（透過 innerHTML，但只放使用者輸入的純文字，
    // 此 demo 僅用於教學觀察，輸入皆為本機操作）。
    output.innerHTML = raw;

    // 字面字串：顯示使用者「實際打進去」的字元，不做任何解析。
    literal.textContent = raw;
  }

  input.addEventListener("input", update);

  // 快速插入按鈕：在游標位置插入對應的字符實體寫法。
  var buttons = document.querySelectorAll(".quick button");
  Array.prototype.forEach.call(buttons, function (btn) {
    btn.addEventListener("click", function () {
      var entity = btn.getAttribute("data-entity");
      var start = input.selectionStart;
      var end = input.selectionEnd;
      var value = input.value;
      input.value = value.slice(0, start) + entity + value.slice(end);
      var pos = start + entity.length;
      input.setSelectionRange(pos, pos);
      input.focus();
      update();
    });
  });

  update();
})();
