const bio = document.querySelector("#bio");
const preview = document.querySelector("#preview");
const readButton = document.querySelector("#read-content");
const resetButton = document.querySelector("#reset-content");

const defaultText = bio.textContent.trim();

readButton.addEventListener("click", () => {
  preview.textContent = bio.textContent.trim() || "目前沒有文字內容。";
});

resetButton.addEventListener("click", () => {
  bio.textContent = defaultText;
  preview.textContent = "已還原內容，請再次按「讀取內容」。";
});

