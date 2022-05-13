import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import useCartContext from '../store/CartContext';

function ItemDetail( {pizza} ) {

  const [isInCart, setIsInCart] = useState(false)
  const { addToCart } = useCartContext();

      function onAdd(count){
        setIsInCart(true);
        addToCart(pizza, count)
        console.log('agregado al cart', pizza, count)
    };

  return (

          <>
          <div className="card mb-3 bg-dark text-white">
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
        <Link to="/cart"><button className='btn btn-dark' style={{width: "100%", fontSize: "2rem"}}>Ver el carrito</button></Link>
        : 
        <ItemCount onAdd={onAdd} initial={1}/>
        }
        </>
  )
}
export default ItemDetail;