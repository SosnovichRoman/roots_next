'use client'
import React, { useState } from 'react'
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'

const PriceFilter = ({ params, setParams }) => {

    const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 })

    return (
        <div className=' max-w-[15rem]'>
            <RangeSlider min={0} max={1000} aria-label={['min', 'max']} defaultValue={[params.minPrice, params.maxPrice]}
                onChange={([min, max]) => setPriceFilter({min, max})}
                onChangeEnd={([min, max]) => setParams((params) => ({ ...params, minPrice: min, maxPrice: max }))}
            >
                <RangeSliderTrack bgColor={'main.300'}>
                    <RangeSliderFilledTrack bgColor={'main.100'} />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} boxSize={4} className='border-solid border-[1px] border-main-3' _focusVisible={{}} />
                <RangeSliderThumb index={1} boxSize={4} className='border-solid border-[1px] border-main-3' _focusVisible={{}} />
            </RangeSlider>
            <div className='mt-3 flex justify-between text-body'>
                <span>{priceFilter?.min}</span>
                <span>{priceFilter?.max}</span>
            </div>
        </div>

    )
}

export default PriceFilter