// import { createClient } from "@sanity/client";
import { createClient } from "next-sanity";
import imageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    apiVersion: "2024-04-18",
    dataset: "production",
    projectId: "p0ii7u7c",
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}