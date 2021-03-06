import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar'
import './index.css';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart';
import { CartContextProvider } from './store/CartContext';
import Checkout from './components/Checkout';


export default function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>   
        <Navbar/>
        <Routes>
          <Route path='/' element = {<ItemListContainer/>} />  
          <Route path='/pizza/:id' element = {<ItemDetailContainer/>} /> 
          <Route path='/taste/:tasteid' element = {<ItemListContainer/>} />
          <Route path='/cart' element = {<Cart/>}/>  
          <Route path='/checkout' element = {<Checkout/>} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
    </>
  );
}


