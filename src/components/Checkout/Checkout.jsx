import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Timestamp, addDoc, collection, setDoc, doc } from 'firebase/firestore'
import FormCheckout from './FormCheckout'
import db from '../../db/db.js'
import "./Checkout.css"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: "",
        repeatEmail: ""
    })
    const [orderId, setOrdenId] = useState(null)
    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()

        const order = {
            comprador: { ...dataForm },
            productos: [...cart],
            Fecha: Timestamp.fromDate(new Date()),
            total: precioTotal()
        }

        if (dataForm.email === dataForm.repeatEmail) {
            uploadOrder(order)
        } else {
            toast.error("Los email no coinciden")
        }
    }

    const uploadOrder = (newOrder) => {
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, newOrder)
            .then((res) => {
                setOrdenId(res.id)
            })
            .finally(() => {
                updateStock()
            })
    }

    const updateStock = () => {
        cart.map(({ cantidad, id, ...productCart }) => {
            const productRef = doc(db, "products", id)
            setDoc(productRef, { ...productCart, stock: productCart.stock - cantidad })
        })

        vaciarCarrito()
    }
    return (

        <div className='checkout'>
            {
                orderId ? (
                    <div className='ordenContainer'>
                        <h2>Orden enviada correctamente 👍</h2>
                        <p>Guarde su numero de seguimiento: <span className='ordenSpan'>{orderId}</span></p>
                        <Link className='botonform' to="/" >VOLVER AL INICIO</Link>
                    </div>
                ) : (
                    <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} />
                )
            }
        </div>
    )
}

export default Checkout

