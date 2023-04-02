// import {createStore, combineReducers, applyMiddleware} from "redux"
// import { co } from "redux";
import { createStore } from 'redux'
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { productDetailsReducer, productListReducer } from './reducers/productReducer';
import {cartReducer} from "./reducers/cartReducer"
import { userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateProfileReducer } from './reducers/userReducer';
import { orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer } from './reducers/orderReducer';
import { categoryCreateReducer, categoryListReducer } from './reducers/categoryReducer';

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdatePofile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails : orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    categoryList: categoryListReducer,
    createCategory: categoryCreateReducer
})
const initialState = {
    cart : {cartItems: cartItemsFromStorage, shippingAddress:shippingAddressFromStorage},
    // cart: {cartitems: "techinfo"}
    userLogin: {userInfo:userInfoFromStorage},
};
const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;