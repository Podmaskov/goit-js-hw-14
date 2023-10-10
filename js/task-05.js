const ANONYMOUS = 'Anonymous';
const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

input.addEventListener('input', event => {
  if (!event.target.value.trim()) {
    nameOutput.textContent = ANONYMOUS;
    return;
  }
  nameOutput.textContent = event.target.value;
});
