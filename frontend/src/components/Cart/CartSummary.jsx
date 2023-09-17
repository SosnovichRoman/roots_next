import { CartContext } from '@/src/screens/CartScreen';
import React, { useContext } from 'react'

const DELIVERY_COST = 50;

const CartSummary = ({ className }) => {

    const { cartList, page, setPage, orderInfo } = useContext(CartContext);
    const totalCount = cartList.reduce((total, current) => total + current.count, 0);
    const totalPrice = cartList.reduce((total, current) => total + current.count * current.product?.price, 0);
    const totalOrder = totalPrice + (orderInfo.deliveryType == 'Самовывоз' ? 0 : DELIVERY_COST)

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
            <div className='flex justify-between gap-5 items-baseline'>
                <span className='text-body-sm'>Стоимость доставки:</span>
                <span className='text-body-lg font-semibold'>
                    {orderInfo.deliveryType == 'Самовывоз' ? 'Бесплатно' : `${DELIVERY_COST} BYN`}
                </span>
            </div>
            <div className='flex text-body-sm gap-5'>
                <input className='input-lg grow' />
                <button className='button-main-sm'>Применить</button>
            </div>
            <div className='flex justify-between gap-5 heading-3'>
                <span>Итого:</span>
                <span>{totalOrder} BYN</span>
            </div>
            {
                page == 'cart'
                    ? <button className='button-main-filled' onClick={() => setPage('order')}>
                        Перейти к оформлению
                    </button>
                    : <button className='button-main-filled' onClick={() => console.log('order done')}>
                        Оформить заказ
                    </button>
            }

        </div>
    )
}

export default CartSummary