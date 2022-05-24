import { useState } from "react";
import React from 'react';

function ItemCount(props) {

    const [count, setCount] = useState(props.initial)

    function handleAdd(){

      setCount(count + 1);
    }

    function handleSubstract(){

      if (count > 1 ) setCount(count - 1); 
    }

  return (
    <div>
      <h4 className="text-center p-4" style={{fontSize: "3rem"}}>Encarga tu pizza</h4>

      <div className="d-flex column justify-content-center p-5 gap-3">
      <h5 className="text-center mt-4" style={{fontSize: "2rem"}}>Cantidad de pizzas que desea:</h5> 
      <button onClick={handleSubstract} className="btn btn-dark fs-5">-</button> <span style={{fontSize: "2rem"}} className="text-center fw-bold">{count}</span> <button onClick={handleAdd} className="btn btn-dark fs-5">+</button>
      </div>

      <div className="d-grid gap-2">
      <button onClick={() => props.onAdd(count)} className="btn btn-dark text-warning" style={{fontSize: "2rem"}} type="button">Agregar al carrito</button>
      </div>

    </div>
  )
}


export default ItemCount;