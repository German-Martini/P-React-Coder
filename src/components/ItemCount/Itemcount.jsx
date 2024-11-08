import React from 'react'
import { useState } from 'react'
import "../ItemCount/ItemCount.css"


const Itemcount = ({ stock, addProduct }) => {

    const [count, setCount] = useState(1)

    const handleClickDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    return (
        <div className='itemCount'>
            <div>
                <div className='botonesItemCount'>
                    <button className='botonCount' onClick={handleClickDecrement}>-</button>
                    <p className='numero'>{count}</p>
                    <button className='botonCount' onClick={handleClickIncrement}>+</button>
                </div>
                <div className='botonAgregar'>
                    <button onClick={() => addProduct(count)}>Agregar producto</button>
                </div>
            </div>
        </div>
    )
}

export default Itemcount