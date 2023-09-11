export default {
    name: 'product',
    title: 'Товар',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Название',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Описание',
            type: 'string'
        },
        {
            name: 'category',
            title: 'Категория',
            type: 'reference',
            to: [
                { type: 'category' }
            ]
        },
        {
            name: 'size',
            title: 'Размер',
            type: 'reference',
            to: [
                { type: 'size' }
            ]
        },
        {
            name: 'mainImage',
            title: 'Главное изображение',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'images',
            title: 'Изображения',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                }
            ],
        },
        {
            name: 'price',
            title: 'Цена',
            type: 'number'
        },
    ]
}