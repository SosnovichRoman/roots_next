'use client'
import { navigationLinks } from '@/src/constants/links'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <section className='bg-main text-white'>
      <div className='__container'>
        <div className='pt-[90px] pb-[50px] grid grid-cols-12 gap-[30px]'>
          <div className='col-span-4 pr-10'>
            <Link href='/' >
              <img className='h-[45px]' src="/img/common/logo.svg" alt='logo' />
            </Link>
            <p className='text-body mt-[30px]'>
              RootS - магазин суккулентов. <br />
              Мы тщательно следим за качеством наших растений, а так же за обслуживанием наших клиентов.
            </p>
            <h4 className='heading-4 mt-[30px]'>
              Подпишитесь на наш инстаграм
            </h4>
            <Link href="" className='mt-3 flex items-center gap-4 hover:underline'>
              <Icon icon="prime:instagram" className='text-4xl leading-none' />
              <span className='text-body'>@roots_plants</span>
            </Link>
          </div>
          <div className='col-span-2'>
            <h3 className='heading-3'>
              Меню
            </h3>
            <nav>
              <ul className='mt-[30px] space-y-5 text-body'>
                {
                  navigationLinks.map((link, index) => <li key={index}><Link href={link.href} className='hover:underline'>{link.title}</Link></li>)
                }
              </ul>
            </nav>
          </div>
          <div className='col-span-3'>
            <h3 className='heading-3'>
              Покупателям
            </h3>
            <nav>
              <ul className='mt-[30px] space-y-5 text-body'>
                <li><Link href="" className='hover:underline'>Доставка и оплата</Link></li>
                <li><Link href="" className='hover:underline'>Пункты самовывоза</Link></li>
                <li><Link href="" className='hover:underline'>Часто задаваемые вопросы</Link></li>
                <li><Link href="" className='hover:underline'>Гарантия и обмен</Link></li>
              </ul>
            </nav>
          </div>
          <div className='col-span-3'>
            <h3 className='heading-3'>
              Контакты
            </h3>

            <ul className='mt-[30px] space-y-5 text-body'>
              <li className='flex gap-4 items-center'>
                <Icon icon="prime:map-marker" className='text-4xl leading-none' />
                <span>г. Минск, ул. П. Бровки, дом 32а, офис 16</span>
              </li>
              <li>
                <a href='tel:+375 (44) 573-89-29' className='hover:underline flex gap-4 items-center'>
                  <Icon icon="prime:phone" className='text-4xl leading-none' />
                  <span>+375 (44) 573-89-29</span>
                </a>
              </li>
              <li>
                <a href='mailto:sosnovichroman@gmail.com' className='hover:underline flex gap-4 items-center'>
                  <Icon icon="prime:envelope" className='text-4xl leading-none' />
                  <span>sosnovichroman@gmail.com</span>
                </a>
              </li>
              <li className='flex gap-4 items-center'>
                <Icon icon="prime:clock" className='text-4xl leading-none' />
                <span>Пн-пт 10:00 - 18:00</span>
              </li>
            </ul>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer