import React from 'react'
import { Link } from 'react-router-dom'

const item = ( { product } ) => {
  return (
    <div className='producto'>
      <img src={product.img} alt="" width={250} height={200}/>
    <p>{product.nombre}</p>
    <p>Precio: {product.precio}</p>
    <Link to={"/detail/" + product.id}>Ver más</Link>
  </div>
  )
}

export default item