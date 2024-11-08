import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import ItemList from "./ItemList.jsx"
import db from "../../db/db.js"
import "./itemlistcontainer.css"

const ItemListContainer = ({ saludo }) => {

  const [products, setProducts] = useState([])

  const { idCategory } = useParams()

  const getProducts = () => {
    const collectionName = collection(db, "products")
    getDocs(collectionName)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() }
        })

        setProducts(productsDb)
      })
  }

  const getProductsByCategory = () => {
    const collectionName = collection(db, "products")
    const q = query(collectionName, where("categoria", "==", idCategory))
    getDocs(q)
      .then((dataDb) => {
        const productsDb = dataDb.docs.map((productDb) => {
          return { id: productDb.id, ...productDb.data() }
        })

        setProducts(productsDb)
      })
  }

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory()
    } else {
      getProducts()
    }
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