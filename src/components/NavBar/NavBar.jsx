import "./navbar.css"
import CartWidget from "./CartWidget.JSX"
import { Link } from "react-router-dom"

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

            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <p className="titulo">
                    FantasyArt
                </p>
            </Link>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar