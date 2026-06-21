// Source notes: notes/270-布局標籤/01-html5-語意化布局標籤.md
(function () {
  "use strict";

  var q1 = document.getElementById("q1"); // 能否獨立成完整內容
  var q2 = document.getElementById("q2"); // 是否同一主題下的有標題小節
  var reason = document.getElementById("flowReason");
  var tags = {
    article: document.querySelector('.result-tag[data-tag="article"]'),
    section: document.querySelector('.result-tag[data-tag="section"]'),
    div: document.querySelector('.result-tag[data-tag="div"]')
  };

  function clearActive() {
    Object.keys(tags).forEach(function (k) {
      tags[k].classList.remove("active");
    });
  }

  function update() {
    clearActive();
    // 依 notes 的判斷順序：先 article，再 section，否則 div
    if (q1.checked) {
      tags.article.classList.add("active");
      reason.textContent =
        "這塊內容能獨立理解，優先考慮 <article>。（若它又被放進更大的文章裡，仍可作為其中一篇獨立內容。）";
    } else if (q2.checked) {
      tags.section.classList.add("active");
      reason.textContent =
        "不是獨立完整內容，但屬於同一主題下、可加標題的分段，使用 <section>。";
    } else {
      tags.div.classList.add("active");
      reason.textContent =
        "既不獨立、也不是有主題的分段，只是排版或分組，使用沒有語意的 <div>。";
    }
  }

  q1.addEventListener("change", update);
  q2.addEventListener("change", update);

  update(); // 初始顯示 div 結果
})();
