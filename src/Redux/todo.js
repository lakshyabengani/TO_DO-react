import * as ActionType from './ActionTypes';

export const manageTodo = (state = [] ,action) =>{
    switch(action.type){
        case ActionType.ADD_TODO :
            console.log(state);
            console.log("reached here");
            var element = action.payload;
            element.completed = false;
            console.log("element : ",element)
            let ans = [...state,element];
            console.log(ans);
            console.log(state === ans);
            return ans;
        case ActionType.TOGGLE_TODO :
            var td = action.payload;
            return state.map(todo =>{
                if (todo.id === td.id) {
                    todo.completed = !todo.completed
                }
                return todo;
            });
        case ActionType.DELETE_TODO :
            var ele = action.payload;
            console.log(ele);
            return state.filter( item => item.id !== ele.id);
        default : return state
    }
}