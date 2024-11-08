import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount.jsx'
import "./ItemDetail.css"

const ItemDetail = ({ product, addProduct, hideItemCount }) => {
  return (
    <div className='ItemDetail'>
      <div className='imagen'>
        <img src={product.img} alt="" className='imagenProduct' />
      </div>
      <div className='info'>
        <h2 className='titulo2'> {product.nombre} </h2>
        <p className='parrafo'>Descripción: {product.descripcion}</p>
        <p className='precio'>Precio: ${product.precio}</p>
        <div className='itemCountContainer'>
          {
            hideItemCount === true ? (
              <Link className='finalizarCompra' to="/cart" >Finalizar compra</Link>
            ) : (
              <ItemCount stock={product.stock} addProduct={addProduct} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ItemDetail