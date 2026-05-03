(function () {
  const target = document.querySelector("#bodyEndTarget");
  if (!target) return;

  target.textContent = "body-end-main.js found this DOM element because the script is near the end of body.";
  window.scriptDemo.log("body-end-main.js executed after its target element existed");
})();
