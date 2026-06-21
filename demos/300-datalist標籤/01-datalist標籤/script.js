// Source notes: notes/300-datalist標籤/01-datalist標籤.md
// JS 僅用於輔助觀察：顯示目前輸入值、即時送出值、切換 list 屬性以示範錯誤與修正。
// datalist 的建議行為本身由瀏覽器原生提供，JS 不取代它。

// 區塊一：顯示目前輸入值，並判斷是否在建議清單內
(function () {
  const input = document.getElementById('browser');
  const valueOut = document.getElementById('browser-value');
  const inListOut = document.getElementById('browser-in-list');
  const options = Array.from(
    document.querySelectorAll('#browsers option')
  ).map((opt) => opt.value);

  function update() {
    const v = input.value;
    valueOut.textContent = v === '' ? '（空）' : v;

    if (v === '') {
      inListOut.textContent = '—';
      inListOut.className = 'badge';
      return;
    }
    const inList = options.includes(v);
    inListOut.textContent = inList ? '是（在建議清單內）' : '否（清單外，仍可輸入）';
    inListOut.className = inList ? 'badge badge-good' : 'badge badge-bad';
  }

  input.addEventListener('input', update);
  update();
})();

// 區塊二：datalist vs select，攔截送出並顯示會送出的值
(function () {
  document.querySelectorAll('.mini-form').forEach((form) => {
    const outId = form.dataset.output;
    const out = document.getElementById(outId);
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // 阻止實際送出，純展示
      const field = form.querySelector('[name="browser"]');
      const v = field.value;
      out.textContent = v === '' ? '（空值）' : v;
    });
  });
})();

// 區塊三：切換 input 的 list 屬性，示範 list/id 對不上與修正
(function () {
  const input = document.getElementById('err-input');
  const button = document.getElementById('toggle-list');
  const attrOut = document.getElementById('list-attr');
  const statusOut = document.getElementById('list-status');
  const codeState = document.getElementById('code-state');

  const WRONG = 'wrong-list';
  const RIGHT = 'real-list'; // 與 datalist 的 id 一致

  function render(state) {
    const listValue = state === 'wrong' ? WRONG : RIGHT;
    input.setAttribute('list', listValue);
    attrOut.textContent = listValue;

    if (state === 'wrong') {
      statusOut.textContent = '對不上，無建議';
      statusOut.className = 'badge badge-bad';
      button.textContent = '目前：list="wrong-list"（錯，點我修正）';
      button.dataset.state = 'wrong';
    } else {
      statusOut.textContent = '對上了，會出現建議';
      statusOut.className = 'badge badge-good';
      button.textContent = '目前：list="real-list"（對，點我改回錯誤）';
      button.dataset.state = 'right';
    }

    codeState.textContent =
      '<input id="err-input" type="text" list="' + listValue + '">\n' +
      '<datalist id="real-list">\n' +
      '  <option value="台北"></option>\n' +
      '  <option value="台中"></option>\n' +
      '  <option value="高雄"></option>\n' +
      '</datalist>';
  }

  button.addEventListener('click', () => {
    render(button.dataset.state === 'wrong' ? 'right' : 'wrong');
  });

  render('wrong');
})();
