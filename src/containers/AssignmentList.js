import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCourse, selectProfessor } from '../actions/index';

class Assignments extends Component{
    renderList(){
        console.log(this.props.assignments)
        if (this.props.assignments !== null){
            return this.props.assignments.map(assignment => {
                const cn = "collection-item center"
                return (
                    <li key={assignment.course.code} 
                        className= {cn}
                        >
                        <h5>CS {assignment.course.code}</h5><br />
                        {assignment.course.name}<br />
                        Credit hours: {assignment.course.creditHours}<br />
                        Sections Offered: {assignment.course.nrOfSections}
                    </li>
                )  
            })
        }
    }
    render() {
        return <ul className="collection">{this.renderList()}</ul>
    }

} 

function mapStateToProps(state) {
    return {
        courses: state.courses,
        activeCourse: state.selectCourse,
        prof: state.selectProf,
        assignments: state.assignments
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectCourse: selectCourse, selectProfessor: selectProfessor }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Assignments);