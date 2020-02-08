import { ADD_ITEM_CART,DELETE_ITEM_CART } from "../types/cart"

export const addItemCart = (item,amount) =>{
    return{
        type:ADD_ITEM_CART,
        payload:{item:item,amount:amount}
    }
}

export const deleteItemCart = position =>{
    return{
        type:DELETE_ITEM_CART,
        payload:position
    }
}