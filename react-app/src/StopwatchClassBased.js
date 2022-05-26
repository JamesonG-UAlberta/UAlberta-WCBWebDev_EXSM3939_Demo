import './App.css';
import React from 'react';

class StopwatchClassBased extends React.Component {
    constructor() {
        super();
        this.state = {
            seconds: 0,
            timer: undefined
        };
    }

    render() {
        return (
            <div>
                <p>{Math.floor(this.state.seconds/3600)}:{Math.floor((this.state.seconds%3600)/60)}:{this.state.seconds%60}</p>
                <button onClick={() => {
                    this.setState({ 
                        timer: setInterval(() => {
                            this.setState({
                                seconds: this.state.seconds + 1}
                            );
                        }, 1000)
                    });
                }}>Start</button>
    
                <button onClick={() => {
                    clearInterval(this.state.timer);
                }}>Stop</button>
            </div>
        );
    }

}

export default StopwatchClassBased;