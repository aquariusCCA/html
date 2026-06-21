const browserInputs = document.querySelectorAll('input[name="browser"]');
const modeInputs = document.querySelectorAll('input[name="loadMode"]');
const codeSample = document.querySelector('#codeSample');
const loadResult = document.querySelector('#loadResult');
const styleResult = document.querySelector('#styleResult');
const noteResult = document.querySelector('#noteResult');
const preview = document.querySelector('#preview');

const snippets = {
  none: `<head>
  <link rel="stylesheet" href="./style.css">
</head>`,
  direct: `<head>
  <link rel="stylesheet" href="./style.css">
  <script src="./js/html5shiv.min.js"><\/script>
</head>`,
  conditional: `<head>
  <link rel="stylesheet" href="./style.css">
  <!--[if lt IE 9]>
  <script src="./js/html5shiv.min.js"><\/script>
  <![endif]-->
</head>`
};

function selectedValue(name) {
  return document.querySelector(`input[name="${name}"]:checked`).value;
}

function html(text, className) {
  return `<span class="tag ${className}">${text}</span>`;
}

function update() {
  const browser = selectedValue('browser');
  const mode = selectedValue('loadMode');
  const isOldIE = browser === 'ie8';
  const hasNativeHtml5Elements = browser !== 'ie8';
  const conditionalLoads = mode === 'conditional' && browser === 'ie8';
  const directLoads = mode === 'direct';
  const shivLoaded = directLoads || conditionalLoads;
  const styleWorks = hasNativeHtml5Elements || shivLoaded;

  codeSample.textContent = snippets[mode];
  preview.classList.toggle('broken', !styleWorks);

  if (shivLoaded) {
    loadResult.innerHTML = html('會載入', directLoads && !isOldIE ? 'warn' : 'ok');
  } else {
    loadResult.innerHTML = html('不會載入', isOldIE ? 'bad' : 'ok');
  }

  styleResult.innerHTML = styleWorks
    ? html('可套用語意標籤樣式', 'ok')
    : html('舊版 IE 模型中樣式失效', 'bad');

  if (mode === 'direct' && !isOldIE) {
    noteResult.textContent = '直接載入會讓現代瀏覽器也下載補丁，通常只是多餘成本。';
  } else if (mode === 'conditional' && browser === 'ie10') {
    noteResult.textContent = 'IE10 起不再解析條件註解，因此這段會被視為普通註解。';
  } else if (mode === 'conditional') {
    noteResult.textContent = 'lt IE 9 只讓 IE6-IE8 載入補丁，正好對準 html5shiv 的適用範圍。';
  } else if (isOldIE) {
    noteResult.textContent = 'IE8 不認識 HTML5 新語意標籤，未補丁時 CSS 可能無法正常套用。';
  } else {
    noteResult.textContent = 'IE9 以上與標準瀏覽器原生識別這些標籤，不需要 html5shiv。';
  }
}

[...browserInputs, ...modeInputs].forEach((input) => {
  input.addEventListener('change', update);
});

update();
