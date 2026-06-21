const scenarioButtons = document.querySelectorAll(".scenario-button");
const cards = document.querySelectorAll(".case-card");

const caseData = {
  own: {
    local: {
      state: "可能可用",
      level: "warn",
      reason: "只有當這台電腦真的有 D:\\day01\\images\\1.jpg 時才會顯示。",
      fix: "正式專案應把圖片放進專案資料夾，改用 images/1.jpg。"
    },
    root: {
      state: "常失效",
      level: "bad",
      reason: "直接打開本機 HTML 時，/ 可能不是你的專案根目錄。",
      fix: "若沒有網站伺服器，先使用相對路徑比較穩定。"
    },
    remote: {
      state: "不穩定",
      level: "warn",
      reason: "外站圖片依賴對方網站，可能改名、刪除或拒絕外部引用。",
      fix: "重要圖片應放在自己的專案或自己的伺服器。"
    },
    relative: {
      state: "穩定",
      level: "ok",
      reason: "只要 HTML 與 images 資料夾的相對位置不變，搬移整個專案仍可用。",
      fix: "專案內圖片、CSS、JavaScript 通常優先使用相對路徑。"
    }
  },
  other: {
    local: {
      state: "失效",
      level: "bad",
      reason: "別人的電腦不一定有 D 槽，也不一定有同名資料夾與圖片。",
      fix: "不要把自己的磁碟路徑寫進正式網頁。"
    },
    root: {
      state: "看環境",
      level: "warn",
      reason: "若不是在正確網站根目錄下開啟，/images/logo.png 會指到錯的位置。",
      fix: "需要網站根目錄時，請確認部署環境與根目錄設定。"
    },
    remote: {
      state: "不穩定",
      level: "warn",
      reason: "對方網站狀態不受你控制，換設備也無法保證圖片可用。",
      fix: "對自己網站必要的圖片，應自行保存與管理。"
    },
    relative: {
      state: "穩定",
      level: "ok",
      reason: "整個 project 資料夾交給別人時，內部相對位置保持一致就能載入。",
      fix: "分享或部署專案時，連同資源資料夾一起保留。"
    }
  },
  server: {
    local: {
      state: "失效",
      level: "bad",
      reason: "網站伺服器不會去讀你開發電腦上的 D 槽圖片。",
      fix: "把資源放到網站專案中，再用相對路徑或網站根目錄路徑引用。"
    },
    root: {
      state: "可用",
      level: "ok",
      reason: "在伺服器環境中，/images/logo.png 會從網站根目錄開始找。",
      fix: "適合固定從網站根目錄引用的共用資源。"
    },
    remote: {
      state: "不穩定",
      level: "warn",
      reason: "即使在伺服器上，外站圖片仍可能被移除或被防盜鏈阻擋。",
      fix: "穩定顯示的圖片不應依賴外站熱連結。"
    },
    relative: {
      state: "穩定",
      level: "ok",
      reason: "部署後只要資料夾結構不變，images/1.jpg 仍會從目前 HTML 位置解析。",
      fix: "一般專案內資源可優先使用相對路徑。"
    }
  }
};

function applyScenario(scenario) {
  cards.forEach((card) => {
    const item = caseData[scenario][card.dataset.case];
    card.classList.remove("ok", "warn", "bad");
    card.classList.add(item.level);
    card.querySelector(".case-state").textContent = item.state;
    card.querySelector(".case-reason").textContent = item.reason;
    card.querySelector(".case-fix").textContent = item.fix;
  });
}

scenarioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    scenarioButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    applyScenario(button.dataset.scenario);
  });
});

applyScenario("own");
