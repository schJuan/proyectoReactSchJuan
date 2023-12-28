import Itemlist from "./Itemlist"

const ItemListContainer = ({}) => {
   const productos =[
    {titulo: "producto A", descripcion: "descripcion A", precio:1000},
    {titulo: "producto B", descripcion: "descripcion B", precio:2000},
    {titulo: "producto C", descripcion: "descripcion C", precio:3000},
    {titulo: "producto D", descripcion: "descripcion D", precio:4000}
  ]
  return (
    <>
   
      <Itemlist productos={productos}/>
    </>
  )
}

export default ItemListContainer