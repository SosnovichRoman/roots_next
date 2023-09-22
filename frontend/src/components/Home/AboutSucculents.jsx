import Link from 'next/link'
import React from 'react'

const AboutSucculents = () => {
    return (
        <section className='bg-accent-1 py-20'>
            <div className='__container grid grid-cols-2 gap-[30px]'>
                <div className='text-body space-y-6 flex flex-col items-start'>
                    <h2 className='heading-2 text-main'>
                        Немного о суккулентах
                    </h2>
                    <p>
                        Суккуленты – это очень простые в уходе и обаятельные растения родом из Африки.
                        В своих маленьких пухлых листьях они способны сохранять столько влаги, сколько хватит, чтобы пережить самое жарко африканское лето.
                    </p>
                    <div className=''>
                        <span>Эти растения обладают рядом несомненных плюсов:</span>
                        <ul className='pl-2 mt-4'>
                            <li className='flex items-center gap-4 before:rounded-full before:w-2 before:h-2 before:bg-main-3'>Неприхотливы к почве</li>
                            <li className='flex items-center gap-4 before:rounded-full before:w-2 before:h-2 before:bg-main-3'>Могут долго обходиться без воды</li>
                            <li className='flex items-center gap-4 before:rounded-full before:w-2 before:h-2 before:bg-main-3'>Безразличны большинству насекомых</li>
                        </ul>
                    </div>
                    <p>Вы найдете в нашем каталоге суккулент на любой вкус и цвет!</p>
                    <Link href="/catalog" className='button-main-filled'>
                        Перейти в каталог
                    </Link>
                </div>
                <div className='relative'>
                    <img src='/img/home/about-succulents.jpg' alt='Суккулент' className='absolute inset-0 w-full h-full object-cover' />
                </div>
            </div>
        </section>
    )
}

export default AboutSucculents