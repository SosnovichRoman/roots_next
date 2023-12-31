"use client"
import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import './popularProducts.scss'
import { products } from '@/src/constants/fakeData';
import ProductCard from '../Product/ProductCard';

const PopularProducts = () => {

    const [currentSlide, setCurrentSlide] = useState(1);
    const [totalSlides, setTotalSlides] = useState(0);

    return (
        <section className='bg-accent-1'>
            <div className='__container py-20'>
                <div className='flex items-end gap-[30px]'>
                    <h2 className='heading-2 text-main grow border-b-2 border-solid border-main-3'>Популярные товары</h2>
                    <div className='flex justify-between text-4xl w-[220px] translate-y-1/2'>
                        <button className='popular-products__prev text-main disabled:text-main-3 hover:opacity-60 active:opacity-30 transition-opacity cursor-pointer'>
                            <Icon icon='heroicons:chevron-left' className='' />
                        </button>
                        <button className='popular-products__next text-main disabled:text-main-3 hover:opacity-60 active:opacity-30 transition-opacity cursor-pointer'>
                            <Icon icon='heroicons:chevron-right' className='' />
                        </button>
                    </div>
                </div>
                {/* <div className='mt-15 grid grid-cols-3 gap-[30px]'> */}
                    {/* <div className='flex flex-col gap-[30px] h-full'>
                        <p className='text-body-lg grow'>
                            Это лекарственное растение является отличным стартовым суккулентом, если вы решили начать их разводить.
                            Если должным образом ухаживать
                            за ним, он может выпустить маленькие желтые цветочки.
                        </p>
                        <Link href='/catalog' className='button-main w-full max-w-[280px] self-start'>
                            Купить
                        </Link>
                    </div> */}

                    <div className='col-span-2 mt-15'>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            slidesPerView={4}
                            spaceBetween={30}
                            navigation={{
                                nextEl: '.popular-products__next',
                                prevEl: '.popular-products__prev',
                            }}
                            pagination={{
                                el: '.popular-products__pagination',
                                type: 'progressbar',
                            }}
                            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
                            onSwiper={(swiper) => setTotalSlides(swiper.slides.length)}
                        >
                            {
                                products.map((product) =>
                                    <SwiperSlide key={product.id} className=''>
                                        <ProductCard product={product} className='' variant='highlighted' />
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                        <div className='mt-[35px] relative'>
                            <span className='absolute bottom-[6px] right-0 text-xl leading-auto text-main'>{String(currentSlide).padStart(2, '0')}</span>
                            <div className='popular-products__pagination'></div>
                            <span className='absolute top-[10px] right-0 text-lg leading-auto text-main-3'>{String(totalSlides).padStart(2, '0')}</span>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </section>

    )
}

export default PopularProducts