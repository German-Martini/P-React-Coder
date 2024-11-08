import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext)

  const total = totalCantidad()

  return (
    <div >
      <Link to="/cart" className="carrito" style={{ textDecoration: 'none', color: 'inherit' }} >
        <p>🛒</p>
        <p>{total >= 1 && total}</p>
      </Link>
    </div>

  )
}

export default CartWidget