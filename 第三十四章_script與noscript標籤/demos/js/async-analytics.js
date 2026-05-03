(function () {
  const delay = Math.round(performance.now());
  window.scriptDemo.asyncComplete = true;
  window.scriptDemo.log(`async-analytics.js executed independently at ${delay}ms`);

  const badge = document.querySelector("#asyncResult");
  if (badge) {
    badge.textContent = "async script finished independently";
  }
})();
