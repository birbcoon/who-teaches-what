export function selectClass(course){
    return {
        type: 'COURSE_SELECTED',
        payload: course
    }
}