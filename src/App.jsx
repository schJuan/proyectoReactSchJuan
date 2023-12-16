import { useState } from 'react'


import ItemListContainer from './components/itemListContainer'
import NavBar from './components/NavBar'
import Tarjeta from './components/Tarjeta'

const App = () => {
  

  return (
    <div>
      <ItemListContainer/>
      <NavBar/>
      <Tarjeta/>
      
    </div>
  )
}

export default App
