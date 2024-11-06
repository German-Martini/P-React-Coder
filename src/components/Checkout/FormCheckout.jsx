import React from 'react'
import "./Checkout.css"

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div>
        <form onSubmit={handleSubmitForm}> 
        <h2>Checkout</h2>
            <label>Nombre completo: </label>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} required/>

            <label>Telefono: </label>
            <input type="text" name="phone" value={dataForm.phone} onChange={handleChangeInput} required />

            <label>Email: </label>
            <input type="text" name="email" value={dataForm.email} onChange={handleChangeInput} required/>

            <label>Repetir Email: </label>
            <input type="text" name="repeatEmail" value={dataForm.repeatEmail} onChange={handleChangeInput} required />

            <button type='submit'>Enviar orden</button>
        </form>
    </div>
  )
}

export default FormCheckout