import React from 'react'
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import axios from 'axios';

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  if (loading) {
    return <Loading></Loading>
  }

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {

    errorElement = <p className='text-danger'>Error: {error.message} </p>


  }
  const handleSubmit = async event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const {data} = await axios.post('http://localhost:8000/login',{email});
    console.log(data);
    localStorage.setItem('accessToken',data.accessToken);
    navigate(from, { replace: true });
  }
  const navigateRegister = event => {
    navigate('/register');
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else {
      toast('Please enter your email address');
    }
  }
  return (
    <div className='container w-50 mx-auto'>
      <PageTitle title="Login"></PageTitle>
      <h1 className='text-primary text-center mt-2'>Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>New to Car service? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Please register</Link></p>
      <p>Forget password ? <button button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}>Reset password</button></p>
      <SocialLogin></SocialLogin>
    </div>
  )
}

export default Login