import { useState } from 'react'


import ItemListContainer from './components/itemListContainer'
import NavBar from './components/NavBar'
import Tarjeta from './components/Tarjeta'

const App = () => {
  const productos = [
    
  ]

  return (
    <div>
      <ItemListContainer
      productos={productos}
      />
      <NavBar/>
      <Tarjeta/>

    </div>
  )
}

export default App
