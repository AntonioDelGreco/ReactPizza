import React from 'react';

function ItemDetail( {pizza} ) {
  return (

          <div className="card mb-3 bg-dark text-white" style= {{maxWidth: "100%"}}>
          <div className="row g-0">
            <div className="col-md-4">
            <img className='img-fluid rounded-start' style={{borderRadius: "0.5rem"}} src={pizza.image} alt={pizza.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
              <h5 className="card-title" style={{fontSize: "5rem", paddingBottom: "2rem", paddingTop: "1rem"}}>{pizza.name}</h5>
              <p className='card-text' style={{fontSize: "3rem", color: "wheat", fontWeight: "bold"}}>Precio: ${pizza.price}</p>
              <p className="card-text" style={{fontSize: "2rem"}}>{pizza.text}</p>                
              </div>
            </div>
          </div>
        </div>
   
  )
}
export default ItemDetail;