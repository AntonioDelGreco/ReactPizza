import '../index.css';
import {getAllItems, getItemsByTaste} from '../data/dataToFirestore';
import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


function ItemListContainer() {

    const { tasteid } = useParams();

    let [pizzas, setPizzas] = useState([]);
    

    useEffect( () => {
      if (tasteid === undefined){
        getAllItems().then( (data) => {
          setPizzas(data)
          });
      }  
      else{
        getItemsByTaste(tasteid).then( (data) => {
          setPizzas(data)
          });
      }
    }, [tasteid] );
    

  return (
    <div className='contenedor'>
        <h1 style={{fontSize: '4rem', padding: '7rem'}} className='text-center'>Nuestros Sabores</h1>
        <ItemList pizzas = { pizzas }/>
    </div>
    
  )
}
export default ItemListContainer