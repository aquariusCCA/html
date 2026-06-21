const statusBox = document.querySelector("#status");

document.querySelectorAll("[data-behavior]").forEach((link) => {
  link.addEventListener("click", (event) => {
    statusBox.textContent = link.dataset.behavior;

    if (link.dataset.prevent === "true") {
      event.preventDefault();
      statusBox.textContent = `${link.dataset.behavior} 這個 demo 已攔截點擊，避免重新載入、喚起外部應用或執行 javascript:。`;
    }
  });
});

document.querySelectorAll("[data-note]").forEach((button) => {
  button.addEventListener("click", () => {
    statusBox.textContent = button.dataset.note;
  });
});

document.querySelector("#submitDemo").addEventListener("click", () => {
  statusBox.textContent = "button 表示操作；JavaScript 事件監聽負責行為，語意與程式分工較清楚。";
});
