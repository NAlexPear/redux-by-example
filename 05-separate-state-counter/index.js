const output = document.querySelector('#root');

const createStore = state => ({
    state,
    subscriptions: [],
    getState(){
        return this.state;
    },
    dispatch(reducer){
        const newState = reducer(this.getState());

        this.state = newState;

        this.subscriptions.forEach(listener => listener());
    },
    subscribe(listener){
        this.subscriptions.push(listener);
    }
});

const store = createStore(0);

const increment = () => setTimeout(
    () => store.dispatch(count => count + 1),
    2000
);

const decrement = () => store.dispatch(count => count - 1);

const Counter = count => {
    const counter = document.createElement('h1');

    counter.textContent = `The Count is: ${count}`;

    return counter;
};

const Up = () => {
    const button = document.createElement('button');

    button.textContent = '+';
    button.addEventListener('click', increment);

    return button;
};

const Down = () => {
    const button = document.createElement('button');

    button.textContent = '-';
    button.addEventListener('click', decrement);

    return button;
};

const render = () => {
    const count = store.getState();

    const elements = [ Counter, Up, Down ];

    output.innerHTML = '';

    elements.forEach(Element => {
        output.appendChild(Element(count));
    });
};

store.subscribe(render);

render();
