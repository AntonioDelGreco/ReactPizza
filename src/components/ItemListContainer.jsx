import '../index.css';
import pizzasData from '../data/pizzasData';
import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';

function getDataFromDB(){
    return new Promise ( ( resolve, reject ) => {
        setTimeout(() => {
            resolve( pizzasData )
        }, 2000 );    
    });
}

function ItemListContainer() {

    let [pizzas, setPizzas] = useState([]);

    

    useEffect( () => {
        getDataFromDB.then( (data) => {
        setPizzas(data)
        });
    }, [] );
    

  return (
    <div className='contenedor'>
        <h1 style={{fontSize: '4rem'}} className='text-center p-5'>Nuestros Sabores</h1>
        <ItemList pizzas = { pizzas }/>
    </div>
  )
}
export default ItemListContainer