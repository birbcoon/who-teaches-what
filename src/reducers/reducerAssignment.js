const intial=[];

export default (state=intial, action){
	switch(action.type){
		case "COURSE_SELECTED":
		if(!action.payload.professor)
			return state;
		return
			state: [...state,{action.payload.course.code, action.payload.professor.name}]

		default
		return state;
	}
	return state;
}