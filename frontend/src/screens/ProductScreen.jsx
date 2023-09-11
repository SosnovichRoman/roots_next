'use client'
import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { Skeleton, SkeletonText } from '@chakra-ui/react'

const ProductScreen = () => {

    const [product, setProduct] = useState({
        name: 'Название',
        category: { name: 'Категория' },
        description: 'Растения, имеющие специальные ткани для запаса воды. Как правило, они произрастают в местах с засушливым климатом. Растения, которые входят в группу, объединяемую термином «суккуленты», не связаны между собой общим происхождением, их схожие черты вызваны схожими условиями обитания.',
        price: '0',
        size: { name: 'Размер' },
        images: ['1', '2', '3']
    });
    const [loading, setLoading] = useState(true);
    const id = useParams().id;

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
                                <Skeleton isLoaded={!loading}>
                                    <img src={product.images?.[currentImageIndex]} alt={product.name} className='w-full h-[500px] object-cover' />
                                </Skeleton>
                                <Skeleton isLoaded={!loading}>
                                    <div className='grid grid-cols-5 gap-[30px] mt-10'>
                                        {
                                            product.images?.map((image, index) =>
                                                <img src={image} key={image}
                                                    onClick={() => setCurrentImageIndex(index)} alt={product.name}
                                                    className={`w-full aspect-square object-cover ${currentImageIndex == index ? 'opacity-100' : 'opacity-40'} hover:opacity-100 cursor-pointer`}
                                                />)
                                        }
                                    </div>
                                </Skeleton>
                            </div>
                            <div className=''>
                                <Skeleton isLoaded={!loading}>
                                    <h1 className='heading-2 text-main'>{product.name}</h1>
                                </Skeleton>
                                <Skeleton isLoaded={!loading}>
                                    <p className='text-body-sm text-main-3 mt-1'>{product.category?.name}</p>
                                </Skeleton>
                                <Skeleton isLoaded={!loading}>
                                    <p className='mt-10 heading-2 text-main'>{product.price} BYN</p>
                                </Skeleton>
                                <Skeleton isLoaded={!loading}>
                                    <p className='mt-10 text-body'>
                                        {product.description}
                                    </p>
                                </Skeleton>
                                <Skeleton isLoaded={!loading}>
                                    <div className='mt-10 flex items-baseline gap-[10px]'>
                                        <span className='text-body-sm text-main-3'>Размер:</span>
                                        <span className='text-body-lg font-semibold'>{product.size?.name}</span>
                                    </div>
                                </Skeleton>
                                <Skeleton isLoaded={!loading} fitContent>
                                    <button className='mt-10 button-main'>В корзину</button>
                                </Skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ProductScreen