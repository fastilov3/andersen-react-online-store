import {
    ADD_PURCHASE, SET_CART, SET_CART_MODAL_ACTIVE, SET_CART_MODAL_NON_ACTIVE,
    SET_LOGIN, SET_LOGIN_AND_PASSWORD,
    SET_LOGIN_MODAL_ACTIVE,
    SET_LOGIN_MODAL_NON_ACTIVE,
    SET_LOGOUT,
    SET_PRODUCTS
} from "./constants";

const initialState = {

}
export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: payload,
            }
        }
        default:
            return state
    }
}

export const purchaseReducer = (state = {purchaseCount: 0, purchaseValue: 0 }, {type, payload}) => {
    switch (type) {
        case ADD_PURCHASE: {
            return {
                ...state,
                purchaseCount: state.purchaseCount + payload.count,
                purchaseValue: state.purchaseValue + payload.value,
            }
        }
        default:
            return state
    }
}

export const authReducer = (state = {isAuth: false, once: false}, {type}) => {
    switch (type) {
        case SET_LOGIN: {
            return {
                ...state,
                isAuth: true,
                once: true,
            }
        }
        case SET_LOGOUT: {
            return {
                ...state,
                isAuth: false,
            }
        }
        default:
            return state
    }
}
export const loginModalReducer = (state = {isActive: false}, {type}) => {
    switch (type) {
        case SET_LOGIN_MODAL_ACTIVE: {
            return {
                ...state,
                isActive: true,
            }
        }
        case SET_LOGIN_MODAL_NON_ACTIVE: {
            return {
                ...state,
                isActive: false,
            }
        }
        default:
            return state
    }
}

export const loginAndPasswordReducer = (state = {login: '', password: ''}, {type, payload}) => {
    switch (type) {
        case SET_LOGIN_AND_PASSWORD: {
            return {
                ...state,
                login: payload.login,
                password: payload.password,
            }
        }
        default:
            return state
    }
}

export const cartModalReducer = (state = {isActive: false}, {type}) => {
    switch (type) {
        case SET_CART_MODAL_ACTIVE: {
            return {
                ...state,
                isActive: true,
            }
        }
        case SET_CART_MODAL_NON_ACTIVE: {
            return {
                ...state,
                isActive: false,
            }
        }
        default:
            return state
    }
}

export const cartReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case SET_CART: {
            return {
                ...state,
                [payload.title]: {
                    ...payload,
                    count: state[payload.title]?.count ? state[payload.title]?.count + payload.count : payload.count,
                    cost: state[payload.title]?.price ? state[payload.title]?.price + payload.price : payload.price
                },
            }
        }
        default:
            return state
    }
}

