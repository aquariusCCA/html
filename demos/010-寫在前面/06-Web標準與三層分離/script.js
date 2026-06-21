const layers = {
  html: {
    title: "HTML：描述內容與結構",
    code: `<form>
  <label for="name">姓名</label>
  <input id="name" name="name" type="text">
  <button type="submit">送出</button>
</form>`
  },
  css: {
    title: "CSS：決定視覺表現",
    code: `.submit-button {
  background: #2d7d5f;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
}`
  },
  js: {
    title: "JavaScript：處理互動行為",
    code: `form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "已攔截送出並顯示回饋";
});`
  }
};

const tabs = document.querySelectorAll(".tab");
const roleCards = document.querySelectorAll(".roles article");
const form = document.getElementById("sample-form");
const message = document.getElementById("message");

function setLayer(layer) {
  document.getElementById("layer-title").textContent = layers[layer].title;
  document.getElementById("layer-code").textContent = layers[layer].code;
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.layer === layer));
  roleCards.forEach((card) => card.classList.toggle("active", card.dataset.role === layer));
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setLayer(tab.dataset.layer));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "JavaScript 攔截送出：畫面用文字回饋目前狀態。";
});

setLayer("html");
