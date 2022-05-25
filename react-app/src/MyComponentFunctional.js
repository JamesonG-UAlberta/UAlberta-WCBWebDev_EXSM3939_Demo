import './App.css';
import React, { useState, useEffect } from 'react';


// Functional components are more streamlined but allow less lifecycle control.
function MyComponentFunctional() {

    // State properties are initialized using useState in functional components.
    const [name, setName] = useState("World");

    
   function updateStateProp() {
        // State properties are updated using their individual methods in functional components.
        setName("Bob");
   }

    // Called immediately following rendering (the component's return).
    // Similar to componentDidMount and componentDidUpdate.
    useEffect(() => {

        // Called when the component unmounts.
        // Similar to componentWillUnmount.
        return () => {

        };
    });

    // There is no "nice" way to do shouldComponentUpdate or componentDidCatch in functional components.

    function clickedButton() {
        setName(document.querySelector("#functionalName").value);
    }

    return (
        <main>
            <h2>Functional Component!</h2>
            <p>Hello, {name}!</p>
            <input id="functionalName" type="text"></input>
            <button id="functionalButton" onClick={clickedButton}>Click Me!</button>
        </main>
    );
}

export default MyComponentFunctional;
