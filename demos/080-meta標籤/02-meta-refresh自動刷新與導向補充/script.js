const mode = document.querySelector('#mode');
const messageToggle = document.querySelector('#messageToggle');
const restartButton = document.querySelector('#restartButton');
const codeSample = document.querySelector('#codeSample');
const countValue = document.querySelector('#countValue');
const meterBar = document.querySelector('#meterBar');
const statusText = document.querySelector('#statusText');
const manualLink = document.querySelector('#manualLink');

let totalSeconds = 5;
let remaining = 5;
let timer = null;

function buildCode() {
  if (mode.value === 'reload') {
    return [
      '<head>',
      '  <meta charset="UTF-8">',
      '  <meta http-equiv="refresh" content="5">',
      '  <title>狀態頁</title>',
      '</head>'
    ].join('\n');
  }

  return [
    '<head>',
    '  <meta charset="UTF-8">',
    '  <meta http-equiv="refresh" content="3;url=https://example.com/target-page">',
    '  <title>即將前往新頁面</title>',
    '</head>'
  ].join('\n');
}

function render() {
  codeSample.textContent = buildCode();
  countValue.textContent = remaining;
  meterBar.style.width = `${(remaining / totalSeconds) * 100}%`;

  if (remaining === 0) {
    statusText.textContent = mode.value === 'reload'
      ? '模擬結果：時間到，瀏覽器會重新整理目前頁面。'
      : '模擬結果：時間到，瀏覽器會前往指定 URL。';
  } else {
    statusText.textContent = mode.value === 'reload'
      ? `頁面載入 ${totalSeconds} 秒後會重新整理，目前還有 ${remaining} 秒。`
      : `頁面載入 ${totalSeconds} 秒後會導向指定網址，目前還有 ${remaining} 秒。`;
  }

  manualLink.textContent = messageToggle.checked
    ? '如果沒有自動跳轉，保留手動連結讓使用者自行開啟。'
    : '目前沒有提示或手動連結，使用者較難理解接下來會發生什麼。';
}

function start() {
  window.clearInterval(timer);
  totalSeconds = mode.value === 'reload' ? 5 : 3;
  remaining = totalSeconds;
  render();
  timer = window.setInterval(() => {
    remaining = Math.max(0, remaining - 1);
    render();
    if (remaining === 0) {
      window.clearInterval(timer);
    }
  }, 1000);
}

mode.addEventListener('change', start);
messageToggle.addEventListener('change', render);
restartButton.addEventListener('click', start);

start();
