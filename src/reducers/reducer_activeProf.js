export default function(state=null, action) {
    switch(action.type){
        case 'PROFESOR_SELECTED':
            return action.payload
        case 'REMOVED_ASSIGNMENT':
            return null
        default:
            return state;
    }
}