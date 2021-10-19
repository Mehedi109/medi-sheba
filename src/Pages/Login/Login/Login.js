import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
  const {
    user,
    email,
    error,
    logOut,
    handleRegistration,
    isLogin,
    handleEmailInput,
    handlePasswordInput,
    toggleLogin,
    handleNameINput,
  } = useAuth();
  return (
    <div className="mx-auto w-50 p-5">
      {/* <Container> */}
      <Form onSubmit={handleRegistration}>
        <h2>{isLogin ? 'Login' : 'Register'} Here</h2>

        {!isLogin && (
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              onBlur={handleNameINput}
              type="text"
              placeholder="User Name"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onBlur={handleEmailInput}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onBlur={handlePasswordInput}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={toggleLogin}
            type="checkbox"
            label="Already Registered?"
          />
        </Form.Group>
        <div className="text-danger mb-3">{error}</div>
        <Button variant="primary" type="submit">
          {isLogin ? 'Login' : 'Register'}
        </Button>
      </Form>
      {/* </Container> */}
    </div>
  );
};

export default Login;
