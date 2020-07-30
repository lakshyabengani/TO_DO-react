import * as ActionTypes from './ActionTypes';

export const addTodo = (id, val, deadline , label , priority) => ({
    type : ActionTypes.ADD_TODO,
    payload :{
        id : id,
        label : label,
        text : val,
        deadline : deadline,
        priority : priority
    }
});

export const deleteTodo = (id) =>({
    type : ActionTypes.DELETE_TODO,
    payload:{
        id : id
    }
});

export const importTodo = (user_id) =>({
    type : ActionTypes.IMPORT_TODO,
    payload :{
        id : user_id
    }
});

export const addLabel = (id, label) => ({
    type : ActionTypes.ADD_LABEL,
    payload :{
        id : id ,
        label : label,
    }
});

export const importList = (user_id) =>({
    type : ActionTypes.IMPORT_LIST,
    payload : {
        id : user_id
    }
});

export const Login = (username , password ) =>({
    type : ActionTypes.LOGIN,
    payload : {
        username : username,
        password : password,
    }
});

export const Logout = () =>({
    type : ActionTypes.SIGN_OUT,
    payload : {}
});

export const toggleTodo = (id) =>({
    type : ActionTypes.TOGGLE_TODO,
    payload :{
        id : id
    }
});