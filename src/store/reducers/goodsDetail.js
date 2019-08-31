import {handleActions} from "redux-actions"

 const defaultState = {
    goodsName:'',
    goodsId:'',
    goodsColor:'',
    goodsType:'',
    goodsPrice:'',
    flag:false,
    goodsList:{}
   
   
 }
 
 export default handleActions({
  GOODS_DETAIL:(state,action)=>{
        let goodsListState = Object.assign({},state);
      console.log(action.payload.data.product_specs,"actionnnnnnnnnnnnnnnnnnnnnnnnn")
        let goodsPayload=action.payload.data.product_specs;
        console.log(goodsListState.goodsId,"idddddddddddd")
       
        let num;
        goodsPayload.forEach((item,index)=>{
                        if(item.id==goodsListState.goodsId) {
                           num=index;
                        }
                    })
        let tibel=goodsPayload[num];
        goodsListState.goodsList = tibel;
        console.log(tibel)
        return goodsListState
    },
    GOODS_ID :(state,action)=>{
      let goodsStateId = Object.assign({},state);
      console.log(action,"action----payload")
      goodsStateId.goodsId = action.payload;
      goodsStateId.goodsProductId = action.payload;
      return goodsStateId
    },

      FLAG_TRUE : (state,action)=>{
         let flagState = Object.assign({},state);
         flagState.flag = true;
         return flagState
    },
    FLAG_FALSE : (state,action)=>{
      let flagState = Object.assign({},state);
      flagState.flag = false;
      return flagState
 }


 },defaultState)