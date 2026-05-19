const legacyIeInput = document.querySelector('#legacy-ie');
const semanticHtmlInput = document.querySelector('#semantic-html');
const dualCoreInput = document.querySelector('#dual-core-browser');
const modernOnlyInput = document.querySelector('#modern-only');
const recommendations = document.querySelector('#recommendations');
const snippet = document.querySelector('#snippet');

function addRecommendation(items, title, description) {
  items.push({ title, description });
}

function renderDecision() {
  if (modernOnlyInput.checked && legacyIeInput.checked) {
    modernOnlyInput.checked = false;
  }

  const needsLegacyIe = legacyIeInput.checked;
  const usesSemanticHtml = semanticHtmlInput.checked;
  const needsDualCore = dualCoreInput.checked;
  const modernOnly = modernOnlyInput.checked;
  const items = [];
  const lines = [
    '<!doctype html>',
    '<html lang="zh-Hant">',
    '<head>',
    '  <meta charset="UTF-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1.0">'
  ];

  if (needsLegacyIe) {
    lines.push('  <meta http-equiv="X-UA-Compatible" content="IE=edge">');
    addRecommendation(
      items,
      '保留 X-UA-Compatible',
      '若仍需處理舊版 IE 或相容模式，使用 IE=edge 可提示 IE 採用最新可用文件模式。'
    );
  } else {
    addRecommendation(
      items,
      '通常不需要 X-UA-Compatible',
      '若只面向現代瀏覽器，這個 IE 專用設定通常沒有實際效果。'
    );
  }

  if (needsDualCore) {
    lines.push('  <meta name="renderer" content="webkit">');
    addRecommendation(
      items,
      '可視需求保留 renderer',
      'renderer 只對特定雙核瀏覽器環境有意義，應註明目的並實際測試。'
    );
  } else {
    addRecommendation(
      items,
      '避免無目的加入 renderer',
      'renderer 不是通用 HTML 標準，沒有目標瀏覽器需求時不應照抄。'
    );
  }

  if (needsLegacyIe && usesSemanticHtml) {
    lines.push('');
    lines.push('  <!--[if lt IE 9]>');
    lines.push('  <script src="./js/html5shiv.min.js"></script>');
    lines.push('  <![endif]-->');
    addRecommendation(
      items,
      '使用條件註解載入 html5shiv',
      '需要支援 IE8 或更舊版本，且頁面使用 HTML5 語意化元素時，才考慮這段相容處理。'
    );
  } else if (needsLegacyIe) {
    addRecommendation(
      items,
      '先確認是否真的需要 html5shiv',
      '若頁面沒有使用 HTML5 新元素，html5shiv 未必能帶來實際幫助。'
    );
  } else {
    addRecommendation(
      items,
      '通常移除 html5shiv',
      modernOnly
        ? '只支援現代瀏覽器時，通常不需要 html5shiv。'
        : '若不支援 IE8 或更舊版本，通常可以評估移除 html5shiv。'
    );
  }

  lines.push('  <title>相容性設定範例</title>');
  lines.push('</head>');
  lines.push('<body>');
  lines.push('  <h1>頁面內容</h1>');
  lines.push('</body>');
  lines.push('</html>');

  recommendations.innerHTML = items
    .map((item) => `<li><strong>${item.title}</strong>${item.description}</li>`)
    .join('');
  snippet.textContent = lines.join('\n');
}

legacyIeInput.addEventListener('change', renderDecision);
semanticHtmlInput.addEventListener('change', renderDecision);
dualCoreInput.addEventListener('change', renderDecision);
modernOnlyInput.addEventListener('change', () => {
  if (modernOnlyInput.checked) {
    legacyIeInput.checked = false;
  }
  renderDecision();
});

renderDecision();
