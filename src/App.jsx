import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Navbar from './component/Navbar'

function App() {
  
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:id" element={<Category/>} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>

      </>
  )
}

export default App
