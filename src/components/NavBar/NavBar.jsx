import "./navbar.css"
import CartWidget from "./CartWidget.JSX"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="container">

            <ul className="seleccionar">
                <li>
                    <Link to="/category/escolares">ESCOLARES </Link>
                </li>
                <li>
                    <Link to="/category/oficina">OFICINA</Link>
                </li>
                <li>
                    <Link to="/category/artistica">ARTISTICA</Link>
                </li>
            </ul>

            <Link to="/">
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