import { createStore , combineReducers} from 'redux';
import {manageTodo} from './todo';
import {manageAuth} from './authenticate';
import {manageLabel}  from './labels';

export const ConfigStore = () =>{
    const store = createStore(
        combineReducers({
            todos : manageTodo,
            Label_List : manageLabel,
            isLoggedIn : manageAuth,
        })
    );
    return store;
}
