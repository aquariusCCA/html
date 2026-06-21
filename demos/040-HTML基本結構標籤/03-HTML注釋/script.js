const scenarios = {
  normal: {
    code: `<!-- 網站主導覽 -->
<nav>
  <a href="/">首頁</a>
  <a href="/about.html">關於我們</a>
</nav>`,
    preview: `
      <nav>
        <a href="#">首頁</a>
        <a href="#">關於我們</a>
      </nav>
      <p class="muted-box">畫面只顯示導覽連結，不顯示「網站主導覽」這段注釋。</p>
    `,
    observation: "注釋可以說明附近程式碼的用途，但它本身不是頁面內容。"
  },
  commentedHeading: {
    code: `<!-- <h1>這個標題不會顯示</h1> -->
<p>這段文字仍會顯示。</p>`,
    preview: `
      <p>這段文字仍會顯示。</p>
      <p class="muted-box">被放進注釋的 h1 不會被當成真正標題渲染。</p>
    `,
    observation: "注釋裡的 HTML 不會執行。有時可暫時停用小段 HTML，但不適合長期堆放大量不用的程式碼。"
  },
  missingEnd: {
    code: `<!-- 主要內容區
<main>
  <h1>文章標題</h1>
</main>`,
    preview: `
      <div class="muted-box">後面的 main 與 h1 都被注釋吃掉，因此頁面主要內容消失。</div>
    `,
    observation: "注釋必須以 --> 結束。忘記結束時，後續內容可能都被當成注釋。"
  },
  sensitive: {
    code: `<!-- 測試帳號：admin / 密碼：123456 -->
<p>這段文字會顯示在頁面上。</p>`,
    preview: `
      <p>這段文字會顯示在頁面上。</p>
      <div class="warning-box">警示：注釋不顯示在畫面上，不代表不會出現在原始碼中。</div>
    `,
    observation: "不要把密碼、金鑰、內部帳號或未公開資料放進 HTML 注釋。"
  }
};

const code = document.querySelector("#html-code");
const preview = document.querySelector("#preview");
const observation = document.querySelector("#observation-text");
const buttons = document.querySelectorAll(".scenario-button");

function renderScenario(name) {
  const data = scenarios[name];
  code.textContent = data.code;
  preview.innerHTML = data.preview;
  observation.textContent = data.observation;

  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.scenario === name);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => renderScenario(button.dataset.scenario));
});

renderScenario("normal");
