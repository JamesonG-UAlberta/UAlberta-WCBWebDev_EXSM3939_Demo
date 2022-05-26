import './App.css';
import React from 'react';

class StopwatchClassBased extends React.Component {
    constructor() {
        super();
        // Example 1 Start
        this.state = {
            seconds: 0,
            timer: undefined
        };
        // Example 1 End

    }

    render() {
        return (
            <div>
                <p>{Math.floor(this.state.seconds/3600)}:{Math.floor((this.state.seconds%3600)/60)}:{this.state.seconds%60}</p>
                <button onClick={() => {
                    // Example 2 Start
                    this.setState({ 
                        timer: setInterval(() => {
                            this.setState({
                                seconds: this.state.seconds + 1}
                            );
                        }, 1000)
                    });
                    // Example 2 End
                }}>Start</button>
    
                <button onClick={() => {
                    clearInterval(this.state.timer);
                }}>Stop</button>
            </div>
        );
    }

}

export default StopwatchClassBased;