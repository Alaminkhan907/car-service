import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = () => {
  const login = useNavigate();

  const navigateLogin = event =>{
    login('/login');
  }
  const handleRegister = event =>{
    event.preventDefault();
   const name = event.target.name.value;
   const email = event.target.email.value;
   const password = event.target.password.value;
  }
  return (
    <div className='register-form'>
      <h2 className='text-center mt-6'>Please Register</h2>
      <form onSubmit = {handleRegister}>
      <input type="text" name="name" id="" placeholder='Your name' required/>
      <input type="email" name="email" id="" placeholder='Email' required/>
      <input type="password" name="password" id="" placeholder='password' required/>
      <input type="submit" value="Register" required/>
      </form>
      <p>Already have and account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
    </div>
  )
}

export default Register