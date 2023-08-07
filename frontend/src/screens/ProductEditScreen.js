import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listProductDetails } from "../actions/productActions";

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (!product.name || product._id !== productId) {
      dispatch(listProductDetails(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setBrand(product.brand);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [dispatch, product, productId, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    //UPDATE
  };

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>

      <FormContainer>
        <h1>Edit Product</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label className='formLabel'>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete='name'
              />
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label className='formLabel'>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                autoComplete='price'
              />
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label className='formLabel'>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                autoComplete='image'
              />
            </Form.Group>

            <Form.Group controlId='brand'>
              <Form.Label className='formLabel'>Brand</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                autoComplete='brand'
              />
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label className='formLabel'>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter countInStock'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
                autoComplete='image'
              />
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Label className='formLabel'>Category</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                autoComplete='image'
              />
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label className='formLabel'>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoComplete='image'
              />
            </Form.Group>

            <Button
              className='button'
              type='submit'
              variant='primary'
              aria-label='Sign In'
            >
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default ProductEditScreen;
