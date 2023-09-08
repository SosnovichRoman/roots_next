'use client'
import React from 'react'
import { products } from '@/src/constants/fakeData'
import CatalogGrid from '../components/Catalog/CatalogGrid'
import { Select, SelectField } from '@chakra-ui/react'

const CatalogScreen = () => {
  return (
    <main>
      <section className='bg-accent-1'>
        <div className='__container py-[90px]'>
          <h2 className='heading-2 text-main grow border-b-2 border-solid border-main-3'>Каталог</h2>
          <div className='grid grid-cols-4 gap-[30px]'>
            <div className='mt-[50px]'>
              <div className=''>
                <h3 className='heading-3'>
                  Категории
                </h3>
                <ul className='mt-6 space-y-4 text-body'>
                  <li>Все</li>
                  <li>Мухоловка</li>
                  <li>Кактусы</li>
                  <li>Молочай</li>
                  <li>Гимнокалициум</li>
                  <li>Крассула</li>
                  <li>Пеперомия</li>
                </ul>
              </div>
            </div>
            <div className='col-span-3'>
              <div className='flex gap-6 mt-[50px] items-baseline'>
                <h3 className='heading-3'>Сортировать по:</h3>
                <Select className='text-body' variant='unstyled' w={'fit-content'}>
                  <option>Популярности</option>
                  <option>Убыванию цены</option>
                  <option>Возрастанию цены</option>
                </Select>
              </div>

              <CatalogGrid products={products} />
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default CatalogScreen