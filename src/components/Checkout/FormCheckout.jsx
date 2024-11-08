import React from 'react'
import "./Checkout.css"

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div>
      <form onSubmit={handleSubmitForm} className='formulario'>
        <h2>Checkout</h2>
        <div className='formContainer'>
          <div className='imputContainer'>
            <label>Nombre completo: </label>
            <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} required className='imputForm' />

            <label>Telefono: </label>
            <input type="text" name="phone" value={dataForm.phone} onChange={handleChangeInput} required className='imputForm' />
          </div>
          <div className='imputContainer'>
            <label>Email: </label>
            <input type="text" name="email" value={dataForm.email} onChange={handleChangeInput} required className='imputForm' />

            <label>Repetir Email: </label>
            <input type="text" name="repeatEmail" value={dataForm.repeatEmail} onChange={handleChangeInput} required className='imputForm' />
          </div>
        </div>
        <div className='botonConainer'>
          <button className='botonform' type='submit'>Enviar orden</button>
        </div>
      </form>
    </div>
  )
}

export default FormCheckout