export function selectProfessor(professor){//to select professor and add course
    return {
        type: 'PROFESOR_SELECTED',
        payload: professor
    }
}
export function selectCourse(course, professor){// to add course 
    return {
        type: 'COURSE_SELECTED',
        payload:{ course, professor}
    }
}
export function selectAssignment(assignment){// to remove from the assignment
    //CODE TO REMOVE FROM THE LIST
    //splice/slice the array 0-INDEX and then INDEX+1 to end 
    return {
        type: 'REMOVED_ASSIGNMENT',
        payload: assignment
    }
}