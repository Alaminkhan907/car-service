import React from 'react'
import useServices from '../../Hooks/UseServices'

const ManageServices = () => {
    const [services] = useServices();
    const handleDelete = id =>{
        const proceed  = window.confirm('Are you sure');

        if(proceed){
            const url = `http://localhost:3000/manage${id}`;
            fetch(url , {
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
            })
        }

    }
  return (
    <div className='w-50 mx-auto'>
        <h2>Manage service</h2>
        {
            services.map(service => <div key={service._id}>
                <h5>{service.name} <button onClick={()=>handleDelete(service._id)}>Delete</button></h5>
                
            </div>)
        }
    </div>
  )
}

export default ManageServices