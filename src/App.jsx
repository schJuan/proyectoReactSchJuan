import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Home from './components/Home'
import About from './components/Abaut'


const App = () => {
  

  return (
    <div>
      <BrowserRouter>
      
      <NavBar/>
      <ItemListContainer/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        
      </Routes>
      
      
      
      </BrowserRouter>
    </div>
  )
}

export default App
