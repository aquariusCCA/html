const charsetToggle = document.querySelector('#charsetToggle');
const viewportToggle = document.querySelector('#viewportToggle');
const infoToggle = document.querySelector('#infoToggle');
const codeSample = document.querySelector('#codeSample');
const encodingResult = document.querySelector('#encodingResult');
const viewportResult = document.querySelector('#viewportResult');
const infoResult = document.querySelector('#infoResult');
const phonePreview = document.querySelector('#phonePreview');
const sampleText = document.querySelector('#sampleText');

function tag(text, className) {
  return `<span class="tag ${className}">${text}</span>`;
}

function buildCode() {
  const lines = [
    '<!DOCTYPE html>',
    '<html lang="zh-Hant">',
    '<head>'
  ];

  if (charsetToggle.checked) {
    lines.push('  <meta charset="UTF-8">');
  }

  if (viewportToggle.checked) {
    lines.push('  <meta name="viewport" content="width=device-width, initial-scale=1.0">');
  }

  if (infoToggle.checked) {
    lines.push('  <meta name="author" content="kevin">');
    lines.push('  <meta name="generator" content="Visual Studio Code">');
    lines.push('  <meta name="copyright" content="2023-2027版權所有">');
  }

  lines.push('  <title>個人作品集</title>');
  lines.push('</head>');
  lines.push('<body>');
  lines.push('  <h1>個人作品集</h1>');
  lines.push('</body>');
  lines.push('</html>');
  return lines.join('\n');
}

function update() {
  codeSample.textContent = buildCode();

  encodingResult.innerHTML = charsetToggle.checked
    ? `${tag('建議設定', 'ok')}瀏覽器明確用 UTF-8 解讀文字，中文與符號較不容易出現亂碼。`
    : `${tag('風險', 'warn')}若伺服器或瀏覽器判斷錯誤，中文可能被錯誤解讀。`;

  viewportResult.innerHTML = viewportToggle.checked
    ? `${tag('行動友善', 'ok')}手機以裝置寬度呈現，版面不必先縮成桌面寬度。`
    : `${tag('可能縮小', 'warn')}手機可能用接近桌面寬度排版，再整頁縮小。`;

  infoResult.innerHTML = infoToggle.checked
    ? `${tag('metadata', 'neutral')}author、generator、copyright 提供文件資訊，通常不改變畫面。`
    : `${tag('未提供', 'neutral')}不影響畫面，但工具就少了這些文件層級描述。`;

  phonePreview.classList.toggle('no-viewport', !viewportToggle.checked);
  sampleText.textContent = charsetToggle.checked
    ? '中文、English、符號都應該正常顯示。'
    : '涓枃可能變成亂碼示意。';
}

[charsetToggle, viewportToggle, infoToggle].forEach((control) => {
  control.addEventListener('change', update);
});

update();
