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
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const email =user.email;
            const url = `http://localhost:8000/order?email=${email}`;
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
        <div>
            <h2>Your orders :{order.length}</h2>
        </div>
    )
}

export default Order