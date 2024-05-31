import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

//Client to connect to Sanity 
export const client = createClient({
    projectId: 'p0ii7u7c',
    dataset: 'production',
    apiVersion: '2024-04-18',
    token: process.env.SANITY_STUDIO_TOKEN,
    useCdn: false,
});

// Builder to create ImageURL from Sanity
const builder =  imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}