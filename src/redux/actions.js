import {
    ADD_PURCHASE, SET_CART, SET_CART_MODAL_ACTIVE, SET_CART_MODAL_NON_ACTIVE,
    SET_LOGIN, SET_LOGIN_AND_PASSWORD,
    SET_LOGIN_MODAL_ACTIVE,
    SET_LOGIN_MODAL_NON_ACTIVE,
    SET_LOGOUT,
    SET_PRODUCTS
} from "./constants";
import PostService from "../API/PostService";

export const setProductActionCreator = () => async (dispatch) => {
    const response = await PostService.getAll();
    dispatch({
        type: SET_PRODUCTS,
        payload: response.data,
    })
}

export const addPurchaseActionCreator = (payload) => {
    return {
        type: ADD_PURCHASE,
        payload,
    }
}

export const loginAndPasswordActionCreator = (payload) => {
    return {
        type: SET_LOGIN_AND_PASSWORD,
        payload,
    }
}

export const setCartActionCreator = (payload) => {
    return {
        type: SET_CART,
        payload,
    }
}

export const setLoginAction = {
    type: SET_LOGIN,
}

export const setLogoutAction = {
    type: SET_LOGOUT,
}

export const setLoginModalActiveAction = {
    type: SET_LOGIN_MODAL_ACTIVE,
}
export const setLoginModalNonActiveAction = {
    type: SET_LOGIN_MODAL_NON_ACTIVE,
}

export const setCartModalActiveAction = {
    type: SET_CART_MODAL_ACTIVE,
}
export const setCartModalNonActiveAction = {
    type: SET_CART_MODAL_NON_ACTIVE,
}