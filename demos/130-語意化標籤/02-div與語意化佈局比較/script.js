const codeToggle = document.querySelector("#show-code");
const lookToggle = document.querySelector("#same-look");
const summaryToggle = document.querySelector("#show-summary");

function syncComparison() {
  document.body.classList.toggle("hide-code", !codeToggle.checked);
  document.body.classList.toggle("loose-look", !lookToggle.checked);
  document.body.classList.toggle("hide-summary", !summaryToggle.checked);
}

[codeToggle, lookToggle, summaryToggle].forEach((control) => {
  control.addEventListener("change", syncComparison);
});

syncComparison();
