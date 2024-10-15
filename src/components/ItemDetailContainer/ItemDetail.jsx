import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({ product }) => {
  return (
    <div className='ItemDetail'>
      <div className='imagen'>
        <img src={product.img} alt="" className='imagenProduct' />
      </div>
      <div className='info'>
        <h2 className='titulo2'> {product.nombre} </h2>
        <p className='parrafo'>{product.descripcion}</p>
        <p className='precio'>Precio: {product.precio}</p>
      </div>
    </div>
  )
}

export default ItemDetail