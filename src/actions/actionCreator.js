import {createAction} from "redux-actions"
import {hotSearch_api,searchKey_api,goodsDetail_api} from "@api/home"

// 同步的请求
export const hotSearchAction = createAction("SEARCH_TYPES",(val)=>val)
// 异步的请求
export const hotSearchAsyncAction = ()=>{
    return async (dispatch)=>{
        let data = await hotSearch_api();
        dispatch(hotSearchAction(data))
    }
}
export const keySearchAction = createAction("KEY_TYPES",(val)=>val)
 
export const keySearchAsyncAction = (val)=>{
    return async (dispatch)=>{ 
        let data = await searchKey_api(val); 
        dispatch(keySearchAction(val,data))
    }
}

 
export const keySearchListAction = createAction("LIST_TYPES",(val)=>val)
// 异步的请求
export const keySearchListAsyncAction = (val)=>{
    return async (dispatch)=>{ 
        let data = await searchKey_api(val);
        console.log(data)
       // dispatch(keySearchListAction(data))
    }
}



export const goodsDetailAction = createAction("GOODS_DETAIL",(val)=>val)
export const goodsDetailAsyncAction = (productId,id)=>{
    return async (dispatch) =>{
        let data = await goodsDetail_api(productId,id);
        dispatch(goodsDetailAction(data))
    }
}
 



export const updateCityIdAction = createAction("GOODS_ID",(val)=>val)