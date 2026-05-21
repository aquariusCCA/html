const countElement = document.querySelector("#count");
const statusElement = document.querySelector("#status-text");
const addCountButton = document.querySelector("#add-count");
const toggleStatusButton = document.querySelector("#toggle-status");

let count = 0;
let isOpen = true;

addCountButton.addEventListener("click", () => {
  count += 1;
  countElement.textContent = String(count);
});

toggleStatusButton.addEventListener("click", () => {
  isOpen = !isOpen;
  statusElement.textContent = isOpen ? "開放報名" : "暫停報名";
  statusElement.classList.toggle("is-open", isOpen);
  statusElement.classList.toggle("is-closed", !isOpen);
});
