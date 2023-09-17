import Link from 'next/link'
import React from 'react'

const DonePage = () => {
    return (
        <main className='bg-accent-1'>
            <section className='__container py-52 flex flex-col items-center'>
                <h2 className='heading-2 text-main text-center'>
                    Ваш заказ успешно оформлен!
                </h2>
                <p className='text-body-lg mt-15'>
                    С вами свяжется менеджер для подтверждения заказа.
                </p>
                <Link href="/catalog" className='button-main-filled mt-15'>
                    Перейти в каталог
                </Link>
            </section>
        </main>
    )
}

export default DonePage