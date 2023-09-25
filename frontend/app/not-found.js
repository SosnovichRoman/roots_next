import Link from "next/link"

export default function page(){
    return(
        <main className='bg-accent-1'>
            <section className='__container py-52 flex flex-col items-center'>
                <h2 className='heading-2 text-main text-center'>
                    Ошибка 404
                </h2>
                <p className='text-body-lg mt-15'>
                Упс! Такая страница не найдена
                </p>
                <Link href="/" className='button-main-filled mt-15'>
                    Перейти на главную
                </Link>
            </section>
        </main>
    )
}