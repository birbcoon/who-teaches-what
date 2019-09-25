import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProfessor, selectCourse, selectAssignment } from '../actions/index';


class Professors extends Component {
    renderList(){
        return this.props.profs.map(prof => {
            return (
                <li key={prof.name} className="list-group-item">
                    {prof.name}
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
        profs: state.profs
    };
}

/*function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}*/
export default connect(mapStateToProps/*(, mapDispatchToProps*/)(Professors);