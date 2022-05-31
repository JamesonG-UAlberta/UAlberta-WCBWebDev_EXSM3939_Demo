import React, { Component } from 'react';

class MadLib extends Component {
    constructor(props) {
        super(props);
        /*
        this.state = {
            name: props.name,
            place: props.place,
            food: props.food,
            verb: props.verb,
            feeling: props.feeling
        }
        */

        // A little bit better organization in case we were to have other state properties.
        this.state = {
            storyComponents: {
                name: props.name,
                place: props.place,
                food: props.food,
                verb: props.verb,
                feeling: props.feeling
            }
        }
    }
    

    render() {
        return (
            <div>
                <p>{`${this.state.storyComponents.name} was ${this.state.storyComponents.verb} yesterday in ${this.state.storyComponents.place}. They were feeling ${this.state.storyComponents.feeling} so they ate some ${this.state.storyComponents.food}.`}</p>
            </div>
        );
    }
}

export default MadLib;