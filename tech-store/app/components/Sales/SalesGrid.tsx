import React from "react";
import { getSalesProducts } from "@/services/sanityFetch";
import SalesCard from "./SalesCard";

const SalesGrid = async () => {
  const products = await getSalesProducts();
  return (
    <>
      <div className="mt-10 mx-auto w-[100%]">
        <h2 className="mb-5 text-center">Populära produkter</h2>
        <div className="w-full grid grid-cols-4 gap-4">
          {products.map((product) => (
            <SalesCard product={product} key={product._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SalesGrid;
