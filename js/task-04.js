let counterValue = 0;
const btn = document.getElementsByTagName('button');
const spanForValue = document.querySelector('#value');

const btnClickHandler = event => {
  const { dataset } = event.target;

  if (dataset.action === 'increment') {
    counterValue++;
  } else {
    counterValue--;
  }
  spanForValue.innerHTML = counterValue;
};

Array.from(btn).forEach(btn => btn.addEventListener('click', btnClickHandler));
