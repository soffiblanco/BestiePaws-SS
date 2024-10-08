/*import React, { useContext } from 'react';
import { ProductContext } from './path/to/ProductContext'; // Asegúrate de importar el contexto correctamente

const CatalogItem = () => {
    const { products } = useContext(ProductContext);
    console.log(products);

    const filteredProducts = products.filter((item) => {
        return item.category === "cats" || item.category === "dogs";
    });

    return (
        <div>
            <section className='py-16'>
                <div className="container mx-auto">
                    <div className='grid'>
                        {filteredProducts.map(product => {
                            return (
                                <div className='w-full h-[300px] bg-pink-200 mb-4' key={product.id}>
                                    {product.title}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CatalogItem;
*/
