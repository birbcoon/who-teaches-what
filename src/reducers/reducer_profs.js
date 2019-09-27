const initialState = [
    { name: "Dr. Sudip Chakraborty", nrOfCreditHours: 0, nrOfClasses: 0 },
    { name: "Dr. Anurag Dasgupta", nrOfCreditHours: 0, nrOfClasses: 0 },
    { name: "Dr. Said Fares", nrOfCreditHours: 0, nrOfClasses: 0 },
    { name: "Dr. Dave Gibson", nrOfCreditHours: 0, nrOfClasses: 0 },
    { name: "Dr. Chunlei Liu", nrOfCreditHours: 0, nrOfClasses: 0 },
    { name: "Dr. Radu Paul Mihail", nrOfCreditHours: 0, nrOfClasses: 0 },
    { name: "Dr. Krishnendu Roy", nrOfCreditHours: 0, nrOfClasses: 0 },
    { name: "Dr. Zhiguang Xu", nrOfClasses: 0, nrOfCreditHours: 0}
]

export default function(state = initialState, action) {
    switch(action.type){
        case "COURSE_SELECTED":
            return state.map( prof => {
                return action.payload.professor !== null && prof.name === action.payload.professor.name
                    ? Object.assign({}, prof, {
                        nrOfCreditHours: prof.nrOfCreditHours + action.payload.course.creditHours,
                        nrOfClasses: prof.nrOfClasses + 1
                    }): prof
            })
        case "REMOVED_ASSIGNMENT":
                return state.map( prof => {
                    return prof.name === action.payload.professor.name 
                        ? Object.assign({}, prof, {
                            nrOfCreditHours: prof.nrOfCreditHours - action.payload.course.creditHours,
                            nrOfClasses: prof.nrOfClasses - 1
                        }): prof
                    })
        default:
            return state
    }
}