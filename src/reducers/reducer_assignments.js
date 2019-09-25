let assignments = []

export default function(state = assignments, action) {
    let prof
    let course
    switch(action.type){
        case 'COURSE_SELECTED':
            course = action.payload
            return state;
        case 'PROFESOR_SELECTED':
            prof = action.payload
            assignments += {course:course, prof:{prof}}
            console.log(assignments.course)
            return state
        default:
            return state
    }
}