import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // Используем useParams
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

const CartScreen = ({ location, history }) => {
  const { id: productId } = useParams();
  const qty = location.search
    ? Number(new URLSearchParams(location.search).get("qty"))
    : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>CartScreen</div>;
};

export default CartScreen;
