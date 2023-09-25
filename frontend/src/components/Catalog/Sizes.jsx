'use client'
import { Skeleton, SkeletonText } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Sizes = ({ setParams, params }) => {

    const [sizes, setSizes] = useState([{ name: 'empty1', _id: 1 }, { name: 'empty2', _id: 2 }, { name: 'empty3', _id: 3 }]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/size').then((data) => setSizes(data.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
    }, [])

    return (
        <div className=''>
            <h3 className='heading-3'>
                Размеры
            </h3>
            <div className='mt-4 space-y-4 text-body'>
                <Skeleton isLoaded={!loading} className='max-w-[15rem]'>
                    <button onClick={() => setParams((params) => ({ ...params, sizeId: '' }))}
                        className={`flex ${params.sizeId == '' ? 'underline font-bold text-main' : ''}`}
                    >Все размеры</button>
                </Skeleton>

                {
                    sizes.map((size) =>
                        <Skeleton key={size._id} isLoaded={!loading} className='max-w-[15rem]'>
                            <button onClick={() => setParams((params) => ({ ...params, sizeId: size._id }))}
                                className={`flex ${size?._id == params.sizeId ? 'underline font-bold text-main' : ''}`}
                            >
                                {size.name}
                            </button>
                        </Skeleton>)
                }
            </div>
        </div>
    )
}

export default Sizes