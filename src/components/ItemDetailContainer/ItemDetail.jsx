import React from 'react'

const ItemDetail = ( {product} ) => {
  return (
    <div>
    <img src={product.img} alt="" />
    <h2> {product.nombre} </h2>
    <p>{product.descripcion}</p>
    <p>Precio: {product.precio}</p>
  </div>
  )
}

export default ItemDetail