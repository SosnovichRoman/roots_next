import React from 'react'
import ProductCard from '../Product/ProductCard'

const CatalogGrid = ({ className = '', products = [] }) => {
    return (
        <div className={`mt-[30px] grid grid-cols-3 gap-x-[30px] gap-y-[50px] ${className}`} >
            {
                products.map((product) => <ProductCard key={product.id} product={product} className='' />)
            }
        </div>
    )
}

export default CatalogGrid