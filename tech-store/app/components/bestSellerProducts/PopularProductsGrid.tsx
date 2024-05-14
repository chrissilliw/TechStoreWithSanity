"use client";
import { client } from "@/app/lib/sanity";
import { IProduct } from "@/app/models/IProduct";
import React, { useEffect, useState } from "react";
import PopularProductCard from "./PopularProductCard";

const PopularProductsGrid = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [image, setImage] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = "*[_type == 'product']";
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const query = `*[_type == 'product']{
            "imageUrl": images[0].asset->url
        }`;
        const data = await client.fetch(query);
        setImage(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchImage();
  }, []);

  //   console.log(image[0]);

  return (
    <>
      <div className="w-full grid grid-cols-5 gap-5">
        {products.map((product) => (
          <div className="col-span-1" key={product._id}>
            <PopularProductCard product={product} productImage={image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularProductsGrid;
