import useCartContext from '../store/CartContext';
import {buyOrder} from '../data/dataToFirestore';
import { Link } from 'react-router-dom';
import React, {useState} from 'react'
function Cart() {
  const { cart, removeFromCart, totalPrice, totalCant, emptyCart} = useCartContext();

  let [orderId, setOrderId] = useState(false);
 
  function buy(){

    const buyerItems = cart.map((item) => ({
      name: item.name,
      cant: item.cant,
      price: item.price,
      id: item.id
    }));
    const order = {
      buyer: {
        name: 'Diego',
        email: 'diegoarrobaGmail.com',
        phone: '12345'
      },
      items: buyerItems,
      total: totalPrice
    };
    buyOrder(order);
    emptyCart();

      const orderId = () => {
        setOrderId(true);
    };
  };
  
  

  return (
    
    <>
      <div className="list-group list-group pt-5">
          { cart.map((pizza) => (
 
                    <li className="text-light list-group-item d-flex justify-content-between align-items-start bg-dark">
                      <div className="ms-2 me-auto">
                        <div style={{fontSize: "2rem"}} className="fw-bold">{pizza.name}</div>
                        <button onClick={() => removeFromCart(pizza.id)} className="btn btn-dark text-warning" style={{fontSize: "2rem"}}>Quitar del carrito</button>
                      </div>
                      <span style={{fontSize: "2rem"}} className="mt-5 me-3 text-dark badge bg-warning rounded-pill">Cantidad: {pizza.cant}</span>
                      <span style={{fontSize: "2rem"}} className="mt-5 me-3 text-dark badge bg-warning rounded-pill">Precio: ${pizza.price * pizza.cant}</span>
                    </li>      
          ))}; 
      </div>

      {cart.length === 0 ? 
          <div className="contenedor">
            <div style={{fontSize: "3rem"}} className="alert alert-warning text-center p-5" role="alert">
              Su carrito esta vacio, vuelva al <Link to="/" className="alert-link">inicio</Link> si desea seguir comprando.
            </div>
          </div>
       :
       <div className='d-flex container flex-column'>
        <h2 className='text-center text-light fw-bold bg-dark' style={{fontSize: "3.5rem"}}>La cantidad total de pizzas que esta comprando es: <span className='text-warning'>{totalCant}</span></h2>
        <h2 className='text-center text-light fw-bold bg-dark' style={{fontSize: "3.5rem"}}>El precio total de su compra es: <span className='text-warning'>${totalPrice}</span></h2>
        <Link to='/checkout' onClick={buy} className="btn btn-dark text-warning" style={{fontSize: "2rem"}}>Finalizar Compra</Link> 
      </div>}; 
    </> 
  )
}
export default Cart