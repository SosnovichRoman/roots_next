import React from 'react'
import Link from 'next/link'

const EmptyPage = () => {
    return (
        <main className='bg-accent-1'>
            <section className='__container py-52 flex flex-col items-center'>
                <h2 className='heading-2 text-main text-center'>
                    Ваша корзина пуста
                </h2>
                <p className='text-body-lg mt-15'>
                    Для выбора растений перейдите в каталог
                </p>
                <Link href="/catalog" className='button-main-filled mt-15'>
                    Перейти в каталог
                </Link>
            </section>
        </main>
    )
}

export default EmptyPage