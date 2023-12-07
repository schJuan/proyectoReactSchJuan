import { useState } from 'react'


import ItemListContainer from './components/itemListContainer'
import NavBar from './components/NavBar'

const App = () => {
  const productos = [
    
  ]

  return (
    <div>
      <ItemListContainer
      productos={productos}
      />
      <NavBar/>


    </div>
  )
}

export default App
