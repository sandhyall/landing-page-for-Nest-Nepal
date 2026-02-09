import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Conponent/UserLayout/Layout'
import Landingpage from './Pages/Landingpage'
import Footer from './Conponent/Feature/Footer'

const App=() =>{
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Landingpage/>}/>
        <Route path='/' element ={<Footer/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App