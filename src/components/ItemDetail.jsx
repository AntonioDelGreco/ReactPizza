import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import useCartContext from '../store/CartContext';

function ItemDetail( {pizza} ) {

  const [isInCart, setIsInCart] = useState(false)
  const { addToCart } = useCartContext();

      function onAdd(count){
        setIsInCart(true);
        addToCart(pizza, count);
    };

  return (

          <>
          <div style={{margin: '10rem'}} className="card mb-3 bg-dark text-white border border-warning border-5">
          <div className="row g-0">
            <div className="col-md-4">
            <img className='img-fluid rounded-start ' style={{borderRadius: "0.5rem", width: "100%", height: "100%"}} src={pizza.image} alt={pizza.name} />
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

        {
        isInCart?
        <div className="bg-dark border border-warning border-5 m-5">
          <Link to="/cart" className='btn btn-dark text-warning' style={{width: "100%", fontSize: "2rem"}}>Ver el carrito</Link>
          <Link to="/" className='btn btn-dark text-warning mt-2' style={{width: "100%", fontSize: "2rem"}}>Seguir comprando</Link>
        </div>
        : 
          <ItemCount onAdd={onAdd} initial={1}/>
        }
        </>
  )
}
export default ItemDetail;