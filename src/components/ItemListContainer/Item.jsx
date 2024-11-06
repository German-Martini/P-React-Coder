import React from 'react'
import { Link } from 'react-router-dom'

const item = ( { product } ) => {
  return (
    <div className='producto'>
    <img src={product.img} alt="" width={250} height={200} className='imagenesProductos'/>
    <p className='proNombre'>{product.nombre}</p>
    <p className='proPrecio'>Precio: ${product.precio}</p>
    <Link to={"/detail/" + product.id} style={{ textDecoration: 'none', }} className='linkVerMas'>Ver más</Link>
  </div>
  )
}

export default item