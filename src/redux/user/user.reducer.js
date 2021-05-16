import { UserActionTypes } from "./user.types";

//like this.state in class components
const INITIAL_STATE = {
  currentUser: null,
};

//pass INITIAL_STATE as default value if no state defined; but note null is considered a state value
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
