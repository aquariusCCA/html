(function () {
  const status = window.scriptDemo.libraryReady
    ? "main found the deferred library"
    : "main ran before the library";

  window.scriptDemo.log(`defer-main.js executed: ${status}`);

  const badge = document.querySelector("#deferResult");
  if (badge) {
    badge.textContent = status;
  }
})();
