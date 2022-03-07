import produce from "immer";
import { ADD_ITEM, REMOVE_ITEM } from "./cart.types";
import { addItemstoCart2, removeItemsfromCart2 } from "./cart.helpers";
const INITIAL_STATE = {
  items: {},
  //   item product , count
  totalPrice: 0,
};
const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          ...addItemstoCart2(state.items, payload),
        },
        totalPrice: state.totalPrice + payload.price,
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: removeItemsfromCart2(state.items, payload),
        totalPrice: state.totalPrice - payload.price,
      };

    default:
      return state;
  }
};
export default cartReducer;
