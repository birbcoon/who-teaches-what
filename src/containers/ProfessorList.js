import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectClass } from '../actions/index';


class Professors extends Component {
    renderList(){
        return this.props.profs.map(prof => {
            return (
                <li key={prof.name} className="collection-item active">
                    {prof.name}<br />
                    Number of credit hours: {prof.nrOfCreditHours} <br />
                    Number of classes: {prof.nrOfClasses}
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
        profs: state.profs
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectClass: selectClass }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Professors);