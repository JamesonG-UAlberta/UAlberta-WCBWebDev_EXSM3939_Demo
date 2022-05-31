import './App.css';
import React from 'react';

class InvertingButton extends React.Component {
    constructor(props) {
        super(props);

        // Initialize the state by defining the state properties, and giving them a value. 
        this.state = {
            changedColour: false
        };

        // Bind any named methods to be used with event listeners.
        this.handleClick = this.handleClick.bind();
    }

    handleClick() {
        // Technically we should be using a referencing setState here, but for a simple implementation like this I opted to keep it more readable.
        if (this.state.changedColour)
        {
            this.setState({
                changedColour: false
            });
        }
        else
        {
            this.setState({
                changedColour: true
            });
        }
    }

    render() {
        return (<button className={this.state.changedColour?'changed':''} onClick={this.handleClick}>Click Me!</button>);
    }
}

export default InvertingButton;