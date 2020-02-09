import { ADD_ITEM_CART,DELETE_ITEM_CART } from "../types/cart"


const initialState={
    items:{},
}

const cart = (state=initialState,action) => {
    switch(action.type){
        case ADD_ITEM_CART:
            const item = action.payload.item;
            const amount = action.payload.amount;
            /* const [item,amount] =  */
            const items = state.items;
            if(items[item]){
                items[item] += amount;
            }else{
                items[item] = amount;
            }
            return{
                ...state,
                items:items
            }
        case DELETE_ITEM_CART:
            const {[action.payload]: deleted,...newState} = state.items;
            return{
                ...state,
                items:newState
            }
        default:
            return state
    }
}

export default cart