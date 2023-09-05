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
        getAllItems().then( data => {
          setPizzas(data)
          }).catch(err => console.log(err));
      }  
      else{
        getItemsByTaste(tasteid).then( (data) => {
          setPizzas(data)
          }).catch(err => console.log(err));
      }
    }, [tasteid] );
    

  return (
    
    <div className='contenedor bg-dark p-5 mt-5'>
        <h1 style={{fontSize: '4rem', margin: '7rem', padding: "2rem"}} className='text-center bg-warning text-dark'>Nuestros Sabores</h1>
        <ItemList pizzas = { pizzas }/>
    </div>
  )
}
export default ItemListContainer