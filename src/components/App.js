import React from 'react'
import Classes from '../containers/ClassList'
import Professors from '../containers/ProfessorList'
import Assignments from '../containers/AssignmentList'

const App = () => (
    <div className="container">
        <div className="row">
            <div className="col s4">
                <h2>Courses</h2>
                <div class="divider"></div>
                <div class="section">
                    <Classes />
                </div>
            </div>
            <div className="col s4">
                <h2>Professors</h2>
                <div class="divider"></div>
                <div class="section">
                    <Professors />
                </div>
            </div>
            <div className="col s4">
                <h2>Assignments</h2>
                <div class="divider"></div>
                <div class="section">
                    <Assignments />
                </div>
            </div>
        </div>
    </div>
)
export default App