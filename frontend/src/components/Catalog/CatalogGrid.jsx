'use client'
import React from 'react'
import ProductCard from '../Product/ProductCard'
import { Spinner } from '@chakra-ui/react'

const CatalogGrid = ({ className = '', products = [], loading = true }) => {

    if (loading) return (
        <div className='grid-cols-3 flex justify-center py-[200px]'>
            <Spinner size='lg' />
        </div>
    )

    if (products.length == 0) return (
        <div className='grid-cols-3 text-center py-[200px]'>
            <p className='heading-3'>Упс! Товаров не найдено</p>
            <p className='text-body mt-4'>Попробуйте изменить параметры поиска</p>
        </div>
    )

    return (
        <div className={`mt-[30px] grid grid-cols-3 gap-x-[30px] gap-y-[50px] ${className}`} >
            {
                products.map((product) => <ProductCard key={product._id} product={product} className='' />)
            }
        </div>
    )
}

export default CatalogGrid