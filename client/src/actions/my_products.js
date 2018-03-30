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

export const addToCart = (products) => {
  return (dispatch) => {
    axios.post('/api/my_products/', { products }).then((res) =>
      dispatch({
        type: ADD_TO_CART,
        products: res.data,
        headers: res.headers,
      }),
    );
  };
};
