import axios from 'axios';

export const GET_CART = 'GET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';

export const getCart = () => {
  return (dispatch) => {
    axios.get('/api/my_products').then((res) => {
      dispatch({
        type: GET_CART,
        cart: res.data,
        headers: res.headers,
      });
    });
  };
};

export const addToCart = () => dispatch => {
  dispatch({ type: 'ADD_COUNT', count: 1 })
};

export const subtractToCart = () => dispatch => {
  dispatch({ type: 'SUB_COUNT', count: 1 })
};

export const resetCart = () => dispatch => {
  dispatch({ type: 'RESET_COUNT', count : 0 })
};