'use client'
import React, { useState } from 'react'
import { RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'

const PriceFilter = ({ params, setParams }) => {

    const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 })

    return (
        <div className=' max-w-[15rem]'>
            <h3 className='heading-3'>
                Цена
            </h3>
            <div className='mt-4 mb-3 grid grid-cols-2 gap-5'>
                <div className=''>
                    <span className='text-body-sm'>От</span>
                    <input type='number' value={params.minPrice}
                        onChange={(e) => { setParams((params) => ({ ...params, minPrice: e.target.value })); setPriceFilter({ ...priceFilter, min: e.target.value }) }}
                        className='input-sm text-body-sm w-full mt-2' />
                </div>
                <div className=''>
                    <span className='text-body-sm'>До</span>
                    <input type='number' value={params.maxPrice}
                        onChange={(e) => { setParams((params) => ({ ...params, maxPrice: e.target.value })); setPriceFilter({ ...priceFilter, max: e.target.value }) }}
                        className='input-sm text-body-sm w-full mt-2' />
                </div>
            </div>
            <RangeSlider min={0} max={1000} aria-label={['min', 'max']} defaultValue={[params.minPrice, params.maxPrice]}
                onChange={([min, max]) => setPriceFilter({ min, max })}
                onChangeEnd={([min, max]) => setParams((params) => ({ ...params, minPrice: min, maxPrice: max }))}
                value={[priceFilter.min, priceFilter.max]}
            >
                <RangeSliderTrack bgColor={'main.300'}>
                    <RangeSliderFilledTrack bgColor={'main.100'} />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} boxSize={4} className='border-solid border-[1px] border-main-3' _focusVisible={{}} />
                <RangeSliderThumb index={1} boxSize={4} className='border-solid border-[1px] border-main-3' _focusVisible={{}} />
            </RangeSlider>
        </div>

    )
}

export default PriceFilter