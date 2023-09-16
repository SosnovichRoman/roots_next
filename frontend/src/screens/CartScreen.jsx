'use client'
import React, { useEffect, useState } from 'react'
import CartPage from '../components/Cart/CartPage';
import OrderPage from '../components/Cart/OrderPage';

export const CartListContext = React.createContext({
    cartList: [],
    setCartList: () => { },
    page: 'cart',
    setPage: () => { },
    delivery: 'self',
    setDelivery: () => { },
});

const CartScreen = () => {

    const [cartList, setCartList] = useState([]);
    const [page, setPage] = useState('order');
    const [delivery, setDelivery] = useState('self');
    useEffect(() => {
        setCartList(JSON.parse(localStorage.getItem('cartList')));
    }, []);

    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList));
    }, [cartList]);

    return (
        <CartListContext.Provider value={{ cartList, setCartList, page, setPage, delivery, setDelivery }}>
            {
                page == 'cart' ? <CartPage />
                : <OrderPage />
            }
        </CartListContext.Provider>

    )
}

export default CartScreen