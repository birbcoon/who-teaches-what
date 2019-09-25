import { combineReducers } from "redux";

import CourseReducer from './reducer_courses';
import ProfReducer from './reducer_profs';
import AssignReducer from './reducer_assignments';
import ActionReducer from './reducer_actions'

const rootReducer = combineReducers({
    // our first state in Redux store - books
    courses: CourseReducer,
    profs: ProfReducer,
    assignments: AssignReducer,
    action: ActionReducer
});
export default rootReducer;