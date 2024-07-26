import { useState } from "react";

export default function Pagination({paginate, products, viewProducts}){

    const [activePag, setActivePag] = useState(0);
    const [pagpagArrowPrev, setPagpagArrowPrev] = useState(false);
    const [pagIndex, setPagIndex] = useState(0);//с
    const pagLast = pagIndex + 3;//до

    const pagList = products.length / viewProducts;
    const pagNumbers = []
    
    let pagArrow = false

    pagList > 2 ? pagArrow = true : null;

    let index = pagIndex;

    for (; index < pagLast; index++) {
        if(index >= pagList){
            break;
        }
        pagNumbers.push(index);
    }

    function pagNext(){
        setPagIndex(prevIndex => prevIndex + 2);
        setPagpagArrowPrev(true)
        paginate(pagIndex + 2)
        setActivePag(pagIndex + 2)
    }

    function pagPrev(){
        setPagIndex(prevIndex => prevIndex - 2);
        if(pagIndex - 2 <= 1){
            setPagpagArrowPrev(false)
        }
        paginate(pagIndex)
        setActivePag(pagIndex)
    }

    return(
        <div className="col-lg-12">
            <div className="pagination">
                <ul>

                    { pagpagArrowPrev ? (
                        <li onClick={() => pagPrev()}>
                            <a>{'<'}</a>
                        </li>
                    ) : null}

                    {pagNumbers.map(number => (
                         <li className={activePag === number ? "active" : ""} onClick={() => {paginate(number); setActivePag(number)}} key={number}>
                            <a>{number + 1}</a>
                        </li>
                    ))}

                   { pagArrow ? (
                    <li onClick={() => pagNext()}>
                        <a >{'>'}</a>
                    </li>
                   ) : null}

                </ul>
            </div>
        </div>
   )
}