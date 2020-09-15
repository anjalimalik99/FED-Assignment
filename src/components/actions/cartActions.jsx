const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (id,quantity,total)=>{
    return{
        type: ADD_TO_CART,
         id ,
        quantity,
    total}
    }

export const loggedIn = (value) => {
    return{
        type : "LOGGED_IN",
        value
    }
}

export const cartState = (value) => {
    return{
        type : "CART_STATE",
        value
    }
}
export const changeComponent = (value) => {
    return{
        type : "CHANGE_COMPONENT",
        value
    }
}