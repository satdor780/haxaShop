import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom'

import left_banner from '../../assets/images/left-banner-image.jpeg'
import Newsletter from "../Newsletter";
import Social from "../Social";
import Explore from "../Explore";
import CategorySlider from "../CategorySlider";
import { useLocalStorage } from "../utils/useLocalStorage";

export default function Home(){

    const categories = useSelector(state => state.categories.categories); 

    // const [localValue, setLocalValue] = useLocalStorage('user', {name: john})

    return(
      <>
        <div className="main-banner" id="top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left-content">
                            <div className="thumb">
                                <div className="inner-content">
                                    <h4>We Are Hexashop</h4>
                                    <span>Awesome, clean &amp; creative HTML5 Template</span>
                                    <div className="main-border-button">
                                        <NavLink to='/products'>Purchase Now!</NavLink>
                                    </div>
                                </div>
                                <img src={left_banner} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-content">
                            <div className="row">
                            
                                {categories.slice(0, 4).map((category) => (
                                    <div className="col-lg-6"  key={category.id}>
                                        <div className="right-first-image">
                                            <div className="thumb">
                                                <div className="inner-content">
                                                    <h4>{category.name}</h4>
                                                    <span>Best Clothes For {category.name}</span>
                                                </div>
                                                <div className="hover-content">
                                                    <div className="inner">
                                                        <h4>{category.name}</h4>
                                                        <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                        <div className="main-border-button">
                                                            <NavLink to={`/products/${category.name}`} >Discover More</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                <img src={category.image}/>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {categories.slice(0, 3).map( (category) => <CategorySlider category ={category.name}/> )}

        {/* <CategorySlider category = "Electronics"/> 
        <CategorySlider category = "Shoes"/>        
        <CategorySlider category = "Clothes"/>                       */}

        <Explore/>

        <Social/>

        <Newsletter/>

        {/* <input type="text" value={localValue} onChange={(e) => setLocalValue(e.target.value)}/> */}

      </>
    )
}

// sardor20070987654321 sardorasrmidinov@gmail.com