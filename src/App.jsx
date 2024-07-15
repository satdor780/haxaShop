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
import ScrollToTop from './components/utils/ScroolToTop.jsx'
import { Profile } from './components/pages/Profile/Profile.jsx'
import { Cart } from './components/pages/Cart/Cart.jsx'
import { useLocalStorage } from './components/utils/useLocalStorage.jsx'
import { hideNotifications, setUser } from './components/redux/userSlice.js'
import { getProducts } from './components/redux/productsSlice.js'
import { Notifications } from './components/Notifications.jsx'

// js files




function App() {

  const dispach = useDispatch()

  const [userLogined, setUserLogined] = useLocalStorage('user', false)

  const logined = useSelector(state => state.user.userState);
  const succsessLogin = useSelector(state => state.user.user);

  const showNotifications = useSelector(state => state.user.notifications);

  const closeNotifications = () => {
    dispach(hideNotifications())
  }


  useEffect(() => {
    dispach(getCategories())
    dispach(getProducts())

   if(userLogined && !logined){
    dispach(setUser(userLogined))
   }
    
  }, [dispach])

  useEffect(() => {
    if (logined && !userLogined) {
      setUserLogined(succsessLogin);
    }
    
  }, [logined, succsessLogin, setUserLogined]);


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
                  <Route path='/cart/' exact element={<Cart/>}/>
                  <Route path='/products/:category' element={<Products/>}/>
                  <Route path='/products/product/:id' element={<SingleProduct/>}/>
                </Routes>
                <Footer />
            </Router>

            <Notifications open={showNotifications} close={closeNotifications}/>
     
      {/* <Newsletter /> */}
      
    </>
  )
}

export default App


// email(pin):"name@gmail.com"
// password(pin):"123456"
// name(pin):"name"
// avatar(pin):"https://picsum.photos/800"
// role(pin):"customer"
// id(pin):41
// creationAt(pin):"2024-07-14T13:48:28.000Z"
// updatedAt(pin):"2024-07-14T13:48:28.000Z"


// {
//   "id": 1,
//   "email": "john@mail.com",
//   "password": "changeme",
//   "name": "Jhon",
//   "role": "customer",
//   "avatar": "https://api.lorem.space/image/face?w=640&h=480&r=867"
// }