import {carSumAction,carJAction} from "@actions/actionCreator"

export const mapStateToProps = (state)=>({
    num:state.car.num,
    sum:state.car.sum,
    dan:state.car.dan,
})

export const mapDispatchToProps= (dispatch)=>({
     handleCarSum(){
         dispatch(carSumAction())
     },
     handleCarJ(){
        dispatch(carJAction())
    }
})