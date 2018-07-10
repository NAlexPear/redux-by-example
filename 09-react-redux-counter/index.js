import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const counterReducer = (state, { type }) => {
    switch(type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(
    counterReducer,
    0,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
);

class App extends Component {
    render(){
        const {
            count,
            onIncrement,
            onDecrement,
        } = this.props;

        return (
            <div>
                <h1>{ `The Count is: ${ count }` }</h1>
                <button onClick={ onIncrement }>+</button>
                <button onClick={ onDecrement }>-</button>
            </div>
        )
    }
}

const mapStateToProps = count => ({ count });
const mapDispatchToProps = dispatch => ({
    onIncrement: () => setTimeout(
        () => dispatch({ 'type': 'INCREMENT' }),
        5000
    ),
    onDecrement: () => dispatch({ 'type': 'DECREMENT' })
});

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.querySelector('#root')
)
