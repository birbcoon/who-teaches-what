import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectClass } from '../actions/index';

class Classes extends Component{
    renderList(){
        return this.props.courses.map(course => {
            return (
                <li key={course.code} className="list-group-item list-group-item-secondary">
                    {course.code}
                </li>
            )
        })
    }
    render() {
        return <ul className="list-group">{this.renderList()}</ul>
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