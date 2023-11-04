import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleProduct from './SingleProduct';

const Products = () => {
    const data = useLoaderData();
    return (
        <div className='grid grid-cols-4 gap-5 max-w-7xl mx-auto my-10'>
            {
                data.map(product=><SingleProduct key={product._id} product={product} />)
            }
        </div>
    );
};

export default Products;