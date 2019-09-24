import React from 'react'
import Classes from '../containers/ClassList'
import Professors from '../containers/ProfessorList'
import Assignments from '../containers/AssignmentList'

const App = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h2>Courses</h2>
                <Classes />
            </div>
            <div className="col-md-4">
                <h2>Professors</h2>
                <Professors />
            </div>
            <div className="col-md-4">
                <h2>Assigments</h2>
                <Assignments />
            </div>
        </div>
    </div>
)
export default App