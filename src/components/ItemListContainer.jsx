import Itemlist from "./Itemlist"

const ItemListContainer = ({}) => {
   const productos =[
    {id:1,titulo: "producto A", descripcion: "descripcion A", precio:1000},
    {id:2,titulo: "producto B", descripcion: "descripcion B", precio:2000},
    {id:3,titulo: "producto C", descripcion: "descripcion C", precio:3000},
    {id:4,titulo: "producto D", descripcion: "descripcion D", precio:4000}
]
  return (
    <>
   
      <Itemlist productos={productos}/>
    </>
  )
}

export default ItemListContainer