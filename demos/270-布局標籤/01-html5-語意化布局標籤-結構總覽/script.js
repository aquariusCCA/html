// Source notes: notes/270-布局標籤/01-html5-語意化布局標籤.md
(function () {
  "use strict";

  var page = document.getElementById("page");
  var toggle = document.getElementById("toggleOutline");
  var infoTag = document.getElementById("infoTag");
  var infoRole = document.getElementById("infoRole");
  var regions = page.querySelectorAll(".region");

  // 切換語意外框與標籤名
  toggle.addEventListener("change", function () {
    page.classList.toggle("show-outline", toggle.checked);
  });

  // 滑鼠移入區塊時，在說明欄顯示該標籤角色
  regions.forEach(function (region) {
    region.addEventListener("mouseenter", function (event) {
      // 只反應最內層（事件目標）的區塊，避免父子區塊互相覆蓋
      event.stopPropagation();
      regions.forEach(function (r) {
        r.classList.remove("is-hover");
      });
      region.classList.add("is-hover");

      // data-tag 內含 HTML 實體（&lt; &gt;），用 textContent 還原成可讀文字
      var tmp = document.createElement("textarea");
      tmp.innerHTML = region.getAttribute("data-tag");
      infoTag.textContent = tmp.value;
      infoRole.textContent = region.getAttribute("data-role");
    });

    region.addEventListener("mouseleave", function () {
      region.classList.remove("is-hover");
    });
  });
})();
