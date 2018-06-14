const output = document.querySelector('#root');

const increment = count => () => render(count + 1);
const decrement = count => () => render(count - 1);

class ExcitedCounter{
    constructor(){
        this.clicks = 0;
    }

    onClick(count){
        this.clicks++;

        render(count);
    }

    render(count){
        const counter = document.createElement('h1');

        counter.style = `color: rgb(${this.clicks * 10}, 0, 0)`;
        counter.textContent = `The Count is: ${count}`;

        counter.addEventListener(
            'click',
            () => this.onClick(count)
        );

        return counter;
    }
}

const counter = new ExcitedCounter();
const Counter = counter.render.bind(counter);

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
