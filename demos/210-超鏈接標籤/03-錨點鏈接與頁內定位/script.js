const statusBox = document.querySelector("#status");

document.querySelectorAll("[data-message]").forEach((link) => {
  link.addEventListener("click", (event) => {
    statusBox.textContent = link.dataset.message;

    if (link.dataset.externalAnchor === "true") {
      event.preventDefault();
      statusBox.textContent = `${link.dataset.message} 這個 demo 已複製目標 HTML，但先攔截點擊避免離開頁面。`;
    }
  });
});

document.querySelectorAll("[data-error]").forEach((button) => {
  button.addEventListener("click", () => {
    statusBox.textContent = button.dataset.error;
  });
});

window.addEventListener("hashchange", () => {
  const target = document.querySelector(location.hash);
  if (target) {
    target.focus({ preventScroll: true });
  }
});
