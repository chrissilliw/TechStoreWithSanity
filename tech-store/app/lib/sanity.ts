import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'p0ii7u7c',
    dataset: 'production',
    apiVersion: '2024-04-18',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder =  imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}