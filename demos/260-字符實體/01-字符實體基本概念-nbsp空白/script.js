// Source notes: notes/260-字符實體/01-字符實體基本概念.md
// 互動比較：同樣數量的「普通空格」與「不換行空格」在畫面上的寬度差異。

(function () {
  "use strict";

  var slider = document.getElementById("space-count");
  var label = document.getElementById("count-label");
  var plainLine = document.getElementById("plain-line");
  var nbspLine = document.getElementById("nbsp-line");

  var NBSP = String.fromCharCode(160); // &nbsp; 對應的字元 (U+00A0)
  var SPACE = String.fromCharCode(32); // 一般空格 (U+0020)

  function repeat(ch, n) {
    var s = "";
    for (var i = 0; i < n; i++) {
      s += ch;
    }
    return s;
  }

  function update() {
    var n = parseInt(slider.value, 10);
    label.textContent = n;

    // 普通空格：放入 n 個一般空格，瀏覽器排版時會合併成 1 個。
    plainLine.textContent = "hello" + repeat(SPACE, n) + "world";

    // 不換行空格：放入 n 個 &nbsp; 對應的字元，會被完整保留。
    nbspLine.textContent = "hello" + repeat(NBSP, n) + "world";
  }

  slider.addEventListener("input", update);
  update();
})();
