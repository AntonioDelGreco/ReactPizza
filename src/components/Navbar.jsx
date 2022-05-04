import CartWidget from './CartWidget'

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top p-5 bg-dark" style={{fontWeight: 'bold'}}>
      <div className="container-fluid">
        <a className="navbar-brand hoverr" style={{letterSpacing: '1.5rem', fontSize: '3rem', marginRight: '1.5rem'}} href="/">Pizzeria 21</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a style={{fontSize: '1.9rem', marginRight: '1.5rem'}} className="nav-link active hoverr" href="/">Sobre nosotros</a>
            </li>
            <li className="nav-item">
              <a style={{fontSize: '1.9rem', marginRight: '1.5rem'}} className="nav-link active hoverr" href="/">Contacto</a>
            </li>
            <CartWidget/>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="buscar" aria-label="Search" id="buscar"/>
            <button style={{fontSize: '1.5rem'}} className="btn btn-outline-light" type="submit">Buscar</button>
        </form>
        </div>
      </div>
    </nav>
    )
  }