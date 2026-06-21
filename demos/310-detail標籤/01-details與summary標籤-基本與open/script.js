// 僅用於「輔助觀察」：監聽 details 的原生 toggle 事件，
// 把目前的展開/收合狀態顯示成徽章。展開收合本身是瀏覽器原生行為，不靠 JS。
(function () {
  var details = document.getElementById("basicDetails");
  var badge = document.getElementById("stateBadge");
  if (!details || !badge) return;

  function render() {
    if (details.open) {
      badge.textContent = "展開";
      badge.className = "badge badge--open";
    } else {
      badge.textContent = "收合";
      badge.className = "badge badge--closed";
    }
  }

  details.addEventListener("toggle", render);
  render(); // 初始化顯示
})();
