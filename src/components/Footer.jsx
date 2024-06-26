import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
import logo from '../assets/images/white-logo.png'

export default function Newsletter(){
    const categories = useSelector(state => state.categories.categories); 
    return(
        <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="first-item">
                        <div className="logo">
                            <img src={logo} alt="hexashop ecommerce templatemo" />
                        </div>
                        <ul>
                            <li><a href="#">16501 Collins Ave, Sunny Isles Beach, FL 33160, United States</a></li>
                            <li><a href="#">hexashop@company.com</a></li>
                            <li><a href="#">010-020-0340</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <h4>Shopping &amp; Categories</h4>
                    <ul>

                        {categories.map((category) => (
                            <li key={category.id}><NavLink to={`/products/${category.name}`}>{category.name} Shopping</NavLink></li>
                        ))}
                    </ul>
                </div>
                <div className="col-lg-3">
                    <h4>Useful Links</h4>  
                    <ul>
                        <li><NavLink to='/'>Homepage</NavLink></li>
                        <li><NavLink to='about'>About Us</NavLink></li>
                        <li><NavLink to='contacts'>Contact Us</NavLink></li>
                    </ul>
                </div>
                <div className="col-lg-12">
                    <div className="under-footer">
                        <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved. 
                        
                        <br/>Design: <a href="https://templatemo.com" target="_parent" title="free css templates">TemplateMo</a></p>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i className="fa fa-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}