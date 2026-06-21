const modes = {
  file: {
    clientTitle: "開啟本機檔案",
    clientText: "使用者直接用瀏覽器打開自己電腦裡的 index.html。",
    connector: "file:///index.html",
    serverLabel: "沒有對外服務",
    serverTitle: "檔案只在自己的電腦",
    serverText: "沒有 Web 伺服器回應其他人的 HTTP 請求。",
    resultTitle: "可訪問範圍：只有自己",
    resultText: "直接打開本機檔案適合練習，但它不是「網站已上線」。朋友的瀏覽器不會自動知道你電腦裡的檔案位置。",
    resources: ["讀取本機 HTML 檔案", "依 HTML 內容顯示頁面", "其他人無法直接透過網址取得這份檔案"]
  },
  local: {
    clientTitle: "同一網路中的瀏覽器",
    clientText: "同一個 Wi-Fi 下的同學，可以用你的區域網路 IP 發出請求。",
    connector: "http://192.168.x.x:port",
    serverLabel: "本地伺服器",
    serverTitle: "自己的電腦正在提供服務",
    serverText: "你的電腦回應 HTTP 請求，把 HTML 與相關資源送給瀏覽器。",
    resultTitle: "可訪問範圍：通常限同一區域網路",
    resultText: "本地伺服器常用於開發與課堂展示。它讓別人的瀏覽器透過請求取得你的網頁，但通常還不是公開上線。",
    resources: ["瀏覽器發出 HTTP 請求", "本地伺服器回傳 HTML", "瀏覽器再取得 CSS、圖片等資源"]
  },
  remote: {
    clientTitle: "任何可連線的瀏覽器",
    clientText: "使用者輸入網域名稱或公開 IP，請求會送到網際網路上的主機。",
    connector: "https://example.com",
    serverLabel: "遠端伺服器",
    serverTitle: "公開主機提供網站資源",
    serverText: "遠端伺服器搭配 DNS、權限與網路設定，對目標使用者提供服務。",
    resultTitle: "可訪問範圍：依部署與權限設定而定",
    resultText: "網站上線通常指把項目放到遠端伺服器，並完成網域、DNS、防火牆或權限設定，讓目標使用者能訪問。",
    resources: ["瀏覽器透過 HTTPS 請求網址", "遠端伺服器回傳 HTML", "瀏覽器取得 CSS、JavaScript、圖片並顯示頁面"]
  }
};

const buttons = document.querySelectorAll(".mode");
const resourceList = document.querySelector("#resource-list");

function setText(id, text) {
  document.getElementById(id).textContent = text;
}

function render(modeName) {
  const mode = modes[modeName];
  document.body.dataset.mode = modeName;
  setText("client-title", mode.clientTitle);
  setText("client-text", mode.clientText);
  setText("connector-text", mode.connector);
  setText("server-label", mode.serverLabel);
  setText("server-title", mode.serverTitle);
  setText("server-text", mode.serverText);
  setText("result-title", mode.resultTitle);
  setText("result-text", mode.resultText);
  resourceList.innerHTML = mode.resources.map((item, index) => `<li class="${index === 0 ? "active" : ""}">${item}</li>`).join("");
  buttons.forEach((button) => button.classList.toggle("active", button.dataset.mode === modeName));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => render(button.dataset.mode));
});

render("file");
