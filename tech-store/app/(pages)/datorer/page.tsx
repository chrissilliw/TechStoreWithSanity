"use client";
import ProductBanner from "@/app/components/Banner/ProductBanner";
import ProductGrid from "@/app/components/Products/ProductGrid";
import { IBanner } from "@/app/models/IBanner";
import { IProduct } from "@/app/models/IProduct";
import { getBannerData, getProducts } from "@/services/sanityFetch";
import React, { useEffect, useState } from "react";

const SmartwatchPage = async () => {
  const [banner, setBanner] = useState<IBanner>();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    // Fetch Product Banner
    const fetchData = async () => {
      try {
        const bannerData = await getBannerData("Computer Banner");
        setBanner(bannerData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts("Datorer");
        setProducts(products);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ProductBanner banner={banner} />
      <ProductGrid products={products} />
    </>
  );
};

export default SmartwatchPage;
