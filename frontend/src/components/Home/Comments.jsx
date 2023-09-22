'use client'
import { Icon } from '@iconify/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/scss'
import 'swiper/scss/navigation'
import { comments } from '@/src/constants/fakeData';

const Comments = () => {
    return (
        <section className='bg-accent-1'>
            <div className='__container py-[90px]'>
                <div className='flex items-end gap-[30px]'>
                    <h2 className='heading-2 text-main grow border-b-2 border-solid border-main-3'>Отзывы покупателей</h2>
                    <div className='flex justify-between text-4xl w-[220px] translate-y-1/2'>
                        <button className='comments__prev text-main disabled:text-main-3 hover:opacity-60 active:opacity-30 transition-opacity cursor-pointer'>
                            <Icon icon='heroicons:chevron-left' className='' />
                        </button>
                        <button className='comments__next text-main disabled:text-main-3 hover:opacity-60 active:opacity-30 transition-opacity cursor-pointer'>
                            <Icon icon='heroicons:chevron-right' className='' />
                        </button>
                    </div>
                </div>
                <div className='mt-[50px]'>
                    <Swiper
                        style={{padding: '20px', margin: '-20px'}}
                        modules={[Navigation, Pagination]}
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.comments__next',
                            prevEl: '.comments__prev',
                        }}
                    >
                        {
                            comments.map((comment) =>
                                <SwiperSlide key={comment.id} className=''>
                                    <div className='shadow-small hover:shadow-medium p-5 space-y-5'>
                                        <div className='flex gap-3'>
                                            <img src={comment.img} alt='' className='h-12 w-12 rounded-full object-cover' />
                                            <div className=''>
                                                <p className='text-body font-semibold'>{comment.name}</p>
                                                <div className='mt-2 flex gap-1'>
                                                    {
                                                        [...Array(comment.rating)].map((item, index) => <Icon key={index} icon="prime:star-fill" className='text-golden w-5 h-5' />)
                                                    }
                                                    {
                                                        [...Array(5 - comment.rating)].map((item, index) => <Icon key={index} icon="prime:star" className='text-golden w-5 h-5' />)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <p className='text-body-sm'>
                                            {comment.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Comments