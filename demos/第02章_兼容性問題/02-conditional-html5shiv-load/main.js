const browserInputs = document.querySelectorAll('input[name="browser"]');
const alwaysLoadResult = document.querySelector('#always-load-result');
const conditionalLoadResult = document.querySelector('#conditional-load-result');
const browserNote = document.querySelector('#browser-note');

const browserNotes = {
  modern: '現代瀏覽器會把 IE 條件註解視為普通註解，因此不會執行裡面的 script。',
  ie8: 'IE8 符合 lt IE 9，所以會執行條件註解中的 html5shiv 載入語句。',
  ie10: 'notes 特別提醒 IE10 不支援條件註解，因此不能把它視為會執行這段語法的瀏覽器。'
};

function setStatus(element, isLoaded, text) {
  element.textContent = text;
  element.classList.toggle('is-loaded', isLoaded);
  element.classList.toggle('is-skipped', !isLoaded);
}

function renderResult() {
  const selected = document.querySelector('input[name="browser"]:checked').value;
  const conditionalLoads = selected === 'ie8';

  setStatus(alwaysLoadResult, true, '會載入 html5shiv。這就是常見錯誤：不分瀏覽器都載入。');
  setStatus(
    conditionalLoadResult,
    conditionalLoads,
    conditionalLoads
      ? '會載入 html5shiv，因為 IE8 低於 IE9。'
      : '不會載入 html5shiv，避免對不需要的瀏覽器增加負擔。'
  );

  browserNote.textContent = browserNotes[selected];
}

browserInputs.forEach((input) => {
  input.addEventListener('change', renderResult);
});

renderResult();
