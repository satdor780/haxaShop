import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addToCard } from './redux/userSlice'
// import { Notifications } from './Notifications'
// import { useState } from 'react'

export default function Product_card(product){

    const {id, title, price, images} = product

    // const [successAddCart, SetSuccessAddCart] = useState(false)

    const dispatch = useDispatch()

    const orders = 1

    const addItemToCard = () => {
        dispatch(addToCard( {product, orders}))
        // SetSuccessAddCart(true)
    }

    return(
            <>
                {/* <Notifications open={successAddCart} close={() => SetSuccessAddCart(false)}>
                    <p>товар добавлен в корзину</p>
                </Notifications> */}
                <div>
                    <div className="item">
                        <div className="thumb">
                            <div className="hover-content">
                                <ul>
                                    <li>
                                        <NavLink to={`/products/product/${id}`} ><i className="fa fa-eye"></i></NavLink>
                                    </li>
                                    <li onClick={addItemToCard}><a ><i className="fa fa-shopping-cart"></i></a></li>
                                </ul>
                            </div>
                            <img src={images} alt="product-image" style={{width: '100%'}}/>
                        </div>
                        <div className="down-content">
                            <h4>{title}</h4>
                            <span>${price}</span>
                        </div>
                    </div>
                </div>
            </>
       
    )
}