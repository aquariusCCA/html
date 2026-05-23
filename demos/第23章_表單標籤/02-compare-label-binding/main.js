const focusOutput = document.querySelector('#focus-output');

document.addEventListener('focusin', (event) => {
  const target = event.target;

  if (target instanceof HTMLInputElement) {
    const label = target.id
      ? document.querySelector(`label[for="${target.id}"]`)?.textContent.trim()
      : target.closest('label')?.textContent.trim();

    focusOutput.textContent = `目前聚焦欄位：${label || target.name || '未命名欄位'}`;
  }
});
