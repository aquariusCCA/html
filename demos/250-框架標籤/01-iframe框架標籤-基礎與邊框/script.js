// iframe 基礎與邊框 demo：依控制項即時更新 iframe 的尺寸、邊框，並同步顯示對應的 HTML 程式碼。
(function () {
  "use strict";

  var frame = document.getElementById("demoFrame");
  var borderSelect = document.getElementById("borderSelect");
  var widthRange = document.getElementById("widthRange");
  var heightRange = document.getElementById("heightRange");
  var widthOut = document.getElementById("widthOut");
  var heightOut = document.getElementById("heightOut");
  var codeOut = document.getElementById("codeOut");

  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function apply() {
    var width = widthRange.value;
    var height = heightRange.value;
    var border = borderSelect.value;

    // 更新 iframe 實際屬性與樣式
    frame.setAttribute("width", width);
    frame.setAttribute("height", height);
    frame.setAttribute("style", border);

    // 更新數值顯示
    widthOut.textContent = width;
    heightOut.textContent = height;

    // 同步產生對應的 HTML 程式碼
    var html =
      '<iframe src="./assets/home.html"\n' +
      '        title="示範首頁"\n' +
      '        width="' + width + '" height="' + height + '"\n' +
      '        style="' + border + '"></iframe>';
    codeOut.innerHTML = escapeHtml(html);
  }

  borderSelect.addEventListener("change", apply);
  widthRange.addEventListener("input", apply);
  heightRange.addEventListener("input", apply);

  // 初始渲染
  apply();
})();
