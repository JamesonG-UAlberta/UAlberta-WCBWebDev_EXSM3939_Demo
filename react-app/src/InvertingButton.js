import './App.css';
import React from 'react';

class InvertingButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            changedColour: false
        };

        this.handleClick = this.handleClick.bind();
    }

    handleClick() {
        this.setState(oldState => ({
            changedColour: !oldState.changedColour
        }));
    }

    render() {
        return (<button className={this.state.changedColour?'changed':''} onClick={this.handleClick}>Click Me!</button>);
    }
}

export default InvertingButton;