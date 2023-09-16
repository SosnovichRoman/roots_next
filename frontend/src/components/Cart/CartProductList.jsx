'use client'
import React, { useContext, useEffect, useState } from 'react'
import CartProduct from './CartProduct';
import { CartListContext } from '@/src/screens/CartScreen';

const CartProductList = ({ className }) => {

    const productList = useContext(CartListContext).cartList;

    return (
        <div className={`${className}`}>
            {productList.map((item) => <CartProduct item={item} key={item.product._id} />)}
        </div >
    )
}

export default CartProductList