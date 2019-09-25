import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectProfessor } from '../actions/index';


class Professors extends Component {
    renderList(){
        return this.props.profs.map(prof => {
            const cn =
                this.props.selectProf &&
                this.props.selectProf.name === prof.name
                    ? "collection-item active center"
                    : "collection-item center"
            return (
                <li key={prof.name} 
                    className={cn} 
                    onClick={() => this.props.selectProfessor(prof)}>
                    <h5>{prof.name}</h5><br />
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
        profs: state.profs,
        selectProf: state.selectProf
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectProfessor: selectProfessor }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Professors);