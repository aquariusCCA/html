const saveButton = document.querySelector('#saveButton');
const statusMessage = document.querySelector('#statusMessage');

saveButton.addEventListener('click', () => {
  statusMessage.textContent = '已執行按鈕動作：這是 button 適合處理的頁面內互動。';
});
