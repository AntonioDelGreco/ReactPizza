import { createContext, useState } from "react";
import { useContext } from 'react';
import pizzasData from '../data/pizzasData';



const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({children}){

    const [cart, setCart] = useState([]);

    
    
    const addToCart = (item, cant, pizzaSola) => {

        const exists = cart.some(pizzaSola => pizzaSola.id === pizzasData.id);
        if (exists) {
            const laPizza = cart.map(cartItem => {
                if (pizzaSola.id === pizzasData.id){
                    pizzaSola.cant++;
                    return pizzaSola;
                }
                else{
                    return pizzaSola;
                }
            })
            setCart(laPizza);
        }
        else{
            const newItem = {...item, cant};
            setCart([...cart, newItem]);
        }
        console.log(exists)
    }
    
   
    const removeFromCart = (id) => {
        const newCart = [...cart];
        const cartFilter = newCart.filter( item => {
            return item.id !== id;
        });
        setCart(cartFilter);
    }

    const contextFunction = () => console.log('active context');

    return(
        <CartContext.Provider value = {{ contextFunction, cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext;




