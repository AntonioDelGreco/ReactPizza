import React from 'react'
import Item from './Item'

function ItemList( { pizzas } ) {
  return (
    <div>
        { pizzas.map( (pizza) => 
            <Item pizza = { pizzas }/>
        )};
    </div>
  )
}
export default ItemList