import * as ActionType from './ActionTypes';

export const manageTodo = (state = {todos : [] },action)=>{
    switch(action.type){
        case ActionType.ADD_TODO :
            console.log(state);
            console.log("reached here");
            var element = action.payload;
            return state.todos.concat({
                id: element.id, 
                text: element.text , 
                priority : state.priority ,
                completed: false ,
                deadline: element.deadline , 
                label : element.label,
            });
        case ActionType.TOGGLE_TODO :
            var td = action.payload;
            return state.map(todo =>{
                if (todo.id === td.id) {
                    todo.completed = !todo.completed
                }
                return todo
            });
        case ActionType.DELETE_TODO :
            var ele = action.paylod;
            return state.filter( item => item.id !== ele.id);
        default : return state
    }
}