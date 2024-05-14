export interface IProduct {
    _id: string;
    name: string;
    shortName: string;
    price: number;
    slug: string;
    categoryName: string,
    categorySlug: string,
    imageUrl: string;
    images: any;
    brand: string;
    description: string;
}