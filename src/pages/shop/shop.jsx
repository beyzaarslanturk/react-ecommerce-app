import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './product'

export const Shop = () => {
    return (
        <div className='shop'>
            <div className="products mx-auto w-[70%] md:w-[90%] my-10 flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {PRODUCTS.map((product) => (
                <Product data={product} />
            ))} </div>
        </div>
    )
}