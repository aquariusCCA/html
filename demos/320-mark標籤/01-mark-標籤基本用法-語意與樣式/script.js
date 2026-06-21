// Source notes: notes/320-mark標籤/01-mark-標籤基本用法.md
// 切換 .preview 的 class，示範「同一段語意、不同視覺呈現」。
const preview = document.getElementById('preview');
const hint = document.getElementById('hint');
const cssView = document.getElementById('css-view');
const buttons = document.querySelectorAll('.controls button');

const styles = {
  default: {
    className: 'preview--default',
    hint: '目前樣式：瀏覽器預設黃底。語意不變，只是視覺呈現不同。',
    css: 'mark {\n  /* 使用瀏覽器預設樣式 */\n}',
  },
  custom: {
    className: 'preview--custom',
    hint: '目前樣式：自訂底色。改了顏色，<mark> 的語意依然成立。',
    css: 'mark {\n  background-color: #ffe08a;\n  color: #1f2933;\n}',
  },
  underline: {
    className: 'preview--underline',
    hint: '目前樣式：去掉背景、改用底線。即使沒有黃底，這仍然是被標記的重點。',
    css: 'mark {\n  background-color: transparent;\n  color: inherit;\n  border-bottom: 2px solid #f0a020;\n  font-weight: 600;\n}',
  },
};

function applyStyle(key) {
  const config = styles[key];
  if (!config) return;
  preview.className = 'preview ' + config.className;
  hint.textContent = config.hint;
  cssView.textContent = config.css;
  buttons.forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.style === key);
  });
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => applyStyle(btn.dataset.style));
});
