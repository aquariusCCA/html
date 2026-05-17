const inspections = {
  good: [
    "使用 header、section、article 表達頁面區塊與文章內容。",
    "標題層級從 h2 到 h3，順序清楚，沒有為了字體大小跳級。",
    "連結使用 a 元素，瀏覽器、鍵盤操作與輔助工具都能辨識。"
  ],
  risk: [
    "主要標題使用 div，畫面看起來像標題，但 HTML 語意不清楚。",
    "標題層級從 h4 跳到 h1，文件大綱容易混亂。",
    "看起來像連結的文字使用 div，無法真正連到其他文件。"
  ]
};

const buttons = document.querySelectorAll(".inspection-actions button");
const list = document.querySelector("#inspection-list");

function renderInspection(target) {
  list.innerHTML = inspections[target]
    .map((item) => `<li>${item}</li>`)
    .join("");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderInspection(button.dataset.target);
  });
});

renderInspection("good");
