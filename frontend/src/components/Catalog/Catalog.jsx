import { products } from '@/src/constants/fakeData'
import React from 'react'
import ProductCard from '../Product/ProductCard'

const Catalog = () => {
    return (
        <section className='bg-accent-1'>
            <div className='__container py-[90px]'>
                <h2 className='heading-2 text-main grow border-b-2 border-solid border-main-3'>Каталог</h2>
                <div className='mt-[50px] grid grid-cols-4 gap-x-[30px] gap-y-[50px]'>
                    {
                        products.map((product) => <ProductCard key={product.id} product={product} className='' />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Catalog