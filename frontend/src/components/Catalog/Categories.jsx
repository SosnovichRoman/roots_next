'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Categories = ({ setParams, params }) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('/api/category').then((data) => setCategories(data.data)).catch((err) => console.log(err))
    }, [])

    return (
        <div className=''>
            <h3 className='heading-3'>
                Категории
            </h3>
            <div className='mt-6 space-y-4 text-body'>
                <button onClick={() => setParams((params) => ({ ...params, categoryId: '' }))}
                    className={`flex ${params.categoryId == '' ? 'underline font-bold text-main' : ''}`}
                >Все категории</button>
                {
                    categories.map((category) =>
                        <button key={category._id} onClick={() => setParams((params) => ({ ...params, categoryId: category._id }))}
                            className={`flex ${category?._id == params.categoryId ? 'underline font-bold text-main' : ''}`}
                        >
                            {category.name}
                        </button>)
                }
            </div>
        </div>
    )
}

export default Categories