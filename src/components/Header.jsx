import { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/images/logo.png'
import { useSelector } from 'react-redux';

export default function Header(){

    const [text, setText] = useState("");
    const [products, SetProducts] = useState([]);
    const [currentProducts, setCurrentProducts] = useState([])
    const [burger, setBurger] = useState(false)

    const ProductsRedux = useSelector((state) => state.products.products);
    const categories = useSelector(state => state.categories.categories); 

    useEffect(() => {
        SetProducts(ProductsRedux)
    }, [ProductsRedux]);

    function search(newText) {
        const searchProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(newText.toLowerCase());
        });
        setCurrentProducts(searchProducts);
    }

    return(
        <header className="header-area header-sticky">
            <div className="container">
                    <div className="col-12">
                        <nav className="main-nav">

                            <NavLink to='/' className="logo">
                                <img src={logo} />
                            </NavLink>
                        
                        
                            <ul className={burger ? ('nav active') : ('nav')}>

                                <li><NavLink to='/'>Home</NavLink></li>
                                <li><NavLink to='about'>About Us</NavLink></li>
                                <li><NavLink to='products'>Products</NavLink></li>
                                <li><NavLink to='contacts'>Contact Us</NavLink></li>

                                <li className="search__input">
                                    <input type="text" value={text} onChange={(current) => {
                                            setText((prevText) => {
                                                const newText = current.target.value;
                                                search(newText); // Pass the new text to the search function
                                                return newText; // Return the new text value
                                            });
                                        }}
                                        placeholder='поиск'
                                    
                                    />

                                    {text.length > 0 ? (
                                       
                                        currentProducts.length > 0 ? (
                                            <ul style={{ height: currentProducts.length < 4 ? 'auto' : '200px' }}>
                                                {currentProducts.map((product) => (
                                                    <li>
                                                        <div className="img"><img src={product.images[0]} alt="img" /></div>
                                                        
                                                        <NavLink onClick={() => setBurger(prevBurger => !prevBurger)} to={`/products/product/${product.id}`}>{product.title}</NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <h4>ничего нету:{'('}</h4>
                                        )

                                    ) : (
                                        null
                                    )}
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faUser} />
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </li>
                            </ul>        
                            <a className={burger ? ('menu-trigger active') : ('menu-trigger')} onClick={() => setBurger(prevBurger => !prevBurger)}>
                                <span>Menu</span>
                            </a>
                        
                        </nav>
                    </div>
                </div>
        </header>
    )
}