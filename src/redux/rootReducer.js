import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import cartReducer from './cart/cart.reducer'
import sampleReducer from "./sample/sample.reducer";

const rootReducer = combineReducers({
    form: formReducer,
    product:sampleReducer,
    cart:cartReducer
});

export default rootReducer;
