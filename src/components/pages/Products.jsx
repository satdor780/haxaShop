import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux"
import Product_card from "../Product_card"
import Pagination from '../Pagination';
import GoBackButton from '../goBackBtn/GoBackButton';



export default function Products(){

    //paginate

    const [prods, setProds] = useState([]); //все продукты
  
    const [firstPagination, setFirstPagination] = useState(0); // с какого продукта начинать


    const [offset, setOffset] = useState(0);
    const [posts, setPosts] = useState();

    const { category } = useParams();

    const products = useSelector(state => state.products.products);
    let filteredProducts = products;
    

    if(category) {
      filteredProducts = products.filter(product => product.category.name == category);
    }

    useEffect(() => {
        setProds(filteredProducts);
    }, [])

    //pagination

    const viewProducts = 6; //сколько продуктов

    const lastProductsIndex = firstPagination + viewProducts; //до какого продукта 2
    const firstProductsIndex = lastProductsIndex - viewProducts; //с какого продукта 0

    const currentProducsIndex = prods.slice(firstPagination, lastProductsIndex) //продукты с пагинацией ?

    function paginate(index){
        setFirstPagination(index * viewProducts)
    };


    return(
        <>
            
            <div className="page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Check Our Products</h2>
                                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GoBackButton />

            <section className="section" id="products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Our Latest Products </h2>
                                <span>Check out all of our products.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row product__inner" key={Math.random()}>

                        {currentProducsIndex.map(( {id, title, price, images, category} ) => (
                            <Product_card id={id} title={title} price={price} images={images} category={category}/>
                        ))}
                        
                        <Pagination paginate={paginate} products={prods} viewProducts={viewProducts}/>

                    </div>
                </div>
            </section>
        </>
    )
}