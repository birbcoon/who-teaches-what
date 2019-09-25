export default function(state=null, action) {
    switch(action.type){
        case 'PROFESOR_SELECTED':
            return action.payload
        default:
            return state;
    }
}