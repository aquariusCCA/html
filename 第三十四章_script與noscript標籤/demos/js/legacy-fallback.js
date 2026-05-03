(function () {
  var banner = document.createElement("div");
  banner.textContent = "legacy-fallback.js executed via nomodule";
  banner.style.cssText = "padding:10px;border:1px solid #9b3f4e;background:#f3dfe4;margin:10px;";
  document.body.insertBefore(banner, document.body.firstChild);
})();
