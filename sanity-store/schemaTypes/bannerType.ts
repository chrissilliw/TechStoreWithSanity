import {defineField, defineType} from 'sanity';

export const bannerType = defineType({
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'name',
            title: 'Namn',
            type: 'string',
        }),
        defineField({
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        }),
        defineField({
            name: 'product',
            title: 'Product',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'smallText',
            title: 'SmallText',
            type: 'string',
        }),
        defineField({
            name: 'midText',
            title: 'MidText',
            type: 'string',
        }),
        defineField({
            name: 'largeText1',
            title: 'LargeText1',
            type: 'string',
        }),
        defineField({
            name: 'largeText2',
            title: 'LargeText2',
            type: 'string',
        }),
        defineField({
            name: 'discount',
            title: 'Discount',
            type: 'string',
        }),
        defineField({
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string',
        })
    ]
})