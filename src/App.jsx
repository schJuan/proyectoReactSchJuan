import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Cart from './components/Cart'
import ProductId from './components/ProductId'


const App = () => {
  

  return (
    
      <BrowserRouter>
      
        <NavBar/>
        <ItemListContainer/>

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/contact' element={<ContactUs />}/>
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/product/:id' element={<ProductId/>} />
        </Routes>
      
      
      
      </BrowserRouter>
    
  )
}

export default App
