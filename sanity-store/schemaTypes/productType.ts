import {defineField, defineType} from 'sanity';

export const productType = defineType({
        name: 'product',
        title: 'Product',
        type: 'document',
        fields: [
            defineField({
                name: 'name',
                type: 'string',
                title: 'Name',
            }),
            defineField({
                name: 'shortName',
                type: 'string',
                title: 'Short Name',
            }),
            defineField({
                name: 'images',
                type: 'array',
                of: [{type: 'image'}],
                title: 'Product Images',
            }),
            defineField({
                name: 'brand',
                type: 'string',
                title: 'Brand',
            }),
            defineField({
                name: 'description',
                type: 'text',
                title: 'Product Description',
            }),
            defineField({
                name: 'slug',
                type: 'slug',
                title: 'Product Slug',
                options: {
                    source: 'name',
                }
            }),
            defineField({
                name: 'price',
                type: 'number',
                title: 'Price'
            }),
            defineField({
                name: 'category',
                title: 'Product Category',
                type: 'reference',
                to: [
                    {
                        type: 'category'
                    }
                ]
            })
        ],
})