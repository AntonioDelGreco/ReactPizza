import { createContext, useState } from "react";
import { useContext } from 'react';



const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({children}){

    const [cart, setCart] = useState([]);

    
    
    const addToCart = (item, cant, pizzaSola) => {

        const exists = cart.some(pizzaSola => pizzaSola.id === cart.id);
        if (exists) {
            const laPizza = cart.map(cartItem => {
                if (pizzaSola.id === cart.id){
                    const updateCartItem = [...cartItem];
                    updateCartItem.cant = cant;
                    return updateCartItem;
                }
                else{
                    return cartItem;
                }
            })
            setCart(laPizza);
        }
        else{
            const newItem = {...item, cant};
            setCart([...cart, newItem]);
        }
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




