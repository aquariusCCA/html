const videoSrc = "assets/video-tags-file-001-7239dd.mp4";

const modes = {
  content: {
    title: "一般內容影片",
    html: `<video src="${videoSrc}" controls width="640" poster="">
</video>`,
    lesson: "內容型影片通常要保留 controls，讓使用者能自行播放、暫停與調整音量。",
    render() {
      return `
        <div class="video-frame">
          <video src="${videoSrc}" controls preload="metadata"></video>
        </div>
        <p class="status-line">這支影片是主要內容，所以畫面上有瀏覽器內建控制列。</p>
      `;
    }
  },
  background: {
    title: "背景影片常見寫法",
    html: `<video src="${videoSrc}" autoplay muted loop>
</video>`,
    lesson: "背景影片常搭配 autoplay、muted、loop，並且通常不顯示 controls。autoplay 仍可能受瀏覽器策略影響。",
    render() {
      return `
        <div class="background-stage">
          <video src="${videoSrc}" autoplay muted loop playsinline></video>
          <div class="background-copy">
            <h3>背景影片</h3>
            <p>靜音、循環播放，用來支撐視覺情境，不取代主要內容。</p>
          </div>
        </div>
        <p class="status-line">若沒有 muted，許多瀏覽器會阻止自動播放。</p>
      `;
    }
  },
  source: {
    title: "使用 source 提供多格式來源",
    html: `<video controls>
  <source src="${videoSrc}" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  您的瀏覽器不支援 video 標籤。
</video>`,
    lesson: "多個 source 讓瀏覽器從上到下選擇第一個支援且可播放的來源。此 demo 只有實際 MP4 檔，WebM 行是語法示意。",
    render() {
      return `
        <div class="source-flow">
          <div class="source-step"><strong>1. 建立播放器</strong>瀏覽器看到 video controls，建立可操作的播放器。</div>
          <div class="source-step"><strong>2. 檢查 MP4</strong>若支援 video/mp4 且檔案可用，就選用第一個來源。</div>
          <div class="source-step"><strong>3. 嘗試下一個來源</strong>第一個來源不可用時，才會繼續檢查 WebM 等後續 source。</div>
          <div class="source-step"><strong>4. 備用文字</strong>主要給不支援 video 標籤的瀏覽器，不等於完整錯誤處理。</div>
        </div>
        <div class="video-frame">
          <video controls preload="metadata">
            <source src="${videoSrc}" type="video/mp4">
            您的瀏覽器不支援 video 標籤。
          </video>
        </div>
      `;
    }
  },
  mistakes: {
    title: "常見錯誤總覽",
    html: `<video src="lesson.mp4">
</video>

<video src="intro.mp4" autoplay>
</video>

<video src="movie.webm" controls>
</video>`,
    lesson: "這些寫法不一定是語法錯誤，但會讓使用者難以操作、讓自動播放不可靠，或降低格式相容性。",
    render() {
      return `
        <div class="source-flow">
          <div class="source-step"><strong>忘記 controls</strong>一般影片可能看不到播放按鈕。</div>
          <div class="source-step"><strong>只寫 autoplay</strong>未靜音的自動播放常被瀏覽器限制。</div>
          <div class="source-step"><strong>只提供單一格式</strong>重要影片較容易遇到相容性問題。</div>
          <div class="source-step"><strong>誤解備用文字</strong>備用文字不是所有載入失敗的提示。</div>
        </div>
      `;
    }
  }
};

const mistakes = {
  controls: {
    wrong: `<video src="lesson.mp4">
</video>`,
    right: `<video src="lesson.mp4" controls>
</video>`,
    note: "一般教學影片或產品影片是主要內容，應讓使用者清楚看到播放控制。"
  },
  autoplay: {
    wrong: `<video src="intro.mp4" autoplay>
</video>`,
    right: `<video src="intro.mp4" autoplay muted loop>
</video>`,
    note: "現代瀏覽器常限制有聲音的自動播放。背景影片通常搭配 muted 與 loop。"
  },
  format: {
    wrong: `<video src="movie.webm" controls>
</video>`,
    right: `<video controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
</video>`,
    note: "重要影片可提供多種格式，讓瀏覽器選擇第一個可播放的來源。"
  },
  fallback: {
    wrong: `<video controls>
  <source src="movie.mp4" type="video/mp4">
  您的瀏覽器不支援 video 標籤。
</video>`,
    right: `<video controls>
  <source src="movie.mp4" type="video/mp4">
  您的瀏覽器不支援 video 標籤。
</video>
<!-- 檔案不存在或播放錯誤需另行處理。 -->`,
    note: "備用文字主要針對不支援 video 標籤的瀏覽器，不保證在影片檔案壞掉時顯示。"
  }
};

const preview = document.querySelector("#preview");
const title = document.querySelector("#mode-title");
const codeOutput = document.querySelector("#code-output");
const lessonOutput = document.querySelector("#lesson-output");
const wrongCode = document.querySelector("#wrong-code");
const rightCode = document.querySelector("#right-code");
const mistakeNote = document.querySelector("#mistake-note");

function setMode(modeName) {
  const mode = modes[modeName];
  title.textContent = mode.title;
  preview.innerHTML = mode.render();
  codeOutput.textContent = mode.html;
  lessonOutput.textContent = mode.lesson;

  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === modeName);
  });
}

function setMistake(mistakeName) {
  const mistake = mistakes[mistakeName];
  wrongCode.textContent = mistake.wrong;
  rightCode.textContent = mistake.right;
  mistakeNote.textContent = mistake.note;

  document.querySelectorAll(".mistake-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mistake === mistakeName);
  });
}

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

document.querySelectorAll(".mistake-button").forEach((button) => {
  button.addEventListener("click", () => setMistake(button.dataset.mistake));
});

setMode("content");
setMistake("controls");
