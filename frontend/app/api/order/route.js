import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');

export async function POST(request) {
    
    try {
        const data = await request.json();
        const transporter = new nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,

            secure: false,
            auth: {
                user: process.env.EMAIL_FROM,
                pass: process.env.EMAIL_FROM_PASS,
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false
            },
        });

        const deliveryInfoMessage = `Улица: ${data.orderInfo.deliveryInfo.street}, дом: ${data.orderInfo.deliveryInfo.house}, квартира: ${data.orderInfo.deliveryInfo.apartment}
        Дата доставки: ${data.orderInfo.deliveryInfo.deliveryDate}, время доставки: ${data.orderInfo.deliveryInfo.deliveryTime}`

        const cartListMessage = data.cartList.map((cartItem) => `
            ID товара: ${cartItem.product._id}, количество: ${cartItem.count}`);

        const message = {
            text: `Заказали обратный звонок.
                    Имя: ${data.orderInfo.name}, Фамилия: ${data.orderInfo.surname}, Телефон: ${data.orderInfo.phoneNumber}
                    Способ доставки: ${data.orderInfo.deliveryType}
                    ${data.orderInfo.deliveryType == 'Курьером' ? deliveryInfoMessage : ''}
                    Список товаров: ${cartListMessage}.`,
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: 'Roots заказ',
        }
        transporter.sendMail(message)

    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify(error), { status: 500 })
    }

    return new NextResponse(JSON.stringify('Done'), { status: 200 })
}