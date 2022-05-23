import useCartContext from '../store/CartContext';
function Cart() {
  const { cart, removeFromCart, totalPrice, totalCant} = useCartContext();
 
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4 container p-5">
          { cart.map((pizza) => (
            
                <div className="col">
                  <div className="card bg-dark text-light">
                    <div className="card-body">
                      <h5 style={{fontSize: "3rem"}} className="card-title">{pizza.name}</h5>
                      <p style={{fontSize: "2rem"}} className="card-text">Tiene {pizza.cant} pizzas de este sabor en el carrito</p>
                      <p style={{fontSize: "2rem"}} className="card-text">El precio de la cantidad de pizzas de este sabor es de: ${pizza.price * pizza.cant}</p>
                      <img style={{width: '100%', height: '30rem'}} src={pizza.image} className="card-img-top" alt={pizza.name} />
                    </div>
                    <button onClick={() => removeFromCart(pizza.id)} className="btn btn-dark text-warning" style={{fontSize: "2rem"}}>Quitar del carrito</button>
                  </div>
                </div> 
          ))}; 
      </div>
      <div className='d-flex container flex-column'>
        <h2 className='text-center text-light fw-bold bg-dark' style={{fontSize: "3.5rem"}}>La cantidad total de pizzas que esta comprando es: <span className='text-warning'>{totalCant}</span></h2>
        <h2 className='text-center text-light fw-bold bg-dark' style={{fontSize: "3.5rem"}}>El precio total de su compra es: <span className='text-warning'>${totalPrice}</span></h2>
        <button className="btn btn-dark text-warning" style={{fontSize: "2rem"}}>Finalizar Compra</button> 
      </div>
    </> 
  )
}
export default Cart