import React from 'react'
import ProductCard from './ProductCard';
import { TProduct } from '@/types';

const ProductList = ({title,data,limit}:{title:string;data:TProduct[];limit?:number}) => {

    const limitedProducts = limit ? data.slice(0, limit) : data;
  return (
    <div className='my-8'>
        <h3 className="text-3xl font-bold text-center">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {limitedProducts.slice(0,limit || data.length).map((product:TProduct) => (

                <ProductCard key={product.name} product={product} />
                ))}
        </div>
    </div>
  )
}

export default ProductList