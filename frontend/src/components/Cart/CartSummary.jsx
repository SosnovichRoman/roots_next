import { CartListContext } from '@/src/screens/CartScreen'
import React, { useContext } from 'react'

const CartSummary = ({ className }) => {

    const cartList = useContext(CartListContext).cartList;
    const totalCount = cartList.reduce((total, current) => total + current.count, 0);
    const totalPrice = cartList.reduce((total, current) => total + current.count * current.product?.price, 0);

    return (
        <div className={`space-y-5 flex flex-col p-10 border-2 border-main-3 border-solid rounded-[5px] bg-white h-fit ${className}`}>
            <h3 className='heading-3 text-main'>Ваш заказ</h3>
            <div className='flex justify-between gap-5 items-baseline'>
                <span className='text-body-sm'>Товаров:</span>
                <span className='text-body-lg font-semibold'>{totalCount}</span>
            </div>
            <div className='flex justify-between gap-5 items-baseline'>
                <span className='text-body-sm'>Стоимость товаров:</span>
                <span className='text-body-lg font-semibold'>{totalPrice} BYN</span>
            </div>
            {/* <div className='flex justify-between gap-5 items-baseline'>
                <span className='text-body-sm'>Стоимость доставки:</span>
                <span className='text-body-lg font-semibold'>150 BYN</span>
            </div> */}
            <div className='flex text-body-sm gap-5'>
                <input className='input-lg grow' />
                <button className='button-main-sm'>Применить</button>
            </div>
            <div className='flex justify-between gap-5 heading-3'>
                <span>Итого:</span>
                <span>{totalPrice} BYN</span>
            </div>
            <button className='button-main-filled '>
                Перейти к оформлению
            </button>
        </div>
    )
}

export default CartSummary