
import {goodsDetailAsyncAction,updateCityIdAction} from "@actions/actionCreator" 
export const mapStateToProps =(state) =>({

    goodsList:state.goodsDetail.goodsList,
    msg: {},
    lgs:[],
    flag:state.goodsDetail.flag,
    goodsId:state.goodsDetail.goodsId,
    goodsName:state.goodsDetail.goodsName,
    goodsPrice:state.goodsDetail.goodsPrice,
    goodsId:state.goodsDetail.goodsId,
    goodsList:state.goodsDetail.goodsList
})

export const mapDispatchToProps = (dispatch) =>({
   
    handleGetGoodsDetailTypes(productId,id) {
        
        dispatch(goodsDetailAsyncAction(productId,id))
       
    },
    handleUpdateCityId(id) {
        dispatch(updateCityIdAction(id))
    },





    clickHandler(e) {
       let action  = {
           type :"FLAG_TRUE",
       }
       dispatch(action)
    },
    clickOtherHandler(e) {
        let action  = {
            type :"FLAG_FALSE",
        }
        dispatch(action)
    }


})




// let {productId,id} = this.props.match.params
//         let value = await goodsDetail_api(productId,id);
//         let data = value.data
//         this.setState({
//             msg: data,
//             lgs:data.product_specs
//         })