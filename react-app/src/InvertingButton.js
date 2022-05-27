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
        return (<button className={this.state.changedColour?'changed':''} onClick={(() => {
            // Flip from true to false, or false to true.
            this.setState(oldState => ({
                changedColour: !oldState.changedColour
            }));
        }).bind()}>Click Me!</button>);
    }
}

export default InvertingButton;