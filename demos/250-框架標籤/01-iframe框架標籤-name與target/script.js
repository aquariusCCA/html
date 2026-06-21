// name 與 target demo：輔助觀察「哪個連結最近把內容載入到框架」。
// 注意：實際的 target 導向行為由 HTML 的 name/target 完成，JS 僅用於狀態回饋，不取代 HTML 功能。
(function () {
  "use strict";

  var lastLoaded = document.getElementById("lastLoaded");
  var links = document.querySelectorAll('.link-col a[target="container"]');

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      // 純粹更新左側的狀態文字，方便讀者確認剛剛點了哪一個連結。
      var label = link.textContent.trim();
      lastLoaded.innerHTML = "<strong></strong>";
      lastLoaded.querySelector("strong").textContent = label;
    });
  });

  // 對「對不上」的錯誤連結加一行說明，提醒它會另開視窗而非更新框架。
  var broken = document.querySelector(".link-col a.broken");
  var brokenNote = document.getElementById("brokenNote");
  if (broken && brokenNote) {
    broken.addEventListener("click", function () {
      brokenNote.textContent = "因為找不到 name=\"content\" 的框架，內容改在新視窗開啟了。";
    });
  }
})();
