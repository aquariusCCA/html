const form = document.querySelector('#account-form');
const output = document.querySelector('#output');

function getFormDataLines(formData) {
  return Array.from(formData.entries()).map(([name, value]) => `${name} = ${value}`);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const lines = getFormDataLines(formData);

  output.textContent = [
    'FormData 內容：',
    lines.join('\n'),
    '',
    '觀察結論：',
    '- readonly 的 accountId 仍會提交。',
    '- disabled 的 currentPlan 不會提交。',
    '- fieldset disabled 裡的 noticeEmail、noticeSms 不會提交。'
  ].join('\n');
});

form.addEventListener('reset', () => {
  output.textContent = '表單已重置，尚未重新提交。';
});
