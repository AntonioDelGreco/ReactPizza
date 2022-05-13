import '../index.css';
import pizzasData from '../data/pizzasData';
import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

    const { tasteid } = useParams();

    let [pizzas, setPizzas] = useState([]);


    function getDataFromDB(tasteid){
        return new Promise ( ( resolve, reject ) => {
            setTimeout(() => {
    
                if (tasteid === undefined) resolve( pizzasData );
                
                const pizzaRecibida = pizzasData.filter( (pizza) => { return pizza.taste === tasteid });
                resolve(pizzaRecibida);
            }, 2000 );
        });
    }

    

    useEffect( () => {
        getDataFromDB(tasteid).then( (data) => {
        setPizzas(data)
        });
    }, [tasteid] );
    

  return (
    <div className='contenedor'>
        <h1 style={{fontSize: '4rem', padding: '7rem'}} className='text-center'>Nuestros Sabores</h1>
        <ItemList pizzas = { pizzas }/>
    </div>
    
  )
}
export default ItemListContainer