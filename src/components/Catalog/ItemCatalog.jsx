import React, { useContext } from 'react';
import { ProductContext } from './ProductContext'; 
import Product from './Product';

const CatalogItem = () => {
    const products = useContext(ProductContext);


    console.log(products);

    const filteredProducts = Array.isArray(products) ? products.filter((item) => {
        return item.category_name === "" || item.category_name === "";
    }): [];

    return (
        <div>
            <section className='py-16'>
                <div className="container mx-auto">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-s'>
                        {filteredProducts.map((product) => {
                            return (
                      /*          <div className='w-full h-[300px] bg-pink-200 mb-4' key={product.id}>
                                    {product.title}
                                </div>*/
                                <Product key={product.id}/>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CatalogItem;

