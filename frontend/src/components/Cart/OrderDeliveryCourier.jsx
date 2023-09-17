'use client'
import { Select } from '@chakra-ui/react'
import React from 'react'

const OrderDeliveryCourier = ({ className, orderInfo, setOrderInfo }) => {
    return (
        <div className={`${className}`}>
            <h4 className='heading-4 text-main'>
                Адрес доставки
            </h4>
            <p className='text-body mt-5'>
                Доставка осуществляется только в пределах города Минска.
            </p>
            <div className='grid grid-cols-2 gap-x-10 gap-y-5 mt-5'>
                <label>
                    <span className='text-body-sm'>Улица</span>
                    <input value={orderInfo.deliveryInfo.street}
                        onChange={(e) => setOrderInfo({ ...orderInfo, deliveryInfo: { ...orderInfo.deliveryInfo, street: e.target.value } })}
                        className='text-body-sm input-sm w-full mt-2' />
                </label>
                <label>
                    <span className='text-body-sm'>Дом</span>
                    <input value={orderInfo.deliveryInfo.house}
                        onChange={(e) => setOrderInfo({ ...orderInfo, deliveryInfo: { ...orderInfo.deliveryInfo, house: e.target.value } })}
                        className='text-body-sm input-sm w-full mt-2' />
                </label>
                <label>
                    <span className='text-body-sm'>Квартира</span>
                    <input value={orderInfo.deliveryInfo.apartment}
                        onChange={(e) => setOrderInfo({ ...orderInfo, deliveryInfo: { ...orderInfo.deliveryInfo, apartment: e.target.value } })}
                        className='text-body-sm input-sm w-full mt-2' />
                </label>
            </div>
            <h4 className='heading-4 text-main mt-10'>
                Дата доставки
            </h4>
            <p className='text-body mt-5'>
                Курьер позвонит перед доставкой. При необходимости, он может оставить заказ у двери, либо передать вам лично в руки.
            </p>
            <div className='grid grid-cols-2 gap-x-10 gap-y-5 mt-5'>
                <label>
                    <span className='text-body-sm'>Дата доставки</span>
                    <Select value={orderInfo.deliveryInfo.deliveryDate} onChange={(e) => setOrderInfo({ ...orderInfo, deliveryInfo: { ...orderInfo.deliveryInfo, deliveryDate: e.target.value } })}
                        bg='white' className='text-body-sm input-sm w-full mt-2' _focusVisible={{}} _hover={{}}>
                        <option value="Сегодня">
                            Сегодня
                        </option>
                        <option value="Завтра">
                            Завтра
                        </option>
                    </Select>
                </label>
                <label>
                    <span className='text-body-sm'>Время доставки</span>
                    <Select value={orderInfo.deliveryInfo.deliveryTime} onChange={(e) => setOrderInfo({ ...orderInfo, deliveryInfo: { ...orderInfo.deliveryInfo, deliveryTime: e.target.value } })}
                        bg='white' className='text-body-sm input-sm w-full mt-2' _focusVisible={{}} _hover={{}}>
                        <option value="10:00 - 12:00">
                            10:00 - 12:00
                        </option>
                        <option value="12:00 - 16:00">
                            12:00 - 16:00
                        </option>
                    </Select>
                </label>
            </div>
        </div>
    )
}

export default OrderDeliveryCourier