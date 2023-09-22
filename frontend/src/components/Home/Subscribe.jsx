import React from 'react'

const Subscribe = () => {
    return (
        <section className='relative py-[70px]'>
            <img src='/img/home/subscribe.jpg' alt='' className='absolute inset-0 h-full w-full object-cover' />
            <div className='__container'>
                <div className='glass p-10 rounded-[20px] max-w-[620px] space-y-10'>
                    <h3 className='heading-3 text-main'>
                        Получите скидку -10% на первый заказ
                    </h3>
                    <p className='text-body'>
                        Подписавшись на нашу рассылку вы так же получите доступ к специальным акциям и предложениям.
                    </p>
                    <label className='block'>
                        <span>Введите email:</span>
                        <div className='flex text-body-sm gap-5 mt-2'>
                            <input className='input-lg grow' placeholder='Ваш email' />
                            <button className='button-main-sm-filled'>Отправить</button>
                        </div>
                    </label>
                </div>
            </div>
        </section>
    )
}

export default Subscribe