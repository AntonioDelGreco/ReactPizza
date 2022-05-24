import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import useCartContext from '../store/CartContext';


export default function Navbar() {

  const { contextFunction, totalCant } = useCartContext();
  contextFunction();

    return (
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top p-4 bg-dark" style={{fontWeight: 'bold'}}>
      <div className="container-fluid">
        <Link className="navbar-brand hoverr text-warning me-4" style={{letterSpacing: '1.5rem', fontSize: '3rem'}} to="/">Pizzeria 21</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <Link style={{fontSize: '1.9rem'}} className="nav-link active hoverr" to="/">Sobre nosotros</Link>
            </li>
            <li className="nav-item me-4">
              <Link style={{fontSize: '1.9rem'}} className="nav-link active hoverr" to="/">Contacto</Link>
            </li>
            <li className="nav-item dropend hoverr me-4" style={{fontSize: "2rem"}}>
                  <Link className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Sabores</Link>
                  <ul className="dropdown-menu dropdown-menu-dark bg-dark">
                    <li><Link style={{fontSize: "2rem"}} className="dropdown-item" to="/taste/queso">Queso</Link></li>
                    <li><Link style={{fontSize: "2rem"}} className="dropdown-item" to="/taste/rucula">Rucula</Link></li>
                    <li><Link style={{fontSize: "2rem"}} className="dropdown-item" to="/taste/jamon">Jamon</Link></li>
                    <li><Link style={{fontSize: "2rem"}} className="dropdown-item" to="/taste/carne">Carne</Link></li>
                  </ul>
            </li>
          </ul>
          <div>
            <CartWidget/>
          </div>
          <div className="text-warning">
            {totalCant}
          </div>
        </div>
      </div>
    </nav>
    )
  }