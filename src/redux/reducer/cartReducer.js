import { ADD_ITEM, CART_GET_FAILURE, CART_GET_REQUEST, CART_GET_SUCCESS, DEL_ITEM } from "../constants/cartConstant";

export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case CART_GET_REQUEST:
            return { loading: true };
        case CART_GET_SUCCESS:
            return { loading: false, response: action.payload };
        case CART_GET_FAILURE:
            return { loading: false, error: action.payload };
        case ADD_ITEM:
            const product = action.payload
            // Check if product already in cart
            const exist = state.response.find((x) => x.id === product.id)
            console.log("Exist" + exist);
            if (exist) {
                // Increase the quantity
                console.log("Inside exist");
                
                return { loading: false, response:  state.response.map((x) => x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x)}
            }
            else {
                
                return { loading: false, response: [...state, { ...product, quantity: 1 }]  }
            }
            break;
        case DEL_ITEM:
            product = action.payload
            const exist2 = state.response.find((x) => x.id === product.id)
            if (exist2.qty === 1) {
                return state.response.filter((x) => x.id !== exist2.id)
            }
            else {
                return state.response.map((x) => x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
            }
            break;
        default:
            return state;
    }
}