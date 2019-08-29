 

import {handleActions} from "redux-actions";
const defaultState = {
    hotGoods:[],
    flag:true,
    inputVal:"红",
    searchList:[],
} 
export default handleActions({
    SEARCH_TYPES:(state,action)=>{
        let newState = Object.assign({},state)
        newState.hotGoods = action.payload.data.search_list 
        return newState;
    },
    KEY_TYPES:(state,action)=>{
        let newState = Object.assign({},state)  
        newState.inputVal = action.payload 
        return newState;
    }
},defaultState)