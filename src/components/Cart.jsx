import useCartContext from '../store/CartContext';

import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart, totalPrice, totalCant} = useCartContext();
 
  return (
    
    <>
    {cart.length === 0 ? '' 
    :
    <div className="list-group list-group contenedor border border-5 border-warning bg-dark mt-5 mb-5">
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
</div>}
      

      {cart.length === 0 ? 
          <div className="contenedor mt-5">
            <div style={{fontSize: "3rem"}} className="border border-dark border-5 alert alert-warning text-center p-5" role="alert">
              Su carrito esta vacio, vuelva al <Link to="/" className="alert-link">inicio</Link> si desea seguir comprando.
            </div>
          </div>
       :
       <div className='d-flex container flex-column bg-dark border border-5 border-warning'>
        <h2 className='text-center text-light fw-bold bg-dark' style={{fontSize: "3.5rem"}}>Cantidad total de pizzas: <span className='text-warning'>{totalCant}</span></h2>
        <h2 className='text-center text-light fw-bold bg-dark' style={{fontSize: "3.5rem"}}>Precio total: <span className='text-warning'>${totalPrice}</span></h2>
        <Link to='/checkout' className="btn btn-dark text-warning" style={{fontSize: "2rem"}}>Finalizar Compra</Link> 
        <Link to='/' className="btn btn-dark text-warning mt-2" style={{fontSize: "2rem"}}>Seguir comprando</Link>
      </div>}; 
    </> 
  )
}
export default Cart