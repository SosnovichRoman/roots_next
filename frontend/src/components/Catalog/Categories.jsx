'use client'
import { Skeleton } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Categories = ({ setParams, params }) => {

    const [categories, setCategories] = useState([{ name: 'empty1', _id: 1 }, { name: 'empty2', _id: 2 }, { name: 'empty3', _id: 3 }]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/category').then((data) => setCategories(data.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
    }, [])

    return (
        <div className=''>
            <h3 className='heading-3'>
                Категории
            </h3>
            <div className='mt-4 space-y-4 text-body'>
                <Skeleton isLoaded={!loading} className='max-w-[15rem]'>
                    <button onClick={() => setParams((params) => ({ ...params, categoryId: '' }))}
                        className={`flex ${params.categoryId == '' ? 'underline font-bold text-main' : ''}`}
                    >Все категории</button>
                </Skeleton>
                {
                    categories.map((category) =>
                        <Skeleton key={category._id} isLoaded={!loading} className='max-w-[15rem]'>
                            <button onClick={() => setParams((params) => ({ ...params, categoryId: category._id }))}
                                className={`flex ${category?._id == params.categoryId ? 'underline font-bold text-main' : ''}`}
                            >
                                {category.name}
                            </button>
                        </Skeleton>)
                }
            </div>
        </div>
    )
}

export default Categories