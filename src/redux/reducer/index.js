import { cartReducer } from './cartReducer';
import handleCart from './handleCart'
import { combineReducers } from "redux";
const rootReducers = combineReducers({
    handleCart,
})
export default rootReducers