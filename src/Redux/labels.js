import * as ActionType from './ActionTypes';

export const manageLabel = (state = [] ,action)=>{
    switch(action.type){
        case ActionType.ADD_LABEL :
            var ele = action.payload;
            console.log(ele);
            console.log(state);
            if(state.length >0){
                return state.filter(item => item.label !== ele.label)
                .concat({
                    id: ele.id,
                    label: ele.label
                });
            }
            else{
                const newState = [...state];
                console.log("newState" , newState);
                let ans = newState.concat({
                    id: ele.id,
                    label: ele.label
                });
                console.log(ans);
                return ans;
            }
        default : return state
    }
}