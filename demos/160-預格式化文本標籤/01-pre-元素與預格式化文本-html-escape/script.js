const checkbox = document.querySelector("#showTable");
const table = document.querySelector("#escapeTable");

checkbox.addEventListener("change", () => {
  table.classList.toggle("is-hidden", !checkbox.checked);
});
