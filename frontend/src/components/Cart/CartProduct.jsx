import React, { useContext } from 'react'
import { Icon } from '@iconify/react'
import CountPicker from '../Form/CountPicker'
import { CartListContext } from '@/src/screens/CartScreen';

const CartProduct = ({ item = { product: {}, count: 1 } }) => {

    const { cartList, setCartList } = useContext(CartListContext);

    const deleteProduct = () => {
        const filteredList = cartList?.filter((listItem) => listItem?.product?._id != item?.product?._id);
        setCartList(filteredList);
    }

    const updateCount = (value) => {
        const updatedList = cartList.map((listItem) => {
            if (listItem.product?._id == item.product?._id) return { ...listItem, count: item.count += value }
            else return listItem;
        });
        setCartList(updatedList);
    }

    return (
        <div className='grid grid-cols-7 gap-[30px] pb-5 border-b-2 border-solid border-main-3'>
            <img className='col-span-2 aspect-square object-cover' src={item.product.image} alt={item.product.name} />
            <div className='col-span-5 flex gap-[30px]'>
                <div className='flex flex-col grow'>
                    <div className='grow'>
                        <h4 className='heading-4 text-main'>{item.product.name}</h4>
                        <p className='text-body-sm text-main-3'>{item.product.category?.name}</p>
                    </div>
                    <div className='mt-10 flex items-baseline gap-[10px]'>
                        <span className='text-body-sm text-main-3'>Размер:</span>
                        <span className='text-body-lg font-semibold'>{item.product.size?.name}</span>
                    </div>
                </div>
                <div className='h-full flex flex-col justify-between items-end gap-5'>
                    <Icon icon='prime:times' className='cursor-pointer text-[1.5rem]' onClick={deleteProduct} />
                    <CountPicker onChange={updateCount} value={item.count} />
                    <p className='heading-3 text-main'>{item.product.price} BYN</p>
                </div>
            </div>
        </div>
    )
}

export default CartProduct