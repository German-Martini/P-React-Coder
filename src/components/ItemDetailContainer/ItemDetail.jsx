import React from 'react'
import { Link } from 'react-router-dom'
import Itemcount from '../ItemCount/Itemcount.jsx'
import "./ItemDetail.css"

const ItemDetail = ({ product, addProduct, hideItemCount }) => {
  return (
    <div className='ItemDetail'>
      <div className='imagen'>
        <img src={product.img} alt="" className='imagenProduct' />
      </div>
      <div className='info'>
        <h2 className='titulo2'> {product.nombre} </h2>
        <p className='parrafo'>{product.descripcion}</p>
        <p className='precio'>Precio: {product.precio}</p>
        {
          hideItemCount === true ? (
            <Link to="/cart">Finalizar la compra</Link> 
          ) : (
            <Itemcount stock={product.stock} addProduct={addProduct} />
          )
        }
      </div>
    </div>
  )
}

export default ItemDetail