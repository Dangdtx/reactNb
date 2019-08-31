import {createStore,combineReducers,applyMiddleware} from "redux"
import home from "./reducers/home"
import search from "./reducers/search"
import goodsDetail from "./reducers/goodsDetail"
import reduxThunk from "redux-thunk"

const reducer = combineReducers({
    home,
    search,
    goodsDetail
}) 
const store = createStore(reducer,applyMiddleware(reduxThunk))
export default store;