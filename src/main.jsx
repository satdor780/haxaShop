import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './components/redux/store.js'
import App from './App.jsx'


import './assets/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import './assets/css/templatemo-hexashop.css'
//import './assets/css/owl-carousel.css'
import './assets/css/lightbox.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
        <App />
    {/* </React.StrictMode> */}
  </Provider>
)
