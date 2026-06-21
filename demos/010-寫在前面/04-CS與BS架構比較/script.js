const focusCopy = {
  install: {
    title: "安裝門檻",
    text: "C/S 通常先下載安裝專屬客戶端；B/S 則只要打開瀏覽器輸入網址即可。"
  },
  logic: {
    title: "邏輯分布",
    text: "C/S 的客戶端可能分擔較多運算；B/S 通常把主要業務邏輯放在伺服器，瀏覽器端負責呈現與少量互動。"
  },
  update: {
    title: "更新方式",
    text: "C/S 需要考慮每個客戶端是否完成升級；B/S 多半更新伺服器，使用者重新載入頁面就能取得新版。"
  },
  layers: {
    title: "B/S 三層模型",
    text: "B/S 常用表現層、邏輯層、數據層理解。HTML、CSS、JavaScript 主要落在表現層。"
  }
};

const tabs = document.querySelectorAll(".tab");
const items = document.querySelectorAll("li[data-key]");

function setFocus(key) {
  const copy = focusCopy[key];
  document.getElementById("focus-title").textContent = copy.title;
  document.getElementById("focus-text").textContent = copy.text;
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.focus === key));
  items.forEach((item) => item.classList.toggle("highlight", item.dataset.key === key));
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setFocus(tab.dataset.focus));
});

setFocus("install");
