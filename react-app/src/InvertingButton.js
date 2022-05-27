import './App.css';
import React from 'react';

class InvertingButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            changedColour: false
        };
    }

    render() {
        return (<button>Click Me!</button>);
    }
}

export default InvertingButton;