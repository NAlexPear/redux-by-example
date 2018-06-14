import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Counter = props =>
    <h1>The Count is: { props.count }</h1>

const Up = props =>
    <button { ...props }>+</button>

const Down = props =>
    <button { ...props }>-</button>

class App extends Component {
    constructor(props){
        super(props)
        this.state = { count: 0 };
    }

    increment(){
        const { count } = this.state;

        this.setState({
            count: count + 1
        });
    }

    decrement(){
        const { count } = this.state;

        this.setState({
            count: count - 1
        });
    }

    render(){
        const { count } = this.state

        return (
            <React.Fragment >
                <Counter count={ count } />
                <Up onClick={ this.increment.bind(this) }/>
                <Down onClick={ this.decrement.bind(this) }/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
