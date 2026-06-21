const statusBox = document.querySelector("#status");

document.querySelectorAll("[data-kind]").forEach((link) => {
  link.addEventListener("click", (event) => {
    statusBox.textContent = link.dataset.kind;

    if (link.getAttribute("href") === "#product") {
      return;
    }

    event.preventDefault();
    const href = link.getAttribute("href");
    statusBox.textContent = `${link.dataset.kind} 這個 demo 保留真實 href：${href}，但先攔截點擊避免離開頁面。`;
  });
});
