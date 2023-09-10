'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Sizes = ({ setParams, params }) => {

    const [sizes, setSizes] = useState([])

    useEffect(() => {
        axios.get('/api/size').then((data) => setSizes(data.data)).catch((err) => console.log(err))
    }, [])

    return (
        <div className=''>
            <h3 className='heading-3'>
                Категории
            </h3>
            <div className='mt-6 space-y-4 text-body'>
                <button onClick={() => setParams((params) => ({ ...params, sizeId: '' }))}
                    className={`flex ${params.sizeId == '' ? 'underline font-bold text-main' : ''}`}
                >Все размеры</button>
                {
                    sizes.map((size) =>
                        <button onClick={() => setParams((params) => ({ ...params, sizeId: size._id }))}
                            className={`flex ${size?._id == params.sizeId ? 'underline font-bold text-main' : ''}`}
                        >
                            {size.name}
                        </button>)
                }
            </div>
        </div>
    )
}

export default Sizes