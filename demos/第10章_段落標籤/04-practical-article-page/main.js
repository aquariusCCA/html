const article = document.querySelector("[data-article]");
const paragraphs = Array.from(article.querySelectorAll(":scope > p"));
const paragraphCount = document.querySelector("[data-paragraph-count]");
const characterCount = document.querySelector("[data-character-count]");
const spacingMessage = document.querySelector("[data-spacing-message]");
const spacingButtons = document.querySelectorAll("[data-spacing-option]");

const spacingMessages = {
  compact: "目前使用緊湊間距，適合資訊密度較高的介面。",
  comfortable: "目前使用舒適間距，適合一般文章閱讀。",
  loose: "目前使用寬鬆間距，適合需要放慢閱讀節奏的長文。"
};

paragraphCount.textContent = paragraphs.length;
characterCount.textContent = paragraphs
  .map((paragraph) => paragraph.textContent.trim().length)
  .reduce((total, count) => total + count, 0);

spacingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const spacing = button.dataset.spacingOption;

    document.body.dataset.spacing = spacing;
    spacingMessage.textContent = spacingMessages[spacing];

    spacingButtons.forEach((currentButton) => {
      currentButton.setAttribute(
        "aria-pressed",
        String(currentButton === button)
      );
    });
  });
});
