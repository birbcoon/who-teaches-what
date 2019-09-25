import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCourse, selectProfessor } from '../actions/index';

class Classes extends Component{
    renderList(){
        return this.props.courses.map(course => {
            const cn =
                this.props.action &&
                this.props.action.code === course.code
                    ? "collection-item active center"
                    : "collection-item center"
            return (
                course.nrOfSections !== 0 ?
                <li key={course.code} 
                    className= {cn}
                    onClick={() => this.props.selectCourse(course,this.props.prof)}>
                    <h5>CS {course.code}</h5><br />
                    {course.name}<br />
                    Credit hours: {course.creditHours}<br />
                    Sections Offered: {course.nrOfSections}
                </li> : null
            )
        })
    }
    render() {
        return <ul className="collection">{this.renderList()}</ul>
    }

} 

function mapStateToProps(state) {
    return {
        courses: state.courses,
        action: state.action,
        prof: state.selectProf
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectCourse: selectCourse, selectProfessor: selectProfessor }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Classes);