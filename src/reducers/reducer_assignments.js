let initialState = []

export default function(state = initialState, action) {
    
    switch(action.type){
        case 'REMOVED_ASSIGNMENT':
            let course = action.payload.course
            let prof = action.payload.professor
            course.nrOfSections += 1
            prof.nrOfCreditHours -= course.creditHours
            prof.nrOfClasses -= 1
            state = state.splice(state.indexOf(action.payload))
            console.log(state)
            return state
        case 'PROFESOR_SELECTED':
            return state;
        case 'COURSE_SELECTED':
            if(action.payload.professor !== null)
            {
                let course = action.payload.course
                let prof = action.payload.professor

                course.nrOfSections -= 1
                prof.nrOfCreditHours += course.creditHours
                prof.nrOfClasses += 1
            }
            return [...state,action.payload];

        
        default:
            return state
    }
}