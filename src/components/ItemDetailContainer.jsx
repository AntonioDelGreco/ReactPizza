import '../index.css';
import {getItem} from '../data/dataToFirestore';
import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



function ItemDetailContainer( {titulo} ) {
  
    const { id } = useParams();

    let [pizza, setPizza] = useState();

    

    useEffect( () => {
        getItem(id).then( (data) => {
        setPizza(data)
        }).catch(err => console.log(err));
    }, [id] );
    

  return (
    <div className='contenedor'> 
        { pizza === undefined ? 
            <div style={{overflow: 'hidden'}} className="d-flex justify-content-center">
                <div style={{width: '13rem', height: '13rem', fontSize: '4rem'}} className="spinner-border" role="status">
                </div>
            </div>
         :
            <ItemDetail pizza = { pizza }/>} 
    </div>
    
  )
}
export default ItemDetailContainer