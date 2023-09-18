'use client'
import React, { useEffect, useState } from 'react'
import CartPage from '../components/Cart/CartPage';
import OrderPage from '../components/Cart/OrderPage';
import DonePage from '../components/Cart/DonePage';

export const CartContext = React.createContext({
    cartList: [],
    setCartList: () => { },
    page: 'cart',
    setPage: () => { },
    orderInfo: {
        name: '',
        surname: '',
        phoneNumber: '',
        deliveryType: 'Самовывоз',
        deliveryInfo: {
            street: '',
            house: '',
            apartment: '',
            deliveryDate: 'Сегодня',
            deliveryTime: '10:00 - 12:00'
        },
    },
    setOrderInfo: () => { }
});

const CartScreen = () => {

    const [cartList, setCartList] = useState([]);
    const [page, setPage] = useState('cart');
    const [orderInfo, setOrderInfo] = useState({
        name: '',
        surname: '',
        phoneNumber: '',
        deliveryType: 'Самовывоз',
        deliveryInfo: {
            street: '',
            house: '',
            apartment: '',
            deliveryDate: 'Сегодня',
            deliveryTime: '10:00 - 12:00'
        },
    });

    useEffect(() => {
        setCartList(JSON.parse(localStorage.getItem('cartList')));
    }, []);

    useEffect(() => {
        localStorage.setItem('cartList', JSON.stringify(cartList));
    }, [cartList]);

    return (
        <CartContext.Provider value={{ cartList, setCartList, page, setPage, orderInfo, setOrderInfo }}>
            {
                page == 'cart' ? <CartPage />
                    : page == 'order' ? <OrderPage />
                    : <DonePage />
            }
        </CartContext.Provider>

    )
}

export default CartScreen