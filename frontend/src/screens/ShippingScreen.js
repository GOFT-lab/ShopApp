import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";

const ShippingScreen = ({ history }) => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <h1>Shopping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label className='formLabel'>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
            autoComplete='address'
          />
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label className='formLabel'>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
            autoComplete='city'
          />
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label className='formLabel'>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postalCode'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
            autoComplete='postalCode'
          />
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label className='formLabel'>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
            autoComplete='country'
          />
        </Form.Group>
        <Button className='button' type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
