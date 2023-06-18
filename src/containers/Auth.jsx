import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../redux/auth/slice';

function Auth() {
  const [formValues, setFormValues] = useState({
    email: null,
    password: null,
  });

  const { authData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(await login(formValues));
    } catch (error) {
      console.log('error > ', error);
    }
  };

  useEffect(() => {
    console.log('authData > ', authData);
  }, [authData]);

  return (
    <Container
      className="py-3 d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          width: '30%',
        }}
      >
        <div className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            id="email"
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          ></Form.Control>
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="text"
            name="password"
            id="password"
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          ></Form.Control>
        </div>
        <div>
          <Button type="submit" variant="primary">
            Go to My Account
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Auth;
