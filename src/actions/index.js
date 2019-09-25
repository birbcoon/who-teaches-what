export function selectProfessor(professor){//to select professor and add course
    return {
        type: 'PROFESOR_SELECTED',
        payload: professor
    }
}
export function selectCourse(course){// to add course 
    return {
        type: 'COURSE_SELECTED',
        payload: course
    }
}
export function selectAssignment(assignment){// to remove from the assignment
    return {
        type: 'REMOVE_ASSIGNMENT',
        payload: assignment
    }
}
