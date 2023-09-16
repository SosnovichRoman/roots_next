import { CartListContext } from '@/src/screens/CartScreen'
import { Icon } from '@iconify/react'
import React, { useContext } from 'react'
import CartSummary from './CartSummary';

const OrderPage = () => {

    const { setPage, delivery, setDelivery } = useContext(CartListContext);

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
                                    <input className='text-body-sm input-sm w-full mt-2' />
                                </label>
                                <label>
                                    <span className='text-body-sm'>Фамилия</span>
                                    <input className='text-body-sm input-sm w-full mt-2' />
                                </label>
                                <label>
                                    <span className='text-body-sm'>Контактный телефон</span>
                                    <input className='text-body-sm input-sm w-full mt-2' />
                                </label>
                            </div>
                            <h3 className='heading-3 text-main mt-[50px]'>
                                Способ доставки
                            </h3>
                            <div className='grid grid-cols-2 gap-x-10 gap-y-5 mt-[30px]'>
                                <button onClick={() => setDelivery('self')}
                                    className={`border-[2px] border-solid ${delivery == 'self' ? 'border-main' : 'border-main-3'} bg-white py-5 px-[50px] rounded-[5px] flex items-center justify-center gap-5`}>
                                    <div className='w-6 h-6 border-2 border-solid border-main rounded-full flex justify-center items-center'>
                                        {
                                            delivery == 'self' && <div className='w-3 h-3 rounded-full bg-main'></div>
                                        }
                                    </div>
                                    <span className='text-body-lg'>
                                        Самовывоз
                                    </span>
                                </button>
                                <button onClick={() => setDelivery('courier')}
                                    className={`border-[2px] border-solid ${delivery == 'courier' ? 'border-main' : 'border-main-3'} bg-white py-5 px-[50px] rounded-[5px] flex items-center justify-center gap-5`}>
                                    <div className='w-6 h-6 border-2 border-solid border-main rounded-full flex justify-center items-center'>
                                        {
                                            delivery == 'courier' && <div className='w-3 h-3 rounded-full bg-main'></div>
                                        }
                                    </div>
                                    <span className='text-body-lg'>
                                        Курьером
                                    </span>
                                </button>
                            </div>

                        </div>
                        <CartSummary className='col-span-5' />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default OrderPage