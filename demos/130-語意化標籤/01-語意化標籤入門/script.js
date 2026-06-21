const tagToggle = document.querySelector("#show-tags");
const roleToggle = document.querySelector("#show-roles");
const plainToggle = document.querySelector("#plain-flow");

function syncView() {
  document.body.classList.toggle("hide-tags", !tagToggle.checked);
  document.body.classList.toggle("hide-roles", !roleToggle.checked);
  document.body.classList.toggle("plain-flow", plainToggle.checked);
}

[tagToggle, roleToggle, plainToggle].forEach((control) => {
  control.addEventListener("change", syncView);
});

syncView();
