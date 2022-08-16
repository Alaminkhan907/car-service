import React from 'react'
import sleeping from '../../../images/sleeping.jpg';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
  return (
    <div className='text-center'>
      <PageTitle title="404"></PageTitle>
        <h2 className='text-primary text-center'>Mechanic is sleeping</h2>
        <img className='w-50 ' width={500} src={sleeping} alt=""/> 
    </div>
  )
}

export default NotFound