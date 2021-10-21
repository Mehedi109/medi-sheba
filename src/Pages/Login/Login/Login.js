import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
  const {
    email,
    password,
    error,
    handleRegistration,
    isLogin,
    handleEmailInput,
    handlePasswordInput,
    toggleLogin,
    handleNameInput,
    userLogin,
    googleSignIn,
  } = useAuth();
  const location = useLocation();
  console.log('came from', location.state?.from);
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      history.push(redirect_uri);
    });
  };

  const handleLogin = () => {
    userLogin(email, password).then((result) => {
      console.log(result);
      history.push(redirect_uri);
    });
  };

  return (
    <div className="mx-auto w-100 p-5 login">
      <div className="user-form shadow-lg">
        <Form onSubmit={handleRegistration} className="">
          <h2>{isLogin ? 'Login' : 'Register'} Here</h2>
          {!isLogin && (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                onBlur={handleNameInput}
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
          <div className="register">
            <Button
              onClick={handleLogin}
              className="register-btn"
              variant="primary"
              type="submit"
            >
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </div>
        </Form>
        <br />
        <div className="text-center">
          ------------------ OR ------------------
        </div>
        <br />
        <div className="google">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-primary google-btn"
          >
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
