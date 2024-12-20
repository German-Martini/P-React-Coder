import { Link } from "react-router-dom"
import CartWidget from "./CartWidget.jsx"
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="container">

            <ul className="seleccionar">
                <li>
                    <Link to="/category/escolares" style={{ textDecoration: 'none', color: 'inherit' }}>ESCOLARES </Link>
                </li>
                <li>
                    <Link to="/category/oficina" style={{ textDecoration: 'none', color: 'inherit' }}>OFICINA</Link>
                </li>
                <li>
                    <Link to="/category/artistica" style={{ textDecoration: 'none', color: 'inherit' }}>ARTISTICA</Link>
                </li>
            </ul>

            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} className="linkTitulo">
                <p className="titulo">
                    FantasyArt
                </p>
            </Link>
            <div className="cartWidget" >
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar