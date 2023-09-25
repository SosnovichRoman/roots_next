import React, { useContext } from 'react'
import CartProduct from './CartProduct';
import { CartContext } from '@/src/screens/CartScreen';

const CartProductList = ({ className }) => {

    const productList = useContext(CartContext).cartList;

    return (
        <div className={`${className}`}>
            {productList?.map((item) => <CartProduct item={item} key={item.product._id} />)}
        </div >
    )
}

export default CartProductList