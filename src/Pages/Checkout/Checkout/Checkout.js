import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import useServiceDetail from '../../../Hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = event => {
    event.preventDefault();
    const order = {

      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,

    }
    axios.post('https://warm-chamber-50271.herokuapp.com/order', order)
      .then(response => {
        const {data} = response;
        if(data.insertedId){
          toast('Your order is booked');
          event.target.reset();
        }
      })
  }
  // const [user , setUser]= useState({
  //   name : 'Alamin khan',
  //   email : 'alamin@gmail.com',
  //   address : 'mohammdpur', 
  //   phone:'12312312312',
  // })
  // const handleAddressChange = event=>{
  //   const {address,...rest} =user;
  //   const newAddress = event.target.value;
  //   const newUser = {address:newAddress , ...rest};
  //   console.log(newUser)
  //   setUser(newUser);
  // }
  return (
    <div className='w-50 mx-auto'>
      <h2>Please order :{service.name} </h2>
      <form onSubmit={handlePlaceOrder}>
        <input className='w-100 mb-2 mx-auto' type="text" value={user?.displayName} name="name" placeholder='Name' required readOnly disabled />
        <br />
        <input className='w-100 mb-2 mx-auto' type="email" value={user?.email} name="email" placeholder='Email' required readOnly disabled />
        <br />
        <input className='w-100 mb-2 mx-auto' type="text " value={service.name} name="service" placeholder='Service' required readOnly/>
        <br />
        <input className='w-100 mb-2 mx-auto' type="text" value={user.address} name="address" autoComplete='off' placeholder='Address' required />
        <br />
        <input className='w-100 mb-2 mx-auto' type="number" name="phone" placeholder='Phone' required />
        <br />
        <input className='btn btn-primary' type="submit" value="Place Order" />
      </form>
    </div>
  )
}

export default Checkout