import React, { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom"; // Добавлено useLocation
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ history }) => {
  const { id: productId } = useParams();
  const navigate = useLocation();
  const qty = navigate.search
    ? Number(new URLSearchParams(navigate.search).get("qty"))
    : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(cartItems);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>CartScreen</div>;
};

export default CartScreen;
