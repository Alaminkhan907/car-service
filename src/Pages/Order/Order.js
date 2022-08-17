import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../Api/AxiosPrivate';


const Order = () => {
    const [user]= useAuthState(auth)
    const [orders, setOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const email =user?.email;
            console.log(email);
            const url = `https://warm-chamber-50271.herokuapp.com/order?email=${email}`;
            try{
                const { data } = await axiosPrivate.get(url);
                setOrder(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status ===401 || error.response.status ===403 ){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();
    }, [navigate, user])
    return (
        <div className='w-50 mx-auto'>
        <h2>Your orders: {orders.length}</h2>
        {
            orders.map(order =><div key={order._id}>
                <p>{order.email} : {order.service}</p>
            </div>)
        }
    </div>
);
};

export default Order;