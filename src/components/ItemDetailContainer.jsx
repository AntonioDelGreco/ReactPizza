import '../index.css';
import pizzasData from '../data/pizzasData';
import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


function getDataFromDB(idRecibido){
    return new Promise ( ( resolve, reject ) => {
        setTimeout(() => {
            const pizzaRecibida = pizzasData.find( (pizza) => { return pizza.id === Number(idRecibido) });
            resolve(pizzaRecibida);
        }, 2000 );    
    });
}

function ItemDetailContainer( {titulo} ) {

    const { id } = useParams();

    let [pizza, setPizza] = useState({});

    

    useEffect( () => {
        getDataFromDB(id).then( (data) => {
        setPizza(data)
        });
    }, [id] );
    

  return (
    <div className='contenedor'>
        <h1 style={{fontSize: '4rem', padding: '7rem'}} className='text-center'>Mas informacion</h1> 
        <ItemDetail pizza = { pizza }/>
    </div>
    
  )
}
export default ItemDetailContainer