import { updateProfile } from '@firebase/auth';
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
  const {
    user,
    email,
    password,
    error,
    logOut,
    handleRegistration,
    isLogin,
    handleEmailInput,
    handlePasswordInput,
    toggleLogin,
    handleNameInput,
    userLogin,
    googleSignIn,
    setError,
  } = useAuth();
  const location = useLocation();
  console.log('came from', location.state?.from);
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      history.push(redirect_uri);
    });
    // .finally(() => setIsLoading(false));
  };

  // const handleNameInput=()=>{
  //   console.log(e.target.value)
  // }

  const handleLogin = () => {
    userLogin(email, password).then((result) => {
      console.log(result);
      history.push(redirect_uri);
      // updateProfile(email, user);
    });
    // .catch((error) => {
    //   setError(error.message);
    // });
  };

  return (
    <div className="mx-auto w-50 p-5">
      <Form onSubmit={handleRegistration}>
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
        <Button onClick={handleLogin} variant="primary" type="submit">
          {isLogin ? 'Login' : 'Register'}
        </Button>
      </Form>{' '}
      <br />
      <button onClick={handleGoogleLogin} className="btn btn-primary">
        Sign In With Google
      </button>
    </div>
  );
};

export default Login;
