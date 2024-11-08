import { createContext, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProductInCart = (newProduct) => {
        const condicion = isInCart(newProduct.id)
        if (condicion) {
            let nuevoCarrito = [...cart]
            nuevoCarrito.forEach((productCart) => {
                if (productCart.id === newProduct.id) {

                    const nuevaCantidad = productCart.cantidad + newProduct.cantidad
                    if (nuevaCantidad > productCart.stock) {
                        toast.warning("superaste el stock")
                        return productCart
                    } else {
                        productCart.cantidad = productCart.cantidad + newProduct.cantidad
                    }
                } s
            })
            setCart(nuevoCarrito)
        } else {
            setCart([...cart, newProduct])
        }
    }

    const isInCart = (idProduct) => {
        return cart.some((productCart) => productCart.id === idProduct)
    }

    const totalCantidad = () => {
        const totalCarrito = cart.reduce((total, productCart) => total + productCart.cantidad, 0)
        return totalCarrito
    }

    const precioTotal = () => {
        const precio = cart.reduce((total, productCart) => total + (productCart.precio * productCart.cantidad), 0)
        return precio
    }

    const eliminarProducto = (idproduct) => {
        const productsFilter = cart.filter((productCart) => productCart.id !== idproduct)
        setCart(productsFilter)
    }

    const vaciarCarrito = () => {
        setCart([])
        toast.success("Vaciaste el carrito")
    }


    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalCantidad, precioTotal, eliminarProducto, vaciarCarrito }} >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }