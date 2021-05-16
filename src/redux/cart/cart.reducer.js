import { CartActionTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

//like this.state in class components
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

//pass INITIAL_STATE as default value if no state defined; but note null is considered a state value
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        //cartItems: [existing cartItems, additional cartItem(item coming in is payload for action)]
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
