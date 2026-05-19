const focusNoteButton = document.querySelector("#focus-note-button");
const focusNote = document.querySelector("#focus-note");
const helpButton = document.querySelector("#help-button");
const accesskeyMessage = document.querySelector("#accesskey-message");
const dragChips = document.querySelectorAll(".drag-chip");
const dropTarget = document.querySelector("#drop-target");
const dragMessage = document.querySelector("#drag-message");

focusNoteButton.addEventListener("click", () => {
  focusNote.focus();
});

helpButton.addEventListener("click", () => {
  accesskeyMessage.hidden = false;
});

dragChips.forEach((chip) => {
  chip.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", chip.id);
    chip.classList.add("is-dragging");
  });

  chip.addEventListener("dragend", () => {
    chip.classList.remove("is-dragging");
  });
});

dropTarget.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropTarget.classList.add("is-over");
});

dropTarget.addEventListener("dragleave", () => {
  dropTarget.classList.remove("is-over");
});

dropTarget.addEventListener("drop", (event) => {
  event.preventDefault();
  dropTarget.classList.remove("is-over");

  const chipId = event.dataTransfer.getData("text/plain");
  const chip = document.getElementById(chipId);

  if (chip) {
    dropTarget.append(chip);
    dragMessage.textContent = `已拖放：${chip.textContent.trim()}`;
  }
});

