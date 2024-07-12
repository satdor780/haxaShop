import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Newsletter from './components/Newsletter.jsx'

import About from './components/pages/About.jsx'
import Contacts from './components/pages/Contacts.jsx'
import Products from './components/pages/Products.jsx'
import Home from './components/pages/Home.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from './components/redux/categoriesSlice.js'
import SingleProduct from './components/pages/SiingleProduct.jsx'
import ScrollToTop from './components/ScroolToTop.jsx'
import { Profile } from './components/pages/Profile/Profile.jsx'
// import { getProducts } from './components/redux/productsSlice.js'

// js files




function App() {

  const dispach = useDispatch()

  useEffect(() => {
    dispach(getCategories())
    // dispach(getProducts())
    console.log('fetched')
  }, [dispach])

  return (
    <>
            <Router>
              <ScrollToTop/>
                <Header />
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/contacts' element={<Contacts/>}/>
                  <Route path='/products/' exact element={<Products/>}/>
                  <Route path='/profile/' exact element={<Profile/>}/>
                  <Route path='/products/:category' element={<Products/>}/>
                  <Route path='/products/product/:id' element={<SingleProduct/>}/>
                </Routes>
                <Footer />
            </Router>
     
      {/* <Newsletter /> */}
      
    </>
  )
}

export default App
