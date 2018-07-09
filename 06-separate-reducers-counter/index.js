const output = document.querySelector('#root');


const createStore = (state, reducer) => ({
    state,
    subscriptions: [],
    getState(){
        return this.state;
    },
    dispatch(action){
        const newState = reducer(this.state, action);

        this.state = newState;

        this.subscriptions.forEach(listener => listener());
    },
    subscribe(listener){
        this.subscriptions.push(listener);
    }
});

const counterReducer = (state, action) => {
    switch(action){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(0, counterReducer);

const increment = () => setTimeout(
    () => store.dispatch('INCREMENT'),
    5000
);

const decrement = () => store.dispatch('DECREMENT');

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
