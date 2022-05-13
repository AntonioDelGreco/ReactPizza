import { createContext, useState } from "react";
import { useContext } from 'react';


const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({children}){

    const [cart, setCart] = useState([]);

    const addToCart = (item, cant) => {
        if (isInTheCart()){
            const newCart = cart.map(cartItem => {
                if (cartItem.id === item.id){
                    const updateCartItem = [...cartItem];
                    updateCartItem.cant = cant;
                    return updateCartItem;
                }
                else
                    return cartItem;
            })
            setCart(newCart);
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

    function isInTheCart(){

        const exists = cart.some(onePizza => onePizza.id === cart.id);

        return exists
    }
  
    

    const contextFunction = () => console.log('active context');

    return(
        <CartContext.Provider value = {{ contextFunction, cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext;




