import React, { Component } from 'react';

class GreetUser extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userName: props.name
        }
    }
    

    render() {
        return (
            <p>Hello, {this.state.userName}!</p>
        );
    }
}

export default GreetUser;