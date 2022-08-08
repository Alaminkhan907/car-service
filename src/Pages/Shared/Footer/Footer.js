import React from 'react'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className='text-center m-5'>
        <small>Copyright @ to Alamin {year}</small>
    </footer>
  )
}

export default Footer