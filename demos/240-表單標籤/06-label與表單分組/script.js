// A 區：記錄哪個控件因為 label 被點而獲得焦點
const log = document.getElementById('focus-log');
let started = false;

document.querySelectorAll('input[data-label]').forEach((el) => {
  el.addEventListener('focus', () => report(el));
  // radio/checkbox 點 label 會觸發 change
  el.addEventListener('change', () => report(el));
});

function report(el) {
  if (!started) { log.innerHTML = ''; started = true; }
  const li = document.createElement('li');
  const time = new Date().toLocaleTimeString();
  li.innerHTML = `<span class="kv-key">${time}</span> 啟動了：<span class="kv-val">${el.dataset.label}</span>`;
  log.prepend(li);
  // 只保留最近 5 筆
  while (log.children.length > 5) log.removeChild(log.lastChild);
}
