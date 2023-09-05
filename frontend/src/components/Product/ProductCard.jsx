import React from 'react'

const ProductCard = ({ product, className, imgStyle }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <img className={`object-cover w-full ${imgStyle ? imgStyle : 'h-[400px]'}`} src={product.img} alt={product.name} />
            <div className='text-main flex gap-5 mt-[10px]'>
                <span className='text-base leading-auto grow'>{product.name}</span>
                <span className='text-xl leading-auto shrink-0'>{product.price} byn</span>
            </div>
        </div>
    )
}

export default ProductCard