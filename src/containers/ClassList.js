import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCourse } from '../actions/index';

class Classes extends Component{
    renderList(){
        return this.props.courses.map(course => {
            const cn =
                this.props.activeCourse &&
                this.props.activeCourse.course.code === course.code
                    ? "collection-item active center"
                    : "collection-item center"
            return (
                //This checks number of sections if 0 it wont render
                course.nrOfSections !== 0 ?
                <li key={course.code} 
                    className= {cn}
                    onClick={() => this.props.selectCourse(course,(this.props.prof), this.props.professors)}>
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
        activeCourse: state.selectCourse,
        prof: state.selectProf,
        professors: state.profs
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectCourse: selectCourse }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Classes);