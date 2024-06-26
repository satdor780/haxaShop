import { NavLink } from 'react-router-dom'

export default function Product_card({id, title, price, img}){
    return(
        <div key={id}>
            <div className="item">
                <div className="thumb">
                    <div className="hover-content">
                        <ul>
                            <li>
                                <NavLink to={`/products/product/${id}`} ><i className="fa fa-eye"></i></NavLink>
                            </li>
                            <li><a ><i className="fa fa-star"></i></a></li>
                            <li><a ><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <img src={img[0]} alt="product-image" style={{width: '100%'}}/>
                </div>
                <div className="down-content">
                    <h4>{title}</h4>
                    <span>${price}</span>
                    
                </div>
            </div>
        </div>
    )
}