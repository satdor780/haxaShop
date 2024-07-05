import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { current } from "@reduxjs/toolkit";


export default function SingleProduct(){
    
    const {id} = useParams();
    const [orders, SetOrders] = useState(1)
    
    let product = useSelector(state => state.products.products.filter(product => product.id == id))

    product = product[0]
    
    const [total, SetTotal] = useState(product.price)

    const handleClick = (action) => {
        if(action == '-' && orders !== 1){
            SetOrders(prevOrders => prevOrders - 1)
            
        }else if(action == '+'){
            SetOrders(prevOrders => prevOrders + 1)
        }
    };


   
    

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
                                        <input type="button" value="-" className="minus" onClick={() => handleClick('-')}/>
                                        <input type="number" step="1" min="1" max="" name="quantity" value={orders} title="Qty" className="input-text qty text" size="4" pattern="" inputmode="" />
                                        <input type="button" value="+" className="plus"  onClick={() => handleClick('+')}/>
                                    </div>
                                </div>
                            </div>
                            <div className="total">
                                <h4>Total: ${product.price * orders}</h4>
                                <div className="main-border-button"><a href="#">Add To Cart</a></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}