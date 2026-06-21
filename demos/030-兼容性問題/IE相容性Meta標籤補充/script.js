const scenario = document.querySelector('#scenario');
const xua = document.querySelector('#xua');
const renderer = document.querySelector('#renderer');
const codeSample = document.querySelector('#codeSample');
const documentMode = document.querySelector('#documentMode');
const engine = document.querySelector('#engine');
const effect = document.querySelector('#effect');
const capabilityText = document.querySelector('#capabilityText');
const compatBar = document.querySelector('#compatBar');

function tag(text, className) {
  return `<span class="tag ${className}">${text}</span>`;
}

function buildCode() {
  const lines = ['<head>'];
  if (xua.checked) {
    lines.push('  <meta http-equiv="X-UA-Compatible" content="IE=Edge">');
  }
  if (renderer.checked) {
    lines.push('  <meta name="renderer" content="webkit">');
  }
  lines.push('</head>');
  return lines.join('\n');
}

function update() {
  const value = scenario.value;
  codeSample.textContent = buildCode();

  let modeText = '';
  let engineText = '';
  let effectText = '';
  let capability = '';
  let width = '45%';

  if (value === 'ie8-compat') {
    modeText = xua.checked
      ? `${tag('IE8 最新可用文檔模式', 'ok')} 不是 IE11，只是 IE8 自己的最高模式。`
      : `${tag('可能降級', 'warn')} 可能受相容性檢視影響。`;
    engineText = tag('IE Trident', 'ignored');
    effectText = renderer.checked
      ? 'renderer 對 IE 沒有意義；X-UA-Compatible 才是這個情境的重點。'
      : '沒有 renderer 也不影響 IE，因為它不是雙核瀏覽器提示。';
    capability = xua.checked
      ? '可避免被降到更舊的 IE 文檔模式，但仍只有 IE8 本身的 HTML/CSS 能力。'
      : '可能被相容性檢視拖到更舊模式，現代 HTML/CSS 更容易失效。';
    width = xua.checked ? '58%' : '32%';
  }

  if (value === 'ie11-compat') {
    modeText = xua.checked
      ? `${tag('IE11 Edge 模式', 'ok')} 使用這台機器安裝的 IE11 最新模式。`
      : `${tag('可能相容模式', 'warn')} 可能被企業或網域設定降級。`;
    engineText = tag('IE Trident', 'ignored');
    effectText = 'renderer 不控制 IE；IE=Edge 也不會讓 IE11 變成 Chrome。';
    capability = xua.checked
      ? '可降低被降級解析的風險，但不同 IE 版本之間的能力差異仍存在。'
      : '若進入相容性模式，頁面可能用較舊規則解析。';
    width = xua.checked ? '72%' : '46%';
  }

  if (value === 'chrome') {
    modeText = tag('標準模式', 'ok');
    engineText = tag('Blink / Gecko / WebKit', 'ok');
    effectText = '這兩個 meta 對標準瀏覽器通常都會被忽略，不會修正 Chrome 本身的顯示問題。';
    capability = 'Chrome、Firefox、Safari 不靠這兩個相容性提示決定渲染能力。';
    width = '84%';
  }

  if (value === 'dual-trident') {
    modeText = xua.checked
      ? `${tag('IE 核心可避免降級', 'ok')} 但只在使用 Trident 時有關。`
      : `${tag('未指定 IE 文檔模式', 'warn')}`;
    engineText = renderer.checked
      ? `${tag('提示使用 WebKit/Blink', 'ok')} 是否切換仍取決於瀏覽器實作。`
      : `${tag('可能維持 Trident', 'warn')} 現代 HTML5/CSS3 支援可能較差。`;
    effectText = 'renderer 是少數雙核瀏覽器的非標準提示；標準瀏覽器會忽略。';
    capability = renderer.checked
      ? '若瀏覽器接受提示，頁面較可能用現代核心開啟。'
      : '可能用 IE 核心開啟，導致現代寫法顯示不正常。';
    width = renderer.checked ? '76%' : '40%';
  }

  documentMode.innerHTML = modeText;
  engine.innerHTML = engineText;
  effect.textContent = effectText;
  capabilityText.textContent = capability;
  compatBar.style.width = width;
}

[scenario, xua, renderer].forEach((control) => {
  control.addEventListener('change', update);
});

update();
