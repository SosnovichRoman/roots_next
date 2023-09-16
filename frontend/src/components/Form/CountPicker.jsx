'use client'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const CountPicker = ({ value, onChange }) => {

    return (
        <div className='py-[10px] px-5 text-body leading-none flex gap-12 items-center relative bg-white border-[1px] border-solid border-main-3 rounded-[5px]'>
            <button onClick={() => onChange(-1)}>
                <Icon icon='prime:minus' />
            </button>
            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{value}</span>
            <button onClick={() => onChange(1)}>
               <Icon icon='prime:plus' /> 
            </button>
        </div>
    )
}

export default CountPicker