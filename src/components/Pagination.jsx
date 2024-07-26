import { useState } from "react";

export default function Pagination({paginate, products, viewProducts}){

    const [activePag, setActivePag] = useState(0);
    const [pagArrowPrev, setPagArrowPrev] = useState(false);
    const [pagIndex, setPagIndex] = useState(0);
    const pagList = products.length / viewProducts
    const pagLast = pagList - 1; 
    
    const pagNumbers = [];
    
    let pagArrowNext = pagList > 2;
    
    for (let index = pagIndex; index < pagIndex + 3; index++) {
        if (index >= pagList) {
            break;
        }
        pagNumbers.push(index);
    }
    
    const pagNext = () => {
        const newPagIndex = pagIndex + 2;
        if (newPagIndex <= pagLast) {
            setPagIndex(newPagIndex);
            paginate(newPagIndex);
            setActivePag(newPagIndex);
        }
        updateArrows(newPagIndex);
    }
    
    const pagPrev = () => {
        const newPagIndex = pagIndex - 2;
        if (newPagIndex >= 0) {
            setPagIndex(newPagIndex);
            paginate(newPagIndex);
            setActivePag(newPagIndex);
        }
        updateArrows(newPagIndex);
    }
    
    const updateArrows = (index) => {
        setPagArrowPrev(index > 0); 
        pagArrowNext = index + 3 < pagList; 
    }

    return(
        <div className="col-lg-12">
            <div className="pagination">
                <ul>
                    {pagArrowPrev && (
                        <li onClick={pagPrev}>
                            <a>{'<'}</a>
                        </li>
                    )}

                    {pagNumbers.map(number => (
                        <li className={activePag === number ? "active" : ""} onClick={() => { paginate(number); setActivePag(number); }} key={number}>
                            <a>{number + 1}</a>
                        </li>
                    ))}

                    {pagArrowNext && (
                        <li onClick={pagNext}>
                            <a>{'>'}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
   )
}