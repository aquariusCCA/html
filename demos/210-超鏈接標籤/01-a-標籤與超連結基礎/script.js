const statusBox = document.querySelector("#status");

function setStatus(message) {
  statusBox.textContent = message;
}

document.querySelectorAll("[data-message]").forEach((item) => {
  item.addEventListener("click", (event) => {
    setStatus(item.dataset.message);

    const href = item.getAttribute("href");
    if (href && href.startsWith("https://example.com")) {
      event.preventDefault();
      setStatus(`${item.dataset.message} 這個 demo 攔截外部導航，避免離開範例頁。`);
    }
  });
});

document.querySelector(".plain-anchor").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    setStatus("這個 a 沒有 href，即使用鍵盤啟動也沒有可導航目標。");
  }
});

document.querySelector("#saveBtn").addEventListener("click", () => {
  setStatus("儲存是操作行為，不是前往另一個位置；這裡使用 button 較符合語意。");
});
