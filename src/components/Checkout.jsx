import { Link } from 'react-router-dom';
import {buyOrder} from '../data/dataToFirestore';
import React, {useState, useEffect} from 'react'
import useCartContext from '../store/CartContext';



export default function Checkout() {

  const { cart, totalPrice, emptyCart} = useCartContext();

  let [orderId, setOrderId] = useState();

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

    useEffect(()=>{
      buyOrder(order).then((respuesta)=>{
        setOrderId(respuesta.id);
        emptyCart();
      });
    }, []);



    return (
            <div className="contenedor mt-5">
              <div style={{fontSize: "3rem"}} className="alert alert-warning text-center border border-5 border-dark" role="alert">
                Gracias por su compra!!! 
                <hr />
                Su registro de compra es: {orderId}
                <hr />
                Su carrito vuelve a estar vacio, vaya al <Link to="/" className="alert-link">inicio</Link> si desea seguir comprando.
              </div>
            </div>
    )
}