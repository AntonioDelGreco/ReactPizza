import React from 'react'
import Item from './Item'

// este es el array de pizzas que viene por prop 
function ItemList( { pizzas } ) {
  return (
    <div className='displays'>
        { pizzas.map( (pizzaSingle) => 
            <Item key = {pizzaSingle.id} pizza = { pizzaSingle }/>
        )};
    </div>
  )
}
export default ItemList