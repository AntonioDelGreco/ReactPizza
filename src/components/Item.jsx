import React from 'react';
import { Link } from 'react-router-dom'


function Item( {pizza} ) {

  const urlPizza = `/pizza/${pizza.id}`;

  return (
    <div style={{margin: "1rem"}} className="border border-5 border-warning">
        <div className="card text-white lacard bg-dark" style={{padding: "0.5rem", width: "30rem"}}>
       
            <img style={{borderRadius: "0.5rem"}} src={pizza.image} alt={pizza.name} />
            <div className="card-body">
                <h5 className="card-title" style={{fontSize: "2rem", marginBottom: "2rem", marginTop: "1rem"}}>{pizza.name}</h5>
                <p style={{fontSize: "1.8rem", color: "wheat", fontWeight: "bold"}}>Precio: ${pizza.price}</p>
                
            </div>
            <Link to={urlPizza}>
            <button style={{fontSize: '1.5rem', margin: "0.6rem"}} className=" text-warning text-uppercase btn btn-sm btn-outline-dark hoverr" type="submit">Mas informacion</button>
            </Link>
            
        </div>
    </div>       
   
  )
}
export default Item;