let initialState = []

export default function(state = initialState, action) {
    
    switch(action.type){
        //REASON IT DOES NOT UPDATE DYNAMICALLY IS 
        //BECAUSE THIS IS DONE IN ThE REDUCER
        case 'REMOVED_ASSIGNMENT':
            let course = action.payload.course
            let prof = action.payload.professor

            course.nrOfSections += 1
            prof.nrOfCreditHours -= course.creditHours
            prof.nrOfClasses -= 1

            state.splice(state.indexOf(action.payload) - 1)
            console.log(state)
            return state

        case 'COURSE_SELECTED':
            if(action.payload.professor !== null)
            {
                let course = action.payload.course
                let prof = action.payload.professor

                course.nrOfSections -= 1
                prof.nrOfCreditHours += course.creditHours
                prof.nrOfClasses += 1
            }
            initialState = [...state,action.payload]
            return initialState;

        
        default:
            return state
    }
}