import React from 'react'
import Link from 'next/link'

const HomeHero = () => {
    return (
        <section className='relative h-[720px]'>
            <img className='absolute inset-0 w-full h-full' src="/img/home/hero-bg.png" alt="" />
            <div className='__container h-full flex items-center'>
                <div className='glass p-10 rounded-[20px] max-w-[600px] space-y-10 flex flex-col items-start'>
                    <h1 className='heading-2 text-main'>
                        Создайте идеальный уголок природы
                    </h1>
                    <p className='text-body'>
                        Растения - наша страсть, и мы хотим поделиться ею с Вами. Мы поможем найти суккулент, который принесет счастье в Ваш дом.
                    </p>
                    <Link href="/catalog" className='button-main-filled'>
                        Перейти в каталог
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HomeHero