import {hotSearchAsyncAction,keySearchAction,keySearchListAsyncAction} from "@actions/actionCreator"

export const mapStateToProps = (state)=>({
    hotGoods:state.search.hotGoods,
    flag: state.search.flag,
    inputVal:state.search.inputVal
})

export const mapDispatchToProps = (dispatch)=>({
    handleHotSearch(){
        dispatch(hotSearchAsyncAction())
    },
    handleInputClick(e){
        let val = e.target.value; 
        dispatch(keySearchAction(val))
    },
    handleSearchList(val){
        dispatch(keySearchListAsyncAction(val))
    } 
})