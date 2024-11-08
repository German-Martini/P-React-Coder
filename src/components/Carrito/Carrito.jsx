import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import "./Carrito.css"

const Carrito = () => {
    const { cart, precioTotal, eliminarProducto, vaciarCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='carritoConteiner'>
                <h2 className='carritoTitulo'>Mi Carrito</h2>
                <div className='carritoVacio'>
                    <p className='primerP'> Tu carrito esta vacío 😢</p>
                    <p className='segundoP'>Llenalo de cosas utiles 😄</p>
                    <Link to="/" style={{ textDecoration: 'none' }} className='botonVolver' >Volver al inicio</Link>
                </div>
            </div>
        )
    }

    return (
        <div className='carritoConteiner'>
            <h2 className='carritoTitulo'>Mi Carrito</h2>
            {
                cart.map((productCart) => (
                    <div className='productosCarrito' key={productCart.id}>
                        <img src={productCart.img} className='imgCarrito' />
                        <p>{productCart.nombre}</p>
                        <p>Precio c/u: ${productCart.precio}</p>
                        <p>Cantidad: {productCart.cantidad} </p>
                        <p>Precio parcial: ${productCart.precio * productCart.cantidad}</p>
                        <button className='botonCarrito' onClick={() => eliminarProducto(productCart.id)}>Borrar</button>
                    </div>
                ))
            }

            <div className='finalizarCompra'>
                <p className='precioTotal'>Precio total: ${precioTotal()}</p>
                <Link to="/Checkout" className='continuar'>Terminar mi compra</Link>
                <button className='vaciarCarrito' onClick={vaciarCarrito}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Carrito