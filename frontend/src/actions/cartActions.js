import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  console.log(data._id);
  console.log(data.name);
  console.log(data.image);
  console.log(data.price);
  console.log(data.countInStock);
  console.log(qty);

  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
};
