import { Link } from 'react-router-dom';
import {buyOrder} from '../data/dataToFirestore';
import React, {useState, useEffect} from 'react'



export default function Checkout() {


  let [orderId, setOrderId] = useState();

  

  useEffect( () => {
      buyOrder().then( (data) => {
      setOrderId(data)
      });
  },);

  return (
          <div className="contenedor p-5">
            <div style={{fontSize: "3rem"}} className="alert alert-warning text-center p-5" role="alert">
              Gracias por su compra!!! 
              <hr />
              Su compra es: {orderId}
              Su carrito se vacio, vuelva al <Link to="/" className="alert-link">inicio</Link> si desea seguir comprando.
            </div>
          </div>
  )
}