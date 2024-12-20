import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { CartContext } from '../../context/CartContext.jsx'
import ItemDetail from './ItemDetail.jsx'
import db from "../../db/db.js"





const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})

  const [hideItemCount, setHideItemCount] = useState(false)

  const { addProductInCart } = useContext(CartContext)

  const { idProduct } = useParams()

  const addProduct = (count) => {
    const productCart = { ...product, cantidad: count }

    addProductInCart(productCart)
    setHideItemCount(true)
    toast.success("Producto agregado al carrito")
  }

  const getProduct = () => {
    const docRef = doc(db, "products", idProduct)
    getDoc(docRef)
      .then((dataDb) => {
        const productDb = { id: dataDb.id, ...dataDb.data() }
        setProduct(productDb)
      })
  }

  useEffect(() => {
    getProduct()
  }, [idProduct])

  return (
    <ItemDetail product={product} addProduct={addProduct} hideItemCount={hideItemCount} />
  )
}

export default ItemDetailContainer