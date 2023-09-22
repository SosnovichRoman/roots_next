import React from 'react'

const WhyRoots = () => {
    return (
        <section className='bg-accent-1 py-15'>
            <div className='__container'>
                <h2 className='heading-2 text-main text-center'>
                    Почему выбитают Roots?
                </h2>
                <div className='grid grid-cols-3 gap-[30px] mt-10'>
                    <div className='space-y-5 flex flex-col items-center'>
                        <img className='h-[100px] w-[100px]' src='/img/home/why-us/01.svg' alt='' />
                        <h3 className='heading-3 text-main text-center'>
                            Гарантия качества
                        </h3>
                        <p className='text-body text-center'>
                            Мы получаем растения напрямую от фермеров, а наши флористы тщательно следят за условиями их произростания.
                        </p>
                    </div>
                    <div className='space-y-5 flex flex-col items-center'>
                        <img className='h-[100px] w-[100px]' src='/img/home/why-us/02.svg' alt='' />
                        <h3 className='heading-3 text-main text-center'>
                            Доставка до двери
                        </h3>
                        <p className='text-body text-center'>
                            Доставим Ваш заказ в любую точку Беларусив течении двух недель.
                        </p>
                    </div>
                    <div className='space-y-5 flex flex-col items-center'>
                        <img className='h-[100px] w-[100px]' src='/img/home/why-us/03.svg' alt='' />
                        <h3 className='heading-3 text-main text-center'>
                            Помощь в уходе
                        </h3>
                        <p className='text-body text-center'>
                            При покупке суккулента вы получите пособие по уходу за растением.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyRoots