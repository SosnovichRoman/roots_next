'use client'
import React, { useEffect, useState } from 'react'
import CartPage from '../components/Cart/CartPage';
import OrderPage from '../components/Cart/OrderPage';
import DonePage from '../components/Cart/DonePage';
import { Spinner } from '@chakra-ui/react';
import EmptyPage from '../components/Cart/EmptyPage';

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

    const [isEmpty, setIsEmpty] = useState(false);
    const [loading, setLoading] = useState(true);
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
        setLoading(false);
        setCartList(JSON.parse(localStorage.getItem('cartList')));
    }, []);

    useEffect(() => {
        !cartList.length ? setIsEmpty(true) : setIsEmpty(false);
        localStorage.setItem('cartList', JSON.stringify(cartList));
    }, [cartList]);

    return (
        <CartContext.Provider value={{ cartList, setCartList, page, setPage, orderInfo, setOrderInfo }}>
            {
                loading ? <div className='flex justify-center py-64 bg-accent-1'>
                    <Spinner size="xl" />
                </div>
                    : isEmpty ? <EmptyPage />
                        : page == 'cart' ? <CartPage />
                            : page == 'order' ? <OrderPage />
                                : <DonePage />
            }
        </CartContext.Provider>

    )
}

export default CartScreen