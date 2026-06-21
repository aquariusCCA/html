const scenarios = {
  warning: {
    title: "警告文字需要優先注意",
    description: "這段文字是使用者必須先讀到的警告，不只是要看起來粗體。",
    badCode: "<b>警告：請先存檔</b>",
    badRender: "<b>警告：請先存檔</b>",
    badReason: "<code>b</code> 只表示吸引注意，無法表達這是需要優先處理的重要訊息。",
    goodCode: "<strong>警告：請先存檔</strong>",
    goodRender: "<strong>警告：請先存檔</strong>",
    goodReason: "<code>strong</code> 表示重要、嚴重或需要優先注意，符合這段文字的語意。"
  },
  product: {
    title: "商品名稱只是要醒目",
    description: "商品名稱需要在段落中被看見，但它不是警告，也不比其他內容更重要。",
    badCode: "<strong>新品上市</strong>",
    badRender: "<strong>新品上市</strong>",
    badReason: "只想讓商品名稱醒目時，使用 <code>strong</code> 會讓語意變得過重。",
    goodCode: '<span class="highlight">新品上市</span>',
    goodRender: '<span class="highlight">新品上市</span>',
    goodReason: "這裡是外觀需求，用 <code>span</code> 搭配 CSS 控制粗體更合適。"
  },
  inserted: {
    title: "文件修訂新增內容",
    description: "這段文字是在文件版本中被加入的內容，底線只是瀏覽器常見的預設呈現。",
    badCode: "<u>新增付款方式</u>",
    badRender: "<u>新增付款方式</u>",
    badReason: "<code>u</code> 只能表示非連結特殊標示，不能清楚表達文件修訂中的新增。",
    goodCode: "<ins>新增付款方式</ins>",
    goodRender: "<ins>新增付款方式</ins>",
    goodReason: "<code>ins</code> 表示新增內容，符合文件修訂語意。"
  },
  underline: {
    title: "只是想畫底線",
    description: "文字沒有新增內容或其他特殊語意，只是版面上想加底線。",
    badCode: "<ins>活動重點</ins>",
    badRender: "<ins>活動重點</ins>",
    badReason: "使用 <code>ins</code> 會暗示這是文件新增內容，和實際需求不符。",
    goodCode: '<span class="underlined">活動重點</span>',
    goodRender: '<span class="underlined">活動重點</span>',
    goodReason: "只有底線外觀需求時，使用 <code>span</code> 與 CSS 控制樣式。"
  },
  price: {
    title: "促銷原價已不適用",
    description: "商品原價仍可被讀到，但它已不是目前適用的價格。",
    badCode: "<del>原價 100 元</del>",
    badRender: "<del>原價 100 元</del>",
    badReason: "<code>del</code> 表示文件修訂中刪除內容，促銷原價通常不是這個語意。",
    goodCode: "<s>原價 100 元</s> <strong>特價 80 元</strong>",
    goodRender: '<span class="price-row"><s>原價 100 元</s><strong>特價 80 元</strong></span>',
    goodReason: "<code>s</code> 表示內容已不準確或不再適用，更貼近促銷原價。"
  }
};

const scenarioSelect = document.querySelector("#scenarioSelect");
const scenarioTitle = document.querySelector("#scenarioTitle");
const scenarioDescription = document.querySelector("#scenarioDescription");
const badCode = document.querySelector("#badCode");
const badRender = document.querySelector("#badRender");
const badReason = document.querySelector("#badReason");
const goodCode = document.querySelector("#goodCode");
const goodRender = document.querySelector("#goodRender");
const goodReason = document.querySelector("#goodReason");

function renderScenario(key) {
  const scenario = scenarios[key];
  scenarioTitle.textContent = scenario.title;
  scenarioDescription.textContent = scenario.description;
  badCode.textContent = scenario.badCode;
  badRender.innerHTML = scenario.badRender;
  badReason.innerHTML = scenario.badReason;
  goodCode.textContent = scenario.goodCode;
  goodRender.innerHTML = scenario.goodRender;
  goodReason.innerHTML = scenario.goodReason;
}

scenarioSelect.addEventListener("change", (event) => {
  renderScenario(event.target.value);
});
