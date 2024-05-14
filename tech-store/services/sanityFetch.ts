import { client } from "@/app/lib/sanity";
import { IBanner } from "@/app/models/IBanner";
import { ICategory } from "@/app/models/ICategory";
import { IProduct } from "@/app/models/IProduct";

// Get Hero Banner
export const getHeroBanner = async () => {
  const query = `*[_type == 'banner' && name == 'Hero Banner']{
    _id,
    name,
      product,
      smallText,
      midText,
      buttonText,
      largeText1,
      largeText2,
      discount,
      "imageUrl": image.asset->url,
  }`;

  const data = await client.fetch(query);
  const fetchedData: IBanner[] = await data;
  const banner = fetchedData[0];
  return banner;
}

// Get Sales Banner
export const getSalesBanner = async () => {
  const query = `*[_type == 'banner' && name == 'Sales Banner'][0]{
    _id,
    name,
      product,
      smallText,
      midText,
      buttonText,
      largeText1,
      largeText2,
      discount,
      description,
      "imageUrl": image.asset->url,
  }`;

  const data = await client.fetch(query);
  const banner: IBanner = data;
  return banner;
}

// Get Banner Data
export const getBannerData = async (bannerName: string) => {
  const query = `*[_type == 'banner' && name == '${bannerName}']{
    _id,
    name,
      product,
      smallText,
      midText,
      buttonText,
      largeText1,
      largeText2,
      discount,
      "imageUrl": image.asset->url,
  }`;

  const data = await client.fetch(query);
  const fetchedData: IBanner[] = await data;
  const banner = fetchedData[0];
  return banner;
}

// Get all Products
export const getSalesProducts = async () => {
    const query = `*[_type == 'product'][0...4]{
        _id,
          name,
          shortName,
          price,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url,
            brand, 
          description,
      }`;

    const data = await client.fetch(query);
    const products: IProduct[] = await data;
    return products;
}

// Get all Products
export const getProducts = async (categoryName: string) => {
  const query = `*[_type == 'product' && category->name == '${categoryName}']{
    _id,
      "imageUrl": images[0].asset->url,
      price,
      name,
      shortName,
      "slug": slug.current,
      "categoryName": category->name,
      "categorySlug": category->slug.current,
      }`;

  const data = await client.fetch(query);
  const products: IProduct[] = await data;
  return products;
}

// Get Single Product 
export const getSingleProduct = async (slug: string) => {
  const query = ` *[_type == 'product' && slug.current == "${slug}"][0]{
    _id,
      images,
      price,
      name,
      description,
      brand,
      "slug": slug.current,
      "categorySlug": category->slug.current,
      "categoryName": category->name
  }`;

  const data = await client.fetch(query);
  const product: IProduct = await data;
  return product;
}

// Get all Headphones
export const getHeadphones = async () => {
  const query = `*[_type == 'product']{
    _id,
      name,
      shortName,
      price,
      "slug": slug.current,
      "categoryName": category->name,
      "imageUrl": images[0].asset->url,
        brand, 
      description,
  }`;

const data = await client.fetch(query);
const products: IProduct[] = await data;
return products;
}

// Get all Categories
export const getCategories = async () => {
  const query = `*[_type == 'category']{
    name,
      "imageUrl":image.asset->url,
      "slug": slug.current,
  }`;

  const data = await client.fetch(query);
  const categories: ICategory[] = await data;
  return categories;
}
