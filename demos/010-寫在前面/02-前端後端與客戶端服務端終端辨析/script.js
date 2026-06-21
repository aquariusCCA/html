const nodeInfo = {
  browser: {
    title: "瀏覽器畫面",
    frontendBackend: "前端：負責使用者看見與操作的畫面，主要由 HTML、CSS、JavaScript 構成。",
    clientServer: "客戶端：這次互動中發出請求、接收並顯示結果的一方。",
    terminal: "不是終端；它是圖形化瀏覽器介面。"
  },
  server: {
    title: "伺服器程式",
    frontendBackend: "後端：處理請求、執行邏輯，決定要回應什麼資料或頁面。",
    clientServer: "服務端：這次互動中提供服務、回應請求的一方。",
    terminal: "伺服器可以被終端操作，但伺服器程式本身不等於終端。"
  },
  database: {
    title: "資料庫",
    frontendBackend: "通常由後端存取：負責保存、查詢或更新資料。",
    clientServer: "不是瀏覽器請求中的客戶端；在整體系統中常是服務端背後的資料來源。",
    terminal: "不是終端；管理者可能透過終端或資料庫工具操作它。"
  },
  terminal: {
    title: "終端視窗",
    frontendBackend: "不是前端或後端的分工名稱；它是操作機器的介面。",
    clientServer: "不是客戶端或服務端的角色名稱；同一台機器可透過終端被操作。",
    terminal: "終端：用命令列方式操作本機或遠端主機。"
  }
};

const buttons = document.querySelectorAll(".node");

function updateInspector(key) {
  const info = nodeInfo[key];
  document.getElementById("node-title").textContent = info.title;
  document.getElementById("frontend-backend").textContent = info.frontendBackend;
  document.getElementById("client-server").textContent = info.clientServer;
  document.getElementById("terminal").textContent = info.terminal;
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.node === key));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => updateInspector(button.dataset.node));
});

updateInspector("browser");
