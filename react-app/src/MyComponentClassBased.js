import './App.css';
import React from 'react';


// Class based components allow you to have more control over the component lifecycle in a more familiar (in some cases) syntax.
class MyComponentClassBased extends React.Component {
    // -------------------------
    // Initial Component Setup (Once)
    // -------------------------

    // 1. Gets called on inital setup (prior to the initial render).
    constructor() {
        // The React.Component constructor MUST be called.
        super();

        // State properties are set using setState in class-based components.
        this.setState({
            testState: false,
            name: "James",
            count: 10
        });

        // State properties are updated using setState in class-based components.
        this.setState({
            name: "Bob"
        });
    }

    // 2. render gets called for the initial loading to the page.

    // 3. componentDidMount gets called on the initial render (after the render takes place).
    componentDidMount() {

    }

    // -------------------------
    // Component Refresh (Zero to Many Times)
    // -------------------------

    // 1. shouldComponentUpdate gets called once an update (or not) is determined for the component.
    shouldComponentUpdate() {

    }

    // 2. Render gets called every time the component "refreshes" in the browser (typically due to a state change).
    render() {
        return (
            <main>
                <h2>Class-Based Component!</h2>
                <p>Let's learn React!</p>
            </main>
        );
    }

    // 3. componentDidUpdate gets called after a successful "refresh".
    componentDidUpdate() {

    }

    // -------------------------
    // Component Destruction (Once, or Tab Closes)
    // -------------------------

    // 1. componentWillUnmount gets called immediately before the component is "destroyed", IE removed from the page.
    componentWillUnmount() {

    }


    // componentDidCatch runs if there's an exception.
    componentDidCatch () {

    }
}


export default MyComponentClassBased;
