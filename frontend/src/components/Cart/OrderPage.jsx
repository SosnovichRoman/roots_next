'use client'
import { Icon } from '@iconify/react'
import React, { useContext, useEffect, useState } from 'react'
import CartSummary from './CartSummary';
import OrderDeliverySelf from './OrderDeliverySelf';
import OrderDeliveryCourier from './OrderDeliveryCourier';
import { CartContext } from '@/src/screens/CartScreen';

const OrderPage = () => {

    const { setPage, orderInfo, setOrderInfo } = useContext(CartContext);

    return (
        <main>
            <section className='bg-accent-1'>
                <div className='__container py-[90px]'>
                    <button className='flex items-center text-body hover:underline' onClick={() => setPage('cart')}>
                        <Icon icon='prime:chevron-left' className='mr-2 text-2xl' />
                        <span className=' leading-none'>Назад в корзину</span>
                    </button>
                    <h1 className='heading-2 text-main grow border-b-2 border-solid border-main-3 mt-[50px]'>
                        Оформление заказа
                    </h1>
                    <div className='grid grid-cols-12 gap-10 mt-[50px]'>
                        <div className='col-span-7'>
                            <h3 className='heading-3 text-main'>
                                Персональная информация
                            </h3>
                            <div className='grid grid-cols-2 gap-x-10 gap-y-5 mt-[30px]'>
                                <label>
                                    <span className='text-body-sm'>Имя</span>
                                    <input className='text-body-sm input-sm w-full mt-2' value={orderInfo.name} onChange={(e) => setOrderInfo({ ...orderInfo, name: e.target.value })} />
                                </label>
                                <label>
                                    <span className='text-body-sm'>Фамилия</span>
                                    <input className='text-body-sm input-sm w-full mt-2' value={orderInfo.surname} onChange={(e) => setOrderInfo({ ...orderInfo, surname: e.target.value })} />
                                </label>
                                <label>
                                    <span className='text-body-sm'>Контактный телефон</span>
                                    <input className='text-body-sm input-sm w-full mt-2' value={orderInfo.phoneNumber} onChange={(e) => setOrderInfo({ ...orderInfo, phoneNumber: e.target.value })} />
                                </label>
                            </div>
                            <h3 className='heading-3 text-main mt-[50px]'>
                                Способ доставки
                            </h3>
                            <div className='grid grid-cols-2 gap-x-10 gap-y-5 mt-[30px]'>
                                <button onClick={() => setOrderInfo({...orderInfo, deliveryType: 'Самовывоз'})}
                                    className={`border-[2px] border-solid ${orderInfo.deliveryType == 'self' ? 'border-main' : 'border-main-3'} bg-white py-5 px-[50px] rounded-[5px] flex items-center justify-center gap-5`}>
                                    <div className='w-6 h-6 border-2 border-solid border-main rounded-full flex justify-center items-center'>
                                        {
                                            orderInfo.deliveryType == 'Самовывоз' && <div className='w-3 h-3 rounded-full bg-main'></div>
                                        }
                                    </div>
                                    <span className='text-body-lg'>
                                        Самовывоз
                                    </span>
                                </button>
                                <button onClick={() => setOrderInfo({...orderInfo, deliveryType: 'Курьером'})}
                                    className={`border-[2px] border-solid ${orderInfo.deliveryType == 'courier' ? 'border-main' : 'border-main-3'} bg-white py-5 px-[50px] rounded-[5px] flex items-center justify-center gap-5`}>
                                    <div className='w-6 h-6 border-2 border-solid border-main rounded-full flex justify-center items-center'>
                                        {
                                            orderInfo.deliveryType == 'Курьером' && <div className='w-3 h-3 rounded-full bg-main'></div>
                                        }
                                    </div>
                                    <span className='text-body-lg'>
                                        Курьером
                                    </span>
                                </button>
                            </div>
                            {
                                orderInfo.deliveryType == 'Самовывоз' ? <OrderDeliverySelf className="mt-10" />
                                    : <OrderDeliveryCourier orderInfo={orderInfo} setOrderInfo={setOrderInfo} className="mt-10" />
                            }

                        </div>
                        <CartSummary className='col-span-5' />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default OrderPage