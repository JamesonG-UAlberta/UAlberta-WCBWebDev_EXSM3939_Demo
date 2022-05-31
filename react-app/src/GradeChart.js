import React, { Component } from 'react';

class GradeChart extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            grades: []
        }

        this.handleAddGrade = this.handleAddGrade.bind(this);
    }
    
    handleAddGrade() {
        this.setState(oldState => {
            return {
                grades: [...oldState.grades, {course: this.courseInput.value, grade: Number(this.gradeInput.value)}]
            }

            /*
            Spread operator for "push":
            ...[1, 2, 3, 4], 5

            Not: [[1, 2, 3, 4], 5]
            Yes: [1, 2, 3, 4, 5]
            */
        });
    }

    render() {
        return (
            <div>
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.grades.map(x => 
                        <tr>
                            <td>{x.course}</td>
                            <td>{Number(x.grade).toFixed(1)}</td>
                        </tr>
                    )}
                    <tr>
                        <th>Average:</th>
                        {/* This usage of reduce() is just to get a sum of the grades because JS doesn't have a sum() method -__- */}
                        <td>{this.state.grades.length==0?'No Grades':Number(this.state.grades.map(x => x.grade).reduce((a,b) => a+b, 0)/this.state.grades.length).toFixed(1)}</td>
                    </tr>
                </tbody>
            </table>
            <fieldset>
                <legend>Add Grades</legend>
                <input type="text" placeholder="Course" ref={thisNode => this.courseInput = thisNode}></input>
                <input type="text" placeholder="Grade" ref={thisNode => this.gradeInput = thisNode}></input>
                <button onClick={this.handleAddGrade}>Add</button>
            </fieldset>
            </div>
        );
    }
}

export default GradeChart;