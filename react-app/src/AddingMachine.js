import React, { Component } from 'react';

class AddingMachine extends Component {
    constructor(props) {
        super(props);
        
        // State reflects any variables that have a meaningful impact on what gets rendered.
        this.state = {
            total: 0
        };

        // Any time a method is going to be associated with an event (onClick, onChange, etc), you need to bind it in the constructor:
        this.handleAddition = this.handleAddition.bind(this);
    }
    
    handleAddition(event) {
        // Any time we modify a state property and we need to reference the current state, it needs to be passed into the state as a property.
        // This prevents us from accidentally setting it multiple times, because what gets passed in is fixed for the duration of the method.
        this.setState((oldState) => {
            return {
                total: oldState.total + Number(event.target.innerText)
            };
        });
    }

    render() {
        return (
            <div className='flex'>
                <p>{this.state.total}</p>
                <button onClick={this.handleAddition}>1</button>
                <button onClick={this.handleAddition}>10</button>
                <button onClick={this.handleAddition}>100</button>
            </div>
        );
    }
}

export default AddingMachine;