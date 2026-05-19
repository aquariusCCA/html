const legacySample = document.querySelector('#legacy-sample');
const toggleButton = document.querySelector('#toggle-shiv');
const stateText = document.querySelector('#state-text');

function updateState() {
  const isApplied = legacySample.classList.contains('shiv-applied');

  toggleButton.textContent = isApplied
    ? '取消 html5shiv 後的模擬狀態'
    : '套用 html5shiv 後的模擬狀態';

  stateText.textContent = isApplied
    ? '目前右側區塊正在模擬 HTML5 新元素可以被樣式化後的狀態。'
    : '目前右側區塊正在模擬舊版 IE 未識別 HTML5 元素的狀態。';
}

toggleButton.addEventListener('click', () => {
  legacySample.classList.toggle('shiv-applied');
  updateState();
});

updateState();
