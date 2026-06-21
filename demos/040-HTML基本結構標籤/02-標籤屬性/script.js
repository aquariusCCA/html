const toggle = document.querySelector("#disabled-toggle");
const input = document.querySelector("#sample-input");
const inputCode = document.querySelector("#input-code");

function updateDisabledState() {
  input.disabled = toggle.checked;
  inputCode.textContent = toggle.checked
    ? '<input type="text" name="username" disabled>'
    : '<input type="text" name="username">';
}

toggle.addEventListener("change", updateDisabledState);
updateDisabledState();
