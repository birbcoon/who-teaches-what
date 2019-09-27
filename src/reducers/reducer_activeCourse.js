export default function(state=null, action) {
    switch(action.type){
        case 'COURSE_SELECTED':
            return action.payload
        case 'PROFESOR_SELECTED':
            return null
        case 'REMOVED_ASSIGNMENT':
            return null
        default:
            return state;
    }
}