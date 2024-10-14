import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { getProducts } from "../../data/data" 
import { useParams } from "react-router-dom"
import "./itemlistcontainer.css"

const ItemListContainer = ( {saludo} ) => {

  const [ products, setProducts] = useState([])

  const { idCategory } = useParams()
  
  useEffect(()=>{
    getProducts()
      .then((data)=> {
        if(idCategory){
          const filterProducts = data.filter((product)=> product.categoria === idCategory)
          setProducts(filterProducts)
        }else {
          setProducts(data)
        }

      })
      .catch((error)=> {
        console.error(error)
      })
      .finally(()=> {
        console.log("Finalizo la promesa")
      })
  }, [idCategory])
  

  return (
    <div className="itemlistcontainer">
    <div className="itemlist">
      {saludo}
    </div>
    <div className="productos">
    <ItemList products={products} />
    </div>
    </div>
  )
}

export default ItemListContainer