import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  

  return (
    <div>
      <NavBar /> 
      <ItemListContainer saludo="📚 Encuentra todo lo que necesitas en nuestra librería 📚" />
    </div>
  )
}

export default App
