'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const ProductCard = ({ product, className, imgHeight }) => {

    const [hovered, setHovered] = useState(false);

    return (
        <Link
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            href={`/catalog/${product.id}`}
            className={`group/product flex flex-col h-full hover:scale-105 transition-all duration-300 relative ${className}`}>
            {/* <div className={`relative h-[${imgHeight ? imgHeight : '400'}px] group-hover/h-full`}>
                <img className='absolute inset-0 w-full h-full object-cover group-hover/product:opacity-60 transition-opacity duration-300' src={product.img} alt={product.name} />
            </div> */}
            <img style={{ height: hovered ? '100%' : imgHeight || 400 }}
                className='absolute inset-0 w-full object-cover group-hover/product:opacity-80 group-hover/product:shadow-lg transition-all duration-300'
                src={product.img} alt={product.name}
            />
            <div className='text-main flex gap-5 py-3 relative z-10 transition-all duration-300 group-hover/product:p-3' style={{ marginTop: imgHeight || 400 }}>
                <span className='grow text-base leading-auto'>{product.name}</span>
                <span className='text-xl leading-auto shrink-0'>{product.price} byn</span>
            </div>
        </Link>
    )
}

export default ProductCard

// hover with image bg scale
{/* <div className={`flex flex-col group/product ${className}`}>
<div className={`overflow-hidden ${imgStyle ? imgStyle : 'h-[400px]'}`}>
    <img src={product.img} alt={product.name} className='w-full h-full object-cover transition-transform duration-200 group-hover/product:scale-110' />
</div>
<div className='text-main flex gap-5 mt-[10px]'>
    <span className='text-base leading-auto grow'>{product.name}</span>
    <span className='text-xl leading-auto shrink-0'>{product.price} byn</span>
</div>
</div> */}


//Hover with translate up & scale
{/* <Link href={`/catalog/${product.id}`} className='bg-main-3 group/product'>
<div className={`flex flex-col group-hover/product:translate-y-[-6%] group-hover/product:scale-[1.05] group-hover/product:shadow-2xl bg-accent-1 h-full transition-all duration-200 ${className}`}>
    <img className={`object-cover w-full ${imgStyle ? imgStyle : 'h-[400px]'}`} src={product.img} alt={product.name} />
    <div className='text-main flex gap-5 p-3'>
        <span className='text-base leading-auto grow'>{product.name}</span>
        <span className='text-xl leading-auto shrink-0'>{product.price} byn</span>
    </div>
</div>
</Link> */}

//hover underline and opacity
{/* <Link href={`/catalog/${product.id}`} className={`group/product flex flex-col h-full ${className}`}>
<img className={`object-cover w-full group-hover/product:opacity-60 transition-opacity duration-300 ${imgStyle ? imgStyle : 'h-[400px]'}`} src={product.img} alt={product.name} />
<div className='text-main flex justify-between gap-5 p-3'>
    <div>
        <span className='inline text-base leading-auto link-underline group-hover/product:link-underline-hover duration-300 bg-gradient-to-r from-main to-main'>{product.name}</span>
    </div>
    <span className='text-xl leading-auto shrink-0'>{product.price} byn</span>
</div>
</Link> */}