import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectAssignment } from '../actions/index';

class Assign extends Component{
    renderList(){
        return this.props.assignments.map(assignment => {
            const cn = "collection-item center"
            return (assignment.professor !== null ?
                //key is the index of the list so topmost object has a key of 0
                //next one has a key of 1, then 2, then 3, and so on
                <li key={this.props.assignments.indexOf(assignment)}
                    className= {cn}
                    onClick={() => this.props.selectAssignment(assignment)}>
                    <h5>{assignment.professor.name}</h5><br />
                    {assignment.course.name}<br />
                </li>:null
            )
        })
    }
    render() {
        return <ul className="collection">{this.renderList()}</ul>
    }

} 

function mapStateToProps(state) {
    return {
        assignments: state.assignments
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectAssignment: selectAssignment }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Assign);