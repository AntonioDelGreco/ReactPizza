import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top p-5 bg-dark" style={{fontWeight: 'bold'}}>
      <div className="container-fluid">
        <Link className="navbar-brand hoverr text-warning" style={{letterSpacing: '1.5rem', fontSize: '3rem', marginRight: '1.5rem'}} to="/">Pizzeria 21</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link style={{fontSize: '1.9rem', marginRight: '1.5rem'}} className="nav-link active hoverr" to="/">Sobre nosotros</Link>
            </li>
            <li className="nav-item">
              <Link style={{fontSize: '1.9rem', marginRight: '1.5rem'}} className="nav-link active hoverr" to="/">Contacto</Link>
            </li>
            <CartWidget/>
            <li className="nav-item dropend hoverr" style={{fontSize: "2rem", marginLeft: "2rem"}}>
                  <Link className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">Sabores</Link>
                  <ul className="dropdown-menu dropdown-menu-dark bg-dark">
                    <li><Link style={{fontSize: "2rem"}} className="dropdown-item" to="/taste/queso">Queso</Link></li>
                    <li><Link style={{fontSize: "2rem"}} className="dropdown-item" to="/taste/rucula">Rucula</Link></li>
                    <li><Link style={{fontSize: "2rem"}} className="dropdown-item" to="/taste/jamon">Jamon</Link></li>
                    <li><Link style={{fontSize: "2rem"}} className="dropdown-item" to="/taste/carne">Carne</Link></li>
                  </ul>
            </li>
          </ul> 
        </div>
      </div>
    </nav>
    )
  }