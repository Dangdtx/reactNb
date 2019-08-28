 

import {handleActions} from "redux-actions";
const defaultState = {
    hotGoods:[],
    flag:false,
} 
export default handleActions({
    SEARCH_TYPES:(state,action)=>{
        let newState = Object.assign({},state)
        newState.hotGoods = action.payload.data.search_list 
        return newState;
    }
},defaultState)