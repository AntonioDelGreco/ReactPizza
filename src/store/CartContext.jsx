import { createContext, useState } from "react";
import { useContext } from 'react';




const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export function CartContextProvider({children}){

    const [cart, setCart] = useState([]);

   
    const addToCart = (item, cant) => {


        const exists = cart.some(pizzaSola => pizzaSola.id === item.id);
        if (exists) {
            const thePizza = cart.map(pizzaSola => {
                if (pizzaSola.id === item.id){
                    const copyItem = {...pizzaSola}
                    copyItem.cant += cant;
                    return copyItem;
                }
                else{
                    return pizzaSola;
                }
            });
            setCart(thePizza);
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
 
    let totalCant = cart.reduce((acumulador, pizza) => acumulador + pizza.cant, 0); 
    let totalPrice = cart.reduce((acumulador, pizza) => acumulador + pizza.price * pizza.cant, 0);

    const contextFunction = () => console.log('active context');

    return(
        <CartContext.Provider value = {{contextFunction, cart, addToCart, removeFromCart, totalPrice, totalCant}}>
            {children}
        </CartContext.Provider>
    )
}

export default useCartContext;




