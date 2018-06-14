const [ up, down ] = document.querySelectorAll('button');
const output = document.querySelector('h1 > span');

const increment = () => output.textContent = +output.textContent + 1;
const decrement = () => output.textContent = +output.textContent - 1;

up.addEventListener('click', increment);
down.addEventListener('click', decrement);
