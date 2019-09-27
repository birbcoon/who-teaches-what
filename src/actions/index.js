export function selectProfessor(professor){//to select professor and add course
    return {
        type: 'PROFESOR_SELECTED',
        payload: professor
    }
}
export function selectCourse(course, professor){// to add course 
    if(professor !== null){
        course.nrOfSections -= 1
        professor.nrOfCreditHours += course.creditHours
        professor.nrOfClasses += 1
    }
    return {
        type: 'COURSE_SELECTED',
        payload:{ course, professor}
    }
}
export function selectAssignment(assignment){// to remove from the assignment
    //CODE TO REMOVE FROM THE LIST
    assignment.course.nrOfSections += 1
    assignment.professor.nrOfCreditHours -= assignment.course.creditHours
    assignment.professor.nrOfClasses -= 1    //splice/slice the array 0-INDEX and then INDEX+1 to end 
    return {
        type: 'REMOVED_ASSIGNMENT',
        payload: assignment
    }
}