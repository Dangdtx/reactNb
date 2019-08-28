import {createAction} from "redux-actions"
import {hotSearch_api} from "@api/home"

// 同步的请求
export const hotSearchAction = createAction("SEARCH_TYPES",(val)=>val)
// 异步的请求
export const hotSearchAsyncAction = ()=>{
    return async (dispatch)=>{
        let data = await hotSearch_api();
        dispatch(hotSearchAction(data))
    }
}