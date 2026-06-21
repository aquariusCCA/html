const doctypes = {
  html5: {
    title: "HTML5 宣告",
    code: `<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8">
    <title>我的網頁</title>
  </head>
  <body>
    <h1>歡迎來到我的網頁</h1>
  </body>
</html>`
  },
  html4: {
    title: "HTML4 宣告",
    code: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
  "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
  </head>
  <body>
  </body>
</html>`
  },
  xhtml: {
    title: "XHTML 宣告",
    code: `<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="zh">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
  </head>
  <body>
  </body>
</html>`
  }
};

const placements = {
  body: {
    title: "結構清楚",
    code: `<body>
  <h1>歡迎來到我的網頁</h1>
</body>`,
    result: "<h1>歡迎來到我的網頁</h1>",
    note: "要顯示在畫面上的內容放在 body，結構意圖清楚，也方便後續維護。"
  },
  head: {
    title: "結構混亂",
    code: `<head>
  <meta charset="UTF-8">
  歡迎來到我的網頁
  <title>我的網頁</title>
</head>`,
    result: `<span class="warning">內容位置錯誤</span><p>瀏覽器可能嘗試自動修正 DOM，但結果不一定符合原本預期。</p>`,
    note: "head 是設定區，不應放頁面正文。遇到畫面異常時，應先回頭檢查骨架位置。"
  }
};

const versionTitle = document.getElementById("version-title");
const doctypeCode = document.getElementById("doctype-code");
const tabButtons = document.querySelectorAll(".tab");

function setVersion(version) {
  versionTitle.textContent = doctypes[version].title;
  doctypeCode.textContent = doctypes[version].code;
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.version === version);
  });
}

const placementTitle = document.getElementById("placement-title");
const placementCode = document.getElementById("placement-code");
const placementResult = document.getElementById("placement-result");
const placementNote = document.getElementById("placement-note");
const placeButtons = document.querySelectorAll(".place");

function setPlacement(place) {
  placementTitle.textContent = placements[place].title;
  placementCode.textContent = placements[place].code;
  placementResult.innerHTML = placements[place].result;
  placementNote.textContent = placements[place].note;
  placeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.place === place);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setVersion(button.dataset.version));
});

placeButtons.forEach((button) => {
  button.addEventListener("click", () => setPlacement(button.dataset.place));
});

setVersion("html5");
setPlacement("body");
