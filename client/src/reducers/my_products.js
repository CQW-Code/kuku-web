import { CART, ADD_TO_CART } from '../actions/cart';

const cart = (state = [], action) => {
  switch (action.type) {
    case CART:
      return action.products;
    case ADD_TO_CART:
      return [action.products, ...state];
    default:
      return state;
  }
};

export default cart;
