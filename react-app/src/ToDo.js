import './App.css';
import React from 'react';

/* 
To-Do To-Do's!
☑ 1. Using the method shown in the ColourThingy component, bind the text field to a state property, and clear it after adding an item.
2. Add a clear button.
3. Add a sort button (alphabetical).
4. Add checkboxes to each item.
5. Add a completed list, and when an item is checked off, move it to the completed list, then disable the checkbox.
6. Stop disabling the checkbox when moved, and allow the box to be unchecked to move it back to the pending list.
*/

class ToDo extends React.Component {
    constructor(props) {
        super(props);
        // Initialize state.
        this.state = {
            items: [],
            inputValue: ""
        }

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({
            inputValue: event.target.value
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {/* For each item in our items list, render a list item. */}
                    {this.state.items.map(x => <li>{x}</li>)}
                </ul>
                {/* Bind our input to a reference called toDoInput, allowing us to use it without a querySelector, etc.*/}
                <input type="text" value={this.state.inputValue} ref={thisNode => this.toDoInput = thisNode} onChange={this.handleInput}></input>
                <button onClick={(() => {
                    {/* 
                        When we click the button, overwrite the existing items array with the previous items plus the new item. 
                        You must treat state items as immutable. That means no append(), no pop(), no push().
                        That's because calling those methods does not trigger a refresh, as they do not call setState.

                        We can use the spread operator (...) to generate a new array including all the items from the old one, plus something else.
                    */}
                    if (this.toDoInput.value.trim() !== "")
                    {
                        this.setState(currentState => ({
                            items: [...currentState.items, this.toDoInput.value.trim()]
                        }));
                    }
                    this.setState({
                        inputValue: ""
                    });
                    this.toDoInput.focus();
                }).bind(this)}>Add Item</button>
            </div>
        );
    }

}
export default ToDo;