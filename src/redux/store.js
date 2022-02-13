import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {
    authReducer,
    cartModalReducer,
    loginAndPasswordReducer,
    loginModalReducer,
    productReducer,
    purchaseReducer,
    cartReducer
} from "./reducers";

export const store = createStore(combineReducers({
    authReducer,
    productReducer,
    purchaseReducer,
    loginModalReducer,
    loginAndPasswordReducer,
    cartModalReducer,
    cartReducer,
}), compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))