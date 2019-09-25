import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectClass } from '../actions/index';

class Classes extends Component{
    renderList(){
        return this.props.courses.map(course => {
            return (
                <li key={course.code} className="collection-item">
                    CS{course.code}<br />
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
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectClass: selectClass }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Classes);