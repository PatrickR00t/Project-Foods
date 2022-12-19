import { actionType } from "../actions/Actions";

const reducer = (state, action) => {

  switch (action.type) {
    case actionType.SET_CART:
      return {
        ...state,
        cart: action.cart,
      };

    case actionType.SET_TOTAL:
      return {
        ...state,
        total: action.total,
      };

    default:
      return state;
  };
};

export default reducer;
