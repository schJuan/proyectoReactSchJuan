import { useParams } from "react-router-dom"
import Itemlist from "./Itemlist"
import { useState } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailConteiner = () => {
  const {id} = useParams()
  console.log(id)
  const productos = [
    { id: 1, titulo: "producto A", descripcion: "descripcion A", precio: 1000, categoria: "A" },
    { id: 2, titulo: "producto B", descripcion: "descripcion B", precio: 2000, categoria: "B" },
    { id: 3, titulo: "producto C", descripcion: "descripcion C", precio: 3000, categoria: "A" },
    { id: 4, titulo: "producto D", descripcion: "descripcion D", precio: 4000, categoria: "B" }
  ]
  const productoFiltrado = productos.find((producto)=> producto.id == id )
  return (
    <div>
      
        
          
            <ItemDetail
              producto={productoFiltrado}
            />
        
        
      
    </div>
  )
}

export default ItemDetailConteiner