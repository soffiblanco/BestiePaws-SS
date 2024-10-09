import React, {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts= async ()=>{
            const response = await fetch();
        const data = await response.json();
        };
    }, [])

    return <ProductContext.Provider>{children}</ProductContext.Provider>
}

export default ProductContext;