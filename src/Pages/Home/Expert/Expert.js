import React from 'react'

const Expert = ({expert}) => {
    const {name , img} =expert

  return (
    <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
        <div className="card" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">The best mechanics love to roll up their sleeves, get under the hood (or inside the dashboard), and fix problems. They can't be afraid of getting greasy and being busy. After all, their customers are depending on them.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
            </div>
        </div>
    </div>
  
  )
}

export default Expert