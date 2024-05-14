import {defineField, defineType} from 'sanity';

export const categoryType = defineType({
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Category Name',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Category Slug',
            options: {
                source: 'name',
            }
        }),
    ]
})