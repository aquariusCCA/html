// B 區：即時顯示 value 與 placeholder 兩框「真正的值」
const badInput = document.getElementById('bad-input');
const goodInput = document.getElementById('good-input');
const badVal = document.getElementById('bad-val');
const goodVal = document.getElementById('good-val');

function show(el) {
  return el.value === '' ? '(空字串)' : el.value;
}
function syncBG() {
  badVal.textContent = show(badInput);
  goodVal.textContent = show(goodInput);
}
badInput.addEventListener('input', syncBG);
goodInput.addEventListener('input', syncBG);
syncBG();

// C 區：切換密碼框 type，示範「值不變，只是顯示方式變」
const cPwd = document.getElementById('c-pwd');
const toggleBtn = document.getElementById('toggle-pwd');
const pwdType = document.getElementById('pwd-type');
const pwdVal = document.getElementById('pwd-val');

function syncPwd() {
  pwdType.textContent = cPwd.type;
  pwdVal.textContent = cPwd.value === '' ? '(空字串)' : cPwd.value;
}
toggleBtn.addEventListener('click', () => {
  cPwd.type = cPwd.type === 'password' ? 'text' : 'password';
  toggleBtn.textContent = cPwd.type === 'password' ? '顯示密碼' : '遮蔽密碼';
  syncPwd();
});
cPwd.addEventListener('input', syncPwd);
syncPwd();
