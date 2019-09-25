import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProfessor, selectCourse, selectAssignment } from '../actions/index';

class Classes extends Component{
    renderList(){
        return this.props.courses.map(course => {
            return (
                <li key={course.code} className="list-group-item">
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

/*function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}*/
export default connect(mapStateToProps/*, mapDispatchToProps)*/)(Classes);