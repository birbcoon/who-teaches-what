import { combineReducers } from "redux";

import CourseReducer from './reducer_courses';
import ProfReducer from './reducer_profs';
const rootReducer = combineReducers({
    // our first state in Redux store - books
    courses: CourseReducer,
    profs: ProfReducer
});
export default rootReducer;