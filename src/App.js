import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar'
import './index.css';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';




export default function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<ItemListContainer/>} />  
          <Route path='/pizza/:id' element = {<ItemDetailContainer/>} /> 
          <Route path='/taste/:tasteid' element = {<ItemListContainer/>} /> 
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  );
}


