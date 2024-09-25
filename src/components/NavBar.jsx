import "./navbar.css"
import CartWidget from "./CartWidget.JSX"

const NavBar = () => {
    return (
        <nav className="container">
            <select className="seleccionar">
                <option selected>CATEGORIAS</option>
                <option value="1">ESCOLARES</option>
                <option value="2">OFICINA</option>
                <option value="3">ARTISTICA</option>
            </select>
            <div>
                <p className="titulo">
                  FantasyArt 
                </p>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar