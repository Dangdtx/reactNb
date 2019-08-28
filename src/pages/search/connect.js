import {hotSearchAsyncAction} from "@actions/actionCreator"

export const mapStateToProps = (state)=>({
    hotGoods:state.search.hotGoods,
    flag: state.search.flag
})

export const mapDispatchToProps = (dispatch)=>({
    handleHotSearch(){
        dispatch(hotSearchAsyncAction())
    }
})