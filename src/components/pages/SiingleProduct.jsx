import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { current } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { addToCard } from '../redux/userSlice.js'
import GoBackButton from "../goBackBtn/GoBackButton.jsx";
// import { Notifications } from "../Notifications.jsx";


export default function SingleProduct(){

    const dispatch = useDispatch()
    
    const {id} = useParams();
    const [orders, setOrders] = useState(1)

    // const [successAddCart, SetSuccessAddCart] = useState(false)
    
    let product = useSelector(state => state.products.products.filter(product => product.id == id))

    product = product[0]
    
    const [total, SetTotal] = useState(product.price)

    const handleClick = (action) => {
        if (action === '-' && orders > 1) {
            setOrders(prevOrders => prevOrders - 1);
        } else if (action === '+') {
            setOrders(prevOrders => prevOrders + 1);
        }
    };


   const addItemToCard = () => {
    dispatch(addToCard({product, orders}))
    // SetSuccessAddCart(true)
   }
    
    return(
        <>
            <div className="page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Single Product Page</h2>
                                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GoBackButton />

            {/* <Notifications open={successAddCart} close={() => SetSuccessAddCart(false)}>
                <p>товар добавлен в корзину</p>
            </Notifications> */}
        
            <section className="section" id="product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                        <div className="left-images">
                            <img src={product.images[0]} alt="" />
                            {/* <img src={product.images[2]} alt="" /> */}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="right-content">
                            <h4>{product.title}</h4>
                            <span className="price">${product.price}</span>
                            <span>{product.description}</span>
                            <div className="quote">
                                <i className="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod.</p>
                            </div>
                            <div className="quantity-content">
                                <div className="left-content">
                                    <h6>No. of Orders</h6>
                                </div>
                                <div className="right-content">
                                    <div className="quantity buttons_added">
                                        <input 
                                            type="button" 
                                            value="-" 
                                            className="minus" 
                                            onClick={() => handleClick('-')} 
                                        />
                                        <input 
                                            type="number"  
                                            inputMode="numeric" 
                                            step="1" 
                                            min="1" 
                                            max="" 
                                            name="quantity" 
                                            value={orders} 
                                            title="Qty" 
                                            className="input-text qty text" 
                                            size="4" 
                                        />
                                        <input 
                                            type="button"  
                                            value="+" 
                                            className="plus"  
                                            onClick={() => handleClick('+')} 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="total">
                                <h4>Total: ${product.price * orders}</h4>
                                <div className="main-border-button">
                                    <a 
                                    onClick={addItemToCard}
                                    >Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}

