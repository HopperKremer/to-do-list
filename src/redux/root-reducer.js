import itemReducer from "./reducer"
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    item: itemReducer

})

export default rootReducer