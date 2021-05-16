import { CartActionTypes } from "./cart.types";

//like this.state in class components
const INITIAL_STATE = {
  hidden: true,
};

//pass INITIAL_STATE as default value if no state defined; but note null is considered a state value
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
