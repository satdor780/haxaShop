
import { useSelector } from "react-redux"
import { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import Product_card from "./Product_card"

export default function CategorySlider(category, amout){

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [mediaReact, setMediaReact] = useState(3);
    const chevronWidth = 40;
    const products = useSelector(state => state.products.products)
    const FilterProduct = products.filter((product) => product.category.name == category.category)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1120 && window.innerWidth > 640) {
                // Действие, которое нужно выполнить
                setMediaReact(2);
            }else if (window.innerWidth < 640) {
                // Действие, которое нужно выполнить
                setMediaReact(1);
            }
        };

        handleResize(); // Выполнить при монтировании компонента

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <section className="section product__slider" id={category.category}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>{category.category} Latests</h2>
                            <span>Details to details is what makes Hexashop different from the other themes.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" >
                        {FilterProduct.length > 0 ? (

                            <div>
                                <ItemsCarousel
                                        requestToChangeActive={setActiveItemIndex}
                                        activeItemIndex={activeItemIndex}
                                        numberOfCards={mediaReact}
                                        gutter={20}
                                        leftChevron={<button className='slider__button left'>{'<'}</button>}
                                        rightChevron={<button className='slider__button right'>{'>'}</button>}
                                        outsideChevron
                                        chevronWidth={chevronWidth}
                                        >
                                            {FilterProduct.map(( {id, title, price, images} ) => (
                                                <Product_card id={id} title={title} price={price} img={images}/>
                                            ))}
                                </ItemsCarousel>
                            </div>  
                            ) : (
                                // Загрузка данных
                                <p>Loading...</p>
                            )}
    
                    </div>
                   
                </div>
            </div>       
        </section>
        
    )
}