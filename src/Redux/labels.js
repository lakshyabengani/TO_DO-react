import * as ActionType from './ActionTypes';

export const manageLabel = (state = { Label_List : [] },action)=>{
    switch(action.type){
        case ActionType.ADD_LABEL :
            var ele = action.payload;
            return state.filter(item => item.label !== ele.label)
            .concat({
                id: ele.id,
                label: ele.label
            });
        default : return state
    }
}