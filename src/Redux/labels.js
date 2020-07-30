import * as ActionType from './ActionTypes';

export const manageLabel = (state = { Label_List : [] },action)=>{
    switch(action.type){
        case ActionType.ADD_LABEL :
            var ele = action.payload;
            console.log(ele);
            if(state.Label_List.length >0){
                return state.Label_List.filter(item => item.label !== ele.label)
                .concat({
                    id: ele.id,
                    label: ele.label
                });
            }
            else{
                return state.Label_List.concat({
                    id: ele.id,
                    label: ele.label
                })
            }
        default : return state
    }
}