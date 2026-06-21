// A 區：記錄三種按鈕的行為
const form = document.getElementById('btn-form');
const nick = document.getElementById('nick');
const log = document.getElementById('log');
const plainBtn = document.getElementById('plain-btn');
let cleared = false;

function addLog(text) {
  if (!cleared) { log.innerHTML = ''; cleared = true; }
  const li = document.createElement('li');
  const time = new Date().toLocaleTimeString();
  li.innerHTML = `<span class="kv-key">${time}</span> ${text}`;
  log.prepend(li);
}

// submit：被攔截，但事件仍會觸發
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addLog(`<span class="kv-val">submit</span> 已觸發提交（攔截，未真的送出）`);
});

// reset：恢復初始值
form.addEventListener('reset', () => {
  // reset 事件觸發時欄位尚未還原，稍後讀取
  setTimeout(() => addLog(`<span class="kv-val">reset</span> 欄位已恢復初始值：${nick.value}`), 0);
});

// button：普通按鈕，純 JS
plainBtn.addEventListener('click', () => {
  addLog(`<span class="kv-val">button</span> 只執行 JavaScript，未提交也未重置`);
});

// B 區：示範忘記 type 會提交
document.querySelectorAll('.mini-form').forEach((f) => {
  const which = f.dataset.name;
  const status = document.getElementById(`${which}-status`);
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    if (which === 'bad') {
      status.innerHTML = '⚠️ <span style="color:#d8443c">表單被提交了！</span>（沒寫 type 的 button 預設是 submit）';
    }
  });
});
