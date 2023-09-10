'use client'
import React, { useEffect, useState } from 'react'
import CatalogGrid from '../components/Catalog/CatalogGrid'
import { Select } from '@chakra-ui/react'
import axios from 'axios'
import Categories from '../components/Catalog/Categories'
import Sizes from '../components/Catalog/Sizes'
import SortSelect from '../components/Catalog/SortSelect'
import PriceFilter from '../components/Catalog/PriceFilter'

const CatalogScreen = () => {

  const [params, setParams] = useState({
    categoryId: '',
    sizeId: '',
    order: '',
    minPrice: 0,
    maxPrice: 1000,
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [controller, setController] = useState(new AbortController());

  const fetchProduct = async () => {
    controller.abort();
    const newController = new AbortController()
    setController(newController);
    setLoading(true);
    try {
      const response = await axios.get('/api/product', { params: params, signal: newController.signal});
      setProducts(response.data);
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProduct()
  }, [params]);

  return (
    <main>
      <section className='bg-accent-1'>
        <div className='__container py-[90px]'>
          <h2 className='heading-2 text-main grow border-b-2 border-solid border-main-3'>Каталог</h2>
          <div className='grid grid-cols-4 gap-[30px]'>
            <div className='mt-[50px] space-y-[30px]'>
              <Categories setParams={setParams} params={params} />
              <Sizes setParams={setParams} params={params} />
              <PriceFilter setParams={setParams} params={params} />
            </div>
            <div className='col-span-3'>
              <SortSelect setParams={setParams} />
              <CatalogGrid products={products} loading={loading} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CatalogScreen