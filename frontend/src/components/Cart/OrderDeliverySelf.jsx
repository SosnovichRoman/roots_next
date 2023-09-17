import React from 'react'

const OrderDeliverySelf = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h4 className='heading-4 text-main'>
        Адрес самовывоза
      </h4>
      <p className='text-body mt-5'>
        Самовывоз осуществляется по адресу: ул. Петруся Бровки, дом 32а.
        <br />
        Время работы: 10:00-18:00, пн-пт.
      </p>
      <iframe className='mt-5'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.9491356013955!2d27.56849706524735!3d53.9148797594938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfb41942d09b%3A0x42ca0d01c03ecd66!2z0KHQsNC70L7QvSDRhtCy0LXRgtC-0LIgRXZhIEZsb3I!5e0!3m2!1sru!2sby!4v1694965210634!5m2!1sru!2sby"
        width="100%" height="500" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default OrderDeliverySelf