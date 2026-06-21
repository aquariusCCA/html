const page = document.querySelector(".page-shell");
const toggleButton = document.querySelector("#toggleMarkers");

toggleButton.addEventListener("click", () => {
  const isActive = page.classList.toggle("show-markers");
  toggleButton.setAttribute("aria-pressed", String(isActive));
  toggleButton.textContent = isActive ? "隱藏空白標記" : "顯示空白標記";
});
