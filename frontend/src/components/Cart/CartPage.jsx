import React from 'react'
import CartProductList from './CartProductList'
import CartSummary from './CartSummary'

const CartPage = () => {
    return (
        <main>
            <section className='bg-accent-1'>
                <div className='__container py-[90px]'>
                    <h1 className='heading-2 text-main grow border-b-2 border-solid border-main-3'>
                        Корзина
                    </h1>
                    <div className='grid grid-cols-12 gap-[30px] mt-[50px]'>
                        <CartProductList className='col-span-7 space-y-10' />
                        <CartSummary className='col-span-5' />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CartPage