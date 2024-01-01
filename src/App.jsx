import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import NavBar from './components/NavBar'

import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Cart from './components/Cart'
import ItemListcontainer from './components/ItemListContainer'
import ItemListContainer from './components/ItemListContainer'


const App = () => {
  

  return (
    
      <BrowserRouter>
      
        <NavBar/>
        

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<ContactUs />}/>
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/producto/:productoId' element={<ItemListContainer/>} />
          <Route exact path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        </Routes>
      
      
      
      </BrowserRouter>
    
  )
}

export default App
