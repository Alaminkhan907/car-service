import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {_id,name, img , description , price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
      navigate(`/service/${id}`)
    }
  return (
    <div className='service'>
        <img className='w-100' src={img} alt=""/>
        <h2>{name}</h2>
        <h5 className='text-success'> Price :{price}</h5>
        <p><small>{description}</small></p>
        <button onClick={()=>navigateToServiceDetail(_id)} className='btn btn-primary'>BOOK {name} APPOINTMENT</button>
    </div>
  )
}

export default Service