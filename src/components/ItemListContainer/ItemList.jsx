import React from 'react'
import Item from './item'

const ItemList = ( { products }) => {
  return (
    <>
    {
      products.map((product) => (
      <Item  product={product} key={product.id} />
      ))
    }
    </>
  )
}

export default ItemList