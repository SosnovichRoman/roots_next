'use client'
import React, { useEffect, useState } from 'react'
import CartProductList from '../components/Cart/CartProductList'
import CartSummary from '../components/Cart/CartSummary'

export const CartListContext = React.createContext({
    cartList: [],
    setCartList: () => {}
});

const CartScreen = () => {

    const [cartList, setCartList] = useState([]);
    useEffect(() => {
        setCartList(JSON.parse(localStorage.getItem('cartList')));
    }, []);

    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList));
    }, [cartList]);

    return (
        <CartListContext.Provider value={{cartList, setCartList}}>
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
        </CartListContext.Provider>

    )
}

export default CartScreen