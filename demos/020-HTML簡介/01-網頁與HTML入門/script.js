const examples = {
  plain: {
    code: "歡迎來到我的網站",
    html: "<p>歡迎來到我的網站</p>"
  },
  marked: {
    code: "<h1>歡迎來到我的網站</h1>",
    html: "<h1>歡迎來到我的網站</h1>"
  }
};

const sourceCode = document.getElementById("source-code");
const preview = document.getElementById("preview");
const buttons = document.querySelectorAll(".mode");

function setMode(mode) {
  sourceCode.textContent = examples[mode].code;
  preview.innerHTML = examples[mode].html;
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

setMode("plain");
