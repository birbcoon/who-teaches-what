import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectCourse } from '../actions/index';

class Classes extends Component{
    renderList(){
        return this.props.courses.map(course => {
            const cn =
                this.props.action &&
                this.props.action.code === course.code
                    ? "collection-item active center"
                    : "collection-item center"
            return (
                <li key={course.code} 
                    className= {cn}
                    onClick={() => this.props.selectCourse(course)}>
                    <h5>CS {course.code}</h5><br />
                    {course.name}<br />
                    Credit hours: {course.creditHours}<br />
                    Sections Offered: {course.nrOfSections}
                </li>
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
        action: state.action
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectCourse: selectCourse }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Classes);