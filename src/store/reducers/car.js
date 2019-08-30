import {handleActions} from "redux-actions"

const defaultState = {
    num:1,
    dan:2999,
    sum: 2999,

}
export default handleActions ({
    CAR_TYPES:(state,action)=>{
        let newState = Object.assign({},state)
         newState.num++;
         newState.sum = (newState.dan * newState.num)
         return newState
    },
    CARJ_TYPES:(state,action)=>{
        let newState = Object.assign({},state)
        if(newState.num > 1){
            --newState.num;
            newState.sum = (newState.dan * newState.num)
        }
         
         return newState
    },
},defaultState)