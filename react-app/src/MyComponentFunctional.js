import './App.css';
import React, { useState, useEffect } from 'react';


// Functional components are more streamlined but allow less lifecycle control.
function MyComponentFunctional() {

    // State properties are set using useState in functional components.
    const [testState, setTestState] = useState(false);
    const [name, setName] = useState("James");
    const [count, setCount] = useState(10);

    // State properties are updated using their individual methods in functional components.
    //setName("Bob");

    // Called immediately following rendering (the component's return).
    // Similar to componentDidMount and componentDidUpdate.
    useEffect(() => {

        // Called when the component unmounts.
        // Similar to componentWillUnmount.
        return () => {

        };
    });

    // There is no "nice" way to do shouldComponentUpdate or componentDidCatch in functional components.

    return (
        <main>
            <h2>Functional Component!</h2>
            <p>Let's learn React!</p>
        </main>
    );
}

export default MyComponentFunctional;
