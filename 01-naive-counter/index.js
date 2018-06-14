// Brittle and markup-dependent DOM interactions
const [ up, down ] = document.querySelectorAll('button');
const output = document.querySelector('h1 > span');

// State-mutating events
const increment = () => output.textContent = +output.textContent + 1;
const decrement = () => output.textContent = +output.textContent - 1;

// global event handling
up.addEventListener('click', increment);
down.addEventListener('click', decrement);
