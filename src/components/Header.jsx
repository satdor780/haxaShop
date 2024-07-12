import { useState, useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import logo from '../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from './modal/Modal'
import { SignUpForm } from './Form/SignUpForm'
import { toggleModal } from './redux/userSlice'
import { Login } from './Form/Login'

export default function Header(){

    const [text, setText] = useState("");
    const [products, SetProducts] = useState([]);
    const [currentProducts, setCurrentProducts] = useState([])
    const [burger, setBurger] = useState(false)

    let userMenu = window.innerWidth < 1000
    console.log(userMenu)

    // const [modalLogin, setModalLogin] = useState(false)

    // const modalLoginClose = () => {
    //     setModalLogin(false)
    // }

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

    const dispatch = useDispatch()
    const isOpen = () => {
        dispatch(toggleModal(true))
    }

    const closeBurger = () => {
        setBurger(false)
    }

    // useEffect(() => {
    //     if (window.innerWidth < 1000) {
    //         userMenu = false
    //     }
    //     console.log(userMenu)
    // }, [])

    const modalType = useSelector(state => state.user.formType.payload)
    const logined = useSelector(state => state.user.userState)
    const userName = useSelector(state => state.user.user.name)

    return(
       <>
        <Modal>
            {modalType == 'signUp' ? (<SignUpForm />): (<Login />)}
        </Modal>
        <header className="header-area header-sticky">
            <div className="container">
                    <div className="col-12">
                        <nav className="main-nav">

                            <NavLink to='/' className="logo">
                                <img src={logo} />
                            </NavLink>
                        
                        
                            <ul className={burger ? ('nav active') : ('nav')}>

                                {/* <li><NavLink to='/'>Home</NavLink></li> */}
                                <li><NavLink to='about'  onClick={closeBurger} >About Us</NavLink></li>
                                <li><NavLink to='products' onClick={closeBurger} >Products</NavLink></li>
                                <li><NavLink to='contacts' onClick={closeBurger} >Contact Us</NavLink></li>

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
                                                        
                                                        <NavLink onClick={closeBurger} to={`/products/product/${product.id}`}>{product.title}</NavLink>
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
                                {!userMenu && (
                                    <li className="user-menu">

                                        <div className="user">
                                            {logined ? (
                                                <NavLink to="/profile">
                                                    <FontAwesomeIcon icon={faUser} />
                                                    <span>{userName}</span>
                                                </NavLink>
                                            ) : (
                                                <a>    
                                                    <FontAwesomeIcon icon={faUser} onClick={isOpen}/>
                                                    <span>guest</span>
                                                </a>  
                                            )}
                                        </div>

                                        <div className="shopping-card"><FontAwesomeIcon icon={faCartShopping} /></div>
                                        
                                    </li>
                                )}
                            </ul>        
                            <a className={burger ? ('menu-trigger active') : ('menu-trigger')} onClick={() => setBurger(prevBurger => !prevBurger)}>
                                <span>Menu</span>
                            </a>
                        
                        </nav>
                    </div>
                </div>
        </header>
        {userMenu && (
            <div className="col-12">

                <li className="user-menu">

                    <div className="user">
                        {logined ? (
                            <NavLink to="/profile">
                                <FontAwesomeIcon icon={faUser} />
                                <span>{userName}</span>
                            </NavLink>
                        ) : (
                            <a>    
                                <FontAwesomeIcon icon={faUser} onClick={isOpen}/>
                                <span>guest</span>
                            </a>  
                        )}
                    </div>

                    <div className="shopping-card"><FontAwesomeIcon icon={faCartShopping} /></div>

                </li>

            </div>
        )}
    </>
    )
}