// Source notes: notes/260-字符實體/01-字符實體基本概念.md
// 互動：對同一段輸入，比較「當成 HTML 解析」與「當成文字顯示（轉義）」的差別。

(function () {
  "use strict";

  var input = document.getElementById("tag-input");
  var toggle = document.getElementById("parse-toggle");
  var modeLabel = document.getElementById("mode-label");
  var result = document.getElementById("tag-result");
  var source = document.getElementById("tag-source");

  // 把特殊字符轉義成字符實體，讓它們只當文字顯示。
  function escapeHtml(text) {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function update() {
    var raw = input.value;
    var parseAsHtml = toggle.checked;

    if (parseAsHtml) {
      // 當成 HTML 解析：瀏覽器收到原始字串，標籤會被執行。
      result.innerHTML = raw;
      source.textContent = raw;
      modeLabel.textContent = "目前：當成 HTML 解析（標籤會被執行）";
    } else {
      // 當成文字顯示：先轉義，瀏覽器收到的是 &lt; &gt; 等實體。
      var escaped = escapeHtml(raw);
      result.innerHTML = escaped;
      source.textContent = escaped;
      modeLabel.textContent = "目前：當成文字顯示（已轉義）";
    }
  }

  input.addEventListener("input", update);
  toggle.addEventListener("change", update);
  update();
})();
