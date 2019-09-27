let initialState = []

export default function(state = initialState, action) {
    
    switch(action.type){
        //When returning inside a reducer the object must be immutable
        //meaning that we can't return a modified state or just state
        //for it to be updated dynamically it has to be a new object/state
        case 'REMOVED_ASSIGNMENT':
            //splices out clicked assignment
            (state.splice(state.indexOf(action.payload), 1))

            //returns a new array with everything state contains
            return [...state]

        case 'COURSE_SELECTED':
            //Adds an assignment to a new array that contains everything state has
            return [...state,action.payload];    
        default:
            return state
    }
}