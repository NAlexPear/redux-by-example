const output = document.querySelector('#root');

const increment = count => () => render(count + 1);
const decrement = count => () => render(count - 1);

const Counter = count => {
    const counter = document.createElement('h1');

    counter.innerHTML = `The Count is: ${count}`;

    return counter;
};

const Up = count => {
    const button = document.createElement('button');

    button.textContent = '+';
    button.addEventListener('click', increment(count));

    return button;
};

const Down = count => {
    const button = document.createElement('button');

    button.textContent = '-';
    button.addEventListener('click', decrement(count));

    return button;
};

const render = count => {
    const elements = [ Counter, Up, Down ];

    output.innerHTML = '';

    elements.forEach(Element => {
        output.appendChild(Element(count));
    });
};

render(0);
