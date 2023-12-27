import { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import ItemListContainer from './components/itemListContainer'
import NavBar from './components/NavBar'
import Tarjeta from './components/Tarjeta'
import { Navbar } from 'react-bootstrap'

const App = () => {
  

  return (
      <BrowserRouter>
      
      <Navbar/>
      
      <Routes>
        
        <Route>

        
        
        </Route>
      
      
      
      </Routes>
    <div>
      <ItemListContainer/>
      <NavBar/>
      <Tarjeta/>
      
    </div>
      </BrowserRouter>
  )
}

export default App
