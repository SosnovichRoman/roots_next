import Link from 'next/link'
import React from 'react'
import PopularProducts from '../components/Home/PopularProducts'
import Catalog from '../components/Catalog/Catalog'

const HomeScreen = () => {
  return (
    <main>
      <section className='relative h-screen -mt-[5rem]'>
        <img className='absolute inset-0 w-full h-full' src="/img/home/hero-bg.png" alt="" />
        <div className='__container relative z-10 h-full flex justify-center items-center gap-15 flex-col'>
          <img className='max-w-[573px] w-full' src='/img/home/hero-logo.svg' alt='' />
          <Link href='/catalog' className='button-white text-neutral-main font-semibold font-comfortaa text-xl leading-auto'>
            Перейти к каталогу
          </Link>
        </div>
      </section>
      <PopularProducts />
      <Catalog />
    </main>
  )
}

export default HomeScreen