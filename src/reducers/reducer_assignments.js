let initialState = [
    {
        course:{},
        professor: {}
    }
]
export default function(state = initialState, action) {
    switch(action.type){
        case 'COURSE_SELECTED':
            if(action.payload.professor != null )
                {initialState += action.payload
                return state}
            else
                break;
        default:
            return state
    }
}