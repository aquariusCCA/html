const scenarios = {
  correct: {
    code: `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>我的第一個網頁</title>
</head>
<body>
  <h1>歡迎來到我的網站</h1>
</body>
</html>`,
    title: "我的第一個網頁",
    lang: "zh-TW",
    heading: "歡迎來到我的網站",
    body: "文件模式、主要語言與文字編碼都有明確標示。",
    checks: {
      doctype: ["is-good", "DOCTYPE 位於文件最前面，瀏覽器可用標準模式理解文件。"],
      lang: ["is-good", "lang 與主要內容語言一致，有助於翻譯、搜尋與輔助工具。"],
      charset: ["is-good", "charset 設為 UTF-8，降低中文與符號變成亂碼的風險。"]
    },
    takeaway: "新建 HTML 檔案時，可以先放入這份基本骨架，再填寫 body 內容。"
  },
  doctypeInside: {
    code: `<html>
  <!DOCTYPE html>
  <head>
    <meta charset="UTF-8">
    <title>DOCTYPE 放錯位置</title>
  </head>
  <body>
    <h1>這份文件的開頭不清楚</h1>
  </body>
</html>`,
    title: "DOCTYPE 放錯位置",
    lang: "未標示",
    heading: "這份文件的開頭不清楚",
    body: "DOCTYPE 應該在 html 標籤之前，而不是放進 html 裡。",
    checks: {
      doctype: ["is-bad", "DOCTYPE 沒有放在文件最前面，失去文檔類型聲明應有的位置。"],
      lang: ["is-warn", "html 標籤缺少 lang，工具無法直接知道主要語言。"],
      charset: ["is-good", "charset 有設定，文字編碼資訊仍然清楚。"]
    },
    takeaway: "DOCTYPE 不是 HTML 標籤，也不是 body 內容；它應該站在整份文件的第一行。"
  },
  missingCharset: {
    code: `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <title>缺少 charset</title>
</head>
<body>
  <h1>中文、標點與特殊符號</h1>
</body>
</html>`,
    title: "缺少 charset",
    lang: "zh-TW",
    heading: "中文、標點與特殊符號",
    body: "如果瀏覽器猜錯編碼，文字可能顯示異常。",
    checks: {
      doctype: ["is-good", "DOCTYPE 位於文件最前面。"],
      lang: ["is-good", "lang 與主要內容語言一致。"],
      charset: ["is-warn", "缺少 meta charset，瀏覽器可能根據環境自行猜測編碼。"]
    },
    takeaway: "現代網頁通常建議在 head 前段加入 <meta charset=\"UTF-8\">。"
  },
  langMismatch: {
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>繁體中文頁面</title>
</head>
<body>
  <h1>這是一份繁體中文內容</h1>
</body>
</html>`,
    title: "繁體中文頁面",
    lang: "en",
    heading: "這是一份繁體中文內容",
    body: "畫面可能仍能顯示，但工具會把主要語言判斷成英文。",
    checks: {
      doctype: ["is-good", "DOCTYPE 位於文件最前面。"],
      lang: ["is-bad", "lang 標成 en，但內容主要是繁體中文，會影響輔助工具與翻譯判斷。"],
      charset: ["is-good", "charset 有設定，文字編碼資訊清楚。"]
    },
    takeaway: "lang 不一定會讓畫面壞掉，但會影響瀏覽器與其他工具如何理解內容。"
  }
};

const code = document.querySelector("#html-code");
const title = document.querySelector("#preview-title");
const lang = document.querySelector("#preview-lang");
const heading = document.querySelector("#preview-heading");
const bodyText = document.querySelector("#preview-body");
const takeaway = document.querySelector("#takeaway");
const buttons = document.querySelectorAll(".scenario-button");
const checkItems = {
  doctype: document.querySelector("#doctype-check"),
  lang: document.querySelector("#lang-check"),
  charset: document.querySelector("#charset-check")
};

function setCheck(name, state) {
  const item = checkItems[name];
  item.className = state[0];
  item.querySelector(".check-text").textContent = state[1];
}

function renderScenario(name) {
  const data = scenarios[name];
  code.textContent = data.code;
  title.textContent = data.title;
  lang.textContent = `lang="${data.lang}"`;
  heading.textContent = data.heading;
  bodyText.textContent = data.body;
  takeaway.textContent = data.takeaway;
  setCheck("doctype", data.checks.doctype);
  setCheck("lang", data.checks.lang);
  setCheck("charset", data.checks.charset);

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.scenario === name);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => renderScenario(button.dataset.scenario));
});

renderScenario("correct");
