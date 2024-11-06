import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { CartProvider } from './context/CartContext'
import Carrito from './components/Carrito/Carrito'
import Checkout from './components/Checkout/Checkout'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'


function App() {
  

  return (
    <div>
      <BrowserRouter>
       <CartProvider>

      <NavBar /> 
      <ToastContainer />
      <Routes>
      <Route path='/' element={<ItemListContainer saludo="📚 Encuentra todo lo que necesitas en nuestra librería 📚" />} />
      <Route path='/category/:idCategory' element={<ItemListContainer saludo="📚 Encuentra todo lo que necesitas en nuestra librería 📚" />} />
      <Route path='/detail/:idProduct' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={ <Carrito/> } /> 
      <Route path='/checkout' element={ <Checkout /> } />
      </Routes>
       </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App


      