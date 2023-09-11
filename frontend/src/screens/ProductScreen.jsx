'use client'
import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useParams } from 'next/navigation'

const ProductScreen = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const id = useParams().id;

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        axios.get(`/api/product/${id}`, { signal: controller.signal })
            .then((data) => setProduct(data.data))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))

        return () => {
            controller.abort();
        }
    }, [])

    return (
        <main>
            <section className='bg-accent-1'>
                <div className='__container py-[90px]'>
                    <div className='max-w-[1212px] mx-auto'>
                        <Link href='/catalog' className='flex items-center text-body hover:underline'>
                            <Icon icon='prime:chevron-left' className='mr-2 text-2xl' />
                            <span className=' leading-none'>Назад в каталог</span>
                        </Link>
                        <div className='mt-[50px] grid grid-cols-2 gap-20'>
                            <div className=''>
                                <img src={product.image} alt={product.name} className='w-full h-[500px] object-cover' />
                                <div className='grid grid-cols-5 gap-[30px] mt-10'>
                                    {
                                        product.images?.map((image) => <img src={image} alt='' className='w-full aspect-square object-cover' />)
                                    }
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='heading-2 text-main'>{product.name}</h1>
                                <p className='text-body-sm text-main-3'>{product.category?.name}</p>
                                <p className='mt-10 heading-2 text-main'>{product.price} BYN</p>
                                <p className='mt-10 text-body'>
                                    {product.description}
                                </p>
                                <div className='mt-10 flex items-baseline gap-[10px]'>
                                    <span className='text-body-sm text-main-3'>Размер:</span>
                                    <span className='text-body-lg font-semibold'>{product.size?.name}</span>
                                </div>
                                <button className='mt-10 button-main'>В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductScreen