'use client'
import React from 'react'
import { Select } from '@chakra-ui/react'

const SortSelect = ({ setParams }) => {
    return (
        <div className='flex gap-6 mt-[50px] items-baseline'>
            <h3 className='heading-3'>Сортировать по:</h3>
            <Select className='text-body' variant='unstyled' w={'fit-content'} onChange={(e) => setParams((params) => ({...params, order: e.target.value}))}>
                <option value=''>По умолчанию</option>
                <option value='| order(price desc)'>Убыванию цены</option>
                <option value='| order(price asc)'>Возрастанию цены</option>
            </Select>
        </div>
    )
}

export default SortSelect