/* const addToCart = (item, cant) => {
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

    function isInTheCart(){

        const exists = cart.some(onePizza => onePizza.id === cart.id);

        return exists
    } */