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
            if([...state,action.payload].length < 2){
                return [...state,action.payload].slice().sort(
                        (course1,course2) => {
                            let course1Name = course1.professor.name.split(' ')
                            let course2Name = course2.professor.name.split(' ')
                            return (course1Name[2]).localeCompare(course2Name[2])
             })
            }   
            return [...state,action.payload]  
        default:
            return state
    }
}