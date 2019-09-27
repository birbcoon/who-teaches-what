let initialState = []

export default function(state = initialState, action) {
    
    switch(action.type){
        //REASON IT DOES NOT UPDATE DYNAMICALLY IS 
        //BECAUSE THIS IS DONE IN ThE REDUCER
        case 'REMOVED_ASSIGNMENT':
            initialState = (state.splice(state.indexOf(action.payload) ))

            return state

        case 'COURSE_SELECTED':
            return [...state,action.payload];    
        default:
            return state
    }
}