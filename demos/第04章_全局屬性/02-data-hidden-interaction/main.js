const productCards = document.querySelectorAll(".product-card");
const selectedMessage = document.querySelector("#selected-message");

productCards.forEach((card) => {
  const button = card.querySelector("[data-action='toggle-detail']");
  const detail = card.querySelector(".detail");

  button.addEventListener("click", () => {
    const isOpening = detail.hidden;

    closeAllDetails();

    if (isOpening) {
      fillDetail(card);
      detail.hidden = false;
      button.setAttribute("aria-expanded", "true");
      card.classList.add("is-selected");
      selectedMessage.textContent = `目前選取：${card.dataset.productId}，分類是 ${card.dataset.category}。`;
    }
  });
});

function closeAllDetails() {
  productCards.forEach((card) => {
    card.querySelector(".detail").hidden = true;
    card.querySelector("[data-action='toggle-detail']").setAttribute("aria-expanded", "false");
    card.classList.remove("is-selected");
  });
}

function fillDetail(card) {
  card.querySelector("[data-field='id']").textContent = card.dataset.productId;
  card.querySelector("[data-field='category']").textContent = card.dataset.category;
  card.querySelector("[data-field='stock']").textContent = card.dataset.stock;
}

