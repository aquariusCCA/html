const wrongForm = document.querySelector('#wrong-form');
const correctForm = document.querySelector('#correct-form');
const sendCodeButton = document.querySelector('#send-code');
const statusText = document.querySelector('#status');
const output = document.querySelector('#output');

function formDataToText(formData) {
  const entries = Array.from(formData.entries());

  if (entries.length === 0) {
    return '沒有任何可提交欄位。';
  }

  return entries.map(([name, value]) => `${name} = ${value}`).join('\n');
}

function showSubmitResult(form, title) {
  const formData = new FormData(form);

  statusText.textContent = title;
  output.textContent = [
    'FormData 內容：',
    formDataToText(formData)
  ].join('\n');
}

wrongForm.addEventListener('submit', (event) => {
  event.preventDefault();
  showSubmitResult(wrongForm, '錯誤表單被提交了。注意：點擊「取得驗證碼」也觸發提交。');
});

correctForm.addEventListener('submit', (event) => {
  event.preventDefault();
  showSubmitResult(correctForm, '正確表單送出。');
});

sendCodeButton.addEventListener('click', () => {
  statusText.textContent = '正確表單：取得驗證碼按鈕只是普通按鈕，沒有提交表單。';
  output.textContent = '因為按鈕設定了 type="button"，所以不會觸發 submit。';
});
